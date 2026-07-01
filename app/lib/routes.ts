/**
 * Single source of truth mapping internal page keys (used throughout the
 * components) to real App Router paths. Keeping the key→path map in one place
 * lets the Navbar, Footer, and every CTA stay in sync with the routes.
 */
export const ROUTES = {
  home: "/",
  products: "/products",
  about: "/about",
  contact: "/contact",
  support: "/support",
  docs: "/docs",
  privacy: "/privacy-policy",
  terms: "/terms",
  gdpr: "/gdpr",
  cookies: "/cookies",
} as const;

export type PageKey = keyof typeof ROUTES;

// Legacy/alias keys used by older components (e.g. Home CTAs call showPage("product")).
const ALIASES: Record<string, string> = {
  product: "/products",
};

export const SITE_URL = "https://fidelabs.io";

/** Resolve a page key (or raw path) to a concrete path. */
export function hrefFor(key: string): string {
  if (key.startsWith("/")) return key;
  return ROUTES[key as PageKey] ?? ALIASES[key] ?? "/";
}
