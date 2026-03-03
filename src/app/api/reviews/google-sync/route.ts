import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

const PLACE_DATA_ID = '0x12b6afdf27033bc1:0xdb10b499d54701e6'

interface SerpReview {
  user?: { name?: string; thumbnail?: string }
  rating?: number
  snippet?: string
  date?: string
  iso_date?: string
  likes?: number
  source?: string
}

export async function POST() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const apiKey = process.env.SERPAPI_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Clé SERPAPI_KEY manquante. Ajoutez-la dans les variables d\'environnement.' },
      { status: 400 }
    )
  }

  try {
    // Fetch all reviews from SerpApi (paginated)
    const allReviews: SerpReview[] = []
    let nextPageToken: string | null = null
    let page = 0

    do {
      const params = new URLSearchParams({
        engine: 'google_maps_reviews',
        data_id: PLACE_DATA_ID,
        api_key: apiKey,
        hl: 'fr',
        sort_by: 'newestFirst',
      })
      if (nextPageToken) params.set('next_page_token', nextPageToken)

      const res = await fetch(`https://serpapi.com/search.json?${params}`)
      const data = await res.json()

      if (data.error) {
        return NextResponse.json({ error: `SerpApi: ${data.error}` }, { status: 400 })
      }

      if (data.reviews && Array.isArray(data.reviews)) {
        allReviews.push(...data.reviews)
      }

      nextPageToken = data.serpapi_pagination?.next_page_token ?? null
      page++
    } while (nextPageToken && page < 10) // Max 10 pages (~100 reviews safety limit)

    if (allReviews.length === 0) {
      return NextResponse.json({ imported: 0, skipped: 0, message: 'Aucun avis trouvé' })
    }

    // Get existing reviews to deduplicate
    const existing = await prisma.review.findMany({
      where: { source: 'google' },
      select: { authorName: true, rating: true },
    })
    const existingSet = new Set(
      existing.map(r => `${r.authorName.toLowerCase()}|${r.rating}`)
    )

    const maxOrder = await prisma.review.aggregate({ _max: { order: true } })
    let nextOrder = (maxOrder._max.order || 0) + 1
    let imported = 0
    let skipped = 0

    for (const review of allReviews) {
      const authorName = review.user?.name || 'Anonyme'
      const rating = review.rating || 5
      const key = `${authorName.toLowerCase()}|${rating}`

      if (existingSet.has(key)) {
        skipped++
        continue
      }

      const text = review.snippet || ''
      const time = review.iso_date ? new Date(review.iso_date) : new Date()

      await prisma.review.create({
        data: {
          authorName,
          authorPhoto: review.user?.thumbnail || null,
          rating: Math.min(5, Math.max(1, rating)),
          text: text || null,
          time,
          source: 'google',
          sourceUrl: null,
          photos: [],
          verified: true,
          visible: true,
          order: nextOrder++,
        },
      })

      existingSet.add(key)
      imported++
    }

    return NextResponse.json({
      imported,
      skipped,
      total: allReviews.length,
      message: `${imported} avis importés, ${skipped} doublons ignorés`,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors de la synchronisation'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
