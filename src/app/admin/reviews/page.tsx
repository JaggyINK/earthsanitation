'use client'

import { useState, useEffect, useRef } from 'react'
import Badge from '@/components/ui/Badge'

interface Review {
  id: string
  authorName: string
  authorPhoto: string | null
  rating: number
  text: string
  time: string
  source: string
  sourceUrl: string | null
  photos: string[]
  verified: boolean
  visible: boolean
  order: number
  createdAt: string
  updatedAt: string
}

interface Stats {
  count: number
  average: number
  distribution: Record<number, number>
}

const sourceOptions = [
  { value: 'google', label: 'Google', color: 'text-blue-600' },
  { value: 'facebook', label: 'Facebook', color: 'text-blue-700' },
  { value: 'trustpilot', label: 'Trustpilot', color: 'text-green-600' },
  { value: 'pagesjaunes', label: 'Pages Jaunes', color: 'text-yellow-600' },
  { value: 'manuel', label: 'Manuel', color: 'text-gray-600' },
]

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingReview, setEditingReview] = useState<Review | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [draggedId, setDraggedId] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [syncing, setSyncing] = useState(false)

  // Form state
  const [authorName, setAuthorName] = useState('')
  const [authorPhoto, setAuthorPhoto] = useState('')
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [source, setSource] = useState('google')
  const [sourceUrl, setSourceUrl] = useState('')
  const [photos, setPhotos] = useState<string[]>([])
  const [verified, setVerified] = useState(true)
  const [visible, setVisible] = useState(true)

  // Refs pour les inputs de fichiers
  const profileInputRef = useRef<HTMLInputElement>(null)
  const photosInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetchReviews()
    fetchStats()
  }, [])

  async function fetchReviews() {
    try {
      const res = await fetch('/api/reviews')
      const data = await res.json()
      setReviews(data)
    } catch {
      setError('Erreur lors du chargement des avis')
    } finally {
      setLoading(false)
    }
  }

  async function fetchStats() {
    try {
      const res = await fetch('/api/reviews?stats=true')
      const data = await res.json()
      setStats(data)
    } catch {
      console.error('Erreur stats')
    }
  }

  function resetForm() {
    setAuthorName('')
    setAuthorPhoto('')
    setRating(5)
    setText('')
    setDate(new Date().toISOString().split('T')[0])
    setSource('google')
    setSourceUrl('')
    setPhotos([])
    setVerified(true)
    setVisible(true)
    setEditingReview(null)
    setShowForm(false)
    setError(null)
  }

  function openNewForm() {
    resetForm()
    setShowForm(true)
  }

  function openEditForm(review: Review) {
    setAuthorName(review.authorName)
    setAuthorPhoto(review.authorPhoto || '')
    setRating(review.rating)
    setText(review.text)
    setDate(review.time ? new Date(review.time).toISOString().split('T')[0] : '')
    setSource(review.source)
    setSourceUrl(review.sourceUrl || '')
    setPhotos(review.photos || [])
    setVerified(review.verified)
    setVisible(review.visible)
    setEditingReview(review)
    setShowForm(true)
  }

  // Upload d'image avec conversion WebP
  async function uploadImage(file: File, type: 'profile' | 'photo'): Promise<string | null> {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('type', type)

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de l\'upload')
      }

      return data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'upload')
      return null
    }
  }

  async function handleProfileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError(null)

    const url = await uploadImage(file, 'profile')
    if (url) {
      setAuthorPhoto(url)
    }

    setUploading(false)
    if (profileInputRef.current) {
      profileInputRef.current.value = ''
    }
  }

  async function handlePhotosUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    setError(null)

    const uploadPromises = Array.from(files).map(file => uploadImage(file, 'photo'))
    const urls = await Promise.all(uploadPromises)
    const validUrls = urls.filter((url): url is string => url !== null)

    if (validUrls.length > 0) {
      setPhotos([...photos, ...validUrls])
    }

    setUploading(false)
    if (photosInputRef.current) {
      photosInputRef.current.value = ''
    }
  }

  function removePhoto(index: number) {
    setPhotos(photos.filter((_, i) => i !== index))
  }

  function removeProfilePhoto() {
    setAuthorPhoto('')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)

    try {
      const url = editingReview ? `/api/reviews/${editingReview.id}` : '/api/reviews'
      const method = editingReview ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          authorName,
          authorPhoto: authorPhoto || null,
          rating,
          text,
          date,
          source,
          sourceUrl: sourceUrl || null,
          photos,
          verified,
          visible,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de la sauvegarde')
      }

      setSuccess(editingReview ? 'Avis mis à jour' : 'Avis ajouté')
      setTimeout(() => setSuccess(null), 3000)
      resetForm()
      fetchReviews()
      fetchStats()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(review: Review) {
    if (!confirm(`Supprimer l'avis de "${review.authorName}" ?`)) return

    try {
      const res = await fetch(`/api/reviews/${review.id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Erreur lors de la suppression')
      setSuccess('Avis supprimé')
      setTimeout(() => setSuccess(null), 3000)
      fetchReviews()
      fetchStats()
    } catch {
      setError('Erreur lors de la suppression')
    }
  }

  async function toggleVisible(review: Review) {
    try {
      const res = await fetch(`/api/reviews/${review.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visible: !review.visible }),
      })
      if (!res.ok) throw new Error('Erreur')
      fetchReviews()
      fetchStats()
    } catch {
      setError('Erreur lors de la mise à jour')
    }
  }

  // Drag & Drop pour réordonner
  function handleDragStart(id: string) {
    setDraggedId(id)
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  async function handleDrop(targetId: string) {
    if (!draggedId || draggedId === targetId) return

    const newReviews = [...reviews]
    const draggedIndex = newReviews.findIndex(r => r.id === draggedId)
    const targetIndex = newReviews.findIndex(r => r.id === targetId)

    const [dragged] = newReviews.splice(draggedIndex, 1)
    newReviews.splice(targetIndex, 0, dragged)

    setReviews(newReviews)
    setDraggedId(null)

    // Sauvegarder le nouvel ordre
    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reorder: true, orderedIds: newReviews.map(r => r.id) }),
      })
    } catch {
      fetchReviews() // Recharger en cas d'erreur
    }
  }

  function renderStars(count: number, interactive = false, onChange?: (n: number) => void) {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            type={interactive ? 'button' : undefined}
            onClick={interactive && onChange ? () => onChange(n) : undefined}
            className={interactive ? 'cursor-pointer' : 'cursor-default'}
            disabled={!interactive}
          >
            <svg
              className={`w-5 h-5 ${n <= count ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
    )
  }

  function getSourceInfo(src: string) {
    return sourceOptions.find(s => s.value === src) || { value: src, label: src, color: 'text-gray-600' }
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-gray-900">Avis Clients</h1>
          <p className="text-gray-500 text-sm mt-1">
            Gérez les avis affichés sur votre site
          </p>
        </div>
        {!showForm && (
          <div className="flex gap-3">
            <button
              onClick={async () => {
                setSyncing(true)
                setError(null)
                setSuccess(null)
                try {
                  const res = await fetch('/api/reviews/google-sync', { method: 'POST' })
                  const data = await res.json()
                  if (!res.ok) throw new Error(data.error)
                  setSuccess(data.message)
                  setTimeout(() => setSuccess(null), 5000)
                  fetchReviews()
                  fetchStats()
                } catch (err) {
                  setError(err instanceof Error ? err.message : 'Erreur de sync')
                } finally {
                  setSyncing(false)
                }
              }}
              disabled={syncing}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <svg className={`w-5 h-5 ${syncing ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
              </svg>
              {syncing ? 'Sync en cours...' : 'Importer avis Google'}
            </button>
            <button
              onClick={openNewForm}
              className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-white rounded-lg hover:bg-forest/90 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Ajouter un avis
            </button>
          </div>
        )}
      </div>

      {/* Stats */}
      {stats && (
        <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <p className="text-3xl font-bold text-forest">{stats.count}</p>
            <p className="text-sm text-gray-500">Avis visibles</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-gold">{stats.average}</p>
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">Note moyenne</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 col-span-2">
            <div className="flex items-center gap-2 text-sm">
              {[5, 4, 3, 2, 1].map(n => (
                <div key={n} className="flex items-center gap-1">
                  <span className="text-gray-600">{n}</span>
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-400">({stats.distribution[n] || 0})</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">Distribution des notes</p>
          </div>
        </div>
      )}

      {/* Messages */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          {success}
        </div>
      )}

      {/* Formulaire */}
      {showForm && (
        <div className="mb-8 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-heading font-semibold text-gray-900">
              {editingReview ? 'Modifier l\'avis' : 'Nouvel avis'}
            </h2>
            <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Auteur */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'auteur *
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={e => setAuthorName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-sand focus:ring-2 focus:ring-sage focus:border-transparent"
                  placeholder="Jean Dupont"
                  required
                />
              </div>

              {/* Photo de profil - Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo de profil
                </label>
                <div className="flex items-center gap-4">
                  {authorPhoto ? (
                    <div className="relative">
                      <img
                        src={authorPhoto}
                        alt="Photo de profil"
                        className="w-16 h-16 rounded-full object-cover border-2 border-sage"
                      />
                      <button
                        type="button"
                        onClick={removeProfilePhoto}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <input
                      ref={profileInputRef}
                      type="file"
                      accept="image/png,image/jpeg,image/jpg,image/webp"
                      onChange={handleProfileUpload}
                      className="hidden"
                      id="profile-upload"
                    />
                    <label
                      htmlFor="profile-upload"
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                      {uploading ? 'Upload...' : 'Choisir une photo'}
                    </label>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPEG, WebP (max 5MB)</p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Note *
                </label>
                <div className="flex items-center gap-3">
                  {renderStars(rating, true, setRating)}
                  <span className="text-gray-500">({rating}/5)</span>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de l'avis *
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-sand focus:ring-2 focus:ring-sage focus:border-transparent"
                  required
                />
              </div>

              {/* Source */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Source *
                </label>
                <select
                  value={source}
                  onChange={e => setSource(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-sand focus:ring-2 focus:ring-sage focus:border-transparent"
                >
                  {sourceOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* URL source */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lien vers l'avis original
                </label>
                <input
                  type="url"
                  value={sourceUrl}
                  onChange={e => setSourceUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-sand focus:ring-2 focus:ring-sage focus:border-transparent"
                  placeholder="https://g.co/..."
                />
              </div>
            </div>

            {/* Texte */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contenu de l'avis *
              </label>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-sand focus:ring-2 focus:ring-sage focus:border-transparent"
                placeholder="Excellent service, je recommande..."
                required
              />
            </div>

            {/* Photos des travaux - Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photos des travaux
              </label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
                <input
                  ref={photosInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  onChange={handlePhotosUpload}
                  className="hidden"
                  id="photos-upload"
                  multiple
                />
                <label
                  htmlFor="photos-upload"
                  className={`flex flex-col items-center justify-center py-4 cursor-pointer ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
                >
                  <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <span className="text-sm text-gray-600">
                    {uploading ? 'Upload en cours...' : 'Cliquez pour ajouter des photos'}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">PNG, JPEG, WebP (max 5MB par image)</span>
                </label>
              </div>
              {photos.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {photos.map((photo, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={photo}
                        alt={`Photo ${i + 1}`}
                        className="w-24 h-24 object-cover rounded-lg border shadow-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-md"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Options */}
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={verified}
                  onChange={e => setVerified(e.target.checked)}
                  className="w-4 h-4 text-forest rounded border-sand focus:ring-sage"
                />
                <span className="text-sm text-gray-700">Avis vérifié</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={visible}
                  onChange={e => setVisible(e.target.checked)}
                  className="w-4 h-4 text-forest rounded border-sand focus:ring-sage"
                />
                <span className="text-sm text-gray-700">Visible sur le site</span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={saving || uploading}
                className="px-6 py-2.5 bg-forest text-white rounded-lg hover:bg-forest/90 transition-colors disabled:opacity-50"
              >
                {saving ? 'Enregistrement...' : editingReview ? 'Mettre à jour' : 'Ajouter l\'avis'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Info drag & drop */}
      {!showForm && reviews.length > 1 && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          Glissez-déposez les avis pour modifier l'ordre d'affichage
        </div>
      )}

      {/* Liste des avis */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Chargement...</div>
        ) : reviews.length === 0 ? (
          <div className="p-8 text-center">
            <svg className="w-12 h-12 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <p className="text-gray-500 mb-4">Aucun avis pour le moment</p>
            <button onClick={openNewForm} className="text-forest hover:text-forest/80 font-medium">
              Ajouter votre premier avis
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {reviews.map(review => (
              <div
                key={review.id}
                draggable
                onDragStart={() => handleDragStart(review.id)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(review.id)}
                className={`p-6 hover:bg-gray-50 transition-colors cursor-move ${
                  draggedId === review.id ? 'opacity-50' : ''
                } ${!review.visible ? 'bg-gray-50' : ''}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Ordre + Avatar */}
                  <div className="flex items-center gap-3 lg:w-48 shrink-0">
                    <span className="text-gray-400 text-sm w-6">#{review.order}</span>
                    <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center shrink-0 overflow-hidden">
                      {review.authorPhoto ? (
                        <img src={review.authorPhoto} alt={review.authorName} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-sage font-bold">{review.authorName.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 truncate">{review.authorName}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className={getSourceInfo(review.source).color}>{getSourceInfo(review.source).label}</span>
                        {review.verified && (
                          <span className="text-green-600 flex items-center gap-0.5">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Vérifié
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(review.rating)}
                      <span className="text-gray-400 text-sm">{new Date(review.time).toLocaleDateString('fr-FR')}</span>
                      {!review.visible && <Badge variant="warning">Masqué</Badge>}
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-2">{review.text}</p>
                    {review.photos.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {review.photos.map((photo, i) => (
                          <img key={i} src={photo} alt="" className="w-16 h-16 object-cover rounded" />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 lg:shrink-0">
                    <button
                      onClick={() => toggleVisible(review)}
                      className={`p-2 rounded-lg transition-colors ${
                        review.visible
                          ? 'text-amber-600 hover:bg-amber-50'
                          : 'text-green-600 hover:bg-green-50'
                      }`}
                      title={review.visible ? 'Masquer' : 'Afficher'}
                    >
                      {review.visible ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </button>
                    <button
                      onClick={() => openEditForm(review)}
                      className="p-2 text-gray-400 hover:text-forest hover:bg-gray-100 rounded-lg transition-colors"
                      title="Modifier"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(review)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Supprimer"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
