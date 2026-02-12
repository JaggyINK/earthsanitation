import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET - Liste des avis
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const visibleOnly = searchParams.get('visible') === 'true'
  const stats = searchParams.get('stats') === 'true'

  if (stats) {
    const visible = await prisma.review.findMany({ where: { visible: true } })
    const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    visible.forEach(r => {
      distribution[r.rating] = (distribution[r.rating] || 0) + 1
    })
    const average = visible.length > 0
      ? visible.reduce((sum, r) => sum + r.rating, 0) / visible.length
      : 0

    return NextResponse.json({
      count: visible.length,
      average: Math.round(average * 10) / 10,
      distribution,
    })
  }

  const reviews = await prisma.review.findMany({
    where: visibleOnly ? { visible: true } : undefined,
    orderBy: { order: 'asc' },
  })

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
      const updates = body.orderedIds.map((id: string, index: number) =>
        prisma.review.update({
          where: { id },
          data: { order: index + 1 },
        })
      )
      await prisma.$transaction(updates)
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

    const maxOrder = await prisma.review.aggregate({ _max: { order: true } })
    const nextOrder = (maxOrder._max.order || 0) + 1

    const newReview = await prisma.review.create({
      data: {
        authorName,
        authorPhoto: body.authorPhoto || null,
        rating: Math.min(5, Math.max(1, parseInt(rating, 10))),
        text,
        time: new Date(date),
        source,
        sourceUrl: body.sourceUrl || null,
        photos: body.photos || [],
        verified: body.verified ?? false,
        visible: body.visible ?? true,
        order: nextOrder,
      },
    })

    return NextResponse.json(newReview, { status: 201 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors de la création'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
