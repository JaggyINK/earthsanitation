import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export interface SiteSettings {
  phoneNumber: string
  phoneHref: string
  whatsappNumber: string
  companyEmail: string
}

const DEFAULT_PHONE = '06 23 12 20 57'
const DEFAULT_EMAIL = 'earthsanitationbtp@gmail.com'

function derivePhoneFields(phone: string) {
  // Remove spaces and dashes
  const digits = phone.replace(/[\s\-\.]/g, '')
  // Convert 06... to +336...
  const international = digits.startsWith('0')
    ? '+33' + digits.slice(1)
    : digits.startsWith('+') ? digits : '+33' + digits
  const whatsapp = international.replace('+', '')
  return {
    phoneHref: `tel:${international}`,
    whatsappNumber: whatsapp,
  }
}

const fetchSettings = unstable_cache(
  async (): Promise<SiteSettings> => {
    try {
      let row = await prisma.siteSettings.findUnique({ where: { id: 'singleton' } })
      if (!row) {
        row = await prisma.siteSettings.create({
          data: { id: 'singleton' },
        })
      }
      const { phoneHref, whatsappNumber } = derivePhoneFields(row.phoneNumber)
      return {
        phoneNumber: row.phoneNumber,
        phoneHref,
        whatsappNumber,
        companyEmail: row.companyEmail,
      }
    } catch {
      // Fallback if DB is unavailable
      const { phoneHref, whatsappNumber } = derivePhoneFields(DEFAULT_PHONE)
      return {
        phoneNumber: DEFAULT_PHONE,
        phoneHref,
        whatsappNumber,
        companyEmail: DEFAULT_EMAIL,
      }
    }
  },
  ['site-settings'],
  { tags: ['site-settings'], revalidate: 3600 }
)

export async function getSiteSettings(): Promise<SiteSettings> {
  return fetchSettings()
}
