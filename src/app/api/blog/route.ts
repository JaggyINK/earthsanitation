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

// GET - Liste des articles
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const publishedOnly = searchParams.get('published') === 'true'

  const posts = await prisma.blogPost.findMany({
    where: publishedOnly ? { published: true } : undefined,
    orderBy: { createdAt: 'desc' },
  })

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

    const slug = generateSlug(title)
    const existing = await prisma.blogPost.findUnique({ where: { slug } })
    if (existing) {
      return NextResponse.json(
        { error: 'Un article avec ce titre existe déjà' },
        { status: 400 }
      )
    }

    const newPost = await prisma.blogPost.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        published: published || false,
        publishedAt: published ? new Date() : null,
      },
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur lors de la création'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
