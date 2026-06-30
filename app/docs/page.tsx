import type { Metadata } from "next";
import DocsPage from "../components/pages/DocsPage";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Documentation",
  description:
    "Set up FIDE on your Shopify store: install the app, enable the theme extension, configure Request Quote and Hide Price, set up email notifications, and submit a test quote.",
  path: "/docs",
});

const FAQ = [
  { q: "Do I need to edit theme code?", a: "No. FIDE installs as a theme app extension — enable it in the theme editor's App Embeds section and you're set." },
  { q: "Can I hide prices for some customers but not others?", a: "Yes. You can hide prices on individual products, whole collections, or your entire store, depending on how you sell." },
  { q: "Which email providers are supported?", a: "Gmail SMTP, Elastic Email, and any custom SMTP server. Send a test email before going live." },
  { q: "Is a quote request an order?", a: "No. A quote request is an inquiry. Any binding agreement for the sale of goods is made directly between you and your customer." },
  { q: "How do I get support?", a: "Email support@fidelabs.io. We aim to respond within one business day." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <DocsPage />
    </>
  );
}
