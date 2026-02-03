import Link from 'next/link'
import Button from '@/components/ui/Button'
import PhoneButton from '@/components/shared/PhoneButton'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        {/* Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-cream rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-6xl font-heading font-bold text-forest mb-4">404</h1>
        <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
          Page introuvable
        </h2>
        <p className="text-gray-600 mb-8">
          Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
          Pas de panique, nous sommes là pour vous aider.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button href="/" variant="primary" size="lg">
            Retour à l'accueil
          </Button>
          <PhoneButton />
        </div>

        {/* Quick links */}
        <div className="pt-8 border-t border-sand/30">
          <p className="text-sm text-gray-500 mb-4">Vous cherchiez peut-être :</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services/debouchage-canalisations" className="text-forest hover:text-sage text-sm font-medium">
              Débouchage
            </Link>
            <span className="text-sand">|</span>
            <Link href="/urgence" className="text-forest hover:text-sage text-sm font-medium">
              Urgence 24/7
            </Link>
            <span className="text-sand">|</span>
            <Link href="/devis" className="text-forest hover:text-sage text-sm font-medium">
              Devis gratuit
            </Link>
            <span className="text-sand">|</span>
            <Link href="/contact" className="text-forest hover:text-sage text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
