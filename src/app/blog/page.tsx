import type { Metadata } from 'next'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { getPublishedPosts } from '@/lib/blog-store'
import { ArticleListSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Blog — Conseils Assainissement & Canalisations',
  description:
    'Découvrez nos articles et conseils sur l\'entretien des fosses septiques, le débouchage de canalisations et l\'assainissement.',
  openGraph: {
    title: 'Blog — Conseils Assainissement & Canalisations | Earth Sanitation',
    description:
      'Découvrez nos articles et conseils sur l\'entretien des fosses septiques, le débouchage de canalisations et l\'assainissement.',
  },
}

export default function BlogPage() {
  const posts = getPublishedPosts()

  return (
    <>
      <ArticleListSchema articles={posts} />

      {/* Header */}
      <section className="bg-forest text-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Blog' }]}
            className="mb-6 text-cream/60"
          />
          <h1 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Blog & Conseils
          </h1>
          <p className="text-cream/80 max-w-2xl">
            Nos experts partagent leurs connaissances sur l'assainissement,
            l'entretien des fosses septiques et les bonnes pratiques pour vos canalisations.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h2 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Aucun article pour le moment
              </h2>
              <p className="text-gray-500">
                Revenez bientôt pour découvrir nos conseils d'experts.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card hover className="h-full flex flex-col">
                    <div className="flex-1">
                      <time
                        dateTime={post.publishedAt || post.createdAt}
                        className="text-sm text-sage mb-3 block"
                      >
                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                      <h2 className="text-xl font-heading font-semibold text-forest mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-sand/30">
                      <span className="text-forest font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Lire l'article
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-forest mb-4">
            Un problème de canalisations ?
          </h2>
          <p className="text-sage mb-8">
            Nos experts interviennent 24h/24 pour tous vos problèmes d'assainissement
            sur Montpellier, Nîmes et dans un rayon de 100 km.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-forest text-white rounded-lg hover:bg-forest/90 transition-colors"
            >
              Nous contacter
            </Link>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center px-6 py-3 border border-forest text-forest rounded-lg hover:bg-forest hover:text-white transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
