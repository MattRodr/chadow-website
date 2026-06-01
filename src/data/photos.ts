/**
 * ============================================================
 *  PHOTOS — Source unique de TOUTES les images du site
 * ============================================================
 *
 *  ⚠️  Les photos se gèrent désormais via l'interface d'admin :
 *      → chadow.photo/admin   (glisser-déposer, par section)
 *
 *  Ce fichier ne fait que LIRE les données JSON éditées par le CMS
 *  (dossier src/data/cms/). Tu peux toujours éditer ces JSON à la
 *  main si besoin — mais l'interface /admin est faite pour ça.
 *
 *  Fichiers de données (éditables) :
 *    src/data/cms/home.json       → galerie d'accueil
 *    src/data/cms/featured.json   → photos vedettes (about, approche, contact)
 *    src/data/cms/services.json   → 1 image par service
 *    src/data/cms/portfolio.json  → grille du portfolio
 *    src/data/cms/weddings.json   → galerie de la page Mariage
 *
 *  La carte complète des emplacements est dans PHOTOS.md.
 * ============================================================
 */

import homeData from "./cms/home.json";
import featuredData from "./cms/featured.json";
import serviceData from "./cms/services.json";
import portfolioData from "./cms/portfolio.json";

export interface Photo {
  src: string;
  alt: string;
  context?: string;
}

/* ---------- LOGO ---------- */
export const brandLogo = "/brand/chadow-logo.png";

/* ---------- ACCUEIL — galerie défilante ---------- */
export const homePhotos: Photo[] = homeData.gallery;

/* ---------- PHOTOS VEDETTES ---------- */
export const featuredImages = featuredData;

/* ---------- SERVICES — 2 images par service ---------- */
export const serviceImages = serviceData;

/* ---------- PORTFOLIO ---------- */
export const portfolioItems = portfolioData.items;
