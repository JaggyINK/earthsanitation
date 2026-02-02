'use client'

import PlatformChecker from '@/components/admin/PlatformChecker'

export default function PresencePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-gray-900">Présence en ligne</h1>
        <p className="text-gray-500 text-sm mt-1">
          Vérifiez votre visibilité sur les annuaires, réseaux sociaux et cartes
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <PlatformChecker />
      </div>
    </div>
  )
}
