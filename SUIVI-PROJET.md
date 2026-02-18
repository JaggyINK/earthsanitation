# Suivi Projet — Earth Sanitation

**Client** : Earth Sanitation
**Projet** : Site vitrine + Dashboard admin
**Stack** : Next.js 14 / TypeScript / Tailwind CSS v4 / Prisma / MySQL (prod) / PostgreSQL (local)
**Domaine** : https://earth-sanitation.fr
**Dernière mise à jour** : 18 février 2026

---

## Phase 1 — Fondations
- [x] Init Next.js + installation des dépendances
- [x] Configuration Tailwind v4 (thème écolo : Forest, Sage, Gold, Cream, Sand)
- [x] Schema Prisma + génération client
- [x] Données statiques (cities.ts, services.ts, platforms.ts)

## Phase 2 — Layout & Design System
- [x] Composants UI (Button, Card, Input, Badge)
- [x] Header (desktop + mobile hamburger) — logo PNG optimisé
- [x] Footer — logo PNG optimisé, compact sur mobile
- [x] StickyBottomBar (mobile : WhatsApp, Devis, Urgence)
- [x] Composants SEO (StructuredData : LocalBusiness, FAQ, Breadcrumb, Article, Service, WebSite schemas)
- [x] PhoneButton + Breadcrumbs (composants partagés)
- [x] Animations framer-motion (FadeIn, FadeInUp, SlideIn, ScaleIn, StaggerContainer, StaggerItem)

## Phase 3 — Pages publiques
- [x] Homepage redesignée (Hero animé, Trust Signals, Services, Comment ça marche, Urgence, Pourquoi nous choisir, Zones, Avis, CTA)
- [x] Page Urgence 24h/24
- [x] 7 pages services enrichies (débouchage, curage, inspection caméra, assainissement, vidange, VRD, sans tranchée)
  - [x] Template avec animations framer-motion
  - [x] Sections détaillées (intro, étapes, avantages, conseils, FAQ)
  - [x] Structured Data (ServiceSchema, BreadcrumbSchema, FAQSchema)
