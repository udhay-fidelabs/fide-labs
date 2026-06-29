"use client";

import type { PageProps } from "../types";
import Icon from "../Icon";

type Props = Pick<PageProps, "showPage">;

export default function ProductShowcase({ showPage }: Props) {
  return (
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
  );
}
