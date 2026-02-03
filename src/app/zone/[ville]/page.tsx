import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { PHONE_HREF } from '@/lib/utils'
import ReviewsSection from '@/components/shared/ReviewsSection'

interface Props {
  params: { ville: string }
}

export function generateStaticParams() {
  return cities.map(c => ({ ville: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const city = cities.find(c => c.slug === params.ville)
  if (!city) return {}
  return {
    title: `Débouchage & Assainissement ${city.name}`,
    description: `Intervention urgente débouchage et assainissement à ${city.name} (${city.department}). Disponible 24h/24, 7j/7.`,
  }
}

export default function VillePage({ params }: Props) {
  const city = cities.find(c => c.slug === params.ville)
  if (!city) notFound()

  return (
    <>
      <section className="bg-forest text-cream py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: city.name, href: `/zone/${city.slug}` }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold mb-4">
            Débouchage &amp; Assainissement
            <span className="text-gold block mt-2">{city.name}</span>
          </h1>
          <p className="text-cream/80 text-lg">
            Intervention rapide à {city.name} ({city.department}) et ses environs.
            Disponible 24h/24, 7j/7.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
              Nos services à {city.name}
            </h2>
            <p className="text-sage max-w-2xl mx-auto">
              Des solutions professionnelles pour tous vos problèmes de canalisations et d&apos;assainissement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card hover className="h-full p-0 overflow-hidden">
                  <div className="relative w-full h-48 bg-gradient-to-br from-sage/15 to-forest/10 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-10 h-10 text-sage/30 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <span className="text-xs text-sage/40 font-medium">{service.shortTitle}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-forest mb-2">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sage text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Appeler maintenant
            </a>
            <Button href="/devis" variant="outline" size="lg">Devis gratuit</Button>
          </div>
          {/* Reviews */}
          <ReviewsSection />
        </div>
      </section>
    </>
  )
}
