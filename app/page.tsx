import type { Metadata } from "next";
import HomePage from "./components/pages/HomePage";
import { pageMeta } from "./lib/seo";
import { SITE_URL } from "./lib/routes";

export const metadata: Metadata = pageMeta({
  title: "FIDE Request Quote Hide Price",
  description:
    "FIDE is a Shopify app for B2B and wholesale merchants. Add a Request a Quote button, hide prices from guests, and manage every quote request from one clean dashboard. No code.",
  path: "/",
  absoluteTitle: true,
});

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FIDE Request Quote Hide Price",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Shopify",
  description:
    "FIDE lets B2B and wholesale Shopify merchants add a Request a Quote button, hide prices, collect quote requests, and respond with custom pricing from one dashboard.",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "FIDE Labs" },
  offers: {
    "@type": "Offer",
    description: "Pricing is determined per quote request based on requirements.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <HomePage />
    </>
  );
}
