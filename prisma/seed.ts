import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.admin.upsert({
    where: { email: 'admin@earthsanitation.fr' },
    update: {},
    create: {
      email: 'admin@earthsanitation.fr',
      password: hashedPassword,
      name: 'Admin',
    },
  })
  console.log('Admin created:', admin.email)

  // Seed blog posts
  const posts = [
    {
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
      excerpt: "Découvrez à quelle fréquence vidanger votre fosse septique et les signes qui indiquent qu'une intervention est nécessaire.",
      published: true,
      publishedAt: new Date('2026-01-15T10:00:00.000Z'),
    },
    {
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
      excerpt: "Adoptez les bons réflexes au quotidien pour éviter les problèmes de canalisations bouchées.",
      published: true,
      publishedAt: new Date('2026-01-20T14:30:00.000Z'),
    },
    {
      title: "L'inspection caméra : un diagnostic précis de vos canalisations",
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

**Earth Sanitation** dispose d'équipements professionnels pour inspecter tous types de canalisations. Demandez votre inspection !`,
      excerpt: "L'inspection caméra permet de diagnostiquer précisément l'état de vos canalisations sans travaux de terrassement.",
      published: false,
      publishedAt: null,
    },
  ]

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
  }
  console.log(`${posts.length} blog posts seeded`)

  // Seed reviews
  const reviews = [
    {
      authorName: 'Marie Dupont',
      rating: 5,
      text: "Intervention ultra rapide pour un débouchage en urgence un dimanche soir. Le technicien était professionnel et a résolu le problème en moins d'une heure. Je recommande vivement !",
      time: new Date('2026-01-10'),
      source: 'google',
      sourceUrl: 'https://g.co/kgs/example1',
      verified: true,
      visible: true,
      order: 1,
    },
    {
      authorName: 'Pierre Martin',
      rating: 5,
      text: "Excellent service pour la vidange de notre fosse septique. Équipe ponctuelle, travail propre et prix raisonnable. Merci Earth Sanitation !",
      time: new Date('2026-01-05'),
      source: 'google',
      sourceUrl: 'https://g.co/kgs/example2',
      verified: true,
      visible: true,
      order: 2,
    },
    {
      authorName: 'Sophie Bernard',
      rating: 5,
      text: "Très satisfaite de l'inspection caméra réalisée avant l'achat de notre maison. Rapport détaillé et conseils précieux. Entreprise sérieuse.",
      time: new Date('2025-12-20'),
      source: 'google',
      sourceUrl: 'https://g.co/kgs/example3',
      verified: true,
      visible: true,
      order: 3,
    },
    {
      authorName: 'Jean-Claude Moreau',
      rating: 5,
      text: "Problème de canalisation bouchée résolu en un temps record. Très réactifs et professionnels. Le devis était clair, pas de surprise sur la facture.",
      time: new Date('2025-12-15'),
      source: 'facebook',
      verified: true,
      visible: true,
      order: 4,
    },
    {
      authorName: 'Catherine Leroy',
      rating: 4,
      text: "Bon travail pour le curage de nos canalisations. Seul petit bémol : un léger retard à l'arrivée, mais le travail a été fait correctement.",
      time: new Date('2025-12-01'),
      source: 'google',
      sourceUrl: 'https://g.co/kgs/example5',
      verified: true,
      visible: true,
      order: 5,
    },
  ]

  for (const review of reviews) {
    const existing = await prisma.review.findFirst({
      where: { authorName: review.authorName, time: review.time },
    })
    if (!existing) {
      await prisma.review.create({ data: review })
    }
  }
  console.log(`${reviews.length} reviews seeded`)

  // Seed FAQs
  const faqCount = await prisma.fAQ.count()
  if (faqCount === 0) {
    const faqs = [
      { question: 'Mes toilettes sont bouchées, que faire ?', answer: "Appelez-nous immédiatement au numéro d'urgence. Nous intervenons 24h/24 et 7j/7 pour déboucher vos toilettes rapidement et sans dégâts.", order: 0 },
      { question: 'Comment déboucher une canalisation sans produit chimique ?', answer: "Nous utilisons des techniques professionnelles comme le curage haute pression et le furet mécanique, sans aucun produit chimique nocif pour l'environnement.", order: 1 },
      { question: 'Combien coûte un débouchage de canalisation ?', answer: "Le tarif dépend de la nature et de la complexité de l'intervention. Contactez-nous pour un devis gratuit et sans engagement.", order: 2 },
      { question: 'Intervenez-vous en urgence le week-end ?', answer: "Oui, nous intervenons 24h/24 et 7j/7, week-ends et jours fériés inclus, sans surcoût.", order: 3 },
      { question: "Quelle est votre zone d'intervention ?", answer: "Nous intervenons dans un rayon de 100 km autour de Montpellier et Nîmes, couvrant l'Hérault, le Gard et les départements limitrophes.", order: 4 },
      { question: 'À quelle fréquence faut-il vidanger une fosse septique ?', answer: "Il est recommandé de vidanger votre fosse septique tous les 3 à 4 ans. Nous effectuons la vidange dans le respect des normes en vigueur.", order: 5 },
      { question: "Qu'est-ce qu'une inspection caméra de canalisation ?", answer: "L'inspection caméra permet de visualiser l'intérieur de vos canalisations pour diagnostiquer précisément les problèmes (bouchons, fissures, racines).", order: 6 },
    ]
    for (const faq of faqs) {
      await prisma.fAQ.create({ data: faq })
    }
    console.log(`${faqs.length} FAQs seeded`)
  } else {
    console.log(`FAQs already exist (${faqCount}), skipping`)
  }

  console.log('Seed completed!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
