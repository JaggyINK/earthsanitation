'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'
import PhoneButton from '@/components/shared/PhoneButton'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console (in production, send to error tracking service)
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        {/* Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-red-50 rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-heading font-bold text-forest mb-4">
          Une erreur est survenue
        </h1>
        <p className="text-gray-600 mb-8">
          Nous sommes désolés, quelque chose s'est mal passé.
          Veuillez réessayer ou nous contacter directement.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button onClick={reset} variant="primary" size="lg">
            Réessayer
          </Button>
          <Button href="/" variant="outline" size="lg">
            Retour à l'accueil
          </Button>
        </div>

        {/* Contact CTA */}
        <div className="p-6 bg-cream rounded-xl">
          <p className="text-forest font-medium mb-3">
            Besoin d'aide urgente ?
          </p>
          <PhoneButton variant="emergency" />
        </div>

        {/* Error ID for support */}
        {error.digest && (
          <p className="mt-6 text-xs text-gray-400">
            Code erreur : {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
