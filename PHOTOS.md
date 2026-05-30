# 📸 Carte des photos du site CHADOW

Tout se gère depuis **un seul fichier** : `src/data/photos.ts`
Les images vivent dans `public/images/…` (et `public/brand/` pour le logo).

## Méthode pour changer une photo

1. **Dépose** la nouvelle image dans le bon dossier (voir tableau ci-dessous).
2. **Ouvre** `src/data/photos.ts`, trouve la section, change le nom du fichier.
3. **Enregistre.** Le site se met à jour automatiquement.

> Nommage : minuscules, sans espaces ni accents → `fakear-fairmount-2024.jpg`
> Taille conseillée : 2000 px sur le grand côté max, qualité ~80 %.

---

## Carte des emplacements

### 🏠 Accueil (`/`)
| Emplacement | Nb photos | Dossier | Section dans `photos.ts` |
|---|---|---|---|
| Galerie défilante (haut, à droite) | 5–6 | `public/images/home/` | `homePhotos` |
| « Recent work » (grille) | reprend `homePhotos` | `public/images/home/` | `homePhotos` |
| Teaser « I'm Ambre » | 1 | `public/images/work/` | `featuredImages.aboutTeaser` |
| Citation « No staging… » (fond) | 1 | `public/images/home/` | `featuredImages.approach` |
| Aperçu Services (4 vignettes) | 4 | `public/images/…` | `serviceImages.*.card` |

### 👤 À propos (`/about`)
| Emplacement | Nb photos | Dossier | Section |
|---|---|---|---|
| Grand portrait (haut) | 1 | `public/images/contact/` | `featuredImages.aboutPortrait` |
| Citation « No staging… » (fond) | 1 | `public/images/home/` | `featuredImages.approach` |
| Mosaïque Instagram | reprend `homePhotos` | `public/images/home/` | `homePhotos` |

### 🎞️ Services (`/services`)
| Emplacement | Nb photos | Dossier | Section |
|---|---|---|---|
| Image de chaque service (×4) | 4 | `public/images/…` | `serviceImages.*.detail` |

Les 4 services : `live-nightlife-coverage`, `portraits-editorial`, `event-coverage`, `video-content`.

### 🖼️ Portfolio (`/work`)
| Emplacement | Nb photos | Dossier | Section |
|---|---|---|---|
| Grille filtrable | illimité | `public/images/work/` | `portfolioItems` |

Chaque entrée a : `category` (`live-stage` / `nightlife` / `portraits-editorial`), `src`, `title`, `context`.
Pour **ajouter** une photo → copie une ligne, incrémente l'`id`.

### ✉️ Contact (`/contact`)
| Emplacement | Nb photos | Dossier | Section |
|---|---|---|---|
| Photo à côté du formulaire | 1 | `public/images/contact/` | `featuredImages.contact` |

### 🏷️ Logo
| Emplacement | Dossier | Section |
|---|---|---|
| Logo (sidebar + mobile) | `public/brand/` | `brandLogo` |

---

## Exemple concret

> Le client dit : « Sur la page Services, pour *Portraits & Editorial*, je veux la photo `studio-marie-2025.jpg`. »

1. Je dépose `studio-marie-2025.jpg` dans `public/images/services/`
2. Dans `photos.ts`, section `serviceImages` → `"portraits-editorial"` → je change `detail:` :
   ```ts
   "portraits-editorial": {
     card:   "/images/home/elderbrook-mtelus-2025.jpg",
     detail: "/images/services/studio-marie-2025.jpg",   // ← ici
   },
   ```
3. Enregistré. C'est en ligne au prochain déploiement.

---

## Plus tard : interface visuelle (option)

Cette organisation est prête pour brancher un **CMS visuel** (Sveltia / Pages CMS) :
chaque section de `photos.ts` deviendra un panneau avec glisser-déposer, pour que
la photographe gère ses images elle-même sans toucher au code. À activer quand tu veux.
