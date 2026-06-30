import type { Metadata } from "next";
import TermsPage from "../components/pages/TermsPage";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms & Conditions",
  description:
    "The terms governing your use of FIDE: eligibility, the service, licensing, billing, data, liability, and termination.",
  path: "/terms",
});

export default function Page() {
  return <TermsPage />;
}
