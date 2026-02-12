import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET - Récupérer un avis par ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const review = await prisma.review.findUnique({ where: { id } })

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

    const data: Record<string, unknown> = {}
    if (authorName !== undefined) data.authorName = authorName
    if (authorPhoto !== undefined) data.authorPhoto = authorPhoto
    if (rating !== undefined) data.rating = Math.min(5, Math.max(1, parseInt(rating, 10)))
    if (text !== undefined) data.text = text
    if (date !== undefined) data.time = new Date(date)
    if (source !== undefined) data.source = source
    if (sourceUrl !== undefined) data.sourceUrl = sourceUrl
    if (photos !== undefined) data.photos = photos
    if (verified !== undefined) data.verified = verified
    if (visible !== undefined) data.visible = visible
    if (order !== undefined) data.order = order

    const updatedReview = await prisma.review.update({
      where: { id },
      data,
    })

    return NextResponse.json(updatedReview)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors de la mise à jour'
    const status = message.includes('not found') ? 404 : 400
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

  try {
    await prisma.review.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Avis non trouvé' }, { status: 404 })
  }
}
