import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "./lib/routes";
import { PRODUCTS } from "./lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const priority: Record<string, number> = {
    "/": 1,
    "/products": 0.9,
    "/docs": 0.8,
    "/contact": 0.7,
    "/about": 0.6,
    "/support": 0.6,
  };

  const staticEntries: MetadataRoute.Sitemap = Object.values(ROUTES).map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path.match(/privacy|term-condition|gdpr-compliance|cookies/) ? "yearly" : "monthly",
    priority: priority[path] ?? 0.5,
  }));

  const productEntries: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const policyEntries: MetadataRoute.Sitemap = PRODUCTS.flatMap((p) =>
    ["privacy", "terms", "gdpr", "cookies"].map((policy) => ({
      url: `${SITE_URL}/products/${p.slug}/${policy}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    }))
  );

  return [...staticEntries, ...productEntries, ...policyEntries];
}