- [x] Page Contact + formulaire
- [x] Page Devis (formulaire complet avec upload photos, choix pro/particulier)
- [x] Page À propos (avis clients, plateformes, chiffres clés, villes d'intervention)
- [x] Pages locales dynamiques /zone/[ville] (59 villes) + BreadcrumbSchema + OpenGraph
- [x] FAQ (connecté à la BDD, géré depuis admin)
- [x] Blog (connecté à la BDD, publié/masqué depuis admin)
- [x] 7 articles SEO blog (1 par service, FAQ-style, seedés en local)
- [x] Mentions légales + Politique de confidentialité (infos réelles entreprise)

## Phase 4 — Base de données & Backend
- [x] PostgreSQL local (dev) / MySQL prod (Hostinger)
- [x] Migration Prisma initiale (8 tables)
- [x] Migration add-review-fields (photos, sourceUrl, verified, visible, order)
- [x] Migration add-lead-fields-and-faq (champs structurés lead + modèle FAQ)
- [x] Seed script (admin, 7 articles SEO, 5 avis, 7 FAQs)
- [x] Seed articles blog séparé (prisma/seed-blog-articles.ts)
- [x] API /api/contact → sauvegarde Lead en BDD (champs structurés)
- [x] API /api/track/visit → PageVisit en BDD (unique par IP/jour, exclut /admin)
- [x] API /api/track/phone-click → PhoneClick en BDD
- [x] API /api/blog + /api/blog/[id] → CRUD BlogPost via Prisma
- [x] API /api/reviews + /api/reviews/[id] → CRUD Review via Prisma
- [x] API /api/leads + /api/leads/[id] → GET/PUT/DELETE leads (auth)
- [x] API /api/stats → stats dashboard avec tendances hebdomadaires
- [x] API /api/faq + /api/faq/[id] → CRUD FAQ (auth pour écriture)
- [x] API /api/upload/lead → upload photos leads (max 5, 5MB)
- [x] API /api/cleanup → suppression auto données > 60 jours (PageVisit, PhoneClick)
- [x] API /api/admin/change-password → changement mot de passe admin
- [x] NextAuth + bcrypt (admin en BDD, plus de mot de passe hardcodé)

## Phase 5 — Dashboard Admin
- [x] Layout admin (sidebar desktop + nav mobile + déconnexion)
- [x] Dashboard stats (4 StatCards + graphiques + tendances)
- [x] Gestion leads — affichage structuré :
  - [x] Cards avec nom, type, urgence, service, ville
  - [x] Détails : contact (tel/email), adresse, client type, entreprise/SIRET
  - [x] Affichage photos avec lightbox (navigation, téléchargement)
  - [x] Changement statut (Nouveau/Contacté/Converti/Perdu)
  - [x] Suppression (confirmée, effacée de la BDD)
  - [x] Export CSV complet
- [x] Platform presence checker (24 plateformes)
- [x] Avis clients (CRUD, réordonnancement, visibilité, sources multiples)
- [x] Blog admin (CRUD, activer/désactiver = visible/masqué sur le site)
- [x] FAQ admin (CRUD, par service, réordonnancement, visibilité)
- [x] Settings admin (changement mot de passe)
- [x] Sécurité (middleware withAuth, JWT, CSRF NextAuth)

## Phase 6 — SEO & Indexation
- [x] Sitemap dynamique (pages statiques + services + zones + blog depuis Prisma)
- [x] robots.txt (règles Googlebot, Googlebot-Image, blocage /admin /api /_next)
- [x] Web App Manifest (manifest.ts — PWA-ready, icônes, theme_color)
- [x] Structured Data complète :
  - [x] LocalBusiness (type Plumber) — global sur toutes les pages
  - [x] WebSite schema — global
  - [x] ServiceSchema — sur chaque page service
  - [x] FAQSchema — sur FAQ + pages services avec FAQ
  - [x] BreadcrumbSchema — sur services + zones
  - [x] ArticleSchema — sur chaque article blog
  - [x] ArticleListSchema — sur page blog listing
  - [x] AggregateRating (4.8/5, 5 avis)
  - [x] OfferCatalog (7 services listés)
- [x] Open Graph metadata (og:title, og:description, og:image, og:locale) — global + par page
- [x] Twitter Cards (summary_large_image) — global + par page
- [x] Meta robots avancé (googleBot max-image-preview, max-snippet)
- [x] Canonical URLs (metadataBase + alternates.canonical par page)
- [x] Keywords SEO étendus (10 mots-clés ciblés)
- [x] Descriptions meta sur toutes les pages (mentions légales, confidentialité corrigées)

## Phase 7 — Tracking & Analytics
- [x] Visites uniques par IP (1 visite max par IP par jour)
- [x] Pages admin exclues du tracking
- [x] Nettoyage auto données > 60 jours (/api/cleanup)
- [x] Tracking clics téléphone

## Phase 8 — Sécurité
- [x] Rate limiting login (5 tentatives max / 15 min par email)
- [x] Middleware auth sur toutes les routes admin
- [x] CSRF protection (NextAuth)
- [x] Mots de passe hashés (bcrypt)
- [x] Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy)
- [x] Cache headers optimisés (images, favicons : max-age 1 an)

## Phase 9 — Logo & Assets
- [x] Logo optimisé (3.5MB SVG → 55KB PNG + 36KB WebP)
- [x] Favicons générés (favicon.ico, icon.png, apple-icon.png, android-chrome 192/512)
- [x] Logo OG (logo-og.png 600px pour partage social)
- [x] Optimisation images (AVIF/WebP, lazy loading)

## Phase 10 — Mobile UX
- [x] Menu mobile scrollable (max-h + overflow-y-auto)
- [x] Footer compact mobile (2 colonnes, contact intégré sous logo)
- [x] CTA final → transition fluide vers footer (même bg-forest)
- [x] Enrichissement visuel (badges dorés, bordures colorées, micro-badges confiance)

