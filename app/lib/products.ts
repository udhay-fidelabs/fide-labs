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
 * app/components/Markdown.tsx. Callouts: start a blockquote with [!tip],
 * [!note], [!warning], or [!important]. Do not use backticks inside `md`
 * (the strings are template literals) — use **bold** for UI labels and paths.
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
      group: "Getting started",
      label: "Overview",
      md: `# Overview

Welcome to FIDE — the complete **Request a Quote** and **Hide Price** solution built for Shopify merchants.

FIDE replaces the buy-now checkout with a professional quote workflow: customers ask for pricing instead of purchasing immediately, and you respond with a custom offer. It's built for wholesale, B2B, made-to-order, bulk, and high-value catalogues where a single fixed price doesn't fit every buyer.

## What you can do with FIDE

- Add a **Request a Quote** button to any product or collection.
- **Hide prices** and the **Add to Cart** / **Buy Now** buttons from the shoppers you choose.
- Let customers build a **quote cart** of several products and submit one request.
- Collect exactly the details you need with a drag-and-drop **Form Builder**.
- Review, price, accept, or reject every request from a central **dashboard**.
- Send branded emails and PDFs automatically at each step.

## How it fits together

FIDE has two halves that work together:

- **Your storefront** — a Shopify theme app embed adds the quote button, the quote cart, and price hiding. No theme code required.
- **The admin app** — where you configure everything and manage incoming quotes: **Dashboard**, **Quote Settings**, **Quotes**, and **Settings**.

> [!tip] New here? Read **Enable the app** next, then follow the **Quick start** to go live in about 10 minutes.`,
    },
    {
      key: "install",
      group: "Getting started",
      label: "Enable the app",
      md: `# Enable the app on your theme

FIDE installs as a Shopify **theme app embed**. Nothing on your storefront works until the embed is turned on, so this is the first thing to do after installing FIDE from the Shopify App Store.

## Turn on the app embed

1. In your Shopify admin, go to **Online Store → Themes**.
2. On your live theme, click **Customize**.
3. In the theme editor, open the **App embeds** panel (the toggle-switch icon in the left sidebar).
4. Find **Quote Request** and switch it **on**.
5. Click **Save**.

> [!warning] If the embed is off, the Request a Quote button, quote cart, and price hiding will not appear on your storefront — even if everything is configured in the app.

## Theme editor settings

The app embed keeps its own settings inside the app (see **Quote Settings**), so the theme editor only exposes two optional fields for fine-tuning:

| Setting | When to use it |
| --- | --- |
| **Custom Product Card Selector** | If quote buttons don't line up neatly at the bottom of product cards, enter your theme's product-card class (for example, .product-card) so FIDE can align them. |
| **Custom CSS** | Add your own CSS rules for edge-case styling tweaks. |

> [!note] Leave both blank to start. Most themes work without them.`,
    },
    {
      key: "what-it-does",
      group: "Getting started",
      label: "Feature tour",
      md: `# Feature tour

A quick map of everything FIDE does, and where to configure it.

## Request a Quote button
A customizable button on product (and optionally collection and home) pages. Choose where it appears, who sees it, and exactly how it looks. Configured in **Quote Settings → Quote Settings** tab.

## Hide Price
Hide prices — and optionally the **Add to Cart** and **Buy Now** buttons — on the products, collections, or pages you choose, replacing the price with a message like "Price available on request." Configured in **Quote Settings → Quote Settings → Hide price settings**.

## Quote cart
Customers can add several products to a quote cart and submit them as one request, adjusting quantities along the way.

## Form Builder
Decide what the quote form asks for. Add, remove, and reorder fields across Contact, Shipping, and Additional sections, and choose which product details (and the customer's offered price) appear. Configured in **Quote Settings → Form Builder** tab.

## Quote management
Every request lands in **Quotes**, where you review it, set your pricing, and accept or reject it. Your **Dashboard** shows totals, recent quotes, and top requested products.

## Emails & PDFs
Automatic, branded emails keep you and your customer informed, and quotes/invoices can be exported as PDFs. Configured in **Settings**.`,
    },
    {
      key: "quick-start",
      group: "Getting started",
      label: "Quick start",
      md: `# Quick start

Go from install to your first quote in about 10 minutes. Each step links to a detailed guide if you want more.

## 1. Enable the app embed
Go to **Online Store → Themes → Customize → App embeds**, turn on **Quote Request**, and click **Save**. This activates FIDE on your storefront. (Full guide: **Enable the app**.)

## 2. Set up the quote button
Open **Quote Settings** and, on the **Quote Settings** tab:

1. Under **Where to show the quote button**, choose **All products**, **Specific collections only**, or **Hand-picked products only**.
2. Under **How the button behaves**, keep **Button only** to show the button on the page.
3. Optionally tick **Collection page** and **Homepage** under **Also show on**.
4. Under **Styles**, set the **Button text** (default "Request a Quote") and colours.
5. Click **Save**.

## 3. Hide prices (optional)
Still on the **Quote Settings** tab, open **Hide price settings**:

1. Choose which products to hide prices on (all / collections / hand-picked).
2. Tick the pages to hide prices on: **Product page**, **Collection page**, **Home page**, **Cart page**.
3. Optionally tick **Hide Add to Cart button** and **Hide Buy Now button**.
4. Set the replacement message (default "Price available on request") and **Save**.

## 4. Build your form
Open the **Form Builder** tab. Set the **Form heading** and **Submit button text**, then add or remove fields in the **Contact**, **Shipping**, and **Additional** sections. Choose which product details show under **Show product details in form** — including **Quote Price**, which lets the customer enter their offer.

## 5. Set up email
Go to **Settings → Email Settings**. Enter your **Admin Notification Email** (where new-quote alerts go), pick an email provider, and click **Send test email** to confirm it works.

## 6. Submit a test quote
In the **Form Builder** preview, turn on **Test Mode**, fill in the form, and submit. Then check that:

- You receive the admin notification email.
- The customer confirmation email arrives.
- The test quote appears in **Quotes**.

> [!tip] You can also test end-to-end on your live storefront: open a product, click **Request a Quote**, and submit the form.`,
    },
    {
      key: "checklist",
      group: "Getting started",
      label: "Go-live checklist",
      md: `# Go-live checklist

Run through this before you announce quoting to customers.

- App embed **Quote Request** enabled in the theme editor
- Request a Quote button visible on your storefront
- Button targeting rules point at the right products/collections
- Hide Price configured (if you're hiding prices) and checked on the right pages
- Add to Cart / Buy Now hidden where you want quote-only products
- Form Builder fields reviewed; required fields set
- **Admin Notification Email** set and a test email received
- Customer confirmation email received in a test submission
- A test quote appears in **Quotes** and can be accepted
- Storefront checked on desktop and mobile

> [!note] Prices are cached on the storefront for up to 5 minutes. After changing Hide Price settings, refresh the page (and clear your browser cache if needed) to see the update.`,
    },

    {
      key: "quote-button",
      group: "Request a Quote",
      label: "Quote button & placement",
      md: `# Quote button & placement

Control where the Request a Quote button appears and how it behaves. All of this lives in **Quote Settings → Quote Settings** tab → **Where to show the quote button**.

## Choose which products show the button

Pick one targeting mode:

- **All products** — the button appears on every product page (the default).
- **Specific collections only** — click **Browse** to pick collections; the button shows only on products in them.
- **Hand-picked products only** — click **Browse** to choose individual products.

## How the button behaves

- **Button only** — show the Request a Quote button on the page (default).
- **Don't show** — hide the button on product pages (useful if you only want the floating widget or quote cart).

## Also show on

Beyond product pages, you can add the button to:

- **Collection page** — on product cards in collection grids.
- **Homepage** — on featured products shown on the home page.

## Where the button sits

Under **Hide price settings → Where the button appears**, choose the button's position relative to Add to Cart:

- **Above Add to Cart**
- **Below Add to Cart** (default)

> [!tip] To make a product quote-only, target it with the button, then hide its price and its Add to Cart / Buy Now buttons (see **Hide Price**).

Remember to click **Save**. The storefront preview on the right updates as you change settings.`,
    },
    {
      key: "who-sees",
      group: "Request a Quote",
      label: "Who sees the button",
      md: `# Who sees the button

Show the quote button to everyone, or only to the customers you choose. Set this in **Quote Settings → Quote Settings** tab → **Who sees the button**.

## Visibility options

- **All visitors** — anyone browsing your store sees the button (default).
- **Logged-in customers only** — the button is hidden from guests and shows only after a customer logs in. Good for approved wholesale accounts.
- **Tagged customers** — the button shows only to customers who carry specific Shopify customer tags.

## Using customer tags

When you choose **Tagged customers**, a **Tags** field appears:

1. Type a tag (for example, wholesale or vip) and select it, or add a new one inline.
2. Add as many tags as you need — a customer with any of them will see the button.
3. Click **Save**.

> [!note] Customer tags are managed in Shopify under **Customers**. Add the same tags there to the accounts that should see quoting.

> [!tip] Combine targeting and visibility — for example, show the button on one collection, only to tagged wholesale customers.`,
    },
    {
      key: "button-style",
      group: "Request a Quote",
      label: "Button style & click action",
      md: `# Button style & click action

Match the quote button to your brand and choose what happens when a customer clicks it. Set styling in **Quote Settings → Quote Settings** tab → **Styles**.

## Style the button

- **Button text** — the label on the button (default "Request a Quote").
- **Button text color** — the colour of the label.
- **Button background color** — the button fill.
- **Text size** — from 10px to 32px.

The storefront preview updates live as you adjust these.

## What happens on click

When the floating widget is **off**, a **What happens when customer clicks** card lets you choose the click action:

- **Quick confirm popup** — a small popup confirms the item was added to the quote request.
- **Popup with full form** — opens the full quote form so the customer can enter their details straight away (default).

> [!note] When the **Quote Widget** is enabled, clicking always opens the quote experience, so this card is hidden.

Click **Save** when you're done.`,
    },
    {
      key: "quote-widget",
      group: "Request a Quote",
      label: "Floating quote widget",
      md: `# Floating quote widget

The quote widget is a floating button pinned to every storefront page, giving customers a persistent way to open their quote request. Configure it in **Quote Settings → Quote Settings** tab → **Quote Widget**.

## Turn it on

Toggle **Enable floating quote widget**. When on, a badge shows the widget is **Active**.

## Configure the widget

- **Button label** — the text on the floating button (default "Request a Quote").
- **Widget position** — choose a corner or edge: **Bottom right** (default), Half bottom right, Half top right, **Bottom left**, Half bottom left, or Half top left.
- **Color** — set the widget's **Text color** and **Background color**.

> [!tip] The half-edge positions render as a slim vertical tab on the side of the screen — handy when you don't want a full corner button.

Click **Save** to apply. All fields are disabled while the widget is off.`,
    },
    {
      key: "notifications",
      group: "Request a Quote",
      label: "On-screen notifications",
      md: `# On-screen notifications (toasts)

Toasts are the small messages that pop up on your storefront when a customer adds a product to their quote cart or submits a request. Configure them in **Quote Settings → Quote Settings** tab → **Notification (toast)**.

## Add-to-quote-cart message

- Toggle **Enable "Add to quote cart" notification**.
- **Add to quote cart message** — the text shown when a product is added (default "Product added to quote cart.").

## Quote-submitted message

- Toggle **Enable "Quote submit success" notification**.
- **Quote submit success message** — shown to the customer after they submit (default "Thank you! We will be in touch shortly.").

## Appearance

- **Size & shape** — set the **Font size**, **Corner radius**, and **Border width**.
- **Colors** — set **Text color**, **Background color**, and **Border color**.
- **Position** — choose where toasts appear: Top left/center/right or Bottom left/center/right (default **Bottom center**).

Click **Save** to apply.`,
    },

    {
      key: "hide-price",
      group: "Hide Price",
      label: "Hide prices",
      md: `# Hide prices

Hide prices from the shoppers you choose and replace them with a message like "Price available on request," nudging customers to request a quote. Configure this in **Quote Settings → Quote Settings** tab → **Hide price settings**.

> [!note] These settings affect your storefront only (product, collection, home, and cart pages). They do **not** change what shows on the quote form — that's controlled separately in the **Form Builder** because quote pricing is negotiable.

## Choose which products to hide prices on

- **All products** — hide prices store-wide (default).
- **Specific collections only** — click **Browse** to pick collections.
- **Hand-picked products only** — click **Browse** to choose individual products.

## Choose which pages to hide prices on

Under **Hide on pages**, tick any combination:

- **Product page**
- **Collection page**
- **Home page**
- **Cart page**

> [!tip] Want prices to stay visible in the cart? Leave **Cart page** unticked. Tick it only when you also want cart totals hidden for quote-only shopping.

## Set the replacement

Under **When price is hidden, show**:

- **Nothing** — leave the space blank.
- **Replacement text** (default) — show a custom message. The default text is **Price available on request**, and you can set its colour.

Click **Save**. Because the storefront caches settings for up to 5 minutes, refresh the page to see changes.

> [!warning] Some themes use a custom price element FIDE can't detect automatically. If a price still shows, see **Troubleshooting → Prices still showing**.`,
    },
    {
      key: "hide-buttons",
      group: "Hide Price",
      label: "Hide cart & buy buttons",
      md: `# Hide the Add to Cart & Buy Now buttons

For truly quote-only products, hide the standard checkout buttons so the only way forward is to request a quote. This lives alongside the price settings in **Quote Settings → Quote Settings** tab → **Hide price settings → Also hide these buttons**.

## Turn the buttons off

- **Hide Add to Cart button** — removes the theme's Add to Cart button on the targeted products.
- **Hide Buy Now button** — removes the express **Buy Now** / dynamic checkout button.

Tick either or both, then click **Save**.

## Recommended quote-only setup

To convert a product to quote-only:

1. Target it with the Request a Quote button (**Where to show the quote button**).
2. Hide its price (**Hide price settings**).
3. Tick **Hide Add to Cart button** and **Hide Buy Now button**.
4. Set the button position to **Above Add to Cart** so the quote button is the clear call to action.

> [!note] Button hiding follows the same targeting as Hide Price — it applies to the products/collections you selected there, so you can keep some products purchasable while others are quote-only.`,
    },

    {
      key: "form-builder",
      group: "Form Builder",
      label: "Build your form",
      md: `# Build your quote form

The Form Builder controls exactly what the quote form asks for. Open **Quote Settings → Form Builder** tab. The left panel edits the form; the right panel is a live preview with a **Test Mode**.

## Form content

In the **Form content** card:

- **Form heading** — the title at the top of the form (default "Request a Quote").
- **Submit button text** — the label on the submit button (default "Request a Quote").
- **Submit button style** — set the button's text colour, background colour, text size, and corner roundness.

## Form sections

Fields are grouped into three sections you can each expand:

- **Contact fields** — collected from the customer. Defaults: First name, Last name, Email address, Phone number.
- **Shipping fields** — where to send the order. Defaults: Street address, City, District, State / Province, Zip / Postal code, Country.
- **Additional fields** — any extra information. Default: Message.

## Add, edit, remove, and reorder fields

- **Add a field** — click **+ Add Field** at the bottom of a section and pick a field type.
- **Edit a field** — click a field to expand it, then set its **Label**, **Placeholder**, and **Help text**, and toggle **Required**.
- **Reorder** — use the up/down arrows on each field.
- **Remove** — click **Remove**; you'll be asked to confirm.

## Field types

| Type | Good for |
| --- | --- |
| Text / Textarea | Names, company, free-text notes |
| Email / Phone | Contact details (with format validation) |
| Number | Quantities or numeric answers (set min/max) |
| Date | Requested delivery dates |
| Dropdown / Radio group | Pick-one choices (you define the options) |
| Checkbox | Opt-ins and yes/no questions |
| Country | A full country picker |
| File upload | Specs, artwork, or reference files (single or up to 5) |
| Paragraph | A static block of text or instructions (not an input) |

> [!tip] Keep the form short. Only ask for what you need to price the quote — every extra field lowers completion.

Click **Save** when you're happy with the layout.`,
    },
    {
      key: "product-details",
      group: "Form Builder",
      label: "Product details & offer price",
      md: `# Product details & offer price

Choose what product information appears inside the quote form, and whether the customer can enter the price they'd like to pay. Set this in **Quote Settings → Form Builder** tab → **Show product details in form**.

## Product detail toggles

| Toggle | What the customer sees | Default |
| --- | --- | --- |
| **Vendor** | The product's vendor / brand name | On |
| **SKU** | The product's SKU | On |
| **Price** | Your catalogue price (read-only) | Off |
| **Quote Price** | An editable price field where the customer enters their offer | On |
| **Note** | A per-product note field | On |

## The offer price (Quote Price)

**Quote Price** is how a customer tells you the price they want. When it's on, each product in the form shows an editable **price** input; whatever the customer enters is saved with the request as their **offered price**.

- You'll see it on the request in **Quotes** as the customer's quote/offer.
- You then set your own **Quote price** per line item when you respond (see **Quote details & pricing**).

> [!note] **Price** and **Quote Price** are different. **Price** shows your fixed catalogue price for reference; **Quote Price** lets the customer propose their own number. You can show either, both, or neither.

> [!tip] For classic "make an offer" flows, turn **Quote Price** on and **Price** off, so buyers propose a number without anchoring to your list price.

Click **Save** to apply.`,
    },
    {
      key: "test-quote",
      group: "Form Builder",
      label: "Preview & test",
      md: `# Preview & submit a test quote

Before going live, preview the form and send yourself a real test request.

## Live preview

The **Form Builder** tab shows a live preview on the right that updates as you edit. Use:

- **Desktop Preview** — open the full desktop layout in a larger modal.
- The default mobile-width preview to check the mobile experience.

## Test Mode

Turn on **Test Mode** in the preview to make the form interactive:

1. Fill in the fields exactly as a customer would.
2. Adjust product quantities and, if enabled, the quote price.
3. Click the submit button.

A **test quote** is created and a success banner links you straight to it. Test quotes are clearly marked so you can tell them apart from real requests.

Use **Clear** to reset the test form.

## Confirm it works end-to-end

After a test submission, check that:

- You received the admin notification email.
- The customer confirmation email arrived.
- The quote appears in **Quotes**.

> [!tip] You can also test on your live storefront: open a product, click **Request a Quote**, complete the form, and submit.`,
    },

    {
      key: "dashboard",
      group: "Managing quotes",
      label: "Dashboard",
      md: `# Dashboard

The **Dashboard** (the app's home page, titled **Overview**) gives you an at-a-glance view of quote activity.

## Summary cards

Four cards across the top:

- **Total Quotes** — all quote requests received.
- **This Month** — requests since the start of the current month.
- **Accepted** — quotes you've accepted (or that have been paid).
- **Revenue** — value from accepted quotes.

## Setup guide

When you're getting started, a **Setup guide** card tracks three steps: activate the app embed, configure your quote form, and confirm it's working. Mark each **I've done it** as you go, or **Dismiss** the guide once you're set up.

## Recent quotes

The **Recent Quotes** list shows the latest requests with the customer, product, status, and date. Click **View all** to open the full **Quotes** list, or click a row to open a quote.

## Top requested products & summary

- **Top Requested Products** shows what customers are asking about most.
- **Summary** shows quick stats: unread, replied, conversion rate, and accepted revenue.`,
    },
    {
      key: "quotes-list",
      group: "Managing quotes",
      label: "Quote list",
      md: `# Quote list

**Quotes** is where every request lives. Open it from the app navigation.

## Filter and find quotes

- **Tabs** filter by state: **All quotes**, **Unread**, **Read**, **Cancelled**, **Accepted**, and **Done**.
- **Search & filter** — search by customer, product, and more.
- **Sort** — Newest first, Oldest first, Name A→Z, or Name Z→A.

## Statuses

| Status | Meaning |
| --- | --- |
| **Unread** | A new request you haven't opened |
| **Read** | You've opened it |
| **Quoted** | You've sent pricing |
| **Accepted** | The customer's request has been accepted |
| **Rejected** | You declined the request |
| **Paid** | Payment has been received |

## Actions

- **Create quote** — build a quote manually (for phone or email requests).
- **View / Edit** — open the full quote.
- **Convert to draft order** — create a Shopify draft order from the quote so you can invoice and collect payment.
- **Print PDF** — export the quote as a PDF.
- **Duplicate** — copy a quote as a starting point.
- **Delete** — remove a quote (select several rows to delete in bulk; you'll confirm first).

## Export

Click **Export CSV** to download quotes. If rows are selected, only those export; otherwise the current tab/search view is exported. The file includes quote number, customer, email, phone, company, product, quantity, status, and date.`,
    },
    {
      key: "quote-detail",
      group: "Managing quotes",
      label: "Quote details & pricing",
      md: `# Quote details & pricing

Open a quote from **Quotes** to review it and build your response. This is where you set the prices you're offering.

## Products & your quote price

The **Products** card lists each requested item. For every line you can set:

- **Qty** — the quantity.
- **Quote price** — your price per unit. The **line total** (Qty × Quote price) is calculated for you.

If the customer entered their own offer on the storefront, it shows on the line as the customer's quote for reference. Use the search box to add more products to the quote.

## Payment totals

The **Payment** card rolls everything up:

- **Subtotal** — the sum of all line totals.
- **Discount** — an amount to subtract (can't exceed the subtotal).
- **Shipping** — an amount to add.
- **Tax** — an amount to add.
- **Total** — Subtotal − Discount + Shipping + Tax.

## Customer & shipping

The **Customer** card shows the contact and shipping details. Click **Edit** to correct anything, then **Done**. Any extra fields the customer filled in appear under **Additional info**.

## Timeline & internal notes

The **Timeline** card records events (submitted, viewed, accepted, payment received, rejected) and lets you post internal comments. Comments are visible only to you and your staff.

> [!important] Click **Save** (or **Create Quote** for a new one) to keep your changes. A sticky save bar appears whenever you have unsaved edits.`,
    },
    {
      key: "accept-reject",
      group: "Managing quotes",
      label: "Accept or reject",
      md: `# Accept or reject a quote

Once you've priced a quote, respond to the customer directly from the quote detail page.

## Accept and notify

Click **Accept** to open **Accept quote & notify customer**. You can:

- Edit the email **Subject**, **Heading**, **Message**, and **Button text**.
- Tick **Show checkout button in email** to include a checkout link. A Shopify draft-order checkout link is generated automatically; you can override it with another link to your store.
- Preview the email live on the right.

Then choose:

- **Accept & Send Email** — mark the quote accepted and email the customer.
- **Accept without email** — mark it accepted silently.

You can use variables in the text: {customer_name}, {product_title}, {quote_price}, {checkout_link}.

## Reject and notify

Click **Reject** to open **Reject quote & notify customer**, edit the message the same way, and choose **Reject & Send Email** or **Reject without email**.

## After acceptance

- When payment arrives, click **Payment received** to mark the quote **Paid**.
- Need to revisit a closed quote? Click **Reopen**.
- To collect payment through Shopify, use **Convert to draft order** (from the quote or the list), which creates a Shopify draft order you can invoice from.

> [!tip] Set your default accept/reject wording once in the email templates (see **Emails**) so every response starts from the right message.`,
    },
    {
      key: "quote-cart",
      group: "Managing quotes",
      label: "Quote cart",
      md: `# Quote cart

The quote cart lets a customer collect several products and submit them as a single request — ideal for wholesale orders spanning multiple items.

## How customers use it

1. On any product, the customer clicks **Request a Quote**, which adds the item to their quote cart.
2. They keep browsing and add more products the same way.
3. They open the quote cart, where they can adjust quantities, remove items, and review everything.
4. They fill in their contact details once and submit — creating one quote request that contains every item.

The quote cart is saved in the customer's browser, so it survives page navigation until they submit or clear it.

## What you receive

A single quote lands in **Quotes** with all the line items together, so you price and respond to the whole order at once (see **Quote details & pricing**).

> [!note] The quote cart is separate from Shopify's normal cart. Prices you hide on the storefront don't affect the pricing you set when you respond.`,
    },

    {
      key: "email",
      group: "Emails & PDFs",
      label: "Email setup & templates",
      md: `# Email setup & templates

FIDE sends automatic emails to you and your customers. Configure everything in **Settings → Email Settings**.

## Choose how email is sent

Under **SMTP**, pick an **Email Provider**:

- **Use the app's default email** — the quickest option; no setup needed.
- **Google (Gmail)** — enter your Gmail address and an app password.
- **Elastic Email** — enter your Elastic Email SMTP username and password.

For custom providers you can also set the **From Name** and **From Email** shown to customers.

## Admin notification email

Set **Admin Notification Email** to the address that should receive an alert every time a new quote is submitted.

## Send a test

Enter an address under **Send test email** and click the button to confirm delivery before going live.

## Email templates

FIDE includes four templates you can enable, disable, and edit (click **Edit** on any of them):

| Template | Sent to | When |
| --- | --- | --- |
| **Email Notification** | You (admin) | A new quote is submitted |
| **Auto Response Email** | Customer | Right after they submit |
| **Email Accept Quote** | Customer | You accept their quote |
| **Email Reject Quote** | Customer | You reject their quote |

Each template lets you set the **Status** (enabled/disabled), **Subject**, **Heading**, **Content**, and action **Button** text, and includes a **Send test email** field. A live preview shows your changes.

Templates support merge variables such as {customer_name}, {product_title}, {quote_price}, and {store_name}; the available variables are listed on each editor.

> [!tip] Sending from your own domain (Gmail or Elastic Email) improves deliverability and shows your brand as the sender.`,
    },
    {
      key: "pdf",
      group: "Emails & PDFs",
      label: "PDF templates",
      md: `# PDF templates

FIDE generates PDFs for quotes and invoices. Edit their look in **Settings → PDF Template**.

## Two independent templates

- **Quote PDF** — generated when a customer's quote is exported to PDF.
- **Invoice PDF** — generated when a draft order is exported to PDF.

They're fully separate: editing one never changes the other, and each keeps its own layout, title, and variables.

## What you can customise

Open a template's **Edit** page to set:

- **Status** — enable or disable the template.
- **Document Title** — use {quote_number} or {invoice_number} for automatic numbering.
- **Accent Color** — the brand colour used in the document.
- **Company Info** — company name, logo URL, address, phone, and email.
- **Header Note** and **Footer Note** — text at the top and bottom of the document.

A live preview updates as you edit, and the available merge variables (customer, product, totals, dates, and more) are listed on each editor.

> [!note] The logo must be a publicly accessible image URL so it can be embedded in the PDF.`,
    },

    {
      key: "troubleshooting",
      group: "Help",
      label: "Troubleshooting",
      md: `# Troubleshooting

Work through the section that matches your issue. If it persists, email support (see the bottom of this page).

## The Request a Quote button isn't showing
- Confirm the **Quote Request** app embed is enabled: **Online Store → Themes → Customize → App embeds**.
- Check your targeting in **Quote Settings → Where to show the quote button** — the product/collection you're viewing must be included.
- Make sure **How the button behaves** is set to **Button only**, not **Don't show**.
- If the button appears but is misaligned on product cards, set **Custom Product Card Selector** in the app embed settings.

## Prices are still showing
- In **Quote Settings → Hide price settings**, confirm the product is in scope and the right pages are ticked (Product / Collection / Home / Cart).
- Refresh the storefront — settings are cached for up to 5 minutes; clear your browser cache if needed.
- Some themes use a custom price element. Add a rule in the app embed's **Custom CSS** to hide it, or contact support with your theme name.

## Emails aren't arriving
- In **Settings → Email Settings**, confirm the provider is set and any Gmail/Elastic Email credentials are correct and saved.
- Check the **Admin Notification Email** is correct.
- Use **Send test email** to confirm delivery, and check spam folders.
- Make sure the relevant template's **Status** is **Enabled**.

## The button or widget overlaps other elements
- Change the **Widget position** in **Quote Settings → Quote Widget**.
- Adjust the button position (**Above / Below Add to Cart**), or add spacing via the app embed's **Custom CSS**.

## Changes aren't taking effect
- Click **Save** after editing — a save bar appears when you have unsaved changes.
- Refresh the storefront (the config caches for up to 5 minutes).

Still stuck? Email [support@fidelabs.io](mailto:support@fidelabs.io) with your store URL, theme name, and a screenshot, and we'll help.`,
    },
    {
      key: "faq",
      group: "Help",
      label: "FAQ",
      md: `# Frequently asked questions

## Getting started

**What does FIDE do?**

FIDE lets customers request a custom price instead of buying immediately, and lets you hide prices and checkout buttons — turning your store into a B2B/wholesale quoting tool.

**Do I need to edit theme code?**

No. FIDE installs as a theme app embed. Turn it on in the theme editor's **App embeds** panel and configure everything inside the app.

**Which Shopify plans and themes are supported?**

FIDE works with supported Shopify plans and most modern themes. Heavily customised themes may need the **Custom Product Card Selector** or **Custom CSS** settings for perfect alignment.

## Quote button & hiding prices

**Can I show quoting to only some customers?**

Yes. Under **Who sees the button**, choose **Logged-in customers only** or **Tagged customers** and add the relevant Shopify customer tags.

**Can I keep prices visible in the cart but hidden elsewhere?**

Yes. In **Hide price settings**, tick only the pages you want (leave **Cart page** unticked to keep cart prices visible).

**How do I make a product quote-only?**

Hide its price and tick **Hide Add to Cart button** and **Hide Buy Now button**, so requesting a quote is the only option.

## The form & offers

**How do customers tell me their budget or offer?**

Turn on **Quote Price** in **Form Builder → Show product details in form**. Each product then shows an editable price field where the customer enters their offer.

**What's the difference between Price and Quote Price?**

**Price** shows your fixed catalogue price (read-only). **Quote Price** is an editable field for the customer's own offer. Show either, both, or neither.

**Can I customise the form fields?**

Yes. Use the **Form Builder** to add, edit, reorder, and remove fields across Contact, Shipping, and Additional sections.

## Managing quotes

**How do I respond with a price?**

Open the quote in **Quotes**, set the **Quote price** per line item and any discount/shipping/tax, then **Accept** (with or without an email) or **Reject**.

**Can I collect payment?**

Yes. Use **Convert to draft order** to create a Shopify draft order, then invoice and collect payment through Shopify. Mark the quote **Payment received** when it's paid.

**Can customers request several products at once?**

Yes — the quote cart lets them add multiple products and submit one request.

## Support

**Where can I get help?**

If this documentation doesn't solve your issue, email [support@fidelabs.io](mailto:support@fidelabs.io) and our team will help.`,
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
