import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { PHONE_HREF } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find(s => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.title} — Montpellier, Nîmes`,
    description: service.description,
  }
}

export default function ServicePage({ params }: Props) {
  const service = services.find(s => s.slug === params.slug)
  if (!service) notFound()

  return (
    <>
<section className="relative h-[420px]">
  {/* Image de fond dynamique selon le service */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${service.image})` }}
  />

  {/* Overlay sombre pour lisibilité */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Bande verte avec contenu */}
  <div className="relative z-10 h-full flex items-end">
    <div className="w-full bg-forest/90 backdrop-blur-sm py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Breadcrumbs
          items={[
            { name: 'Services', href: '/#services' },
            { name: service.shortTitle, href: `/services/${service.slug}` },
          ]}
        />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-cream">
          {service.title}
        </h1>
        <p className="text-cream/80 mt-2 max-w-2xl mx-auto">
          {service.description}
        </p>
      </div>
    </div>
  </div>
</section>



      <section className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-forest">Notre intervention</h2>
            <p className="text-sage">
              Nos techniciens qualifiés interviennent rapidement sur Montpellier, Nîmes et dans
              un rayon de 100 km pour vos problèmes de {service.shortTitle.toLowerCase()}.
              Nous utilisons du matériel professionnel de dernière génération pour garantir
              un résultat efficace et durable.
            </p>

            <h2 className="font-heading text-forest">Les avantages</h2>
            <ul className="text-sage space-y-2">
              <li>Intervention rapide, disponible 24h/24 et 7j/7</li>
              <li>Devis gratuit et transparent avant toute intervention</li>
              <li>Techniciens certifiés et expérimentés</li>
              <li>Matériel professionnel de pointe</li>
              <li>Garantie sur les travaux effectués</li>
            </ul>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Appeler en urgence
            </a>
            <Button href="/devis" variant="outline" size="md">
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
