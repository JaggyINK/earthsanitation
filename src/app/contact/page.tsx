import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import HeroBackground from '@/components/shared/HeroBackground'
import { getWhatsAppUrl } from '@/lib/utils'
import { getSiteSettings } from '@/lib/settings'
import ContactFormClient from './ContactFormClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Earth Sanitation pour vos problèmes de canalisations et d\'assainissement. Devis gratuit.',
}

export default async function ContactPage() {
  const { phoneNumber, companyEmail, whatsappNumber } = await getSiteSettings()

  return (
    <>
      <section className="relative bg-forest text-cream py-20 lg:py-28 overflow-hidden">
        <HeroBackground />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight">
            Contactez-<br />
            <span className="text-gold">nous</span>
          </h1>
          <p className="text-cream/80 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Nous sommes à votre disposition 24h/24, 7j/7 pour tous vos besoins en assainissement.
          </p>
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
                <a href={getWhatsAppUrl({ type: 'contact', whatsappNumber })} target="_blank" rel="noopener noreferrer" className="text-sage hover:text-forest transition-colors text-lg">
                  {phoneNumber} (WhatsApp)
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-forest mb-1">Email</h3>
                <a href={`mailto:${companyEmail}`} className="text-sage hover:text-forest transition-colors">
                  {companyEmail}
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
