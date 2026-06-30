import type { Metadata } from "next";
import CookiesPage from "../components/pages/CookiesPage";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description:
    "FIDE uses only strictly necessary cookies and functional local storage — no analytics, advertising, or third-party tracking cookies. Details on what we store and why.",
  path: "/cookies",
});

export default function Page() {
  return <CookiesPage />;
}
