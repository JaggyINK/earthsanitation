// Store pour les avis clients (sera remplacé par Prisma quand PostgreSQL connecté)

export interface Review {
  id: string
  authorName: string
  authorPhoto: string | null // URL de la photo de profil
  rating: number // 1-5
  text: string
  date: string // Date de l'avis
  source: string // google, facebook, trustpilot, manuel, etc.
  sourceUrl: string | null // Lien vers l'avis original
  photos: string[] // Photos jointes par le client
  verified: boolean // Avis vérifié
  visible: boolean // Affiché sur le site
  order: number // Ordre d'affichage (plus petit = premier)
  createdAt: string
  updatedAt: string
}

// Avis d'exemple
let reviews: Review[] = [
  {
    id: 'review_1',
    authorName: 'Marie Dupont',
    authorPhoto: null,
    rating: 5,
    text: "Intervention ultra rapide pour un débouchage en urgence un dimanche soir. Le technicien était professionnel et a résolu le problème en moins d'une heure. Je recommande vivement !",
    date: '2026-01-10',
    source: 'google',
    sourceUrl: 'https://g.co/kgs/example1',
    photos: [],
    verified: true,
    visible: true,
    order: 1,
    createdAt: '2026-01-10T18:30:00.000Z',
    updatedAt: '2026-01-10T18:30:00.000Z',
  },
  {
    id: 'review_2',
    authorName: 'Pierre Martin',
    authorPhoto: null,
    rating: 5,
    text: "Excellent service pour la vidange de notre fosse septique. Équipe ponctuelle, travail propre et prix raisonnable. Merci Earth Sanitation !",
    date: '2026-01-05',
    source: 'google',
    sourceUrl: 'https://g.co/kgs/example2',
    photos: [],
    verified: true,
    visible: true,
    order: 2,
    createdAt: '2026-01-05T10:00:00.000Z',
    updatedAt: '2026-01-05T10:00:00.000Z',
  },
  {
    id: 'review_3',
    authorName: 'Sophie Bernard',
    authorPhoto: null,
    rating: 5,
    text: "Très satisfaite de l'inspection caméra réalisée avant l'achat de notre maison. Rapport détaillé et conseils précieux. Entreprise sérieuse.",
    date: '2025-12-20',
    source: 'google',
    sourceUrl: 'https://g.co/kgs/example3',
    photos: [],
    verified: true,
    visible: true,
    order: 3,
    createdAt: '2025-12-20T14:00:00.000Z',
    updatedAt: '2025-12-20T14:00:00.000Z',
  },
  {
    id: 'review_4',
    authorName: 'Jean-Claude Moreau',
    authorPhoto: null,
    rating: 5,
    text: "Problème de canalisation bouchée résolu en un temps record. Très réactifs et professionnels. Le devis était clair, pas de surprise sur la facture.",
    date: '2025-12-15',
    source: 'facebook',
    sourceUrl: null,
    photos: [],
    verified: true,
    visible: true,
    order: 4,
    createdAt: '2025-12-15T09:00:00.000Z',
    updatedAt: '2025-12-15T09:00:00.000Z',
  },
  {
    id: 'review_5',
    authorName: 'Catherine Leroy',
    authorPhoto: null,
    rating: 4,
    text: "Bon travail pour le curage de nos canalisations. Seul petit bémol : un léger retard à l'arrivée, mais le travail a été fait correctement.",
    date: '2025-12-01',
    source: 'google',
    sourceUrl: 'https://g.co/kgs/example5',
    photos: [],
    verified: true,
    visible: true,
    order: 5,
    createdAt: '2025-12-01T11:00:00.000Z',
    updatedAt: '2025-12-01T11:00:00.000Z',
  },
]

export function getAllReviews(): Review[] {
  return [...reviews].sort((a, b) => a.order - b.order)
}

export function getVisibleReviews(): Review[] {
  return getAllReviews().filter(r => r.visible)
}

export function getReviewById(id: string): Review | undefined {
  return reviews.find(r => r.id === id)
}

export function createReview(data: {
  authorName: string
  authorPhoto?: string | null
  rating: number
  text: string
  date: string
  source: string
  sourceUrl?: string | null
  photos?: string[]
  verified?: boolean
  visible?: boolean
}): Review {
  const now = new Date().toISOString()
  const maxOrder = reviews.length > 0 ? Math.max(...reviews.map(r => r.order)) : 0

  const newReview: Review = {
    id: `review_${Date.now()}`,
    authorName: data.authorName,
    authorPhoto: data.authorPhoto || null,
    rating: Math.min(5, Math.max(1, data.rating)),
    text: data.text,
    date: data.date,
    source: data.source,
    sourceUrl: data.sourceUrl || null,
    photos: data.photos || [],
    verified: data.verified ?? false,
    visible: data.visible ?? true,
    order: maxOrder + 1,
    createdAt: now,
    updatedAt: now,
  }

  reviews.push(newReview)
  return newReview
}

export function updateReview(
  id: string,
  data: Partial<{
    authorName: string
    authorPhoto: string | null
    rating: number
    text: string
    date: string
    source: string
    sourceUrl: string | null
    photos: string[]
    verified: boolean
    visible: boolean
    order: number
  }>
): Review {
  const index = reviews.findIndex(r => r.id === id)
  if (index === -1) {
    throw new Error('Avis non trouvé')
  }

  const review = reviews[index]
  const now = new Date().toISOString()

  const updatedReview: Review = {
    ...review,
    ...data,
    rating: data.rating !== undefined ? Math.min(5, Math.max(1, data.rating)) : review.rating,
    updatedAt: now,
  }

  reviews[index] = updatedReview
  return updatedReview
}

export function deleteReview(id: string): boolean {
  const index = reviews.findIndex(r => r.id === id)
  if (index === -1) return false
  reviews.splice(index, 1)
  return true
}

export function reorderReviews(orderedIds: string[]): void {
  orderedIds.forEach((id, index) => {
    const review = reviews.find(r => r.id === id)
    if (review) {
      review.order = index + 1
      review.updatedAt = new Date().toISOString()
    }
  })
}

export function getReviewsStats(): { count: number; average: number; distribution: Record<number, number> } {
  const visible = getVisibleReviews()
  const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }

  visible.forEach(r => {
    distribution[r.rating] = (distribution[r.rating] || 0) + 1
  })

  const average = visible.length > 0
    ? visible.reduce((sum, r) => sum + r.rating, 0) / visible.length
    : 0

  return {
    count: visible.length,
    average: Math.round(average * 10) / 10,
    distribution,
  }
}
