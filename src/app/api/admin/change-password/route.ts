import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import bcrypt from 'bcryptjs'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { currentPassword, newPassword } = await req.json()

  if (!currentPassword || !newPassword) {
    return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
  }

  if (newPassword.length < 8) {
    return NextResponse.json({ error: 'Le mot de passe doit faire au moins 8 caractères' }, { status: 400 })
  }

  const admin = await prisma.admin.findUnique({
    where: { email: session.user.email },
  })

  if (!admin) {
    return NextResponse.json({ error: 'Admin introuvable' }, { status: 404 })
  }

  const isValid = await bcrypt.compare(currentPassword, admin.password)
  if (!isValid) {
    return NextResponse.json({ error: 'Ancien mot de passe incorrect' }, { status: 403 })
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10)
  await prisma.admin.update({
    where: { email: session.user.email },
    data: { password: hashedPassword },
  })

  return NextResponse.json({ success: true })
}
