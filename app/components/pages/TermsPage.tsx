"use client";

import LegalLayout, { type LegalSection } from "../legal/LegalLayout";
import { COMPANY, LEGAL_DATES } from "../../lib/company";

const SECTIONS: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement",
    body: (
      <>
        <p>
          FIDE (&quot;the App&quot;) is a Shopify application developed and
          operated by {COMPANY.shortName} (&quot;we&quot;, &quot;us&quot;,
          &quot;our&quot;). These Terms govern your access to and use of the App
          and form a binding agreement between you (the &quot;Merchant&quot;) and{" "}
          {COMPANY.shortName} from the moment you install the App. By installing,
          accessing, or using FIDE, you confirm you have read, understood, and
          agree to be bound by them. If you do not agree, do not install or use
          the App.
        </p>
        <p>
          These Terms apply to merchants — Shopify store owners and their
          authorised staff. They do not create any direct legal relationship
          between {COMPANY.shortName} and your customers.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility and account",
    body: (
      <ul>
        <li>FIDE runs exclusively on Shopify; you must have a valid, active store and comply with Shopify&apos;s Terms of Service.</li>
        <li>You are responsible for all activity under your account, including staff, and for maintaining the confidentiality of your Shopify credentials.</li>
        <li>All information you provide must be accurate and kept current.</li>
        <li>FIDE is licensed per store; each store requires its own subscription.</li>
        <li>The App is for commercial business use. You must be at least 18 (or the age of majority in your jurisdiction).</li>
      </ul>
    ),
  },
  {
    id: "service",
    title: "The service",
    body: (
      <>
        <p><strong>What FIDE does:</strong></p>
        <ul>
          <li>Adds a Request a Quote button and customisable form to product or collection pages.</li>
          <li>Hides product prices and the Add to Cart button for selected customers or all visitors.</li>
          <li>Lets merchants receive, view, manage, and respond to quote requests via a dashboard.</li>
          <li>Sends quote-related email notifications to customers on the merchant&apos;s behalf.</li>
        </ul>
        <p>
          <strong>What FIDE does not do:</strong> the App does not process
          payments, guarantee orders, or enter into contracts with your customers.
          A quote request is not an order; any binding agreement for the sale of
          goods is made directly between you and your customer.
        </p>
        <p>
          We aim to keep FIDE available at all times but do not guarantee
          uninterrupted or error-free service, as it depends on Shopify and
          third-party providers.
        </p>
      </>
    ),
  },
  {
    id: "licence",
    title: "Licence",
    body: (
      <p>
        Subject to these Terms and payment of applicable fees, we grant you a
        limited, non-exclusive, non-transferable, non-sublicensable, revocable
        licence to use FIDE to operate quote request functionality on your
        Shopify store(s). You must not copy, modify, reverse engineer, resell, or
        sublicence the App, use it unlawfully, or attempt to access another
        merchant&apos;s data. FIDE and all related IP are owned by{" "}
        {COMPANY.shortName} or our licensors.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <p>
        You must not use the App in any way that is unlawful, fraudulent, or
        harmful; to transmit spam or malicious code; to post objectionable or
        infringing material; to conduct automated data collection without our
        consent; or to attempt unauthorised access to the App or its
        infrastructure. Breach may result in immediate suspension or termination.
      </p>
    ),
  },
  {
    id: "merchant-responsibilities",
    title: "Merchant responsibilities",
    body: (
      <>
        <p>You are solely responsible for the content of your quote forms and communications, and for complying with applicable laws in your and your customers&apos; jurisdictions.</p>
        <p>
          <strong>Customer data:</strong> you are the data controller for the
          personal data your customers submit. You represent that you have a
          lawful basis to collect and process it, have obtained any required
          consents, and that your use complies with GDPR, UK GDPR, and CCPA where
          applicable.
        </p>
        <p>
          You are responsible for maintaining your own privacy and cookie/local
          storage notices (including FIDE&apos;s <code>qr_cfg_v1_&lt;shop&gt;</code>{" "}
          local storage entry), for email-sender compliance if you configure your
          own SMTP, and for backing up your business-critical data.
        </p>
      </>
    ),
  },
  {
    id: "billing",
    title: "Billing and payment",
    body: (
      <ul>
        <li>All billing is processed through Shopify&apos;s billing system; we never store your payment card details.</li>
        <li>Fees are charged per store. We may change pricing with reasonable advance notice.</li>
        <li>Where a free trial is offered, you are not charged until it expires.</li>
        <li>Fees are exclusive of applicable taxes, which are added and billed through Shopify.</li>
        <li>Subscription fees are charged in advance and are generally non-refundable, except where required by law or at our discretion. You may cancel any time by uninstalling.</li>
      </ul>
    ),
  },
  {
    id: "data",
    title: "Data and privacy",
    body: (
      <p>
        Our handling of personal data is governed by our{" "}
        <a href="/privacy">Privacy Policy</a>, which forms part of these Terms.
        For customer data collected through the App, {COMPANY.shortName} acts as a
        data processor and you are the data controller. FIDE implements
        Shopify&apos;s mandatory GDPR webhooks (<code>customers/data_request</code>,{" "}
        <code>customers/redact</code>, <code>shop/redact</code>). See our{" "}
        <a href="/gdpr">GDPR Compliance</a> page for detail.
      </p>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services",
    body: (
      <p>
        The App relies on third-party platforms including Shopify, Fly.io, Prisma
        Postgres, Sentry, Cloudinary, and email providers. We are not responsible
        for their acts or omissions, and your use of them may be subject to their
        own terms. Any third-party content does not constitute our endorsement.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: (
      <p>
        FIDE is provided &quot;as is&quot; and &quot;as available.&quot; To the
        fullest extent permitted by law, we disclaim all warranties, express or
        implied, including merchantability, fitness for a particular purpose, and
        uninterrupted or error-free operation. We do not guarantee that using FIDE
        will increase sales or produce any specific business outcome.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, {COMPANY.shortName}&apos;s total
        liability for any claim relating to these Terms or the App shall not
        exceed the greater of the fees you paid in the three months before the
        event, or USD $100. We are not liable for indirect, incidental, special,
        consequential, or punitive damages. Nothing limits liability that cannot
        be excluded by law.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    body: (
      <p>
        You agree to indemnify and hold harmless {COMPANY.shortName} and its
        directors, officers, employees, and agents from any claims, liabilities,
        damages, and costs arising from your breach of these Terms, your violation
        of law or third-party rights, your communications with your customers, or
        content you configure or transmit through the App.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Cancellation and termination",
    body: (
      <>
        <p>
          These Terms commence when you install the App and continue until
          terminated. You may cancel at any time by uninstalling FIDE from your
          Shopify store. We may suspend or terminate access if you breach these
          Terms, engage in fraudulent or illegal activity, are required by law or
          Shopify, or if we discontinue the App (with reasonable notice).
        </p>
        <p>
          On termination, your licence ends, you must cease use, and we will
          delete your data in line with our Privacy Policy. Provisions that should
          survive termination (IP, disclaimers, liability, indemnification,
          confidentiality, disputes) will do so.
        </p>
      </>
    ),
  },
  {
    id: "disputes",
    title: "Disputes and governing law",
    body: (
      <p>
        These Terms are governed by the laws of {LEGAL_DATES.jurisdiction},
        without regard to conflict-of-law principles. Before bringing any formal
        claim, you agree to contact us and allow 30 days to resolve the dispute
        informally. If unresolved, both parties submit to the exclusive
        jurisdiction of the courts of {LEGAL_DATES.jurisdiction}. Nothing affects
        any statutory rights you have as a consumer.
      </p>
    ),
  },
  {
    id: "general",
    title: "Changes and general",
    body: (
      <p>
        We may update these Terms; we&apos;ll update the date above and notify you
        of material changes through the App or by email. These Terms, with the
        Privacy Policy, are the entire agreement between you and{" "}
        {COMPANY.shortName}. If any provision is unenforceable, the rest remain in
        force. We may assign our rights in connection with a merger or sale; you
        may not assign yours without our consent. Nothing here creates a
        partnership, and we are not liable for delays caused by events beyond our
        reasonable control.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <ul>
        <li><strong>Legal email:</strong> <a href={`mailto:${COMPANY.legalEmail}`}>{COMPANY.legalEmail}</a></li>
        <li><strong>Privacy email:</strong> <a href={`mailto:${COMPANY.privacyEmail}`}>{COMPANY.privacyEmail}</a></li>
        <li><strong>Company:</strong> {COMPANY.legalName}</li>
        <li><strong>Registered address:</strong> {COMPANY.registeredAddress}</li>
        <li><strong>Corporate address:</strong> {COMPANY.corporateAddress}</li>
      </ul>
    ),
  },
];

export type LegalContext = { eyebrow?: string; backHref?: string; backLabel?: string };

export default function TermsPage(ctx: LegalContext = {}) {
  return (
    <LegalLayout
      title="Terms & Conditions"
      intro="The terms governing your access to and use of FIDE. Please read them carefully."
      effective={LEGAL_DATES.effective}
      updated={LEGAL_DATES.updated}
      sections={SECTIONS}
      {...ctx}
    />
  );
}
