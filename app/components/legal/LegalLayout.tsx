"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

export type LegalSection = { id: string; title: string; body: ReactNode };

interface Props {
  title: string;
  intro: string;
  updated: string;
  effective: string;
  sections: LegalSection[];
  /** Optional product context (for per-product policy pages). */
  eyebrow?: string;
  backHref?: string;
  backLabel?: string;
}

export default function LegalLayout({
  title,
  intro,
  updated,
  effective,
  sections,
  eyebrow,
  backHref,
  backLabel,
}: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  // Scroll-spy — highlight the section currently in view.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <div className="page active lgl">
      <header className="lgl-hero">
        <div className="lgl-hero-inner">
          {backHref ? (
            <Link href={backHref} className="lgl-back">
              ← {backLabel ?? "Back"}
            </Link>
          ) : null}
          {eyebrow ? <span className="lgl-eyebrow">{eyebrow}</span> : null}
          <h1 className="lgl-title">{title}</h1>
          <p className="lgl-intro">{intro}</p>
        </div>
      </header>

      <div className="lgl-body">
        <aside className="lgl-toc-wrap" aria-label="On this page">
          <nav className="lgl-toc">
            <div className="lgl-toc-title">On this page</div>
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={"lgl-toc-link" + (activeId === s.id ? " active" : "")}
                aria-current={activeId === s.id ? "true" : undefined}
                onClick={() => scrollTo(s.id)}
              >
                {s.title}
              </button>
            ))}
          </nav>
        </aside>

        <article className="lgl-content">
          <div className="lgl-meta">
            <span className="lgl-meta-chip">Last updated · {updated}</span>
            <span className="lgl-meta-chip">Effective · {effective}</span>
          </div>
          {sections.map((s) => (
            <section className="lgl-section" id={s.id} key={s.id}>
              <h2 className="lgl-h2">{s.title}</h2>
              <div className="lgl-prose">{s.body}</div>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
