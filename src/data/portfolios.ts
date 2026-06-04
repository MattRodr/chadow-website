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
 *  POUR AJOUTER UNE NICHE (ex: headshots, studio) :
 *   1. Ajoute une entrée ci-dessous (slug + titre fr/en)
 *      Tous les champs texte (eyebrow, intro, service, cta...) sont
 *      optionnels — laissés vides, ils ne sont simplement pas affichés.
 *   2. Ajoute son slug dans `hiddenSlugs` (et dans HIDDEN_SLUGS de
 *      astro.config.mjs).
 *   3. Crée src/pages/<slug>.astro et src/pages/fr/<slug>.astro
 *      (copie ceux de weddings, change juste la clé).
 *   4. Crée src/data/cms/<slug>.json avec { "gallery": [] }
 *   5. Ajoute une collection dans public/admin/config.yml
 *      pour pouvoir éditer la galerie via Sveltia.
 * ============================================================
 */

import type { Photo } from "./photos";
import weddingsData from "./cms/weddings.json";
import corporateData from "./cms/corporate.json";
import sportsData from "./cms/sports.json";
import architectureData from "./cms/architecture.json";
import travelData from "./cms/travel.json";

/** Slugs des pages cachées — utilisés pour les exclure du sitemap. */
export const hiddenSlugs = [
  "weddings",
  "corporate",
  "sports",
  "architecture",
  "travel",
];

interface NicheContent {
  title: string;
  eyebrow?: string;
  intro?: string[];
  serviceLabel?: string;
  serviceTitle?: string;
  serviceCopy?: string;
  includesLabel?: string;
  includes?: string[];
  ctaLabel?: string;
  ctaNote?: string;
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
      title: "Weddings & Celebrations",
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
      title: "Mariages & Célébrations",
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
    // Galerie éditable via /admin → src/data/cms/weddings.json
    gallery: weddingsData.gallery,
  },

  corporate: {
    slug: "corporate",
    en: { title: "Corporate & Brand" },
    fr: { title: "Corporate & Brand" },
    gallery: corporateData.gallery,
  },

  sports: {
    slug: "sports",
    en: { title: "Sports & Action" },
    fr: { title: "Sports & Action" },
    gallery: sportsData.gallery,
  },

  architecture: {
    slug: "architecture",
    en: { title: "Architecture & Real Estate" },
    fr: { title: "Architecture & Real Estate" },
    gallery: architectureData.gallery,
  },

  travel: {
    slug: "travel",
    en: { title: "Travel & Tourism" },
    fr: { title: "Travel & Tourism" },
    gallery: travelData.gallery,
  },
};
