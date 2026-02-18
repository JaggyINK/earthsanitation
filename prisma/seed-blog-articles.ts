import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const articles = [
  {
    title: 'Canalisation bouchée : que faire ? Guide complet du débouchage à Montpellier',
    slug: 'canalisation-bouchee-que-faire-guide-debouchage-montpellier',
    excerpt: "Votre canalisation est bouchée ? Découvrez les causes, les solutions et quand appeler un professionnel du débouchage à Montpellier et alentours.",
    published: true,
    publishedAt: new Date('2026-02-01T08:00:00.000Z'),
    content: `Vous avez un évier qui ne se vide plus, des toilettes qui débordent ou une douche qui stagne ? Une canalisation bouchée est l'un des problèmes de plomberie les plus fréquents. Voici tout ce qu'il faut savoir pour réagir efficacement.

## Quels sont les signes d'une canalisation bouchée ?

Plusieurs indices doivent vous alerter :

- **L'eau stagne** dans l'évier, le lavabo ou la douche
- **Des remontées d'eau** dans les toilettes ou les évacuations
- **Des bruits de gargouillement** dans les tuyaux
- **Des mauvaises odeurs** provenant des canalisations
- **Un écoulement anormalement lent** de l'eau

Si vous constatez un ou plusieurs de ces signes, il est probable que vous ayez un bouchon dans vos canalisations.

## Quelles sont les causes les plus fréquentes des bouchons ?

Les causes varient selon le type de canalisation :

### Dans la cuisine
- **La graisse de cuisson** : elle se solidifie et s'accumule sur les parois des tuyaux
- **Les déchets alimentaires** : restes de nourriture, marc de café, épluchures
- **Le calcaire** : dépôts minéraux qui réduisent le diamètre du tuyau

### Dans la salle de bain
- **Les cheveux** : principale cause de bouchons dans les douches et baignoires
- **Les résidus de savon et de dentifrice** qui forment un dépôt collant
- **Les cotons-tiges et cotons** jetés par erreur

### Dans les toilettes
- **Les lingettes** (même dites « biodégradables ») : elles ne se désintègrent pas
- **Les protections hygiéniques** et autres objets non solubles
- **Un excès de papier toilette**

## Comment déboucher une canalisation soi-même ?

Avant d'appeler un professionnel, vous pouvez tenter ces solutions simples :

1. **Eau bouillante** : versez un litre d'eau bouillante pour dissoudre les graisses légères
2. **Ventouse** : créez un appel d'air en pompant énergiquement
3. **Bicarbonate + vinaigre blanc** : versez 1/2 verre de bicarbonate puis 1/2 verre de vinaigre, attendez 30 minutes puis rincez à l'eau chaude

**Attention** : évitez les produits chimiques déboucheurs du commerce. Ils sont nocifs pour l'environnement et abîment vos canalisations à long terme.

## Quand appeler un professionnel du débouchage ?

Faites appel à un spécialiste si :

- Les méthodes maison ne fonctionnent pas
- Le bouchon est profond dans la canalisation
- Plusieurs points d'évacuation sont touchés simultanément
- Vous constatez des remontées d'eaux usées
- Le problème est récurrent

## Quelles méthodes utilisent les professionnels ?

Les entreprises spécialisées disposent de techniques avancées :

- **L'hydrocurage haute pression** (jusqu'à 350 bars) : l'eau propulse et détruit le bouchon
- **Le furet électrique** : un câble rotatif qui perce mécaniquement le bouchon
- **L'inspection par caméra** : pour localiser précisément le bouchon et identifier sa nature
- **Le test de fumée** : pour détecter des fuites ou infiltrations

## Combien coûte un débouchage de canalisation à Montpellier ?

Le prix dépend de la complexité de l'intervention, de l'accessibilité de la canalisation et de la technique employée. Chez Earth Sanitation, nous proposons systématiquement un **devis gratuit et sans engagement** avant toute intervention.

## Earth Sanitation intervient-il la nuit et le week-end ?

Oui, nous sommes disponibles **24h/24 et 7j/7**, y compris les nuits, week-ends et jours fériés, **sans surcoût**. Notre temps d'intervention moyen est de 45 minutes sur Montpellier et ses environs.

## Comment éviter les bouchons à l'avenir ?

Voici nos conseils d'experts :

- Ne versez **jamais de graisse** dans l'évier
- Utilisez des **grilles de protection** sur vos siphons
- Faites couler de l'**eau chaude** régulièrement
- Faites réaliser un **curage préventif** tous les 2 à 3 ans
- Envoyez-nous les **photos de votre problème** via WhatsApp pour un diagnostic rapide

## Dans quelles villes intervenez-vous ?

Earth Sanitation intervient dans tout l'Hérault, le Gard et l'Aude, notamment à **Montpellier, Nîmes, Sète, Béziers, Lunel, La Grande-Motte, Palavas, Castelnau-le-Lez, Lattes, Pérols** et dans un rayon de 100 km.

---

**Besoin d'un débouchage en urgence ?** Contactez Earth Sanitation par WhatsApp ou téléphone. Intervention rapide, devis gratuit.`,
  },
  {
    title: 'Curage de canalisations : pourquoi et à quelle fréquence ? Tout savoir',
    slug: 'curage-canalisations-pourquoi-frequence-tout-savoir',
    excerpt: "Le curage de canalisations prévient les bouchons et prolonge la durée de vie de vos réseaux. Découvrez tout sur cette opération essentielle.",
    published: true,
    publishedAt: new Date('2026-02-03T08:00:00.000Z'),
    content: `Le curage de canalisations est une opération d'entretien préventif souvent méconnue. Pourtant, c'est la meilleure manière d'éviter les bouchons récurrents et de prolonger la durée de vie de vos réseaux d'évacuation.

## Qu'est-ce que le curage de canalisations ?

Le curage consiste à **nettoyer en profondeur** l'intérieur des canalisations pour éliminer les dépôts qui s'accumulent au fil du temps : graisses, tartre, racines, boues, sable et débris divers. Contrairement au débouchage qui traite un bouchon ponctuel, le curage est un nettoyage complet et préventif.

## Quelle est la différence entre débouchage et curage ?

- **Le débouchage** traite un problème ponctuel : un bouchon précis est identifié et éliminé
- **Le curage** est un nettoyage complet de la canalisation sur toute sa longueur, éliminant tous les dépôts et restaurant le diamètre d'origine du tuyau

Le curage est donc plus complet et plus durable que le simple débouchage.

## Comment fonctionne le curage haute pression ?

Le curage haute pression utilise de l'eau sous très haute pression (jusqu'à 350 bars) projetée via des buses spéciales. Cette technique :

- **Décolle les dépôts** incrustés sur les parois
- **Élimine les graisses** même solidifiées
- **Détruit le tartre** et les concrétions calcaires
- **Évacue les racines** qui se sont infiltrées

C'est une méthode **100% écologique** : aucun produit chimique n'est utilisé, uniquement de l'eau.

## À quelle fréquence faut-il faire curer ses canalisations ?

La fréquence dépend de l'usage :

- **Maison individuelle** : tous les 2 à 3 ans
- **Immeuble collectif** : tous les 1 à 2 ans
- **Restaurant ou commerce alimentaire** : tous les 6 mois à 1 an
- **Bâtiment industriel** : selon l'activité, jusqu'à tous les 6 mois

## Quels sont les signes qu'un curage est nécessaire ?

Vous devriez envisager un curage si vous observez :

- Des **bouchons récurrents** malgré des débouchages réguliers
- Un **écoulement de plus en plus lent** au fil des mois
- Des **mauvaises odeurs** persistantes dans les canalisations
- Des **remontées d'eau** dans les évacuations au sol
- Des **bruits inhabituels** dans la tuyauterie

## Le curage abîme-t-il les canalisations ?

Non, le curage haute pression est une technique **non destructive** quand il est réalisé par un professionnel. La pression et le type de buse sont adaptés au matériau et au diamètre de la canalisation (PVC, fonte, grès, béton).

## Combien coûte un curage de canalisations ?

Le tarif varie selon la longueur du réseau, le diamètre des canalisations et le niveau d'encrassement. Earth Sanitation fournit un **devis gratuit** après diagnostic. Le curage préventif coûte toujours bien moins cher qu'une intervention d'urgence sur un réseau complètement bouché.

## Le curage est-il utile pour les professionnels ?

Absolument. Pour les **restaurants**, le curage régulier des bacs à graisse et canalisations est même une obligation réglementaire. Pour les **copropriétés**, c'est un poste d'entretien essentiel pour éviter des réparations coûteuses. Pour les **entreprises**, il garantit la continuité de l'activité.

## Quels types de canalisations peut-on curer ?

Earth Sanitation cure tous les types de canalisations :

- Canalisations d'eaux usées
- Canalisations d'eaux pluviales
- Collecteurs
- Regards
- Descentes d'eau
- Réseaux d'assainissement

## Earth Sanitation : votre spécialiste du curage à Montpellier

Notre équipe intervient dans l'Hérault, le Gard et l'Aude avec du matériel professionnel adapté. Chaque intervention comprend :

1. **Inspection préalable** par caméra
2. **Curage haute pression** avec buses adaptées
3. **Aspiration des résidus**
4. **Contrôle final** par caméra et rapport d'intervention

---

**Besoin d'un curage préventif ou d'urgence ?** Contactez-nous pour un devis gratuit. Intervention rapide sur tout le département.`,
  },
  {
    title: "Inspection caméra de canalisations : quand et pourquoi faire un diagnostic vidéo ?",
    slug: 'inspection-camera-canalisations-quand-pourquoi-diagnostic-video',
    excerpt: "L'inspection caméra permet de voir l'intérieur de vos canalisations sans travaux. Découvrez quand cette technique est indispensable.",
    published: true,
    publishedAt: new Date('2026-02-05T08:00:00.000Z'),
    content: `L'inspection par caméra endoscopique est une technique de diagnostic moderne qui permet de visualiser l'état de vos canalisations en temps réel, sans creuser ni casser. C'est un outil indispensable pour identifier précisément les problèmes.

## Comment fonctionne l'inspection caméra de canalisations ?

Une **caméra endoscopique haute résolution** est introduite dans la canalisation. Montée sur un câble flexible, elle progresse dans le tuyau et transmet des images en direct sur un écran. Le technicien peut ainsi :

- Visualiser l'état des parois
- Localiser les bouchons et leur nature
- Repérer les fissures, décalages et déformations
- Identifier les infiltrations de racines
- Détecter les contrepentes (défauts de pente)

## Quand faut-il faire une inspection caméra ?

### Avant un achat immobilier

C'est l'un des usages les plus importants. Une inspection caméra avant l'achat d'une maison permet de détecter des problèmes cachés : fissures, racines, affaissements, canalisations en mauvais état. Ces défauts peuvent coûter **plusieurs milliers d'euros** à réparer.

### En cas de bouchons récurrents

Si vos canalisations se bouchent régulièrement malgré les débouchages, une inspection caméra identifiera la cause profonde : contrepente, raccordement défectueux, infiltration de racines, etc.

### Après des travaux de rénovation

Pour vérifier que les canalisations n'ont pas été endommagées pendant les travaux et que les raccordements sont conformes.

### Pour un diagnostic de réseau d'assainissement

Les collectivités, copropriétés et entreprises utilisent l'inspection caméra pour cartographier et évaluer l'état de leurs réseaux.

## L'inspection caméra abîme-t-elle les canalisations ?

Non, c'est une technique **totalement non destructive**. La caméra est flexible et s'adapte aux courbes et aux diamètres des tuyaux (de 32 mm à 600 mm). Elle n'endommage en aucun cas les canalisations.

## Que révèle l'inspection caméra ?

L'inspection peut mettre en évidence :

- **Des fissures** longitudinales ou transversales
- **Des décalages** entre les tuyaux (joints déplacés)
- **Des racines** qui se sont infiltrées par les joints
- **Des dépôts** (calcaire, graisse, tartre)
- **Des contrepentes** empêchant l'écoulement naturel
- **Des objets** coincés dans la canalisation
- **De la corrosion** sur les tuyaux métalliques

## Quel est le prix d'une inspection caméra à Montpellier ?

Le coût dépend de la longueur du réseau à inspecter et de l'accessibilité. Earth Sanitation propose un **devis gratuit** avant intervention. L'inspection est souvent rentabilisée par les économies réalisées en ciblant précisément le problème à traiter.

## Le rapport d'inspection est-il utile pour l'assurance ?

Oui. Le rapport détaillé avec captures vidéo et photos constitue un document **probant** qui peut être utilisé auprès de votre assurance en cas de sinistre, ou dans le cadre d'un litige avec un voisin ou un constructeur.

## Peut-on inspecter tous les types de canalisations ?

Nos caméras s'adaptent à tous les matériaux : PVC, fonte, grès, béton, acier. Et à tous les diamètres courants (32 mm à 600 mm). Que ce soit pour des canalisations d'eaux usées, pluviales ou d'assainissement.

## Que fait-on après le diagnostic ?

Selon les résultats, plusieurs solutions peuvent être proposées :

- **Hydrocurage** pour éliminer les dépôts
- **Débouchage ciblé** pour un bouchon localisé
- **Chemisage** pour réparer une fissure sans creuser
- **Remplacement** si la canalisation est trop endommagée
- **Curage préventif** régulier pour entretenir le réseau

## Earth Sanitation : experts en inspection caméra

Notre équipe intervient avec du matériel professionnel dernière génération dans l'Hérault, le Gard et l'Aude. Chaque inspection se conclut par un **rapport détaillé** avec vidéo et recommandations.

---

**Besoin d'un diagnostic de vos canalisations ?** Demandez une inspection caméra à Earth Sanitation. Devis gratuit et intervention rapide.`,
  },
  {
    title: "Assainissement individuel ou collectif : quelle solution pour votre habitation ?",
    slug: 'assainissement-individuel-collectif-quelle-solution-habitation',
    excerpt: "Fosse septique, microstation ou raccordement tout-à-l'égout ? Comprendre les différences pour choisir le bon système d'assainissement.",
    published: true,
    publishedAt: new Date('2026-02-07T08:00:00.000Z'),
    content: `L'assainissement des eaux usées est une obligation légale pour toute habitation. Mais entre assainissement individuel et collectif, comment choisir ? Voici un guide complet pour comprendre vos options.

## Quelle est la différence entre assainissement individuel et collectif ?

### Assainissement collectif (tout-à-l'égout)

Votre habitation est raccordée au **réseau public d'assainissement**. Les eaux usées sont acheminées vers une station d'épuration municipale qui les traite avant rejet dans le milieu naturel.

### Assainissement individuel (non collectif)

Aussi appelé ANC, il concerne les habitations **non raccordées au réseau public**. Vous devez installer votre propre système de traitement sur votre terrain : fosse septique, microstation, filtre compact, etc.

## Comment savoir si je suis en assainissement collectif ou individuel ?

Consultez le **zonage d'assainissement** de votre commune, disponible en mairie ou sur le site du SPANC (Service Public d'Assainissement Non Collectif). Ce document définit les zones desservies par le réseau public et celles en assainissement individuel.

## Quels sont les différents systèmes d'assainissement individuel ?

### La fosse septique (fosse toutes eaux)

- **Principe** : collecte et décantation des eaux usées
- **Avantages** : simple, pas d'électricité nécessaire, durée de vie 20-30 ans
- **Inconvénients** : nécessite un épandage, emprise au sol importante
- **Entretien** : vidange tous les 4 ans

### La microstation d'épuration

- **Principe** : traitement biologique par bactéries aérobies
- **Avantages** : compacte, excellent traitement, pas d'épandage
- **Inconvénients** : nécessite de l'électricité, coût d'achat plus élevé
- **Entretien** : contrôle annuel, vidange des boues

### Le filtre compact

- **Principe** : filtre à base de zéolithe, coco ou laine de roche
- **Avantages** : pas d'électricité, compact, bon traitement
- **Inconvénients** : remplacement du média filtrant tous les 10 ans
- **Entretien** : vidange et contrôle régulier

## Est-il obligatoire de se raccorder au tout-à-l'égout ?

Oui. Si votre commune dispose d'un réseau d'assainissement collectif et que votre habitation est dans la zone desservie, le raccordement est **obligatoire dans les 2 ans** suivant la mise en service du réseau. Le non-raccordement peut entraîner une **majoration de la redevance** d'assainissement.

## Quel est le rôle du SPANC ?

Le Service Public d'Assainissement Non Collectif (SPANC) est chargé de :

- **Contrôler** les installations d'assainissement individuel
- **Vérifier la conformité** lors de la vente d'un bien
- **Conseiller** les propriétaires sur les solutions adaptées
- **Délivrer les autorisations** de travaux d'assainissement

## Combien coûte une installation d'assainissement individuel ?

Les coûts varient selon la filière choisie :

- **Fosse septique + épandage** : entre 5 000 et 12 000 €
- **Microstation** : entre 7 000 et 15 000 €
- **Filtre compact** : entre 8 000 et 14 000 €

Ces prix incluent l'étude de sol, la fourniture et la pose. Des **aides financières** sont parfois disponibles (Agence de l'eau, collectivités locales).

## Quelles sont les obligations d'entretien ?

Quel que soit le système :

- **Vidange régulière** de la fosse ou du bac de décantation (tous les 4 ans en moyenne)
- **Contrôle périodique** par le SPANC (tous les 4 à 10 ans selon les communes)
- **Bordereau de suivi** des déchets (BSD) à conserver
- **Interdiction** de jeter des produits chimiques, peintures, huiles dans le système

## Que se passe-t-il si mon installation n'est pas conforme ?

En cas de vente, un diagnostic assainissement non conforme oblige le vendeur ou l'acquéreur à réaliser les travaux de mise aux normes dans un délai d'un an. Hors vente, le SPANC peut imposer des travaux si l'installation présente un **risque sanitaire ou environnemental**.

## Earth Sanitation : installation et entretien d'assainissement

Notre entreprise prend en charge l'intégralité de votre projet :

1. **Étude de sol** et dimensionnement
2. **Conception** du plan d'installation
3. **Dossier administratif** (SPANC, mairie)
4. **Travaux d'installation** dans les règles de l'art
5. **Mise en service** et formation à l'utilisation
6. **Entretien et maintenance** post-installation

Nous intervenons dans l'Hérault, le Gard et l'Aude pour tous types de travaux d'assainissement.

---

**Besoin de conseils ou d'un devis pour votre assainissement ?** Contactez Earth Sanitation. Étude gratuite et accompagnement complet.`,
  },
  {
    title: 'Vidange de fosse septique : fréquence, prix et obligations légales',
    slug: 'vidange-fosse-septique-frequence-prix-obligations-legales',
    excerpt: "Tout savoir sur la vidange de fosse septique : à quelle fréquence, quel prix, quelles obligations légales ? Guide complet pour les propriétaires.",
    published: true,
    publishedAt: new Date('2026-02-09T08:00:00.000Z'),
    content: `La vidange de fosse septique est une opération d'entretien indispensable pour le bon fonctionnement de votre système d'assainissement non collectif. Voici tout ce qu'il faut savoir en tant que propriétaire.

## À quelle fréquence faut-il vidanger sa fosse septique ?

En règle générale, une fosse septique doit être vidangée **tous les 4 ans**. Cependant, cette fréquence peut varier selon :

- **La taille de la fosse** : une fosse sous-dimensionnée nécessite des vidanges plus fréquentes
- **Le nombre d'occupants** : plus il y a de personnes, plus les boues s'accumulent rapidement
- **Les habitudes** : utilisation de broyeur, quantité de produits ménagers, etc.

La règle d'or : la vidange est nécessaire quand les boues dépassent **50% du volume** de la fosse.

## Comment savoir si ma fosse doit être vidangée ?

Plusieurs signes doivent vous alerter :

- **Mauvaises odeurs** autour de la fosse ou dans la maison
- **Écoulement lent** des eaux usées (lavabo, douche, WC)
- **Remontées d'eau** dans les canalisations
- **Herbe anormalement verte** au-dessus de la fosse ou de l'épandage
- **Présence de boues** en surface dans le regard de la fosse

## La vidange de fosse septique est-elle obligatoire ?

Oui. La réglementation impose un entretien régulier des installations d'assainissement non collectif. Le **SPANC** (Service Public d'Assainissement Non Collectif) effectue des contrôles périodiques. Un défaut d'entretien peut entraîner :

- Une **non-conformité** lors du contrôle SPANC
- Un **blocage de la vente** de votre bien immobilier
- Des **risques sanitaires** pour votre famille et le voisinage
- Une **pollution du sol** et des nappes phréatiques

## Qu'est-ce que le bordereau de suivi des déchets (BSD) ?

Le professionnel qui réalise la vidange doit obligatoirement vous remettre un **bordereau de suivi des déchets** (BSD). Ce document atteste :

- La date de l'intervention
- Le volume de matières vidangées
- Le lieu de traitement des boues
- L'identité de l'entreprise intervenante

**Conservez ce document précieusement** : il vous sera demandé lors des contrôles du SPANC.

## Que devient le contenu de la fosse après vidange ?

Les boues sont transportées par le camion hydrocureur vers un **centre de traitement agréé** où elles sont traitées conformément à la réglementation environnementale. Chez Earth Sanitation, tous nos déchets sont tracés et traités dans le respect des normes.

## Faut-il vider intégralement la fosse ?

Non. Il est recommandé de laisser environ **10% des boues** au fond de la fosse. Ces boues contiennent les bactéries nécessaires au **redémarrage biologique** de l'installation. Un professionnel sait gérer cette opération correctement.

## Combien coûte une vidange de fosse septique ?

Le prix varie selon :

- Le volume de la fosse (généralement 3 000 à 5 000 litres pour une maison individuelle)
- L'accessibilité (distance camion-fosse)
- La région

Earth Sanitation propose un **tarif transparent** avec devis gratuit avant intervention.

## Et pour les bacs à graisse ?

Les bacs à graisse, obligatoires dans la **restauration**, doivent être vidangés beaucoup plus fréquemment :

- **Restaurants** : tous les 3 à 6 mois
- **Cantines et collectivités** : tous les 6 mois à 1 an
- **Particuliers** (si équipés) : tous les 6 mois

Nous intervenons aussi pour la vidange de **pompes de relevage**, **microstations**, **puisards** et **piscines**.

## Quels gestes adopter entre deux vidanges ?

Pour espacer les vidanges et préserver votre installation :

- **Ne jetez jamais** de produits chimiques, peintures, solvants
- **Évitez les lingettes** et objets non biodégradables
- **Limitez les graisses** dans vos canalisations
- **N'utilisez pas** de javel en excès (elle tue les bactéries de la fosse)
- **Faites vérifier** le préfiltre et le bac dégraisseur régulièrement

## Earth Sanitation : vidange professionnelle dans l'Hérault

Notre équipe intervient rapidement avec un **camion hydrocureur grande capacité** pour la vidange de vos fosses septiques, bacs à graisse et microstations. Zone d'intervention : Montpellier, Nîmes, Sète, Béziers, Lunel et dans un rayon de 100 km.

Chaque intervention comprend :

1. Pompage complet des boues
2. Nettoyage et rinçage de la fosse
3. Vérification du filtre et remise en eaux
4. Remise du bordereau de suivi des déchets (BSD)

---

**Besoin d'une vidange ?** Contactez Earth Sanitation pour un devis gratuit. Intervention rapide, même en urgence.`,
  },
  {
    title: 'Travaux VRD : tout comprendre sur les branchements et réseaux enterrés',
    slug: 'travaux-vrd-comprendre-branchements-reseaux-enterres',
    excerpt: "Qu'est-ce que les travaux VRD ? Raccordement eau, électricité, assainissement : tout ce qu'il faut savoir pour votre construction ou rénovation.",
    published: true,
    publishedAt: new Date('2026-02-11T08:00:00.000Z'),
    content: `Les travaux VRD (Voirie et Réseaux Divers) sont une étape incontournable lors de la construction d'une maison neuve, de la viabilisation d'un terrain ou du raccordement d'une habitation existante. Voici un guide complet pour comprendre ces travaux essentiels.

## Qu'est-ce que les travaux VRD ?

VRD signifie **Voirie et Réseaux Divers**. Ces travaux concernent l'ensemble des aménagements extérieurs nécessaires pour viabiliser un terrain :

- **Voirie** : accès routier, chemins, parkings
- **Réseaux** : eau potable, assainissement, électricité, gaz, télécommunications
- **Divers** : drainage, gestion des eaux pluviales, éclairage

## Quels types de branchements sont réalisés lors des travaux VRD ?

### Eau potable
Raccordement au réseau public d'eau potable. Comprend la tranchée, la pose du tuyau, le compteur et le raccordement à votre installation intérieure.

### Assainissement
Raccordement au **tout-à-l'égout** (réseau collectif) ou installation d'un système d'assainissement individuel (fosse septique, microstation).

### Électricité
Pose du câble électrique en tranchée depuis le réseau public jusqu'au tableau de distribution de votre habitation.

### Gaz
Si disponible dans votre zone, raccordement au réseau de gaz naturel.

### Télécommunications
Pose des gaines pour le téléphone, internet (fibre optique) et câble.

## Quand faut-il réaliser des travaux VRD ?

Les travaux VRD sont nécessaires dans plusieurs situations :

- **Construction neuve** : viabilisation du terrain avant la construction
- **Raccordement au tout-à-l'égout** : obligation légale dans les 2 ans
- **Rénovation** : mise aux normes des réseaux existants
- **Division de terrain** : création de nouveaux branchements
- **Changement d'usage** : transformation d'un local commercial, etc.

## Faut-il un permis pour les travaux VRD ?

Selon l'ampleur des travaux :

- **Déclaration préalable** : pour les tranchées sur voie publique
- **Permis d'aménager** : pour la viabilisation complète d'un terrain
- **DICT** (Déclaration d'Intention de Commencement de Travaux) : obligatoire avant tout terrassement pour localiser les réseaux existants

Earth Sanitation s'occupe de **toutes les démarches administratives** pour vous.

## Combien de temps durent les travaux VRD ?

La durée dépend de l'ampleur du projet :

- **Branchement simple** (eau ou assainissement) : 2 à 5 jours
- **Viabilisation complète** d'un terrain : 2 à 4 semaines
- **Rénovation de réseau** : variable selon l'étendue

Nous fournissons un **planning précis** avant le démarrage du chantier.

## Combien coûtent les travaux VRD ?

Le coût dépend de nombreux facteurs :

- La distance entre le réseau public et votre terrain
- Le nombre de branchements à réaliser
- La nature du sol (rocheux, argileux, sablonneux)
- Les contraintes d'accès
- Les remises en état de surface nécessaires

Earth Sanitation établit un **devis détaillé et gratuit** après étude de votre projet.

## Qu'est-ce qu'une tranchée technique ?

Une tranchée technique est une fouille linéaire dans laquelle sont posés un ou plusieurs réseaux. Elle doit respecter des normes précises :

- **Profondeur minimale** : 60 cm à 1,20 m selon les réseaux
- **Largeur** : adaptée au nombre de réseaux
- **Lit de pose** : sable ou gravier pour protéger les canalisations
- **Grillage avertisseur** : de couleur différente selon le réseau (bleu pour l'eau, marron pour l'assainissement, rouge pour l'électricité)
- **Remblaiement** : en couches compactées

## Quelles normes doivent respecter les travaux VRD ?

Les travaux VRD doivent respecter les **normes DTU** (Documents Techniques Unifiés) et les réglementations locales :

- DTU 64.1 pour l'assainissement
- Normes NF pour les matériaux
- Règlement sanitaire départemental
- PLU (Plan Local d'Urbanisme) de la commune

## Earth Sanitation : votre expert VRD dans l'Hérault

Notre entreprise réalise tous types de travaux VRD :

- Création de tranchées et pose de canalisations
- Branchements eau, électricité, gaz et télécoms
- Raccordement au tout-à-l'égout
- Rénovation et mise aux normes des réseaux existants
- Gestion complète du chantier de A à Z

Nous intervenons dans l'Hérault, le Gard et l'Aude, avec une **assurance décennale** et le respect strict des normes en vigueur.

---

**Un projet de construction ou de raccordement ?** Contactez Earth Sanitation pour une étude gratuite et un devis détaillé.`,
  },
  {
    title: 'Rénovation de canalisations sans tranchée : techniques, avantages et prix',
    slug: 'renovation-canalisations-sans-tranchee-techniques-avantages-prix',
    excerpt: "Chemisage, éclatement, tubage : découvrez les techniques de rénovation de canalisations sans tranchée, plus rapides et moins coûteuses.",
    published: true,
    publishedAt: new Date('2026-02-13T08:00:00.000Z'),
    content: `Vos canalisations sont endommagées mais vous ne voulez pas détruire votre jardin, votre terrasse ou votre allée ? Les techniques de rénovation sans tranchée permettent de réparer ou remplacer vos canalisations **sans creuser**. Découvrez ces solutions innovantes.

## Qu'est-ce que la technique sans tranchée ?

La rénovation sans tranchée (ou techniques « no-dig ») regroupe plusieurs méthodes permettant de réparer, renforcer ou remplacer des canalisations souterraines **sans ouvrir de fouille** sur toute la longueur du réseau. Seuls quelques points d'accès sont nécessaires.

## Quelles sont les différentes techniques sans tranchée ?

### Le chemisage (gainage)

C'est la technique la plus courante. Une **gaine souple** imprégnée de résine est insérée dans la canalisation endommagée. Sous l'effet de la pression ou de la chaleur, la résine durcit et forme un **nouveau tuyau** à l'intérieur de l'ancien.

- **Idéal pour** : fissures, infiltrations de racines, joints défectueux
- **Diamètres** : 50 mm à 400 mm
- **Durée de vie** : 50 ans et plus

### L'éclatement de canalisation

La vieille canalisation est **fragmentée** de l'intérieur par un outil spécial, et simultanément remplacée par un nouveau tuyau de diamètre identique ou supérieur.

- **Idéal pour** : canalisations effondrées, très endommagées
- **Diamètres** : 50 mm à 300 mm
- **Avantage** : permet d'augmenter le diamètre

### L'injection de résine

De la **résine est injectée** dans les fissures et joints pour les colmater et restaurer l'étanchéité. Technique ciblée pour des réparations ponctuelles.

- **Idéal pour** : petites fissures, joints qui fuient
- **Rapidité** : intervention très rapide

### Le tubage

Un **tube rigide** de diamètre légèrement inférieur est inséré dans la canalisation existante. L'espace entre les deux tuyaux est comblé par du coulis de ciment ou de la résine.

- **Idéal pour** : grandes longueurs de canalisation
- **Diamètres** : 100 mm à 400 mm
- **Très solide** : le nouveau tuyau est autonome

## Quels sont les avantages de la technique sans tranchée ?

Par rapport à la méthode traditionnelle (ouverture de tranchée), les avantages sont considérables :

- **Pas de destruction** : jardin, terrasse, allée et pelouse préservés
- **Rapidité** : 2 à 3 fois plus rapide qu'une tranchée classique
- **Coût réduit** : pas de remise en état de surface
- **Moins de nuisances** : bruit et poussière limités
- **Écologique** : empreinte carbone réduite, moins de déchets
- **Pas de fermeture de route** : idéal en zone urbaine

## La technique sans tranchée est-elle aussi solide qu'une pose classique ?

Oui. Les canalisations posées ou réhabilitées par technique sans tranchée offrent une **durée de vie équivalente voire supérieure** à une pose traditionnelle. Le chemisage, par exemple, crée un tuyau en résine dont la durée de vie dépasse 50 ans.

## Dans quels cas la technique sans tranchée est-elle recommandée ?

- **Sous une allée pavée** ou une terrasse en béton
- **Sous un jardin paysagé** que vous ne voulez pas détruire
- **Sous une route** ou un parking
- **En zone urbaine dense** où l'ouverture de tranchée est contraignante
- **Passage sous rivière** ou fossé
- **Passage sous un bâtiment** existant

## Quand la tranchée classique reste-t-elle nécessaire ?

Dans certains cas, la tranchée traditionnelle reste la meilleure option :

- **Sol très rocheux** rendant le forage impossible
- **Canalisations complètement effondrées** sur de grandes longueurs
- **Création de réseau entièrement neuf** sans canalisation existante
- **Diamètres très importants** (> 400 mm)

Earth Sanitation vous conseille systématiquement la **solution la plus adaptée** à votre situation.

## Combien coûte une rénovation sans tranchée ?

Le coût dépend de la technique utilisée, de la longueur à traiter et du diamètre. En règle générale, la technique sans tranchée est **20 à 40% moins chère** que la tranchée classique, principalement grâce à l'absence de remise en état de surface.

## Comment se déroule une intervention sans tranchée ?

1. **Étude de faisabilité** : inspection caméra pour évaluer l'état de la canalisation
2. **Choix de la technique** : selon le diagnostic, la technique la plus adaptée est proposée
3. **Préparation** : nettoyage de la canalisation par hydrocurage
4. **Réhabilitation** : mise en œuvre de la technique choisie
5. **Contrôle** : inspection caméra finale et tests d'étanchéité
6. **Rapport** : remise d'un rapport d'intervention détaillé

## Earth Sanitation : spécialiste de la rénovation sans tranchée

Notre entreprise maîtrise les 4 techniques de rénovation sans tranchée : chemisage, éclatement, injection de résine et tubage. Nous intervenons dans l'Hérault, le Gard et l'Aude avec du matériel professionnel de dernière génération.

---

**Vos canalisations sont endommagées ?** Contactez Earth Sanitation pour un diagnostic gratuit. Nous vous proposerons la solution la plus adaptée, avec ou sans tranchée.`,
  },
]

async function main() {
  console.log('Seeding 7 SEO blog articles...')

  for (const article of articles) {
    const existing = await prisma.blogPost.findUnique({ where: { slug: article.slug } })
    if (existing) {
      console.log(`  → Article already exists: "${article.title}" — skipping`)
    } else {
      await prisma.blogPost.create({ data: article })
      console.log(`  ✓ Created: "${article.title}"`)
    }
  }

  console.log('\nDone! 7 SEO blog articles seeded.')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
