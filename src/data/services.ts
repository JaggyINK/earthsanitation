export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  keyword: string
  image: string
  icon: string
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
  },
  {
    slug: 'curage-canalisations',
    title: 'Curage de canalisations',
    shortTitle: 'Curage',
    description: "Curage haute pression de vos canalisations pour un nettoyage en profondeur et la prévention des bouchons récurrents.",
    keyword: 'curage canalisations',
    image: '/images/services/curage.webp',
    icon: 'water',
  },
  {
    slug: 'inspection-camera',
    title: 'Inspection caméra',
    shortTitle: 'Inspection caméra',
    description: "Diagnostic précis par caméra vidéo pour identifier fissures, racines et obstructions dans vos canalisations.",
    keyword: 'inspection caméra canalisation',
    image: '/images/services/inspection.webp',
    icon: 'camera',
  },
  {
    slug: 'assainissement',
    title: 'Assainissement individuel et collectif',
    shortTitle: 'Assainissement',
    description: "Pose de fosses septiques, fosses toutes eaux, microstations et filtres compacts. Mise aux normes et entretien.",
    keyword: 'assainissement individuel collectif',
    image: '/images/services/assainissement.webp',
    icon: 'shield',
  },
  {
    slug: 'vidange-fosse-septique',
    title: 'Vidange fosses septiques et bacs à graisse',
    shortTitle: 'Vidange',
    description: "Vidange et pompage de fosses septiques, fosses toutes eaux et bacs à graisse. Respect des normes environnementales.",
    keyword: 'vidange fosse septique',
    image: '/images/services/vidange.webp',
    icon: 'truck',
  },
  {
    slug: 'travaux-vrd',
    title: 'Travaux VRD et création de canalisations',
    shortTitle: 'Travaux VRD',
    description: "Branchements neufs et existants, création et raccordement de réseaux d'assainissement. Depuis 2006.",
    keyword: 'travaux VRD canalisations',
    image: '/images/services/vrd.webp',
    icon: 'hardhat',
  },
  {
    slug: 'pose-reseaux-sans-tranchee',
    title: 'Pose de réseaux sans tranchée',
    shortTitle: 'Sans tranchée',
    description: "Technique innovante de pose de canalisations sans tranchée. Moins de dégâts, moins de nuisances, résultat durable.",
    keyword: 'pose réseaux sans tranchée',
    image: '/images/services/sans-tranchee.webp',
    icon: 'tunnel',
  },
]