## Phase 11 — Déploiement
- [x] Configuration standalone (output: 'standalone')
- [x] Déploiement Hostinger (MySQL prod)
- [x] Domaine earth-sanitation.fr configuré + SSL
- [ ] Seeder les 7 articles blog en production
- [ ] Soumettre sitemap à Google Search Console
- [ ] Tester Structured Data (Google Rich Results Test)
- [ ] Lighthouse audit (Performance > 90, SEO > 95)

---

## Vérification finale

### Fait
- [x] Toutes les pages accessibles sans 404
- [x] Formulaires fonctionnels avec validation (contact + devis)
- [x] Tracking clics/visites opérationnel (unique par IP, admin exclu)
- [x] Dashboard admin complet et protégé
- [x] Blog : activer/désactiver fonctionne
- [x] FAQ : CRUD depuis admin, affiché sur le site
- [x] Leads : affichage structuré avec photos + suppression BDD
- [x] Nettoyage auto 60 jours
- [x] Sitemap dynamique (Prisma) + robots.txt + manifest.webmanifest
- [x] Build Next.js réussi (0 erreurs)
- [x] Rate limiting login (anti brute-force)
- [x] Logo optimisé + favicons (plus de SVG 3.5MB)
- [x] Open Graph + Twitter Cards + SEO metadata complets sur toutes les pages
- [x] Security headers actifs (5 headers)
- [x] Structured Data complète (7 types de schemas)
- [x] Services enrichis (intro, sections, étapes, conseils, FAQ par service)
- [x] Mentions légales / confidentialité avec infos réelles entreprise
- [x] Homepage redesignée avec animations + trust signals

### À faire en production
- [ ] Seeder les 7 articles blog : `npx tsx prisma/seed-blog-articles.ts`
- [ ] Changer le mot de passe admin (par défaut : admin123)
- [ ] Google Search Console : vérifier le site + soumettre sitemap
- [ ] Google Rich Results Test : tester les structured data
- [ ] Lighthouse : viser Performance > 90, SEO > 95
- [ ] Configurer Google Business Profile (lier avec le site)
- [x] ~~Corriger le bug "Invalid Date" sur les avis clients~~ (corrigé : `review.date` → `review.time`)

---

## Connexion BDD — État actuel

| Fonctionnalité | API | BDD | Front public | Admin |
|----------------|-----|-----|--------------|-------|
| Leads/Contacts | /api/contact | Lead | Formulaires → BDD | Leads page |
| Blog | /api/blog | BlogPost | /blog → Prisma | Blog CRUD |
| Avis | /api/reviews | Review | Homepage + À propos | Reviews CRUD |
| FAQ | /api/faq | FAQ | /faq → Prisma | FAQ CRUD |
| Visites | /api/track/visit | PageVisit | Auto (hook) | Stats dashboard |
| Clics tel | /api/track/phone-click | PhoneClick | PhoneButton | Stats dashboard |
| Stats | /api/stats | Toutes tables | — | Dashboard |
| Nettoyage | /api/cleanup | PageVisit, PhoneClick | — | Manuel |
| Sitemap | /sitemap.xml | BlogPost | Dynamique | — |
| Auth | NextAuth | AdminUser | — | Login + sessions |

---

## Fichiers SEO générés automatiquement

| URL | Source | Contenu |
|-----|--------|---------|
| /sitemap.xml | src/app/sitemap.ts | Pages statiques + services + zones + blog (Prisma) |
| /robots.txt | src/app/robots.ts | Rules Googlebot + Googlebot-Image, blocage admin/api |
| /manifest.webmanifest | src/app/manifest.ts | PWA manifest avec icônes et theme_color |

---

## Guide de déploiement — Hostinger Business (MySQL)

### Prérequis
- **Plan Hostinger** : Business (minimum) — seul plan avec Node.js
- **Base de données** : MySQL inclus chez Hostinger

### Étape 1 : Créer la BDD MySQL sur Hostinger
1. Aller dans **hPanel → Bases de données → MySQL**
2. Créer une base : `earthsanitation`
3. Créer un utilisateur avec un mot de passe fort
4. Associer l'utilisateur à la base avec TOUS les privilèges
5. Noter les infos : host, port `3306`, user, password

