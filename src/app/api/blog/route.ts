import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getAllPosts, getPublishedPosts, createPost } from '@/lib/blog-store'

// GET - Liste des articles
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const publishedOnly = searchParams.get('published') === 'true'

  const posts = publishedOnly ? getPublishedPosts() : getAllPosts()

  return NextResponse.json(posts)
}

// POST - Créer un article
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, content, excerpt, published } = body

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Titre et contenu requis' },
        { status: 400 }
      )
    }

    const newPost = createPost({ title, content, excerpt, published })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors de la création'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
