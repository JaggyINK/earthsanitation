import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'À propos',
  description: "Découvrez Earth Sanitation, votre spécialiste en débouchage et assainissement sur Montpellier et Nîmes.",
}

export default function AProposPage() {
  return (
    <>
      <section className="bg-forest text-cream py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'À propos', href: '/a-propos' }]} />
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
                { title: 'Réactivité', desc: "Intervention rapide en moins d'une heure, à toute heure du jour et de la nuit." },
                { title: 'Transparence', desc: 'Devis clair et détaillé avant chaque intervention. Pas de mauvaise surprise.' },
                { title: 'Expertise', desc: 'Techniciens qualifiés et matériel professionnel de dernière génération.' },
              ].map(v => (
                <div key={v.title} className="bg-cream rounded-xl p-6">
                  <h3 className="font-heading font-bold text-forest mb-2">{v.title}</h3>
                  <p className="text-sage text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-heading font-bold text-forest mb-4">Notre zone d&apos;intervention</h2>
            <p className="text-sage leading-relaxed">
              Basés entre Montpellier et Nîmes, nous couvrons l&apos;ensemble de l&apos;Hérault, du Gard
              et des départements limitrophes. Notre rayon d&apos;action de 100 km nous permet d&apos;intervenir
              rapidement sur Béziers, Sète, Alès, Lunel, Agde et toutes les communes environnantes.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Button href="/contact">Nous contacter</Button>
            <Button href="/devis" variant="outline">Devis gratuit</Button>
          </div>
        </div>
      </section>
    </>
  )
}
