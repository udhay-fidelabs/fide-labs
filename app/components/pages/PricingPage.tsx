"use client";

import type { PageProps } from "../types";
import { useState } from "react";

export default function PricingPage({ showPage, showToast }: PageProps) {
  const [yearly, setYearly] = useState(false);

  const toggleFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.parentElement?.classList.toggle("open");
  };

  return (
    <div className="page active" id="page-pricing">
      <section className="hero" style={{ paddingBottom: "20px" }}>
        <div className="badge">
          <span className="badge-dot"></span> Simple, Transparent Pricing
        </div>
        <h1 className="hero-title">
          Simple Pricing for<br />
          <span className="accent">Growing Merchants</span>
        </h1>
        <p className="hero-sub">
          Everything you need to manage quote requests and B2B workflows. Start free, scale as you grow.
        </p>
        <div className="pricing-toggle">
          <span className="toggle-label">Monthly</span>
          <div
            className={`toggle-switch${yearly ? " yearly" : ""}`}
            id="billingToggle"
            onClick={() => setYearly((y) => !y)}
          >
            <div className="toggle-knob"></div>
          </div>
          <span className="toggle-label">
            Yearly <span className="save-badge">Save 20%</span>
          </span>
        </div>
      </section>

      <section style={{ paddingTop: "0" }}>
        <div className="pricing-grid reveal">
          {/* STARTER */}
          <div className="pricing-card">
            <div className="price-tier">Starter</div>
            <div className="price-amount">
              $0<span className="price-period">/mo</span>
            </div>
            <div className="price-desc">Perfect for new merchants testing B2B workflows.</div>
            <ul className="price-features">
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Up to 50 quote requests/mo
              </li>
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Request Quote button
              </li>
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Basic dashboard
              </li>
              <li>
                <div className="cross-icon">
                  <svg viewBox="0 0 10 10">
                    <line x1="2" y1="2" x2="8" y2="8" />
                    <line x1="8" y1="2" x2="2" y2="8" />
                  </svg>
                </div>
                Email notifications
              </li>
              <li>
                <div className="cross-icon">
                  <svg viewBox="0 0 10 10">
                    <line x1="2" y1="2" x2="8" y2="8" />
                    <line x1="8" y1="2" x2="2" y2="8" />
                  </svg>
                </div>
                Custom forms
              </li>
            </ul>
            <button
              className="btn-secondary"
              style={{ width: "100%" }}
              onClick={() => showToast("Install flow launching soon!")}
            >
              Get Started Free
            </button>
          </div>
          {/* GROWTH */}
          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <div className="price-tier" style={{ color: "var(--blue)" }}>
              Growth
            </div>
            <div className="price-amount" id="growth-price">
              {yearly ? (
                <>
                  $7<span className="price-period">.99/mo</span>
                </>
              ) : (
                <>
                  $9<span className="price-period">.99/mo</span>
                </>
              )}
            </div>
            <div className="price-desc">For growing merchants with active B2B pipelines.</div>
            <ul className="price-features">
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Unlimited quote requests
              </li>
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Email notifications
              </li>
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Custom quote forms
              </li>
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Hide price feature
              </li>
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Quote cart
              </li>
            </ul>
            <button
              className="btn-primary"
              style={{ width: "100%" }}
              onClick={() => showToast("Install flow launching soon!")}
            >
              Start Growth Plan
            </button>
          </div>
          {/* PROFESSIONAL */}
          <div className="pricing-card">
            <div className="price-tier">Professional</div>
            <div className="price-amount" id="pro-price">
              {yearly ? (
                <>
                  $15<span className="price-period">.99/mo</span>
                </>
              ) : (
                <>
                  $19<span className="price-period">.99/mo</span>
                </>
              )}
            </div>
            <div className="price-desc">Advanced features for serious B2B operations.</div>
            <ul className="price-features">
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Everything in Growth
              </li>
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Advanced workflows
              </li>
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Priority support
              </li>
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Full B2B features
              </li>
              <li>
                <div className="check-icon">
                  <svg viewBox="0 0 10 10">
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Customer portal
              </li>
            </ul>
            <button
              className="btn-secondary"
              style={{ width: "100%" }}
              onClick={() => showToast("Install flow launching soon!")}
            >
              Start Pro Plan
            </button>
          </div>
          {/* ENTERPRISE */}
          <div
            className="pricing-card"
            style={{
              background: "linear-gradient(135deg,var(--dark),#0d1a3d)",
              borderColor: "transparent",
            }}
          >
            <div className="price-tier" style={{ color: "var(--teal)" }}>
              Enterprise
            </div>
            <div className="price-amount" style={{ color: "#fff" }}>
              Custom
            </div>
            <div className="price-desc" style={{ color: "rgba(255,255,255,.6)" }}>
              Dedicated support and custom integrations for large operations.
            </div>
            <ul className="price-features" style={{ border: "none" }}>
              <li style={{ borderColor: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.8)" }}>
                <div className="check-icon" style={{ background: "rgba(20,184,166,.2)" }}>
                  <svg viewBox="0 0 10 10" style={{ stroke: "var(--teal)" }}>
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Everything in Professional
              </li>
              <li style={{ borderColor: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.8)" }}>
                <div className="check-icon" style={{ background: "rgba(20,184,166,.2)" }}>
                  <svg viewBox="0 0 10 10" style={{ stroke: "var(--teal)" }}>
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Dedicated account manager
              </li>
              <li style={{ borderColor: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.8)" }}>
                <div className="check-icon" style={{ background: "rgba(20,184,166,.2)" }}>
                  <svg viewBox="0 0 10 10" style={{ stroke: "var(--teal)" }}>
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                Custom integrations
              </li>
              <li style={{ borderColor: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.8)" }}>
                <div className="check-icon" style={{ background: "rgba(20,184,166,.2)" }}>
                  <svg viewBox="0 0 10 10" style={{ stroke: "var(--teal)" }}>
                    <polyline points="1.5,5 4,7.5 8.5,2.5" />
                  </svg>
                </div>
                SLA guarantee
              </li>
            </ul>
            <button
              className="btn-teal"
              style={{ width: "100%" }}
              onClick={() => showPage("contact")}
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="reveal" style={{ marginTop: "80px" }}>
          <div className="section-title text-center" style={{ marginBottom: "0" }}>
            Feature Comparison
          </div>
          <table className="comparison-table">
            <tbody>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th>Growth</th>
                <th>Professional</th>
                <th>Enterprise</th>
              </tr>
              <tr>
                <td>Quote Requests</td>
                <td>50/mo</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Request Quote Button</td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
              </tr>
              <tr>
                <td>Hide Price</td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
              </tr>
              <tr>
                <td>Email Notifications</td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
              </tr>
              <tr>
                <td>Custom Forms</td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
              </tr>
              <tr>
                <td>Quote Cart</td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
              </tr>
              <tr>
                <td>Customer Portal</td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
              </tr>
              <tr>
                <td>Priority Support</td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
              </tr>
              <tr>
                <td>Dedicated Manager</td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="cross">—</span>
                </td>
                <td>
                  <span className="tick">✓</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <div className="faq-list reveal">
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div className="section-title">Pricing FAQ</div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>
              Is there a free trial?<span className="faq-chevron">▾</span>
            </div>
            <div className="faq-a">
              <p>
                Yes! Our Starter plan is free forever. Paid plans include a 14-day free trial with no
                credit card required.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>
              Can I cancel anytime?<span className="faq-chevron">▾</span>
            </div>
            <div className="faq-a">
              <p>
                Absolutely. Cancel anytime from your Shopify admin. No cancellation fees, no questions
                asked.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>
              Is billing handled through Shopify?<span className="faq-chevron">▾</span>
            </div>
            <div className="faq-a">
              <p>
                Yes. All billing is handled securely through Shopify&apos;s billing API. It appears
                directly on your Shopify invoice.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={toggleFaq}>
              Do you offer a money-back guarantee?<span className="faq-chevron">▾</span>
            </div>
            <div className="faq-a">
              <p>
                Yes! We offer a 30-day money-back guarantee on all paid plans. If you&apos;re not
                satisfied, we&apos;ll refund you in full.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-dark">
        <h2>Install FIDE Today</h2>
        <p>Start free. Upgrade when you&apos;re ready. No commitment required.</p>
        <div className="cta-btns">
          <button
            className="btn-primary"
            onClick={() => showToast("Install flow launching soon!")}
          >
            📲 Install Free on Shopify
          </button>
        </div>
      </div>
    </div>
  );
}
