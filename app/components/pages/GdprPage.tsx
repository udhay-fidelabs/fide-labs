"use client";

import LegalLayout, { type LegalSection } from "../legal/LegalLayout";
import { COMPANY, LEGAL_DATES } from "../../lib/company";

const SECTIONS: LegalSection[] = [
  {
    id: "commitment",
    title: "Our commitment",
    body: (
      <p>
        {COMPANY.shortName} builds FIDE with GDPR and UK GDPR in mind. We collect
        only the data the app needs, never sell it, and exclude IP addresses,
        cookies, and request headers from our error monitoring. This page explains
        how FIDE meets data-protection obligations. It complements our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: "roles",
    title: "Controller and processor roles",
    body: (
      <ul>
        <li><strong>Customer data</strong> (quote request submissions) — the merchant is the data controller and {COMPANY.shortName} is the processor, acting only on the merchant&apos;s instructions through the operation of the App.</li>
        <li><strong>Merchant account data</strong> — {COMPANY.shortName} is the controller.</li>
      </ul>
    ),
  },
  {
    id: "lawful-basis",
    title: "Lawful bases for processing",
    body: (
      <ul>
        <li><strong>Contract</strong> — to provide the App and run merchant accounts.</li>
        <li><strong>Legitimate interests</strong> — to keep the App reliable, secure, and improving (usage and diagnostic data).</li>
        <li><strong>Consent</strong> — for customer data, collected by the merchant from their customers.</li>
        <li><strong>Legal obligation</strong> — where the law requires us to process or retain data.</li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "Data subject rights",
    body: (
      <>
        <p>
          If you&apos;re in the EEA, UK, or Switzerland, you have the right to
          access, correct, delete, restrict, object to, or port your personal
          data, and to withdraw consent where processing relies on it. You may
          also complain to your local supervisory authority.
        </p>
        <p>
          <strong>Merchants</strong> exercise these rights by emailing us
          directly. <strong>Customers</strong> should contact the merchant they
          submitted a quote to, since that merchant is the controller; if a
          customer contacts us, we forward the request or help the merchant fulfil
          it. We verify identity before acting, acknowledge requests within 2
          business days, and respond within 30 days (extendable for complex
          requests as GDPR allows).
        </p>
      </>
    ),
  },
  {
    id: "webhooks",
    title: "Shopify GDPR webhooks & deletion",
    body: (
      <>
        <p>FIDE implements Shopify&apos;s three mandatory compliance webhooks:</p>
        <ul>
          <li><code>customers/data_request</code> — we provide a customer&apos;s data to the merchant so they can answer an access request.</li>
          <li><code>customers/redact</code> — personal data fields are replaced with redacted values; the anonymised quote record is retained but holds no personal information.</li>
          <li><code>shop/redact</code> — sent ~48 hours after uninstall; we run a final pass to permanently delete all store data.</li>
        </ul>
        <p>Deletion is event-driven (uninstall, deletion request, or webhook) rather than on a fixed schedule, and webhook deletions are permanent.</p>
      </>
    ),
  },
  {
    id: "subprocessors",
    title: "Sub-processors & international transfers",
    body: (
      <p>
        FIDE is hosted on Fly.io (Singapore) using a managed PostgreSQL database,
        with Sentry (EU — Germany) for error monitoring, Cloudinary for file
        storage, and Gmail SMTP / Elastic Email / custom SMTP for transactional
        email. All sub-processors are bound by data-protection terms. Where data
        leaves the EEA/UK, we rely on Standard Contractual Clauses. A current
        sub-processor list is available on request.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security measures",
    body: (
      <ul>
        <li>TLS/HTTPS enforced for all data in transit.</li>
        <li>AES-256-GCM encryption at rest for sensitive fields such as SMTP credentials.</li>
        <li>Shopify OAuth, HMAC-verified webhooks, and per-shop data scoping.</li>
        <li>Least-privilege Shopify API scopes and PII-minimised error monitoring.</li>
      </ul>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <ul>
        <li><strong>Privacy email:</strong> <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a></li>
        <li><strong>Company:</strong> {COMPANY.legalName}</li>
        <li><strong>Registered address:</strong> {COMPANY.registeredAddress}</li>
      </ul>
    ),
  },
];

export type LegalContext = { eyebrow?: string; backHref?: string; backLabel?: string };

export default function GdprPage(ctx: LegalContext = {}) {
  return (
    <LegalLayout
      title="GDPR Compliance"
      intro="How FIDE meets GDPR and UK GDPR obligations — roles, lawful bases, your rights, and deletion."
      effective={LEGAL_DATES.effective}
      updated={LEGAL_DATES.updated}
      sections={SECTIONS}
      {...ctx}
    />
  );
}
