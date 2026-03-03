'use client'

import Image from 'next/image'
import { FadeIn, FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from '@/components/shared/AnimatedSection'
import AnimatedCounter from '@/components/shared/AnimatedCounter'

/* ── Decorative SVG elements ── */
const PipeHorizontal = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 20" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="0" y="4" width="200" height="12" rx="6" />
    <line x1="40" y1="4" x2="40" y2="16" strokeWidth="1.5" />
    <line x1="80" y1="4" x2="80" y2="16" strokeWidth="1.5" />
    <line x1="120" y1="4" x2="120" y2="16" strokeWidth="1.5" />
    <line x1="160" y1="4" x2="160" y2="16" strokeWidth="1.5" />
  </svg>
)

const PipeCorner = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M10 0v50a20 20 0 0020 20h50" />
    <path d="M0 0v50a30 30 0 0030 30h50" />
  </svg>
)

const WaterDrop = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 32" fill="currentColor">
    <path d="M12 0C12 0 0 14.4 0 22c0 6.627 5.373 10 12 10s12-3.373 12-10C24 14.4 12 0 12 0z" />
  </svg>
)

const PipeValve = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="8" y="20" width="24" height="20" rx="3" />
    <line x1="20" y1="0" x2="20" y2="20" />
    <line x1="20" y1="40" x2="20" y2="60" />
    <circle cx="20" cy="12" r="6" />
    <line x1="14" y1="8" x2="26" y2="8" />
  </svg>
)

/* ── Service photos data ── */
const photos = [
  {
    src: '/images/about/camion.jpeg',
    alt: 'Camion Earth Sanitation en intervention',
    label: 'Notre flotte',
  },
  {
    src: '/images/about/toilettes.jpeg',
    alt: 'Technicien en intervention de débouchage',
    label: 'Débouchage',
  },
  {
    src: '/images/about/camera.jpeg',
    alt: 'Inspection caméra de canalisations',
    label: 'Inspection caméra',
  },
  {
    src: '/images/about/fosses.jpeg',
    alt: 'Installation de fosse septique',
    label: 'Fosses septiques',
  },
  {
    src: '/images/about/sanstranchees.jpeg',
    alt: 'Travaux sans tranchée - drainage',
    label: 'Sans tranchée',
  },
  {
    src: '/images/about/travaux.jpeg',
    alt: 'Travaux VRD et terrassement',
    label: 'Travaux VRD',
  },
]

/* ── Values data ── */
const values = [
  {
    title: 'Réactivité',
    desc: "Intervention en moins d'une heure, 24h/24 et 7j/7, y compris nuits et week-ends.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: 'bg-gold/10 text-gold border-gold/20',
  },
  {
    title: 'Transparence',
    desc: "Devis gratuit et détaillé avant chaque intervention. Aucune surprise sur la facture.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: 'bg-forest/10 text-forest border-forest/20',
  },
  {
    title: 'Expertise',
    desc: "Techniciens qualifiés équipés de matériel professionnel de dernière génération.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.6-4.66a1.002 1.002 0 01.35-1.72l6.66-1.92a1 1 0 011.22.62l2.62 6.29a1 1 0 01-.94 1.39H12.4a1 1 0 01-.98-.83V15.17zM21.54 15H17m-6.54 0H2.46" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L9 21m2.42-5.83L14 21" />
      </svg>
    ),
    color: 'bg-sage/10 text-sage border-sage/20',
  },
  {
    title: 'Respect',
    desc: "Travail soigné, chantier propre et respect de votre habitation à chaque intervention.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    color: 'bg-sand/30 text-forest border-sand/40',
  },
]

/* ── Stats data ── */
const stats = [
  { end: 24, suffix: 'h/24', label: 'Disponibilité' },
  { end: 45, suffix: ' min', label: "Temps d'intervention" },
  { end: 100, suffix: ' km', label: "Rayon d'action" },
  { end: 59, suffix: '+', label: 'Villes couvertes' },
]

/* ── Equipment data ── */
const equipment = [
  {
    name: 'Hydrocureuse haute pression',
    desc: "Jusqu'à 350 bars pour un nettoyage en profondeur des canalisations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    color: 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-cream',
    border: 'hover:border-gold/30',
  },
  {
    name: 'Caméra endoscopique HD',
    desc: 'Diagnostic vidéo précis pour localiser les problèmes sans travaux.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    color: 'bg-sage/10 text-sage group-hover:bg-sage group-hover:text-cream',
    border: 'hover:border-sage/30',
  },
  {
    name: 'Furet électrique RIDGID',
    desc: 'Débouchage mécanique efficace pour tous types de canalisations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
      </svg>
    ),
    color: 'bg-forest/10 text-forest group-hover:bg-forest group-hover:text-cream',
    border: 'hover:border-forest/30',
  },
  {
    name: 'Camion hydrocureur',
    desc: "Véhicule équipé pour les interventions de curage et vidange sur site.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    color: 'bg-gold/15 text-gold group-hover:bg-gold group-hover:text-cream',
    border: 'hover:border-gold/30',
  },
]

