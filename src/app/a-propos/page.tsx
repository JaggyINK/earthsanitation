import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import Button from '@/components/ui/Button'
import ReviewsSection from '@/components/shared/ReviewsSection'
import CitiesSection from './CitiesSection'

export const metadata: Metadata = {
  title: 'À propos',
  description: "Découvrez Earth Sanitation, votre spécialiste en débouchage et assainissement sur Montpellier et Nîmes.",
}

export default function AProposPage() {
  return (
    <>
      <section className="bg-forest text-cream py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'À propos' }]} className="mb-6 text-cream/60" />
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold">À propos d&apos;Earth Sanitation</h1>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl font-heading font-bold text-forest mb-4">Notre mission</h2>
            <p className="text-sage leading-relaxed">
              Earth Sanitation est une entreprise spécialisée dans le débouchage, l&apos;assainissement
              et les travaux de canalisations. Nous intervenons en urgence et sur rendez-vous,
              24h/24 et 7j/7, principalement autour de Montpellier et Nîmes, dans un rayon de 100 km.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-forest mb-4">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Réactivité', desc: "Intervention rapide en moins d'une heure, à toute heure du jour et de la nuit.", icon: '⚡' },
                { title: 'Transparence', desc: 'Devis clair et détaillé avant chaque intervention. Pas de mauvaise surprise.', icon: '📋' },
                { title: 'Expertise', desc: 'Techniciens qualifiés et matériel professionnel de dernière génération.', icon: '🔧' },
              ].map(v => (
                <div key={v.title} className="bg-cream rounded-xl p-6">
                  <h3 className="font-heading font-bold text-forest mb-2">{v.title}</h3>
                  <p className="text-sage text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chiffres clés */}
          <div className="bg-forest rounded-2xl p-8 text-cream">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">Earth Sanitation en chiffres</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '24/7', label: 'Disponibilité' },
                { value: '< 1h', label: "Délai d'intervention" },
                { value: '100 km', label: "Rayon d'action" },
                { value: '59+', label: 'Villes couvertes' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-3xl font-heading font-extrabold text-gold">{s.value}</p>
                  <p className="text-cream/70 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button href="/contact">Nous contacter</Button>
            <Button href="/devis" variant="outline">Devis gratuit</Button>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      <ReviewsSection />

      {/* Trustpilot */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-forest mb-6">Retrouvez-nous aussi sur</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://www.google.com/maps/place/Earth+Sanitation+BTP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-200 hover:border-forest hover:shadow-md transition-all"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <p className="font-semibold text-forest text-sm">Google</p>
                <p className="text-xs text-gray-500">Voir nos avis</p>
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574835776982"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <div className="text-left">
                <p className="font-semibold text-forest text-sm">Facebook</p>
                <p className="text-xs text-gray-500">Notre page</p>
              </div>
            </a>
            <a
              href="https://www.trustpilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-md transition-all"
            >
              <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <div className="text-left">
                <p className="font-semibold text-forest text-sm">Trustpilot</p>
                <p className="text-xs text-gray-500">Bientôt disponible</p>
              </div>
            </a>
            <a
              href="https://www.pagesjaunes.fr/pros/58439530"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-200 hover:border-yellow-500 hover:shadow-md transition-all"
            >
              <span className="text-2xl font-bold text-yellow-500">PJ</span>
              <div className="text-left">
                <p className="font-semibold text-forest text-sm">Pages Jaunes</p>
                <p className="text-xs text-gray-500">Notre fiche</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Villes d'intervention */}
      <CitiesSection />

      {/* CTA final */}
      <section className="bg-forest text-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
            Besoin d&apos;une intervention ?
          </h2>
          <p className="text-cream/80 mb-8">
            Nos équipes sont disponibles 24h/24 pour tous vos problèmes
            de canalisations et d&apos;assainissement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/urgence" variant="emergency">Urgence 24/7</Button>
            <Button href="/devis" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-forest">
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
