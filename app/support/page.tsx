import type { Metadata } from "next";
import SupportPage from "../components/pages/SupportPage";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Help & Support",
  description:
    "Get help with FIDE — setup guides, common questions, and how to reach our team at support@fidelabs.io.",
  path: "/support",
});

export default function Page() {
  return <SupportPage />;
}
