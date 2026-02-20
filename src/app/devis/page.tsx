import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import HeroBackground from '@/components/shared/HeroBackground'
import DevisFormClient from './DevisFormClient'

export const metadata: Metadata = {
  title: 'Devis gratuit',
  description: 'Demandez un devis gratuit pour vos travaux de débouchage, assainissement ou canalisations. Réponse sous 24h.',
}

export default function DevisPage() {
  return (
    <>
      <section className="relative bg-forest text-cream py-20 lg:py-28 overflow-hidden">
        <HeroBackground />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Devis gratuit', href: '/devis' }]} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
            Devis<br />
            <span className="text-gold">gratuit</span>
          </h1>
          <p className="text-cream/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Décrivez votre besoin et recevez un devis détaillé sous 24h. Sans engagement.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <DevisFormClient />
        </div>
      </section>
    </>
  )
}
