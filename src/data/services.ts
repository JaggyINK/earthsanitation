export interface ServiceStep {
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceSection {
  title: string
  content: string
  highlight?: string
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
  intro?: string
  sections?: ServiceSection[]
  steps?: ServiceStep[]
  benefits?: string[]
  tips?: string[]
  faq?: ServiceFAQ[]
  gallery?: { src: string; alt: string; label: string }[]
}

export const services: Service[] = [
  {
    slug: 'debouchage-canalisations',
    title: 'D\u00e9bouchage des canalisations',
    shortTitle: 'D\u00e9bouchage',
    description: "D\u00e9bouchage d'urgence 24h/24 de vos canalisations, \u00e9viers, WC et douches. Intervention rapide en 45 minutes sur Montpellier et alentours.",
    keyword: 'd\u00e9bouchage canalisations Montpellier',
    image: '/images/services/debouchage.webp',
    icon: 'wrench',
    heroSubtitle: "Canalisations bouch\u00e9es ? Intervention en 45 minutes, 24h/24 et 7j/7.",
    intro: "Besoin d'un d\u00e9bouchage de canalisation rapide \u00e0 Montpellier ? Notre entreprise intervient efficacement pour r\u00e9soudre vos probl\u00e8mes de canalisations bouch\u00e9es. Disponibles 24h/24 et 7j/7, nous assurons une intervention rapide dans l'H\u00e9rault, le Gard et l'Aude.",
    sections: [
      {
        title: 'Un d\u00e9bouchage rapide et efficace',
        content: "Gr\u00e2ce \u00e0 notre expertise, nous intervenons pour le d\u00e9bouchage des toilettes, siphons et douches, lavabos et \u00e9viers, regards d'\u00e9gouts, vides sanitaires, canalisations des eaux us\u00e9es et canalisations d'\u00e9vacuation. Les principales causes des canalisations bouch\u00e9es sont le calcaire, les lingettes, les cheveux et la graisse.",
        highlight: 'D\u00e9pannage garanti en 45 minutes',
      },
      {
        title: 'Pour particuliers, entreprises et collectivit\u00e9s',
        content: "Nos professionnels interviennent aupr\u00e8s des particuliers, entreprises et collectivit\u00e9s. \u00c9quip\u00e9s pour r\u00e9aliser un d\u00e9bouchage rapide et efficace, nous utilisons des m\u00e9thodes avanc\u00e9es telles que l'inspection par cam\u00e9ra ou le test de fum\u00e9e pour identifier pr\u00e9cis\u00e9ment les probl\u00e8mes.",
        highlight: 'Chantier propre garanti',
      },
    ],
    steps: [
      { title: 'Diagnostic', description: "Identification pr\u00e9cise de l'obstruction gr\u00e2ce \u00e0 nos outils de d\u00e9tection (cam\u00e9ra, test de fum\u00e9e)." },
      { title: 'Intervention', description: 'D\u00e9bouchage par hydrocurage haute pression (350 bars) ou furet \u00e9lectrique selon la situation.' },
      { title: 'V\u00e9rification', description: "Contr\u00f4le par cam\u00e9ra endoscopique pour s'assurer que la canalisation est enti\u00e8rement d\u00e9gag\u00e9e." },
      { title: 'Pr\u00e9vention', description: "Conseils personnalis\u00e9s pour entretenir vos canalisations et \u00e9viter la r\u00e9apparition de bouchons." },
    ],
    benefits: [
      'Intervention en urgence en 45 minutes',
      'Disponible 24h/24, 7j/7',
      'Mat\u00e9riel professionnel haute pression (350 bars)',
      'Devis gratuit avant intervention',
      'Chantier propre apr\u00e8s chaque intervention',
      'Tous types de canalisations (PVC, fonte, gr\u00e8s)',
      'Particuliers, entreprises et collectivit\u00e9s',
    ],
    tips: [
      "Ne versez jamais de graisse dans vos \u00e9viers : laissez-la refroidir et jetez-la \u00e0 la poubelle.",
      "Utilisez des grilles de protection sur vos siphons pour retenir cheveux et d\u00e9bris.",
      "Faites couler de l'eau chaude r\u00e9guli\u00e8rement pour dissoudre les d\u00e9p\u00f4ts de graisse.",
      "\u00c9vitez les produits chimiques d\u00e9boucheurs qui ab\u00eement vos tuyaux \u00e0 long terme.",
      "Envoyez-nous les photos des d\u00e9g\u00e2ts via WhatsApp pour faciliter le diagnostic.",
    ],
    faq: [
      { question: 'Combien co\u00fbte un d\u00e9bouchage de canalisation ?', answer: "Le prix d\u00e9pend de la complexit\u00e9 et de l'heure de l'intervention. Un tarif d'astreinte peut s'appliquer en dehors des heures ouvrées. Nous fournissons un devis gratuit et sans engagement avant toute intervention." },
      { question: 'Intervenez-vous la nuit et le week-end ?', answer: "Oui, nous sommes disponibles 24h/24, 7j/7, y compris nuits, week-ends et jours f\u00e9ri\u00e9s. Un tarif d'astreinte peut s'appliquer selon l'heure." },
      { question: 'Quels types de canalisations d\u00e9bouchez-vous ?', answer: "Toutes : \u00e9viers, WC, douches, baignoires, descentes d'eaux pluviales, regards d'\u00e9gouts, vides sanitaires, collecteurs..." },
      { question: 'Quelles sont les causes fr\u00e9quentes des bouchons ?', answer: "Le calcaire, les lingettes, les cheveux, la graisse de cuisine et les d\u00e9bris alimentaires sont les causes les plus fr\u00e9quentes. Ces \u00e9l\u00e9ments s'agglom\u00e8rent et forment un bouchon." },
      { question: 'Quelle m\u00e9thode utilisez-vous ?', answer: "Nous utilisons l'hydrocurage haute pression (jusqu'\u00e0 350 bars), le furet \u00e9lectrique, l'inspection par cam\u00e9ra et le test de fum\u00e9e selon la situation." },
    ],
    gallery: [
      { src: '/images/about/toilettes.jpeg', alt: 'Technicien en intervention de d\u00e9bouchage avec furet RIDGID', label: 'D\u00e9bouchage WC' },
      { src: '/images/about/camera.jpeg', alt: 'Inspection des canalisations en vide sanitaire', label: 'Diagnostic canalisations' },
    ],
  },
  {
    slug: 'curage-canalisations',
    title: 'Curage de canalisations',
    shortTitle: 'Curage',
    description: "Curage haute pression de vos canalisations pour un nettoyage en profondeur et la pr\u00e9vention des bouchons. Service \u00e9cologique sans produits chimiques.",
    keyword: 'curage canalisations Montpellier',
    image: '/images/services/curage.webp',
    icon: 'water',
    heroSubtitle: "Nettoyage en profondeur de vos r\u00e9seaux pour un \u00e9coulement optimal et durable.",
    intro: "Earth Sanitation propose des services complets de curage de canalisations, incluant le d\u00e9bouchage et la vidange, afin de maintenir vos installations en parfait \u00e9tat. Le curage permet d'\u00e9vacuer durablement les d\u00e9p\u00f4ts, le tartre et les d\u00e9bris qui s'accumulent dans les syst\u00e8mes d'\u00e9vacuation.",
    sections: [
      {
        title: 'Curage \u00e0 haute pression',
        content: "Le curage \u00e0 haute pression est une m\u00e9thode avanc\u00e9e et efficace. En utilisant de l'eau sous haute pression, cette technique \u00e9limine les d\u00e9p\u00f4ts, graisses, tartres et d\u00e9bris. C'est une solution \u00e9cologique et non invasive, sans aucun produit chimique agressif.",
        highlight: 'Solution 100% \u00e9cologique',
      },
      {
        title: 'Curage pr\u00e9ventif et inspection',
        content: "Le curage pr\u00e9ventif permet d'anticiper les probl\u00e8mes avant qu'ils ne deviennent graves. Les d\u00e9p\u00f4ts de graisse, la v\u00e9tust\u00e9 des tuyaux et le tartre rendent l'\u00e9coulement difficile. Une inspection par cam\u00e9ra endoscopique compl\u00e8te le diagnostic.",
        highlight: 'Pr\u00e9vention = \u00e9conomies',
      },
    ],
    steps: [
      { title: 'Inspection pr\u00e9alable', description: "\u00c9valuation de l'\u00e9tat du r\u00e9seau et du niveau d'encrassement par cam\u00e9ra." },
      { title: 'Curage haute pression', description: "Nettoyage \u00e0 l'eau sous haute pression (jusqu'\u00e0 350 bars) avec buses adapt\u00e9es." },
      { title: 'Aspiration des r\u00e9sidus', description: 'Extraction des boues, graisses et d\u00e9bris par pompage sp\u00e9cialis\u00e9.' },
      { title: 'Contr\u00f4le final', description: "V\u00e9rification par cam\u00e9ra du r\u00e9sultat et rapport d'intervention d\u00e9taill\u00e9." },
    ],
    benefits: [
      'Nettoyage int\u00e9gral des parois de canalisations',
      'Pr\u00e9vention efficace des bouchons r\u00e9currents',
      'Prolonge la dur\u00e9e de vie de vos r\u00e9seaux',
      'Solution \u00e9cologique sans produits chimiques',
      'Adapt\u00e9 maisons individuelles et b\u00e2timents industriels',
      "Rapport d'intervention d\u00e9taill\u00e9 fourni",
    ],
    tips: [
      "Faites r\u00e9aliser un curage pr\u00e9ventif tous les 2 \u00e0 3 ans pour vos r\u00e9seaux domestiques.",
      "Pour les restaurants et commerces alimentaires, un curage annuel est recommand\u00e9.",
      "Le curage pr\u00e9ventif co\u00fbte bien moins cher qu'une intervention d'urgence.",
      "N'attendez pas que les probl\u00e8mes s'aggravent : un appel pr\u00e9ventif vous \u00e9pargne bien des d\u00e9sagr\u00e9ments.",
    ],
    faq: [
      { question: 'Quelle est la diff\u00e9rence entre d\u00e9bouchage et curage ?', answer: "Le d\u00e9bouchage traite un bouchon ponctuel. Le curage est un nettoyage complet et pr\u00e9ventif de toute la canalisation, en profondeur." },
      { question: '\u00c0 quelle fr\u00e9quence faut-il curer ses canalisations ?', answer: "Tous les 2 \u00e0 3 ans pour un r\u00e9seau domestique, annuellement pour un usage professionnel (restaurant, etc.)." },
      { question: 'Le curage utilise-t-il des produits chimiques ?', answer: "Non, nous utilisons exclusivement de l'eau sous haute pression. C'est une m\u00e9thode 100% \u00e9cologique, sans aucun produit chimique." },
      { question: 'Intervenez-vous chez les professionnels ?', answer: "Oui, nous intervenons aussi bien pour les particuliers que pour les entreprises et les collectivit\u00e9s." },
    ],
    gallery: [
      { src: '/images/about/camion.jpeg', alt: 'Camion hydrocureur Earth Sanitation', label: 'Camion hydrocureur' },
      { src: '/images/about/camera.jpeg', alt: 'Canalisations en cours de curage', label: 'Curage en cours' },
    ],
  },
  {
    slug: 'inspection-camera',
    title: 'Inspection caméra & Diagnostic canalisation',
    shortTitle: 'Inspection caméra',
    description: "Diagnostic assainissement et inspection caméra de canalisations à Montpellier. Détection précise de fissures, racines et obstructions par caméra endoscopique.",
    keyword: 'diagnostic assainissement inspection caméra Montpellier',
    image: '/images/services/inspection.webp',
    icon: 'camera',
    heroSubtitle: "D\u00e9tection rapide des probl\u00e8mes gr\u00e2ce \u00e0 la cam\u00e9ra endoscopique.",
    intro: "Vous avez un probl\u00e8me d'\u00e9coulement d'eau ? Votre canalisation est bouch\u00e9e ? Afin de trouver l'origine du probl\u00e8me, nos professionnels proc\u00e8dent \u00e0 l'inspection des canalisations \u00e0 l'aide d'une cam\u00e9ra endoscopique haute r\u00e9solution.",
    sections: [
      {
        title: 'D\u00e9tection pr\u00e9cise des anomalies',
        content: "L'inspection vid\u00e9o permet de localiser les bouchons et d\u00e9terminer leur nature (racines, objets, fissures), identifier des probl\u00e8mes de conception (contrepente, raccordements d\u00e9fectueux), r\u00e9v\u00e9ler un affaissement de terrain et d\u00e9tecter les d\u00e9fauts dans les r\u00e9seaux d'assainissement.",
        highlight: 'Images en temps r\u00e9el',
      },
      {
        title: 'Pour tous les types de clients',
        content: "Pour les collectivit\u00e9s, nous maintenons les infrastructures en bon \u00e9tat et pr\u00e9venons les inondations. Pour les entreprises, nous d\u00e9tectons les blocages ou fuites \u00e9vitant des arr\u00eats de production. Pour les particuliers, nous d\u00e9tectons pr\u00e9cocement les probl\u00e8mes avant qu'ils ne deviennent graves et co\u00fbteux.",
        highlight: 'Rapport d\u00e9taill\u00e9 fourni',
      },
    ],
    steps: [
      { title: 'Pr\u00e9paration', description: "Repérage des acc\u00e8s, s\u00e9curisation du site et introduction de la cam\u00e9ra endoscopique." },
      { title: 'Inspection vid\u00e9o', description: "Exploration compl\u00e8te du r\u00e9seau en temps r\u00e9el avec cam\u00e9ra haute r\u00e9solution." },
      { title: 'Analyse', description: 'Identification des anomalies : fissures, d\u00e9calages, racines, d\u00e9p\u00f4ts, contrepentes.' },
      { title: 'Rapport', description: 'Rapport d\u00e9taill\u00e9 avec captures vid\u00e9o et pr\u00e9conisations de travaux.' },
    ],
    benefits: [
      'Diagnostic pr\u00e9cis sans travaux de terrassement',
      'Cam\u00e9ra haute r\u00e9solution avec enregistrement vid\u00e9o',
      'Localisation GPS pr\u00e9cise des anomalies',
      'Id\u00e9al avant achat immobilier',
      'D\u00e9tection de fuites invisibles',
      'Rapport exploitable par votre assurance',
    ],
    tips: [
      "Avant un achat immobilier, demandez syst\u00e9matiquement une inspection cam\u00e9ra des canalisations.",
      "L'inspection permet d'\u00e9viter des travaux inutiles en ciblant pr\u00e9cis\u00e9ment le probl\u00e8me.",
      "Conservez le rapport vid\u00e9o : il peut servir en cas de litige ou de sinistre.",
      "Si des d\u00e9p\u00f4ts sont identifi\u00e9s, un hydrocurage compl\u00e8te efficacement le diagnostic.",
    ],
    faq: [
      { question: "L'inspection cam\u00e9ra ab\u00eeme-t-elle les canalisations ?", answer: "Non, c'est une m\u00e9thode totalement non destructive. La cam\u00e9ra est flexible et adapt\u00e9e au diam\u00e8tre du tuyau." },
      { question: 'Peut-on inspecter tous les types de tuyaux ?', answer: "Oui, nos cam\u00e9ras s'adaptent aux diam\u00e8tres de 32 mm \u00e0 600 mm, tous mat\u00e9riaux confondus." },
      { question: "Que fait-on si un probl\u00e8me est d\u00e9tect\u00e9 ?", answer: "Les images sont analys\u00e9es avec soin. Selon le diagnostic, nous proc\u00e9dons \u00e0 un hydrocurage, un d\u00e9bouchage cibl\u00e9 ou recommandons des r\u00e9parations sp\u00e9cifiques." },
      { question: "L'inspection est-elle utile avant un achat immobilier ?", answer: "Absolument. Elle permet de d\u00e9tecter des probl\u00e8mes cach\u00e9s (fissures, racines, contrepentes) qui pourraient co\u00fbter tr\u00e8s cher une fois install\u00e9 dans les lieux." },
    ],
    gallery: [
      { src: '/images/about/camera.jpeg', alt: 'Cam\u00e9ra endoscopique dans une canalisation', label: 'Inspection en cours' },
      { src: '/images/about/toilettes.jpeg', alt: 'Diagnostic d\u2019une canalisation bouch\u00e9e', label: 'Diagnostic terrain' },
    ],
  },
  {
    slug: 'assainissement',
    title: 'Assainissement individuel et collectif Montpellier',
    shortTitle: 'Assainissement',
    description: "Société d'assainissement à Montpellier : installation et entretien de fosses septiques, microstations, filtres compacts et raccordement tout-à-l'égout. Devis gratuit.",
    keyword: 'société assainissement Montpellier',
    image: '/images/services/assainissement.webp',
    icon: 'shield',
    heroSubtitle: "Solutions compl\u00e8tes d'assainissement pour un environnement sain et durable.",
    intro: "Pour garantir un environnement sain, notre entreprise s'est sp\u00e9cialis\u00e9e dans l'installation et l'entretien de syst\u00e8mes d'assainissement individuels et collectifs. Nous prenons en charge la pose de fosses septiques, fosses toutes eaux, microstations et filtres compacts.",
    sections: [
      {
        title: 'Installation compl\u00e8te',
        content: "Les travaux d'installation comprennent l'\u00e9tude pr\u00e9alable du terrain, la conception du plan d'installation, la pose des \u00e9quipements et le raccordement au r\u00e9seau existant. Pour l'assainissement collectif, nous effectuons le raccordement direct au tout-\u00e0-l'\u00e9gout.",
        highlight: 'De l\'\u00e9tude \u00e0 la mise en service',
      },
      {
        title: 'Entretien et suivi',
        content: "Notre entreprise assure un suivi r\u00e9gulier : vidange des fosses septiques, contr\u00f4le des stations d'\u00e9puration, d\u00e9bouchage et hydrocurage. Nos techniciens exp\u00e9riment\u00e9s utilisent du mat\u00e9riel adapt\u00e9 pour garantir la fiabilit\u00e9 et la long\u00e9vit\u00e9 de votre \u00e9quipement.",
        highlight: 'Maintenance r\u00e9guli\u00e8re',
      },
    ],
    steps: [
      { title: '\u00c9tude de sol', description: "Analyse du terrain et dimensionnement de l'installation adapt\u00e9e \u00e0 votre besoin." },
      { title: 'Conception', description: "Choix de la fili\u00e8re (fosse + filtre, microstation, filtre compact) et dossier administratif complet." },
      { title: 'Installation', description: "Terrassement, pose de la fili\u00e8re et raccordements dans les r\u00e8gles de l'art." },
      { title: 'Mise en service', description: "Tests de fonctionnement, formation \u00e0 l'utilisation et remise du dossier technique." },
    ],
    benefits: [
      '\u00c9tude et dimensionnement personnalis\u00e9s',
      'Toutes fili\u00e8res : fosse septique, microstation, filtre compact',
      'Raccordement au tout-\u00e0-l\'\u00e9gout',
      'Mise aux normes selon la r\u00e9glementation en vigueur',
      'Dossier administratif pris en charge',
      'Entretien et maintenance post-installation',
    ],
    tips: [
      "Faites contr\u00f4ler votre installation par le SPANC avant toute mise en vente de votre bien.",
      "Ne jetez jamais de produits chimiques dans votre fosse septique.",
      "Une microstation est id\u00e9ale pour les petits terrains (emprise au sol r\u00e9duite).",
      "L'assainissement collectif consiste \u00e0 raccorder au r\u00e9seau public, l'individuel implique un syst\u00e8me autonome.",
    ],
    faq: [
      { question: "Quelle est la dur\u00e9e de vie d'une fosse septique ?", answer: "Une fosse septique bien entretenue dure 20 \u00e0 30 ans. La vidange r\u00e9guli\u00e8re (tous les 4 ans) est essentielle." },
      { question: 'Microstation ou fosse septique ?', answer: "La microstation est plus compacte et offre un meilleur traitement, mais n\u00e9cessite de l'\u00e9lectricit\u00e9. Nous vous conseillons selon votre situation et la taille de votre terrain." },
      { question: 'Quelle diff\u00e9rence entre assainissement individuel et collectif ?', answer: "L'assainissement collectif raccorde au r\u00e9seau public (tout-\u00e0-l'\u00e9gout). L'individuel implique une installation autonome sur votre terrain (fosse septique, microstation...)." },
      { question: 'Prenez-vous en charge les d\u00e9marches administratives ?', answer: "Oui, nous g\u00e9rons le dossier complet : \u00e9tude, conception, demande aupr\u00e8s du SPANC et suivi des travaux." },
    ],
    gallery: [
      { src: '/images/about/fosses.jpeg', alt: 'Installation d\u2019une fosse septique', label: 'Fosse septique' },
      { src: '/images/about/travaux.jpeg', alt: 'Travaux de terrassement pour assainissement', label: 'Terrassement' },
    ],
  },
  {
    slug: 'vidange-fosse-septique',
    title: 'Vidange fosse septique — Prix & Tarifs',
    shortTitle: 'Vidange',
    description: "Vidange de fosse septique à Montpellier et alentours. Prix transparent, devis gratuit. Pompage fosses septiques, bacs à graisse, microstations. Service rapide et conforme.",
    keyword: 'vidange fosse septique prix Montpellier',
    image: '/images/services/vidange.webp',
    icon: 'truck',
    heroSubtitle: "Vidange professionnelle de vos fosses et bacs \u00e0 graisse, dans le respect des normes.",
    intro: "Notre entreprise propose des services complets pour la vidange et le nettoyage de vos fosses septiques, bacs \u00e0 graisse, pompes de relevage, microstations, puisards et piscines. Une vidange r\u00e9guli\u00e8re est essentielle pour pr\u00e9venir les d\u00e9bordements et les mauvaises odeurs.",
    sections: [
      {
        title: 'Vidange de bacs \u00e0 graisse',
        content: "Le bac \u00e0 graisse joue un r\u00f4le essentiel dans la restauration en retenant les mati\u00e8res grasses. Nous proc\u00e9dons au pompage des graisses accumul\u00e9es, nettoyons minutieusement le bac et v\u00e9rifions l'\u00e9tat des canalisations.",
        highlight: 'Service restauration',
      },
      {
        title: 'Microstations et pompes de relevage',
        content: "Nous disposons d'un service sp\u00e9cialis\u00e9 pour la vidange de pompes de relevage et microstations. Notre \u00e9quipement performant garantit une vidange compl\u00e8te et s\u00e9curis\u00e9e, limitant les risques de pannes.",
        highlight: 'Toutes installations',
      },
    ],
    steps: [
      { title: 'Acc\u00e8s et pr\u00e9paration', description: "Rep\u00e9rage de la fosse, ouverture et \u00e9valuation du niveau de boues." },
      { title: 'Pompage', description: 'Aspiration compl\u00e8te des boues et mati\u00e8res avec camion hydrocureur grande capacit\u00e9.' },
      { title: 'Nettoyage', description: 'Rin\u00e7age de la fosse ou du bac, v\u00e9rification du filtre et remise en eaux.' },
      { title: 'Bordereau', description: 'Remise du bordereau de suivi des d\u00e9chets (BSD) \u2014 obligatoire l\u00e9galement.' },
    ],
    benefits: [
      'Camion hydrocureur grande capacit\u00e9',
      'Bordereau de suivi des d\u00e9chets (BSD) fourni',
      'Traitement des d\u00e9chets en centre agr\u00e9\u00e9',
      'Intervention rapide, m\u00eame en urgence',
      'Fosses septiques, bacs \u00e0 graisse, microstations, pompes de relevage',
      'Nettoyage complet du site apr\u00e8s intervention',
    ],
    tips: [
      "Une fosse septique doit \u00eatre vidang\u00e9e tous les 4 ans en moyenne.",
      "Les bacs \u00e0 graisse de restaurants doivent \u00eatre vidang\u00e9s tous les 3 \u00e0 6 mois.",
      "Ne vidangez jamais int\u00e9gralement votre fosse : laissez 10% de boues pour le red\u00e9marrage biologique.",
      "Apr\u00e8s la vidange, nous nettoyons les lieux pour votre enti\u00e8re satisfaction.",
    ],
    faq: [
      { question: 'Comment savoir si ma fosse doit \u00eatre vidang\u00e9e ?', answer: "Si les boues d\u00e9passent 50% du volume de la fosse, il est temps. Des odeurs ou un \u00e9coulement lent sont aussi des signes." },
      { question: 'Que devient le contenu de la fosse ?', answer: "Les boues sont transport\u00e9es vers un centre de traitement agr\u00e9\u00e9. Un bordereau de suivi vous est obligatoirement remis." },
      { question: 'Vidangez-vous aussi les bacs \u00e0 graisse ?', answer: "Oui, nous intervenons sur tous types d'installations : fosses septiques, bacs \u00e0 graisse, microstations, pompes de relevage, puisards et piscines." },
      { question: 'Intervenez-vous \u00e0 S\u00e8te et La Grande-Motte ?', answer: "Oui, nous intervenons sur tout l'H\u00e9rault, le Gard et l'Aude dans un rayon de 100 km autour de Montpellier." },
    ],
    gallery: [
      { src: '/images/about/fosses.jpeg', alt: 'Fosse septique install\u00e9e', label: 'Fosse septique' },
      { src: '/images/about/camion.jpeg', alt: 'Camion hydrocureur pour vidange', label: 'Camion hydrocureur' },
    ],
  },
  {
    slug: 'travaux-vrd',
    title: 'Travaux VRD et cr\u00e9ation de canalisations',
    shortTitle: 'Travaux VRD',
    description: "Travaux de voirie et r\u00e9seaux divers : branchements eau, \u00e9lectricit\u00e9, gaz, t\u00e9l\u00e9coms. Cr\u00e9ation de tranch\u00e9es et pose de canalisations.",
    keyword: 'travaux VRD canalisations Montpellier',
    image: '/images/services/vrd.webp',
    icon: 'hardhat',
    heroSubtitle: "Branchements neufs, cr\u00e9ation de tranch\u00e9es et pose de r\u00e9seaux d'assainissement.",
    intro: "Notre entreprise intervient pour des travaux de VRD (voirie et r\u00e9seaux divers) sur des branchements neufs ou anciens. Nous assurons la mise en place des r\u00e9seaux d'eau potable, d'\u00e9lectricit\u00e9, de gaz et de t\u00e9l\u00e9communications dans le respect des normes en vigueur.",
    sections: [
      {
        title: 'R\u00e9alisation de tranch\u00e9es',
        content: "Nous prenons en main toutes les \u00e9tapes : \u00e9tude du terrain, terrassement avec pr\u00e9cision, pose des canalisations et remise en \u00e9tat des surfaces. Ces travaux garantissent une \u00e9vacuation efficace des eaux us\u00e9es et pluviales.",
        highlight: 'Gestion compl\u00e8te du chantier',
      },
      {
        title: 'Pose et r\u00e9novation de canalisations',
        content: "Nous intervenons pour la pose de r\u00e9seaux neufs ainsi que pour la r\u00e9novation des installations existantes. Nos \u00e9quipes qualifi\u00e9es utilisent des mat\u00e9riaux de haute qualit\u00e9, assurant fiabilit\u00e9 et long\u00e9vit\u00e9 des infrastructures.",
        highlight: 'Mat\u00e9riaux haute qualit\u00e9',
      },
    ],
    steps: [
      { title: '\u00c9tude technique', description: "Relev\u00e9 topographique, \u00e9tude de sol et dimensionnement du r\u00e9seau." },
      { title: 'Terrassement', description: "Fouilles et pr\u00e9paration du terrain selon les normes DTU." },
      { title: 'Pose des r\u00e9seaux', description: "Installation des canalisations, regards et raccordements." },
      { title: 'Remise en \u00e9tat', description: "Remblaiement, compactage et remise en \u00e9tat des surfaces." },
    ],
    benefits: [
      'Branchements eau, \u00e9lectricit\u00e9, gaz et t\u00e9l\u00e9coms',
      'Cr\u00e9ation de tranch\u00e9es et pose de canalisations',
      'Raccordement au tout-\u00e0-l\'\u00e9gout',
      'Conformit\u00e9 DTU et normes en vigueur',
      'Gestion compl\u00e8te du chantier de A \u00e0 Z',
      'Intervention H\u00e9rault, Gard et Aude',
    ],
    tips: [
      "V\u00e9rifiez aupr\u00e8s de votre mairie les obligations de raccordement au tout-\u00e0-l'\u00e9gout.",
      "Le raccordement est obligatoire dans les 2 ans suivant la mise en service du r\u00e9seau collectif.",
      "Demandez plusieurs devis et v\u00e9rifiez l'assurance d\u00e9cennale de l'entreprise.",
    ],
    faq: [
      { question: 'Combien de temps durent les travaux VRD ?', answer: "De quelques jours pour un branchement simple \u00e0 plusieurs semaines pour un r\u00e9seau complet. Nous fournissons un planning pr\u00e9cis." },
      { question: 'Faut-il un permis pour les travaux VRD ?', answer: "Selon les cas, une d\u00e9claration pr\u00e9alable ou un permis peut \u00eatre n\u00e9cessaire. Nous g\u00e9rons les d\u00e9marches administratives." },
      { question: 'Intervenez-vous aussi sans tranch\u00e9e ?', answer: "Oui, en compl\u00e9ment des travaux de VRD classiques, nous proposons \u00e9galement la pose de r\u00e9seaux sans tranch\u00e9e pour les situations qui le n\u00e9cessitent." },
      { question: 'Quels types de branchements r\u00e9alisez-vous ?', answer: "Nous r\u00e9alisons tous les branchements : eau potable, \u00e9lectricit\u00e9, gaz, t\u00e9l\u00e9communications et assainissement." },
    ],
    gallery: [
      { src: '/images/about/travaux.jpeg', alt: 'Chantier VRD avec mini-chargeur', label: 'Chantier VRD' },
      { src: '/images/about/sanstranchees.jpeg', alt: 'Pose de r\u00e9seaux de drainage', label: 'R\u00e9seaux enterr\u00e9s' },
    ],
  },
  {
    slug: 'pose-reseaux-sans-tranchee',
    title: 'Chemisage & Tubage de canalisation sans tranchée',
    shortTitle: 'Sans tranchée',
    description: "Chemisage, tubage et réhabilitation de canalisations sans tranchée à Montpellier. Rénovation par éclatement, injection de résine. Chantier rapide et propre, devis gratuit.",
    keyword: 'chemisage tubage canalisation sans tranchée Montpellier',
    image: '/images/services/sans-tranchee.webp',
    icon: 'tunnel',
    heroSubtitle: "R\u00e9habilitez vos canalisations sans d\u00e9truire votre terrain. Chantier rapide et propre.",
    intro: "La r\u00e9novation des r\u00e9seaux d'eau potable et d'assainissement entra\u00eene des travaux complexes. La technique sans tranch\u00e9e est particuli\u00e8rement adapt\u00e9e aux zones urbaines denses o\u00f9 l'ouverture d'une tranch\u00e9e serait trop contraignante.",
    sections: [
      {
        title: 'Avantages de la technique sans tranch\u00e9e',
        content: "Cette technique permet de r\u00e9duire consid\u00e9rablement la dur\u00e9e du chantier, les co\u00fbts, les nuisances pour les riverains, de pr\u00e9server un rev\u00eatement r\u00e9cent, d'\u00e9viter la fermeture des routes et de r\u00e9duire l'empreinte carbone.",
        highlight: '2 \u00e0 3x plus rapide',
      },
      {
        title: 'Techniques employ\u00e9es',
        content: "Nous utilisons le chemisage continu (gaine souple + r\u00e9sine), l'\u00e9clatement (fragmentation + remplacement), l'injection de r\u00e9sine (comblement de fissures) et le tubage (tube rigide dans la canalisation endommag\u00e9e).",
        highlight: '4 techniques disponibles',
      },
    ],
    steps: [
      { title: '\u00c9tude de faisabilit\u00e9', description: "Analyse du trac\u00e9, du sol et des contraintes pour valider la technique adapt\u00e9e." },
      { title: 'Pr\u00e9paration', description: "S\u00e9curisation du site, acc\u00e8s aux points d'entr\u00e9e et contr\u00f4le des r\u00e9seaux existants." },
      { title: 'R\u00e9habilitation', description: "Mise en \u0153uvre de la technique choisie (chemisage, \u00e9clatement, tubage ou injection)." },
      { title: 'Contr\u00f4le', description: "Tests d'\u00e9tanch\u00e9it\u00e9 et inspection cam\u00e9ra du r\u00e9seau r\u00e9habilit\u00e9." },
    ],
    benefits: [
      'Aucune tranch\u00e9e : jardin, all\u00e9e et terrasse pr\u00e9serv\u00e9s',
      'Rapidit\u00e9 d\'ex\u00e9cution (2 \u00e0 3 fois plus rapide)',
      'Co\u00fbt souvent inf\u00e9rieur aux m\u00e9thodes traditionnelles',
      'Nuisances sonores et visuelles r\u00e9duites',
      'Adapt\u00e9 aux passages sous routes, rivi\u00e8res, b\u00e2timents',
      'Empreinte carbone r\u00e9duite',
    ],
    tips: [
      "La technique sans tranch\u00e9e est id\u00e9ale sous les all\u00e9es pav\u00e9es, jardins paysag\u00e9s ou parkings.",
      "Certains sols tr\u00e8s rocheux peuvent n\u00e9cessiter une approche traditionnelle : demandez une \u00e9tude.",
      "Cette m\u00e9thode est aussi utilisable pour la r\u00e9habilitation de canalisations existantes.",
      "Il est essentiel d'avoir une parfaite connaissance du sous-sol avant toute intervention.",
    ],
    faq: [
      { question: 'La technique sans tranch\u00e9e est-elle aussi solide ?', answer: "Oui, la canalisation pos\u00e9e est identique \u00e0 une pose classique. La dur\u00e9e de vie est la m\u00eame, voire sup\u00e9rieure." },
      { question: 'Quels diam\u00e8tres de tuyaux peut-on poser ?', answer: "De 32 mm \u00e0 400 mm selon la technique utilis\u00e9e (forage dirig\u00e9, \u00e9clatement, chemisage)." },
      { question: "Qu'est-ce que le chemisage ?", answer: "C'est l'insertion d'une gaine souple impr\u00e9gn\u00e9e de r\u00e9sine dans la canalisation. Elle durcit au contact de l'eau pour former un nouveau tuyau \u00e0 l'int\u00e9rieur de l'ancien." },
      { question: "Quels sont les avantages par rapport \u00e0 une tranch\u00e9e classique ?", answer: "Dur\u00e9e de chantier r\u00e9duite, co\u00fbts souvent inf\u00e9rieurs, pas de destruction du terrain, moins de nuisances et empreinte carbone r\u00e9duite." },
    ],
    gallery: [
      { src: '/images/about/sanstranchees.jpeg', alt: 'Chantier de pose sans tranch\u00e9e', label: 'Pose sans tranch\u00e9e' },
      { src: '/images/about/travaux.jpeg', alt: 'Travaux de r\u00e9habilitation de canalisations', label: 'R\u00e9habilitation' },
    ],
  },
]
