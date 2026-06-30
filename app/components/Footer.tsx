"use client";

import Link from "next/link";
import LogoMark from "./LogoMark";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "All products", href: "/products" },
      { label: "FIDE Quote Request", href: "/products/fide-quote-request" },
      { label: "Documentation", href: "/docs" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "GDPR Compliance", href: "/gdpr" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="shared-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-brand" aria-label="FIDE Labs home">
            <LogoMark size={34} />
            <div className="logo-text" style={{ color: "#fff" }}>
              FIDE<span style={{ color: "var(--teal)" }}>Labs</span>
            </div>
          </Link>
          <div className="footer-desc">
            FIDE turns your Shopify store into a proper B2B quoting tool — add a
            Request a Quote button, hide prices from guests, and manage every
            request from one clean dashboard.
          </div>
          <a className="footer-contact-link" href="mailto:support@fidelabs.io">
            support@fidelabs.io
          </a>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="footer-col-title">{col.title}</div>
            {col.links.map((l) => (
              <Link key={l.label} className="footer-link" href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © {year} FIDE Labs (OPC) Private Limited. All rights reserved.
        </div>
        <div className="footer-copy">Built for Shopify merchants.</div>
      </div>
    </footer>
  );
}
