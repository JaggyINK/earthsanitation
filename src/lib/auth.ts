import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

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

        // TODO: Replace with database lookup when PostgreSQL connected
        // import { prisma } from '@/lib/prisma'
        // import bcrypt from 'bcrypt'
        // const admin = await prisma.admin.findUnique({ where: { email: credentials.email } })
        // if (!admin || !(await bcrypt.compare(credentials.password, admin.password))) return null

        // Temporary hardcoded admin for development
        if (
          credentials.email === 'admin@earthsanitation.fr' &&
          credentials.password === 'admin123'
        ) {
          return { id: '1', name: 'Admin', email: 'admin@earthsanitation.fr' }
        }

        return null
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'dev-secret-change-in-production',
}
