'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

interface Lead {
  id: string
  name: string
  phone: string
  email: string | null
  type: 'CONTACT' | 'QUOTE' | 'EMERGENCY'
  status: 'NEW' | 'CONTACTED' | 'CONVERTED' | 'LOST'
  message: string | null
  service: string | null
  city: string | null
  address: string | null
  urgency: string | null
  clientType: string | null
  company: string | null
  siret: string | null
  photos: string[]
  page: string | null
  createdAt: string
}

// Parse old-format messages: [Key: value] lines
function parseLeadData(lead: Lead) {
  const parsed = {
    service: lead.service,
    city: lead.city,
    address: lead.address,
    urgency: lead.urgency,
    clientType: lead.clientType,
    company: lead.company,
    siret: lead.siret,
    photos: [...(lead.photos || [])],
    cleanMessage: lead.message || '',
  }

  // If structured fields are already filled, return as-is
  if (lead.service || lead.city || (lead.photos && lead.photos.length > 0)) {
    return parsed
  }

  // Parse old format from message field
  if (lead.message) {
    const lines = lead.message.split('\n')
    const cleanLines: string[] = []

    for (const line of lines) {
      const match = line.match(/^\[(.+?):\s*(.+?)\]$/)
      if (match) {
        const key = match[1].toLowerCase().trim()
        const value = match[2].trim()

        if (key === 'type') parsed.clientType = value
        else if (key === 'service') parsed.service = value
        else if (key === 'ville') parsed.city = value
        else if (key === 'adresse' && value !== 'Non précisée') parsed.address = value
        else if (key === 'urgence') parsed.urgency = value
        else if (key === 'entreprise') parsed.company = value
        else if (key === 'siret') parsed.siret = value
        else if (key === 'photos jointes') {
          // Could be comma-separated filenames
          const filenames = value.split(',').map(f => f.trim()).filter(Boolean)
          for (const fname of filenames) {
            parsed.photos.push(`/uploads/leads/${fname}`)
          }
        } else if (key === 'sujet') {
          // Old contact form: ignore, info is redundant
        } else {
          cleanLines.push(line)
        }
      } else if (line.trim()) {
        cleanLines.push(line)
      }
    }

    parsed.cleanMessage = cleanLines.join('\n').trim()
  }

  return parsed
}

const typeLabels: Record<string, { label: string; color: string }> = {
  CONTACT: { label: 'Contact', color: 'bg-blue-100 text-blue-800' },
  QUOTE: { label: 'Devis', color: 'bg-purple-100 text-purple-800' },
  EMERGENCY: { label: 'Urgence', color: 'bg-red-100 text-red-800' },
}

const statusLabels: Record<string, { label: string; variant: string }> = {
  NEW: { label: 'Nouveau', variant: 'warning' },
  CONTACTED: { label: 'Contacté', variant: 'default' },
  CONVERTED: { label: 'Converti', variant: 'success' },
  LOST: { label: 'Perdu', variant: 'danger' },
}

