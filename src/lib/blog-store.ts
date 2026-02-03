// Store temporaire pour le blog (sera remplacé par Prisma quand PostgreSQL connecté)
// Ce fichier centralise le stockage pour que toutes les routes API partagent les mêmes données

export interface BlogPost {
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

// Stockage en mémoire avec quelques articles d'exemple
let blogPosts: BlogPost[] = [
  {
    id: 'post_1',
    title: 'Quand faire vidanger sa fosse septique ?',
    slug: 'quand-faire-vidanger-fosse-septique',
    content: `La vidange de votre fosse septique est une opération d'entretien essentielle pour garantir le bon fonctionnement de votre système d'assainissement non collectif.

## Fréquence recommandée

En règle générale, une fosse septique doit être vidangée tous les **3 à 4 ans**. Cependant, cette fréquence peut varier selon :

- La taille de votre fosse
- Le nombre d'occupants dans le logement
- Vos habitudes de consommation d'eau
- Le type d'équipements sanitaires

## Les signes qui indiquent qu'une vidange est nécessaire

1. **Odeurs nauséabondes** autour de la fosse ou dans les canalisations
2. **Évacuation lente** des eaux usées
3. **Remontées** dans les toilettes ou lavabos
4. **Niveau de boue** dépassant 50% du volume de la fosse

## Pourquoi faire appel à un professionnel ?

La vidange doit être réalisée par un professionnel agréé qui :
- Dispose du matériel adapté (camion hydrocureur)
- Assure le transport et le traitement des boues
- Délivre un bordereau de suivi des déchets obligatoire

**Earth Sanitation** intervient dans tout l'Hérault, le Gard et l'Aude pour vos vidanges de fosses septiques. Contactez-nous pour un devis gratuit !`,
    excerpt: 'Découvrez à quelle fréquence vidanger votre fosse septique et les signes qui indiquent qu\'une intervention est nécessaire.',
    published: true,
    publishedAt: '2026-01-15T10:00:00.000Z',
    createdAt: '2026-01-15T10:00:00.000Z',
    updatedAt: '2026-01-15T10:00:00.000Z',
  },
  {
    id: 'post_2',
    title: 'Les bons gestes pour éviter les bouchons de canalisation',
    slug: 'bons-gestes-eviter-bouchons-canalisation',
    content: `Les bouchons de canalisation sont l'un des problèmes de plomberie les plus fréquents. Voici comment les prévenir efficacement.

## Dans la cuisine

- **Ne jetez jamais** d'huile de cuisson dans l'évier
- Utilisez une **grille** pour retenir les déchets alimentaires
- Faites couler de l'**eau chaude** après chaque vaisselle
- Nettoyez régulièrement le **siphon**

## Dans la salle de bain

- Installez un **filtre à cheveux** sur la bonde de douche
- Évitez de jeter des **cotons-tiges** dans les toilettes
- Ne versez pas de **produits gras** (huiles de massage, etc.)

## Dans les toilettes

Seuls 3 éléments doivent être jetés dans les WC :
1. L'urine
2. Les selles
3. Le papier toilette

**À proscrire absolument** : lingettes (même "biodégradables"), protections hygiéniques, cotons, litière pour chat.

## Entretien préventif

- Versez une fois par mois de l'**eau bouillante** dans vos canalisations
- Utilisez du **bicarbonate de soude + vinaigre blanc** mensuellement
- Faites réaliser un **curage préventif** tous les 2-3 ans

Si malgré ces précautions vous rencontrez un bouchon, **Earth Sanitation** intervient rapidement avec un service de débouchage professionnel.`,
    excerpt: 'Adoptez les bons réflexes au quotidien pour éviter les problèmes de canalisations bouchées.',
    published: true,
    publishedAt: '2026-01-20T14:30:00.000Z',
    createdAt: '2026-01-20T14:30:00.000Z',
    updatedAt: '2026-01-20T14:30:00.000Z',
  },
  {
    id: 'post_3',
    title: 'L\'inspection caméra : un diagnostic précis de vos canalisations',
    slug: 'inspection-camera-diagnostic-canalisations',
    content: `L'inspection caméra est une technique moderne et non invasive pour visualiser l'état de vos canalisations. Découvrez ses avantages.

## Comment ça fonctionne ?

Une **caméra endoscopique** étanche est introduite dans vos canalisations. Elle transmet en temps réel des images haute définition qui permettent de :

- Localiser précisément un bouchon
- Identifier des fissures ou des racines
- Détecter des défauts de pente
- Vérifier l'état général du réseau

## Dans quels cas est-ce utile ?

1. **Bouchons récurrents** : comprendre l'origine du problème
2. **Achat immobilier** : vérifier l'état des canalisations avant d'acheter
3. **Après travaux** : contrôler la qualité de l'installation
4. **Odeurs inexpliquées** : rechercher une fuite ou un défaut

## Les avantages de l'inspection caméra

- **Diagnostic précis** sans casser ni creuser
- **Gain de temps** pour identifier le problème
- **Économies** en ciblant l'intervention nécessaire
- **Rapport détaillé** avec images et vidéo

## Le rapport d'inspection

À l'issue de l'intervention, vous recevez un rapport complet comprenant :
- Les images et vidéos de l'inspection
- Le diagnostic de l'état des canalisations
- Les préconisations de travaux si nécessaire

**Earth Sanitation** dispose d'équipements professionnels pour inspecter tous types de canalisations. Demandez votre inspection !`,
    excerpt: 'L\'inspection caméra permet de diagnostiquer précisément l\'état de vos canalisations sans travaux de terrassement.',
    published: false,
    publishedAt: null,
    createdAt: '2026-01-25T09:00:00.000Z',
    updatedAt: '2026-01-25T09:00:00.000Z',
  },
]

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter(p => p.published)
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find(p => p.id === id)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function createPost(data: {
  title: string
  content: string
  excerpt?: string
  published?: boolean
}): BlogPost {
  const slug = generateSlug(data.title)
  const existing = blogPosts.find(p => p.slug === slug)
  if (existing) {
    throw new Error('Un article avec ce titre existe déjà')
  }

  const now = new Date().toISOString()
  const newPost: BlogPost = {
    id: `post_${Date.now()}`,
    title: data.title,
    slug,
    content: data.content,
    excerpt: data.excerpt || null,
    published: data.published || false,
    publishedAt: data.published ? now : null,
    createdAt: now,
    updatedAt: now,
  }

  blogPosts.push(newPost)
  return newPost
}

export function updatePost(
  id: string,
  data: Partial<{
    title: string
    content: string
    excerpt: string | null
    published: boolean
  }>
): BlogPost {
  const index = blogPosts.findIndex(p => p.id === id)
  if (index === -1) {
    throw new Error('Article non trouvé')
  }

  const post = blogPosts[index]
  const now = new Date().toISOString()

  // Vérifier le slug si le titre change
  if (data.title && data.title !== post.title) {
    const newSlug = generateSlug(data.title)
    const existing = blogPosts.find(p => p.slug === newSlug && p.id !== id)
    if (existing) {
      throw new Error('Un article avec ce titre existe déjà')
    }
    post.slug = newSlug
    post.title = data.title
  }

  if (data.content !== undefined) post.content = data.content
  if (data.excerpt !== undefined) post.excerpt = data.excerpt
  if (data.published !== undefined) {
    if (data.published && !post.published) {
      post.publishedAt = now
    }
    post.published = data.published
  }
  post.updatedAt = now

  blogPosts[index] = post
  return post
}

export function deletePost(id: string): boolean {
  const index = blogPosts.findIndex(p => p.id === id)
  if (index === -1) return false
  blogPosts.splice(index, 1)
  return true
}
