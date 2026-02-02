import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: 'Accueil', href: '/' }, ...items]

  return (
    <>
      <BreadcrumbSchema items={allItems} />
      <nav aria-label="Fil d'ariane" className="text-sm text-sage mb-6">
        <ol className="flex flex-wrap items-center gap-1">
          {allItems.map((item, i) => (
            <li key={`${i}-${item.href}`} className="flex items-center gap-1">
              {i > 0 && <span className="text-sand">/</span>}
              {i === allItems.length - 1 ? (
                <span className="text-forest font-medium">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-forest transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
