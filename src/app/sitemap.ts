import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://earth-sanitation.fr'
  const now = new Date()

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/urgence`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/devis`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Pages services
  const servicePages: MetadataRoute.Sitemap = services.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Pages villes/zones
  const cityPages: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${baseUrl}/zone/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Pages blog (depuis la BDD)
  const blogPosts = await prisma.blogPost.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  })
  const blogPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...cityPages, ...blogPages]
}
