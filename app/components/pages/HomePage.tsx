"use client";

import type { PageProps } from "../types";
import { useState, useEffect, useRef } from "react";
import Icon from "../Icon";
import WorkflowTimeline from "../WorkflowTimeline";

const CAROUSEL_TOTAL = 5;

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

export default function HomePage({ showPage, showToast }: PageProps) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = (i: number) => setIdx(i);
  const move = (dir: number) => setIdx((i) => (i + dir + CAROUSEL_TOTAL) % CAROUSEL_TOTAL);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => move(1), 4500);
    return () => clearInterval(id);
  }, [idx, paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") move(1);
      else if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) move(1);
    else if (dx > 40) move(-1);
    touchStartX.current = null;
  };

  return (
    <div className="page active" id="page-home">

      {/* HERO */}
      <section className="hero">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
          <div className="shopify-bar" onClick={() => showToast("Opening Shopify App Store…")}>
            <div className="shopify-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 7.5C16.5 5.01 14.49 3 12 3C9.51 3 7.5 5.01 7.5 7.5H5.25L4.5 19.5H19.5L18.75 7.5H16.5ZM12 4.5C13.66 4.5 15 5.84 15 7.5H9C9 5.84 10.34 4.5 12 4.5Z" fill="white" />
              </svg>
            </div>
            <span style={{ color: "#4a4a6a" }}>Available on the</span>
            <strong style={{ color: "#1a1a2e" }}>Shopify</strong><span style={{ color: "#4a4a6a" }}> app store</span>
            <div className="shopify-bar-divider"></div>
            <span className="shopify-bar-cta">Explore app <span className="arrow">↗</span></span>
          </div>
        </div>
        <h1 className="hero-title">Build Better <span className="accent">B2B Experiences</span><br />on <span className="teal">Shopify</span></h1>
        <p className="hero-sub">Shopify apps designed to help merchants generate more leads, automate quote workflows, and scale wholesale operations.</p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => showPage("product")}>Explore Products <Icon name="arrow-right" size={18} /></button>
          <button className="btn-secondary" onClick={() => showPage("docs")}><Icon name="book" size={18} /> View Documentation</button>
        </div>

        {/* DASHBOARD CAROUSEL */}
        <div className="carousel-outer reveal">
          <div className="carousel-window" id="carouselWindow" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="carousel-track" id="carouselTrack" style={{ transform: `translateX(-${idx * 100}%)` }}>

              {/* ── SLIDE 1: Main Dashboard ── */}
              <div className="carousel-slide">
                <div className="slide-label">📊 Dashboard Overview</div>
                <div className="dash-chrome">
                  <div className="dash-dot red"></div><div className="dash-dot yellow"></div><div className="dash-dot green"></div>
                  <div className="dash-url">app.fidelabs.io/dashboard</div>
                </div>
                <div className="dash-body">
                  <div className="dash-sidebar">
                    <div className="dash-sidebar-title">FIDE Labs</div>
                    <div className="dash-nav-item active"><div className="dash-nav-dot"></div>Dashboard</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Quote Requests</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Customers</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Analytics</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Email Settings</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Settings</div>
                  </div>
                  <div className="dash-main">
                    <div className="dash-stats">
                      <div className="stat-card"><div className="stat-label">Total Quotes</div><div className="stat-value">1,284</div><div className="stat-change">↑ 24% this month</div></div>
                      <div className="stat-card"><div className="stat-label">Approved</div><div className="stat-value">892</div><div className="stat-change">↑ 18% this month</div></div>
                      <div className="stat-card"><div className="stat-label">Revenue</div><div className="stat-value">$48K</div><div className="stat-change">↑ 31% this month</div></div>
                      <div className="stat-card"><div className="stat-label">Avg Quote</div><div className="stat-value">$54</div><div className="stat-change">↑ 8% this month</div></div>
                    </div>
                    <table className="quote-table">
                      <tbody>
                        <tr><th>Customer</th><th>Product</th><th>Amount</th><th>Status</th></tr>
                        <tr><td>Acme Corp</td><td>Industrial Parts × 50</td><td>$4,200</td><td><span className="badge-status badge-approved">Approved</span></td></tr>
                        <tr><td>TechWorld B2B</td><td>Custom Hardware Kit</td><td>$1,850</td><td><span className="badge-status badge-review">In Review</span></td></tr>
                        <tr><td>Metro Supplies</td><td>Wholesale Bundle</td><td>$9,700</td><td><span className="badge-status badge-pending">Pending</span></td></tr>
                        <tr><td>GlobalTrade Inc</td><td>Bulk Order × 200</td><td>$12,000</td><td><span className="badge-status badge-approved">Approved</span></td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* ── SLIDE 2: Analytics / Revenue Charts ── */}
              <div className="carousel-slide">
                <div className="slide-label">📈 Revenue Analytics</div>
                <div className="dash-chrome">
                  <div className="dash-dot red"></div><div className="dash-dot yellow"></div><div className="dash-dot green"></div>
                  <div className="dash-url">app.fidelabs.io/analytics</div>
                </div>
                <div className="dash-body">
                  <div className="dash-sidebar">
                    <div className="dash-sidebar-title">FIDE Labs</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Dashboard</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Quote Requests</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Customers</div>
                    <div className="dash-nav-item active"><div className="dash-nav-dot"></div>Analytics</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Email Settings</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Settings</div>
                  </div>
                  <div className="dash-main">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "var(--gray-900)" }}>Revenue by Month</div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <div style={{ padding: "4px 12px", background: "var(--blue)", color: "#fff", borderRadius: "6px", fontSize: "11px", fontWeight: "600", cursor: "pointer" }}>Monthly</div>
                        <div style={{ padding: "4px 12px", background: "var(--gray-100)", color: "var(--gray-600)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", cursor: "pointer" }}>Yearly</div>
                      </div>
                    </div>
                    <div className="chart-wrap">
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "55%", background: "var(--blue-light)" }}></div><div className="chart-label">Jan</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "70%", background: "var(--blue-light)" }}></div><div className="chart-label">Feb</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "45%", background: "var(--blue-light)" }}></div><div className="chart-label">Mar</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "80%", background: "var(--blue-light)" }}></div><div className="chart-label">Apr</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "65%", background: "var(--blue-light)" }}></div><div className="chart-label">May</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "90%", background: "var(--blue)" }}></div><div className="chart-label" style={{ color: "var(--blue)", fontWeight: "700" }}>Jun</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "75%", background: "var(--blue-light)" }}></div><div className="chart-label">Jul</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "85%", background: "var(--teal-light)" }}></div><div className="chart-label">Aug</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "70%", background: "var(--teal-light)" }}></div><div className="chart-label">Sep</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "95%", background: "var(--teal)" }}></div><div className="chart-label" style={{ color: "var(--teal-dark)", fontWeight: "700" }}>Oct</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "82%", background: "var(--teal-light)" }}></div><div className="chart-label">Nov</div></div>
                      <div className="chart-bar-group"><div className="chart-bar" style={{ height: "100%", background: "linear-gradient(180deg,var(--blue),var(--teal))" }}></div><div className="chart-label" style={{ color: "var(--blue)", fontWeight: "700" }}>Dec</div></div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
                      <div className="stat-card"><div className="stat-label">Total Revenue</div><div className="stat-value" style={{ fontSize: "18px" }}>$284K</div><div className="stat-change">↑ 38% YoY</div></div>
                      <div className="stat-card"><div className="stat-label">Conversion Rate</div><div className="stat-value" style={{ fontSize: "18px" }}>69.4%</div><div className="stat-change">↑ 12% YoY</div></div>
                      <div className="stat-card"><div className="stat-label">Avg Order Value</div><div className="stat-value" style={{ fontSize: "18px" }}>$6,240</div><div className="stat-change">↑ 21% YoY</div></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── SLIDE 3: Quote Requests List ── */}
              <div className="carousel-slide">
                <div className="slide-label">💬 Quote Requests</div>
                <div className="dash-chrome">
                  <div className="dash-dot red"></div><div className="dash-dot yellow"></div><div className="dash-dot green"></div>
                  <div className="dash-url">app.fidelabs.io/quotes</div>
                </div>
                <div className="dash-body">
                  <div className="dash-sidebar">
                    <div className="dash-sidebar-title">FIDE Labs</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Dashboard</div>
                    <div className="dash-nav-item active"><div className="dash-nav-dot"></div>Quote Requests</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Customers</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Analytics</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Email Settings</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Settings</div>
                  </div>
                  <div className="dash-main">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "var(--gray-900)" }}>All Quote Requests</div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <div style={{ padding: "5px 10px", background: "var(--gray-100)", borderRadius: "6px", fontSize: "11px", color: "var(--gray-600)", fontWeight: "600" }}>All (47)</div>
                        <div style={{ padding: "5px 10px", background: "#fef3c7", borderRadius: "6px", fontSize: "11px", color: "#92400e", fontWeight: "600" }}>Pending (12)</div>
                        <div style={{ padding: "5px 10px", background: "var(--blue-xlight)", borderRadius: "6px", fontSize: "11px", color: "var(--blue)", fontWeight: "600" }}>Review (8)</div>
                      </div>
                    </div>
                    <table className="quote-table">
                      <tbody>
                        <tr><th>#</th><th>Customer</th><th>Items</th><th>Value</th><th>Date</th><th>Status</th></tr>
                        <tr><td style={{ color: "var(--gray-400)" }}>#1047</td><td>Acme Corp</td><td>Industrial Parts × 50</td><td>$4,200</td><td style={{ color: "var(--gray-400)" }}>Today</td><td><span className="badge-status badge-approved">Approved</span></td></tr>
                        <tr><td style={{ color: "var(--gray-400)" }}>#1046</td><td>TechWorld B2B</td><td>Custom Hardware Kit</td><td>$1,850</td><td style={{ color: "var(--gray-400)" }}>Today</td><td><span className="badge-status badge-review">In Review</span></td></tr>
                        <tr><td style={{ color: "var(--gray-400)" }}>#1045</td><td>Metro Supplies</td><td>Wholesale Bundle</td><td>$9,700</td><td style={{ color: "var(--gray-400)" }}>Yesterday</td><td><span className="badge-status badge-pending">Pending</span></td></tr>
                        <tr><td style={{ color: "var(--gray-400)" }}>#1044</td><td>GlobalTrade Inc</td><td>Bulk Order × 200</td><td>$12,000</td><td style={{ color: "var(--gray-400)" }}>2d ago</td><td><span className="badge-status badge-approved">Approved</span></td></tr>
                        <tr><td style={{ color: "var(--gray-400)" }}>#1043</td><td>Nova Industrial</td><td>Steel Components × 100</td><td>$8,400</td><td style={{ color: "var(--gray-400)" }}>3d ago</td><td><span className="badge-status badge-approved">Approved</span></td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* ── SLIDE 4: Email Notifications ── */}
              <div className="carousel-slide">
                <div className="slide-label">📧 Email Notifications</div>
                <div className="dash-chrome">
                  <div className="dash-dot red"></div><div className="dash-dot yellow"></div><div className="dash-dot green"></div>
                  <div className="dash-url">app.fidelabs.io/email-settings</div>
                </div>
                <div className="dash-body">
                  <div className="dash-sidebar">
                    <div className="dash-sidebar-title">FIDE Labs</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Dashboard</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Quote Requests</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Customers</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Analytics</div>
                    <div className="dash-nav-item active"><div className="dash-nav-dot"></div>Email Settings</div>
                    <div className="dash-nav-item"><div className="dash-nav-dot"></div>Settings</div>
                  </div>
                  <div className="dash-main">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <div style={{ fontSize: "15px", fontWeight: "700", color: "var(--gray-900)" }}>Email Activity</div>
                      <div style={{ padding: "5px 12px", background: "#d1fae5", borderRadius: "100px", fontSize: "11px", color: "#065f46", fontWeight: "700" }}>● SMTP Connected</div>
                    </div>
                    <div className="email-timeline">
                      <div className="email-row"><div className="email-avatar" style={{ background: "var(--blue)" }}>AC</div><div><div className="email-subject">Quote #1047 Approved ✓</div><div className="email-snippet">Your quote for Industrial Parts × 50 has been approved...</div></div><div className="email-time">2 min ago</div></div>
                      <div className="email-row"><div className="email-avatar" style={{ background: "var(--teal-dark)" }}>TW</div><div><div className="email-subject">New Quote Request Received</div><div className="email-snippet">TechWorld B2B has requested a quote for Custom Hardware...</div></div><div className="email-time">18 min ago</div></div>
                      <div className="email-row"><div className="email-avatar" style={{ background: "#7c3aed" }}>MS</div><div><div className="email-subject">Quote #1045 – Follow Up</div><div className="email-snippet">Automated reminder sent to Metro Supplies for pending quote...</div></div><div className="email-time">1h ago</div></div>
                      <div className="email-row"><div className="email-avatar" style={{ background: "#dc2626" }}>GT</div><div><div className="email-subject">Order Confirmed – $12,000 🎉</div><div className="email-snippet">GlobalTrade Inc accepted the quote and placed the order...</div></div><div className="email-time">3h ago</div></div>
                    </div>
                    <div style={{ marginTop: "14px", padding: "12px", background: "var(--blue-xlight)", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--blue)" }}>📬 147 emails sent this month</div>
                      <div style={{ fontSize: "12px", color: "var(--gray-500)" }}>98.6% delivery rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── SLIDE 5: Customer Portal ── */}
              <div className="carousel-slide">
                <div className="slide-label">👤 Customer Portal</div>
                <div className="dash-chrome">
                  <div className="dash-dot red"></div><div className="dash-dot yellow"></div><div className="dash-dot green"></div>
                  <div className="dash-url">store.myshop.com/portal/quotes</div>
                </div>
                <div className="dash-body" style={{ gridTemplateColumns: "1fr" }}>
                  <div>
                    <div className="portal-header">
                      <div className="portal-title">My Quote Requests – Acme Corp</div>
                      <div className="portal-badge">3 Active Quotes</div>
                    </div>
                    <div style={{ padding: "16px", background: "#fff" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px", marginBottom: "16px" }}>
                        <div className="stat-card"><div className="stat-label">Total Submitted</div><div className="stat-value" style={{ fontSize: "18px" }}>14</div></div>
                        <div className="stat-card"><div className="stat-label">Awaiting Reply</div><div className="stat-value" style={{ fontSize: "18px", color: "var(--blue)" }}>3</div></div>
                        <div className="stat-card"><div className="stat-label">Orders Placed</div><div className="stat-value" style={{ fontSize: "18px", color: "#16a34a" }}>11</div></div>
                      </div>
                      <div className="portal-item"><div className="portal-icon" style={{ background: "var(--blue-xlight)" }}>📦</div><div><div className="portal-name">Industrial Parts × 50</div><div className="portal-sub">Submitted Jan 15, 2025 · Quote received</div></div><div><div className="portal-amount">$4,200</div><div style={{ textAlign: "right" }}><span className="badge-status badge-approved">Approved</span></div></div></div>
                      <div className="portal-item"><div className="portal-icon" style={{ background: "var(--teal-light)" }}>🔩</div><div><div className="portal-name">Custom Hardware Kit × 1</div><div className="portal-sub">Submitted Jan 14, 2025 · Under review</div></div><div><div className="portal-amount">—</div><div style={{ textAlign: "right" }}><span className="badge-status badge-review">In Review</span></div></div></div>
                      <div className="portal-item"><div className="portal-icon" style={{ background: "#fef3c7)" }}>📋</div><div><div className="portal-name">Office Supplies Bundle × 10</div><div className="portal-sub">Submitted Jan 13, 2025 · Awaiting</div></div><div><div className="portal-amount">—</div><div style={{ textAlign: "right" }}><span className="badge-status badge-pending">Pending</span></div></div></div>
                      <div style={{ marginTop: "14px", textAlign: "center" }}><button className="btn-primary" style={{ fontSize: "13px", padding: "10px 22px" }} onClick={() => showToast("Demo portal view!")}>+ Request New Quote</button></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>{/* /track */}
          </div>{/* /window */}

          {/* CONTROLS */}
          <div className="carousel-controls">
            <button className="carousel-arrow" id="cPrev" onClick={() => move(-1)}>←</button>
            <button className={`carousel-dot${idx === 0 ? " active" : ""}`} onClick={() => go(0)}></button>
            <button className={`carousel-dot${idx === 1 ? " active" : ""}`} onClick={() => go(1)}></button>
            <button className={`carousel-dot${idx === 2 ? " active" : ""}`} onClick={() => go(2)}></button>
            <button className={`carousel-dot${idx === 3 ? " active" : ""}`} onClick={() => go(3)}></button>
            <button className={`carousel-dot${idx === 4 ? " active" : ""}`} onClick={() => go(4)}></button>
            <span className="slide-counter" id="slideCounter">{idx + 1} / {CAROUSEL_TOTAL}</span>
            <button className="carousel-arrow" id="cNext" onClick={() => move(1)}>→</button>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <div className="product-showcase reveal">
        <div className="ps-grid">
          <div>
            <div className="ps-badge"><Icon name="star" size={14} /> Featured Product</div>
            <div className="ps-title">FIDE Request Quote</div>
            <div className="ps-sub">The most powerful quote management solution for Shopify merchants. Convert browsers into buyers with seamless B2B workflows.</div>
            <div className="feature-list">
              <div className="feature-item"><div className="feature-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></div>Hide Price & Replace Add to Cart</div>
              <div className="feature-item"><div className="feature-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></div>Smart Quote Management Dashboard</div>
              <div className="feature-item"><div className="feature-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></div>Automated Email Notifications</div>
              <div className="feature-item"><div className="feature-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></div>Full B2B Customer Portal</div>
              <div className="feature-item"><div className="feature-check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" /></svg></div>Theme Compatible & Mobile Ready</div>
            </div>
            <button className="btn-teal" onClick={() => showPage("product")}>View Product →</button>
          </div>
          <div className="ps-visual">
            <div className="ps-mini-card"><div className="ps-mini-label">New Quote Request</div><div className="ps-mini-value">Industrial Parts × 150 units</div><div className="ps-mini-status">● Awaiting Review</div></div>
            <div className="ps-mini-card"><div className="ps-mini-label">Quote Sent to Customer</div><div className="ps-mini-value">$8,400 – Acme Corp</div><div style={{ display: "inline-flex", padding: "3px 10px", background: "rgba(47,84,235,.2)", border: "1px solid rgba(47,84,235,.3)", borderRadius: "100px", fontSize: "11px", fontWeight: "600", color: "#93c5fd", marginTop: "6px" }}>● Sent</div></div>
            <div className="ps-mini-card"><div className="ps-mini-label">Order Confirmed</div><div className="ps-mini-value">$12,500 Revenue Generated</div><div className="ps-mini-status">✓ Completed</div></div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section>
        <div className="wcu-panel reveal">
          <div className="wcu-intro">
            <span className="wcu-eyebrow">Features</span>
            <h2 className="wcu-title">Why Merchants <span className="wcu-accent">Choose Us?</span></h2>
            <p className="wcu-desc">FIDE Labs builds Shopify apps that turn quote requests into revenue. Four reasons wholesale merchants pick us over every other B2B app on the store.</p>
            <button className="btn-primary" onClick={() => showPage("product")}>Explore Products <Icon name="arrow-right" size={18} /></button>
          </div>
          <div className="wcu-features">
            <div className="wcu-item">
              <div className="wcu-ic"><Icon name="storefront" size={22} /></div>
              <div>
                <h3 className="wcu-h">Shopify Native</h3>
                <p className="wcu-p">Built on official Shopify APIs, so it never breaks against the platform.</p>
              </div>
            </div>
            <div className="wcu-item">
              <div className="wcu-ic"><Icon name="bolt" size={22} /></div>
              <div>
                <h3 className="wcu-h">Fast Setup</h3>
                <p className="wcu-p">One-click theme install and smart defaults get you live the same afternoon.</p>
              </div>
            </div>
            <div className="wcu-item">
              <div className="wcu-ic"><Icon name="heart" size={22} /></div>
              <div>
                <h3 className="wcu-h">Merchant First</h3>
                <p className="wcu-p">Every feature is shaped by real merchant feedback, with none of the bloat.</p>
              </div>
            </div>
            <div className="wcu-item">
              <div className="wcu-ic"><Icon name="building" size={22} /></div>
              <div>
                <h3 className="wcu-h">Enterprise Ready</h3>
                <p className="wcu-p">Scale from a solo store to Shopify Plus without ever switching tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <WorkflowTimeline />

      {/* TESTIMONIALS */}
      <section className="t-section">
        <div className="text-center reveal">
          <div className="t-eyebrow"><span className="t-eyebrow-icon"><Icon name="heart" size={12} /></span>Testimonials</div>
          <div className="section-title">Our Merchants&apos; Feedback</div>
          <div className="section-sub center">See how Shopify stores grow B2B sales with FIDE</div>
        </div>
        <div className="t-grid reveal">
          {[
            { initials: "SR", bg: "linear-gradient(135deg,#2F54EB,#1a3cc7)", name: "Sarah R.", role: "Industrial Supply Co.", quote: "FIDE gets our wholesale quotes out the same day, not next week.", result: "Wholesale revenue +40%" },
            { initials: "MK", bg: "linear-gradient(135deg,#14B8A6,#0d9488)", name: "Marcus K.", role: "TechWorld B2B", quote: "Hide Price and Quote replaced our whole manual pricing flow.", result: "Live in under 10 minutes" },
            { initials: "JL", bg: "linear-gradient(135deg,#2F54EB,#14B8A6)", name: "Jennifer L.", role: "Metro Supplies", quote: "The dashboard finally gives us full visibility on every quote.", result: "Hours saved every week" },
            { initials: "DO", bg: "linear-gradient(135deg,#1a3cc7,#2F54EB)", name: "David O.", role: "Nova Industrial", quote: "Email automation chases quotes so my team doesn't have to.", result: "Quote response 3× faster" },
            { initials: "PN", bg: "linear-gradient(135deg,#0d9488,#14B8A6)", name: "Priya N.", role: "GlobalTrade Inc.", quote: "Our B2B buyers self-serve every order through the portal now.", result: "B2B orders +62%" },
            { initials: "TR", bg: "linear-gradient(135deg,#14B8A6,#2F54EB)", name: "Tomás R.", role: "Harbor Wholesale", quote: "We scaled from a solo store to Shopify Plus on the same setup.", result: "Scaled to Shopify Plus" },
          ].map((t) => (
            <div className="t-card" key={t.initials}>
              <div className="t-head">
                <div className="t-avatar" style={{ background: t.bg }}>{t.initials}</div>
                <div><div className="t-name">{t.name}</div><div className="t-role">{t.role}</div></div>
              </div>
              <div className="t-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="t-quote">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="t-result">{t.result}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
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

      {/* FINAL CTA */}
      <div style={{ padding: "0 5% 80px" }}>
        <div className="fide-cta-banner">

          {/* decorative circles */}
          <div className="fide-cta-circle c1"></div>
          <div className="fide-cta-circle c2"></div>

          {/* LEFT: text */}
          <div className="fide-cta-left">
            <div className="fide-cta-eyebrow">Get started now</div>
            <h2 className="fide-cta-heading">Start Growing Your<br />B2B Sales Today</h2>
            <p className="fide-cta-sub">Ready to transform the way you sell? Discover Shopify apps designed to increase conversions, streamline operations, and fuel long-term growth.</p>
            <button className="fide-cta-btn" onClick={() => showToast("Install flow launching soon!")}>
              Start for free &nbsp;↗
            </button>
          </div>

          {/* RIGHT: SVG illustration */}
          <div className="fide-cta-right">
            <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="fide-cta-svg">

              {/* shelf / table base */}
              <rect x="80" y="240" width="260" height="12" rx="6" fill="#1a1a2e" opacity=".12" />
              {/* box 1 */}
              <rect x="92" y="190" width="64" height="52" rx="8" fill="white" opacity=".55" />
              <rect x="92" y="190" width="64" height="52" rx="8" stroke="#1a1a2e" strokeWidth="2.5" opacity=".2" />
              {/* box 2 */}
              <rect x="166" y="200" width="56" height="42" rx="8" fill="white" opacity=".45" />
              <rect x="166" y="200" width="56" height="42" rx="8" stroke="#1a1a2e" strokeWidth="2.5" opacity=".2" />
              {/* box 3 */}
              <rect x="232" y="210" width="52" height="32" rx="8" fill="white" opacity=".4" />
              <rect x="232" y="210" width="52" height="32" rx="8" stroke="#1a1a2e" strokeWidth="2.5" opacity=".2" />

              {/* person body */}
              <ellipse cx="295" cy="175" rx="28" ry="48" fill="#1a1a2e" opacity=".13" />
              {/* legs */}
              <rect x="278" y="210" width="14" height="38" rx="7" fill="#1a1a2e" opacity=".18" />
              <rect x="296" y="210" width="14" height="38" rx="7" fill="#1a1a2e" opacity=".15" />
              {/* torso */}
              <rect x="272" y="158" width="46" height="60" rx="14" fill="#1a1a2e" opacity=".16" />
              {/* arm holding tablet */}
              <path d="M272 185 Q250 195 245 210" stroke="#1a1a2e" strokeWidth="10" strokeLinecap="round" opacity=".16" />
              {/* tablet */}
              <rect x="222" y="200" width="36" height="26" rx="5" fill="white" opacity=".7" stroke="#1a1a2e" strokeWidth="2" />
              <rect x="226" y="204" width="28" height="4" rx="2" fill="#2F54EB" opacity=".4" />
              <rect x="226" y="211" width="20" height="4" rx="2" fill="#2F54EB" opacity=".3" />
              <rect x="226" y="218" width="24" height="4" rx="2" fill="#2F54EB" opacity=".25" />
              {/* head */}
              <circle cx="295" cy="130" r="28" fill="#1a1a2e" opacity=".14" />
              {/* hair bun */}
              <circle cx="295" cy="105" r="12" fill="#1a1a2e" opacity=".18" />
              <circle cx="308" cy="100" r="8" fill="#1a1a2e" opacity=".15" />
              {/* face smile */}
              <path d="M288 134 Q295 141 302 134" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".6" />
              {/* eye left */}
              <circle cx="289" cy="128" r="2.5" fill="white" opacity=".7" />
              {/* eye right */}
              <circle cx="301" cy="128" r="2.5" fill="white" opacity=".7" />

              {/* speech bubble: review card */}
              <rect x="96" y="60" width="190" height="90" rx="14" fill="white" opacity=".75" />
              <rect x="96" y="60" width="190" height="90" rx="14" stroke="#1a1a2e" strokeWidth="2" opacity=".12" />
              {/* bubble tail */}
              <path d="M180 150 L168 168 L196 150Z" fill="white" opacity=".75" />
              {/* avatar circle in bubble */}
              <circle cx="122" cy="90" r="18" fill="#2F54EB" opacity=".25" />
              <circle cx="122" cy="84" r="7" fill="#2F54EB" opacity=".5" />
              <ellipse cx="122" cy="99" rx="10" ry="6" fill="#2F54EB" opacity=".4" />
              {/* review lines */}
              <rect x="148" y="78" width="116" height="6" rx="3" fill="#1a1a2e" opacity=".18" />
              <rect x="148" y="90" width="90" height="5" rx="2.5" fill="#1a1a2e" opacity=".12" />
              {/* stars */}
              <text x="148" y="120" fontSize="14" fill="#2F54EB" opacity=".7" fontFamily="sans-serif">★ ★ ★ ★ ★</text>

              {/* thumbs up bubble */}
              <rect x="320" y="92" width="60" height="52" rx="12" fill="white" opacity=".75" />
              <rect x="320" y="92" width="60" height="52" rx="12" stroke="#1a1a2e" strokeWidth="2" opacity=".12" />
              <path d="M338 128 C338 125 340 120 344 118 L348 110 C349 107 352 107 353 110 L353 118 L360 118 C362 118 363 120 362 122 L359 130 C358 132 356 133 354 133 L340 133 C339 133 338 132 338 130 Z" fill="#2F54EB" opacity=".5" />
              <rect x="335" y="118" width="5" height="15" rx="2.5" fill="#2F54EB" opacity=".4" />

              {/* sparkle lines */}
              <line x1="88" y1="175" x2="76" y2="163" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" opacity=".2" />
              <line x1="82" y1="180" x2="66" y2="180" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" opacity=".2" />
              <line x1="88" y1="185" x2="76" y2="197" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" opacity=".2" />
            </svg>
          </div>
        </div>
      </div>

      {/* FOOTER */}
    </div>
  );
}
