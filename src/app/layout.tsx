import type { Metadata } from 'next'
import './globals.css'
import { LocalBusinessSchema } from '@/components/seo/StructuredData'
import TrackingProvider from '@/components/shared/TrackingProvider'
import AuthProvider from '@/components/shared/AuthProvider'
import ConditionalLayout from '@/components/layout/ConditionalLayout'

export const metadata: Metadata = {
  title: {
    default: 'Earth Sanitation — Débouchage & Assainissement 24h/24',
    template: '%s | Earth Sanitation',
  },
  description:
    'Débouchage, assainissement et travaux de canalisations en urgence 24h/24, 7j/7. Intervention rapide Montpellier, Nîmes et 100km autour.',
  keywords: [
    'débouchage canalisations',
    'assainissement',
    'urgence plomberie',
    'Montpellier',
    'Nîmes',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="pb-16 lg:pb-0">
        <AuthProvider>
          <TrackingProvider>
            <LocalBusinessSchema />
            <ConditionalLayout>{children}</ConditionalLayout>
          </TrackingProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
