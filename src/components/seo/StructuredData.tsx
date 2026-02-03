import { COMPANY_NAME, PHONE_NUMBER, COMPANY_EMAIL } from '@/lib/utils'

interface StructuredDataProps {
  type?: 'LocalBusiness' | 'Service' | 'FAQPage'
  data?: Record<string, unknown>
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    description:
      "Spécialiste du débouchage, de l'assainissement et des travaux de canalisations. Intervention 24h/24, 7j/7.",
    telephone: PHONE_NUMBER,
    email: COMPANY_EMAIL,
    url: 'https://earth-sanitation.fr',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 43.6108,
        longitude: 3.8767,
      },
      geoRadius: '100000',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Montpellier',
      addressRegion: 'Occitanie',
      addressCountry: 'FR',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '€€',
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
      item: `https://earth-sanitation.fr${item.href}`,
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
    url: `https://earth-sanitation.fr/blog/${article.slug}`,
    author: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: 'https://earth-sanitation.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: 'https://earth-sanitation.fr',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://earth-sanitation.fr/blog/${article.slug}`,
    },
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
    url: 'https://earth-sanitation.fr/blog',
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
    },
    blogPost: articles.map(article => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt || article.title,
      datePublished: article.publishedAt || article.createdAt,
      url: `https://earth-sanitation.fr/blog/${article.slug}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
