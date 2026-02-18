'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyBottomBar from '@/components/layout/StickyBottomBar'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>{children}</main>
      <Footer />
      <StickyBottomBar hidden={mobileMenuOpen} />
    </>
  )
}
