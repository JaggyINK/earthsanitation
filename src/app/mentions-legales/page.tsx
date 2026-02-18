import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import {
  COMPANY_NAME,
  COMPANY_FULL_NAME,
  COMPANY_EMAIL,
  COMPANY_ADDRESS,
  COMPANY_SIRET,
  COMPANY_RCS,
  COMPANY_TVA,
  COMPANY_CAPITAL,
  COMPANY_DIRECTOR,
  PHONE_NUMBER,
} from '@/lib/utils'

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
          <h2 className="text-forest">1. Informations sur l&apos;entreprise</h2>
          <p>
            <strong>Raison sociale :</strong> {COMPANY_FULL_NAME}<br />
            <strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)<br />
            <strong>Capital social :</strong> {COMPANY_CAPITAL}<br />
            <strong>N&deg; RCS :</strong> {COMPANY_RCS}<br />
            <strong>SIRET :</strong> {COMPANY_SIRET}<br />
            <strong>N&deg; TVA intracommunautaire :</strong> {COMPANY_TVA}<br />
            <strong>Directeur de la publication :</strong> {COMPANY_DIRECTOR}<br />
            <strong>Si&egrave;ge social :</strong> {COMPANY_ADDRESS}<br />
            <strong>T&eacute;l&eacute;phone :</strong> {PHONE_NUMBER}<br />
            <strong>Email :</strong> {COMPANY_EMAIL}
          </p>

          <h2 className="text-forest">2. H&eacute;bergement</h2>
          <p>
            Ce site est h&eacute;berg&eacute; par :<br />
            <strong>Hostinger International Ltd.</strong><br />
            61 Lordou Vironos Street, 6023 Larnaca, Chypre<br />
            Site web : <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" className="text-forest hover:underline">www.hostinger.fr</a><br />
            Type d&apos;h&eacute;bergement : VPS (Serveur Priv&eacute; Virtuel)
          </p>

          <h2 className="text-forest">3. Cr&eacute;ation du site</h2>
          <p>
            Ce site a &eacute;t&eacute; con&ccedil;u et d&eacute;velopp&eacute; par <strong>S.MIR</strong><br />
            Contact : <a href="mailto:jaggyinkgraph@gmail.com" className="text-forest hover:underline">jaggyinkgraph@gmail.com</a>
          </p>

          <h2 className="text-forest">4. Propri&eacute;t&eacute; intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de ce site (textes, images, logos, vid&eacute;os, graphismes) sont la propri&eacute;t&eacute; exclusive d&apos;{COMPANY_NAME} ou de ses partenaires. Toute reproduction, repr&eacute;sentation, modification, publication ou adaptation totale ou partielle est interdite sans autorisation &eacute;crite pr&eacute;alable.
          </p>

          <h2 className="text-forest">5. Moyens de paiement accept&eacute;s</h2>
          <p>
            Carte bancaire &mdash; Ch&egrave;ques &mdash; Virements &mdash; Esp&egrave;ces
          </p>

          <h2 className="text-forest">6. M&eacute;diation</h2>
          <p>
            Conform&eacute;ment aux articles L.616-1 et R.616-1 du Code de la consommation, {COMPANY_NAME} propose un dispositif de m&eacute;diation. Pour conna&icirc;tre le nom de notre m&eacute;diateur de la consommation, veuillez nous contacter &agrave; l&apos;adresse suivante : {COMPANY_EMAIL}.
          </p>

          <h2 className="text-forest">7. Responsabilit&eacute;</h2>
          <p>
            {COMPANY_NAME} s&apos;efforce de fournir des informations exactes et &agrave; jour sur ce site. Toutefois, {COMPANY_NAME} ne garantit pas l&apos;exactitude, la compl&eacute;tude ou l&apos;actualit&eacute; des informations publi&eacute;es. L&apos;utilisation des informations de ce site se fait sous la seule responsabilit&eacute; de l&apos;utilisateur.
          </p>
        </div>
      </section>
    </>
  )
}
