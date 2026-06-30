import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound-code" aria-hidden="true">
        404
      </div>
      <h1 className="notfound-title">This page took a detour</h1>
      <p className="notfound-sub">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on track.
      </p>
      <div className="notfound-actions">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/docs" className="btn-secondary">
          Read the docs
        </Link>
      </div>
      <div className="notfound-links">
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/support">Support</Link>
      </div>
    </section>
  );
}
