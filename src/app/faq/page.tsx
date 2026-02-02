import type { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { FAQSchema } from '@/components/seo/StructuredData'
import { faqs } from '@/data/faq'
import FAQAccordion from './FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQ — Questions fréquentes',
  description: 'Retrouvez les réponses aux questions les plus fréquentes sur le débouchage, l\'assainissement et nos interventions.',
}

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="bg-forest text-cream py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} />
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold">Questions fréquentes</h1>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  )
}
