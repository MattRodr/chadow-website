/**
 * ============================================================
 *  PHOTOS — Source unique de TOUTES les images du site
 * ============================================================
 *
 *  ⚠️  Les photos se gèrent via l'interface d'admin :
 *      → chadow.photo/admin   (glisser-déposer, organisé par page)
 *
 *  Ce fichier LIT les données JSON éditées par le CMS (dossier
 *  src/data/cms/), organisées par PAGE puis par SOUS-SECTION :
 *
 *    home-hero.json          → Accueil · galerie défilante
 *    home-singles.json       → Accueil · teaser + citation
 *    about.json              → À propos · portrait
 *    contact.json            → Contact · photo du formulaire
 *    services.json           → Services · 1 vignette + 1 grande image / service
 *    portfolio-live.json     → Portfolio · Live & Stage
 *    portfolio-nightlife.json→ Portfolio · Nightlife
 *    portfolio-portraits.json→ Portfolio · Portraits & Editorial
 *    weddings.json           → Mariage (page privée) · galerie
 * ============================================================
 */

import homeHero from "./cms/home-hero.json";
import homeSingles from "./cms/home-singles.json";
import aboutData from "./cms/about.json";
import contactData from "./cms/contact.json";
import serviceData from "./cms/services.json";
import portfolioLive from "./cms/portfolio-live.json";
import portfolioNightlife from "./cms/portfolio-nightlife.json";
import portfolioPortraits from "./cms/portfolio-portraits.json";

export interface Photo {
  src: string;
  alt: string;
  context?: string;
}

/* ---------- LOGO ---------- */
export const brandLogo = "/brand/chadow-logo.png";

/* ---------- ACCUEIL — galerie défilante ---------- */
export const homePhotos: Photo[] = homeHero.gallery;

/* ---------- PHOTOS VEDETTES (assemblées depuis les pages) ---------- */
export const featuredImages = {
  aboutTeaser:   homeSingles.teaser, // Accueil — bloc "I'm Ambre"
  approach:      homeSingles.quote,  // Accueil + À propos — citation "No staging"
  aboutPortrait: aboutData.portrait, // À propos — grand portrait
  contact:       contactData.image,  // Contact — photo du formulaire
};

/* ---------- SERVICES — 2 images par service ---------- */
export const serviceImages = serviceData;

/* ---------- PORTFOLIO — fusion des 3 sous-catégories ---------- */
export const portfolioItems = [
  ...portfolioLive.photos.map((p) => ({ ...p, category: "live-stage" })),
  ...portfolioNightlife.photos.map((p) => ({ ...p, category: "nightlife" })),
  ...portfolioPortraits.photos.map((p) => ({ ...p, category: "portraits-editorial" })),
];
