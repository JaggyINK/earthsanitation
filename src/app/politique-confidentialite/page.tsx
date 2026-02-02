import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { COMPANY_NAME, COMPANY_EMAIL } from '@/lib/utils'

export const metadata: Metadata = { title: 'Politique de confidentialité' }

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="bg-forest text-cream py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Politique de confidentialité', href: '/politique-confidentialite' }]} />
          <h1 className="text-3xl font-heading font-extrabold">Politique de confidentialité</h1>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose text-sage">
          <h2 className="text-forest">Collecte des données</h2>
          <p>Les données personnelles collectées via nos formulaires (nom, téléphone, email, message) sont utilisées uniquement pour répondre à vos demandes.</p>
          <h2 className="text-forest">Utilisation des données</h2>
          <p>Vos données ne sont jamais vendues ni transmises à des tiers. Elles sont conservées de manière sécurisée et supprimées après traitement de votre demande.</p>
          <h2 className="text-forest">Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Contactez-nous à {COMPANY_EMAIL}.</p>
          <h2 className="text-forest">Cookies</h2>
          <p>Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement. Aucun cookie de tracking publicitaire n&apos;est utilisé.</p>
        </div>
      </section>
    </>
  )
}
