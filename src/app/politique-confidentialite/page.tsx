import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_ADDRESS } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité d\'Earth Sanitation. Protection de vos données personnelles, cookies et droits RGPD.',
  robots: { index: true, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="bg-forest text-cream py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Politique de confidentialit\u00e9', href: '/politique-confidentialite' }]} />
          <h1 className="text-3xl font-heading font-extrabold">Politique de confidentialit&eacute;</h1>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose text-sage">
          <h2 className="text-forest">1. Responsable du traitement</h2>
          <p>
            Les donn&eacute;es personnelles collect&eacute;es sur ce site sont trait&eacute;es par :<br />
            <strong>{COMPANY_NAME}</strong><br />
            {COMPANY_ADDRESS}<br />
            Email : {COMPANY_EMAIL}
          </p>

          <h2 className="text-forest">2. Donn&eacute;es collect&eacute;es</h2>
          <p>
            Nous collectons les donn&eacute;es personnelles que vous nous transmettez volontairement via nos formulaires de contact et de demande de devis :
          </p>
          <ul>
            <li>Nom et pr&eacute;nom</li>
            <li>Num&eacute;ro de t&eacute;l&eacute;phone</li>
            <li>Adresse email</li>
            <li>Adresse postale (si fournie)</li>
            <li>Message et description du besoin</li>
            <li>Photos &eacute;ventuelles des travaux &agrave; r&eacute;aliser</li>
          </ul>

          <h2 className="text-forest">3. Finalit&eacute; du traitement</h2>
          <p>
            Vos donn&eacute;es sont utilis&eacute;es exclusivement pour :
          </p>
          <ul>
            <li>R&eacute;pondre &agrave; vos demandes de contact et de devis</li>
            <li>Planifier et r&eacute;aliser les interventions demand&eacute;es</li>
            <li>Assurer le suivi client</li>
            <li>Am&eacute;liorer nos services</li>
          </ul>

          <h2 className="text-forest">4. Partage des donn&eacute;es</h2>
          <p>
            Vos donn&eacute;es personnelles ne sont <strong>jamais vendues, lou&eacute;es ou transmises &agrave; des tiers</strong> &agrave; des fins commerciales. Elles sont conserv&eacute;es de mani&egrave;re s&eacute;curis&eacute;e et accessibles uniquement au personnel habilit&eacute; d&apos;{COMPANY_NAME}.
          </p>

          <h2 className="text-forest">5. Dur&eacute;e de conservation</h2>
          <p>
            Les donn&eacute;es personnelles sont conserv&eacute;es pendant une dur&eacute;e maximale de 3 ans apr&egrave;s le dernier contact. Les donn&eacute;es de navigation (visites, clics) sont anonymis&eacute;es et supprim&eacute;es automatiquement apr&egrave;s 60 jours.
          </p>

          <h2 className="text-forest">6. Vos droits (RGPD)</h2>
          <p>
            Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD), vous disposez des droits suivants :
          </p>
          <ul>
            <li><strong>Droit d&apos;acc&egrave;s :</strong> obtenir une copie de vos donn&eacute;es personnelles</li>
            <li><strong>Droit de rectification :</strong> corriger des donn&eacute;es inexactes</li>
            <li><strong>Droit de suppression :</strong> demander l&apos;effacement de vos donn&eacute;es</li>
            <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos donn&eacute;es</li>
            <li><strong>Droit &agrave; la portabilit&eacute; :</strong> recevoir vos donn&eacute;es dans un format structur&eacute;</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous &agrave; : <a href={`mailto:${COMPANY_EMAIL}`} className="text-forest hover:underline">{COMPANY_EMAIL}</a>
          </p>

          <h2 className="text-forest">7. Cookies</h2>
          <p>
            Ce site utilise uniquement des <strong>cookies techniques</strong> n&eacute;cessaires &agrave; son bon fonctionnement (session d&apos;authentification). Aucun cookie de tracking publicitaire ou de profilage n&apos;est utilis&eacute;.
          </p>

          <h2 className="text-forest">8. S&eacute;curit&eacute;</h2>
          <p>
            Nous mettons en &oelig;uvre des mesures de s&eacute;curit&eacute; techniques et organisationnelles adapt&eacute;es pour prot&eacute;ger vos donn&eacute;es personnelles contre tout acc&egrave;s non autoris&eacute;, modification, divulgation ou destruction. Les mots de passe sont chiffr&eacute;s et les communications sont s&eacute;curis&eacute;es par SSL/TLS.
          </p>
        </div>
      </section>
    </>
  )
}
