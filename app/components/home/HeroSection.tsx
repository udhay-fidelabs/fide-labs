"use client";

import type { PageProps } from "../types";
import { useState, useEffect, useRef } from "react";
import Icon from "../Icon";

const CAROUSEL_TOTAL = 5;

export default function HeroSection({ showPage, showToast }: PageProps) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

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

  // The dashboard slides are a fixed 960px desktop design. On narrower screens,
  // scale the whole window down to fit instead of clipping it, so the full
  // dashboard stays visible. Uses `zoom` (not `transform`) so the layout height
  // reflows and the carousel controls sit directly beneath it.
  useEffect(() => {
    const outer = outerRef.current;
    const win = windowRef.current;
    if (!outer || !win) return;
    const DESIGN = 960;
    const fit = () => {
      const w = outer.clientWidth;
      if (w < DESIGN) {
        win.style.width = `${DESIGN}px`;
        win.style.setProperty("zoom", `${w / DESIGN}`);
      } else {
        win.style.width = "";
        win.style.removeProperty("zoom");
      }
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(outer);
    return () => ro.disconnect();
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
      <div className="carousel-outer reveal" ref={outerRef}>
        <div className="carousel-window" id="carouselWindow" ref={windowRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
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
  );
}
