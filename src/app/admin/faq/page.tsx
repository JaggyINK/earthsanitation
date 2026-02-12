'use client'

import { useEffect, useState, useCallback } from 'react'

interface FAQ {
  id: string
  question: string
  answer: string
  service: string | null
  order: number
  visible: boolean
}

const serviceOptions = [
  { value: '', label: 'Général (toutes pages)' },
  { value: 'debouchage-canalisations', label: 'Débouchage' },
  { value: 'curage-canalisations', label: 'Curage' },
  { value: 'inspection-camera', label: 'Inspection caméra' },
  { value: 'vidange-fosse-septique', label: 'Vidange fosse septique' },
  { value: 'assainissement', label: 'Assainissement' },
  { value: 'recherche-fuites', label: 'Recherche de fuites' },
]

export default function AdminFAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<string | null>(null)
  const [creating, setCreating] = useState(false)
  const [filterService, setFilterService] = useState('ALL')

  // Form state
  const [formQuestion, setFormQuestion] = useState('')
  const [formAnswer, setFormAnswer] = useState('')
  const [formService, setFormService] = useState('')

  const fetchFaqs = useCallback(() => {
    fetch('/api/faq?all=1')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setFaqs(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchFaqs()
  }, [fetchFaqs])

  function startCreate() {
    setCreating(true)
    setEditing(null)
    setFormQuestion('')
    setFormAnswer('')
    setFormService('')
  }

  function startEdit(faq: FAQ) {
    setEditing(faq.id)
    setCreating(false)
    setFormQuestion(faq.question)
    setFormAnswer(faq.answer)
    setFormService(faq.service || '')
  }

  function cancelForm() {
    setCreating(false)
    setEditing(null)
    setFormQuestion('')
    setFormAnswer('')
    setFormService('')
  }

  async function saveFaq() {
    if (!formQuestion.trim() || !formAnswer.trim()) return

    if (creating) {
      const res = await fetch('/api/faq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: formQuestion,
          answer: formAnswer,
          service: formService || null,
        }),
      })
      if (res.ok) {
        fetchFaqs()
        cancelForm()
      }
    } else if (editing) {
      const res = await fetch(`/api/faq/${editing}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: formQuestion,
          answer: formAnswer,
          service: formService || null,
        }),
      })
      if (res.ok) {
        fetchFaqs()
        cancelForm()
      }
    }
  }

  async function toggleVisible(faq: FAQ) {
    const res = await fetch(`/api/faq/${faq.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visible: !faq.visible }),
    })
    if (res.ok) {
      setFaqs(prev => prev.map(f => f.id === faq.id ? { ...f, visible: !f.visible } : f))
    }
  }

  async function deleteFaq(id: string) {
    if (!confirm('Supprimer cette question ?')) return
    const res = await fetch(`/api/faq/${id}`, { method: 'DELETE' })
    if (res.ok) {
      setFaqs(prev => prev.filter(f => f.id !== id))
    }
  }

  async function moveUp(faq: FAQ, index: number) {
    if (index === 0) return
    const prev = filteredFaqs[index - 1]
    await Promise.all([
      fetch(`/api/faq/${faq.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: prev.order }),
      }),
      fetch(`/api/faq/${prev.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: faq.order }),
      }),
    ])
    fetchFaqs()
  }

  async function moveDown(faq: FAQ, index: number) {
    if (index >= filteredFaqs.length - 1) return
    const next = filteredFaqs[index + 1]
    await Promise.all([
      fetch(`/api/faq/${faq.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: next.order }),
      }),
      fetch(`/api/faq/${next.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order: faq.order }),
      }),
    ])
    fetchFaqs()
  }

  const filteredFaqs = faqs.filter(f => {
    if (filterService === 'ALL') return true
    if (filterService === 'general') return !f.service
    return f.service === filterService
  })

  const getServiceLabel = (slug: string | null) => {
    if (!slug) return 'Général'
    return serviceOptions.find(s => s.value === slug)?.label || slug
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-gray-900">FAQ</h1>
          <p className="text-gray-500 text-sm mt-1">
            Gérez les questions fréquentes ({faqs.length} au total)
          </p>
        </div>
        <button
          onClick={startCreate}
          className="px-4 py-2 bg-forest text-cream rounded-lg hover:bg-forest/90 transition-colors text-sm font-medium"
        >
          + Ajouter une question
        </button>
      </div>

      {/* Filter by service */}
      <div className="mb-4">
        <select
          value={filterService}
          onChange={e => setFilterService(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white"
        >
          <option value="ALL">Tous les services</option>
          <option value="general">Général uniquement</option>
          {serviceOptions.filter(s => s.value).map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* Create/Edit form */}
      {(creating || editing) && (
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6 border border-forest/20">
          <h3 className="font-semibold text-gray-900 mb-4">
            {creating ? 'Nouvelle question' : 'Modifier la question'}
          </h3>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
              <input
                type="text"
                value={formQuestion}
                onChange={e => setFormQuestion(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
                placeholder="Ex: Combien coûte un débouchage ?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Réponse</label>
              <textarea
                value={formAnswer}
                onChange={e => setFormAnswer(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm"
                placeholder="La réponse détaillée..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service associé</label>
              <select
                value={formService}
                onChange={e => setFormService(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm bg-white"
              >
                {serviceOptions.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <button
                onClick={saveFaq}
                disabled={!formQuestion.trim() || !formAnswer.trim()}
                className="px-4 py-2 bg-forest text-cream rounded-lg hover:bg-forest/90 transition-colors text-sm font-medium disabled:opacity-50"
              >
                {creating ? 'Créer' : 'Enregistrer'}
              </button>
              <button
                onClick={cancelForm}
                className="px-4 py-2 text-gray-500 hover:text-gray-700 text-sm"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQ list */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">Chargement...</div>
      ) : filteredFaqs.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          Aucune question pour le moment
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredFaqs.map((faq, i) => (
            <div
              key={faq.id}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 p-4 ${
                !faq.visible ? 'opacity-50' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Order controls */}
                <div className="flex flex-col gap-1 shrink-0 pt-1">
                  <button
                    onClick={() => moveUp(faq, i)}
                    disabled={i === 0}
                    className="text-gray-400 hover:text-forest disabled:opacity-30 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => moveDown(faq, i)}
                    disabled={i >= filteredFaqs.length - 1}
                    className="text-gray-400 hover:text-forest disabled:opacity-30 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm">{faq.question}</h4>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{faq.answer}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      {getServiceLabel(faq.service)}
                    </span>
                    {!faq.visible && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                        Masqué
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleVisible(faq)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      faq.visible ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-100'
                    }`}
                    title={faq.visible ? 'Masquer' : 'Afficher'}
                  >
                    {faq.visible ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => startEdit(faq)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-forest hover:bg-gray-100 transition-colors"
                    title="Modifier"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteFaq(faq.id)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                    title="Supprimer"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
