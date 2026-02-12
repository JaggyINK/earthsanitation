import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// GET - Liste des leads
export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const type = searchParams.get('type')

  const where: Record<string, unknown> = {}
  if (status && status !== 'ALL') where.status = status
  if (type && type !== 'ALL') where.type = type

  const leads = await prisma.lead.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(leads)
}
