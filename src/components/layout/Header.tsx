'use client'

import { useState } from 'react'
import Link from 'next/link'
import PhoneButton from '@/components/shared/PhoneButton'
import { COMPANY_NAME } from '@/lib/utils'
import { services } from '@/data/services'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/urgence', label: 'Urgence 24/7' },
  { href: '/services/debouchage-canalisations', label: 'Services', children: services.map(s => ({ href: `/services/${s.slug}`, label: s.shortTitle })) },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/devis', label: 'Devis gratuit' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
              <span className="text-cream font-bold text-lg">ES</span>
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
                      className={`absolute top-full left-0 bg-white rounded-xl shadow-lg py-2 min-w-[220px] transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
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
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-sand/30">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map(link => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-forest font-medium hover:text-sage"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 flex flex-col gap-1">
                    {link.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-sage hover:text-forest"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-sand/30">
              <PhoneButton variant="emergency" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
