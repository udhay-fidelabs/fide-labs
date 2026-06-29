"use client";

import type { PageProps } from "../types";

export default function ContactPage({ showPage, showToast }: PageProps) {
  return (
    <div className="page active" id="page-contact">
      <section className="hero" style={{ paddingBottom: "40px" }}>
        <div className="badge"><span className="badge-dot"></span> Get In Touch</div>
        <h1 className="hero-title">We&apos;re Here<br />to <span className="accent">Help</span></h1>
        <p className="hero-sub">Questions, feedback, or partnership opportunities? We&apos;d love to hear from you and will respond within 24 hours.</p>
      </section>

      <section style={{ paddingTop: "0", maxWidth: "1100px", margin: "0 auto", paddingBottom: "80px", paddingLeft: "5%", paddingRight: "5%" }}>
        <div className="contact-grid reveal">
          {/* FORM */}
          <div>
            <div style={{ background: "#fff", border: "1px solid var(--gray-200)", borderRadius: "20px", padding: "40px" }}>
              <div className="section-title" style={{ fontSize: "24px", marginBottom: "8px" }}>Send us a message</div>
              <p style={{ color: "var(--gray-500)", fontSize: "14px", marginBottom: "28px" }}>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group"><div className="form-label">First Name</div><input className="form-input" type="text" placeholder="John" /></div>
                <div className="form-group"><div className="form-label">Last Name</div><input className="form-input" type="text" placeholder="Smith" /></div>
              </div>
              <div className="form-group"><div className="form-label">Email Address</div><input className="form-input" type="email" placeholder="john@company.com" /></div>
              <div className="form-group"><div className="form-label">Company</div><input className="form-input" type="text" placeholder="Acme Corp" /></div>
              <div className="form-group"><div className="form-label">Subject</div>
                <select className="form-input">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                  <option>Billing</option>
                  <option>Feature Request</option>
                </select>
              </div>
              <div className="form-group"><div className="form-label">Message</div><textarea className="form-input" placeholder="Tell us how we can help..." /></div>
              <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => showToast("Message sent! We'll reply within 24 hours.")}>Send Message →</button>
            </div>
          </div>
          {/* INFO */}
          <div>
            <div className="contact-info-card">
              <div className="ci-label">Support Email</div>
              <div className="ci-value">support@fidelabs.io</div>
              <div className="ci-sub">For technical questions and app issues</div>
            </div>
            <div className="contact-info-card">
              <div className="ci-label">Business Inquiries</div>
              <div className="ci-value">hello@fidelabs.io</div>
              <div className="ci-sub">Partnerships and enterprise sales</div>
            </div>
            <div className="contact-info-card">
              <div className="ci-label">Business Hours</div>
              <div className="ci-value">Mon – Fri, 9am – 6pm EST</div>
              <div className="ci-sub">Response within 24 hours</div>
            </div>
            <div className="contact-info-card">
              <div className="ci-label">Typical Response Time</div>
              <div className="ci-value" style={{ color: "var(--teal-dark)" }}>Under 24 Hours</div>
              <div className="ci-sub">Usually much faster during business hours</div>
            </div>
            <div style={{ background: "var(--blue-xlight)", border: "1px solid rgba(47,84,235,.2)", borderRadius: "14px", padding: "20px" }}>
              <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--blue)", marginBottom: "8px" }}>📚 Quick Resources</div>
              <a className="footer-link" style={{ color: "var(--gray-600)", display: "block", padding: "4px 0" }} onClick={() => showPage("docs")}>→ Documentation Center</a>
              <a className="footer-link" style={{ color: "var(--gray-600)", display: "block", padding: "4px 0" }} onClick={() => showPage("support")}>→ Help Center &amp; FAQ</a>
              <a className="footer-link" style={{ color: "var(--gray-600)", display: "block", padding: "4px 0" }} onClick={() => showToast("Changelog coming soon!")}>→ Product Changelog</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
