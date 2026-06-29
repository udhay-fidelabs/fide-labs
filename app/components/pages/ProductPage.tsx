"use client";

import type { PageProps } from "../types";

export default function ProductPage({ showPage, showToast }: PageProps) {
  return (
    <div className="page active" id="page-product">
      {/* HERO */}
      <div className="product-hero" style={{ paddingTop: "120px" }}>
        <div className="floating-card float-1">✅ Quote Approved – $4,200</div>
        <div className="floating-card float-2">📧 Email Sent to Customer</div>
        <div className="floating-card float-3">🛒 Request Cart: 3 items</div>
        <div className="badge" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge-dot"></span> FIDE Request Quote App
        </div>
        <h1 className="hero-title" style={{ position: "relative", zIndex: 1 }}>
          Convert Quote Requests<br />
          into <span className="accent">Revenue</span>
        </h1>
        <p className="hero-sub" style={{ position: "relative", zIndex: 1 }}>
          Allow customers to request pricing, negotiate orders, and buy with
          confidence. Built natively for Shopify&apos;s modern ecosystem.
        </p>
        <div className="hero-btns" style={{ position: "relative", zIndex: 1 }}>
          <button
            className="btn-primary"
            onClick={() => showToast("Install flow launching soon!")}
          >
            📲 Install Free on Shopify
          </button>
          <button className="btn-secondary" onClick={() => showPage("docs")}>
            View Documentation
          </button>
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <section>
        <div className="text-center reveal">
          <div className="section-label">The Problem</div>
          <div className="section-title">Challenges Merchants Face</div>
          <div className="section-sub center">
            Without the right tools, B2B quoting is slow, manual, and
            error-prone.
          </div>
        </div>
        <div className="problem-grid reveal">
          <div className="problem-card">
            <div className="problem-icon">💸</div>
            <div className="problem-title">Price-Sensitive Customers</div>
            <div className="problem-desc">
              Customers bounce when prices are visible without context. You need
              to qualify before revealing pricing.
            </div>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🏭</div>
            <div className="problem-title">Wholesale Pricing Complexity</div>
            <div className="problem-desc">
              Different pricing for different customers is impossible to manage
              with standard Shopify setups.
            </div>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🔧</div>
            <div className="problem-title">Custom Product Orders</div>
            <div className="problem-desc">
              Customized orders need negotiation. The standard add-to-cart flow
              doesn&apos;t support this.
            </div>
          </div>
          <div className="problem-card">
            <div className="problem-icon">📋</div>
            <div className="problem-title">Manual Quote Handling</div>
            <div className="problem-desc">
              Managing quotes via email and spreadsheets is slow, error-prone,
              and doesn&apos;t scale.
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section style={{ background: "var(--gray-50)" }}>
        <div className="text-center reveal">
          <div className="section-label">Features</div>
          <div className="section-title">
            Everything You Need to<br />
            Win B2B Sales
          </div>
        </div>
        <div className="feature-grid reveal">
          <div className="feature-card">
            <div className="fc-icon blue">💬</div>
            <div className="fc-title">Request Quote Button</div>
            <div className="fc-desc">
              Replace or supplement the Add to Cart button with a customizable
              Request Quote button on any product.
            </div>
          </div>
          <div className="feature-card">
            <div className="fc-icon teal">🔒</div>
            <div className="fc-title">Hide Price</div>
            <div className="fc-desc">
              Hide prices for all or specific products, customer groups, or
              geographic regions with granular control.
            </div>
          </div>
          <div className="feature-card">
            <div className="fc-icon blue">🛒</div>
            <div className="fc-title">Quote Cart</div>
            <div className="fc-desc">
              Customers can build a full quote cart with multiple products
              before submitting a single request.
            </div>
          </div>
          <div className="feature-card">
            <div className="fc-icon teal">📧</div>
            <div className="fc-title">Email Notifications</div>
            <div className="fc-desc">
              Automated notifications for merchants and customers at every stage
              of the quote lifecycle.
            </div>
          </div>
          <div className="feature-card">
            <div className="fc-icon blue">📊</div>
            <div className="fc-title">Quote Dashboard</div>
            <div className="fc-desc">
              Full CRM-style dashboard to manage, track, and respond to all
              quote requests in one place.
            </div>
          </div>
          <div className="feature-card">
            <div className="fc-icon teal">👤</div>
            <div className="fc-title">Customer Portal</div>
            <div className="fc-desc">
              Dedicated portal where customers track their quote status, accept
              quotes, and place orders.
            </div>
          </div>
          <div className="feature-card">
            <div className="fc-icon blue">🎨</div>
            <div className="fc-title">Theme Compatibility</div>
            <div className="fc-desc">
              Works with all Shopify 2.0 and OS 1.0 themes automatically. No
              theme editing required.
            </div>
          </div>
          <div className="feature-card">
            <div className="fc-icon teal">🔗</div>
            <div className="fc-title">Integrations</div>
            <div className="fc-desc">
              Connect with Gmail, Elastic Email, SMTP providers, and more for
              reliable email delivery.
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="text-center reveal">
          <div className="section-label">Process</div>
          <div className="section-title">How FIDE Works</div>
        </div>
        <div className="steps-grid reveal">
          <div className="step-card">
            <div className="step-num">1</div>
            <div className="step-title">Customer Requests Quote</div>
            <div className="step-desc">
              Customer browses your catalog, adds items to the quote cart, fills
              the form, and submits their request.
            </div>
          </div>
          <div className="step-card">
            <div className="step-num">2</div>
            <div className="step-title">Merchant Reviews</div>
            <div className="step-desc">
              You receive an instant notification. Review the request in your
              FIDE dashboard with full customer context.
            </div>
          </div>
          <div className="step-card" style={{ borderColor: "var(--teal)" }}>
            <div className="step-num" style={{ background: "var(--teal)" }}>
              3
            </div>
            <div className="step-title">Merchant Sends Quote</div>
            <div className="step-desc">
              Create a custom quote with your pricing, discounts, and notes.
              Send it to the customer with one click.
            </div>
          </div>
          <div className="step-card" style={{ borderColor: "#16a34a" }}>
            <div className="step-num" style={{ background: "#16a34a" }}>
              4
            </div>
            <div className="step-title">Customer Purchases</div>
            <div className="step-desc">
              Customer receives the quote, reviews it in their portal, accepts
              it, and completes the order securely.
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section
        style={{
          background: "var(--gray-50)",
          borderRadius: "24px",
          margin: "0 5%",
          padding: "60px",
        }}
      >
        <div className="text-center reveal">
          <div className="section-label">Integrations</div>
          <div className="section-title">Works with Your Stack</div>
        </div>
        <div className="integration-grid reveal">
          <div className="integration-logo">
            <div className="int-dot" style={{ background: "#96BF48" }}></div>
            Shopify
          </div>
          <div className="integration-logo">
            <div className="int-dot" style={{ background: "#EA4335" }}></div>
            Gmail
          </div>
          <div className="integration-logo">
            <div className="int-dot" style={{ background: "#2F54EB" }}></div>
            SMTP
          </div>
          <div className="integration-logo">
            <div className="int-dot" style={{ background: "#FF6B00" }}></div>
            Elastic Email
          </div>
          <div className="integration-logo">
            <div className="int-dot" style={{ background: "#FFD700" }}></div>
            Mailchimp
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-dark" style={{ marginTop: "80px" }}>
        <h2>
          Ready to Win More<br />
          B2B Sales?
        </h2>
        <p>
          Install FIDE for free. No credit card required. Setup in under 5
          minutes.
        </p>
        <div className="cta-btns">
          <button
            className="btn-primary"
            onClick={() => showToast("Install flow launching soon!")}
          >
            📲 Install on Shopify – Free
          </button>
          <button
            className="btn-secondary"
            style={{ color: "#fff", borderColor: "rgba(255,255,255,.2)" }}
            onClick={() => showPage("pricing")}
          >
            View Pricing
          </button>
        </div>
      </div>

      {/* FOOTER */}
    </div>
  );
}
