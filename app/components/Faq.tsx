"use client";

import { useState } from "react";
import Icon from "./Icon";
import type { FaqItem } from "../lib/faq";

/**
 * Shared FAQ design — single source of truth for the accordion look used on the
 * Home page and reused across the site (Product details, etc.). `FaqList`
 * renders just the items; `FaqBlock` wraps them with the standard intro header.
 */
function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`faq2-item${open ? " open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="faq2-q"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <span className="faq2-qtext">{item.q}</span>
        <span className="faq2-ic" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </span>
      </button>
      <div className="faq2-a"><div className="faq2-a-inner"><p>{item.a}</p></div></div>
    </div>
  );
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq2-list">
      {items.map((item) => (
        <FaqRow key={item.q} item={item} />
      ))}
    </div>
  );
}

export function FaqBlock({
  items,
  title,
  desc,
}: {
  items: FaqItem[];
  title?: React.ReactNode;
  desc?: string;
}) {
  return (
    <section>
      <div className="faq2-wrap reveal">
        <div className="faq2-intro">
          <span className="faq2-eyebrow">
            <span className="faq2-eyebrow-ic"><Icon name="book" size={12} /></span>
            Frequently asked questions
          </span>
          <h2 className="faq2-title">
            {title ?? (
              <>
                Frequently asked<br />
                <span className="faq2-accent">questions</span>
              </>
            )}
          </h2>
          <p className="faq2-desc">
            {desc ??
              "Everything you need to know about FIDE — plans, setup, security, and theme support. Can't find your answer? Our team replies within a day."}
          </p>
        </div>
        <FaqList items={items} />
      </div>
    </section>
  );
}
