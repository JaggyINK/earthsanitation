'use client'

import LeadsTable from '@/components/admin/LeadsTable'

export default function LeadsPage() {
  // Les leads viendront de la BDD quand PostgreSQL sera connecté
  // Pour l'instant, état vide
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-gray-900">Leads / Contacts</h1>
        <p className="text-gray-500 text-sm mt-1">Toutes les demandes reçues via le site</p>
      </div>

      <LeadsTable leads={[]} />

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        Les leads envoyés via les formulaires Contact et Devis apparaîtront ici une fois la base de données connectée.
      </div>
    </div>
  )
}
