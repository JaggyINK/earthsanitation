import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

// Rate limiting: max 5 tentatives par IP sur 15 minutes
const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000
const loginAttempts = new Map<string, { count: number; firstAttempt: number }>()

function checkRateLimit(email: string): boolean {
  const now = Date.now()
  const key = email.toLowerCase()
  const entry = loginAttempts.get(key)

  if (!entry || now - entry.firstAttempt > WINDOW_MS) {
    loginAttempts.set(key, { count: 1, firstAttempt: now })
    return true
  }

  if (entry.count >= MAX_ATTEMPTS) return false

  entry.count++
  return true
}

function resetRateLimit(email: string) {
  loginAttempts.delete(email.toLowerCase())
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        if (!checkRateLimit(credentials.email)) {
          throw new Error('Trop de tentatives. Réessayez dans 15 minutes.')
        }

        const admin = await prisma.admin.findUnique({
          where: { email: credentials.email },
        })

        if (!admin) return null

        const isValid = await bcrypt.compare(credentials.password, admin.password)
        if (!isValid) return null

        resetRateLimit(credentials.email)
        return { id: admin.id, name: admin.name, email: admin.email }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'dev-secret-change-in-production',
}
