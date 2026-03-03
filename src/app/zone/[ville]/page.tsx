import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { getWhatsAppUrl } from '@/lib/utils'
import { getSiteSettings } from '@/lib/settings'
import ReviewsSection from '@/components/shared/ReviewsSection'
import Image from 'next/image'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import {
  getDistanceFromBase,
  getEstimatedTime,
  getNearbyCities,
  getIntroText,
} from '@/lib/geo'

interface Props {
  params: { ville: string }
}

export function generateStaticParams() {
  return cities.map(c => ({ ville: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const city = cities.find(c => c.slug === params.ville)
  if (!city) return {}

  const siteUrl = 'https://earth-sanitation.fr'
  const dist = getDistanceFromBase(city)
  const time = getEstimatedTime(dist)

  return {
    title: `Débouchage & Assainissement ${city.name} (${city.cp}) — Earth Sanitation`,
    description: `Débouchage et assainissement à ${city.name} (${city.cp}, ${city.department}). Intervention en ${time}. Disponible 24h/24, 7j/7. Devis gratuit.`,
    alternates: {
      canonical: `${siteUrl}/zone/${city.slug}`,
    },
    openGraph: {
      title: `Débouchage & Assainissement ${city.name} (${city.cp}) — Earth Sanitation`,
      description: `Intervention urgente débouchage et assainissement à ${city.name} (${city.department}). Arrivée en ${time}. Disponible 24h/24.`,
      url: `${siteUrl}/zone/${city.slug}`,
      type: 'website',
    },
  }
}

export default async function VillePage({ params }: Props) {
  const city = cities.find(c => c.slug === params.ville)
  if (!city) notFound()

  const { whatsappNumber } = await getSiteSettings()

  const dist = getDistanceFromBase(city)
  const time = getEstimatedTime(dist)
  const distDisplay = Math.round(dist)
  const nearby = getNearbyCities(city, cities, 5)
  const introText = getIntroText(city)

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Accueil', href: '/' },
        { name: 'Zones', href: '/#zones' },
        { name: city.name, href: `/zone/${city.slug}` },
      ]} />

      {/* Hero */}
      <section className="bg-forest text-cream py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: city.name, href: `/zone/${city.slug}` }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold mb-4">
            Débouchage &amp; Assainissement
            <span className="text-gold block mt-2">{city.name}</span>
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed">
            {introText}
          </p>
        </div>
      </section>

      {/* Temps d'intervention */}
      <section className="py-10 bg-cream/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-forest">{distDisplay} km</div>
              <div className="text-sage text-sm mt-1">Distance depuis Montpellier</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-gold">{time}</div>
              <div className="text-sage text-sm mt-1">Temps d&apos;intervention estimé</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-forest">24h/24</div>
              <div className="text-sage text-sm mt-1">Disponibilité urgences</div>
            </div>
          </div>
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
              Des solutions professionnelles pour tous vos problèmes de canalisations et d&apos;assainissement à {city.name} et dans le {city.department}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card hover className="h-full p-0 overflow-hidden">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                    src={service.image}
                    alt={`${service.title} à ${city.name}`}
                    fill
                    className="object-cover"
                    />
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
              href={getWhatsAppUrl({ ville: city.name, type: 'urgence', whatsappNumber })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1da851] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contacter par WhatsApp
            </a>
            <Button href="/devis" variant="outline" size="lg">Devis gratuit</Button>
          </div>
        </div>
      </section>

      {/* Villes proches */}
      <section className="py-12 bg-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-forest mb-6 text-center">
            Nous intervenons aussi près de {city.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {nearby.map(c => {
              const d = Math.round(
                Math.sqrt(
                  Math.pow((c.lat - city.lat) * 111, 2) +
                  Math.pow((c.lng - city.lng) * 111 * Math.cos(city.lat * Math.PI / 180), 2)
                )
              )
              return (
                <Link
                  key={c.slug}
                  href={`/zone/${c.slug}`}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="font-semibold text-forest text-sm">{c.name}</div>
                  <div className="text-sage text-xs mt-1">~{d} km</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReviewsSection />
        </div>
      </section>
    </>
  )
}
