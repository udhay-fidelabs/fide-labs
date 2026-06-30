import type { Metadata } from "next";
import AboutPage from "../components/pages/AboutPage";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "FIDE Labs builds FIDE, a Shopify app that helps B2B and wholesale merchants capture quote requests instead of losing buyers. Learn about our mission and approach.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
