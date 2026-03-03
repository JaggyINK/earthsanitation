import { type City } from '@/data/cities'

// Montpellier coordinates (base)
const BASE_LAT = 43.6108
const BASE_LNG = 3.8767

/**
 * Haversine formula — distance in km between two GPS points
 */
export function getDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180)
}

/**
 * Distance from Montpellier to a city
 */
export function getDistanceFromBase(city: City): number {
  return getDistance(BASE_LAT, BASE_LNG, city.lat, city.lng)
}

/**
 * Estimated intervention time (avg 60km/h with urban factor)
 */
export function getEstimatedTime(distanceKm: number): string {
  // Add 10 min base (preparation + urban navigation)
  const minutes = Math.round((distanceKm / 60) * 60) + 10
  if (minutes <= 15) return '15 minutes'
  if (minutes <= 30) return '30 minutes'
  if (minutes <= 45) return '45 minutes'
  if (minutes <= 60) return '1 heure'
  const h = Math.floor(minutes / 60)
  const m = Math.round((minutes % 60) / 15) * 15
  if (m === 0) return `${h}h`
  return `${h}h${m.toString().padStart(2, '0')}`
}

/**
 * Get the N nearest cities (excluding the city itself)
 */
export function getNearbyCities(city: City, allCities: City[], limit = 5): City[] {
  return allCities
    .filter(c => c.slug !== city.slug)
    .map(c => ({
      city: c,
      dist: getDistance(city.lat, city.lng, c.lat, c.lng),
    }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, limit)
    .map(c => c.city)
}

/** "le Gard", "l'Hérault", "l'Aude" */
function deptWithArticle(dept: string): string {
  if (/^[AEÉIOUH]/i.test(dept)) return `l'${dept}`
  return `le ${dept}`
}
/** "du Gard", "de l'Hérault", "de l'Aude" */
function deptDe(dept: string): string {
  if (/^[AEÉIOUH]/i.test(dept)) return `de l'${dept}`
  return `du ${dept}`
}

/**
 * Generate a unique introduction paragraph based on city data
 */
export function getIntroText(city: City): string {
  const dist = getDistanceFromBase(city)
  const time = getEstimatedTime(dist)
  const dept = deptWithArticle(city.department)

  if (dist < 5) {
    return `Situés au cœur de ${city.name} (${city.cp}, ${city.department}), nos techniciens Earth Sanitation interviennent en moins de 15 minutes pour tous vos besoins en débouchage, assainissement et vidange de fosse septique.`
  }

  if (dist < 15) {
    return `Situés à proximité immédiate de ${city.name} (${city.cp}, ${city.department}), nos équipes arrivent en moins de ${time} pour vos urgences de débouchage et d'assainissement. Nous intervenons 24h/24 dans toute la commune de ${city.name} et ses alentours.`
  }

  if (dist < 40) {
    return `Basés à Montpellier, nos techniciens interviennent à ${city.name} (${city.cp}, ${city.department}) en environ ${time}. Débouchage, assainissement, vidange de fosse septique — nous couvrons tout le département ${deptDe(city.department)}.`
  }

  return `Earth Sanitation se déplace jusqu'à ${city.name} (${city.cp}, ${city.department}) avec un temps d'intervention estimé à ${time}. Nos techniciens qualifiés assurent le débouchage de canalisations, l'assainissement et la vidange de fosses septiques dans tout ${dept}.`

}
