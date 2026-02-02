import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import DevisFormClient from './DevisFormClient'

export const metadata: Metadata = {
  title: 'Devis gratuit',
  description: 'Demandez un devis gratuit pour vos travaux de débouchage, assainissement ou canalisations. Réponse sous 24h.',
}

export default function DevisPage() {
  return (
    <>
      <section className="bg-forest text-cream py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Devis gratuit', href: '/devis' }]} />
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold">Devis gratuit</h1>
          <p className="text-cream/80 mt-2">Décrivez votre besoin et recevez un devis sous 24h.</p>
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
