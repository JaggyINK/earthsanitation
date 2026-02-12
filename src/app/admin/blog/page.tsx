'use client'

import { useState, useEffect } from 'react'
import Badge from '@/components/ui/Badge'

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  published: boolean
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // Form state
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [published, setPublished] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const res = await fetch('/api/blog')
      const data = await res.json()
      setPosts(data)
    } catch {
      setError('Erreur lors du chargement des articles')
    } finally {
      setLoading(false)
    }
  }

  function resetForm() {
    setTitle('')
    setContent('')
    setExcerpt('')
    setPublished(false)
    setEditingPost(null)
    setShowForm(false)
    setError(null)
  }

  function openNewForm() {
    resetForm()
    setShowForm(true)
  }

  function openEditForm(post: BlogPost) {
    setTitle(post.title)
    setContent(post.content)
    setExcerpt(post.excerpt || '')
    setPublished(post.published)
    setEditingPost(post)
    setShowForm(true)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)

    try {
      const url = editingPost ? `/api/blog/${editingPost.id}` : '/api/blog'
      const method = editingPost ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, excerpt, published }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de la sauvegarde')
      }

      setSuccess(editingPost ? 'Article mis à jour' : 'Article créé')
      setTimeout(() => setSuccess(null), 3000)
      resetForm()
      fetchPosts()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(post: BlogPost) {
    if (!confirm(`Supprimer l'article "${post.title}" ?`)) return

    try {
      const res = await fetch(`/api/blog/${post.id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Erreur lors de la suppression')
      setSuccess('Article supprimé')
      setTimeout(() => setSuccess(null), 3000)
      fetchPosts()
    } catch {
      setError('Erreur lors de la suppression')
    }
  }

  async function togglePublish(post: BlogPost) {
    try {
      const res = await fetch(`/api/blog/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !post.published }),
      })
      if (!res.ok) throw new Error('Erreur')
      fetchPosts()
    } catch {
      setError('Erreur lors de la mise à jour')
    }
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-gray-900">Blog</h1>
          <p className="text-gray-500 text-sm mt-1">
            Gérez vos articles de blog pour améliorer votre SEO
          </p>
        </div>
        {!showForm && (
          <button
            onClick={openNewForm}
            className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-white rounded-lg hover:bg-forest/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Nouvel article
          </button>
        )}
      </div>

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
              {editingPost ? 'Modifier l\'article' : 'Nouvel article'}
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Titre *
              </label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-sand focus:ring-2 focus:ring-sage focus:border-transparent"
                placeholder="Ex: Comment entretenir sa fosse septique ?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Extrait (description courte pour le SEO)
              </label>
              <textarea
                value={excerpt}
                onChange={e => setExcerpt(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 rounded-lg border border-sand focus:ring-2 focus:ring-sage focus:border-transparent"
                placeholder="Résumé de l'article en 1-2 phrases..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contenu * (Markdown supporté)
              </label>
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                rows={12}
                className="w-full px-4 py-3 rounded-lg border border-sand focus:ring-2 focus:ring-sage focus:border-transparent font-mono text-sm"
                placeholder="Rédigez votre article ici...

## Sous-titre

Paragraphe avec du **texte en gras** et du *texte en italique*.

- Liste à puces
- Autre élément"
                required
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="published"
                checked={published}
                onChange={e => setPublished(e.target.checked)}
                className="w-4 h-4 text-forest rounded border-sand focus:ring-sage"
              />
              <label htmlFor="published" className="text-sm text-gray-700">
                Publier immédiatement
              </label>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 bg-forest text-white rounded-lg hover:bg-forest/90 transition-colors disabled:opacity-50"
              >
                {saving ? 'Enregistrement...' : editingPost ? 'Mettre à jour' : 'Créer l\'article'}
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

      {/* Liste des articles */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Chargement...</div>
        ) : posts.length === 0 ? (
          <div className="p-8 text-center">
            <svg className="w-12 h-12 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <p className="text-gray-500 mb-4">Aucun article pour le moment</p>
            <button
              onClick={openNewForm}
              className="text-forest hover:text-forest/80 font-medium"
            >
              Créer votre premier article
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {posts.map(post => (
              <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading font-semibold text-gray-900 truncate">
                        {post.title}
                      </h3>
                      <Badge variant={post.published ? 'success' : 'default'}>
                        {post.published ? 'Publié' : 'Brouillon'}
                      </Badge>
                    </div>
                    {post.excerpt && (
                      <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                      <span>Créé le {formatDate(post.createdAt)}</span>
                      {post.publishedAt && (
                        <span>Publié le {formatDate(post.publishedAt)}</span>
                      )}
                      <span className="text-gray-300">/blog/{post.slug}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => togglePublish(post)}
                      className={`p-2 rounded-lg transition-colors ${
                        post.published
                          ? 'text-amber-600 hover:bg-amber-50'
                          : 'text-green-600 hover:bg-green-50'
                      }`}
                      title={post.published ? 'Dépublier' : 'Publier'}
                    >
                      {post.published ? (
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
                      onClick={() => openEditForm(post)}
                      className="p-2 text-gray-400 hover:text-forest hover:bg-gray-100 rounded-lg transition-colors"
                      title="Modifier"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                    </button>
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Voir"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                    <button
                      onClick={() => handleDelete(post)}
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

      {/* Info SEO */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Conseil SEO</p>
            <p className="text-blue-700">
              Publiez régulièrement des articles sur l'assainissement, l'entretien des fosses septiques,
              et les bonnes pratiques. Cela améliore votre référencement et positionne Earth Sanitation
              comme expert du domaine.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
