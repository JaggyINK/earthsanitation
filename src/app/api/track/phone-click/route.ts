import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { page, source } = body

    if (!page) {
      return NextResponse.json({ error: 'Page requise' }, { status: 400 })
    }

    const userAgent = request.headers.get('user-agent') || ''
    const device = /Mobile|Android|iPhone/i.test(userAgent) ? 'mobile' : 'desktop'

    // TODO: Save to database when PostgreSQL connected
    // import { prisma } from '@/lib/prisma'
    // await prisma.phoneClick.create({ data: { page, device, source } })

    console.log('Phone click:', { page, device, source })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
