# Guide des images — Earth Sanitation

Toutes les images doivent être placées dans le dossier `public/` du projet.
Elles seront accessibles directement via leur chemin (ex: `/images/services/debouchage.jpg`).

---

## Format recommandé

| Critère | Recommandation |
|---|---|
| **Format** | `.jpg` pour les photos, `.png` pour les logos/icônes, `.svg` pour les icônes simples |
| **Poids max** | 200 Ko par image (compresser via [squoosh.app](https://squoosh.app) ou [tinypng.com](https://tinypng.com)) |
| **Résolution** | 2x la taille d'affichage (ex: affiché en 600px → fournir en 1200px) |

---

## 1. Logo

| Fichier | Emplacement | Taille | Format | Utilisation |
|---|---|---|---|---|
| `logo.svg` | `public/images/logo.svg` | vectoriel | SVG | Header, Footer |
| `logo-white.svg` | `public/images/logo-white.svg` | vectoriel | SVG | Footer (fond sombre) |
| `logo-og.jpg` | `public/images/logo-og.jpg` | 1200×630 px | JPG | Partage réseaux sociaux (Open Graph) |
| `favicon.ico` | `public/favicon.ico` | 32×32 px | ICO | Onglet navigateur |
| `apple-touch-icon.png` | `public/apple-touch-icon.png` | 180×180 px | PNG | Favori iPhone/iPad |

---

## 2. Photos services (cartes accueil + pages services)

Chaque service a un emplacement photo sur la carte d'accueil et un hero sur sa page dédiée.

| Fichier | Emplacement | Taille | Description |
|---|---|---|---|
| `debouchage.jpg` | `public/images/services/debouchage.jpg` | 800×500 px | Technicien en intervention débouchage, tuyau haute pression |
| `curage.jpg` | `public/images/services/curage.jpg` | 800×500 px | Camion hydrocureur ou jet haute pression dans canalisation |
| `inspection.jpg` | `public/images/services/inspection.jpg` | 800×500 px | Caméra d'inspection dans une canalisation, écran de contrôle |
| `assainissement.jpg` | `public/images/services/assainissement.jpg` | 800×500 px | Chantier d'assainissement, pose de fosse septique |
| `vidange.jpg` | `public/images/services/vidange.jpg` | 800×500 px | Camion de vidange, pompage fosse septique |
| `vrd.jpg` | `public/images/services/vrd.jpg` | 800×500 px | Travaux VRD, tranchée ouverte, pose de canalisations |
| `sans-tranchee.jpg` | `public/images/services/sans-tranchee.jpg` | 800×500 px | Technique sans tranchée, forage dirigé |

> **Astuce** : Des photos réelles de vos chantiers sont idéales. Sinon, des photos pro libres de droits sur [unsplash.com](https://unsplash.com) ou [pexels.com](https://pexels.com) en cherchant "plumbing", "sewer", "drain cleaning", "pipe inspection".

---

## 3. Hero accueil (optionnel)

| Fichier | Emplacement | Taille | Description |
|---|---|---|---|
| `hero-bg.jpg` | `public/images/hero-bg.jpg` | 1920×1080 px | Photo de fond du hero (équipe, camion, intervention). Actuellement un dégradé CSS est utilisé, mais une photo rendra mieux. |

---

## 4. Page À propos

| Fichier | Emplacement | Taille | Description |
|---|---|---|---|
| `equipe.jpg` | `public/images/equipe.jpg` | 800×500 px | Photo d'équipe ou du gérant |
| `camion.jpg` | `public/images/camion.jpg` | 800×500 px | Camion/véhicule Earth Sanitation (avec le logo si possible) |

---

## 5. Réassurance / Trust (optionnel)

| Fichier | Emplacement | Taille | Description |
|---|---|---|---|
| `certif-qualibat.png` | `public/images/trust/certif-qualibat.png` | 200×200 px | Logo certification Qualibat (si applicable) |
| `certif-rge.png` | `public/images/trust/certif-rge.png` | 200×200 px | Logo RGE (si applicable) |
| `assurance.png` | `public/images/trust/assurance.png` | 200×200 px | Logo assurance décennale |

---

## 6. Open Graph / SEO (partage réseaux sociaux)

| Fichier | Emplacement | Taille | Description |
|---|---|---|---|
| `og-default.jpg` | `public/images/og-default.jpg` | 1200×630 px | Image par défaut quand le site est partagé sur Facebook/LinkedIn/Twitter. Mettre le logo + baseline + téléphone. |

---

## Arborescence complète à créer

```
public/
├── favicon.ico
├── apple-touch-icon.png
└── images/
    ├── logo.svg
    ├── logo-white.svg
    ├── logo-og.jpg
    ├── og-default.jpg
    ├── hero-bg.jpg
    ├── equipe.jpg
    ├── camion.jpg
    ├── services/
    │   ├── debouchage.jpg
    │   ├── curage.jpg
    │   ├── inspection.jpg
    │   ├── assainissement.jpg
    │   ├── vidange.jpg
    │   ├── vrd.jpg
    │   └── sans-tranchee.jpg
    └── trust/
        ├── certif-qualibat.png
        ├── certif-rge.png
        └── assurance.png
```

---

## Checklist

- [ ] Logo SVG (header + footer)
- [ ] Logo blanc SVG (footer)
- [ ] Favicon 32×32
- [ ] Apple touch icon 180×180
- [ ] 7 photos services (800×500 chacune)
- [ ] Photo hero accueil (1920×1080)
- [ ] Photo équipe (800×500)
- [ ] Photo camion (800×500)
- [ ] Image Open Graph (1200×630)
- [ ] Logos certifications (si applicable)

**Total : ~13 images minimum à fournir**
