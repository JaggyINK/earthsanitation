'use client'

import { useState } from 'react'
import Badge from '@/components/ui/Badge'

interface Lead {
  id: string
  name: string
  phone: string
  email?: string
  type: 'CONTACT' | 'QUOTE' | 'EMERGENCY'
  status: 'NEW' | 'CONTACTED' | 'CONVERTED' | 'LOST'
  message?: string
  createdAt: string
}

const typeLabels: Record<string, string> = {
  CONTACT: 'Contact',
  QUOTE: 'Devis',
  EMERGENCY: 'Urgence',
}

const statusLabels: Record<string, { label: string; variant: 'default' | 'success' | 'warning' | 'danger' }> = {
  NEW: { label: 'Nouveau', variant: 'warning' },
  CONTACTED: { label: 'Contacté', variant: 'default' },
  CONVERTED: { label: 'Converti', variant: 'success' },
  LOST: { label: 'Perdu', variant: 'danger' },
}

interface LeadsTableProps {
  leads: Lead[]
}

export default function LeadsTable({ leads }: LeadsTableProps) {
  const [filter, setFilter] = useState<string>('ALL')
  const [typeFilter, setTypeFilter] = useState<string>('ALL')

  const filtered = leads.filter(l => {
    if (filter !== 'ALL' && l.status !== filter) return false
    if (typeFilter !== 'ALL' && l.type !== typeFilter) return false
    return true
  })

  function exportCSV() {
    const headers = 'Nom,Téléphone,Email,Type,Statut,Message,Date\n'
    const rows = filtered.map(l =>
      `"${l.name}","${l.phone}","${l.email || ''}","${typeLabels[l.type]}","${statusLabels[l.status].label}","${(l.message || '').replace(/"/g, '""')}","${new Date(l.createdAt).toLocaleDateString('fr-FR')}"`
    ).join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white"
        >
          <option value="ALL">Tous les statuts</option>
          {Object.entries(statusLabels).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>
        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white"
        >
          <option value="ALL">Tous les types</option>
          {Object.entries(typeLabels).map(([key, val]) => (
            <option key={key} value={key}>{val}</option>
          ))}
        </select>
        <button
          onClick={exportCSV}
          className="ml-auto px-4 py-2 bg-forest text-cream text-sm rounded-lg hover:bg-forest/90 transition-colors"
        >
          Exporter CSV
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 text-left">
              <tr>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Nom</th>
                <th className="px-4 py-3 font-medium">Téléphone</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Statut</th>
                <th className="px-4 py-3 font-medium">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-400">
                    Aucun lead pour le moment
                  </td>
                </tr>
              ) : (
                filtered.map(lead => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">{lead.name}</td>
                    <td className="px-4 py-3">
                      <a href={`tel:${lead.phone}`} className="text-forest hover:underline">{lead.phone}</a>
                    </td>
                    <td className="px-4 py-3">{typeLabels[lead.type]}</td>
                    <td className="px-4 py-3">
                      <Badge variant={statusLabels[lead.status].variant}>
                        {statusLabels[lead.status].label}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-gray-500 max-w-xs truncate">{lead.message}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2">{filtered.length} résultat(s)</p>
    </div>
  )
}
