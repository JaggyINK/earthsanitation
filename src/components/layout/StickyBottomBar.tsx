'use client'

import { PHONE_HREF } from '@/lib/utils'
import Link from 'next/link'

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-sand/30 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-3 h-16">
        {/* Appeler */}
        <a
          href={PHONE_HREF}
          className="flex flex-col items-center justify-center gap-0.5 text-white bg-red-600 active:bg-red-700"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-bold">Appeler</span>
        </a>

        {/* Devis */}
        <Link
          href="/devis"
          className="flex flex-col items-center justify-center gap-0.5 text-forest hover:text-sage"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-semibold">Devis gratuit</span>
        </Link>

        {/* Urgence */}
        <Link
          href="/urgence"
          className="flex flex-col items-center justify-center gap-0.5 text-forest hover:text-sage"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-semibold">Urgence</span>
        </Link>
      </div>
    </div>
  )
}
