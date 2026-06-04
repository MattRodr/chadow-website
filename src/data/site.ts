/**
 * Site structure & language-neutral data.
 *
 *  ⚠️  Les PHOTOS ne se gèrent pas ici → voir src/data/photos.ts
 *  Les TEXTES traduisibles → voir src/i18n/translations.ts
 */

import { homePhotos, recentPhotos, featuredImages, serviceImages, portfolioItems, brandLogo } from "./photos";

// Re-exports so components keep a single import surface.
export { homePhotos, recentPhotos, featuredImages, portfolioItems, brandLogo };

export const site = {
  name: "CHADOW",
  owner: "Ambre Bangoura",
  email: "contact@chadow.photo",
  instagram: "https://www.instagram.com/chadow.photo/",
  instagramHandle: "@chadow.photo",
  url: "https://chadow.photo",
  description: "Event & Music Photographer based in Montréal.",
  // Image affichée quand on partage le site (réseaux sociaux, iMessage…)
  ogImage: "/og-image.jpg",
};

export const trustedBy = [
  { name: "IGLOOFEST" },
  { name: "OSHEAGA" },
  { name: "Centre Bell",       italic: true, accent: "Bell" },
  { name: "MTELUS" },
  { name: "Piknic Électronik" },
];

export const workedWith = [
  "NTO",
  "Sébastien Léger",
  "Fakear",
  "Tali",
  "Sinca",
  "Järes",
];

/**
 * Services structure (slug, work filter, CTA). Images pulled from photos.ts.
 * To change a service PHOTO → edit serviceImages in src/data/photos.ts.
 */
export const services = [
  {
    slug: "live-nightlife-coverage",
    workFilter: "live-stage",
    ctaKey: "bookEvent",
    cardImage:   serviceImages["live-nightlife-coverage"].card,
    detailImage: serviceImages["live-nightlife-coverage"].detail,
  },
  {
    slug: "portraits-editorial",
    workFilter: "portraits-editorial",
    ctaKey: "bookSession",
    cardImage:   serviceImages["portraits-editorial"].card,
    detailImage: serviceImages["portraits-editorial"].detail,
  },
  {
    slug: "event-coverage",
    workFilter: "live-stage",
    ctaKey: "bookEvent",
    cardImage:   serviceImages["event-coverage"].card,
    detailImage: serviceImages["event-coverage"].detail,
  },
  {
    slug: "video-content",
    workFilter: "all",
    ctaKey: "discussVideo",
    cardImage:   serviceImages["video-content"].card,
    detailImage: serviceImages["video-content"].detail,
  },
] as const;

export const portfolioCategories = ["all", "live-stage", "nightlife", "portraits-editorial"] as const;
