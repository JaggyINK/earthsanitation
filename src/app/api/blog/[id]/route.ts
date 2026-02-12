import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// GET - Récupérer un article par ID ou slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  // Chercher par ID ou par slug
  const post = await prisma.blogPost.findFirst({
    where: {
      OR: [{ id }, { slug: id }],
    },
  })

  if (!post) {
    return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
  }

  return NextResponse.json(post)
}

// PUT - Mettre à jour un article
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
    const { title, content, excerpt, published } = body

    const existing = await prisma.blogPost.findUnique({ where: { id } })
    if (!existing) {
      return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
    }

    const data: Record<string, unknown> = {}
    if (content !== undefined) data.content = content
    if (excerpt !== undefined) data.excerpt = excerpt

    if (title !== undefined && title !== existing.title) {
      const newSlug = generateSlug(title)
      const slugConflict = await prisma.blogPost.findFirst({
        where: { slug: newSlug, NOT: { id } },
      })
      if (slugConflict) {
        return NextResponse.json(
          { error: 'Un article avec ce titre existe déjà' },
          { status: 400 }
        )
      }
      data.title = title
      data.slug = newSlug
    }

    if (published !== undefined) {
      data.published = published
      if (published && !existing.published) {
        data.publishedAt = new Date()
      }
    }

    const updatedPost = await prisma.blogPost.update({
      where: { id },
      data,
    })

    return NextResponse.json(updatedPost)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors de la mise à jour'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

// DELETE - Supprimer un article
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
    await prisma.blogPost.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
  }
}
