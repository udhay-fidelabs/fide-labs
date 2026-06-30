import { redirect } from "next/navigation";

// The catalog now lives at /products. Keep this path working for any old links.
export default function Page() {
  redirect("/products");
}
