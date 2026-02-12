import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET - Public: visible FAQs, optionally filtered by service
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const service = searchParams.get('service')
  const all = searchParams.get('all') // admin: get all including hidden

  const session = await getServerSession(authOptions)

  const where: Record<string, unknown> = {}
  if (!all || !session) {
    where.visible = true
  }
  if (service) {
    where.service = service
  }

  const faqs = await prisma.fAQ.findMany({
    where,
    orderBy: { order: 'asc' },
  })

  return NextResponse.json(faqs)
}

// POST - Admin only: create FAQ
export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const body = await request.json()
  const { question, answer, service } = body

  if (!question || !answer) {
    return NextResponse.json({ error: 'Question et réponse requises' }, { status: 400 })
  }

  // Get max order
  const maxOrder = await prisma.fAQ.aggregate({ _max: { order: true } })
  const nextOrder = (maxOrder._max.order ?? -1) + 1

  const faq = await prisma.fAQ.create({
    data: {
      question,
      answer,
      service: service || null,
      order: nextOrder,
    },
  })

  return NextResponse.json(faq, { status: 201 })
}
