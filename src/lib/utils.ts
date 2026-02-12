export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export const PHONE_NUMBER = '06 23 12 20 57'
export const PHONE_HREF = 'tel:+33623122057'
export const WHATSAPP_NUMBER = '33623122057'

export function getWhatsAppUrl(context?: { service?: string; ville?: string; type?: 'urgence' | 'devis' | 'contact' | 'general' }) {
  let message = 'Bonjour Earth Sanitation,\n\n'

  if (context?.type === 'urgence') {
    message += "J'ai une urgence"
    if (context.service) message += ` concernant : ${context.service}`
    if (context.ville) message += ` à ${context.ville}`
    message += '.\nPouvez-vous intervenir rapidement ?\n\nMerci.'
  } else if (context?.type === 'devis') {
    message += "Je souhaite demander un devis"
    if (context.service) message += ` pour : ${context.service}`
    if (context.ville) message += ` à ${context.ville}`
    message += '.\n\n[Décrivez votre besoin ici]\n\nMerci.'
  } else {
    message += "Je vous contacte"
    if (context?.service) message += ` au sujet de : ${context.service}`
    if (context?.ville) message += ` à ${context.ville}`
    message += '.\n\n[Décrivez votre demande ici]\n\nMerci.'
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
export const COMPANY_NAME = 'Earth Sanitation'
export const COMPANY_FULL_NAME = 'EURL A.BTP EARTH SANITATION'
export const COMPANY_EMAIL = 'contact@earthsanitation.fr'
export const COMPANY_ADDRESS = '148 rue Marius Carrieu, 34080 Montpellier'
export const COMPANY_SIRET = '93919179700017'
export const COMPANY_SIREN = '939191797'
export const COMPANY_NAF = '3700Z'
