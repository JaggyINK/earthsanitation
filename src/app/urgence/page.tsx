import type { Metadata } from 'next'
import PhoneButton from '@/components/shared/PhoneButton'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { getWhatsAppUrl } from '@/lib/utils'
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
  <div className="absolute inset-0 bg-red-600/55" />

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
        href={getWhatsAppUrl({ type: 'urgence' })}
        target="_blank"
        rel="noopener noreferrer"
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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Contacter maintenant
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
