"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../Icon";
import LogoMark from "../LogoMark";
import Markdown, { slugify } from "../Markdown";
import { PRODUCTS } from "../../lib/products";

type Heading = { id: string; text: string };

/** Pull the `##` headings out of a section's Markdown for the "On this page" rail. */
function headingsOf(md: string): Heading[] {
  return md
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => /^##\s+/.test(l))
    .map((l) => {
      const text = l.replace(/^##\s+/, "").replace(/\*\*/g, "").trim();
      return { id: slugify(text), text };
    });
}

export default function DocsPage() {
  // Docs are organized by product. The site ships one product today; its docs
  // drive this page. Additional products would surface under "Related products".
  const product = PRODUCTS[0];
  const [activeKey, setActiveKey] = useState(product.docs[0].key);
  const [query, setQuery] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [activeHeading, setActiveHeading] = useState("");

  const active = product.docs.find((s) => s.key === activeKey) ?? product.docs[0];
  const idx = product.docs.findIndex((s) => s.key === active.key);
  const prev = idx > 0 ? product.docs[idx - 1] : null;
  const next = idx < product.docs.length - 1 ? product.docs[idx + 1] : null;
  const headings = useMemo(() => headingsOf(active.md), [active.md]);

  // Filter the nav by the search box (matches section label or its group).
  const q = query.trim().toLowerCase();
  const visible = q
    ? product.docs.filter(
        (s) => s.label.toLowerCase().includes(q) || s.group.toLowerCase().includes(q)
      )
    : product.docs;
  const groups = useMemo(() => [...new Set(visible.map((s) => s.group))], [visible]);
  const related = PRODUCTS.filter((p) => p.slug !== product.slug);

  const go = (key: string) => {
    setActiveKey(key);
    setActiveHeading("");
    setNavOpen(false);
    document.getElementById("docs-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Scroll-spy: highlight the TOC entry for the heading nearest the top.
  useEffect(() => {
    if (headings.length < 2) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const onscreen = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (onscreen[0]) setActiveHeading(onscreen[0].target.id);
      },
      { rootMargin: "-96px 0px -66% 0px", threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings, activeKey]);

  // Lock body scroll while the mobile nav drawer is open.
  useEffect(() => {
    if (!navOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [navOpen]);

  const nav = (
    <>
      <div className="docs-nav-head">
        <span className="docs-nav-eyebrow">Documentation</span>
        <div className="docs-nav-product">
          <LogoMark size={18} />
          <span>{product.name}</span>
        </div>
        <button
          type="button"
          className="docs-nav-close"
          onClick={() => setNavOpen(false)}
          aria-label="Close menu"
        >
          <Icon name="x" size={18} />
        </button>
      </div>

      <div className="docs-search-wrap">
        <Icon name="search" size={15} className="docs-search-icon" />
        <input
          className="docs-search-input"
          type="search"
          placeholder="Search docs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search documentation"
        />
      </div>

      <nav className="docs-nav-scroll" aria-label="Documentation sections">
        {groups.length === 0 && (
          <p className="docs-nav-empty">No sections match &ldquo;{query}&rdquo;.</p>
        )}
        {groups.map((group) => (
          <div className="docs-nav-group" key={group}>
            <div className="docs-nav-title">{group}</div>
            {visible
              .filter((s) => s.group === group)
              .map((s) => (
                <button
                  key={s.key}
                  type="button"
                  aria-current={activeKey === s.key ? "true" : undefined}
                  className={"docs-nav-link" + (activeKey === s.key ? " active" : "")}
                  onClick={() => go(s.key)}
                >
                  {s.label}
                </button>
              ))}
          </div>
        ))}

        {related.length > 0 && (
          <div className="docs-nav-group">
            <div className="docs-nav-title">Related products</div>
            {related.map((r) => (
              <Link key={r.slug} href={`/products/${r.slug}`} className="docs-nav-link">
                {r.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );

  return (
    <div className="page active docs-page" id="page-docs">
      {/* Mobile bar: current section + open-drawer trigger */}
      <div className="docs-mobilebar">
        <button
          type="button"
          className="docs-menu-btn"
          onClick={() => setNavOpen(true)}
          aria-expanded={navOpen}
          aria-controls="docs-nav"
        >
          <Icon name="menu" size={16} /> All docs
        </button>
        <span className="docs-mobilebar-current">{active.label}</span>
      </div>

      <div className="docs-shell">
        {navOpen && (
          <button
            type="button"
            className="docs-nav-backdrop"
            aria-label="Close menu"
            onClick={() => setNavOpen(false)}
          />
        )}

        <aside
          id="docs-nav"
          className={"docs-nav" + (navOpen ? " open" : "")}
          aria-label="Documentation navigation"
        >
          {nav}
        </aside>

        <main className="docs-content" id="docs-top">
          <article className="docs-article">
            <div className="docs-eyebrow">{active.group}</div>

            <Markdown source={active.md} />

            {(prev || next) && (
              <nav className="docs-prevnext" aria-label="More documentation">
                {prev ? (
                  <button type="button" className="docs-pn docs-pn-prev" onClick={() => go(prev.key)}>
                    <span className="docs-pn-dir">
                      <Icon name="arrow-left" size={13} /> Previous
                    </span>
                    <span className="docs-pn-label">{prev.label}</span>
                  </button>
                ) : (
                  <span />
                )}
                {next ? (
                  <button type="button" className="docs-pn docs-pn-next" onClick={() => go(next.key)}>
                    <span className="docs-pn-dir">
                      Next <Icon name="arrow-right" size={13} />
                    </span>
                    <span className="docs-pn-label">{next.label}</span>
                  </button>
                ) : (
                  <span />
                )}
              </nav>
            )}

            <div className="docs-help">
              <div>
                <strong>Need a hand?</strong>
                <p>Our team is here to help you get set up.</p>
              </div>
              <a className="btn-secondary" href="mailto:support@fidelabs.io">
                <Icon name="mail" size={16} /> support@fidelabs.io
              </a>
            </div>
          </article>
        </main>

        <aside className="docs-toc" aria-label="On this page">
          {headings.length > 1 && (
            <div className="docs-toc-inner">
              <div className="docs-toc-title">On this page</div>
              <ul>
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className={"docs-toc-link" + (activeHeading === h.id ? " active" : "")}
                      onClick={() => setActiveHeading(h.id)}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
