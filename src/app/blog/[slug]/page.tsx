import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import PhoneButton from '@/components/shared/PhoneButton'
import { prisma } from '@/lib/prisma'
import { ArticleSchema } from '@/components/seo/StructuredData'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({ where: { slug } })

  if (!post || !post.published) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: post.title,
    description: post.excerpt || `Découvrez notre article : ${post.title}`,
    openGraph: {
      title: `${post.title} | Earth Sanitation`,
      description: post.excerpt || `Découvrez notre article : ${post.title}`,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString() || undefined,
      modifiedTime: post.updatedAt.toISOString(),
    },
  }
}

// Fonction pour convertir le Markdown basique en HTML
function markdownToHtml(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-heading font-semibold text-forest mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-heading font-bold text-forest mt-10 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-heading font-bold text-forest mt-10 mb-4">$1</h1>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold text-forest">$1</strong>')
    // Italic
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li class="ml-4 text-gray-700">$1</li>')
    .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4 text-gray-700">$2</li>')
    // Group list items
    .replace(/(<li.*<\/li>)\n(<li)/gim, '$1$2')
    // Wrap consecutive li in ul
    .replace(/((?:<li[^>]*>.*<\/li>\s*)+)/gim, '<ul class="list-disc list-inside space-y-2 my-4">$1</ul>')
    // Paragraphs (double newline)
    .replace(/\n\n/gim, '</p><p class="text-gray-700 leading-relaxed mb-4">')
    // Single newlines in paragraphs
    .replace(/\n/gim, '<br />')
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({ where: { slug } })

  if (!post || !post.published) {
    notFound()
  }

  const htmlContent = markdownToHtml(post.content)

  // Serialize for StructuredData
  const serializedPost = {
    ...post,
    publishedAt: post.publishedAt?.toISOString() ?? null,
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  }

  return (
    <>
      <ArticleSchema article={serializedPost} />

      {/* Header */}
      <section className="bg-forest text-cream py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
            className="mb-6 text-cream/60"
          />
          <time
            dateTime={(post.publishedAt || post.createdAt).toISOString()}
            className="text-cream/60 text-sm mb-4 block"
          >
            Publié le {new Date(post.publishedAt || post.createdAt).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <h1 className="text-3xl lg:text-4xl font-heading font-bold leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-cream/80 mt-4 text-lg">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-6 lg:p-10">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: `<p class="text-gray-700 leading-relaxed mb-4">${htmlContent}</p>`,
              }}
            />
          </div>

          {/* Author/Company */}
          <div className="mt-8 p-6 bg-cream rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center shrink-0">
                <span className="text-cream font-bold">ES</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-forest">Earth Sanitation</p>
                <p className="text-sage text-sm mt-1">
                  Experts en débouchage et assainissement depuis plus de 10 ans.
                  Intervention 24h/24 sur Montpellier, Nîmes et 100 km autour.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-forest hover:text-forest/80 font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Retour au blog
            </Link>
            <PhoneButton />
          </div>
        </div>
      </article>

      {/* Related CTA */}
      <section className="bg-forest text-cream py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
            Besoin d'une intervention ?
          </h2>
          <p className="text-cream/80 mb-8">
            Nos équipes sont disponibles 24h/24 pour tous vos problèmes
            de canalisations et d'assainissement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneButton variant="emergency" />
            <Link
              href="/devis"
              className="inline-flex items-center justify-center px-6 py-3 border border-cream text-cream rounded-lg hover:bg-cream hover:text-forest transition-colors"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
