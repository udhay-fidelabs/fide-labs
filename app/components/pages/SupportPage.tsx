"use client";

import type { PageProps } from "../types";
import { useState } from "react";

interface SupportCard {
  topic: string | null;
  iconBg: string;
  icon: string;
  title: string;
  desc: string;
}

const cards: SupportCard[] = [
  {
    topic: "install",
    iconBg: "var(--blue-xlight)",
    icon: "📦",
    title: "Getting Started",
    desc: "Install FIDE, configure your first quote button, and set up basic settings.",
  },
  {
    topic: "quote",
    iconBg: "var(--teal-light)",
    icon: "💬",
    title: "Request Quote Setup",
    desc: "Configure quote buttons, forms, and workflow settings for your store.",
  },
  {
    topic: "price",
    iconBg: "#fef3c7",
    icon: "🔒",
    title: "Hide Price Feature",
    desc: "Set up price hiding for products, collections, or all customers.",
  },
  {
    topic: "email",
    iconBg: "#fce7f3",
    icon: "📧",
    title: "Email Notifications",
    desc: "Configure SMTP, Gmail, or Elastic Email for automated notifications.",
  },
  {
    topic: "theme",
    iconBg: "#f0fdf4",
    icon: "🎨",
    title: "Theme Compatibility",
    desc: "Troubleshoot theme issues and configure for custom themes.",
  },
  {
    topic: null,
    iconBg: "#eff6ff",
    icon: "🔧",
    title: "Troubleshooting",
    desc: "Common issues and step-by-step solutions for known problems.",
  },
];

const pills: { topic: string; label: string }[] = [
  { topic: "all", label: "All Topics" },
  { topic: "install", label: "Installation" },
  { topic: "quote", label: "Request Quote Setup" },
  { topic: "price", label: "Hide Price" },
  { topic: "email", label: "Email Notifications" },
  { topic: "theme", label: "Theme Compatibility" },
];

export default function SupportPage({ showPage, showToast }: PageProps) {
  const [activeTopic, setActiveTopic] = useState("all");
  const [query, setQuery] = useState("");

  const cardOpacity = (card: SupportCard): number => {
    if (query) {
      const text = `${card.title} ${card.desc}`.toLowerCase();
      return text.includes(query.toLowerCase()) ? 1 : 0.3;
    }
    return activeTopic === "all" || card.topic === activeTopic ? 1 : 0.3;
  };

  return (
    <div className="page active" id="page-support">
      <div className="search-hero" style={{ paddingTop: "100px" }}>
        <h1>How Can We Help?</h1>
        <p>Search documentation, browse topics, or submit a support ticket.</p>
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <section>
        <div className="text-center reveal">
          <div className="section-label">Popular Topics</div>
        </div>
        <div className="topic-pills reveal">
          {pills.map((pill) => (
            <div
              key={pill.topic}
              className={`topic-pill${pill.topic === activeTopic ? " active" : ""}`}
              onClick={() => setActiveTopic(pill.topic)}
            >
              {pill.label}
            </div>
          ))}
        </div>
        <div className="support-grid reveal">
          {cards.map((card) => (
            <div
              key={card.title}
              className="support-card"
              data-topic={card.topic ?? undefined}
              onClick={() => showPage("docs")}
              style={{ opacity: cardOpacity(card) }}
            >
              <div className="support-icon" style={{ background: card.iconBg }}>
                {card.icon}
              </div>
              <div className="support-title">{card.title}</div>
              <div className="support-desc">{card.desc}</div>
            </div>
          ))}
        </div>

        {/* SUBMIT TICKET */}
        <div
          style={{
            background: "var(--gray-50)",
            borderRadius: "20px",
            padding: "40px",
            marginTop: "60px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="reveal"
        >
          <div
            className="section-title"
            style={{ fontSize: "24px", marginBottom: "8px", textAlign: "center" }}
          >
            Submit a Support Ticket
          </div>
          <p
            style={{
              textAlign: "center",
              color: "var(--gray-500)",
              marginBottom: "28px",
              fontSize: "14px",
            }}
          >
            Can&apos;t find your answer? Our team typically responds within 24 hours.
          </p>
          <div className="form-group">
            <div className="form-label">Email Address</div>
            <input className="form-input" type="email" placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <div className="form-label">Issue Category</div>
            <select className="form-input">
              <option>Installation Issue</option>
              <option>Quote Configuration</option>
              <option>Email Not Sending</option>
              <option>Theme Conflict</option>
              <option>Billing Issue</option>
              <option>Feature Request</option>
            </select>
          </div>
          <div className="form-group">
            <div className="form-label">Describe Your Issue</div>
            <textarea className="form-input" placeholder="Please describe the issue in detail..." />
          </div>
          <button
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={() =>
              showToast("Support ticket submitted! We'll respond within 24 hours.")
            }
          >
            Submit Ticket
          </button>
        </div>

        {/* SLA */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "20px",
            marginTop: "60px",
          }}
          className="reveal"
        >
          <div
            style={{
              textAlign: "center",
              padding: "28px",
              background: "#fff",
              border: "1px solid var(--gray-200)",
              borderRadius: "14px",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>⚡</div>
            <div
              style={{
                fontWeight: "700",
                fontSize: "16px",
                color: "var(--gray-900)",
                marginBottom: "4px",
              }}
            >
              First Response
            </div>
            <div style={{ color: "var(--teal-dark)", fontWeight: "700" }}>
              Within 24 Hours
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "28px",
              background: "#fff",
              border: "1px solid var(--gray-200)",
              borderRadius: "14px",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>🎯</div>
            <div
              style={{
                fontWeight: "700",
                fontSize: "16px",
                color: "var(--gray-900)",
                marginBottom: "4px",
              }}
            >
              Resolution Time
            </div>
            <div style={{ color: "var(--teal-dark)", fontWeight: "700" }}>
              1–3 Business Days
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "28px",
              background: "#fff",
              border: "1px solid var(--gray-200)",
              borderRadius: "14px",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>📅</div>
            <div
              style={{
                fontWeight: "700",
                fontSize: "16px",
                color: "var(--gray-900)",
                marginBottom: "4px",
              }}
            >
              Support Hours
            </div>
            <div style={{ color: "var(--teal-dark)", fontWeight: "700" }}>
              Mon–Fri 9am–6pm EST
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "28px",
              background: "#fff",
              border: "1px solid var(--gray-200)",
              borderRadius: "14px",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>🔖</div>
            <div
              style={{
                fontWeight: "700",
                fontSize: "16px",
                color: "var(--gray-900)",
                marginBottom: "4px",
              }}
            >
              Priority Support
            </div>
            <div style={{ color: "var(--teal-dark)", fontWeight: "700" }}>
              Pro &amp; Enterprise Plans
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
