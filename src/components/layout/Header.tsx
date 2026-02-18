'use client'

import { useState } from 'react'
import Link from 'next/link'
import PhoneButton from '@/components/shared/PhoneButton'
import { COMPANY_NAME } from '@/lib/utils'
import { services } from '@/data/services'
import Image from 'next/image'

const navLinks = [
  {
    href: '/',
    label: 'Accueil',
    icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  },
  {
    href: '/urgence',
    label: 'Urgence 24/7',
    icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
    highlight: true,
  },
  {
    href: '/services/debouchage-canalisations',
    label: 'Services',
    icon: 'M11.42 15.17l-5.648-3.014a.75.75 0 01-.362-1.003l2.25-5.25a.75.75 0 011.003-.362l5.648 3.014a.75.75 0 01.362 1.003l-2.25 5.25a.75.75 0 01-1.003.362z',
    children: services.map(s => ({ href: `/services/${s.slug}`, label: s.shortTitle })),
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z',
  },
  {
    href: '/a-propos',
    label: 'À propos',
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
  },
  {
    href: '/devis',
    label: 'Devis gratuit',
    icon: 'M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
    cta: true,
  },
]

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const closeMenu = () => {
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt={`${COMPANY_NAME} logo`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-heading font-bold text-xl text-forest hidden sm:block">
                {COMPANY_NAME}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map(link => (
                <div key={link.href} className="relative group">
                  {link.children ? (
                    <>
                      <button
                        className="text-forest hover:text-sage font-medium transition-colors py-2"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {link.label}
                        <svg className="inline w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`absolute top-full left-0 bg-white rounded-xl shadow-lg py-2 min-w-55 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {link.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-forest hover:bg-cream transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-forest hover:text-sage font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <PhoneButton />
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-forest"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen)
                if (mobileMenuOpen) setMobileServicesOpen(false)
              }}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — fullscreen overlay, OUTSIDE header to escape stacking context */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-[60] bg-white overflow-y-auto">
          {/* Subtle background decorations */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest via-gold/40 to-forest" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -left-10 w-32 h-32 bg-forest/5 rounded-full blur-3xl" />
          <svg className="absolute top-24 right-6 w-4 h-6 text-sage/[0.06]" viewBox="0 0 24 32" fill="currentColor"><path d="M12 0C12 0 0 14.4 0 22c0 6.627 5.373 10 12 10s12-3.373 12-10C24 14.4 12 0 12 0z" /></svg>
          <svg className="absolute bottom-40 left-6 w-3 h-4 text-gold/[0.08]" viewBox="0 0 24 32" fill="currentColor"><path d="M12 0C12 0 0 14.4 0 22c0 6.627 5.373 10 12 10s12-3.373 12-10C24 14.4 12 0 12 0z" /></svg>

          <nav className="relative flex flex-col px-5 py-6 pb-8">
            {navLinks.map((link, i) => (
              <div key={link.href}>
                {/* Separator before CTA */}
                {link.cta && <div className="my-2 border-t border-sand/30" />}

                {link.children ? (
                  /* Services accordion */
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center gap-3 w-full py-3.5 text-left"
                    >
                      <span className="w-9 h-9 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-[18px] h-[18px] text-forest" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                        </svg>
                      </span>
                      <span className="flex-1 text-forest font-semibold text-[15px]">{link.label}</span>
                      <svg
                        className={`w-4 h-4 text-sage transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown services */}
                    <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="ml-12 mb-2 pl-3 border-l-2 border-gold/30 flex flex-col gap-0.5">
                        {link.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="py-2 text-sage text-sm hover:text-forest transition-colors"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : link.highlight ? (
                  /* Urgence — highlighted */
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 py-3.5"
                    onClick={closeMenu}
                  >
                    <span className="w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-[18px] h-[18px] text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                      </svg>
                    </span>
                    <span className="text-red-600 font-semibold text-[15px]">{link.label}</span>
                    <span className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  </Link>
                ) : link.cta ? (
                  /* Devis gratuit — styled CTA */
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 py-3.5"
                    onClick={closeMenu}
                  >
                    <span className="w-9 h-9 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-[18px] h-[18px] text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                      </svg>
                    </span>
                    <span className="text-forest font-semibold text-[15px]">{link.label}</span>
                    <span className="ml-auto text-xs text-gold font-medium bg-gold/10 px-2 py-0.5 rounded-full">Gratuit</span>
                  </Link>
                ) : (
                  /* Normal link */
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 py-3.5"
                    onClick={closeMenu}
                  >
                    <span className="w-9 h-9 bg-cream rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-[18px] h-[18px] text-forest" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                      </svg>
                    </span>
                    <span className="text-forest font-semibold text-[15px]">{link.label}</span>
                  </Link>
                )}
              </div>
            ))}

            {/* Phone CTA button */}
            <div className="mt-4 pt-4 border-t border-sand/30">
              <PhoneButton variant="emergency" className="w-full justify-center" />
            </div>

            {/* Horaires hint */}
            <p className="text-center text-sage/60 text-xs mt-4">
              Disponible 24h/24 — 7j/7, jours fériés inclus
            </p>
          </nav>
        </div>
      )}
    </>
  )
}
