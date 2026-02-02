export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export const PHONE_NUMBER = '06 23 12 20 57'
export const PHONE_HREF = 'tel:+33623122057'
export const COMPANY_NAME = 'Earth Sanitation'
export const COMPANY_FULL_NAME = 'EURL A.BTP EARTH SANITATION'
export const COMPANY_EMAIL = 'contact@earthsanitation.fr'
export const COMPANY_ADDRESS = '148 rue Marius Carrieu, 34080 Montpellier'
export const COMPANY_SIRET = '93919179700017'
export const COMPANY_SIREN = '939191797'
export const COMPANY_NAF = '3700Z'
