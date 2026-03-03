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

  // Seed blog posts (7 SEO articles, one per service)
  const posts = [
    {
      title: 'Canalisation bouchée : que faire ? Guide complet du débouchage à Montpellier',
      slug: 'canalisation-bouchee-que-faire-guide-debouchage-montpellier',
      excerpt: "Votre canalisation est bouchée ? Découvrez les causes, les solutions et quand appeler un professionnel du débouchage à Montpellier et alentours.",
      published: true,
      publishedAt: new Date('2026-02-01T08:00:00.000Z'),
      content: `Vous avez un évier qui ne se vide plus, des toilettes qui débordent ou une douche qui stagne ? Une canalisation bouchée est l'un des problèmes de plomberie les plus fréquents. Voici tout ce qu'il faut savoir pour réagir efficacement.

## Quels sont les signes d'une canalisation bouchée ?

Plusieurs indices doivent vous alerter :

- **L'eau stagne** dans l'évier, le lavabo ou la douche
- **Des remontées d'eau** dans les toilettes ou les évacuations
- **Des bruits de gargouillement** dans les tuyaux
- **Des mauvaises odeurs** provenant des canalisations
- **Un écoulement anormalement lent** de l'eau

## Quelles sont les causes les plus fréquentes des bouchons ?

### Dans la cuisine
- **La graisse de cuisson** qui se solidifie dans les tuyaux
- **Les déchets alimentaires** et le marc de café
- **Le calcaire** qui réduit le diamètre du tuyau

### Dans la salle de bain
- **Les cheveux** : principale cause dans les douches et baignoires
- **Les résidus de savon** qui forment un dépôt collant

### Dans les toilettes
- **Les lingettes** (même dites biodégradables) qui ne se désintègrent pas
- **Les protections hygiéniques** et objets non solubles

## Comment déboucher une canalisation soi-même ?

1. **Eau bouillante** : versez un litre d'eau bouillante pour dissoudre les graisses légères
2. **Ventouse** : créez un appel d'air en pompant énergiquement
3. **Bicarbonate + vinaigre blanc** : versez 1/2 verre de chaque, attendez 30 minutes puis rincez

**Attention** : évitez les produits chimiques qui abîment vos canalisations à long terme.

## Quand appeler un professionnel du débouchage ?

Faites appel à un spécialiste si les méthodes maison ne fonctionnent pas, si le bouchon est profond, si plusieurs points d'évacuation sont touchés ou si le problème est récurrent.

## Quelles méthodes utilisent les professionnels ?

- **L'hydrocurage haute pression** (jusqu'à 350 bars)
- **Le furet électrique**
- **L'inspection par caméra**
- **Le test de fumée**

## Combien coûte un débouchage de canalisation à Montpellier ?

Le prix dépend de la complexité de l'intervention. Chez Earth Sanitation, nous proposons un **devis gratuit et sans engagement** avant toute intervention.

## Earth Sanitation intervient-il la nuit et le week-end ?

Oui, nous sommes disponibles **24h/24 et 7j/7**. Un tarif d'astreinte peut s'appliquer en dehors des heures ouvrées. Temps d'intervention moyen : 45 minutes sur Montpellier.

## Comment éviter les bouchons à l'avenir ?

- Ne versez **jamais de graisse** dans l'évier
- Utilisez des **grilles de protection** sur vos siphons
- Faites réaliser un **curage préventif** tous les 2 à 3 ans

---

**Besoin d'un débouchage en urgence ?** Contactez Earth Sanitation par WhatsApp ou téléphone. Intervention rapide, devis gratuit.`,
    },
    {
      title: 'Curage de canalisations : pourquoi et à quelle fréquence ? Tout savoir',
      slug: 'curage-canalisations-pourquoi-frequence-tout-savoir',
      excerpt: "Le curage de canalisations prévient les bouchons et prolonge la durée de vie de vos réseaux. Découvrez tout sur cette opération essentielle.",
      published: true,
      publishedAt: new Date('2026-02-03T08:00:00.000Z'),
      content: `Le curage de canalisations est une opération d'entretien préventif souvent méconnue. Pourtant, c'est la meilleure manière d'éviter les bouchons récurrents et de prolonger la durée de vie de vos réseaux d'évacuation.

## Qu'est-ce que le curage de canalisations ?

Le curage consiste à **nettoyer en profondeur** l'intérieur des canalisations pour éliminer les dépôts qui s'accumulent : graisses, tartre, racines, boues, sable et débris.

## Quelle est la différence entre débouchage et curage ?

- **Le débouchage** traite un bouchon ponctuel
- **Le curage** est un nettoyage complet sur toute la longueur, restaurant le diamètre d'origine

## Comment fonctionne le curage haute pression ?

De l'eau sous haute pression (jusqu'à 350 bars) est projetée via des buses spéciales. Cette technique décolle les dépôts, élimine les graisses, détruit le tartre et évacue les racines. C'est une méthode **100% écologique**.

## À quelle fréquence faut-il faire curer ses canalisations ?

- **Maison individuelle** : tous les 2 à 3 ans
- **Immeuble collectif** : tous les 1 à 2 ans
- **Restaurant ou commerce alimentaire** : tous les 6 mois à 1 an
- **Bâtiment industriel** : jusqu'à tous les 6 mois

## Quels sont les signes qu'un curage est nécessaire ?

- Des **bouchons récurrents** malgré des débouchages
- Un **écoulement de plus en plus lent**
- Des **mauvaises odeurs** persistantes
- Des **remontées d'eau**

## Le curage abîme-t-il les canalisations ?

Non, le curage haute pression est **non destructif** quand il est réalisé par un professionnel. La pression est adaptée au matériau et au diamètre.

## Combien coûte un curage de canalisations ?

Le tarif varie selon la longueur et le diamètre. Earth Sanitation fournit un **devis gratuit** après diagnostic. Le curage préventif coûte toujours moins cher qu'une urgence.

## Quels types de canalisations peut-on curer ?

Toutes : eaux usées, eaux pluviales, collecteurs, regards, descentes d'eau, réseaux d'assainissement.

---

**Besoin d'un curage ?** Contactez Earth Sanitation pour un devis gratuit. Intervention rapide sur tout le département.`,
    },
    {
      title: "Inspection caméra de canalisations : quand et pourquoi faire un diagnostic vidéo ?",
      slug: 'inspection-camera-canalisations-quand-pourquoi-diagnostic-video',
      excerpt: "L'inspection caméra permet de voir l'intérieur de vos canalisations sans travaux. Découvrez quand cette technique est indispensable.",
      published: true,
      publishedAt: new Date('2026-02-05T08:00:00.000Z'),
      content: `L'inspection par caméra endoscopique permet de visualiser l'état de vos canalisations en temps réel, sans creuser ni casser.

## Comment fonctionne l'inspection caméra ?

Une **caméra endoscopique haute résolution** progresse dans le tuyau et transmet des images en direct. Le technicien peut visualiser l'état des parois, localiser les bouchons, repérer les fissures et identifier les infiltrations de racines.

## Quand faut-il faire une inspection caméra ?

### Avant un achat immobilier
Détectez les problèmes cachés qui pourraient coûter **plusieurs milliers d'euros** à réparer.

### En cas de bouchons récurrents
Identifiez la cause profonde : contrepente, raccordement défectueux, infiltration de racines.

### Après des travaux
Vérifiez que les canalisations n'ont pas été endommagées.

### Pour un diagnostic de réseau
Cartographiez et évaluez l'état de vos réseaux d'assainissement.

## L'inspection caméra abîme-t-elle les canalisations ?

Non, c'est **totalement non destructif**. La caméra s'adapte aux diamètres de 32 mm à 600 mm.

## Que révèle l'inspection caméra ?

Fissures, décalages, racines, dépôts, contrepentes, objets coincés et corrosion.

## Le rapport est-il utile pour l'assurance ?

Oui. Le rapport détaillé avec vidéo constitue un document **probant** pour votre assurance ou en cas de litige.

## Que fait-on après le diagnostic ?

Selon les résultats : hydrocurage, débouchage ciblé, chemisage, remplacement ou curage préventif.

---

**Besoin d'un diagnostic ?** Demandez une inspection caméra à Earth Sanitation. Devis gratuit et intervention rapide.`,
    },
    {
      title: "Assainissement individuel ou collectif : quelle solution pour votre habitation ?",
      slug: 'assainissement-individuel-collectif-quelle-solution-habitation',
      excerpt: "Fosse septique, microstation ou raccordement tout-à-l'égout ? Comprendre les différences pour choisir le bon système d'assainissement.",
      published: true,
      publishedAt: new Date('2026-02-07T08:00:00.000Z'),
      content: `L'assainissement des eaux usées est une obligation légale pour toute habitation. Voici un guide complet pour comprendre vos options.

## Quelle différence entre assainissement individuel et collectif ?

### Assainissement collectif (tout-à-l'égout)
Raccordement au **réseau public** : les eaux usées sont traitées par une station d'épuration municipale.

### Assainissement individuel (non collectif)
Installation d'un **système autonome** sur votre terrain : fosse septique, microstation, filtre compact.

## Comment savoir si je suis en collectif ou individuel ?

Consultez le **zonage d'assainissement** de votre commune, disponible en mairie ou sur le site du SPANC.

## Quels sont les systèmes d'assainissement individuel ?

### La fosse septique
Simple, pas d'électricité, durée de vie 20-30 ans. Vidange tous les 4 ans.

### La microstation d'épuration
Compacte, excellent traitement, pas d'épandage. Nécessite de l'électricité.

### Le filtre compact
Pas d'électricité, compact. Remplacement du média filtrant tous les 10 ans.

## Est-il obligatoire de se raccorder au tout-à-l'égout ?

Oui, dans les **2 ans** suivant la mise en service du réseau si votre habitation est en zone desservie.

## Quel est le rôle du SPANC ?

Contrôler les installations, vérifier la conformité lors des ventes, conseiller et délivrer les autorisations.

## Combien coûte une installation d'assainissement ?

- **Fosse septique + épandage** : 5 000 à 12 000 €
- **Microstation** : 7 000 à 15 000 €
- **Filtre compact** : 8 000 à 14 000 €

## Que se passe-t-il si mon installation n'est pas conforme ?

Travaux obligatoires dans un délai d'un an lors de la vente. Hors vente, le SPANC peut imposer des travaux en cas de risque sanitaire.

---

**Besoin d'un devis pour votre assainissement ?** Contactez Earth Sanitation. Étude gratuite et accompagnement complet.`,
    },
    {
      title: 'Vidange de fosse septique : fréquence, prix et obligations légales',
      slug: 'vidange-fosse-septique-frequence-prix-obligations-legales',
      excerpt: "Tout savoir sur la vidange de fosse septique : fréquence, prix, obligations légales. Guide complet pour les propriétaires.",
      published: true,
      publishedAt: new Date('2026-02-09T08:00:00.000Z'),
      content: `La vidange de fosse septique est indispensable pour le bon fonctionnement de votre système d'assainissement non collectif.

## À quelle fréquence faut-il vidanger sa fosse septique ?

En moyenne **tous les 4 ans**. La vidange est nécessaire quand les boues dépassent **50% du volume** de la fosse.

## Comment savoir si ma fosse doit être vidangée ?

- **Mauvaises odeurs** autour de la fosse
- **Écoulement lent** des eaux usées
- **Remontées d'eau** dans les canalisations
- **Herbe anormalement verte** au-dessus de la fosse

## La vidange est-elle obligatoire ?

Oui. Le SPANC effectue des contrôles. Un défaut d'entretien peut bloquer la vente de votre bien et entraîner des risques sanitaires.

## Qu'est-ce que le bordereau de suivi des déchets ?

Document obligatoire remis par le professionnel, attestant la date, le volume vidangé et le lieu de traitement. **Conservez-le précieusement.**

## Faut-il vider intégralement la fosse ?

Non. Laissez environ **10% des boues** pour le redémarrage biologique de l'installation.

## Et pour les bacs à graisse ?

- **Restaurants** : vidange tous les 3 à 6 mois
- **Cantines** : tous les 6 mois à 1 an
- **Particuliers** : tous les 6 mois si équipés

## Quels gestes adopter entre deux vidanges ?

- Ne jetez jamais de produits chimiques dans la fosse
- Évitez les lingettes et objets non biodégradables
- Limitez l'usage de javel (elle tue les bactéries utiles)

---

**Besoin d'une vidange ?** Contactez Earth Sanitation. Devis gratuit, intervention rapide avec camion hydrocureur.`,
    },
    {
      title: 'Travaux VRD : tout comprendre sur les branchements et réseaux enterrés',
      slug: 'travaux-vrd-comprendre-branchements-reseaux-enterres',
      excerpt: "Qu'est-ce que les travaux VRD ? Raccordement eau, électricité, assainissement : tout savoir pour votre construction ou rénovation.",
      published: true,
      publishedAt: new Date('2026-02-11T08:00:00.000Z'),
      content: `Les travaux VRD (Voirie et Réseaux Divers) sont incontournables lors de la construction d'une maison ou du raccordement d'une habitation.

## Qu'est-ce que les travaux VRD ?

VRD signifie **Voirie et Réseaux Divers** : accès routier, réseaux d'eau, assainissement, électricité, gaz, télécommunications et drainage.

## Quels branchements sont réalisés ?

- **Eau potable** : raccordement au réseau public avec compteur
- **Assainissement** : tout-à-l'égout ou système individuel
- **Électricité** : câble en tranchée depuis le réseau
- **Gaz** : raccordement si disponible
- **Télécoms** : gaines pour téléphone, fibre optique

## Quand faut-il des travaux VRD ?

- **Construction neuve** : viabilisation du terrain
- **Raccordement tout-à-l'égout** : obligatoire dans les 2 ans
- **Rénovation** : mise aux normes
- **Division de terrain** : nouveaux branchements

## Faut-il un permis ?

Selon les cas : déclaration préalable, permis d'aménager ou DICT (Déclaration d'Intention de Commencement de Travaux). Earth Sanitation gère toutes les démarches.

## Combien de temps durent les travaux ?

- **Branchement simple** : 2 à 5 jours
- **Viabilisation complète** : 2 à 4 semaines

## Quelles normes respecter ?

Les normes DTU, NF, le règlement sanitaire départemental et le PLU de la commune.

---

**Un projet de construction ou raccordement ?** Contactez Earth Sanitation pour une étude gratuite et un devis détaillé.`,
    },
    {
      title: 'Rénovation de canalisations sans tranchée : techniques, avantages et prix',
      slug: 'renovation-canalisations-sans-tranchee-techniques-avantages-prix',
      excerpt: "Chemisage, éclatement, tubage : les techniques de rénovation sans tranchée sont plus rapides et moins coûteuses. Découvrez-les.",
      published: true,
      publishedAt: new Date('2026-02-13T08:00:00.000Z'),
      content: `Vos canalisations sont endommagées mais vous ne voulez pas détruire votre jardin ou votre terrasse ? Les techniques sans tranchée permettent de réparer vos canalisations **sans creuser**.

## Qu'est-ce que la technique sans tranchée ?

Des méthodes permettant de réparer ou remplacer des canalisations **sans ouvrir de fouille** sur toute la longueur. Seuls quelques points d'accès sont nécessaires.

## Quelles sont les techniques disponibles ?

### Le chemisage (gainage)
Une gaine souple imprégnée de résine forme un **nouveau tuyau** à l'intérieur de l'ancien. Durée de vie : 50 ans et plus.

### L'éclatement
La vieille canalisation est **fragmentée** et remplacée simultanément par un nouveau tuyau.

### L'injection de résine
Résine injectée dans les fissures pour restaurer l'étanchéité. Très rapide.

### Le tubage
Un tube rigide est inséré dans la canalisation existante.

## Quels sont les avantages ?

- **Pas de destruction** : jardin, terrasse et allée préservés
- **2 à 3 fois plus rapide** qu'une tranchée classique
- **Coût réduit** : pas de remise en état de surface
- **Moins de nuisances** : bruit et poussière limités
- **Écologique** : empreinte carbone réduite

## C'est aussi solide qu'une pose classique ?

Oui. Le chemisage offre une durée de vie de **plus de 50 ans**.

## Dans quels cas utiliser la technique sans tranchée ?

Sous une allée pavée, un jardin paysagé, une route, un parking, ou un passage sous rivière ou bâtiment.

## Combien ça coûte ?

Généralement **20 à 40% moins cher** que la tranchée classique grâce à l'absence de remise en état.

---

**Canalisations endommagées ?** Contactez Earth Sanitation pour un diagnostic gratuit et la solution la plus adaptée.`,
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
      { question: 'Intervenez-vous en urgence le week-end ?', answer: "Oui, nous intervenons 24h/24 et 7j/7, week-ends et jours fériés inclus. Un tarif d'astreinte peut s'appliquer selon l'heure.", order: 3 },
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
