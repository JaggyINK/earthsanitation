import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// DELETE old data (older than 60 days) - auth protected
export async function POST() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - 60)

  const [deletedVisits, deletedClicks] = await Promise.all([
    prisma.pageVisit.deleteMany({
      where: { createdAt: { lt: cutoff } },
    }),
    prisma.phoneClick.deleteMany({
      where: { createdAt: { lt: cutoff } },
    }),
  ])

  return NextResponse.json({
    success: true,
    deleted: {
      pageVisits: deletedVisits.count,
      phoneClicks: deletedClicks.count,
    },
    cutoffDate: cutoff.toISOString(),
  })
}
