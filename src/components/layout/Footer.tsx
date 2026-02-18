import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_NAME, PHONE_NUMBER, COMPANY_EMAIL, getWhatsAppUrl } from '@/lib/utils'
import { services } from '@/data/services'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt={`${COMPANY_NAME} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-xl">{COMPANY_NAME}</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Spécialiste du débouchage, de l&apos;assainissement et des travaux de canalisations.
              Intervention rapide 24h/24, 7j/7.
            </p>
            {/* Contact info - visible on mobile below company description */}
            <div className="mt-4 flex flex-col gap-2 lg:hidden">
              <a href={getWhatsAppUrl({ type: 'general' })} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cream hover:text-gold transition-colors text-sm">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {PHONE_NUMBER}
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors text-sm">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-sm lg:text-lg mb-3 lg:mb-4">Nos services</h3>
            <ul className="flex flex-col gap-1.5 lg:gap-2">
              {services.map(s => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-cream/70 hover:text-cream text-xs lg:text-sm transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-bold text-sm lg:text-lg mb-3 lg:mb-4">Navigation</h3>
            <ul className="flex flex-col gap-1.5 lg:gap-2">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/urgence', label: 'Urgence 24/7' },
                { href: '/a-propos', label: 'À propos' },
                { href: '/contact', label: 'Contact' },
                { href: '/devis', label: 'Devis gratuit' },
                { href: '/faq', label: 'FAQ' },
                { href: '/blog', label: 'Blog' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-cream text-xs lg:text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - hidden on mobile, shown inline above */}
          <div className="hidden lg:block">
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href={getWhatsAppUrl({ type: 'general' })} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cream hover:text-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li className="text-cream/70">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742z" clipRule="evenodd" />
                  </svg>
                  Montpellier, Nîmes &amp; 100km
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/20 mt-8 lg:mt-10 pt-5 lg:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs lg:text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-cream transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-cream transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
        <div className="text-center mt-3 text-xs text-cream/30">
          Site conçu par <a href="mailto:jaggyinkgraph@gmail.com" className="hover:text-cream/50 transition-colors">S.MIR</a>
        </div>
      </div>
    </footer>
  )
}
