import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// PUT - Mettre à jour le statut d'un lead
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
    const { status } = body

    if (!['NEW', 'CONTACTED', 'CONVERTED', 'LOST'].includes(status)) {
      return NextResponse.json({ error: 'Statut invalide' }, { status: 400 })
    }

    const updated = await prisma.lead.update({
      where: { id },
      data: { status },
    })

    return NextResponse.json(updated)
  } catch {
    return NextResponse.json({ error: 'Lead non trouvé' }, { status: 404 })
  }
}

// DELETE - Supprimer un lead
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
    await prisma.lead.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Lead non trouvé' }, { status: 404 })
  }
}
