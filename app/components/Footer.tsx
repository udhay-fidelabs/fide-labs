"use client";

import type { PageProps } from "./types";
import LogoMark from "./LogoMark";

export default function Footer({ showPage, showToast }: PageProps) {
  return (
    <footer id="shared-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <LogoMark size={34} />
            <div className="logo-text" style={{ color: "#fff" }}>
              FIDE<span style={{ color: "var(--teal)" }}>Labs</span>
            </div>
          </div>
          <div className="footer-desc">
            Building world-class Shopify applications that help merchants
            generate more leads, automate workflows, and scale B2B operations.
          </div>
          <div className="footer-social">
            <div
              className="social-btn"
              onClick={() => showToast("Twitter coming soon!")}
            >
              𝕏
            </div>
            <div
              className="social-btn"
              onClick={() => showToast("LinkedIn coming soon!")}
            >
              in
            </div>
            <div
              className="social-btn"
              onClick={() => showToast("GitHub coming soon!")}
            >
              ⊛
            </div>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Products</div>
          <a className="footer-link" onClick={() => showPage("product")}>
            FIDE Request Quote
          </a>
          <a className="footer-link" onClick={() => showPage("product")}>
            Hide Price
          </a>
          <a className="footer-link" onClick={() => showPage("product")}>
            Quote Cart
          </a>
          <a className="footer-link" onClick={() => showPage("product")}>
            Email Notifications
          </a>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <a className="footer-link" onClick={() => showPage("about")}>
            About Us
          </a>
          <a className="footer-link" onClick={() => showPage("pricing")}>
            Pricing
          </a>
          <a className="footer-link" onClick={() => showPage("contact")}>
            Contact
          </a>
          <a className="footer-link" onClick={() => showPage("support")}>
            Support
          </a>
        </div>
        <div>
          <div className="footer-col-title">Legal</div>
          <a className="footer-link" onClick={() => showPage("privacy")}>
            Privacy Policy
          </a>
          <a className="footer-link" onClick={() => showPage("terms")}>
            Terms of Service
          </a>
          <a className="footer-link" onClick={() => showPage("docs")}>
            Documentation
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2025 FIDE Labs. All rights reserved. Built with ❤️ for Shopify
          merchants.
        </div>
      </div>
    </footer>
  );
}
