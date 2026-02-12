'use client'

import { useState } from 'react'
import { platforms } from '@/data/platforms'
import { cn } from '@/lib/utils'

type Status = 'PRESENT' | 'TO_CHECK' | 'ABSENT'

const statusConfig: Record<Status, { label: string; color: string; bg: string }> = {
  PRESENT: { label: 'Présent', color: 'text-green-700', bg: 'bg-green-100' },
  TO_CHECK: { label: 'À vérifier', color: 'text-yellow-700', bg: 'bg-yellow-100' },
  ABSENT: { label: 'Absent', color: 'text-red-700', bg: 'bg-red-100' },
}

// Known platforms with confirmed presence
const defaultStatuses: Record<string, Status> = {
  google: 'PRESENT',
  pagesjaunes: 'PRESENT',
}

export default function PlatformChecker() {
  const [statuses, setStatuses] = useState<Record<string, Status>>(
    Object.fromEntries(platforms.map(p => [p.id, defaultStatuses[p.id] || 'TO_CHECK']))
  )
  const [profileUrls, setProfileUrls] = useState<Record<string, string>>(
    Object.fromEntries(platforms.map(p => [p.id, p.profileUrl || '']))
  )
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')

  function cycleStatus(id: string) {
    const order: Status[] = ['PRESENT', 'TO_CHECK', 'ABSENT']
    const current = statuses[id]
    const next = order[(order.indexOf(current) + 1) % 3]
    setStatuses(prev => ({ ...prev, [id]: next }))
  }

  function startEditing(id: string) {
    setEditingId(id)
    setEditValue(profileUrls[id] || '')
  }

  function saveUrl(id: string) {
    setProfileUrls(prev => ({ ...prev, [id]: editValue.trim() }))
    setEditingId(null)
  }

  const categories = [
    { key: 'reviews', label: 'Avis & Recherche' },
    { key: 'social', label: 'Réseaux sociaux' },
    { key: 'maps', label: 'Cartes & GPS' },
    { key: 'directory', label: 'Annuaires' },
  ] as const

  const presentCount = Object.values(statuses).filter(s => s === 'PRESENT').length
  const totalCount = platforms.length

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-gray-500">Présence confirmée</p>
          <p className="text-2xl font-heading font-bold text-gray-900">
            {presentCount} <span className="text-base font-normal text-gray-400">/ {totalCount}</span>
          </p>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500" /> Présent</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-400" /> À vérifier</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500" /> Absent</span>
        </div>
      </div>

      {categories.map(cat => {
        const items = platforms.filter(p => p.category === cat.key)
        if (items.length === 0) return null
        return (
          <div key={cat.key} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{cat.label}</h3>
            <div className="space-y-2">
              {items.map(platform => {
                const status = statuses[platform.id]
                const config = statusConfig[status]
                const url = profileUrls[platform.id]
                const isEditing = editingId === platform.id

                return (
                  <div
                    key={platform.id}
                    className={cn(
                      'rounded-lg border p-3 transition-all',
                      status === 'PRESENT' && 'border-green-200 bg-green-50',
                      status === 'TO_CHECK' && 'border-yellow-200 bg-yellow-50',
                      status === 'ABSENT' && 'border-red-200 bg-red-50'
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-medium text-sm text-gray-900">{platform.name}</span>
                        {url && !isEditing && (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline truncate max-w-50"
                            onClick={e => e.stopPropagation()}
                          >
                            Voir la fiche →
                          </a>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => startEditing(platform.id)}
                          className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1"
                          title="Modifier l'URL"
                        >
                          {url ? '✏️' : '+ URL'}
                        </button>
                        <button
                          onClick={() => cycleStatus(platform.id)}
                          className={cn('text-xs font-medium px-2 py-0.5 rounded-full cursor-pointer', config.bg, config.color)}
                        >
                          {config.label}
                        </button>
                      </div>
                    </div>

                    {isEditing && (
                      <div className="mt-2 flex gap-2">
                        <input
                          type="url"
                          value={editValue}
                          onChange={e => setEditValue(e.target.value)}
                          placeholder="https://..."
                          className="flex-1 text-xs px-3 py-1.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-forest/30"
                          autoFocus
                          onKeyDown={e => {
                            if (e.key === 'Enter') saveUrl(platform.id)
                            if (e.key === 'Escape') setEditingId(null)
                          }}
                        />
                        <button
                          onClick={() => saveUrl(platform.id)}
                          className="text-xs bg-forest text-white px-3 py-1.5 rounded-lg hover:bg-forest/90"
                        >
                          OK
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-xs text-gray-500 px-2 py-1.5 hover:text-gray-700"
                        >
                          Annuler
                        </button>
                      </div>
                    )}

                    {url && !isEditing && (
                      <p className="text-[10px] text-gray-400 mt-1 truncate">{url}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      <p className="text-xs text-gray-400 mt-4">Cliquez sur le statut pour le changer. Cliquez sur &quot;+ URL&quot; ou ✏️ pour ajouter/modifier le lien vers la fiche.</p>
    </div>
  )
}
