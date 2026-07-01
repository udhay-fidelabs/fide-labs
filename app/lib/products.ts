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

/**
 * A single entry in the product screenshot carousel.
 *
 * `src` is intentionally optional: when it's empty the gallery renders a
 * styled placeholder (icon + label) so the section looks complete before real
 * screenshots exist. To use a real image, drop the file into
 * `public/products/<slug>/` and set `src` to its path (e.g.
 * "/products/fide-quote-request/dashboard.png") — no other code changes needed.
 */
export type Screenshot = {
  /** Short label shown in the frame title bar and thumbnail. */
  label: string;
  /** One-line caption shown under the active slide. */
  caption: string;
  /** Icon used for the placeholder until a real image is added. */
  icon: IconName;
  /** Path to a real screenshot in /public. Leave undefined to show a placeholder. */
  src?: string;
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
  /** Product screenshots shown in the detail-page carousel. */
  screenshots: Screenshot[];
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
  // Placeholders for now — drop real screenshots into
  // public/products/fide-quote-request/ and set each `src` to swap them in.
  screenshots: [
    { label: "Quote dashboard", icon: "grid", caption: "Every incoming request in one place — review, filter, track status, and respond with custom pricing." },
    { label: "Request a Quote button", icon: "tag", caption: "A customizable Request a Quote button on any product or collection — no code required." },
    { label: "Hide Price", icon: "eye-off", caption: "Hide prices and the Add to Cart button from guests to drive quote requests." },
    { label: "Quote Cart", icon: "cart", caption: "Customers collect multiple products and submit one consolidated quote request." },
    { label: "Email notifications", icon: "mail", caption: "Branded, automatic emails across the full quote lifecycle — sent from your own address." },
  ],
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

Welcome to FIDE — the complete Request a Quote and Hide Price solution built for Shopify merchants.

FIDE replaces the traditional purchasing experience with a professional quote workflow, letting customers request pricing instead of buying immediately. Whether you sell wholesale products, custom-made items, bulk quantities, or high-value products, FIDE gives you complete control over how customers interact with your store.

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
Replace the default Add to Cart button with a customizable Request Quote button so customers submit inquiries instead of purchasing immediately. Perfect for wholesale businesses, B2B stores, custom manufacturing, high-value products, and bulk purchasing.

## Hide product prices
Hide prices from selected products, collections, or your entire catalog. This is ideal when prices vary between customers, products require consultation, pricing depends on quantity, or you offer custom pricing.

## Quote Cart
Let customers collect multiple products before submitting a single quote request. Instead of requesting quotes one product at a time, customers can add multiple products, adjust quantities, remove products, and submit one consolidated request.

## Quote management dashboard
Manage every quote request from one centralized dashboard — review incoming requests, search and filter quotes, track status, approve or reject requests, and respond to customers.

## Email notifications
Automatically notify both merchants and customers throughout the quote process — Quote Request Received, Quote Submitted, Quote Approved, Quote Rejected, and Quote Updated. FIDE supports Gmail SMTP, Elastic Email, and custom SMTP servers.`,
    },
    {
      key: "quick-start",
      group: "Getting Started",
      label: "Quick start",
      md: `# Quick start guide

Follow these steps to start accepting quote requests in just a few minutes.

1. **Install FIDE** — Install FIDE directly from the Shopify App Store. Grant the required permissions, launch FIDE from your Shopify Admin, and complete the onboarding process.
2. **Enable the theme app extension** — Go to **Shopify Admin → Online Store → Themes → Customize**, open the **App Embeds** section, enable **FIDE – Theme App Extension**, and click **Save**. The extension must be enabled for FIDE widgets to appear on your storefront.
3. **Configure Request Quote** — Open **Apps → FIDE → Quote Settings**. Enable the Request Quote button, choose whether to replace Add to Cart, set the button label and position, and add your product and collection rules. Save your changes.
4. **Configure Hide Price (optional)** — Open **Apps → FIDE → Quote Settings → Hide Price** and choose individual products, collections, or your entire store. Save your configuration.
5. **Configure email notifications** — Open **Settings → Email Notifications**, choose your preferred provider (Gmail SMTP, Elastic Email, or custom SMTP), and send a test email before going live.
6. **Submit a test quote** — On your storefront, open a product, click **Request Quote**, complete the form, and submit. Verify the merchant receives an email notification, the customer receives a confirmation email, and the quote appears in your **Quote List**.`,
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
      key: "theme-extension",
      group: "Setup & configuration",
      label: "Theme app extension",
      md: `# Enable the theme app extension

FIDE works with most Shopify themes through Shopify's theme app extensions, so there are no code changes to your theme. The extension must be enabled for FIDE widgets to appear on your storefront.

1. Go to **Shopify Admin → Online Store**.
2. Click **Customize** on your active theme (or **Edit theme**).
3. In the Theme Editor, open the **App Embeds** panel.
4. Enable **FIDE – Theme App Extension**.
5. Click **Save**.

> Tip: The app extension must be enabled for FIDE widgets to appear on your storefront.`,
    },
    {
      key: "request-quote",
      group: "Setup & configuration",
      label: "Request Quote button",
      md: `# Request Quote button

Configure where and how the Request Quote button appears on your storefront under **Apps → FIDE → Quote Settings**.

## 1. General settings
1. Open **Apps → FIDE → Quote Settings**.
2. Select where the Request Quote button should appear.
3. Choose how the button behaves (replace Add to Cart, or show alongside it).
4. Configure customer visibility if required.

> Tip: Use **All Products** to enable the Request Quote button across your entire store.

## 2. Button style
1. Enter the button label.
2. Choose the text and background colours.
3. Adjust the text size.
4. Save your changes.

## 3. Floating quote widget
1. Enable the Quote Widget.
2. Set the widget label.
3. Choose its position.
4. Customize the widget colours.

## 4. Toast notifications
1. Enable toast notifications.
2. Edit the notification messages shown after customer actions.
3. Customize the appearance.
4. Select the notification position.`,
    },
    {
      key: "hide-price",
      group: "Setup & configuration",
      label: "Hide Price",
      md: `# Hide Price

Hide pricing from visitors who aren't approved buyers, encouraging them to request a quote instead.

1. Open **Apps → FIDE → Quote Settings**.
2. Scroll to the **Hide Price** section.
3. Choose where prices should be hidden — all products, specific collections, or hand-picked products.
4. Select the pages where prices will be hidden.
5. Optionally hide the **Add to Cart** and **Buy Now** buttons.
6. Choose whether to display replacement text when prices are hidden.
7. Click **Save**.

> Hide Price pairs naturally with the Request Quote button so guests always have a clear next step.`,
    },
    {
      key: "form-builder",
      group: "Setup & configuration",
      label: "Form Builder",
      md: `# Form Builder

Customize the Request Quote form shown to customers before they submit a quote request, under **Apps → FIDE → Quote Settings → Form Builder**.

## Configure the quote form
1. Open **Apps → FIDE → Quote Settings → Form Builder**.
2. Edit the form heading and submit button text.
3. Customize the button style.
4. Choose which product details to display.
5. Add or remove customer information fields.
6. Save your changes.

## Configure customer information fields
1. Scroll down to the **Form Builder**.
2. Expand a contact field to edit its settings.
3. Update the field label, placeholder, and help text if needed.
4. Mark the field as **Required** or optional.
5. Add new fields or remove existing ones.
6. Save your changes.

> Tip: Only keep the fields you need to make the quote request process simple for your customers.`,
    },
    {
      key: "email",
      group: "Setup & configuration",
      label: "Email notifications",
      md: `# Email notifications

Keep merchants and customers in sync automatically. FIDE notifies both sides throughout the quote process, sent from your own branded sender.

## Configure the email provider
1. Open **Settings → Email Notifications**.
2. Choose your preferred email provider.
3. Enter the admin notification email address.
4. Click **Save**.
5. Enable or edit the required email notifications.

> Tip: Enable only the notifications you want customers or administrators to receive.

## Customize an email template
1. Open the email template you want to edit.
2. Enable or disable the notification.
3. Update the email subject and heading.
4. Customize the email content and action button.
5. Send a test email to verify the template.
6. Save your changes.

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

> Tip: Use the preview panel to review your email, and send a test before going live.`,
    },
    {
      key: "dashboard",
      group: "Managing quotes",
      label: "Dashboard overview",
      md: `# Dashboard overview

The Dashboard gives you a quick overview of your quote activity, recent requests, and key performance metrics.

1. Open **Apps → FIDE**. The Dashboard opens automatically after launching the app.
2. Review the setup guide to complete the initial configuration.
3. Check the summary cards for **Total Quotes**, **This Month**, **Accepted Quotes**, and **Revenue**.
4. View the **Recent Quotes** section to monitor incoming quote requests.
5. Review **Top Requested Products** and the **Summary** panel for quick insights.

> Tip: Use the dashboard to monitor quote activity and quickly access recent customer requests.`,
    },
    {
      key: "quote-cart",
      group: "Managing quotes",
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
      key: "manage-quotes",
      group: "Managing quotes",
      label: "View & respond to quotes",
      md: `# View and respond to quotes

Review, update, and respond to every quote request from the dashboard.

## 1. View quote details
1. Open **Apps → FIDE → Dashboard**.
2. From the **Recent Quotes** section, click **View all** to open the Quote List — or click **Quote List** in the left sidebar.
3. Open a quote from the Quote List to review all the information the customer submitted.

## 2. Edit customer information
1. From the Quote Details page, click **Edit** in the Customer section.
2. Update the customer information or shipping address as required.
3. Click **Done** to finish editing.

## 3. Save quote changes
1. Review the updated quote information.
2. Click **Save**.
3. Verify the confirmation message that the quote has been saved successfully.

## 4. Respond to the quote
1. Click **Accept** or **Reject** after reviewing and updating the details.
2. Choose the option as required and confirm.

> Accepting or rejecting a quote sends the corresponding email notification to the customer.`,
    },
    {
      key: "test-quote",
      group: "Managing quotes",
      label: "Submit a test quote",
      md: `# Submit a test quote

Confirm your setup end-to-end before going live.

1. Visit your storefront and open a product.
2. Click **Request a Quote**.
3. Fill in the required customer and product information.
4. Submit the quote request.

Verify:

- The merchant receives an email notification.
- The customer receives a confirmation email.
- The quote appears in the **Quote List** for review.`,
    },
    {
      key: "troubleshooting",
      group: "Help",
      label: "Troubleshooting",
      md: `# Troubleshooting

A diagnostic guide for the most frequently reported issues. Work through the relevant section, then contact support if the problem persists.

## Request Quote button is not visible
Possible causes: the app embed is disabled, the button is turned off, or the product/collection is excluded by your rules.

1. Open **Apps → FIDE → Quote Settings**.
2. Verify the Request Quote button is enabled.
3. Check your Product Rules and Collection Rules.
4. Ensure the app embed is enabled in your Shopify theme.
5. Refresh your storefront and check the product page again.

## Customer cannot submit a quote
1. Complete all required fields.
2. Review the form configuration in **Form Builder**.
3. Save your changes and try submitting the quote again.

## Quote is not appearing in the dashboard
1. Refresh the Dashboard or Quote List.
2. Verify the customer successfully submitted the quote.
3. Check whether the quote appears under **Quote List**.

## Email notifications are not being received
1. Open **Settings → Email Notifications** and verify the required notifications are enabled (Email Notification, Auto Response Email, Email Accept Quote, Email Reject Quote).
2. Confirm the correct email provider is selected and any SMTP details are entered and saved correctly.
3. Confirm the Admin Notification Email is correct and the customer entered a valid email address.
4. Send a test email to verify the configuration, then submit a test quote to confirm both merchant and customer emails arrive.

## Theme conflicts
FIDE is designed to work with most Shopify themes, but heavily customized or older themes may cause display or styling issues.

- If the button is styled incorrectly or hidden, check your theme for custom CSS affecting buttons and disable it temporarily to test.
- If the button or floating widget overlaps other elements, adjust the widget position under **Apps → FIDE → Quote Settings** and remove conflicting custom CSS.
- If Hide Price isn't working, confirm the feature is enabled and refresh the product page; a custom price element in the theme may need attention.

## Changes are not updating
1. Click **Save** after making changes.
2. Refresh the page (and clear your browser cache if necessary).
3. Verify the updated settings are applied.

Still stuck? Email [support@fidelabs.io](mailto:support@fidelabs.io) and we'll help.`,
    },
    {
      key: "faq",
      group: "Help",
      label: "FAQ",
      md: `# Frequently asked questions

## General

**What is FIDE Request Quote?**

FIDE Request Quote lets customers request custom pricing instead of purchasing products directly.

**Which Shopify plans are supported?**

FIDE works with supported Shopify plans. Refer to the installation guide for compatibility.

**Can I use FIDE with any Shopify theme?**

Yes — FIDE supports most Shopify themes. Some heavily customized themes may require additional configuration.

## Setup & installation

**How do I enable the Request Quote button?**

Open **Apps → FIDE → Quote Settings**, enable the Request Quote button, save your changes, and ensure the Theme App Extension is enabled.

**Why isn't the Request Quote button showing?**

Verify the button is enabled, the app embed is active, and the product or collection is included in your rules.

## Features

**Can I hide product prices?**

Yes. Enable **Hide Price** from Quote Settings and choose the products or collections where prices should be hidden.

**Can I customize the Request Quote form?**

Yes. Use the **Form Builder** to edit form fields, labels, placeholders, and required fields.

**Can I customize the Request Quote button?**

Yes. You can change the button text, colours, size, and position from Quote Settings.

## Quotes & dashboard

**Where can I view submitted quotes?**

Open **Apps → FIDE → Quote List** to view and manage all quote requests.

**How do I accept or reject a quote?**

Open the quote details and click **Accept** or **Reject**.

**Can I edit a submitted quote?**

Yes. Open the quote, click **Edit**, make your changes, and save.

## Email notifications

**Why didn't the customer receive a confirmation email?**

Verify that customer notifications are enabled and the customer's email address is correct.

**Why am I not receiving merchant notifications?**

Check your email notification settings and send a test email to verify the configuration.

## Support

**Where can I get help?**

If an issue persists after following this documentation, email [support@fidelabs.io](mailto:support@fidelabs.io) and our team will help.`,
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
