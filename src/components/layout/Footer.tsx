import Link from 'next/link'
import { COMPANY_NAME, PHONE_NUMBER, PHONE_HREF, COMPANY_EMAIL } from '@/lib/utils'
import { services } from '@/data/services'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                <span className="text-forest font-bold text-lg">ES</span>
              </div>
              <span className="font-heading font-bold text-xl">{COMPANY_NAME}</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Spécialiste du débouchage, de l&apos;assainissement et des travaux de canalisations.
              Intervention rapide 24h/24, 7j/7.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Nos services</h3>
            <ul className="flex flex-col gap-2">
              {services.map(s => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-cream/70 hover:text-cream text-sm transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2">
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
                    className="text-cream/70 hover:text-cream text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-2 text-cream hover:text-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
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
        <div className="border-t border-cream/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-cream transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-cream transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
