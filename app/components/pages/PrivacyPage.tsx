"use client";

import LegalLayout, { type LegalSection } from "../legal/LegalLayout";
import { COMPANY, LEGAL_DATES } from "../../lib/company";

const SECTIONS: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <>
        <p>
          FIDE is a Shopify app by {COMPANY.shortName} (&quot;we&quot;,
          &quot;us&quot;) that lets merchants collect quote requests from their
          customers. This policy explains what data we handle, why, how we
          protect it, and the rights you have over it. We&apos;ve kept it plain —
          if anything&apos;s unclear, email us.
        </p>
        <p>
          For <strong>customer</strong> data, the merchant is the data
          controller and FIDE is the processor acting on their behalf. For{" "}
          <strong>merchant</strong> account data, {COMPANY.shortName} is the
          controller.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    title: "What we collect",
    body: (
      <>
        <ul>
          <li>
            <strong>Merchant data</strong> — store name, Shopify store URL and
            ID, your account name and email, subscription/billing status, and the
            settings you choose in the app. Payment card details are handled by
            Shopify Billing; we never see them.
          </li>
          <li>
            <strong>Customer data</strong> — name, email, phone (if your form
            asks for it), the products/details requested, any notes, and the date
            of the request. We only collect the fields the merchant adds to their
            form.
          </li>
          <li>
            <strong>Usage and technical data</strong> — feature usage, error
            logs, and limited technical diagnostics, used to keep the app
            reliable. We do not collect IP addresses or cookies for analytics
            purposes; our error monitoring is configured to exclude them.
          </li>
        </ul>
        <p>We do not sell data, and we do not use it for advertising or profiling.</p>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use it",
    body: (
      <ul>
        <li><strong>Merchant data</strong> — to run your account, deliver the app, process billing, and provide support.</li>
        <li><strong>Customer data</strong> — to capture, store, and display quote requests to the merchant, and to send quote-related emails on the merchant&apos;s behalf.</li>
        <li><strong>Usage data</strong> — to monitor app health, fix bugs, prevent abuse, and improve features.</li>
      </ul>
    ),
  },
  {
    id: "storage",
    title: "Where it's stored and how it's protected",
    body: (
      <>
        <p>
          FIDE is hosted on Fly.io in the Singapore (SIN) region, on a managed
          PostgreSQL database. Transactional emails are sent via Gmail SMTP or,
          where a merchant configures their own sender, via Elastic Email or a
          custom SMTP provider.
        </p>
        <ul>
          <li><strong>Encryption in transit</strong> — all connections are HTTPS/TLS enforced.</li>
          <li><strong>Encryption at rest</strong> — sensitive fields (such as merchant SMTP credentials) are encrypted with AES-256-GCM.</li>
          <li><strong>Access controls</strong> — Shopify OAuth for authentication, HMAC-verified webhooks, and per-shop data scoping so each store&apos;s data is isolated.</li>
          <li><strong>PII minimisation</strong> — error monitoring excludes IP addresses, cookies, and request headers.</li>
          <li><strong>Least privilege</strong> — we request only the Shopify API scopes the app actually needs.</li>
          <li><strong>Monitoring</strong> — Sentry for error tracking and Fly.io health checks for uptime.</li>
        </ul>
        <p>No system is perfectly secure, but we take reasonable, appropriate steps and review them regularly.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <>
        <p>
          FIDE uses event-driven deletion rather than scheduled time-based
          purges. Data is deleted when the triggering event occurs (uninstall,
          customer deletion request, or a GDPR webhook), not on a rolling
          calendar.
        </p>
        <ul>
          <li><strong>Merchant data</strong> — kept while the app is installed. After uninstall, retained for up to 2 days, then permanently deleted via the <code>shop/redact</code> webhook (~48 hours after uninstall).</li>
          <li><strong>Customer data</strong> — kept while the app is installed and the quote record is active. On a customer deletion request, all personal data fields are replaced with redacted values; the anonymised record is retained for analytics continuity but contains no personal information. On uninstall, remaining customer data is deleted with the store&apos;s data.</li>
          <li><strong>Usage and analytics data</strong> — no separate analytics store; figures are computed live and deleted with the store&apos;s data on uninstall.</li>
          <li><strong>System logs</strong> — governed by Fly.io and Sentry plan-level retention policies.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>We share data only with the providers needed to run FIDE, never for sale:</p>
        <div className="legal-table-wrap">
          <table>
            <thead>
              <tr><th>Provider</th><th>Receives</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td>Shopify</td><td>Merchant, store, and quote data</td><td>The app runs on Shopify; data flows through its APIs.</td></tr>
              <tr><td>Fly.io (Singapore)</td><td>All app data</td><td>Hosting and infrastructure.</td></tr>
              <tr><td>Prisma Postgres</td><td>All structured app data</td><td>Managed PostgreSQL database.</td></tr>
              <tr><td>Sentry (EU — Germany)</td><td>Error and diagnostic data</td><td>Error monitoring, configured to exclude IPs, cookies, and headers.</td></tr>
              <tr><td>Cloudinary</td><td>Uploaded files</td><td>File and image storage for merchant-uploaded assets.</td></tr>
              <tr><td>Gmail SMTP</td><td>Merchant and customer email addresses</td><td>Default sender for quote notifications.</td></tr>
              <tr><td>Elastic Email (optional)</td><td>Email addresses</td><td>Alternative sender if configured by the merchant.</td></tr>
              <tr><td>Custom SMTP (optional)</td><td>Email addresses</td><td>Used only when a merchant provides their own SMTP credentials.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          All providers are bound by data-protection terms. Where data leaves the
          EEA/UK, we rely on Standard Contractual Clauses. A current sub-processor
          list is available on request. We may also disclose data where required
          by law.
        </p>
      </>
    ),
  },
  {
    id: "gdpr",
    title: "Your GDPR rights",
    body: (
      <>
        <p>
          If you&apos;re in the EEA, UK, or Switzerland, you have the right to
          access, correct, delete, restrict, object to, or port your personal
          data, and to withdraw consent where processing relies on it. You can
          also complain to your local data protection authority.
        </p>
        <p>
          <strong>Lawful basis:</strong> we process merchant data under contract,
          usage data under legitimate interests, customer data under consent
          (given to the merchant), and any other data as required by legal
          obligation.
        </p>
        <p>
          <strong>To make a request:</strong> merchants email us directly.
          Customers should contact the merchant they submitted a quote to, since
          that merchant is the controller. If a customer contacts us, we&apos;ll
          forward the request or help the merchant fulfil it. We verify identity
          before acting.
        </p>
      </>
    ),
  },
  {
    id: "webhooks",
    title: "Deletion and Shopify GDPR webhooks",
    body: (
      <>
        <p>
          You can request deletion at any time by emailing us. Merchants can also
          trigger deletion by uninstalling the app — data is retained for up to 2
          days, then permanently deleted via the <code>shop/redact</code> webhook.
          FIDE implements Shopify&apos;s three mandatory compliance webhooks:
        </p>
        <ul>
          <li><code>customers/data_request</code> — we provide a customer&apos;s data to the merchant so they can respond to an access request.</li>
          <li><code>customers/redact</code> — we replace all personal data fields with redacted values; the anonymised quote record is retained but contains no personal information.</li>
          <li><code>shop/redact</code> — sent ~48 hours after uninstall; we run a final deletion pass to permanently remove all store data.</li>
        </ul>
        <p>Webhook deletions are permanent and cannot be reversed.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <>
        <p>
          FIDE uses only the cookies necessary to operate the app (for example,
          session authentication). We do not use analytics cookies, advertising
          cookies, or any third-party tracking.
        </p>
        <p>
          The FIDE storefront widget also uses your browser&apos;s local storage
          (not a cookie) to cache the quote form configuration for performance.
          The key stored is <code>qr_cfg_v1_&lt;shop&gt;</code> and contains only
          app configuration data — no personal information, no tracking
          identifiers. It is strictly functional and can be cleared at any time by
          clearing your browser&apos;s site data. See our{" "}
          <a href="/cookies">Cookie Policy</a> for full detail.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        FIDE is a business tool, not directed at children, and we don&apos;t
        knowingly collect data from anyone under 16. If you believe a
        child&apos;s data was collected, contact us and we&apos;ll delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes",
    body: (
      <p>
        We may update this policy to reflect changes in our practices or the law.
        We&apos;ll update the date above and, for material changes, notify
        merchants in the app or by email. Continued use after changes take effect
        means you accept them.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <>
        <ul>
          <li><strong>Privacy email:</strong> <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a></li>
          <li><strong>Company:</strong> {COMPANY.legalName}</li>
          <li><strong>Registered address:</strong> {COMPANY.registeredAddress}</li>
          <li><strong>Corporate address:</strong> {COMPANY.corporateAddress}</li>
        </ul>
        <p>
          We acknowledge privacy requests within 2 business days and resolve them
          within 30 days (extendable by up to two months for complex requests, as
          GDPR allows).
        </p>
      </>
    ),
  },
];

export type LegalContext = { eyebrow?: string; backHref?: string; backLabel?: string };

export default function PrivacyPage(ctx: LegalContext = {}) {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How FIDE Labs handles merchant and customer data, why, and the rights you have over it."
      effective={LEGAL_DATES.effective}
      updated={LEGAL_DATES.updated}
      sections={SECTIONS}
      {...ctx}
    />
  );
}
