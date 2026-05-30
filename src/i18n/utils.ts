import { translations, type Lang } from "./translations";

/** Get the current locale from Astro context (defaults to "en"). */
export function getLang(astro: { currentLocale?: string | undefined }): Lang {
  return (astro.currentLocale as Lang) || "en";
}

/** Get the translation tree for a given locale. */
export function getT(lang: Lang) {
  return translations[lang];
}

/** Build a locale-aware path. e.g. localePath("en", "/about") => "/about", localePath("fr", "/about") => "/fr/about". */
export function localePath(lang: Lang, path: string): string {
  if (lang === "en") return path;
  if (path === "/") return "/fr/";
  return `/fr${path.startsWith("/") ? "" : "/"}${path}`;
}

/** The "other" locale, useful for the language switcher. */
export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "fr" : "en";
}

/** Convert a current pathname to the equivalent in the other locale. */
export function switchLocaleHref(currentPath: string, currentLang: Lang): string {
  const target = otherLang(currentLang);
  // Normalize: remove leading /fr if present
  const normalized = currentPath.replace(/^\/fr(\/|$)/, "/");
  if (target === "en") return normalized;
  return normalized === "/" ? "/fr/" : `/fr${normalized}`;
}
