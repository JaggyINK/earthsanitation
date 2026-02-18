import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import PhoneButton from '@/components/shared/PhoneButton'
import ReviewsSection from '@/components/shared/ReviewsSection'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { getWhatsAppUrl } from '@/lib/utils'
import Image from 'next/image'
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from '@/components/shared/AnimatedSection'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-cream overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        <Image
          src="/images/hero-bg.webp"
          alt="Débouchage et assainissement"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/90 via-forest/75 to-sage/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-sage)_0%,transparent_60%)] opacity-30" />

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sage/10 rounded-full blur-3xl" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-5 py-2 rounded-full mb-8 shadow-lg shadow-red-600/30">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Urgence 24h/24 — 7j/7
              </span>
            </FadeIn>

            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold leading-[1.1] mb-6">
                Débouchage &amp;
                <br />
                Assainissement
                <span className="block mt-3 bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                  Intervention rapide
                </span>
              </h1>
            </FadeInUp>

            <FadeIn delay={0.3}>
              <p className="text-lg sm:text-xl text-cream/80 mb-10 max-w-2xl leading-relaxed">
                Canalisations bouchées ? Problème d&apos;assainissement ? Nos experts interviennent
                en urgence sur <strong className="text-cream">Montpellier, Nîmes</strong> et dans un rayon de 100 km.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneButton variant="emergency" className="w-full sm:w-auto justify-center shadow-lg shadow-red-600/30" />
                <Button href="/devis" size="lg" className="w-full sm:w-auto justify-center bg-white text-forest hover:bg-cream shadow-lg">
                  Devis gratuit
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="relative -mt-8 z-10 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScaleIn>
            <div className="bg-white rounded-2xl shadow-xl border border-sand/30 p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
                {[
                  { value: '24/7', label: 'Disponibilité', sub: 'Jours fériés inclus', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { value: '< 1h', label: 'Intervention', sub: 'Sur Montpellier & Nîmes', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' },
                  { value: '100 km', label: "Zone d'action", sub: 'Hérault, Gard, Aude', icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' },
                  { value: '100%', label: 'Satisfaction', sub: 'Devis gratuit garanti', icon: 'M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3.75a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 5.25c0 .372-.052.738-.153 1.09a5.25 5.25 0 00-.421 2.036v.042a.75.75 0 01-.75.75H9.375a3.375 3.375 0 00-3.375 3.375v.158c0 .456.07.898.2 1.312l.106.32a3.375 3.375 0 003.197 2.28h1.122a.75.75 0 01.528.218l.003.003A3.375 3.375 0 0014.534 18h1.591a.75.75 0 01.53.22l.294.293A2.625 2.625 0 0118.81 21H4.5a.75.75 0 01-.75-.75v-6a3.375 3.375 0 013.375-3.375h-.492z' },
                ].map(item => (
                  <div key={item.label} className="group relative">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <svg className="w-6 h-6 mx-auto mb-2 text-gold hidden sm:block" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-forest group-hover:text-gold transition-colors duration-300">{item.value}</p>
                    <p className="text-xs sm:text-sm font-semibold text-sage mt-1">{item.label}</p>
                    <p className="text-xs text-sage/60 mt-0.5 hidden sm:block">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 lg:py-28 bg-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block bg-forest/10 text-forest text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-forest/20">
                Nos expertises
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
                Nos services
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
              <p className="text-sage max-w-2xl mx-auto text-lg">
                Des solutions professionnelles pour tous vos problèmes de canalisations et d&apos;assainissement.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map(service => (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <Card hover className="h-full p-0 overflow-hidden group border border-sand/30">
                    <div className="relative w-full h-52 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block bg-forest/90 text-cream text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                          Professionnel
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-lg text-forest mb-2 group-hover:text-sage transition-colors">
                        {service.shortTitle}
                      </h3>
                      <p className="text-sage text-sm leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                      <div className="mt-4 pt-3 border-t border-sand/30">
                        <span className="inline-flex items-center gap-1 text-forest font-semibold text-sm group-hover:text-gold transition-colors">
                          En savoir plus
                          <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 lg:py-28 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-forest/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-gold/20">
                Simple et rapide
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
                Comment ça marche ?
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
              <p className="text-sage max-w-xl mx-auto">
                De votre appel à la résolution du problème, nous agissons vite et bien.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {[
              { step: '01', title: 'Contactez-nous', desc: 'Par WhatsApp, téléphone ou formulaire.', icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' },
              { step: '02', title: 'Diagnostic gratuit', desc: 'Devis transparent, sans engagement.', icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
              { step: '03', title: 'Intervention', desc: 'Techniciens qualifiés, matériel pro.', icon: 'M11.42 15.17l-5.648-3.014a.75.75 0 01-.362-1.003l2.25-5.25a.75.75 0 011.003-.362l5.648 3.014a.75.75 0 01.362 1.003l-2.25 5.25a.75.75 0 01-1.003.362z' },
              { step: '04', title: 'Problème résolu', desc: 'Vérification et conseils prévention.', icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map(item => (
              <StaggerItem key={item.step}>
                <div className="text-center group">
                  <div className="relative mx-auto mb-4 lg:mb-6">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cream rounded-2xl border border-sand/40 flex items-center justify-center mx-auto group-hover:bg-forest group-hover:border-forest group-hover:shadow-lg group-hover:shadow-forest/20 transition-all duration-300">
                      <svg className="w-7 h-7 lg:w-9 lg:h-9 text-forest group-hover:text-cream transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 lg:w-8 lg:h-8 bg-gold text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md border-2 border-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm lg:text-lg text-forest mb-1 lg:mb-2">{item.title}</h3>
                  <p className="text-sage text-xs lg:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        {/* Decorative border top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-400 to-red-800" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 text-center text-white">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Disponible maintenant
            </div>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
              Une urgence ? Appelez maintenant !
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto text-lg">
              Nos techniciens sont disponibles 24h/24, 7j/7 pour intervenir en moins d&apos;une heure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={getWhatsAppUrl({ type: 'urgence' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-red-600 font-bold text-lg px-8 py-4 rounded-xl hover:bg-cream hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contacter maintenant
              </a>
              <Button href="/devis" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600">
                Demander un devis
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 lg:py-28 bg-cream/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sand/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block bg-forest/10 text-forest text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-forest/20">
                Nos engagements
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
                Pourquoi nous choisir ?
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Intervention rapide',
                desc: "Nous intervenons en moins d'une heure sur Montpellier et Nîmes. Disponibles 24h/24, 7j/7, week-ends et jours fériés inclus.",
                icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
                color: 'bg-red-50 text-red-600 border-red-100',
                accent: 'border-l-red-500',
              },
              {
                title: 'Expertise certifiée',
                desc: "Nos techniciens sont formés aux dernières techniques de débouchage et d'assainissement. Matériel professionnel de pointe.",
                icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
                color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
                accent: 'border-l-emerald-500',
              },
              {
                title: 'Devis transparent',
                desc: "Pas de mauvaise surprise. Nous vous communiquons un devis clair et détaillé avant chaque intervention. Sans engagement.",
                icon: 'M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
                color: 'bg-blue-50 text-blue-600 border-blue-100',
                accent: 'border-l-blue-500',
              },
            ].map(item => (
              <StaggerItem key={item.title}>
                <div className={`bg-white rounded-2xl p-6 lg:p-8 h-full border border-sand/30 border-l-4 ${item.accent} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 ${item.color} border rounded-xl flex items-center justify-center mb-5`}>
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-lg lg:text-xl text-forest mb-3">{item.title}</h3>
                  <p className="text-sage leading-relaxed text-sm lg:text-base">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Trust micro-badges */}
          <FadeIn>
            <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { label: 'Devis gratuit', icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { label: 'Sans engagement', icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { label: 'Paiement sécurisé', icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' },
                { label: 'Résultat garanti', icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z' },
              ].map(badge => (
                <span key={badge.label} className="inline-flex items-center gap-1.5 bg-white border border-sand/40 text-forest text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full shadow-sm">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={badge.icon} />
                  </svg>
                  {badge.label}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-16 lg:py-28 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-forest/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block bg-forest/10 text-forest text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-forest/20">
                Rayon de 100 km
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
                Quelques villes où nous intervenons
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-4" />
              <p className="text-sage max-w-2xl mx-auto">
                Nous couvrons l&apos;Hérault, le Gard et les départements limitrophes autour de Montpellier et Nîmes.
              </p>
            </div>
          </FadeIn>

          <FadeInUp>
            <div className="bg-cream/50 rounded-2xl border border-sand/30 p-6 sm:p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4 text-center">Villes principales</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {cities.filter(c => c.priority === 'high').map(city => (
                    <Link
                      key={city.slug}
                      href={`/zone/${city.slug}`}
                      className="inline-flex items-center gap-1.5 bg-forest text-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-sage hover:scale-105 transition-all duration-200 shadow-sm"
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
          </FadeInUp>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* CTA Final - flows directly into footer */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-forest" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-gold)_0%,transparent_50%)] opacity-10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        {/* Top decorative border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest via-gold/40 to-forest" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm text-cream text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-cream/20">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" clipRule="evenodd" />
              </svg>
              Estimation gratuite
            </span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
              Besoin d&apos;un devis ?
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-6" />
            <p className="text-cream/70 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Décrivez-nous votre problème et recevez un devis gratuit sous 24h. Sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/devis" size="lg" className="bg-gold hover:bg-gold/90 text-white shadow-lg shadow-gold/30 hover:scale-105 transition-all">
                Demander un devis gratuit
              </Button>
              <Button href="/contact" size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-cream/30 text-cream hover:bg-white hover:text-forest transition-all">
                Nous contacter
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
