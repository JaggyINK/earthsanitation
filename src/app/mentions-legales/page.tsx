import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { COMPANY_NAME, COMPANY_FULL_NAME, COMPANY_EMAIL, COMPANY_ADDRESS, COMPANY_SIRET, PHONE_NUMBER } from '@/lib/utils'

export const metadata: Metadata = { title: 'Mentions légales' }

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-forest text-cream py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Mentions légales', href: '/mentions-legales' }]} />
          <h1 className="text-3xl font-heading font-extrabold">Mentions légales</h1>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose text-sage">
          <h2 className="text-forest">Éditeur du site</h2>
          <p>{COMPANY_FULL_NAME}<br />Siège social : {COMPANY_ADDRESS}<br />SIRET : {COMPANY_SIRET}<br />Téléphone : {PHONE_NUMBER}<br />Email : {COMPANY_EMAIL}</p>
          <h2 className="text-forest">Hébergement</h2>
          <p>Vercel Inc.<br />340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
          <h2 className="text-forest">Propriété intellectuelle</h2>
          <p>L&apos;ensemble des contenus de ce site (textes, images, logos) sont la propriété exclusive d&apos;{COMPANY_NAME}. Toute reproduction est interdite sans autorisation.</p>
        </div>
      </section>
    </>
  )
}
