"use client";

import type { PageProps } from "../types";

export default function AboutPage({ showPage }: PageProps) {
  return (
    <div className="page active" id="page-about">
      {/* HERO */}
      <section className="hero" style={{ paddingBottom: "40px" }}>
        <div className="badge"><span className="badge-dot"></span> Our Story</div>
        <h1 className="hero-title">Building Better<br /><span className="accent">Shopify Experiences</span></h1>
        <p className="hero-sub">FIDE Labs creates merchant-first Shopify applications that help businesses generate more leads, streamline workflows, and grow revenue.</p>
      </section>

      {/* METRICS */}
      <section style={{ background: "var(--gray-50)" }}>
        <div className="metric-row reveal">
          <div className="metric-item"><div className="metric-num">500+</div><div className="metric-label">Merchants Trust Us</div></div>
          <div className="metric-item"><div className="metric-num">50K+</div><div className="metric-label">Quotes Processed</div></div>
          <div className="metric-item"><div className="metric-num">99.9%</div><div className="metric-label">Uptime SLA</div></div>
          <div className="metric-item"><div className="metric-num">&lt;24h</div><div className="metric-label">Support Response</div></div>
        </div>
      </section>

      {/* OUR STORY */}
      <section>
        <div className="story-grid reveal">
          <div>
            <div className="section-label">Our Story</div>
            <div className="section-title">Why FIDE Labs<br />Was Built</div>
            <p style={{ fontSize: "16px", color: "var(--gray-600)", lineHeight: "1.8", marginBottom: "16px" }}>FIDE Labs was born from a simple frustration: Shopify&apos;s default checkout flow wasn&apos;t designed for B2B merchants. Wholesale buyers need to negotiate prices, request custom quotes, and manage complex orders — none of which the standard store handles well.</p>
            <p style={{ fontSize: "16px", color: "var(--gray-600)", lineHeight: "1.8", marginBottom: "16px" }}>We built FIDE to solve this gap. Starting with a single app — FIDE Request Quote — we set out to create the most polished, merchant-first B2B toolset in the Shopify ecosystem.</p>
            <p style={{ fontSize: "16px", color: "var(--gray-600)", lineHeight: "1.8" }}>Today, hundreds of merchants use FIDE to power their wholesale and B2B operations, and we&apos;re just getting started.</p>
          </div>
          <div className="story-visual">🏗️</div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ background: "linear-gradient(135deg,var(--dark),#0d1a3d)", textAlign: "center" }}>
        <div className="reveal">
          <div className="section-label" style={{ color: "var(--teal)" }}>Our Mission</div>
          <div className="section-title" style={{ color: "#fff", fontSize: "clamp(28px,4vw,52px)" }}>&quot;Build simple products that<br />solve complex merchant problems.&quot;</div>
          <p style={{ color: "rgba(255,255,255,.6)", fontSize: "18px", maxWidth: "560px", margin: "0 auto" }}>We believe the best software disappears into the background, letting merchants focus on what matters: growing their business.</p>
        </div>
      </section>

      {/* VALUES */}
      <section>
        <div className="text-center reveal">
          <div className="section-label">Our Values</div>
          <div className="section-title">What We Stand For</div>
        </div>
        <div className="values-grid reveal">
          <div className="value-card"><div className="value-icon">❤️</div><div className="value-title">Merchant First</div><div className="value-desc">Every decision starts with &quot;what does the merchant actually need?&quot; Not what&apos;s impressive, not what&apos;s easy — what works.</div></div>
          <div className="value-card"><div className="value-icon">✨</div><div className="value-title">Simplicity</div><div className="value-desc">Complex problems deserve simple solutions. We hide the complexity so merchants never have to see it.</div></div>
          <div className="value-card"><div className="value-icon">🔒</div><div className="value-title">Reliability</div><div className="value-desc">Merchants depend on us. Our 99.9% uptime SLA and proactive monitoring ensure we never let them down.</div></div>
          <div className="value-card"><div className="value-icon">🚀</div><div className="value-title">Continuous Improvement</div><div className="value-desc">We ship improvements every week based on merchant feedback. The app you install today will be better tomorrow.</div></div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-dark">
        <h2>Ready to Improve<br />Your Shopify Store?</h2>
        <p>Join merchants who are growing their B2B revenue with FIDE Labs.</p>
        <div className="cta-btns">
          <button className="btn-primary" onClick={() => showPage("product")}>🚀 Explore Products</button>
          <button className="btn-secondary" style={{ color: "#fff", borderColor: "rgba(255,255,255,.2)" }} onClick={() => showPage("contact")}>Get in Touch</button>
        </div>
      </div>
    </div>
  );
}
