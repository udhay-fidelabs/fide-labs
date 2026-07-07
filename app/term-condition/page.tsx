import type { Metadata } from "next";
import TermsPage from "../components/pages/TermsPage";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms & Conditions",
  description:
    "The terms governing your use of FIDE: eligibility, the service, licensing, data, liability, and termination.",
  path: "/term-condition",
});

export default function Page() {
  return <TermsPage />;
}
