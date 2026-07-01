"use client";

import LegalLayout, { type LegalSection } from "../legal/LegalLayout";
import { COMPANY, LEGAL_DATES } from "../../lib/company";

const SECTIONS: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <p>
        FIDE uses only the cookies and storage strictly necessary to operate the
        app. We do not use analytics cookies, advertising cookies, or any
        third-party tracking. This policy explains what we store and why, and
        complements our <a href="/privacy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: "necessary",
    title: "Strictly necessary cookies",
    body: (
      <p>
        Within the merchant app, FIDE uses cookies necessary for the app to
        function — for example, session authentication so you stay signed in
        while using the dashboard. These are essential; the app cannot work
        without them.
      </p>
    ),
  },
  {
    id: "local-storage",
    title: "Functional local storage",
    body: (
      <>
        <p>
          The FIDE storefront widget uses your browser&apos;s local storage (not a
          cookie) to cache the quote form configuration for performance. The key
          stored is <code>qr_cfg_v1_&lt;shop&gt;</code> and contains only app
          configuration data — no personal information and no tracking
          identifiers.
        </p>
        <p>
          Several jurisdictions treat local storage as a &quot;similar
          technology&quot; to cookies, so we disclose it here for transparency. It
          is strictly functional and can be cleared at any time by clearing your
          browser&apos;s site data.
        </p>
      </>
    ),
  },
  {
    id: "no-tracking",
    title: "What we don't use",
    body: (
      <ul>
        <li>No analytics cookies.</li>
        <li>No advertising or marketing cookies.</li>
        <li>No third-party tracking or profiling.</li>
        <li>Our error monitoring excludes IP addresses, cookies, and request headers.</li>
      </ul>
    ),
  },
  {
    id: "merchant-responsibility",
    title: "Merchant responsibilities",
    body: (
      <p>
        Merchants are responsible for disclosing the cookies and local storage
        used on their own storefront — including FIDE&apos;s{" "}
        <code>qr_cfg_v1_&lt;shop&gt;</code> entry — in their own privacy and
        cookie notices, as required by applicable ePrivacy and data-protection
        laws.
      </p>
    ),
  },
  {
    id: "managing",
    title: "Managing cookies & storage",
    body: (
      <p>
        You can clear or block cookies and local storage through your
        browser&apos;s settings at any time. Because the items FIDE uses are
        strictly necessary or functional, clearing them may sign you out of the
        merchant app or require the storefront widget to reload its
        configuration.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <ul>
        <li><strong>Email:</strong> <a href={`mailto:${COMPANY.supportEmail}`}>{COMPANY.supportEmail}</a></li>
        <li><strong>Company:</strong> {COMPANY.legalName}</li>
      </ul>
    ),
  },
];

export type LegalContext = { eyebrow?: string; backHref?: string; backLabel?: string };

export default function CookiesPage(ctx: LegalContext = {}) {
  return (
    <LegalLayout
      title="Cookie Policy"
      intro="What FIDE stores in cookies and local storage — and what we deliberately don't."
      effective={LEGAL_DATES.effective}
      updated={LEGAL_DATES.updated}
      sections={SECTIONS}
      {...ctx}
    />
  );
}
