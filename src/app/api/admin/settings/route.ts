import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { revalidateTag } from 'next/cache'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  let settings = await prisma.siteSettings.findUnique({ where: { id: 'singleton' } })
  if (!settings) {
    settings = await prisma.siteSettings.create({
      data: { id: 'singleton' },
    })
  }

  return NextResponse.json({
    phoneNumber: settings.phoneNumber,
    companyEmail: settings.companyEmail,
  })
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { phoneNumber, companyEmail } = await req.json()

  if (!phoneNumber || !companyEmail) {
    return NextResponse.json({ error: 'Téléphone et email requis' }, { status: 400 })
  }

  const settings = await prisma.siteSettings.upsert({
    where: { id: 'singleton' },
    update: { phoneNumber, companyEmail },
    create: { id: 'singleton', phoneNumber, companyEmail },
  })

  revalidateTag('site-settings')

  return NextResponse.json({
    phoneNumber: settings.phoneNumber,
    companyEmail: settings.companyEmail,
  })
}
