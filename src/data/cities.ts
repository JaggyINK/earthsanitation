export interface City {
  slug: string
  name: string
  cp: string
  department: string
  priority: 'high' | 'medium' | 'low'
  lat: number
  lng: number
}

export const cities: City[] = [
  // === PRIORITÉ HAUTE — Grandes villes ===
  { slug: 'montpellier', name: 'Montpellier', cp: '34000', department: 'Hérault', priority: 'high', lat: 43.6108, lng: 3.8767 },
  { slug: 'nimes', name: 'Nîmes', cp: '30000', department: 'Gard', priority: 'high', lat: 43.8367, lng: 4.3601 },
  { slug: 'beziers', name: 'Béziers', cp: '34500', department: 'Hérault', priority: 'high', lat: 43.3440, lng: 3.2150 },
  { slug: 'sete', name: 'Sète', cp: '34200', department: 'Hérault', priority: 'high', lat: 43.4035, lng: 3.6966 },
  { slug: 'ales', name: 'Alès', cp: '30100', department: 'Gard', priority: 'high', lat: 44.1246, lng: 4.0830 },
  { slug: 'lunel', name: 'Lunel', cp: '34400', department: 'Hérault', priority: 'high', lat: 43.6746, lng: 4.1361 },
  { slug: 'agde', name: 'Agde', cp: '34300', department: 'Hérault', priority: 'high', lat: 43.3108, lng: 3.4733 },
  { slug: 'narbonne', name: 'Narbonne', cp: '11100', department: 'Aude', priority: 'high', lat: 43.1840, lng: 3.0030 },

  // === PRIORITÉ MOYENNE — Hérault ===
  { slug: 'frontignan', name: 'Frontignan', cp: '34110', department: 'Hérault', priority: 'medium', lat: 43.4487, lng: 3.7550 },
  { slug: 'mauguio', name: 'Mauguio', cp: '34130', department: 'Hérault', priority: 'medium', lat: 43.6170, lng: 4.0100 },
  { slug: 'lattes', name: 'Lattes', cp: '34970', department: 'Hérault', priority: 'medium', lat: 43.5672, lng: 3.9005 },
  { slug: 'palavas-les-flots', name: 'Palavas-les-Flots', cp: '34250', department: 'Hérault', priority: 'medium', lat: 43.5283, lng: 3.9290 },
  { slug: 'castelnau-le-lez', name: 'Castelnau-le-Lez', cp: '34170', department: 'Hérault', priority: 'medium', lat: 43.6367, lng: 3.8983 },
  { slug: 'perols', name: 'Pérols', cp: '34470', department: 'Hérault', priority: 'medium', lat: 43.5647, lng: 3.9497 },
  { slug: 'pezenas', name: 'Pézenas', cp: '34120', department: 'Hérault', priority: 'medium', lat: 43.4614, lng: 3.4239 },
  { slug: 'lodeve', name: 'Lodève', cp: '34700', department: 'Hérault', priority: 'medium', lat: 43.7319, lng: 3.3200 },
  { slug: 'clermont-lherault', name: "Clermont-l'Hérault", cp: '34800', department: 'Hérault', priority: 'medium', lat: 43.6272, lng: 3.4317 },
  { slug: 'marseillan', name: 'Marseillan', cp: '34340', department: 'Hérault', priority: 'medium', lat: 43.3514, lng: 3.5283 },
  { slug: 'meze', name: 'Mèze', cp: '34140', department: 'Hérault', priority: 'medium', lat: 43.4275, lng: 3.6050 },
  { slug: 'grabels', name: 'Grabels', cp: '34790', department: 'Hérault', priority: 'medium', lat: 43.6486, lng: 3.8017 },
  { slug: 'saint-jean-de-vedas', name: 'Saint-Jean-de-Védas', cp: '34430', department: 'Hérault', priority: 'medium', lat: 43.5742, lng: 3.8244 },
  { slug: 'juvignac', name: 'Juvignac', cp: '34990', department: 'Hérault', priority: 'medium', lat: 43.6128, lng: 3.8111 },
  { slug: 'villeneuve-les-maguelone', name: 'Villeneuve-lès-Maguelone', cp: '34750', department: 'Hérault', priority: 'medium', lat: 43.5317, lng: 3.8567 },
  { slug: 'carnon', name: 'Carnon', cp: '34280', department: 'Hérault', priority: 'medium', lat: 43.5553, lng: 3.9700 },
  { slug: 'la-grande-motte', name: 'La Grande-Motte', cp: '34280', department: 'Hérault', priority: 'medium', lat: 43.5600, lng: 4.0850 },
  { slug: 'le-grau-du-roi', name: 'Le Grau-du-Roi', cp: '30240', department: 'Gard', priority: 'medium', lat: 43.5383, lng: 4.1350 },
  { slug: 'cap-dagde', name: "Cap d'Agde", cp: '34300', department: 'Hérault', priority: 'medium', lat: 43.2933, lng: 3.5150 },
  { slug: 'saint-gely-du-fesc', name: 'Saint-Gély-du-Fesc', cp: '34980', department: 'Hérault', priority: 'medium', lat: 43.6917, lng: 3.8067 },
  { slug: 'pignan', name: 'Pignan', cp: '34570', department: 'Hérault', priority: 'medium', lat: 43.5847, lng: 3.7633 },
  { slug: 'fabrezan', name: 'Fabregues', cp: '34690', department: 'Hérault', priority: 'medium', lat: 43.5542, lng: 3.7800 },
  { slug: 'gigean', name: 'Gigean', cp: '34770', department: 'Hérault', priority: 'medium', lat: 43.4972, lng: 3.7183 },
  { slug: 'baillargues', name: 'Baillargues', cp: '34670', department: 'Hérault', priority: 'medium', lat: 43.6617, lng: 3.9817 },
  { slug: 'saint-aunes', name: 'Saint-Aunès', cp: '34130', department: 'Hérault', priority: 'medium', lat: 43.6383, lng: 3.9617 },
  { slug: 'vendargues', name: 'Vendargues', cp: '34740', department: 'Hérault', priority: 'medium', lat: 43.6550, lng: 3.9617 },
  { slug: 'le-cres', name: 'Le Crès', cp: '34920', department: 'Hérault', priority: 'medium', lat: 43.6483, lng: 3.9333 },
  { slug: 'jacou', name: 'Jacou', cp: '34830', department: 'Hérault', priority: 'medium', lat: 43.6617, lng: 3.9117 },
  { slug: 'clapiers', name: 'Clapiers', cp: '34830', department: 'Hérault', priority: 'medium', lat: 43.6633, lng: 3.8883 },

  // === PRIORITÉ MOYENNE — Gard ===
  { slug: 'beaucaire', name: 'Beaucaire', cp: '30300', department: 'Gard', priority: 'medium', lat: 43.8083, lng: 4.6439 },
  { slug: 'vauvert', name: 'Vauvert', cp: '30600', department: 'Gard', priority: 'medium', lat: 43.6944, lng: 4.2742 },
  { slug: 'sommieres', name: 'Sommières', cp: '30250', department: 'Gard', priority: 'medium', lat: 43.7833, lng: 4.0903 },
  { slug: 'aigues-mortes', name: 'Aigues-Mortes', cp: '30220', department: 'Gard', priority: 'medium', lat: 43.5667, lng: 4.1908 },
  { slug: 'uzes', name: 'Uzès', cp: '30700', department: 'Gard', priority: 'medium', lat: 44.0125, lng: 4.4194 },
  { slug: 'saint-gilles', name: 'Saint-Gilles', cp: '30800', department: 'Gard', priority: 'medium', lat: 43.6789, lng: 4.4317 },
  { slug: 'vergeze', name: 'Vergèze', cp: '30310', department: 'Gard', priority: 'medium', lat: 43.7417, lng: 4.2217 },
  { slug: 'milhaud', name: 'Milhaud', cp: '30540', department: 'Gard', priority: 'medium', lat: 43.7889, lng: 4.3133 },
  { slug: 'marguerittes', name: 'Marguerittes', cp: '30320', department: 'Gard', priority: 'medium', lat: 43.8583, lng: 4.4417 },
  { slug: 'calvisson', name: 'Calvisson', cp: '30420', department: 'Gard', priority: 'medium', lat: 43.7867, lng: 4.1917 },
  { slug: 'bouillargues', name: 'Bouillargues', cp: '30230', department: 'Gard', priority: 'medium', lat: 43.8100, lng: 4.3817 },
  { slug: 'manduel', name: 'Manduel', cp: '30129', department: 'Gard', priority: 'medium', lat: 43.8167, lng: 4.4733 },
  { slug: 'bellegarde', name: 'Bellegarde', cp: '30127', department: 'Gard', priority: 'medium', lat: 43.7533, lng: 4.5133 },
  { slug: 'saint-christol-les-ales', name: 'Saint-Christol-lès-Alès', cp: '30380', department: 'Gard', priority: 'medium', lat: 44.0833, lng: 4.0817 },
  { slug: 'quissac', name: 'Quissac', cp: '30260', department: 'Gard', priority: 'medium', lat: 43.9117, lng: 3.9983 },
  { slug: 'saint-ambroix', name: 'Saint-Ambroix', cp: '30500', department: 'Gard', priority: 'medium', lat: 44.2583, lng: 4.1967 },
  { slug: 'bagnols-sur-ceze', name: 'Bagnols-sur-Cèze', cp: '30200', department: 'Gard', priority: 'medium', lat: 44.1617, lng: 4.6183 },
  { slug: 'pont-saint-esprit', name: 'Pont-Saint-Esprit', cp: '30130', department: 'Gard', priority: 'medium', lat: 44.2567, lng: 4.6500 },
  { slug: 'villeneuve-les-avignon', name: 'Villeneuve-lès-Avignon', cp: '30400', department: 'Gard', priority: 'medium', lat: 43.9650, lng: 4.7967 },

  // === PRIORITÉ BASSE — Aude, petites communes ===
  { slug: 'lezignan-corbieres', name: 'Lézignan-Corbières', cp: '11200', department: 'Aude', priority: 'low', lat: 43.2017, lng: 2.7583 },
  { slug: 'carcassonne', name: 'Carcassonne', cp: '11000', department: 'Aude', priority: 'low', lat: 43.2117, lng: 2.3533 },
  { slug: 'coursan', name: 'Coursan', cp: '11110', department: 'Aude', priority: 'low', lat: 43.2317, lng: 3.0617 },
]
