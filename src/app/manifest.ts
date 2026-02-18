import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Earth Sanitation — Débouchage & Assainissement',
    short_name: 'Earth Sanitation',
    description: 'Débouchage, assainissement et travaux de canalisations en urgence 24h/24, 7j/7. Intervention rapide Montpellier, Nîmes et 100km autour.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F1EB',
    theme_color: '#1B4332',
    orientation: 'portrait-primary',
    categories: ['business', 'utilities'],
    lang: 'fr',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
