'use client'

import { usePageTracking } from '@/hooks/useTracking'

export default function TrackingProvider({ children }: { children: React.ReactNode }) {
  usePageTracking()
  return <>{children}</>
}
