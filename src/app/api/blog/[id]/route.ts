import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getPostById, getPostBySlug, updatePost, deletePost } from '@/lib/blog-store'

// GET - Récupérer un article par ID ou slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  // Chercher par ID ou par slug
  const post = getPostById(id) || getPostBySlug(id)

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

    const updatedPost = updatePost(id, { title, content, excerpt, published })

    return NextResponse.json(updatedPost)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors de la mise à jour'
    const status = message === 'Article non trouvé' ? 404 : 400
    return NextResponse.json({ error: message }, { status })
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

  const deleted = deletePost(id)

  if (!deleted) {
    return NextResponse.json({ error: 'Article non trouvé' }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
