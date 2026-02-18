import { COMPANY_NAME, PHONE_NUMBER, COMPANY_EMAIL } from '@/lib/utils'

const SITE_URL = 'https://earth-sanitation.fr'

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    description:
      "Spécialiste du débouchage, de l'assainissement et des travaux de canalisations. Intervention 24h/24, 7j/7 sur Montpellier, Nîmes et 100km autour.",
    telephone: PHONE_NUMBER,
    email: COMPANY_EMAIL,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-og.png`,
    image: `${SITE_URL}/images/logo-og.png`,
    areaServed: [
      {
        '@type': 'City',
        name: 'Montpellier',
        sameAs: 'https://fr.wikipedia.org/wiki/Montpellier',
      },
      {
        '@type': 'City',
        name: 'Nîmes',
        sameAs: 'https://fr.wikipedia.org/wiki/N%C3%AEmes',
      },
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 43.6108,
          longitude: 3.8767,
        },
        geoRadius: '100000',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montpellier',
      addressRegion: 'Occitanie',
      postalCode: '34000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6108,
      longitude: 3.8767,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Earth Sanitation',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Débouchage de canalisations' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Curage de canalisations' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspection caméra' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Assainissement' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vidange fosse septique' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Travaux VRD' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pose de réseaux sans tranchée' } },
      ],
    },
    sameAs: [
      'https://www.google.com/maps/place/Earth+Sanitation+BTP+-+D%C3%A9bouchage+de+Canalisation+Montpellier/',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '5',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({ service }: { service: { title: string; slug: string; description: string; shortTitle: string } }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'Plumber',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY_NAME,
    },
    areaServed: [
      { '@type': 'City', name: 'Montpellier' },
      { '@type': 'City', name: 'Nîmes' },
    ],
    serviceType: service.shortTitle,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/devis`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: PHONE_NUMBER,
        contactType: 'customer service',
        availableLanguage: 'French',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Devis gratuit sans engagement',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

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

export function ArticleSchema({ article }: { article: BlogPost }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt || article.title,
    datePublished: article.publishedAt || article.createdAt,
    dateModified: article.updatedAt,
    url: `${SITE_URL}/blog/${article.slug}`,
    author: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo-og.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`,
    },
    image: `${SITE_URL}/images/logo-og.png`,
    inLanguage: 'fr-FR',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleListSchema({ articles }: { articles: BlogPost[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `Blog ${COMPANY_NAME}`,
    description: "Conseils et articles sur l'assainissement, le débouchage et l'entretien des canalisations.",
    url: `${SITE_URL}/blog`,
    inLanguage: 'fr-FR',
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo-og.png`,
      },
    },
    blogPost: articles.map(article => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt || article.title,
      datePublished: article.publishedAt || article.createdAt,
      url: `${SITE_URL}/blog/${article.slug}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: COMPANY_NAME,
    url: SITE_URL,
    description: "Spécialiste du débouchage, de l'assainissement et des travaux de canalisations. Intervention 24h/24, 7j/7.",
    inLanguage: 'fr-FR',
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
