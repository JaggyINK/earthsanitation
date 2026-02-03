import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getReviewById, updateReview, deleteReview } from '@/lib/reviews-store'

// GET - Récupérer un avis par ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const review = getReviewById(id)

  if (!review) {
    return NextResponse.json({ error: 'Avis non trouvé' }, { status: 404 })
  }

  return NextResponse.json(review)
}

// PUT - Mettre à jour un avis
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { id } = await params

  try {
    const body = await request.json()
    const {
      authorName,
      authorPhoto,
      rating,
      text,
      date,
      source,
      sourceUrl,
      photos,
      verified,
      visible,
      order,
    } = body

    const updatedReview = updateReview(id, {
      authorName,
      authorPhoto,
      rating: rating !== undefined ? parseInt(rating, 10) : undefined,
      text,
      date,
      source,
      sourceUrl,
      photos,
      verified,
      visible,
      order,
    })

    return NextResponse.json(updatedReview)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors de la mise à jour'
    const status = message === 'Avis non trouvé' ? 404 : 400
    return NextResponse.json({ error: message }, { status })
  }
}

// DELETE - Supprimer un avis
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { id } = await params
  const deleted = deleteReview(id)

  if (!deleted) {
    return NextResponse.json({ error: 'Avis non trouvé' }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
