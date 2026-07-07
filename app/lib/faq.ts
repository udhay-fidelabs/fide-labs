/**
 * Single source of truth for FAQ content.
 *
 * GENERAL_FAQ mirrors the finalized Home page FAQ exactly and is reused
 * verbatim wherever a general FAQ is shown (Product details, etc.). Do not edit
 * the wording here without updating the Home page intent — this IS the Home FAQ.
 *
 * Product-specific questions can be added per product in lib/products.ts and
 * appended after the general set where the context calls for it.
 */
export type FaqItem = { q: string; a: string };

export const GENERAL_FAQ: FaqItem[] = [
  {
    q: "What Shopify plans does FIDE work with?",
    a: "FIDE works with all Shopify plans including Basic, Shopify, Advanced, and Shopify Plus. Some enterprise features require Shopify Plus.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes, the app is free to use, and no credit card is required to get started.",
  },
  {
    q: "How long does setup take?",
    a: "Most merchants are live the same afternoon. One click adds FIDE to your theme, smart defaults handle the config, and the guided walkthrough takes under 10 minutes.",
  },
  {
    q: "Do my customers need an account to request a quote?",
    a: "No. Shoppers request a quote straight from the product page, and they accept your offer through a secure link — no login or signup required.",
  },
  {
    q: "Can I set different prices for different customers?",
    a: "Yes. Set custom pricing, volume discounts, and terms per quote, or save reusable templates for your regular wholesale buyers.",
  },
  {
    q: "Can I customize the quote request form?",
    a: "Absolutely. Our Form Builder lets you add custom fields, set required fields, and match the form design to your store's branding.",
  },
  {
    q: "Does it work with my theme?",
    a: "FIDE is compatible with all Shopify 2.0 themes and most legacy themes. Our theme detection engine adapts automatically.",
  },
  {
    q: "What support do you offer?",
    a: "Every plan includes email support with a same-day reply on weekdays. Advanced and Plus merchants get priority support and onboarding help.",
  },
];
