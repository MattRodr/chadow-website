/**
 * ============================================================
 *  PORTFOLIOS PRIVÉS — pages cachées par niche
 * ============================================================
 *
 *  Ces pages sont accessibles UNIQUEMENT par lien direct :
 *   - pas affichées dans le menu du site
 *   - non référencées par Google (noindex)
 *   - exclues du sitemap.xml
 *
 *  POUR AJOUTER UNE NICHE (ex: headshots, corporate, studio) :
 *   1. Ajoute une entrée ci-dessous (en + fr + gallery)
 *   2. Ajoute son slug dans `hiddenSlugs`
 *   3. Crée src/pages/<slug>.astro et src/pages/fr/<slug>.astro
 *      (copie ceux de weddings, change juste la clé)
 *
 *  POUR LES PHOTOS d'une niche :
 *   - dépose-les dans public/images/<slug>/
 *   - liste-les dans `gallery` ci-dessous
 * ============================================================
 */

import type { Photo } from "./photos";

/** Slugs des pages cachées — utilisés pour les exclure du sitemap. */
export const hiddenSlugs = ["weddings"];

interface NicheContent {
  eyebrow: string;
  title: string;
  intro: string[];
  serviceLabel: string;
  serviceTitle: string;
  serviceCopy: string;
  includesLabel: string;
  includes: string[];
  ctaLabel: string;
  ctaNote: string;
}

interface NichePage {
  slug: string;
  en: NicheContent;
  fr: NicheContent;
  gallery: Photo[];
}

export const portfolios: Record<string, NichePage> = {
  weddings: {
    slug: "weddings",
    en: {
      eyebrow: "Private collection · By invitation",
      title: "Weddings",
      intro: [
        "The same instinct I bring to a stage — present, discreet, fast — turned toward the most personal day of your life.",
        "I don't interrupt the moment. I find the look between two people and make sure it's never lost. Natural, timeless, emotion first — no stiff poses, no staged smiles. Just your day, as it actually felt.",
      ],
      serviceLabel: "The experience",
      serviceTitle: "Documented, never directed.",
      serviceCopy:
        "I move quietly through the day, close to the energy, capturing the real moments as they unfold — the glances, the tears, the dancefloor at 1am. You get a story, not a catalogue of poses.",
      includesLabel: "What's included",
      includes: [
        "Discreet, full-day coverage",
        "Story-driven edited gallery",
        "Color and black & white edits",
        "Print-ready & web exports",
        "Private online delivery",
        "Second shooter available on request",
      ],
      ctaLabel: "Book your wedding",
      ctaNote: "Tell me your date and venue — I reply within 24 hours.",
    },
    fr: {
      eyebrow: "Collection privée · Sur invitation",
      title: "Mariages",
      intro: [
        "Le même instinct que sur scène — présent, discret, rapide — tourné vers le jour le plus personnel de votre vie.",
        "Je n'interromps pas le moment. Je trouve le regard entre deux personnes et veille à ce qu'il ne soit jamais perdu. Naturel, intemporel, l'émotion avant tout — pas de poses figées, pas de sourires forcés. Juste votre journée, telle qu'elle a été vécue.",
      ],
      serviceLabel: "L'expérience",
      serviceTitle: "Documenté, jamais dirigé.",
      serviceCopy:
        "Je traverse la journée en silence, au plus près de l'énergie, captant les vrais moments à mesure qu'ils arrivent — les regards, les larmes, le dancefloor à 1h du matin. Vous repartez avec une histoire, pas un catalogue de poses.",
      includesLabel: "Ce qui est inclus",
      includes: [
        "Couverture discrète sur toute la journée",
        "Galerie éditée et narrative",
        "Éditions couleur et noir & blanc",
        "Exports print & web",
        "Livraison en ligne privée",
        "Second photographe sur demande",
      ],
      ctaLabel: "Réserver votre mariage",
      ctaNote: "Indiquez-moi votre date et le lieu — je réponds sous 24 h.",
    },
    // TEMP : photos d'exemple. Remplace par de vraies photos de mariage
    // (dépose-les dans public/images/weddings/ et mets à jour les chemins).
    gallery: [
      { src: "/images/home/choses-sauvages-club-soda-2025.jpg", alt: "Moment" },
      { src: "/images/work/super-plage-francos-2025.jpg",       alt: "Moment" },
      { src: "/images/home/elderbrook-mtelus-2025.jpg",         alt: "Moment" },
      { src: "/images/work/backwash-sat-2025.jpg",              alt: "Moment" },
      { src: "/images/home/fakear-fairmount-2024.jpg",          alt: "Moment" },
      { src: "/images/home/cirque-luzia-2025.jpg",              alt: "Moment" },
    ],
  },
};
