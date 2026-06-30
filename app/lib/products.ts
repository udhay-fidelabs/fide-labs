import type { IconName } from "../components/Icon";
import type { FaqItem } from "./faq";

/**
 * SINGLE SOURCE OF TRUTH FOR THE PRODUCT CATALOG.
 *
 * The site currently ships one product, but the entire Products and
 * Documentation experience is driven by this array. To add a product later,
 * append a new `Product` object here — the listing page, product detail pages
 * (/products/[slug]), docs, navigation, related-product sections, and the
 * per-product policy pages (/products/[slug]/privacy etc.) all read from this
 * list, so no page needs to be redesigned.
 *
 * Documentation is authored entirely in Markdown (the `md` field on each
 * DocSection — heading, intro, and body) and rendered by
 * app/components/Markdown.tsx.
 */

export type DocSection = {
  key: string;
  group: string;
  /** Short label shown in the docs sidebar. */
  label: string;
  /** Full section content authored in Markdown (starts with an `#` heading). */
  md: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  status: "available" | "coming-soon";
  category: string;
  heroPoints: string[];
  features: { icon: IconName; title: string; desc: string; points: string[] }[];
  benefits: { icon: IconName; title: string; desc: string }[];
  audience: string[];
  /** Product-specific FAQ appended after the shared general FAQ (optional). */
  faqs?: FaqItem[];
  docs: DocSection[];
};

