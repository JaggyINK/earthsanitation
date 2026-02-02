'use client'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-gray-900">Avis clients</h1>
        <p className="text-gray-500 text-sm mt-1">Avis récupérés depuis Google Business Profile</p>
      </div>

      {/* Real summary from Google */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="text-center">
          <p className="text-5xl font-heading font-bold text-gray-900">5.0</p>
          <Stars rating={5} />
          <p className="text-sm text-gray-500 mt-1">5 avis Google</p>
        </div>
        <div className="flex-1 w-full">
          {[5, 4, 3, 2, 1].map(star => {
            const count = star === 5 ? 5 : 0
            const pct = (count / 5) * 100
            return (
              <div key={star} className="flex items-center gap-2 mb-1">
                <span className="text-xs text-gray-500 w-3">{star}</span>
                <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div className="h-2 rounded-full bg-yellow-400" style={{ width: `${pct}%` }} />
                </div>
                <span className="text-xs text-gray-400 w-6">{count}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Info */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
        <strong>Pour afficher les avis automatiquement :</strong>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Obtenir une clé <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="underline">Google Places API</a></li>
          <li>L&apos;ajouter dans Paramètres &gt; Clés API</li>
          <li>Les avis seront récupérés et affichés automatiquement</li>
        </ol>
      </div>

      <div className="mt-4">
        <a
          href="https://www.google.com/maps/place/Earth+Sanitation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-forest hover:underline text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Voir la fiche Google Business Profile
        </a>
      </div>
    </div>
  )
}
