import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "../../../lib/seo";
import { PRODUCTS, getProduct } from "../../../lib/products";
import PrivacyPage from "../../../components/pages/PrivacyPage";
import TermsPage from "../../../components/pages/TermsPage";
import GdprPage from "../../../components/pages/GdprPage";
import CookiesPage from "../../../components/pages/CookiesPage";

const POLICIES = {
  privacy: { label: "Privacy Policy", Comp: PrivacyPage },
  terms: { label: "Terms & Conditions", Comp: TermsPage },
  gdpr: { label: "GDPR Compliance", Comp: GdprPage },
  cookies: { label: "Cookie Policy", Comp: CookiesPage },
} as const;

type PolicyKey = keyof typeof POLICIES;

export function generateStaticParams() {
  return PRODUCTS.flatMap((p) =>
    (Object.keys(POLICIES) as PolicyKey[]).map((policy) => ({ slug: p.slug, policy }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; policy: string }>;
}): Promise<Metadata> {
  const { slug, policy } = await params;
  const product = getProduct(slug);
  const entry = POLICIES[policy as PolicyKey];
  if (!product || !entry) return { title: "Not found" };
  return pageMeta({
    title: `${product.name} — ${entry.label}`,
    description: `${entry.label} for ${product.name} by FIDE Labs.`,
    path: `/products/${slug}/${policy}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; policy: string }>;
}) {
  const { slug, policy } = await params;
  const product = getProduct(slug);
  const entry = POLICIES[policy as PolicyKey];
  if (!product || !entry) notFound();

  const { Comp } = entry;
  return (
    <Comp
      eyebrow={product.name}
      backHref={`/products/${product.slug}`}
      backLabel={`Back to ${product.name}`}
    />
  );
}
