import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import PhoneButton from '@/components/shared/PhoneButton'
import ReviewsSection from '@/components/shared/ReviewsSection'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { PHONE_HREF } from '@/lib/utils'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-sage)_0%,_transparent_60%)] opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6 animate-pulse">
              Urgence 24h/24 — 7j/7
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
              Débouchage &amp; Assainissement
              <span className="text-gold block mt-2">Intervention rapide</span>
            </h1>
            <p className="text-lg sm:text-xl text-cream/80 mb-8 max-w-2xl">
              Canalisations bouchées ? Problème d&apos;assainissement ? Nos experts interviennent
              en urgence sur Montpellier, Nîmes et dans un rayon de 100 km.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PhoneButton variant="emergency" />
              <Button href="/devis" variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-forest">
                Devis gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24/7', label: 'Disponibilité' },
              { value: '< 1h', label: 'Intervention' },
              { value: '100 km', label: "Zone d'action" },
              { value: '100%', label: 'Garantie' },
            ].map(item => (
              <div key={item.label}>
                <p className="text-2xl lg:text-3xl font-heading font-bold text-gold">{item.value}</p>
                <p className="text-sm text-sage mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
              Nos services
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
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Une urgence ? Appelez maintenant !
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Nos techniciens sont disponibles 24h/24, 7j/7 pour intervenir rapidement
            sur Montpellier, Nîmes et environs.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-white text-red-600 font-bold text-xl px-8 py-4 rounded-xl hover:bg-cream transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            Appeler maintenant
          </a>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
              Quelques villes où nous intervenons
            </h2>
            <p className="text-sage max-w-2xl mx-auto">
              Nous couvrons l&apos;Hérault, le Gard et les départements limitrophes dans un rayon de 100 km autour de Montpellier et Nîmes.
            </p>
          </div>

          {/* Grandes villes */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4 text-center">Villes principales</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.filter(c => c.priority === 'high').map(city => (
                <Link
                  key={city.slug}
                  href={`/zone/${city.slug}`}
                  className="inline-flex items-center gap-1.5 bg-forest text-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-forest/90 transition-colors"
                >
                  {city.name}
                  <span className="text-cream/60 text-xs">{city.cp}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Hérault */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-sage uppercase tracking-wider mb-4 text-center">Hérault</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.filter(c => c.priority === 'medium' && c.department === 'Hérault').map(city => (
                <Link
                  key={city.slug}
                  href={`/zone/${city.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-sand/50 text-forest px-3 py-1.5 rounded-full text-sm hover:bg-cream hover:border-sage/30 transition-colors"
                >
                  {city.name}
                  <span className="text-sage/60 text-xs">{city.cp}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Gard */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-sage uppercase tracking-wider mb-4 text-center">Gard</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.filter(c => c.priority === 'medium' && c.department === 'Gard').map(city => (
                <Link
                  key={city.slug}
                  href={`/zone/${city.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-sand/50 text-forest px-3 py-1.5 rounded-full text-sm hover:bg-cream hover:border-sage/30 transition-colors"
                >
                  {city.name}
                  <span className="text-sage/60 text-xs">{city.cp}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Aude */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-sage uppercase tracking-wider mb-4 text-center">Aude</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.filter(c => c.department === 'Aude').map(city => (
                <Link
                  key={city.slug}
                  href={`/zone/${city.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-sand/50 text-forest px-3 py-1.5 rounded-full text-sm hover:bg-cream hover:border-sage/30 transition-colors"
                >
                  {city.name}
                  <span className="text-sage/60 text-xs">{city.cp}</span>
                </Link>
              ))}
            </div>
          </div>

          <p className="text-center text-sage/70 text-sm mt-6">
            Votre ville n&apos;est pas listée ? Nous intervenons dans un rayon de 100 km.{' '}
            <Link href="/contact" className="text-forest underline hover:text-sage">Contactez-nous</Link>
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
              Pourquoi nous choisir ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Intervention rapide',
                desc: "Nous intervenons en moins d'une heure sur Montpellier et Nîmes. Disponibles 24h/24, 7j/7, week-ends et jours fériés inclus.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
              {
                title: 'Expertise certifiée',
                desc: "Nos techniciens sont formés aux dernières techniques de débouchage et d'assainissement. Matériel professionnel de pointe.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                ),
              },
              {
                title: 'Devis transparent',
                desc: "Pas de mauvaise surprise. Nous vous communiquons un devis clair avant chaque intervention. Paiement sécurisé.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                ),
              },
            ].map(item => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-forest mb-2">{item.title}</h3>
                <p className="text-sage text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-forest text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Besoin d&apos;un devis ?
          </h2>
          <p className="text-cream/80 mb-8 max-w-xl mx-auto">
            Décrivez-nous votre problème et recevez un devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/devis" size="lg" className="bg-gold hover:bg-gold/90 text-white">
              Demander un devis gratuit
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="bg-white hover:bg-gold/90 text-forest">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
