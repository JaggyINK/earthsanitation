import type { Metadata } from 'next'
import PhoneButton from '@/components/shared/PhoneButton'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { PHONE_HREF } from '@/lib/utils'
import ReviewsSection from '@/components/shared/ReviewsSection'
import Image from 'next/image'


export const metadata: Metadata = {
  title: 'Urgence Débouchage 24h/24 7j/7',
  description:
    "Urgence canalisation bouchée ? Intervention en moins d'1h sur Montpellier, Nîmes et 100km. Appelez maintenant, disponible 24h/24.",
}

export default function UrgencePage() {
  return (
    <>
<section className="relative text-white overflow-hidden">
  {/* Image de fond */}
  <Image
    src="/images/urgence-bg.webp"
    alt="Urgence débouchage canalisation"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay rouge */}
  <div className="absolute inset-0 bg-red-600/85" />

  {/* Contenu */}
  <div className="relative py-16 lg:py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Breadcrumbs items={[{ name: 'Urgence 24/7', href: '/urgence' }]} />

      <div className="animate-pulse inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
        Disponible maintenant
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-6">
        Urgence Débouchage
        <span className="block mt-2">24h/24 — 7j/7</span>
      </h1>

      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        Canalisations bouchées, refoulement, inondation ? Nos techniciens interviennent
        en urgence en moins d&apos;une heure.
      </p>

      <a
        href={PHONE_HREF}
        className="
          inline-flex items-center gap-3
          bg-white text-red-700
          font-bold text-2xl
          px-10 py-5 rounded-xl
          hover:bg-sky-400 hover:text-forest
          active:bg-sky-500
          transition-all
          shadow-xl
        "
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
        Appeler maintenant
      </a>
    </div>
  </div>
</section>


      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-forest mb-8 text-center">
            Pourquoi nous appeler en urgence ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Intervention < 1h', desc: 'Nos équipes sont en permanence sur le terrain pour intervenir au plus vite.' },
              { title: 'Sans surcoût', desc: 'Pas de majoration le week-end, la nuit ou les jours fériés.' },
              { title: 'Devis avant travaux', desc: 'Un devis clair vous est présenté avant toute intervention.' },
            ].map(item => (
              <div key={item.title} className="bg-cream rounded-xl p-6 text-center">
                <h3 className="font-heading font-bold text-forest mb-2">{item.title}</h3>
                <p className="text-sage text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Reviews */}
      <ReviewsSection />
    </>
  )
}
