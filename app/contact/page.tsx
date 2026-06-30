import type { Metadata } from "next";
import ContactPage from "../components/pages/ContactPage";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Questions, feedback, or partnership ideas? Reach the FIDE Labs team. We aim to respond within one business day.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
