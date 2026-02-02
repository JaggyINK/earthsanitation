export interface Platform {
  id: string
  name: string
  category: 'social' | 'directory' | 'maps' | 'reviews'
  url?: string
  profileUrl?: string
}

export const platforms: Platform[] = [
  { id: 'google', name: 'Google Business Profile', category: 'reviews', profileUrl: 'https://www.google.com/maps/place/Earth+Sanitation/@43.6018194,3.8330498' },
  { id: 'facebook', name: 'Facebook', category: 'social', profileUrl: 'https://www.facebook.com/profile.php?id=61574835776982' },
  { id: 'instagram', name: 'Instagram', category: 'social' },
  { id: 'linkedin', name: 'LinkedIn', category: 'social' },
  { id: 'tripadvisor', name: 'Tripadvisor', category: 'reviews' },
  { id: 'x', name: 'X (ex-Twitter)', category: 'social' },
  { id: 'pagesjaunes', name: 'PagesJaunes', category: 'directory', profileUrl: 'https://www.pagesjaunes.fr/pros/58439530?at_medium=affiliate&at_campaign=YAHOO&at_creation=&at_variant=NAVIGATION&at_format=FD' },
  { id: 'qwant', name: 'Qwant', category: 'directory', profileUrl: 'https://www.qwant.com/?q=Earth+Sanitation+BTP+Montpellier&t=web' },
  { id: 'apple-plans', name: 'Apple Plans', category: 'maps' },
  { id: 'yahoo', name: 'Yahoo', category: 'directory', profileUrl: 'https://fr.search.yahoo.com/search?p=Earth%20Sanitation%20BTP%20Montpellier' },
  { id: 'mappy', name: 'Mappy', category: 'maps', profileUrl: 'https://fr.mappy.com/poi/67918ae102c89b5f7ff6d543' },
  { id: 'cylex', name: 'Cylex', category: 'directory', profileUrl: 'https://www.cylex-locale.fr/entreprises/earth-sanitation-btp-15141499.html' },
  { id: 'foursquare', name: 'Foursquare', category: 'maps' },
  { id: 'here', name: 'Here', category: 'maps' },
  { id: 'horairesdouverture24', name: 'horairesdouverture24.fr', category: 'directory' },
  { id: 'lefigaro', name: 'horaires.lefigaro.fr', category: 'directory' },
  { id: 'hoodspot', name: "L'annuaire Hoodspot", category: 'directory' },
  { id: 'moneyvox', name: 'Moneyvox', category: 'directory' },
  { id: 'navmii', name: 'Navmii', category: 'maps' },
  { id: 'nextdoor', name: 'Nextdoor', category: 'social' },
  { id: 'pages24', name: 'Pages-24.fr', category: 'directory' },
  { id: 'tomtom', name: 'TomTom', category: 'maps' },
  { id: 'trouver-ouvert', name: 'Trouver Ouvert', category: 'directory' },
  { id: 'uber', name: 'Uber', category: 'maps' },
]
