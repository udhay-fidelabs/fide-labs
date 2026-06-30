import type { Metadata } from "next";
import { SITE_URL } from "./routes";

const SITE_NAME = "FIDE Labs";
const DEFAULT_OG = "/opengraph-image";

interface PageMetaInput {
  title: string;
  description: string;
  path: string; // canonical path, e.g. "/product"
  /** Override the default title template (which appends "· FIDE Labs"). */
  absoluteTitle?: boolean;
}

/**
 * Builds consistent per-route Metadata: canonical URL, Open Graph, and Twitter
 * cards. Keeps every page's SEO block short and uniform.
 */
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url,
      title,
      description,
      images: [{ url: DEFAULT_OG, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG],
    },
  };
}
