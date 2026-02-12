import type { Metadata } from 'next'
import './globals.css'
import { LocalBusinessSchema } from '@/components/seo/StructuredData'
import TrackingProvider from '@/components/shared/TrackingProvider'
import AuthProvider from '@/components/shared/AuthProvider'
import ConditionalLayout from '@/components/layout/ConditionalLayout'

const siteUrl = 'https://earth-sanitation.fr'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    'vidange fosse septique',
    'curage canalisations',
    'inspection caméra',
    'Montpellier',
    'Nîmes',
    'Hérault',
    'Gard',
  ],
  authors: [{ name: 'Earth Sanitation' }],
  creator: 'Earth Sanitation',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Earth Sanitation',
    title: 'Earth Sanitation — Débouchage & Assainissement 24h/24',
    description: 'Débouchage, assainissement et travaux de canalisations en urgence 24h/24, 7j/7. Intervention rapide Montpellier, Nîmes et 100km autour.',
    images: [{ url: '/images/logo.svg', width: 575, height: 620, alt: 'Earth Sanitation Logo' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // google: 'votre-code-verification-google', // À ajouter après inscription Google Search Console
  },
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
