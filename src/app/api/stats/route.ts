import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const now = new Date()
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

  const [
    visitsThisWeek,
    phoneClicksThisWeek,
    leadsThisWeek,
    leadsTotal,
    reviewStats,
    visitsLastWeek,
    phoneClicksLastWeek,
    leadsLastWeek,
    recentLeads,
  ] = await Promise.all([
    prisma.pageVisit.count({ where: { createdAt: { gte: weekAgo } } }),
    prisma.phoneClick.count({ where: { createdAt: { gte: weekAgo } } }),
    prisma.lead.count({ where: { createdAt: { gte: weekAgo } } }),
    prisma.lead.count(),
    prisma.review.findMany({ where: { visible: true } }),
    prisma.pageVisit.count({
      where: {
        createdAt: {
          gte: new Date(weekAgo.getTime() - 7 * 24 * 60 * 60 * 1000),
          lt: weekAgo,
        },
      },
    }),
    prisma.phoneClick.count({
      where: {
        createdAt: {
          gte: new Date(weekAgo.getTime() - 7 * 24 * 60 * 60 * 1000),
          lt: weekAgo,
        },
      },
    }),
    prisma.lead.count({
      where: {
        createdAt: {
          gte: new Date(weekAgo.getTime() - 7 * 24 * 60 * 60 * 1000),
          lt: weekAgo,
        },
      },
    }),
    prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: { id: true, name: true, type: true, status: true, createdAt: true },
    }),
  ])

  // Calculate trends (percentage change vs previous week)
  const visitsTrend = visitsLastWeek > 0
    ? Math.round(((visitsThisWeek - visitsLastWeek) / visitsLastWeek) * 100)
    : visitsThisWeek > 0 ? 100 : 0

  const clicksTrend = phoneClicksLastWeek > 0
    ? Math.round(((phoneClicksThisWeek - phoneClicksLastWeek) / phoneClicksLastWeek) * 100)
    : phoneClicksThisWeek > 0 ? 100 : 0

  const leadsTrend = leadsLastWeek > 0
    ? Math.round(((leadsThisWeek - leadsLastWeek) / leadsLastWeek) * 100)
    : leadsThisWeek > 0 ? 100 : 0

  // Review stats
  const avgRating = reviewStats.length > 0
    ? Math.round(reviewStats.reduce((s, r) => s + r.rating, 0) / reviewStats.length * 10) / 10
    : 0

  // Daily visits for chart (last 30 days)
  const dailyVisits = await prisma.$queryRaw<{ date: string; count: bigint }[]>`
    SELECT DATE(createdAt) as date, COUNT(*) as count
    FROM PageVisit
    WHERE createdAt >= ${monthAgo}
    GROUP BY DATE(createdAt)
    ORDER BY date ASC
  `

  const dailyClicks = await prisma.$queryRaw<{ date: string; count: bigint }[]>`
    SELECT DATE(createdAt) as date, COUNT(*) as count
    FROM PhoneClick
    WHERE createdAt >= ${monthAgo}
    GROUP BY DATE(createdAt)
    ORDER BY date ASC
  `

  return NextResponse.json({
    visitsThisWeek,
    phoneClicksThisWeek,
    leadsThisWeek,
    leadsTotal,
    reviewCount: reviewStats.length,
    avgRating,
    visitsTrend,
    clicksTrend,
    leadsTrend,
    recentLeads,
    dailyVisits: dailyVisits.map(d => ({ date: d.date, count: Number(d.count) })),
    dailyClicks: dailyClicks.map(d => ({ date: d.date, count: Number(d.count) })),
  })
}
