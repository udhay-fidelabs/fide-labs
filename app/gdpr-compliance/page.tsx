import type { Metadata } from "next";
import GdprPage from "../components/pages/GdprPage";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "GDPR Compliance",
  description:
    "How FIDE meets GDPR and UK GDPR: lawful bases, controller/processor roles, data subject rights, sub-processors, international transfers, and Shopify deletion webhooks.",
  path: "/gdpr-compliance",
});

export default function Page() {
  return <GdprPage />;
}
