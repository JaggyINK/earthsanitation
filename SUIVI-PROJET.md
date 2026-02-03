# Suivi Projet — Earth Sanitation

**Client** : Earth Sanitation
**Projet** : Site vitrine + Dashboard admin
**Stack** : Next.js 14 / TypeScript / Tailwind CSS / Prisma / PostgreSQL
**Deadline** : 14 février 2026

---

## Phase 1 — Fondations
- [x] Init Next.js + installation des dépendances
- [x] Configuration Tailwind (thème écolo : Forest, Sage, Gold, Cream, Sand)
- [x] Schema Prisma + génération client (migration à faire quand BDD connectée)
- [x] Données statiques (cities.ts, services.ts, faq.ts, platforms.ts)

## Phase 2 — Layout & Design System
- [x] Composants UI (Button, Card, Input, Badge)
- [x] Header (desktop + mobile hamburger)
- [x] Footer
- [x] StickyBottomBar (mobile)
- [x] Composants SEO (StructuredData, LocalBusiness, FAQ, Breadcrumb schemas)
- [x] PhoneButton + Breadcrumbs (composants partagés)

## Phase 3 — Pages publiques
- [x] Homepage (Hero, Services avec emplacements photos, Emergency, Trust, Zones d'intervention, CTA)
- [x] Page Urgence 24h/24
- [x] 7 pages services (template réutilisable)
  - [x] Débouchage canalisations
  - [x] Curage canalisations
  - [x] Inspection caméra
  - [x] Assainissement
  - [x] Vidange fosse septique
  - [x] Travaux VRD
  - [x] Pose réseaux sans tranchée
- [x] Page Contact + formulaire
- [x] Page Devis
- [x] Page À propos
- [x] Pages locales dynamiques /zone/[ville] (59 villes — Hérault, Gard, Aude)
- [x] FAQ
- [x] Mentions légales
- [x] Politique de confidentialité

## Phase 4 — Backend & Tracking
- [x] API contact form (route /api/contact, validation Zod)
- [x] Tracking visites (PageVisit — /api/track/visit + usePageTracking hook)
- [x] Tracking clics téléphone (PhoneClick — /api/track/phone-click + trackPhoneClick)
- [x] NextAuth setup + login admin (credentials provider, page /admin/login)
- [x] Middleware protection routes admin (/admin/dashboard, /admin/leads, etc.)

## Phase 5 — Dashboard Admin
- [x] Layout admin (sidebar desktop + nav mobile + déconnexion)
- [x] Dashboard stats (4 StatCards + 2 graphiques Recharts bar/line + sources trafic)
- [x] Gestion leads (table filtrable par statut/type + export CSV)
- [x] Platform presence checker (24 plateformes, clic statut, liens vers fiches, ajout/modif URL)
- [x] Avis clients complet :
  - [x] Store centralisé (`reviews-store.ts`) avec CRUD complet
  - [x] API routes `/api/reviews` et `/api/reviews/[id]`
  - [x] Admin : ajout/édition/suppression d'avis manuels
  - [x] Admin : gestion photos profil + photos clients (URLs)
  - [x] Admin : choix source (Google, Facebook, Trustpilot, Pages Jaunes, Manuel)
  - [x] Admin : drag & drop pour réordonner les avis
  - [x] Admin : toggle visibilité + badge vérifié
  - [x] Admin : stats (nombre, moyenne, distribution)
  - [x] Homepage : section ReviewsSection entre "Pourquoi nous choisir" et CTA
  - [x] Affichage jusqu'à 6 avis avec icônes sources, badges vérifiés, photos
- [x] Settings admin (infos entreprise, clés API, changement mot de passe)
- [x] Données réelles : dashboard nettoyé (plus de fausses données, états vides + vraies infos Google)
- [x] Mentions légales complétées (SIRET, adresse, raison sociale réels)
- [x] Sécurité vérifiée (middleware withAuth, JWT, CSRF NextAuth, secret env)

## Phase 6 — Blog & SEO final
- [x] Système blog (CRUD admin + pages publiques)
- [x] Sitemap dynamique + robots.txt
- [x] Pages 404/500 custom stylées

## Phase 7 — Polish & Livraison
- [x] Animations CSS (transitions hover sur cartes et boutons, animate-pulse sur badge urgence)
- [x] Optimisation performance (images avif/webp, lazy loading natif Next.js)
- [ ] Tests cross-browser / mobile (à faire manuellement)
- [ ] Audit Lighthouse > 90 (à faire via navigateur)
- [ ] Déploiement Vercel (nécessite compte)

---

## Vérification finale
- [ ] Toutes les pages accessibles sans 404
- [ ] Formulaires fonctionnels avec validation
- [ ] Tracking clics/visites opérationnel
- [ ] Dashboard admin complet et protégé
- [ ] Structured data valide (Google Rich Results Test)
- [ ] Lighthouse : Performance > 90, SEO > 95, Accessibility > 90
- [ ] Mobile responsive testé
- [ ] Sitemap + robots.txt corrects

---

## Recommandations & suggestions (à traiter en fin de projet)

1. **Numéro affiché** : Vérifier si le 06 23 12 20 57 est bien le numéro principal à afficher partout (ou s'il y a un numéro fixe aussi)
2. **Photos réelles** : Remplacer les placeholders par des photos de chantiers Earth Sanitation (voir `GUIDE-IMAGES.md`)
3. **Logo** : Intégrer le vrai logo SVG dans Header + Footer (actuellement un placeholder "ES" rond)
4. **Google Places API** : Obtenir une clé API Google pour activer la récupération automatique des avis
5. **Email transactionnel** : Configurer Nodemailer (SMTP OVH, Gmail App Password, ou service comme Resend/Brevo) pour les notifications de leads
6. **PostgreSQL prod** : Créer une base sur Neon.tech ou Supabase (gratuit) puis lancer `prisma migrate deploy`
7. **Admin password** : Changer le mot de passe admin hardcodé (admin123) par un hash bcrypt en BDD
8. **Contenu pages services** : Enrichir les textes avec du contenu unique par service (actuellement texte générique)
9. **Google Search Console** : Soumettre le sitemap dès la mise en prod
10. **Google Business Profile** : Vérifier que la fiche est bien liée au site earthsanitation.fr
11. **Rate limiting login** : Ajouter un rate limiter sur la route `/api/auth/[...nextauth]` pour éviter le brute-force (ex: `next-rate-limit` ou middleware custom)
12. **Persistance présence en ligne** : Les statuts et URLs des plateformes sont en local state — à sauvegarder en BDD quand PostgreSQL sera connecté
