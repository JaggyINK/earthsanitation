# Suivi Projet — Earth Sanitation

**Client** : Earth Sanitation
**Projet** : Site vitrine + Dashboard admin
**Stack** : Next.js 14 / TypeScript / Tailwind CSS / Prisma / PostgreSQL
**Deadline** : 14 février 2026

---

## Phase 1 — Fondations
- [x] Init Next.js + installation des dépendances
- [x] Configuration Tailwind (thème écolo : Forest, Sage, Gold, Cream, Sand)
- [x] Schema Prisma + génération client
- [x] Données statiques (cities.ts, services.ts, platforms.ts)

## Phase 2 — Layout & Design System
- [x] Composants UI (Button, Card, Input, Badge)
- [x] Header (desktop + mobile hamburger) — logo SVG intégré
- [x] Footer — logo SVG intégré
- [x] StickyBottomBar (mobile)
- [x] Composants SEO (StructuredData, LocalBusiness, FAQ, Breadcrumb schemas)
- [x] PhoneButton + Breadcrumbs (composants partagés)

## Phase 3 — Pages publiques
- [x] Homepage (Hero, Services, Emergency, Trust, Zones d'intervention, CTA)
- [x] Page Urgence 24h/24
- [x] 7 pages services (template réutilisable)
- [x] Page Contact + formulaire
- [x] Page Devis (formulaire complet avec upload photos, choix pro/particulier)
- [x] Page À propos (avis clients, plateformes, chiffres clés, villes d'intervention)
- [x] Pages locales dynamiques /zone/[ville] (59 villes)
- [x] FAQ (connecté à la BDD, géré depuis admin)
- [x] Blog (connecté à la BDD, publié/masqué depuis admin)
- [x] Mentions légales + Politique de confidentialité

## Phase 4 — Base de données & Backend
- [x] PostgreSQL installé et connecté (WSL2, port 5432)
- [x] Migration Prisma initiale (8 tables)
- [x] Migration add-review-fields (photos, sourceUrl, verified, visible, order)
- [x] Migration add-lead-fields-and-faq (champs structurés lead + modèle FAQ)
- [x] Seed script (admin, 3 articles, 5 avis, 7 FAQs)
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
- [x] Settings admin
- [x] Sécurité (middleware withAuth, JWT, CSRF NextAuth)

## Phase 6 — SEO & Indexation
- [x] Blog connecté BDD (pages publiques lisent Prisma, pas le store en mémoire)
- [x] Activer/désactiver article depuis admin = effet immédiat sur le site
- [x] Sitemap dynamique (Prisma) + robots.txt
- [x] Structured Data (LocalBusiness, FAQ, Article, Breadcrumb)
- [x] Open Graph metadata (og:title, og:description, og:image, og:locale)
- [x] Meta robots avancé (googleBot max-image-preview, max-snippet)
- [x] Canonical URLs (metadataBase)
- [x] Keywords SEO étendus (10 mots-clés ciblés)

## Phase 7 — Tracking & Analytics
- [x] Visites uniques par IP (1 visite max par IP par jour)
- [x] Pages admin exclues du tracking
- [x] Nettoyage auto données > 60 jours (/api/cleanup)
- [x] Tracking clics téléphone

## Phase 8 — Sécurité
- [x] Rate limiting login (5 tentatives max / 15 min par email)
- [x] Middleware auth sur toutes les routes admin (dashboard, leads, blog, reviews, faq, presence, settings)
- [x] CSRF protection (NextAuth)
- [x] Mots de passe hashés (bcrypt)

## Phase 9 — Polish & Livraison
- [x] Animations CSS + transitions
- [x] Optimisation images (avif/webp, lazy loading)
- [x] Logo SVG intégré (Header, Footer, login)
- [x] Configuration standalone (output: 'standalone' dans next.config.js)
- [x] Nettoyage fichiers inutiles (blog-store, reviews-store, faq.ts, step1.txt)
- [ ] Déploiement Hostinger (plan Business Node.js)

---

## Vérification finale
- [x] Toutes les pages accessibles sans 404
- [x] Formulaires fonctionnels avec validation (contact + devis)
- [x] Tracking clics/visites opérationnel (unique par IP, admin exclu)
- [x] Dashboard admin complet et protégé
- [x] Blog : activer/désactiver fonctionne
- [x] FAQ : CRUD depuis admin, affiché sur le site
- [x] Leads : affichage structuré avec photos + suppression BDD
- [x] Nettoyage auto 60 jours
- [x] Sitemap dynamique (Prisma) + robots.txt corrects
- [x] Build Next.js réussi (0 erreurs)
- [x] Rate limiting login (anti brute-force)
- [x] Logo intégré partout (plus de placeholder "ES")
- [x] Open Graph + SEO metadata complets
- [x] Fichiers inutiles supprimés
- [ ] Structured data valide (Google Rich Results Test) — à tester en prod
- [ ] Lighthouse : Performance > 90, SEO > 95 — à tester en prod
- [ ] Déploiement final sur Hostinger

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

---

## Guide de déploiement — Hostinger Business (MySQL)

### Prérequis
- **Plan Hostinger** : Business (minimum) — seul plan avec Node.js
- **Base de données** : MySQL inclus chez Hostinger (pas besoin de service externe)

### Étape 1 : Créer la BDD MySQL sur Hostinger
1. Aller dans **hPanel → Bases de données → MySQL**
2. Créer une base : `earthsanitation`
3. Créer un utilisateur avec un mot de passe fort
4. Associer l'utilisateur à la base avec TOUS les privilèges
5. Noter les infos : host (souvent `localhost` ou `mysql.hostinger.com`), port `3306`, user, password

### Étape 2 : Pousser le code sur GitHub
```bash
git add .
git commit -m "Production ready - MySQL"
git remote add origin https://github.com/ton-user/earthsanitation.git
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
```

### Étape 5 : Post-déploiement
1. Configurer le domaine earth-sanitation.fr → pointer DNS vers Hostinger
2. Activer SSL (Let's Encrypt gratuit sur Hostinger)
3. Aller sur https://search.google.com/search-console → ajouter le site
4. Soumettre le sitemap : `https://earth-sanitation.fr/sitemap.xml`
5. Tester structured data : https://search.google.com/test/rich-results
6. **Changer le mot de passe admin par défaut !**

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
7. **Mot de passe admin** : Changer `admin123` dès la mise en prod
8. **Google Search Console** : Vérifier l'indexation après 2-3 jours
