'use client'

import StatCard from '@/components/admin/StatCard'

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-500 text-sm mt-1">Vue d&apos;ensemble des performances</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Visites cette semaine"
          value="—"
          subtitle="En attente de données"
          color="forest"
        />
        <StatCard
          title="Clics téléphone"
          value="—"
          subtitle="En attente de données"
          color="gold"
        />
        <StatCard
          title="Leads / Formulaires"
          value="—"
          subtitle="En attente de données"
          color="sage"
        />
        <StatCard
          title="Note Google"
          value="5.0 ★"
          subtitle="5 avis Google"
          color="red"
        />
      </div>

      {/* Empty state for charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <svg className="w-12 h-12 text-gray-200 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h2v8H3zm6-4h2v12H9zm6-6h2v18h-2zm6 10h2v8h-2z" />
          </svg>
          <h3 className="font-heading font-bold text-gray-400 mb-1">Visites &amp; Clics téléphone</h3>
          <p className="text-sm text-gray-300">Les graphiques apparaîtront quand la base de données sera connectée.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <svg className="w-12 h-12 text-gray-200 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
          <h3 className="font-heading font-bold text-gray-400 mb-1">Évolution mensuelle</h3>
          <p className="text-sm text-gray-300">Les graphiques apparaîtront quand la base de données sera connectée.</p>
        </div>
      </div>

      {/* Info box */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-800">
        <strong>Pour activer le tableau de bord :</strong>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Configurer la base PostgreSQL dans <code className="bg-blue-100 px-1 rounded">.env.local</code></li>
          <li>Lancer <code className="bg-blue-100 px-1 rounded">npx prisma migrate dev</code></li>
          <li>Les données de visites, clics et leads s&apos;afficheront automatiquement</li>
        </ol>
      </div>
    </div>
  )
}
