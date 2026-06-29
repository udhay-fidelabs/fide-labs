"use client";

import { useState } from "react";
import Icon from "../Icon";

function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
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
        <span className="faq2-qtext">{question}</span>
        <span className="faq2-ic" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </span>
      </button>
      <div className="faq2-a"><div className="faq2-a-inner">{children}</div></div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section>
      <div className="faq2-wrap reveal">
        <div className="faq2-intro">
          <span className="faq2-eyebrow"><span className="faq2-eyebrow-ic"><Icon name="book" size={12} /></span>Frequently asked questions</span>
          <h2 className="faq2-title">Frequently asked<br /><span className="faq2-accent">questions</span></h2>
          <p className="faq2-desc">Everything you need to know about FIDE — plans, setup, security, and theme support. Can&apos;t find your answer? Our team replies within a day.</p>
        </div>
        <div className="faq2-list">
          <FaqItem question="What Shopify plans does FIDE work with?">
            <p>FIDE works with all Shopify plans including Basic, Shopify, Advanced, and Shopify Plus. Some enterprise features require Shopify Plus.</p>
          </FaqItem>
          <FaqItem question="Is there a free plan?">
            <p>Yes! Our Starter plan is completely free with up to 50 quote requests per month. No credit card required to get started.</p>
          </FaqItem>
          <FaqItem question="How long does setup take?">
            <p>Most merchants are live the same afternoon. One click adds FIDE to your theme, smart defaults handle the config, and the guided walkthrough takes under 10 minutes.</p>
          </FaqItem>
          <FaqItem question="Do my customers need an account to request a quote?">
            <p>No. Shoppers request a quote straight from the product page, and they accept your offer through a secure link — no login or signup required.</p>
          </FaqItem>
          <FaqItem question="Can I set different prices for different customers?">
            <p>Yes. Set custom pricing, volume discounts, and terms per quote, or save reusable templates for your regular wholesale buyers.</p>
          </FaqItem>
          <FaqItem question="Can I customize the quote request form?">
            <p>Absolutely. Our Form Builder lets you add custom fields, set required fields, and match the form design to your store&apos;s branding.</p>
          </FaqItem>
          <FaqItem question="Does it work with my theme?">
            <p>FIDE is compatible with all Shopify 2.0 themes and most legacy themes. Our theme detection engine adapts automatically.</p>
          </FaqItem>
          <FaqItem question="What support do you offer?">
            <p>Every plan includes email support with a same-day reply on weekdays. Advanced and Plus merchants get priority support and onboarding help.</p>
          </FaqItem>
        </div>
      </div>
    </section>
  );
}
