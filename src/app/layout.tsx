import type { Metadata } from 'next'
import './globals.css'
import { LocalBusinessSchema, WebSiteSchema } from '@/components/seo/StructuredData'
import TrackingProvider from '@/components/shared/TrackingProvider'
import AuthProvider from '@/components/shared/AuthProvider'
import ConditionalLayout from '@/components/layout/ConditionalLayout'
import { SiteSettingsProvider } from '@/contexts/SiteSettingsContext'
import { getSiteSettings } from '@/lib/settings'

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
    'débouchage Montpellier',
    'débouchage WC',
    'débouchage canalisation',
    'assainissement',
    'assainissement Montpellier',
    'société assainissement',
    'diagnostic assainissement',
    'urgence plomberie',
    'vidange fosse septique',
    'prix vidange fosse septique',
    'curage canalisations',
    'inspection caméra',
    'chemisage canalisation',
    'tubage canalisation',
    'sans tranchée',
    'réhabilitation canalisation',
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
    images: [{ url: '/images/logo-og.png', width: 600, height: 647, alt: 'Earth Sanitation Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earth Sanitation — Débouchage & Assainissement 24h/24',
    description: 'Débouchage, assainissement et travaux de canalisations en urgence 24h/24, 7j/7. Intervention rapide Montpellier, Nîmes et 100km autour.',
    images: ['/images/logo-og.png'],
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()

  return (
    <html lang="fr">
      <body className="pb-16 lg:pb-0">
        <AuthProvider>
          <SiteSettingsProvider settings={settings}>
            <TrackingProvider>
              <LocalBusinessSchema phoneNumber={settings.phoneNumber} companyEmail={settings.companyEmail} />
              <WebSiteSchema />
              <ConditionalLayout>{children}</ConditionalLayout>
            </TrackingProvider>
          </SiteSettingsProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
