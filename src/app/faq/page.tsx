import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { FAQSchema } from '@/components/seo/StructuredData'
import { prisma } from '@/lib/prisma'
import FAQAccordion from './FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQ — Débouchage, Assainissement, Vidange Fosse Septique',
  description: 'Réponses aux questions fréquentes sur le débouchage de canalisations, l\'assainissement, la vidange de fosse septique, les prix et nos interventions à Montpellier.',
  alternates: {
    canonical: 'https://earth-sanitation.fr/faq',
  },
}

export const dynamic = 'force-dynamic'

export default async function FAQPage() {
  const faqs = await prisma.fAQ.findMany({
    where: { visible: true },
    orderBy: { order: 'asc' },
  })

  const faqData = faqs.map(f => ({ question: f.question, answer: f.answer }))

  return (
    <>
      <FAQSchema faqs={faqData} />
      <section className="bg-forest text-cream py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} className="mb-6 text-cream/60" />
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold">Questions fréquentes</h1>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.length === 0 ? (
            <p className="text-center text-gray-400 py-12">Aucune question pour le moment.</p>
          ) : (
            <FAQAccordion faqs={faqData} />
          )}
        </div>
      </section>
    </>
  )
}
