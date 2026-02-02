'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function usePageTracking() {
  const pathname = usePathname()

  useEffect(() => {
    fetch('/api/track/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: pathname,
        referrer: document.referrer || null,
      }),
    }).catch(() => {})
  }, [pathname])
}

export function trackPhoneClick(page: string, source?: string) {
  fetch('/api/track/phone-click', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ page, source }),
  }).catch(() => {})
}
