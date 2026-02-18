import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import ReviewsSection from '@/components/shared/ReviewsSection'
import Image from 'next/image'
import Link from 'next/link'
import UrgenceClientSections from './UrgenceClientSections'

export const metadata: Metadata = {
  title: 'Urgence Débouchage 24h/24 7j/7 — Intervention < 1h',
  description:
    "Urgence canalisation bouchée, refoulement, inondation ? Intervention en moins d'1h sur Montpellier, Nîmes et 100km autour. Disponible 24h/24 7j/7. Sans surcoût nuit et week-end.",
}

export default function UrgencePage() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative text-white overflow-hidden">
        <Image
          src="/images/urgence-bg.webp"
          alt="Urgence débouchage canalisation"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 via-red-700/60 to-red-900/80" />

        <div className="relative py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Breadcrumbs items={[{ name: 'Urgence 24/7', href: '/urgence' }]} />

            {/* Client-side live badge */}
            <UrgenceClientSections section="liveBadge" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-6 drop-shadow-lg">
              Urgence Débouchage
              <span className="block mt-2">24h/24 — 7j/7</span>
            </h1>

            <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
              Canalisations bouchées, refoulement, inondation ?
              Nos techniciens interviennent en urgence <strong>en moins d&apos;une heure</strong>.
            </p>

            <p className="text-white/70 text-sm mb-8 max-w-xl mx-auto">
              Sans surcoût la nuit, le week-end et les jours fériés.
              Devis gratuit avant toute intervention.
            </p>

            <UrgenceClientSections section="heroCTA" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ BANDEAU STATS ═══════════════════════ */}
      <section className="bg-forest text-cream py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <UrgenceClientSections section="counter" data={{ end: 45, suffix: ' min', label: 'Temps moyen d\'arrivée' }} />
            </div>
            <div>
              <UrgenceClientSections section="counter" data={{ end: 2500, suffix: '+', label: 'Interventions réalisées' }} />
            </div>
            <div>
              <UrgenceClientSections section="counter" data={{ end: 98, suffix: '%', label: 'Clients satisfaits' }} />
            </div>
            <div>
              <UrgenceClientSections section="counter" data={{ end: 0, suffix: '', label: 'Surcoût nuit/week-end', prefix: '' , displayText: '0 €' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SIGNES D'ALERTE ═══════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest text-center mb-4">
            Reconnaissez-vous ces signes ?
          </h2>
          <p className="text-sage text-center mb-12 max-w-2xl mx-auto">
            Si vous observez l&apos;un de ces symptômes, n&apos;attendez pas : chaque minute compte
            pour éviter des dégâts plus importants.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🚿',
                title: 'Eau qui remonte',
                desc: 'L\'eau remonte dans votre évier, douche, baignoire ou WC. Signe d\'un bouchon profond dans la canalisation.',
                severity: 'critique',
              },
              {
                icon: '🦨',
                title: 'Mauvaises odeurs',
                desc: 'Des odeurs d\'égout persistent dans votre logement. Cela indique un blocage ou une accumulation de déchets organiques.',
                severity: 'urgent',
              },
              {
                icon: '🌊',
                title: 'Inondation / Débordement',
                desc: 'Débordement de WC, d\'évier ou d\'un regard extérieur. Risque immédiat de dégât des eaux.',
                severity: 'critique',
              },
              {
                icon: '🐌',
                title: 'Écoulement très lent',
                desc: 'L\'eau met plusieurs minutes à s\'écouler. Signe avant-coureur d\'un bouchon complet imminent.',
                severity: 'modéré',
              },
              {
                icon: '🔊',
                title: 'Bruits de gargouillement',
                desc: 'Des gargouillements dans vos canalisations indiquent un problème d\'aération ou un bouchon partiel.',
                severity: 'modéré',
              },
              {
                icon: '💧',
                title: 'Fuite ou infiltration',
                desc: 'Tache d\'humidité au plafond, mur humide, fuite visible. Chaque minute d\'attente aggrave les dommages.',
                severity: 'critique',
              },
            ].map(item => (
              <div
                key={item.title}
                className="relative bg-cream rounded-2xl p-6 border border-sand/40 hover:shadow-lg transition-all duration-300"
              >
                <div className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${
                  item.severity === 'critique'
                    ? 'bg-red-100 text-red-700'
                    : item.severity === 'urgent'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {item.severity === 'critique' ? 'Critique' : item.severity === 'urgent' ? 'Urgent' : 'A surveiller'}
                </div>
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-heading font-bold text-forest text-lg mb-2">{item.title}</h3>
                <p className="text-sage text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA INTERMÉDIAIRE ═══════════════════════ */}
      <section className="bg-red-600 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-heading font-bold mb-2">
            Vous reconnaissez un de ces signes ?
          </h2>
          <p className="text-white/80 mb-6">
            N&apos;attendez pas que la situation s&apos;aggrave. Contactez-nous maintenant pour une intervention rapide.
          </p>
          <UrgenceClientSections section="ctaButton" />
        </div>
      </section>

      {/* ═══════════════════════ RISQUES ═══════════════════════ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest text-center mb-4">
            Pourquoi ne pas attendre ?
          </h2>
          <p className="text-sage text-center mb-12 max-w-2xl mx-auto">
            Un problème de canalisation non traité s&apos;aggrave rapidement.
            Voici ce qui peut arriver si vous n&apos;agissez pas.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600" />

            <div className="space-y-8 md:space-y-0">
              {[
                {
                  time: 'Premières heures',
                  title: 'Bouchon partiel',
                  desc: 'L\'eau s\'écoule lentement. C\'est le moment idéal pour intervenir : un simple débouchage suffit. Coût minimal.',
                  color: 'yellow',
                  cost: '80 - 150 €',
                },
                {
                  time: 'Après 24-48h',
                  title: 'Bouchon complet',
                  desc: 'L\'eau ne s\'écoule plus du tout. Risque de refoulement. Le bouchon se solidifie et nécessite un hydrocurage.',
                  color: 'orange',
                  cost: '150 - 350 €',
                },
                {
                  time: 'Après plusieurs jours',
                  title: 'Dégât des eaux',
                  desc: 'Débordements, infiltrations dans les murs et plafonds. Moisissures. Les dommages structurels commencent.',
                  color: 'red',
                  cost: '500 - 2 000 €+',
                },
                {
                  time: 'Après des semaines',
                  title: 'Dommages irréversibles',
                  desc: 'Effondrement de canalisation, contamination, dommages structurels majeurs. Travaux lourds nécessaires.',
                  color: 'red',
                  cost: '2 000 - 10 000 €+',
                },
              ].map((item, i) => (
                <div key={item.time} className={`md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? '' : 'md:direction-rtl'}`}>
                  <div className={`${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-6 border-l-4 ${
                      item.color === 'yellow'
                        ? 'border-yellow-400'
                        : item.color === 'orange'
                          ? 'border-orange-500'
                          : 'border-red-600'
                    } shadow-sm hover:shadow-md transition-shadow`}>
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                        item.color === 'yellow'
                          ? 'bg-yellow-100 text-yellow-700'
                          : item.color === 'orange'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-red-100 text-red-700'
                      }`}>
                        {item.time}
                      </span>
                      <h3 className="font-heading font-bold text-forest text-lg mb-2">{item.title}</h3>
                      <p className="text-sage text-sm leading-relaxed mb-3">{item.desc}</p>
                      <p className={`text-sm font-bold ${
                        item.color === 'yellow'
                          ? 'text-yellow-700'
                          : item.color === 'orange'
                            ? 'text-orange-700'
                            : 'text-red-700'
                      }`}>
                        Coût estimé : {item.cost}
                      </p>
                    </div>
                  </div>
                  {i % 2 !== 0 && <div className="hidden md:block" />}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-forest font-heading font-bold text-lg">
              Agir maintenant = économiser des milliers d&apos;euros
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ COMMENT ÇA MARCHE ═══════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest text-center mb-4">
            Comment se passe une intervention d&apos;urgence ?
          </h2>
          <p className="text-sage text-center mb-12 max-w-2xl mx-auto">
            De votre appel à la résolution du problème, tout est pensé pour aller vite.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Vous nous contactez',
                desc: 'Par WhatsApp ou téléphone. Décrivez votre problème, on évalue la situation immédiatement.',
                time: '2 min',
              },
              {
                step: 2,
                title: 'Diagnostic & devis',
                desc: 'Un technicien proche de chez vous est envoyé. Il établit un diagnostic et un devis clair sur place.',
                time: '< 1h',
              },
              {
                step: 3,
                title: 'Intervention',
                desc: 'Après votre accord, l\'intervention commence immédiatement avec du matériel professionnel.',
                time: '30 min - 2h',
              },
              {
                step: 4,
                title: 'Vérification',
                desc: 'On vérifie que tout fonctionne parfaitement. Vous recevez votre facture et nos conseils de prévention.',
                time: '15 min',
              },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                <div className="bg-cream rounded-2xl p-6 h-full hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 bg-forest text-cream rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-forest text-lg mb-2">{item.title}</h3>
                  <p className="text-sage text-sm leading-relaxed mb-3">{item.desc}</p>
                  <span className="inline-block text-xs font-bold text-forest bg-forest/10 px-3 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
                {i < 3 && (
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

      {/* ═══════════════════════ AVANTAGES ═══════════════════════ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest text-center mb-12">
            Pourquoi choisir Earth Sanitation en urgence ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Disponibilité totale 24/7',
                desc: 'Nuit, week-end, jours fériés — nous répondons toujours. Un technicien de garde est en permanence prêt à partir.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: 'Aucun surcoût caché',
                desc: 'Même tarif de jour comme de nuit. Pas de frais de déplacement. Le devis est établi et approuvé avant l\'intervention.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                title: 'Intervention locale rapide',
                desc: 'Basés à Montpellier, nous couvrons un rayon de 100 km : Nîmes, Sète, Béziers, Lunel, Alès et alentours.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L15.17 1.22m-8.85 8.85h13.38M8.42 20.04l5.1-5.1" />
                  </svg>
                ),
                title: 'Matériel professionnel',
                desc: 'Camion hydrocureur, caméra d\'inspection, furet électrique, pompe haute pression. Le bon outil pour chaque situation.',
              },
            ].map(item => (
              <div key={item.title} className="flex gap-4 bg-white rounded-2xl p-6 border border-sand/40 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center shrink-0 text-forest">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-forest text-lg mb-1">{item.title}</h3>
                  <p className="text-sage text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FAQ URGENCE ═══════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest text-center mb-10">
            Questions fréquentes — Urgence
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Intervenez-vous vraiment la nuit et le week-end ?',
                a: 'Oui, nous sommes disponibles 24h/24 et 7j/7, y compris les jours fériés. Un technicien de garde est toujours prêt à intervenir. Et contrairement à beaucoup de prestataires, nous n\'appliquons aucune majoration pour les interventions hors horaires classiques.',
              },
              {
                q: 'Combien coûte une intervention d\'urgence ?',
                a: 'Le tarif dépend de la nature du problème. Un débouchage simple commence autour de 80-150 €. Nous vous communiquons un devis précis et gratuit avant toute intervention, sans engagement. Aucun surcoût surprise.',
              },
              {
                q: 'Quel est votre délai d\'intervention ?',
                a: 'En moyenne, nos techniciens arrivent en 45 minutes. Dans tous les cas, nous nous engageons à intervenir en moins d\'une heure sur Montpellier et les communes proches, et sous 1h30 pour les zones plus éloignées.',
              },
              {
                q: 'Que faire en attendant votre arrivée ?',
                a: 'Coupez l\'arrivée d\'eau si possible. Ne versez aucun produit chimique dans la canalisation. Protégez vos affaires des zones inondées. Si l\'eau monte, placez des serpillières ou des seaux. Nous vous guiderons par téléphone en attendant.',
              },
              {
                q: 'Acceptez-vous les paiements par carte ou en plusieurs fois ?',
                a: 'Oui, nous acceptons les paiements par carte bancaire, espèces, virement et chèque. Pour les interventions plus importantes, nous pouvons mettre en place un paiement en plusieurs fois. Discutons-en.',
              },
              {
                q: 'Êtes-vous assurés pour les dégâts éventuels ?',
                a: 'Oui, Earth Sanitation est une entreprise assurée en responsabilité civile professionnelle. Vous êtes couvert en cas de dommage lié à notre intervention.',
              },
            ].map(item => (
              <details key={item.q} className="group bg-cream border border-sand/50 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-medium text-forest hover:bg-cream/80 transition-colors">
                  {item.q}
                  <svg className="w-5 h-5 text-sage shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sage text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ZONE D'INTERVENTION ═══════════════════════ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-forest mb-4">
            Zone d&apos;intervention d&apos;urgence
          </h2>
          <p className="text-sage mb-8 max-w-2xl mx-auto">
            Basés à Montpellier, nous intervenons dans un rayon de 100 km
            pour toutes vos urgences de plomberie et débouchage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Montpellier', 'Nîmes', 'Sète', 'Béziers', 'Lunel',
              'Alès', 'Castelnau-le-Lez', 'Lattes', 'Palavas', 'Castries',
              'Sommières', 'Aigues-Mortes', 'Frontignan', 'Agde', 'Pézenas',
            ].map(ville => (
              <Link
                key={ville}
                href={`/zone/${ville.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`}
                className="bg-white text-forest text-sm font-medium px-4 py-2 rounded-full border border-sand/50 hover:bg-forest hover:text-cream transition-colors"
              >
                {ville}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ AVIS CLIENTS ═══════════════════════ */}
      <ReviewsSection />

      {/* ═══════════════════════ CTA FINAL ═══════════════════════ */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-4">
            Chaque minute compte.
          </h2>
          <p className="text-white/80 mb-3 text-lg max-w-xl mx-auto">
            Plus vous attendez, plus les dégâts s&apos;aggravent et les coûts augmentent.
          </p>
          <p className="text-white/60 mb-8 text-sm">
            Disponible 24h/24, 7j/7 — Montpellier et 100 km autour
          </p>
          <UrgenceClientSections section="finalCTA" />
        </div>
      </section>
    </>
  )
}
