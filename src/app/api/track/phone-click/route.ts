import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { page, source } = body

    if (!page) {
      return NextResponse.json({ error: 'Page requise' }, { status: 400 })
    }

    const userAgent = request.headers.get('user-agent') || ''
    const device = /Mobile|Android|iPhone/i.test(userAgent) ? 'mobile' : 'desktop'

    await prisma.phoneClick.create({
      data: { page, device, source: source || null },
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
