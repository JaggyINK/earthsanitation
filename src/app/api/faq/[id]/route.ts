import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

interface RouteParams {
  params: Promise<{ id: string }>
}

// PUT - Update FAQ
export async function PUT(request: Request, { params }: RouteParams) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json()

  const data: Record<string, unknown> = {}
  if (body.question !== undefined) data.question = body.question
  if (body.answer !== undefined) data.answer = body.answer
  if (body.service !== undefined) data.service = body.service || null
  if (body.visible !== undefined) data.visible = body.visible
  if (body.order !== undefined) data.order = body.order

  const faq = await prisma.fAQ.update({
    where: { id },
    data,
  })

  return NextResponse.json(faq)
}

// DELETE - Delete FAQ
export async function DELETE(_request: Request, { params }: RouteParams) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { id } = await params

  await prisma.fAQ.delete({ where: { id } })

  return NextResponse.json({ success: true })
}
