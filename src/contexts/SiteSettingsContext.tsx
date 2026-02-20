'use client'

import { createContext, useContext } from 'react'
import type { SiteSettings } from '@/lib/settings'

const SiteSettingsContext = createContext<SiteSettings | null>(null)

export function SiteSettingsProvider({
  settings,
  children,
}: {
  settings: SiteSettings
  children: React.ReactNode
}) {
  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  )
}

export function useSiteSettings(): SiteSettings {
  const ctx = useContext(SiteSettingsContext)
  if (!ctx) {
    // Fallback for error boundaries / outside provider
    return {
      phoneNumber: '06 23 12 20 57',
      phoneHref: 'tel:+33623122057',
      whatsappNumber: '33623122057',
      companyEmail: 'earthsanitationbtp@gmail.com',
    }
  }
  return ctx
}
