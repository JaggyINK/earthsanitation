import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Données invalides.', details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, phone, email, message, type } = result.data

    // TODO: Save to database when PostgreSQL connected
    // import { prisma } from '@/lib/prisma'
    // await prisma.lead.create({ data: { name, phone, email, message, type, page: request.headers.get('referer') } })

    console.log('New lead:', { name, phone, email, message, type })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Erreur serveur.' },
      { status: 500 }
    )
  }
}
