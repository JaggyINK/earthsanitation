'use client'

import { useEffect, useState } from 'react'
import StatCard from '@/components/admin/StatCard'

interface Stats {
  visitsThisWeek: number
  phoneClicksThisWeek: number
  leadsThisWeek: number
  leadsTotal: number
  reviewCount: number
  avgRating: number
  visitsTrend: number
  clicksTrend: number
  leadsTrend: number
  recentLeads: { id: string; name: string; type: string; status: string; createdAt: string }[]
}

const typeLabels: Record<string, string> = {
  CONTACT: 'Contact',
  QUOTE: 'Devis',
  EMERGENCY: 'Urgence',
}

const statusColors: Record<string, string> = {
  NEW: 'bg-yellow-100 text-yellow-800',
  CONTACTED: 'bg-blue-100 text-blue-800',
  CONVERTED: 'bg-green-100 text-green-800',
  LOST: 'bg-red-100 text-red-800',
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/stats')
      .then(r => r.json())
      .then(data => {
        setStats(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

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
          value={loading ? '...' : stats?.visitsThisWeek ?? 0}
          subtitle={loading ? '' : `${stats?.leadsTotal ?? 0} leads au total`}
          trend={stats?.visitsTrend !== undefined ? { value: stats.visitsTrend, label: 'vs semaine dernière' } : undefined}
          color="forest"
        />
        <StatCard
          title="Clics téléphone"
          value={loading ? '...' : stats?.phoneClicksThisWeek ?? 0}
          subtitle="Cette semaine"
          trend={stats?.clicksTrend !== undefined ? { value: stats.clicksTrend, label: 'vs semaine dernière' } : undefined}
          color="gold"
        />
        <StatCard
          title="Leads / Formulaires"
          value={loading ? '...' : stats?.leadsThisWeek ?? 0}
          subtitle="Cette semaine"
          trend={stats?.leadsTrend !== undefined ? { value: stats.leadsTrend, label: 'vs semaine dernière' } : undefined}
          color="sage"
        />
        <StatCard
          title="Note Google"
          value={loading ? '...' : `${stats?.avgRating ?? 0} ★`}
          subtitle={loading ? '' : `${stats?.reviewCount ?? 0} avis`}
          color="red"
        />
      </div>

      {/* Recent leads */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h3 className="font-heading font-bold text-gray-900 mb-4">Derniers leads</h3>
        {loading ? (
          <p className="text-gray-400 text-sm">Chargement...</p>
        ) : !stats?.recentLeads?.length ? (
          <p className="text-gray-400 text-sm">Aucun lead pour le moment. Les formulaires de contact et devis alimenteront cette liste.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-gray-500 text-left border-b border-gray-100">
                <tr>
                  <th className="pb-2 font-medium">Date</th>
                  <th className="pb-2 font-medium">Nom</th>
                  <th className="pb-2 font-medium">Type</th>
                  <th className="pb-2 font-medium">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {stats.recentLeads.map(lead => (
                  <tr key={lead.id}>
                    <td className="py-2 text-gray-500">
                      {new Date(lead.createdAt).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="py-2 font-medium text-gray-900">{lead.name}</td>
                    <td className="py-2">{typeLabels[lead.type] || lead.type}</td>
                    <td className="py-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[lead.status] || ''}`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {stats?.recentLeads?.length ? (
          <a href="/admin/leads" className="text-forest text-sm font-medium hover:underline mt-3 inline-block">
            Voir tous les leads →
          </a>
        ) : null}
      </div>
    </div>
  )
}
