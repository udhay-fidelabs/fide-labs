"use client";

import type { PageProps } from "../types";

export default function PrivacyPage(_: PageProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page active" id="page-privacy">
      <div style={{ background: "linear-gradient(135deg,var(--gray-50),#fff)", padding: "100px 5% 60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: "800", letterSpacing: "-2px", marginBottom: "12px" }}>Privacy Policy</h1>
        <p style={{ color: "var(--gray-500)", fontSize: "16px" }}>Last updated: January 15, 2025</p>
      </div>
      <div className="legal-layout">
        <div className="legal-toc">
          <div className="toc-title">Table of Contents</div>
          <a className="toc-link" onClick={() => scrollToSection("priv-overview")}>1. Overview</a>
          <a className="toc-link" onClick={() => scrollToSection("priv-collect")}>2. Data We Collect</a>
          <a className="toc-link" onClick={() => scrollToSection("priv-merchant")}>3. Merchant Data</a>
          <a className="toc-link" onClick={() => scrollToSection("priv-customer")}>4. Customer Data</a>
          <a className="toc-link" onClick={() => scrollToSection("priv-security")}>5. Data Security</a>
          <a className="toc-link" onClick={() => scrollToSection("priv-retention")}>6. Data Retention</a>
          <a className="toc-link" onClick={() => scrollToSection("priv-gdpr")}>7. GDPR Rights</a>
          <a className="toc-link" onClick={() => scrollToSection("priv-third")}>8. Third Parties</a>
          <a className="toc-link" onClick={() => scrollToSection("priv-shopify")}>9. Shopify Compliance</a>
          <a className="toc-link" onClick={() => scrollToSection("priv-contact")}>10. Contact Us</a>
        </div>
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Effective: January 15, 2025 | Last Updated: January 15, 2025</p>

          <div className="legal-section" id="priv-overview"><h2>1. Overview</h2><p>FIDE Labs (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of merchants and their customers. This Privacy Policy explains how we collect, use, and safeguard information when you use our Shopify applications.</p><p>By installing and using FIDE, you agree to the collection and use of information in accordance with this policy.</p></div>

          <div className="legal-section" id="priv-collect"><h2>2. Data We Collect</h2><p>We collect information necessary to provide our services, including:</p><ul><li>Store information (shop name, domain, email)</li><li>Quote request data submitted through our app</li><li>App usage analytics and performance metrics</li><li>Communication logs for support purposes</li></ul></div>

          <div className="legal-section" id="priv-merchant"><h2>3. Merchant Data</h2><p>When you install FIDE, we access your Shopify store data through official Shopify APIs. This includes product information, customer data relevant to quote requests, and order information necessary to process approved quotes.</p><p>We only request the minimum permissions necessary to provide our services and never sell merchant data to third parties.</p></div>

          <div className="legal-section" id="priv-customer"><h2>4. Customer Data</h2><p>When your store&apos;s customers submit quote requests, we collect the information they provide through the quote form. This data is stored securely and used solely to facilitate the quote process between you and your customers.</p><p>Customer data is owned by you (the merchant) and we act as a data processor on your behalf.</p></div>

          <div className="legal-section" id="priv-security"><h2>5. Data Security</h2><p>We implement industry-standard security measures including TLS encryption for data in transit, AES-256 encryption for data at rest, regular security audits, and access controls limiting data access to authorized personnel only.</p></div>

          <div className="legal-section" id="priv-retention"><h2>6. Data Retention</h2><p>We retain data for as long as necessary to provide our services. When you uninstall FIDE, your data is scheduled for deletion within 30 days unless retention is required by law.</p></div>

          <div className="legal-section" id="priv-gdpr"><h2>7. GDPR Rights</h2><p>If you or your customers are in the EEA, you have rights under GDPR including the right to access, correct, delete, and port your data. Contact us at privacy@fidelabs.io to exercise these rights.</p></div>

          <div className="legal-section" id="priv-third"><h2>8. Third-Party Providers</h2><p>We use trusted third-party providers including AWS for hosting, Elastic Email for transactional emails, and Shopify APIs. These providers are contractually required to handle data in accordance with applicable privacy laws.</p></div>

          <div className="legal-section" id="priv-shopify"><h2>9. Shopify Compliance</h2><p>FIDE is built in full compliance with Shopify&apos;s Partner Program policies and API terms of service. We follow Shopify&apos;s data protection requirements and undergo regular compliance reviews.</p></div>

          <div className="legal-section" id="priv-contact"><h2>10. Contact Information</h2><p>For privacy-related questions or requests, contact us at:</p><ul><li>Email: privacy@fidelabs.io</li><li>Response time: Within 5 business days</li></ul></div>
        </div>
      </div>
    </div>
  );
}
