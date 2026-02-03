import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  name?: string
  label?: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  // Support both 'name' and 'label' for backwards compatibility
  const normalizedItems = items.map(item => ({
    label: item.label || item.name || '',
    href: item.href,
  }))

  const allItems = [{ label: 'Accueil', href: '/' }, ...normalizedItems]
  const schemaItems = allItems
    .filter(item => item.href)
    .map(item => ({ name: item.label, href: item.href! }))

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Fil d'ariane" className={cn('text-sm text-sage mb-6', className)}>
        <ol className="flex flex-wrap items-center gap-1">
          {allItems.map((item, i) => (
            <li key={`${i}-${item.href || item.label}`} className="flex items-center gap-1">
              {i > 0 && <span className="opacity-50">/</span>}
              {i === allItems.length - 1 || !item.href ? (
                <span className="font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:opacity-80 transition-opacity">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