export default function AboutContent() {
  return (
    <>
      {/* ── Section: Notre histoire ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Decorations */}
        <PipeCorner className="absolute top-12 right-8 w-16 h-16 text-sage/[0.06] hidden lg:block" />
        <WaterDrop className="absolute bottom-20 left-12 w-4 h-6 text-sage/[0.08] hidden lg:block" />
        <WaterDrop className="absolute top-32 left-1/3 w-3 h-5 text-gold/[0.06] hidden lg:block" />
        <div className="absolute -bottom-32 right-0 w-80 h-80 bg-cream rounded-full blur-3xl opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <FadeIn>
                <span className="inline-block bg-forest/10 text-forest text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-forest/20">
                  Qui sommes-nous ?
                </span>
              </FadeIn>
              <FadeInUp delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-6 leading-tight">
                  Des professionnels de terrain,<br />
                  <span className="text-sage">au service de votre confort</span>
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Earth Sanitation est née d&apos;une volonté simple : proposer des services
                  d&apos;assainissement <strong className="text-forest">fiables, rapides et transparents</strong>.
                  Notre équipe intervient au quotidien sur le terrain pour résoudre
                  vos problèmes de canalisations avec sérieux et efficacité.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.3}>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Basés entre Montpellier et Nîmes, nous couvrons l&apos;Hérault, le Gard
                  et les départements limitrophes. Du simple débouchage à la rénovation
                  complète de réseau, nous mettons notre savoir-faire à votre disposition
                  <strong className="text-forest"> 24 heures sur 24</strong>.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.4}>
                <div className="flex items-center gap-4">
                  <a
                    href="/devis"
                    className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 px-6 py-3 bg-forest text-cream hover:bg-forest/90"
                  >
                    Demander un devis
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 px-6 py-3 border-2 border-forest text-forest hover:bg-forest hover:text-cream"
                  >
                    Nos services
                  </a>
                </div>
              </FadeInUp>
            </div>

            {/* Photo collage */}
            <FadeInUp delay={0.2}>
              <div className="relative">
                {/* Main photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-forest/20 border-4 border-white">
                  <Image
                    src="/images/about/camion.jpeg"
                    alt="Camion Earth Sanitation"
                    width={600}
                    height={450}
                    className="w-full h-[350px] lg:h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-forest text-sm font-semibold px-4 py-2 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Disponible 24h/24
                    </span>
                  </div>
                </div>

                {/* Floating secondary photo */}
                <div className="absolute -bottom-6 -right-6 w-36 h-36 lg:w-44 lg:h-44 rounded-xl overflow-hidden shadow-xl border-4 border-white z-10">
                  <Image
                    src="/images/about/toilettes.jpeg"
                    alt="Technicien au travail"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Pipe decoration */}
                <div className="absolute -top-4 -right-4 w-20 h-20 hidden lg:block">
                  <PipeCorner className="w-full h-full text-gold/20 rotate-180" />
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ── Section: Nos valeurs ── */}
      <section className="relative py-20 lg:py-28 bg-cream/50 overflow-hidden">
        <PipeHorizontal className="absolute top-16 left-0 w-48 text-sage/[0.06] hidden lg:block" />
        <PipeHorizontal className="absolute bottom-20 right-0 w-64 text-sage/[0.04] hidden lg:block rotate-180" />
        <WaterDrop className="absolute top-1/3 right-20 w-4 h-6 text-gold/[0.08] hidden lg:block" />
        <PipeValve className="absolute bottom-16 left-20 w-8 h-12 text-sage/[0.05] hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block bg-gold/10 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-gold/20">
                Nos engagements
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
                Ce qui nous distingue
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => {
              const borderAccent = v.color.includes('gold') ? 'border-l-gold' : v.color.includes('forest') ? 'border-l-forest' : v.color.includes('sage') ? 'border-l-sage' : 'border-l-sand'
              const topGlow = v.color.includes('gold') ? 'from-gold/5' : v.color.includes('forest') ? 'from-forest/5' : v.color.includes('sage') ? 'from-sage/5' : 'from-sand/10'
              return (
                <StaggerItem key={v.title}>
                  <div className={`group bg-gradient-to-b ${topGlow} to-white rounded-2xl p-7 h-full border border-gray-100 border-l-4 ${borderAccent} hover:border-forest/20 hover:border-l-4 hover:${borderAccent} hover:shadow-xl hover:shadow-forest/5 hover:-translate-y-1 transition-all duration-300`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 border ${v.color} group-hover:scale-110 transition-transform duration-300`}>
                      {v.icon}
                    </div>
                    <h3 className="font-heading font-bold text-forest text-lg mb-2">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Section: Chiffres clés ── */}
      <section className="relative py-20 lg:py-24 bg-forest overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-sage)_0%,transparent_70%)] opacity-15" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        {/* Pipe decorations */}
        <PipeCorner className="absolute top-8 left-8 w-20 h-20 text-cream/[0.04] hidden lg:block" />
        <PipeCorner className="absolute bottom-8 right-8 w-20 h-20 text-cream/[0.04] hidden lg:block rotate-180" />
        <WaterDrop className="absolute top-1/2 left-1/4 w-3 h-5 text-gold/[0.08] hidden lg:block" />
        <WaterDrop className="absolute bottom-12 right-1/3 w-4 h-6 text-cream/[0.06] hidden lg:block" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-cream text-center mb-4">
              Earth Sanitation en chiffres
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-14" />
          </FadeIn>

          <ScaleIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map(s => (
                <div key={s.label} className="text-center group">
                  <p className="text-4xl lg:text-5xl font-heading font-extrabold text-gold mb-2 group-hover:drop-shadow-[0_0_12px_rgba(139,105,20,0.4)] transition-all duration-300">
                    <AnimatedCounter end={s.end} suffix={s.suffix} />
                  </p>
                  <p className="text-cream/60 text-sm font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ── Section: Nos réalisations / Galerie photos ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <WaterDrop className="absolute top-20 right-16 w-5 h-7 text-sage/[0.07] hidden lg:block" />
        <PipeCorner className="absolute bottom-12 left-8 w-14 h-14 text-sage/[0.05] hidden lg:block rotate-90" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-cream rounded-full blur-3xl opacity-60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block bg-sage/10 text-sage text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-sage/20">
                Sur le terrain
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-4">
                Nos interventions en images
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {photos.map(photo => (
              <StaggerItem key={photo.label}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-forest/15 transition-all duration-500 border border-gray-100">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-forest text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                      {photo.label}
                    </span>
                  </div>
                  {/* Corner pipe decoration */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <PipeCorner className="w-8 h-8 text-white/30 rotate-90" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Section: Notre équipement ── */}
      <section className="relative py-20 lg:py-28 bg-cream/50 overflow-hidden">
        <PipeHorizontal className="absolute top-20 right-0 w-56 text-sage/[0.05] hidden lg:block" />
        <PipeValve className="absolute top-1/2 left-12 w-6 h-10 text-sage/[0.06] hidden lg:block" />
        <WaterDrop className="absolute bottom-16 right-24 w-3 h-5 text-gold/[0.07] hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Equipment photo */}
            <FadeInUp>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-forest/15 border-4 border-white">
                  <Image
                    src="/images/about/camera.jpeg"
                    alt="Équipement professionnel Earth Sanitation"
                    width={600}
                    height={400}
                    className="w-full h-[320px] lg:h-[400px] object-cover"
                  />
                </div>
                {/* Floating accent */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                  <Image
                    src="/images/about/fosses.jpeg"
                    alt="Installation fosse septique"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -left-3 hidden lg:block">
                  <PipeCorner className="w-16 h-16 text-gold/20" />
                </div>
              </div>
            </FadeInUp>

            {/* Equipment list */}
            <div>
              <FadeIn>
                <span className="inline-block bg-forest/10 text-forest text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-forest/20">
                  Matériel professionnel
                </span>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-forest mb-8 leading-tight">
                  Équipés pour <span className="text-gold">chaque situation</span>
                </h2>
              </FadeIn>

              <StaggerContainer staggerDelay={0.12} className="space-y-4">
                {equipment.map(eq => (
                  <StaggerItem key={eq.name}>
                    <div className={`group flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 ${eq.border} hover:shadow-lg hover:shadow-forest/5 transition-all duration-300`}>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${eq.color}`}>
                        {eq.icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-forest mb-1">{eq.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{eq.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section: Pourquoi nous choisir ── */}
      <section className="relative py-20 lg:py-24 bg-forest overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-sage)_0%,transparent_60%)] opacity-15" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <PipeCorner className="absolute top-12 right-12 w-16 h-16 text-cream/[0.04] hidden lg:block rotate-90" />
        <WaterDrop className="absolute bottom-20 left-16 w-4 h-6 text-cream/[0.05] hidden lg:block" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-cream mb-4">
                Pourquoi choisir Earth Sanitation ?
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full mx-auto" />
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Tarifs transparents',
                desc: 'Devis gratuit avant chaque intervention. Tarif d\'astreinte clairement communiqué pour les heures creuses.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                ),
              },
              {
                title: 'Devis gratuit',
                desc: 'Diagnostic et estimation avant toute intervention. Aucun engagement.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                ),
              },
              {
                title: 'Garantie travaux',
                desc: 'Nos interventions sont garanties. En cas de problème, nous revenons gratuitement.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
            ].map(item => (
              <StaggerItem key={item.title}>
                <div className="group text-center p-8 rounded-2xl bg-cream/5 border border-cream/10 hover:border-gold/30 hover:bg-cream/10 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto mb-5 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-cream text-lg mb-2">{item.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
