import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import ReviewsSection from '@/components/shared/ReviewsSection'
import { getWhatsAppUrl } from '@/lib/utils'

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

  const otherServices = services.filter(s => s.slug !== service.slug)

  return (
    <>
      {/* Hero */}
      <section className="relative h-105 sm:h-120">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 h-full flex items-end">
          <div className="w-full py-10 sm:py-14">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumbs
                items={[
                  { name: 'Services', href: '/#services' },
                  { name: service.shortTitle, href: `/services/${service.slug}` },
                ]}
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mt-2">
                {service.title}
              </h1>
              <p className="text-white/80 mt-3 text-lg max-w-2xl">
                {service.heroSubtitle || service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={getWhatsAppUrl({ service: service.shortTitle, type: 'urgence' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1da851] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contacter par WhatsApp
                </a>
                <Button href="/devis" size="md" className="bg-white text-forest hover:bg-cream">
                  Devis gratuit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes d'intervention */}
      {service.steps && service.steps.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest text-center mb-12">
              Comment se déroule notre intervention ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-cream rounded-2xl p-6 h-full">
                    <div className="w-10 h-10 bg-forest text-cream rounded-full flex items-center justify-center font-bold text-lg mb-4">
                      {i + 1}
                    </div>
                    <h3 className="font-heading font-bold text-forest text-lg mb-2">{step.title}</h3>
                    <p className="text-sage text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {i < service.steps!.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-3 text-sage/40">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Avantages */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest mb-8">
                  Pourquoi choisir Earth Sanitation ?
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#25D366] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sage">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.shortTitle} - Earth Sanitation`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-forest/10" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA intermédiaire */}
      <section className="bg-forest text-cream py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
            Besoin d&apos;un {service.shortTitle.toLowerCase()} ?
          </h2>
          <p className="text-cream/70 mb-6 max-w-xl mx-auto">
            Nos techniciens interviennent rapidement sur Montpellier, Nîmes et dans un rayon de 100 km.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={getWhatsAppUrl({ service: service.shortTitle, type: 'devis' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1da851] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Demander un devis
            </a>
            <Button href="/devis" size="md" className="bg-linear-to-r from-emerald-500 to-teal-600 text-white
            font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-2xl hover:from-teal-600 hover:to-emerald-500 active:scale-95"> Formulaire en ligne
            </Button>

          </div>
        </div>
      </section>

      {/* Conseils */}
      {service.tips && service.tips.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest text-center mb-10">
              Nos conseils d&apos;experts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.tips.map((tip, i) => (
                <div key={i} className="flex gap-4 bg-cream/50 rounded-xl p-5">
                  <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sage text-sm leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest text-center mb-10">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {service.faq.map((item, i) => (
                <details key={i} className="group bg-white border border-sand/50 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-forest hover:bg-cream/50 transition-colors">
                    {item.question}
                    <svg className="w-5 h-5 text-sage shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-sage text-sm leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Avis clients */}
      <ReviewsSection />

      {/* Autres services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest text-center mb-10">
            Nos autres services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {otherServices.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                <div className="relative h-32 sm:h-40 rounded-xl overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-bold text-sm sm:text-base">{s.shortTitle}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
            Une urgence ? Contactez-nous maintenant
          </h2>
          <p className="text-white/80 mb-6">
            Disponible 24h/24, 7j/7 — intervention en moins d&apos;une heure.
          </p>
          <a
            href={getWhatsAppUrl({ service: service.shortTitle, type: 'urgence' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-red-600 font-bold text-xl px-8 py-4 rounded-xl hover:bg-cream transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contacter maintenant
          </a>
        </div>
      </section>
    </>
  )
}
