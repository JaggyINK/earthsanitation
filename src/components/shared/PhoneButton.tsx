'use client'

import { usePathname } from 'next/navigation'
import { PHONE_NUMBER, PHONE_HREF } from '@/lib/utils'
import { trackPhoneClick } from '@/hooks/useTracking'

interface PhoneButtonProps {
  variant?: 'default' | 'emergency'
  className?: string
}

export default function PhoneButton({ variant = 'default', className }: PhoneButtonProps) {
  const pathname = usePathname()
  const base = 'inline-flex items-center gap-2 font-bold rounded-lg transition-all duration-200'

  const styles =
    variant === 'emergency'
      ? 'bg-red-600 text-white hover:bg-red-700 px-6 py-3 text-lg'
      : 'bg-forest text-cream hover:bg-forest/90 px-5 py-2.5'

  return (
    <a href={PHONE_HREF} onClick={() => trackPhoneClick(pathname, variant)} className={`${base} ${styles} ${className || ''}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
          clipRule="evenodd"
        />
      </svg>
      {PHONE_NUMBER}
    </a>
  )
}
