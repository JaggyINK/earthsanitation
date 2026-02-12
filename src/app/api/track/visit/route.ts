import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { path, referrer } = body

    if (!path) {
      return NextResponse.json({ error: 'Path requis' }, { status: 400 })
    }

    // Don't track admin pages
    if (path.startsWith('/admin')) {
      return NextResponse.json({ success: true, skipped: true })
    }

    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown'
    const today = new Date().toISOString().slice(0, 10)
    const ipHash = crypto.createHash('sha256').update(ip + today).digest('hex').slice(0, 16)

    const userAgent = request.headers.get('user-agent') || undefined

    // Check if this IP already visited today (unique visit per IP per day)
    const existing = await prisma.pageVisit.findFirst({
      where: {
        ipHash,
        createdAt: {
          gte: new Date(today + 'T00:00:00.000Z'),
        },
      },
    })

    if (existing) {
      return NextResponse.json({ success: true, duplicate: true })
    }

    await prisma.pageVisit.create({
      data: { path, referrer: referrer || null, userAgent: userAgent || null, ipHash },
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
