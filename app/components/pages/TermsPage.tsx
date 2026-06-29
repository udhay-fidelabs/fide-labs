"use client";

import type { PageProps } from "../types";

export default function TermsPage(_: PageProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page active" id="page-terms">
      <div style={{ background: "linear-gradient(135deg,var(--gray-50),#fff)", padding: "100px 5% 60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: "800", letterSpacing: "-2px", marginBottom: "12px" }}>Terms of Service</h1>
        <p style={{ color: "var(--gray-500)", fontSize: "16px" }}>Last updated: January 15, 2025</p>
      </div>
      <div className="legal-layout">
        <div className="legal-toc">
          <div className="toc-title">Table of Contents</div>
          <a className="toc-link" onClick={() => scrollToSection("terms-accept")}>1. Acceptance</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-elig")}>2. Eligibility</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-shopify")}>3. Shopify Requirements</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-billing")}>4. Billing</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-merch")}>5. Merchant Responsibilities</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-data")}>6. Data &amp; Privacy</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-avail")}>7. Service Availability</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-limit")}>8. Limitation of Liability</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-ip")}>9. Intellectual Property</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-term")}>10. Termination</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-changes")}>11. Changes to Terms</a>
          <a className="toc-link" onClick={() => scrollToSection("terms-contact")}>12. Contact</a>
        </div>
        <div className="legal-content">
          <h1>Terms of Service</h1>
          <p className="last-updated">Effective: January 15, 2025</p>

          <div className="legal-section" id="terms-accept"><h2>1. Acceptance of Terms</h2><p>By installing or using any FIDE Labs application, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use our applications.</p></div>

          <div className="legal-section" id="terms-elig"><h2>2. Eligibility</h2><p>You must be at least 18 years old and have the legal authority to enter into this agreement on behalf of your business. By using FIDE, you represent that you meet these requirements.</p></div>

          <div className="legal-section" id="terms-shopify"><h2>3. Shopify Store Requirements</h2><p>You must have an active Shopify store to use FIDE applications. FIDE operates through Shopify&apos;s official API and requires you to maintain compliance with Shopify&apos;s Terms of Service. Any violation of Shopify&apos;s terms that affects your store may also affect your access to FIDE.</p></div>

          <div className="legal-section" id="terms-billing"><h2>4. Subscription &amp; Billing</h2><p>Paid subscriptions are billed through Shopify&apos;s billing system. Charges appear on your Shopify invoice. Subscriptions renew automatically unless cancelled before the renewal date. Refunds are available within 30 days of the initial purchase per our money-back guarantee.</p></div>

          <div className="legal-section" id="terms-merch"><h2>5. Merchant Responsibilities</h2><p>You are responsible for your use of FIDE, including ensuring compliance with applicable laws in your jurisdiction, maintaining accurate product and pricing information, communicating clearly with your customers, and not using FIDE for fraudulent or deceptive purposes.</p></div>

          <div className="legal-section" id="terms-data"><h2>6. Data &amp; Privacy</h2><p>Our collection and use of data is governed by our Privacy Policy. By using FIDE, you consent to our data practices as described in that policy.</p></div>

          <div className="legal-section" id="terms-avail"><h2>7. Service Availability</h2><p>We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance. We are not liable for downtime caused by Shopify&apos;s own service disruptions.</p></div>

          <div className="legal-section" id="terms-limit"><h2>8. Limitation of Liability</h2><p>To the maximum extent permitted by law, FIDE Labs shall not be liable for any indirect, incidental, or consequential damages arising from your use of our applications. Our total liability shall not exceed the amount you paid in the 12 months preceding the claim.</p></div>

          <div className="legal-section" id="terms-ip"><h2>9. Intellectual Property</h2><p>FIDE applications, including all code, designs, and documentation, are the intellectual property of FIDE Labs. You may not copy, modify, or distribute our applications without written permission.</p></div>

          <div className="legal-section" id="terms-term"><h2>10. Termination</h2><p>You may terminate your use of FIDE at any time by uninstalling the application from your Shopify store. We reserve the right to suspend or terminate access for violations of these terms with reasonable notice except in cases of severe violations.</p></div>

          <div className="legal-section" id="terms-changes"><h2>11. Changes to Terms</h2><p>We may update these terms from time to time. Significant changes will be communicated via email and/or in-app notification. Continued use of FIDE after changes take effect constitutes acceptance of the updated terms.</p></div>

          <div className="legal-section" id="terms-contact"><h2>12. Contact Information</h2><p>Questions about these Terms of Service should be directed to: legal@fidelabs.io</p></div>
        </div>
      </div>
    </div>
  );
}
