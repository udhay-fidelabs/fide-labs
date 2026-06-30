import type { Metadata } from "next";
import PrivacyPage from "../components/pages/PrivacyPage";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How FIDE Labs collects, uses, stores, and protects merchant and customer data, your GDPR rights, sub-processors, and Shopify privacy webhooks.",
  path: "/privacy",
});

export default function Page() {
  return <PrivacyPage />;
}
