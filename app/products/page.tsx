import type { Metadata } from "next";
import ProductsListing from "../components/pages/ProductsListing";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Products",
  description:
    "Shopify apps by FIDE Labs — merchant-first tools for B2B and wholesale stores. Explore FIDE Request Quote Hide Price: Request a Quote, Hide Price, and quote management.",
  path: "/products",
});

export default function Page() {
  return <ProductsListing />;
}