const urgencyLabels: Record<string, string> = {
  immediate: 'Immédiate',
  rapide: 'Rapide (24-48h)',
  normal: 'Normal',
  devis: 'Devis uniquement',
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('ALL')
  const [typeFilter, setTypeFilter] = useState('ALL')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null)
  const [lightboxPhotos, setLightboxPhotos] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const fetchLeads = useCallback(() => {
    fetch('/api/leads')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setLeads(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchLeads()
  }, [fetchLeads])

  async function updateStatus(id: string, status: string) {
    const res = await fetch(`/api/leads/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    if (res.ok) {
      setLeads(prev => prev.map(l => l.id === id ? { ...l, status: status as Lead['status'] } : l))
    }
  }

  async function deleteLead(id: string) {
    if (!confirm('Supprimer ce lead définitivement ?')) return
    const res = await fetch(`/api/leads/${id}`, { method: 'DELETE' })
    if (res.ok) {
      setLeads(prev => prev.filter(l => l.id !== id))
    }
  }

  function openLightbox(photos: string[], index: number) {
    setLightboxPhotos(photos)
    setLightboxIndex(index)
    setLightboxPhoto(photos[index])
  }

  function closeLightbox() {
    setLightboxPhoto(null)
    setLightboxPhotos([])
    setLightboxIndex(0)
  }

  function nextPhoto() {
    const next = (lightboxIndex + 1) % lightboxPhotos.length
    setLightboxIndex(next)
    setLightboxPhoto(lightboxPhotos[next])
  }

  function prevPhoto() {
    const prev = (lightboxIndex - 1 + lightboxPhotos.length) % lightboxPhotos.length
    setLightboxIndex(prev)
    setLightboxPhoto(lightboxPhotos[prev])
  }

  function downloadPhoto(url: string) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop() || 'photo.jpg'
    a.target = '_blank'
    a.click()
  }

  const filtered = leads.filter(l => {
    if (filter !== 'ALL' && l.status !== filter) return false
    if (typeFilter !== 'ALL' && l.type !== typeFilter) return false
    return true
  })

  function exportCSV() {
    const headers = 'Date,Nom,Téléphone,Email,Type,Statut,Service,Ville,Adresse,Urgence,Client,Entreprise,SIRET,Message\n'
    const rows = filtered.map(l => {
      const p = parseLeadData(l)
      return `"${new Date(l.createdAt).toLocaleDateString('fr-FR')}","${l.name}","${l.phone}","${l.email || ''}","${typeLabels[l.type].label}","${statusLabels[l.status].label}","${p.service || ''}","${p.city || ''}","${p.address || ''}","${p.urgency || ''}","${p.clientType || ''}","${p.company || ''}","${p.siret || ''}","${(p.cleanMessage || '').replace(/"/g, '""')}"`
    }).join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const newCount = leads.filter(l => l.status === 'NEW').length

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-heading font-bold text-gray-900">
          Leads / Contacts
          {newCount > 0 && (
            <span className="ml-2 inline-flex items-center justify-center w-7 h-7 text-sm bg-red-500 text-white rounded-full">
              {newCount}
            </span>
          )}
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          {leads.length} demande{leads.length > 1 ? 's' : ''} au total
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
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
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>
        <button
          onClick={exportCSV}
          className="ml-auto px-4 py-2 bg-forest text-cream text-sm rounded-lg hover:bg-forest/90 transition-colors"
        >
          Exporter CSV
        </button>
      </div>

      {/* Leads list */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">Chargement...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-400">Aucun lead pour le moment</div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map(lead => {
            const isExpanded = expandedId === lead.id
            const typeInfo = typeLabels[lead.type]
            const data = parseLeadData(lead)
            return (
              <div
                key={lead.id}
                className={`bg-white rounded-xl shadow-sm border transition-all ${
                  lead.status === 'NEW' ? 'border-l-4 border-l-yellow-400 border-gray-100' : 'border-gray-100'
                }`}
              >
                {/* Card Header */}
                <div
                  className="px-5 py-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                  onClick={() => setExpandedId(isExpanded ? null : lead.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-semibold text-gray-900 text-lg">{lead.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeInfo.color}`}>
                          {typeInfo.label}
                        </span>
                        {(data.urgency === 'immediate' || data.urgency === 'Immédiate') && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white animate-pulse">
                            URGENT
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                        <span>
                          {new Date(lead.createdAt).toLocaleDateString('fr-FR', {
                            day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                          })}
                        </span>
                        {data.service && <span className="text-forest font-medium">{data.service}</span>}
                        {data.city && <span>{data.city}</span>}
                        {data.photos.length > 0 && (
                          <span className="text-blue-500 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {data.photos.length} photo{data.photos.length > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <select
                        value={lead.status}
                        onChange={e => { e.stopPropagation(); updateStatus(lead.id, e.target.value) }}
                        onClick={e => e.stopPropagation()}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border-0 cursor-pointer ${
                          lead.status === 'NEW' ? 'bg-yellow-100 text-yellow-800' :
                          lead.status === 'CONTACTED' ? 'bg-blue-100 text-blue-800' :
                          lead.status === 'CONVERTED' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        {Object.entries(statusLabels).map(([key, val]) => (
                          <option key={key} value={key}>{val.label}</option>
                        ))}
                      </select>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {/* Contact info */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Contact</h4>
                        <div className="flex flex-col gap-2">
                          <a
                            href={`tel:${lead.phone}`}
                            className="inline-flex items-center gap-2 text-forest hover:underline font-medium"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {lead.phone}
                          </a>
                          {lead.email && (
                            <a
                              href={`mailto:${lead.email}`}
                              className="inline-flex items-center gap-2 text-gray-600 hover:text-forest"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {lead.email}
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Details */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Détails</h4>
                        <div className="flex flex-col gap-1.5 text-sm">
                          {data.service && (
                            <div className="flex gap-2">
                              <span className="text-gray-400 w-24 shrink-0">Service</span>
                              <span className="text-gray-900 font-medium">{data.service}</span>
                            </div>
                          )}
                          {data.city && (
                            <div className="flex gap-2">
                              <span className="text-gray-400 w-24 shrink-0">Ville</span>
                              <span className="text-gray-900">{data.city}</span>
                            </div>
                          )}
                          {data.address && (
                            <div className="flex gap-2">
                              <span className="text-gray-400 w-24 shrink-0">Adresse</span>
                              <span className="text-gray-900">{data.address}</span>
                            </div>
                          )}
                          {data.urgency && (
                            <div className="flex gap-2">
                              <span className="text-gray-400 w-24 shrink-0">Urgence</span>
                              <span className={`font-medium ${data.urgency === 'immediate' || data.urgency === 'Immédiate' ? 'text-red-600' : 'text-gray-900'}`}>
                                {urgencyLabels[data.urgency] || data.urgency}
                              </span>
                            </div>
                          )}
                          {data.clientType && (
                            <div className="flex gap-2">
                              <span className="text-gray-400 w-24 shrink-0">Client</span>
                              <span className="text-gray-900">
                                {data.clientType === 'pro' ? 'Professionnel' : data.clientType === 'particulier' ? 'Particulier' : data.clientType}
                              </span>
                            </div>
                          )}
                          {data.company && (
                            <div className="flex gap-2">
                              <span className="text-gray-400 w-24 shrink-0">Entreprise</span>
                              <span className="text-gray-900">{data.company}</span>
                            </div>
                          )}
                          {data.siret && (
                            <div className="flex gap-2">
                              <span className="text-gray-400 w-24 shrink-0">SIRET</span>
                              <span className="text-gray-900 font-mono text-xs">{data.siret}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    {data.cleanMessage && (
                      <div className="mt-4">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Message</h4>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-700 whitespace-pre-wrap">{data.cleanMessage}</p>
                        </div>
                      </div>
                    )}

                    {/* Photos */}
                    {data.photos.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                          Photos ({data.photos.length})
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {data.photos.map((photo, i) => (
                            <button
                              key={i}
                              onClick={() => openLightbox(data.photos, i)}
                              className="relative w-28 h-28 rounded-lg overflow-hidden border border-gray-200 hover:border-forest transition-colors group bg-gray-100"
                            >
                              <Image
                                src={photo}
                                alt={`Photo ${i + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform"
                                sizes="112px"
                                onError={(e) => {
                                  // If image fails to load, show placeholder
                                  const target = e.target as HTMLImageElement
                                  target.style.display = 'none'
                                  target.parentElement!.innerHTML = `
                                    <div class="w-full h-full flex flex-col items-center justify-center text-gray-400">
                                      <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                      <span class="text-xs mt-1">N/A</span>
                                    </div>`
                                }}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="text-xs text-gray-400">
                        {lead.page && (
                          <span>Source : {lead.page.replace(/https?:\/\/[^/]+/, '')}</span>
                        )}
                      </div>
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="text-red-400 hover:text-red-600 text-sm font-medium transition-colors"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      <p className="text-xs text-gray-400 mt-4">{filtered.length} résultat(s)</p>

      {/* Photo Lightbox with navigation + download */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
            <span className="text-white/60 text-sm">
              {lightboxIndex + 1} / {lightboxPhotos.length}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); downloadPhoto(lightboxPhoto) }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Télécharger"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation arrows */}
          {lightboxPhotos.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxPhoto}
              alt={`Photo ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                target.parentElement!.innerHTML = `
                  <div class="absolute inset-0 flex flex-col items-center justify-center text-white/50">
                    <svg class="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-2 text-sm">Image non disponible</p>
                  </div>`
              }}
            />
          </div>

          {/* Thumbnails bar */}
          {lightboxPhotos.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {lightboxPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); setLightboxPhoto(photo) }}
                  className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                    i === lightboxIndex ? 'border-white' : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <Image
                    src={photo}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
