"use client";

import type { PageProps } from "../types";
import { useState } from "react";

const TITLES: Record<string, string> = {"gs-overview":"Getting Started","gs-install":"Installation","gs-quick":"Quick Start","feat-rq":"Request Quote Button","feat-hp":"Hide Price","feat-qc":"Quote Cart","feat-fb":"Form Builder","feat-db":"Dashboard","feat-en":"Email Notifications","adv-tc":"Theme Compatibility","adv-tr":"Troubleshooting","adv-faq":"FAQ"};

export default function DocsPage({ showPage, showToast }: PageProps) {
  const [activeKey, setActiveKey] = useState("gs-overview");

  const handleSwitch = (key: string) => {
    setActiveKey(key);
    showToast("Loading " + (TITLES[key] || key) + "...");
  };

  return (
    <div className="page active" id="page-docs">
      <div className="docs-layout" style={{ paddingTop: "68px" }}>
        {/* SIDEBAR */}
        <div className="docs-sidebar">
          <div className="docs-sidebar-section">
            <div className="docs-sidebar-title">Getting Started</div>
            <div className={"docs-sidebar-link" + (activeKey === "gs-overview" ? " active" : "")} onClick={() => handleSwitch("gs-overview")}>Overview</div>
            <div className={"docs-sidebar-link" + (activeKey === "gs-install" ? " active" : "")} onClick={() => handleSwitch("gs-install")}>Installation</div>
            <div className={"docs-sidebar-link" + (activeKey === "gs-quick" ? " active" : "")} onClick={() => handleSwitch("gs-quick")}>Quick Start</div>
          </div>
          <div className="docs-sidebar-section">
            <div className="docs-sidebar-title">Features</div>
            <div className={"docs-sidebar-link" + (activeKey === "feat-rq" ? " active" : "")} onClick={() => handleSwitch("feat-rq")}>Request Quote Button</div>
            <div className={"docs-sidebar-link" + (activeKey === "feat-hp" ? " active" : "")} onClick={() => handleSwitch("feat-hp")}>Hide Price</div>
            <div className={"docs-sidebar-link" + (activeKey === "feat-qc" ? " active" : "")} onClick={() => handleSwitch("feat-qc")}>Quote Cart</div>
            <div className={"docs-sidebar-link" + (activeKey === "feat-fb" ? " active" : "")} onClick={() => handleSwitch("feat-fb")}>Form Builder</div>
            <div className={"docs-sidebar-link" + (activeKey === "feat-db" ? " active" : "")} onClick={() => handleSwitch("feat-db")}>Dashboard</div>
            <div className={"docs-sidebar-link" + (activeKey === "feat-en" ? " active" : "")} onClick={() => handleSwitch("feat-en")}>Email Notifications</div>
          </div>
          <div className="docs-sidebar-section">
            <div className="docs-sidebar-title">Advanced</div>
            <div className={"docs-sidebar-link" + (activeKey === "adv-tc" ? " active" : "")} onClick={() => handleSwitch("adv-tc")}>Theme Compatibility</div>
            <div className={"docs-sidebar-link" + (activeKey === "adv-tr" ? " active" : "")} onClick={() => handleSwitch("adv-tr")}>Troubleshooting</div>
            <div className={"docs-sidebar-link" + (activeKey === "adv-faq" ? " active" : "")} onClick={() => handleSwitch("adv-faq")}>FAQ</div>
          </div>
        </div>
        {/* MAIN */}
        <div className="docs-main">
          <div className="breadcrumb">
            <a onClick={() => showPage("home")}>Home</a>
            <span className="breadcrumb-sep">›</span>
            <a onClick={() => showPage("docs")}>Documentation</a>
            <span className="breadcrumb-sep">›</span>
            <span id="doc-breadcrumb">{TITLES[activeKey] || activeKey}</span>
          </div>
          <input className="docs-search" type="text" placeholder="🔍 Search documentation..." />

          {/* DOC CONTENT */}
          <div id="doc-content">
            <div className="section-title" style={{ marginBottom: "16px" }}>Welcome to FIDE Documentation</div>
            <p style={{ color: "var(--gray-600)", fontSize: "16px", lineHeight: "1.8", marginBottom: "32px" }}>Everything you need to configure and use FIDE successfully. Browse by category or use the search bar above.</p>

            <div className="docs-cat-grid">
              <div className="docs-cat-card" onClick={() => handleSwitch("gs-overview")}><div className="docs-cat-icon">🚀</div><div className="docs-cat-title">Getting Started</div></div>
              <div className="docs-cat-card"><div className="docs-cat-icon">💬</div><div className="docs-cat-title">Request Quote Button</div></div>
              <div className="docs-cat-card"><div className="docs-cat-icon">🔒</div><div className="docs-cat-title">Hide Price</div></div>
              <div className="docs-cat-card"><div className="docs-cat-icon">🛒</div><div className="docs-cat-title">Quote Cart</div></div>
              <div className="docs-cat-card"><div className="docs-cat-icon">📝</div><div className="docs-cat-title">Form Builder</div></div>
              <div className="docs-cat-card"><div className="docs-cat-icon">📊</div><div className="docs-cat-title">Dashboard</div></div>
              <div className="docs-cat-card"><div className="docs-cat-icon">📧</div><div className="docs-cat-title">Email Notifications</div></div>
              <div className="docs-cat-card"><div className="docs-cat-icon">🎨</div><div className="docs-cat-title">Theme Compatibility</div></div>
              <div className="docs-cat-card"><div className="docs-cat-icon">🔧</div><div className="docs-cat-title">Troubleshooting</div></div>
              <div className="docs-cat-card"><div className="docs-cat-icon">❓</div><div className="docs-cat-title">FAQ</div></div>
            </div>

            <div style={{ marginTop: "48px", padding: "24px", background: "var(--blue-xlight)", border: "1px solid rgba(47,84,235,.2)", borderRadius: "14px" }}>
              <div style={{ fontWeight: "700", color: "var(--blue)", marginBottom: "8px" }}>💡 New to FIDE?</div>
              <p style={{ fontSize: "14px", color: "var(--gray-700)", lineHeight: "1.6" }}>Start with the <strong>Installation</strong> guide to get FIDE set up in your Shopify store. The entire process takes under 5 minutes.</p>
            </div>
          </div>

          {/* NAV BUTTONS */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "60px", paddingTop: "24px", borderTop: "1px solid var(--gray-200)" }}>
            <button className="btn-secondary" onClick={() => showToast("Previous page coming soon!")}>← Previous</button>
            <button className="btn-primary" onClick={() => showToast("Next page coming soon!")}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
