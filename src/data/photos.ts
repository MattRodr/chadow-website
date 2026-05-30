/**
 * ============================================================
 *  PHOTOS — Source unique de TOUTES les images du site
 * ============================================================
 *
 *  POUR CHANGER UNE PHOTO
 *  ----------------------
 *  1. Dépose la nouvelle image dans le bon dossier :
 *       public/images/home/      → page d'accueil
 *       public/images/about/     → page À propos
 *       public/images/work/      → portfolio (page Work)
 *       public/images/services/  → page Services
 *       public/images/contact/   → page Contact
 *       public/brand/            → logo
 *
 *  2. Trouve ci-dessous la SECTION concernée et change le nom
 *     du fichier dans `src:` (et le texte `alt` / `context` si besoin).
 *
 *  3. Enregistre. Le site se met à jour tout seul.
 *
 *  Conseil de nommage des fichiers :
 *     minuscules, sans espaces ni accents
 *     ex :  fakear-fairmount-2024.jpg
 *
 *  La carte complète des emplacements est dans PHOTOS.md (racine du projet).
 * ============================================================
 */

export interface Photo {
  src: string;
  alt: string;
  context?: string;
}

/* ============================================================
 *  LOGO
 * ============================================================ */
export const brandLogo = "/brand/chadow-logo.png";

/* ============================================================
 *  ACCUEIL — galerie défilante du haut (côté droit)
 *  5 à 6 photos. Ce sont aussi celles utilisées dans
 *  "Recent work" et la mosaïque Instagram.
 * ============================================================ */
export const homePhotos: Photo[] = [
  { src: "/images/home/choses-sauvages-club-soda-2025.jpg", alt: "Crowd surfing — Choses Sauvages", context: "Choses Sauvages · Club Soda" },
  { src: "/images/home/hologramme-sat-2025.jpg",            alt: "Hologramme en live au SAT",        context: "Hologramme · SAT" },
  { src: "/images/home/fakear-fairmount-2024.jpg",          alt: "Fakear au Fairmount",              context: "Fakear · Fairmount" },
  { src: "/images/home/elderbrook-mtelus-2025.jpg",         alt: "Elderbrook sur scène",             context: "Elderbrook · MTELUS" },
  { src: "/images/home/cirque-luzia-2025.jpg",              alt: "Cirque du Soleil — LUZIA",         context: "Cirque du Soleil · LUZIA" },
];

/* ============================================================
 *  PHOTOS "VEDETTES" — images uniques utilisées en grand
 * ============================================================ */
export const featuredImages = {
  // Accueil → bloc teaser "I'm Ambre"
  aboutTeaser:   "/images/work/super-plage-francos-2025.jpg",
  // Accueil & À propos → fond de la citation "No staging…"
  approach:      "/images/home/choses-sauvages-club-soda-2025.jpg",
  // À propos → grand portrait en haut de page
  aboutPortrait: "/images/contact/ambre-shooting.jpg",
  // Contact → photo à côté du formulaire
  contact:       "/images/contact/ambre-shooting.jpg",
};

/* ============================================================
 *  SERVICES — 2 images par service
 *    card   = petite vignette (aperçu sur l'accueil)
 *    detail = grande image (page Services)
 * ============================================================ */
export const serviceImages = {
  "live-nightlife-coverage": {
    card:   "/images/home/hologramme-sat-2025.jpg",
    detail: "/images/home/choses-sauvages-club-soda-2025.jpg",
  },
  "portraits-editorial": {
    card:   "/images/home/elderbrook-mtelus-2025.jpg",
    detail: "/images/work/super-plage-francos-2025.jpg",
  },
  "event-coverage": {
    card:   "/images/work/kazy-lambist-club-soda-2025.jpg",
    detail: "/images/home/cirque-luzia-2025.jpg",
  },
  "video-content": {
    card:   "/images/home/fakear-fairmount-2024.jpg",
    detail: "/images/work/backwash-sat-2025.jpg",
  },
} as const;

/* ============================================================
 *  PORTFOLIO — page Work
 *    category : "live-stage" | "nightlife" | "portraits-editorial"
 *    Ajoute / retire des lignes librement.
 * ============================================================ */
export const portfolioItems = [
  { id: 1, category: "live-stage",          src: "/images/work/super-plage-francos-2025.jpg",       title: "Super Plage",              context: "Francos · Juin 2025" },
  { id: 2, category: "live-stage",          src: "/images/home/choses-sauvages-club-soda-2025.jpg", title: "Choses Sauvages",          context: "Club Soda · Avril 2025" },
  { id: 3, category: "live-stage",          src: "/images/home/elderbrook-mtelus-2025.jpg",         title: "Elderbrook",               context: "MTELUS · Avril 2025" },
  { id: 4, category: "nightlife",           src: "/images/home/fakear-fairmount-2024.jpg",          title: "Fakear",                   context: "Fairmount · Novembre 2024" },
  { id: 5, category: "nightlife",           src: "/images/home/hologramme-sat-2025.jpg",            title: "Hologramme",               context: "SAT · Juin 2025" },
  { id: 6, category: "nightlife",           src: "/images/work/kazy-lambist-club-soda-2025.jpg",    title: "Kazy Lambist",             context: "Club Soda · FIJM 2025" },
  { id: 7, category: "live-stage",          src: "/images/work/backwash-sat-2025.jpg",              title: "Backwash",                 context: "SAT · Avril 2025" },
  { id: 8, category: "live-stage",          src: "/images/home/cirque-luzia-2025.jpg",              title: "Cirque du Soleil — LUZIA", context: "Mai 2025" },
  // ── PORTRAITS & EDITORIAL ── (à remplir quand les photos portraits arrivent)
  // { id: 9, category: "portraits-editorial", src: "/images/work/xxx.jpg", title: "…", context: "…" },
] as const;