### Étape 2 : Pousser le code sur GitHub
```bash
git add .
git commit -m "Production ready - MySQL"
git push -u origin main
```

### Étape 3 : Configurer Hostinger Node.js
1. Aller dans **hPanel → Site web → Node.js**
2. Créer une application Node.js
3. Connecter le repo GitHub
4. Configurer les variables d'environnement :
```
DATABASE_URL=mysql://user:password@localhost:3306/earthsanitation
NEXTAUTH_SECRET=<générer avec : openssl rand -base64 32>
NEXTAUTH_URL=https://earth-sanitation.fr
NODE_ENV=production
```
5. Commandes :
   - Install : `npm install`
   - Build : `npx prisma generate && npm run build`
   - Start : `npm start`

### Étape 4 : Initialiser la BDD MySQL
Via le terminal SSH Hostinger :
```bash
npx prisma migrate dev --name init
npx prisma db seed
npx tsx prisma/seed-blog-articles.ts
```

### Étape 5 : Post-déploiement
1. Configurer le domaine earth-sanitation.fr → DNS vers Hostinger
2. Activer SSL (Let's Encrypt gratuit)
3. Google Search Console → ajouter le site + soumettre sitemap
4. Tester structured data : https://search.google.com/test/rich-results
5. **Changer le mot de passe admin par défaut !**

---

## Architecture SEO

```
Structured Data (JSON-LD) par page :
├── Toutes les pages
│   ├── LocalBusiness (Plumber) — nom, tel, email, geo, horaires, rating, services
│   └── WebSite — nom, url, description
├── Pages services (/services/[slug])
│   ├── ServiceSchema — nom, description, provider, offers
│   ├── BreadcrumbSchema — Accueil > Services > [Service]
│   └── FAQSchema — questions/réponses du service
├── Pages zones (/zone/[ville])
│   └── BreadcrumbSchema — Accueil > Zones > [Ville]
├── Page FAQ (/faq)
│   └── FAQSchema — toutes les FAQ
├── Page blog (/blog)
│   └── ArticleListSchema — liste des articles
└── Articles blog (/blog/[slug])
    └── ArticleSchema — titre, dates, auteur, publisher
```

---

## Notes techniques

### Prisma — Switch provider local/prod
Le schema.prisma utilise `provider = "mysql"` pour la prod.
Pour travailler en local (PostgreSQL), il faut temporairement :
1. Changer `provider = "postgresql"` dans schema.prisma
2. Changer `@db.LongText` → `@db.Text` sur BlogPost.content
3. Faire les opérations (seed, migration)
4. **Remettre en mysql avant de commit/push**

### Identifiants admin par défaut
- Email : `admin@earthsanitation.fr`
- Mot de passe : `admin123`
- **À changer immédiatement en production via /admin/settings**

---

## Fichiers supprimés (nettoyage)

| Fichier | Raison |
|---------|--------|
| `src/lib/blog-store.ts` | Remplacé par Prisma |
| `src/lib/reviews-store.ts` | Remplacé par Prisma |
| `src/data/faq.ts` | Remplacé par Prisma |
| `step1.txt` | Notes de dev obsolètes |
| `tsconfig.tsbuildinfo` | Artefact de build (gitignore) |

---

## Recommandations post-production

1. **Photos réelles** : Remplacer les placeholders par des photos de chantiers
2. **Google Places API** : Obtenir une clé API pour avis automatiques
3. **Email transactionnel** : Configurer SMTP pour notifications leads
4. **Google Business Profile** : Vérifier liaison avec earthsanitation.fr
5. **Plateformes à configurer** : Apple Plans, Here, 118712, Foursquare, etc.
6. **Avis Google** : Ajouter réponse aux avis depuis le dashboard admin
7. **Google Search Console** : Vérifier l'indexation après 2-3 jours
8. **Google Analytics / Tag Manager** : Ajouter si besoin de stats avancées
9. ~~**Corriger "Invalid Date"**~~ — Corrigé (ReviewsSection utilisait `review.date` au lieu de `review.time`)