const fideQuoteRequest: Product = {
  slug: "fide-quote-request",
  name: "FIDE Quote Request",
  shortName: "Quote Request",
  tagline: "Request a Quote & Hide Price for Shopify",
  summary:
    "A complete B2B quoting workflow for Shopify — add a Request a Quote button, hide prices from guests, and manage every request from one clean dashboard. No code.",
  status: "available",
  category: "B2B & Wholesale",
  heroPoints: ["No code", "No developer", "Live in under 10 minutes"],
  features: [
    {
      icon: "tag",
      title: "Request a Quote button",
      desc: "Replace (or sit alongside) Add to Cart with a customizable Request a Quote button on any product or collection — no code required.",
      points: ["Custom button label and position", "Per-product and per-collection rules", "Configurable quote form fields"],
    },
    {
      icon: "eye-off",
      title: "Hide Price",
      desc: "Hide prices and the Add to Cart button from visitors who aren't approved buyers, encouraging them to request a personalized quote.",
      points: ["Individual products", "Whole collections", "Your entire catalogue"],
    },
    {
      icon: "cart",
      title: "Quote Cart",
      desc: "Let customers collect multiple products and submit a single consolidated quote request instead of asking one product at a time.",
      points: ["Add multiple products", "Adjust quantities", "One consolidated request"],
    },
    {
      icon: "grid",
      title: "Quote management dashboard",
      desc: "Every incoming request lands in one clean dashboard where you review, search, filter, track status, and respond with custom pricing.",
      points: ["Central request inbox", "Search, filter, and status tracking", "Approve, reject, or send a quote"],
    },
    {
      icon: "mail",
      title: "Email notifications",
      desc: "Automatically keep both merchant and customer in the loop across the quote lifecycle, sent from your own branded sender.",
      points: ["Gmail SMTP, Elastic Email, or custom SMTP", "Received, approved, rejected, updated", "Branded confirmation emails"],
    },
    {
      icon: "sliders",
      title: "Form builder & rules",
      desc: "Control exactly which products show the form and what it asks. Build the fields you need to qualify a buyer before you quote.",
      points: ["Custom form fields", "Product and collection targeting", "Match your store's branding"],
    },
  ],
  benefits: [
    { icon: "bolt", title: "Capture buyers you're losing", desc: "Give B2B shoppers a way to start a conversation instead of bouncing off a fixed price or a hidden one." },
    { icon: "storefront", title: "Feels native to Shopify", desc: "Built on official Shopify APIs and theme app extensions, so it updates with the platform instead of breaking against it." },
    { icon: "rocket", title: "Live the same afternoon", desc: "One-click theme install and smart defaults mean your first quote flow works in minutes — no developer needed." },
    { icon: "shield", title: "Private by design", desc: "We collect only what's needed, never sell data, and build GDPR handling and Shopify deletion webhooks in from the start." },
  ],
  audience: ["Wholesale suppliers", "Trade & B2B stores", "Made-to-order businesses", "High-value & bulk products"],
  docs: [
    {
      key: "overview",
      group: "Getting Started",
      label: "Overview",
      md: `# Overview

FIDE is the complete Request a Quote and Hide Price solution for Shopify merchants.

FIDE replaces the traditional purchasing experience with a professional quote workflow, letting customers request pricing instead of buying immediately. Whether you sell wholesale, custom-made items, bulk quantities, or high-value products, FIDE gives you control over how customers interact with your store.

By the end of this guide you'll have FIDE installed, configured, and ready to receive your first quote request.

> FIDE installs as an embedded Shopify app plus a theme app extension — no code changes to your theme.`,
    },
    {
      key: "what-it-does",
      group: "Getting Started",
      label: "What FIDE can do",
      md: `# What FIDE can do

Everything you need to build a professional quotation workflow inside Shopify.

## Request Quote
Replace the default Add to Cart button with a customizable Request a Quote button so customers submit inquiries instead of purchasing immediately. Perfect for wholesale, B2B, custom manufacturing, high-value products, and bulk purchasing.

## Hide Product Prices
Hide prices from selected products, collections, or your entire catalog, encouraging customers to request a personalized quote instead.

## Quote Cart
Let customers collect multiple products and submit one consolidated quote request — add products, adjust quantities, and submit together.

## Quote Management Dashboard
Review incoming requests, search and filter quotes, track status, approve or reject requests, and respond to customers — all from one place.

## Email Notifications
Automatically notify merchants and customers across the quote lifecycle (received, submitted, approved, rejected, updated) using Gmail SMTP, Elastic Email, or a custom SMTP server.`,
    },
    {
      key: "quick-start",
      group: "Getting Started",
      label: "Quick start",
      md: `# Quick start guide

Start accepting quote requests in a few minutes.

1. **Install FIDE** — Install FIDE from the Shopify App Store, grant the required permissions, launch it from your Shopify Admin, and complete onboarding.
2. **Enable the theme app extension** — Go to Online Store → Themes → Customize, open App Embeds, enable the FIDE – Theme App Extension, and Save. The extension must be on for FIDE widgets to appear on your storefront.
3. **Configure Request Quote** — Open Apps → FIDE → Request Quote Settings. Enable the button, choose whether to replace Add to Cart, set the label and position, and add product/collection rules. Save.
4. **Configure Hide Price (optional)** — Open Apps → FIDE → Hide Price and choose individual products, collections, or your entire store. Save.
5. **Configure email notifications** — Open Settings → Email Notifications, choose Gmail SMTP, Elastic Email, or custom SMTP, and send a test email before going live.
6. **Submit a test quote** — On your storefront, open a product, click Request Quote, complete the form, and submit. Confirm the merchant alert, the customer confirmation, and that the quote appears in your Quote List.`,
    },
    {
      key: "checklist",
      group: "Getting Started",
      label: "Go-live checklist",
      md: `# Installation checklist

Confirm the following before going live.

- FIDE installed successfully
- Theme app extension enabled
- Request Quote button visible on the storefront
- Hide Price configured (if required)
- Email notifications working (test sent and received)
- Quote dashboard receiving requests
- Storefront tested on desktop and mobile`,
    },
    {
      key: "request-quote",
      group: "Features",
      label: "Request Quote button",
      md: `# Request Quote button

Turn any product into a quote request.

The Request Quote button replaces — or sits beside — Add to Cart on the products and collections you choose. Configure it under **Apps → FIDE → Request Quote Settings**.

- Custom button label and position
- Replace Add to Cart or show both
- Per-product and per-collection targeting rules
- Configurable quote form fields`,
    },
    {
      key: "hide-price",
      group: "Features",
      label: "Hide Price",
      md: `# Hide Price

Hide pricing from visitors who aren't approved buyers.

Hide prices and the Add to Cart button to encourage customers to request a quote. Configure under **Apps → FIDE → Hide Price**.

- Hide on individual products
- Hide on whole collections
- Hide across your entire store

> Hide Price pairs naturally with the Request Quote button so guests always have a clear next step.`,
    },
    {
      key: "quote-cart",
      group: "Features",
      label: "Quote Cart",
      md: `# Quote Cart

One request for multiple products.

Instead of requesting quotes one product at a time, customers can collect several products and submit a single consolidated request.

- Add multiple products
- Adjust quantities
- Remove products
- Submit one consolidated quote request`,
    },
    {
      key: "dashboard",
      group: "Features",
      label: "Dashboard",
      md: `# Quote management dashboard

Every request, organized and ready to act on.

Manage every quote request from one centralized dashboard.

- Review incoming requests
- Search and filter quotes
- Track quote status
- Approve or reject requests
- Respond to customers with custom pricing`,
    },
    {
      key: "email",
      group: "Features",
      label: "Email notifications",
      md: `# Email notifications

Keep merchants and customers in sync automatically.

FIDE notifies both sides throughout the quote process, sent from your own branded sender.

## Quote lifecycle emails

| Event | Sent to | When it's sent |
| --- | --- | --- |
| Quote Request Received | Merchant | A customer submits a request |
| Quote Submitted | Customer | Their request is confirmed |
| Quote Approved | Customer | You accept and price the request |
| Quote Rejected | Customer | You decline the request |
| Quote Updated | Customer | You change an existing quote |

## Supported providers
- Gmail SMTP
- Elastic Email
- Custom SMTP servers

> Send a test email from Settings → Email Notifications before going live.`,
    },
    {
      key: "troubleshooting",
      group: "Help",
      label: "Troubleshooting",
      md: `# Troubleshooting

Common fixes when something isn't appearing.

## The Request Quote button isn't showing
Make sure the theme app extension is enabled (Online Store → Themes → Customize → App Embeds) and that your product/collection rules include the product you're viewing.

## Customers aren't receiving emails
Re-check your email provider settings under Settings → Email Notifications and send a test email. Confirm the sender address is authorized to send mail.

Still stuck? Email [support@fidelabs.io](mailto:support@fidelabs.io) and we'll help.`,
    },
  ],
};

export const PRODUCTS: Product[] = [fideQuoteRequest];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function relatedProducts(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.slug !== slug);
}
