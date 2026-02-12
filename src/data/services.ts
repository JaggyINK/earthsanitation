export interface ServiceStep {
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  keyword: string
  image: string
  icon: string
  heroSubtitle?: string
  steps?: ServiceStep[]
  benefits?: string[]
  tips?: string[]
  faq?: ServiceFAQ[]
}

export const services: Service[] = [
  {
    slug: 'debouchage-canalisations',
    title: 'Débouchage des canalisations',
    shortTitle: 'Débouchage',
    description: "Débouchage d'urgence 24h/24 de vos canalisations, éviers, WC et douches. Intervention rapide par injection haute pression.",
    keyword: 'débouchage canalisations',
    image: '/images/services/debouchage.webp',
    icon: 'wrench',
    heroSubtitle: "Canalisations bouchées ? Intervention en moins d'1 heure, 24h/24 et 7j/7.",
    steps: [
      { title: 'Diagnostic', description: "Identification précise de l'obstruction grâce à nos outils de détection." },
      { title: 'Intervention', description: 'Débouchage par hydrocurage haute pression (jusqu\'à 350 bars) ou furet électrique.' },
      { title: 'Vérification', description: 'Contrôle par caméra pour s\'assurer que la canalisation est entièrement dégagée.' },
      { title: 'Prévention', description: 'Conseils personnalisés pour éviter les futurs bouchons.' },
    ],
    benefits: [
      'Intervention en urgence < 1h',
      'Aucune majoration nuit, week-end ou jours fériés',
      'Matériel professionnel haute pression',
      'Devis gratuit avant intervention',
      'Garantie sur les travaux réalisés',
      'Tous types de canalisations (PVC, fonte, grès)',
    ],
    tips: [
      'Ne versez jamais de graisse dans vos éviers : laissez-la refroidir et jetez-la à la poubelle.',
      'Utilisez des grilles de protection sur vos siphons pour retenir cheveux et débris.',
      'Faites couler de l\'eau chaude régulièrement dans vos canalisations pour dissoudre les dépôts.',
      'Évitez les produits chimiques déboucheurs qui abîment vos tuyaux.',
    ],
    faq: [
      { question: 'Combien coûte un débouchage ?', answer: 'Le prix dépend de la complexité. Nous fournissons un devis gratuit avant intervention. En moyenne, comptez entre 80 et 250 euros.' },
      { question: 'Intervenez-vous la nuit ?', answer: 'Oui, nous sommes disponibles 24h/24, 7j/7 sans surcoût, y compris nuits, week-ends et jours fériés.' },
      { question: 'Quels types de canalisations débouchez-vous ?', answer: 'Toutes : éviers, WC, douches, baignoires, descentes d\'eaux pluviales, regards, collecteurs...' },
    ],
  },
  {
    slug: 'curage-canalisations',
    title: 'Curage de canalisations',
    shortTitle: 'Curage',
    description: "Curage haute pression de vos canalisations pour un nettoyage en profondeur et la prévention des bouchons récurrents.",
    keyword: 'curage canalisations',
    image: '/images/services/curage.webp',
    icon: 'water',
    heroSubtitle: "Nettoyage en profondeur de vos réseaux pour un écoulement optimal.",
    steps: [
      { title: 'Inspection préalable', description: 'Évaluation de l\'état du réseau et du niveau d\'encrassement.' },
      { title: 'Curage haute pression', description: 'Nettoyage à l\'eau sous haute pression (jusqu\'à 350 bars) avec buses adaptées.' },
      { title: 'Aspiration des résidus', description: 'Extraction des boues, graisses et débris par pompage.' },
      { title: 'Contrôle final', description: 'Vérification par caméra du résultat et rapport d\'intervention.' },
    ],
    benefits: [
      'Nettoyage intégral des parois de canalisations',
      'Prévention efficace des bouchons récurrents',
      'Prolonge la durée de vie de vos réseaux',
      'Adapté aux particuliers et professionnels',
      'Intervention possible en milieu occupé',
      'Rapport d\'intervention détaillé',
    ],
    tips: [
      'Faites réaliser un curage préventif tous les 2 à 3 ans pour vos réseaux domestiques.',
      'Pour les restaurants et commerces alimentaires, un curage annuel est recommandé.',
      'Le curage préventif coûte moins cher qu\'une intervention d\'urgence.',
    ],
    faq: [
      { question: 'Quelle est la différence entre débouchage et curage ?', answer: 'Le débouchage traite un bouchon ponctuel. Le curage est un nettoyage complet et préventif de toute la canalisation.' },
      { question: 'À quelle fréquence faut-il curer ses canalisations ?', answer: 'Tous les 2 à 3 ans pour un réseau domestique, annuellement pour un usage professionnel (restaurant, etc.).' },
    ],
  },
  {
    slug: 'inspection-camera',
    title: 'Inspection caméra',
    shortTitle: 'Inspection caméra',
    description: "Diagnostic précis par caméra vidéo pour identifier fissures, racines et obstructions dans vos canalisations.",
    keyword: 'inspection caméra canalisation',
    image: '/images/services/inspection.webp',
    icon: 'camera',
    heroSubtitle: "Visualisez l'intérieur de vos canalisations en temps réel.",
    steps: [
      { title: 'Préparation', description: 'Repérage des accès et introduction de la caméra endoscopique.' },
      { title: 'Inspection vidéo', description: 'Exploration complète du réseau avec enregistrement vidéo HD.' },
      { title: 'Analyse', description: 'Identification des anomalies : fissures, décalages, racines, dépôts.' },
      { title: 'Rapport', description: 'Rapport détaillé avec captures vidéo et préconisations de travaux.' },
    ],
    benefits: [
      'Diagnostic précis sans travaux de terrassement',
      'Enregistrement vidéo HD fourni',
      'Localisation GPS des anomalies',
      'Idéal avant achat immobilier',
      'Détection de fuites invisibles',
      'Rapport exploitable par votre assurance',
    ],
    tips: [
      'Avant un achat immobilier, demandez une inspection caméra des canalisations.',
      'L\'inspection permet d\'éviter des travaux inutiles en ciblant précisément le problème.',
      'Conservez le rapport vidéo : il peut servir en cas de litige ou de sinistre.',
    ],
    faq: [
      { question: 'L\'inspection caméra abîme-t-elle les canalisations ?', answer: 'Non, c\'est une méthode totalement non destructive. La caméra est flexible et adaptée au diamètre du tuyau.' },
      { question: 'Peut-on inspecter tous les types de tuyaux ?', answer: 'Oui, nos caméras s\'adaptent aux diamètres de 32 mm à 600 mm, tous matériaux confondus.' },
    ],
  },
  {
    slug: 'assainissement',
    title: 'Assainissement individuel et collectif',
    shortTitle: 'Assainissement',
    description: "Pose de fosses septiques, fosses toutes eaux, microstations et filtres compacts. Mise aux normes et entretien.",
    keyword: 'assainissement individuel collectif',
    image: '/images/services/assainissement.webp',
    icon: 'shield',
    heroSubtitle: "Solutions complètes d'assainissement pour particuliers et collectivités.",
    steps: [
      { title: 'Étude de sol', description: 'Analyse du terrain et dimensionnement de l\'installation adaptée.' },
      { title: 'Conception', description: 'Choix de la filière (fosse + filtre, microstation, filtre compact) et dossier administratif.' },
      { title: 'Installation', description: 'Terrassement, pose de la filière et raccordements dans les règles de l\'art.' },
      { title: 'Mise en service', description: 'Tests de fonctionnement, formation à l\'utilisation et remise du dossier technique.' },
    ],
    benefits: [
      'Étude et dimensionnement personnalisés',
      'Toutes filières : fosse septique, microstation, filtre compact',
      'Mise aux normes selon la réglementation en vigueur',
      'Dossier administratif pris en charge',
      'Entretien et maintenance post-installation',
      'Accompagnement pour les aides financières (éco-PTZ, ANAH)',
    ],
    tips: [
      'Faites contrôler votre installation par le SPANC avant toute mise en vente de votre bien.',
      'Ne jetez jamais de produits chimiques dans votre fosse septique.',
      'Une microstation est idéale pour les petits terrains (emprise au sol réduite).',
    ],
    faq: [
      { question: 'Quelle est la durée de vie d\'une fosse septique ?', answer: 'Une fosse septique bien entretenue dure 20 à 30 ans. La vidange régulière (tous les 4 ans) est essentielle.' },
      { question: 'Microstation ou fosse septique ?', answer: 'La microstation est plus compacte et offre un meilleur traitement, mais nécessite de l\'électricité. Nous vous conseillons selon votre situation.' },
    ],
  },
  {
    slug: 'vidange-fosse-septique',
    title: 'Vidange fosses septiques et bacs à graisse',
    shortTitle: 'Vidange',
    description: "Vidange et pompage de fosses septiques, fosses toutes eaux et bacs à graisse. Respect des normes environnementales.",
    keyword: 'vidange fosse septique',
    image: '/images/services/vidange.webp',
    icon: 'truck',
    heroSubtitle: "Vidange professionnelle de vos fosses et bacs à graisse, dans le respect des normes.",
    steps: [
      { title: 'Accès et préparation', description: 'Repérage de la fosse, ouverture et évaluation du niveau de boues.' },
      { title: 'Pompage', description: 'Aspiration complète des boues et matières avec camion hydrocureur.' },
      { title: 'Nettoyage', description: 'Rinçage de la fosse ou du bac pour éliminer les résidus collés.' },
      { title: 'Bordereau', description: 'Remise du bordereau de suivi des déchets (BSD) — obligatoire légalement.' },
    ],
    benefits: [
      'Camion hydrocureur grande capacité',
      'Bordereau de suivi des déchets (BSD) fourni',
      'Traitement des déchets en centre agréé',
      'Intervention rapide, même en urgence',
      'Vidange de fosses septiques, toutes eaux et bacs à graisse',
      'Forfait entretien annuel disponible',
    ],
    tips: [
      'Une fosse septique doit être vidangée tous les 4 ans en moyenne.',
      'Les bacs à graisse de restaurants doivent être vidangés tous les 3 à 6 mois.',
      'Ne vidangez jamais intégralement votre fosse : laissez 10% de boues pour le redémarrage biologique.',
    ],
    faq: [
      { question: 'Comment savoir si ma fosse doit être vidangée ?', answer: 'Si les boues dépassent 50% du volume de la fosse, il est temps. Des odeurs ou un écoulement lent sont aussi des signes.' },
      { question: 'Que devient le contenu de la fosse ?', answer: 'Les boues sont transportées vers un centre de traitement agréé. Un bordereau de suivi vous est remis.' },
    ],
  },
  {
    slug: 'travaux-vrd',
    title: 'Travaux VRD et création de canalisations',
    shortTitle: 'Travaux VRD',
    description: "Branchements neufs et existants, création et raccordement de réseaux d'assainissement. Depuis 2006.",
    keyword: 'travaux VRD canalisations',
    image: '/images/services/vrd.webp',
    icon: 'hardhat',
    heroSubtitle: "Création, raccordement et réhabilitation de réseaux d'assainissement.",
    steps: [
      { title: 'Étude technique', description: 'Relevé topographique, étude de sol et dimensionnement du réseau.' },
      { title: 'Terrassement', description: 'Fouilles et préparation du terrain selon les normes DTU.' },
      { title: 'Pose des réseaux', description: 'Installation des canalisations, regards et raccordements.' },
      { title: 'Remise en état', description: 'Remblaiement, compactage et remise en état des surfaces.' },
    ],
    benefits: [
      'Expérience depuis 2006 en travaux VRD',
      'Branchements neufs et réhabilitation',
      'Raccordement au tout-à-l\'égout',
      'Conformité DTU et normes en vigueur',
      'Gestion complète du chantier',
      'Travaux garantis décennale',
    ],
    tips: [
      'Vérifiez auprès de votre mairie les obligations de raccordement au tout-à-l\'égout.',
      'Le raccordement est obligatoire dans les 2 ans suivant la mise en service du réseau collectif.',
      'Demandez plusieurs devis et vérifiez l\'assurance décennale de l\'entreprise.',
    ],
    faq: [
      { question: 'Combien de temps durent les travaux VRD ?', answer: 'De quelques jours pour un branchement simple à plusieurs semaines pour un réseau complet. Nous vous fournissons un planning précis.' },
      { question: 'Faut-il un permis pour les travaux VRD ?', answer: 'Selon les cas, une déclaration préalable ou un permis de construire peut être nécessaire. Nous gérons les démarches administratives.' },
    ],
  },
  {
    slug: 'pose-reseaux-sans-tranchee',
    title: 'Pose de réseaux sans tranchée',
    shortTitle: 'Sans tranchée',
    description: "Technique innovante de pose de canalisations sans tranchée. Moins de dégâts, moins de nuisances, résultat durable.",
    keyword: 'pose réseaux sans tranchée',
    image: '/images/services/sans-tranchee.webp',
    icon: 'tunnel',
    heroSubtitle: "Technologie de pointe pour poser vos canalisations sans détruire votre terrain.",
    steps: [
      { title: 'Étude de faisabilité', description: 'Analyse du tracé, du sol et des contraintes pour valider la technique.' },
      { title: 'Forage dirigé', description: 'Réalisation du forage pilote guidé par GPS de haute précision.' },
      { title: 'Pose de la canalisation', description: 'Tirage de la canalisation dans le forage avec les raccords nécessaires.' },
      { title: 'Contrôle', description: 'Tests d\'étanchéité et inspection caméra du réseau posé.' },
    ],
    benefits: [
      'Aucune tranchée : votre jardin, allée et terrasse sont préservés',
      'Rapidité d\'exécution (2 à 3 fois plus rapide)',
      'Coût souvent inférieur aux méthodes traditionnelles',
      'Nuisances sonores et visuelles réduites',
      'Adapté aux passages sous routes, rivières, bâtiments',
      'Résultat identique à une pose traditionnelle',
    ],
    tips: [
      'La technique sans tranchée est idéale sous les allées pavées, jardins paysagés ou parkings.',
      'Demandez si cette technique est applicable à votre cas : certains sols très rocheux peuvent nécessiter une approche traditionnelle.',
      'Cette méthode est aussi utilisable pour la réhabilitation de canalisations existantes.',
    ],
    faq: [
      { question: 'La technique sans tranchée est-elle aussi solide ?', answer: 'Oui, la canalisation posée est identique à une pose classique. La durée de vie est la même, voire supérieure.' },
      { question: 'Quels diamètres de tuyaux peut-on poser ?', answer: 'De 32 mm à 400 mm selon la technique utilisée (forage dirigé, éclatement, chemisage).' },
    ],
  },
]
