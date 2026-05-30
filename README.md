# CHADOW — Site web

Site portfolio de **Ambre Bangoura** (CHADOW) — photographe & vidéaste événementielle et musicale, basée à Montréal.

Bilingue **FR / EN**, statique, rapide. Construit avec [Astro](https://astro.build).

🌐 Production : https://chadow.photo

---

## 🚀 Démarrage

Prérequis : **Node.js 22+**

```sh
npm install      # installe les dépendances
npm run dev      # serveur local → http://localhost:4321
npm run build    # build de production → ./dist/
npm run preview  # prévisualise le build localement
```

---

## 🗂️ Structure du projet

```
src/
├── pages/                 Une page = une route
│   ├── index.astro        Accueil (EN)        →  /
│   ├── about.astro        À propos            →  /about
│   ├── work.astro         Portfolio           →  /work
│   ├── services.astro     Services            →  /services
│   ├── contact.astro      Contact             →  /contact
│   └── fr/                Versions françaises →  /fr/...
├── layouts/
│   └── BaseLayout.astro   Head, sidebar, footer, transitions
├── components/            Composants réutilisables (Hero, Services, Portfolio…)
├── data/
│   ├── photos.ts          ⭐ TOUTES les photos du site (voir PHOTOS.md)
│   └── site.ts            Structure du site (nav, services, partenaires)
├── i18n/
│   ├── translations.ts    ⭐ TOUS les textes FR / EN
│   └── utils.ts           Helpers de langue
├── scripts/               Reveal au scroll, compteurs
└── styles/                Design tokens, base, animations

public/
├── images/                Photos (home / about / work / services / contact)
└── brand/                 Logo
```

---

## ✏️ Gérer le contenu

| Je veux changer… | Fichier |
| :--- | :--- |
| **Une photo** | `src/data/photos.ts` — guide détaillé dans **[PHOTOS.md](./PHOTOS.md)** |
| **Un texte** (FR ou EN) | `src/i18n/translations.ts` |
| **Email, réseaux, partenaires** | `src/data/site.ts` |
| **Une page entière** | `src/pages/…` |

> Le site est **bilingue** : chaque texte existe en `en` et `fr` dans `translations.ts`.
> Les pages `/fr/...` réutilisent les mêmes composants — pas de duplication de contenu.

---

## 🌍 Déploiement

Le site est **100 % statique** (`npm run build` → `dist/`) et se déploie sur
n'importe quel hébergeur (Netlify, Vercel, Cloudflare Pages…).

Configuration Netlify incluse dans [`netlify.toml`](./netlify.toml)
(headers de cache + sécurité). Build command : `npm run build`, dossier publié : `dist`.

---

## 🧰 Stack

- **[Astro](https://astro.build)** — génération statique, zéro JS superflu
- **TypeScript** strict
- **CSS natif** (design tokens, scoped styles) — pas de framework CSS
- Formulaire de contact via **Netlify Forms**
- Internationalisation native Astro (`i18n`)
