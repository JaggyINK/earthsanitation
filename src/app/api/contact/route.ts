import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'
import { prisma } from '@/lib/prisma'
import { sendLeadNotification } from '@/lib/mailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Normalize: empty strings → undefined so Zod .optional() works
    if (!body.email) delete body.email

    const result = contactSchema.safeParse(body)

    if (!result.success) {
      console.error('Validation errors:', JSON.stringify(result.error.flatten().fieldErrors))
      console.error('Received body keys:', Object.keys(body))
      console.error('Received values:', { name: body.name?.length, phone: body.phone?.length, message: body.message?.length, type: body.type })
      return NextResponse.json(
        { error: 'Données invalides.', details: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, phone, email, message, type } = result.data

    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        email: email || null,
        message,
        type,
        service: body.service || null,
        city: body.city || null,
        address: body.address || null,
        urgency: body.urgency || null,
        clientType: body.clientType || null,
        company: body.company || null,
        siret: body.siret || null,
        photos: body.photos || [],
        page: request.headers.get('referer') || null,
      },
    })

    console.log('New lead saved:', lead.id)

    // Send email notification (non-blocking — don't fail the request if email fails)
    sendLeadNotification({
      name,
      phone,
      email: email || undefined,
      message,
      type,
      service: body.service,
      city: body.city,
      address: body.address,
      urgency: body.urgency,
      clientType: body.clientType,
      company: body.company,
    }).catch(err => console.error('Email notification error:', err))

    return NextResponse.json({ success: true, id: lead.id })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur.' },
      { status: 500 }
    )
  }
}
