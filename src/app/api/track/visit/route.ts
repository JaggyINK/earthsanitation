import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { path, referrer } = body

    if (!path) {
      return NextResponse.json({ error: 'Path requis' }, { status: 400 })
    }

    // Hash IP for privacy
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown'
    const ipHash = crypto.createHash('sha256').update(ip + new Date().toISOString().slice(0, 10)).digest('hex').slice(0, 16)

    const userAgent = request.headers.get('user-agent') || undefined

    // TODO: Save to database when PostgreSQL connected
    // import { prisma } from '@/lib/prisma'
    // await prisma.pageVisit.create({ data: { path, referrer, userAgent, ipHash } })

    console.log('Visit:', { path, referrer, ipHash })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
