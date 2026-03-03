# Suivi du projet — Earth Sanitation

> Document de suivi des fonctionnalités développées et à faire.

---

## Fait

### Paramètres dynamiques (téléphone & email)
- [x] Modèle Prisma `SiteSettings` (singleton)
- [x] API admin `GET/PUT /api/admin/settings` (auth-protégée, revalidation cache)
- [x] `getSiteSettings()` côté serveur avec `unstable_cache` + tag `site-settings`
- [x] Context React `SiteSettingsProvider` + hook `useSiteSettings()` pour composants client
- [x] Page admin `/admin/settings` fonctionnelle (chargement depuis DB, sauvegarde, feedback)
- [x] Mise à jour de ~15 fichiers consommateurs (Footer, Header, PhoneButton, StickyBottomBar, UrgenceClientSections, StructuredData, pages contact/services/zone/mentions-legales/politique-confidentialite/homepage)
- [x] `getWhatsAppUrl()` accepte un `whatsappNumber` en paramètre (fallback sur la constante)
- [x] Déployé en prod + table créée dans MySQL

### Site principal
- [x] Pages services avec galeries photos, héros, FAQ, étapes d'intervention
- [x] Page urgence 24/7 avec compteurs animés
- [x] Pages zones (villes) avec SEO local
- [x] Blog dynamique (Prisma + Markdown)
- [x] Formulaires contact et devis (avec upload photos)
- [x] Tracking visites, clics téléphone, leads
- [x] Dashboard admin complet (stats, leads, avis, blog, FAQ, paramètres)
- [x] Structured data (JSON-LD) : LocalBusiness, Service, FAQ, Article, BreadcrumbList
- [x] Page à propos avec galerie photos
- [x] Mentions légales et politique de confidentialité

---

## À faire

### Dashboard admin — Reset & Comparatif stats
- [ ] Bouton de reset des visites (PageVisit / DailyStats.pageViews)
- [ ] Bouton de reset des clics téléphone (PhoneClick / DailyStats.phoneClicks)
- [ ] Bouton de reset des leads (Lead / DailyStats.leads)
- [ ] Confirmation avant reset (modale "Êtes-vous sûr ?")
- [ ] Système de comparatif de statistiques (période vs période : semaine/mois/trimestre)
