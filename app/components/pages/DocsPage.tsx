"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../Icon";
import LogoMark from "../LogoMark";
import Markdown from "../Markdown";
import { PRODUCTS } from "../../lib/products";

export default function DocsPage() {
  // Docs are organized by product. With one product this defaults to it; adding
  // products to lib/products.ts makes them selectable here automatically.
  const [productSlug, setProductSlug] = useState(PRODUCTS[0].slug);
  const product = useMemo(
    () => PRODUCTS.find((p) => p.slug === productSlug) ?? PRODUCTS[0],
    [productSlug]
  );
  const groups = useMemo(
    () => [...new Set(product.docs.map((s) => s.group))],
    [product]
  );
  const [activeKey, setActiveKey] = useState(product.docs[0].key);
  const active = product.docs.find((s) => s.key === activeKey) ?? product.docs[0];
  const related = PRODUCTS.filter((p) => p.slug !== product.slug);

  const switchProduct = (slug: string) => {
    const next = PRODUCTS.find((p) => p.slug === slug);
    if (!next) return;
    setProductSlug(slug);
    setActiveKey(next.docs[0].key);
  };

  const go = (key: string) => {
    setActiveKey(key);
    document.getElementById("docs-main")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page active docs-page" id="page-docs">
      <div className="docs-layout">
        {/* SIDEBAR */}
        <aside className="docs-sidebar" aria-label="Documentation navigation">
          {/* Product selector */}
          <div className="docs-product-select">
            <div className="docs-sidebar-title">Product</div>
            {PRODUCTS.map((p) => (
              <button
                key={p.slug}
                type="button"
                className={"docs-product-chip" + (p.slug === product.slug ? " active" : "")}
                aria-pressed={p.slug === product.slug}
                onClick={() => switchProduct(p.slug)}
              >
                <LogoMark size={20} />
                {p.name}
              </button>
            ))}
          </div>

          {groups.map((group) => (
            <div className="docs-sidebar-section" key={group}>
              <div className="docs-sidebar-title">{group}</div>
              {product.docs.filter((s) => s.group === group).map((s) => (
                <button
                  key={s.key}
                  type="button"
                  aria-current={activeKey === s.key ? "true" : undefined}
                  className={"docs-sidebar-link" + (activeKey === s.key ? " active" : "")}
                  onClick={() => go(s.key)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          ))}

          {/* Related products */}
          <div className="docs-sidebar-section">
            <div className="docs-sidebar-title">Related products</div>
            {related.length > 0 ? (
              related.map((r) => (
                <Link key={r.slug} href={`/products/${r.slug}`} className="docs-sidebar-link">
                  {r.name}
                </Link>
              ))
            ) : (
              <p className="docs-related-empty">More FIDE apps coming soon.</p>
            )}
          </div>
        </aside>

        {/* MAIN */}
        <div className="docs-main" id="docs-main">
          <Markdown source={active.md} />

          <div className="docs-help">
            <div>
              <strong>Need a hand?</strong>
              <p>Our team is here to help you get set up.</p>
            </div>
            <a className="btn-secondary" href="mailto:support@fidelabs.io">
              <Icon name="mail" size={16} /> support@fidelabs.io
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
