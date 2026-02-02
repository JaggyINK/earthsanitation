import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { PHONE_HREF } from '@/lib/utils'

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

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-forest mb-8 text-center">
            Nos services à {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <Card hover className="h-full">
                  <h3 className="font-heading font-bold text-forest mb-2">{s.shortTitle}</h3>
                  <p className="text-sage text-sm">{s.description}</p>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Appeler maintenant
            </a>
            <Button href="/devis" variant="outline">Devis gratuit</Button>
          </div>
        </div>
      </section>
    </>
  )
}
