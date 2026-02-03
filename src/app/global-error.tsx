'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <html lang="fr">
      <body className="bg-gray-50">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-xl mx-auto px-4 text-center">
            {/* Simple styling without Tailwind classes that might not load */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  width: '128px',
                  height: '128px',
                  margin: '0 auto',
                  backgroundColor: '#FEE2E2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  style={{ width: '64px', height: '64px', color: '#F87171' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
            </div>

            <h1
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1B4332',
                marginBottom: '1rem',
              }}
            >
              Erreur critique
            </h1>

            <p style={{ color: '#6B7280', marginBottom: '2rem' }}>
              Une erreur inattendue s'est produite. Veuillez réessayer ou nous contacter.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={reset}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#1B4332',
                  color: 'white',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                Réessayer
              </button>
              <a
                href="/"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: '#1B4332',
                  borderRadius: '0.5rem',
                  border: '2px solid #1B4332',
                  textDecoration: 'none',
                  fontWeight: '500',
                }}
              >
                Accueil
              </a>
            </div>

            <div
              style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#F5F1EB',
                borderRadius: '0.5rem',
              }}
            >
              <p style={{ fontWeight: '500', color: '#1B4332', marginBottom: '0.5rem' }}>
                Urgence 24h/24
              </p>
              <a
                href="tel:0623122057"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#DC2626',
                  color: 'white',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                06 23 12 20 57
              </a>
            </div>

            {error.digest && (
              <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#9CA3AF' }}>
                Code : {error.digest}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
