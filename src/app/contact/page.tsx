import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { PHONE_NUMBER, COMPANY_EMAIL, getWhatsAppUrl } from '@/lib/utils'
import ContactFormClient from './ContactFormClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Earth Sanitation pour vos problèmes de canalisations et d\'assainissement. Devis gratuit.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest text-cream py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold">Contactez-nous</h1>
          <p className="text-cream/80 mt-2">Nous sommes à votre disposition 24h/24, 7j/7.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-forest mb-6">Envoyez-nous un message</h2>
            <ContactFormClient />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-forest mb-6">Nos coordonnées</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-forest mb-1">Téléphone</h3>
                <a href={getWhatsAppUrl({ type: 'contact' })} target="_blank" rel="noopener noreferrer" className="text-sage hover:text-forest transition-colors text-lg">
                  {PHONE_NUMBER} (WhatsApp)
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-forest mb-1">Email</h3>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-sage hover:text-forest transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-forest mb-1">Zone d&apos;intervention</h3>
                <p className="text-sage">Montpellier, Nîmes et 100 km autour</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest mb-1">Disponibilité</h3>
                <p className="text-sage">24h/24, 7j/7 — week-ends et jours fériés inclus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
