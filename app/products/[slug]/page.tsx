import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "../../components/pages/ProductDetail";
import { pageMeta } from "../../lib/seo";
import { SITE_URL } from "../../lib/routes";
import { PRODUCTS, getProduct } from "../../lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return pageMeta({
    title: `${product.name} — ${product.tagline}`,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Shopify",
    description: product.summary,
    url: `${SITE_URL}/products/${product.slug}`,
    publisher: { "@type": "Organization", name: "FIDE Labs" },
    offers: {
      "@type": "Offer",
      description: "Pricing is determined per quote request based on requirements.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetail product={product} />
    </>
  );
}
