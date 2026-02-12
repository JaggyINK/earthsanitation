import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import PhoneButton from '@/components/shared/PhoneButton'
import ReviewsSection from '@/components/shared/ReviewsSection'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { getWhatsAppUrl } from '@/lib/utils'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-cream overflow-hidden">
  {/* Image de fond */}
  <Image
    src="/images/hero-bg.webp"
    alt="Débouchage et assainissement"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay vert */}
  <div className="absolute inset-0 bg-forest/80" />

  {/* Dégradé existant */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-sage)_0%,transparent_60%)] opacity-40" />

  {/* Contenu */}
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
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <PhoneButton variant="emergency" className="w-full sm:w-auto justify-center"/>
        <Button href="/devis" size="lg" className="w-full sm:w-auto justify-center 
        bg-sky-400 text-forest hover:bg-sky-500 active:bg-sky-600 shadow-lg transition-all">
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
                <Card hover className="h-full p-0 overflow-hidden group">
                  <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                    <Image src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-forest mb-2">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sage text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-forest font-medium text-sm mt-3 group-hover:text-sage transition-colors">
                      En savoir plus
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
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
            href={getWhatsAppUrl({ type: 'urgence' })}
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

      {/* Zones d'intervention */}
      <section className="py-16 lg:py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-forest/10 text-forest text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Rayon de 100 km
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
              Quelques villes où nous intervenons
            </h2>
            <p className="text-sage max-w-2xl mx-auto">
              Nous couvrons l&apos;Hérault, le Gard et les départements limitrophes autour de Montpellier et Nîmes.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-sand/30 p-6 sm:p-8 lg:p-10">
            {/* Grandes villes */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4 text-center">Villes principales</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {cities.filter(c => c.priority === 'high').map(city => (
                  <Link
                    key={city.slug}
                    href={`/zone/${city.slug}`}
                    className="inline-flex items-center gap-1.5 bg-forest text-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-forest/90 hover:scale-105 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742z" clipRule="evenodd" />
                    </svg>
                    {city.name}
                    <span className="text-cream/60 text-xs">{city.cp}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-sand/30 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Hérault */}
                <div>
                  <h3 className="text-sm font-semibold text-sage uppercase tracking-wider mb-3 text-center">Hérault (34)</h3>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {cities.filter(c => c.priority === 'medium' && c.department === 'Hérault').map(city => (
                      <Link
                        key={city.slug}
                        href={`/zone/${city.slug}`}
                        className="inline-flex items-center gap-1 bg-white border border-sand/50 text-forest px-2.5 py-1 rounded-full text-xs hover:bg-cream hover:border-sage/30 transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Gard */}
                <div>
                  <h3 className="text-sm font-semibold text-sage uppercase tracking-wider mb-3 text-center">Gard (30)</h3>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {cities.filter(c => c.priority === 'medium' && c.department === 'Gard').map(city => (
                      <Link
                        key={city.slug}
                        href={`/zone/${city.slug}`}
                        className="inline-flex items-center gap-1 bg-white border border-sand/50 text-forest px-2.5 py-1 rounded-full text-xs hover:bg-cream hover:border-sage/30 transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Aude */}
                <div>
                  <h3 className="text-sm font-semibold text-sage uppercase tracking-wider mb-3 text-center">Aude (11)</h3>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {cities.filter(c => c.department === 'Aude').map(city => (
                      <Link
                        key={city.slug}
                        href={`/zone/${city.slug}`}
                        className="inline-flex items-center gap-1 bg-white border border-sand/50 text-forest px-2.5 py-1 rounded-full text-xs hover:bg-cream hover:border-sage/30 transition-colors"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sage/70 text-sm mt-8 pt-6 border-t border-sand/30">
              Votre ville n&apos;est pas listée ? Nous intervenons dans un rayon de 100 km.{' '}
              <Link href="/contact" className="text-forest font-medium underline hover:text-sage">Contactez-nous</Link>
            </p>
          </div>
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
