'use client'

import { useSiteSettings } from '@/contexts/SiteSettingsContext'

interface AddToContactsProps {
  className?: string
  message?: string
}

export default function AddToContacts({ className, message }: AddToContactsProps) {
  const { phoneNumber } = useSiteSettings()

  const digits = phoneNumber.replace(/[\s\-\.]/g, '')
  const international = digits.startsWith('0')
    ? '+33' + digits.slice(1)
    : digits.startsWith('+') ? digits : '+33' + digits

  function handleClick() {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Earth Sanitation - Urgence 24h/24',
      'ORG:Earth Sanitation',
      `TEL;TYPE=WORK,VOICE:${international}`,
      'EMAIL:earthsanitationbtp@gmail.com',
      'URL:https://earth-sanitation.fr',
      'ADR;TYPE=WORK:;;148 Rue Marius Carrieu;Montpellier;;34080;France',
      'NOTE:Débouchage & Assainissement - Urgence 24h/24 7j/7 - Montpellier\\, Nîmes et 100km autour',
      'END:VCARD',
    ].join('\r\n')

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Earth-Sanitation.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleClick}
      className={`md:hidden inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 px-5 py-3 bg-forest/90 text-cream hover:bg-forest border border-cream/20 text-sm ${className || ''}`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v6m3-3h-6" />
      </svg>
      {message || 'Ajouter aux contacts'}
    </button>
  )
}
