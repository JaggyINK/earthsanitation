import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import {
  getAllReviews,
  getVisibleReviews,
  createReview,
  reorderReviews,
  getReviewsStats,
} from '@/lib/reviews-store'

// GET - Liste des avis
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const visibleOnly = searchParams.get('visible') === 'true'
  const stats = searchParams.get('stats') === 'true'

  if (stats) {
    return NextResponse.json(getReviewsStats())
  }

  const reviews = visibleOnly ? getVisibleReviews() : getAllReviews()
  return NextResponse.json(reviews)
}

// POST - Créer un avis ou réordonner
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  try {
    const body = await request.json()

    // Si c'est une demande de réordonnancement
    if (body.reorder && Array.isArray(body.orderedIds)) {
      reorderReviews(body.orderedIds)
      return NextResponse.json({ success: true })
    }

    // Sinon c'est une création d'avis
    const { authorName, rating, text, date, source } = body

    if (!authorName || !rating || !text || !date || !source) {
      return NextResponse.json(
        { error: 'Champs requis : authorName, rating, text, date, source' },
        { status: 400 }
      )
    }

    const newReview = createReview({
      authorName,
      authorPhoto: body.authorPhoto,
      rating: parseInt(rating, 10),
      text,
      date,
      source,
      sourceUrl: body.sourceUrl,
      photos: body.photos,
      verified: body.verified,
      visible: body.visible,
    })

    return NextResponse.json(newReview, { status: 201 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors de la création'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
