"use client";

import Link from "next/link";
import Icon from "../Icon";
import LogoMark from "../LogoMark";
import ProductGallery from "../ProductGallery";
import { FaqBlock } from "../Faq";
import { GENERAL_FAQ } from "../../lib/faq";
import { type Product, relatedProducts } from "../../lib/products";
import { LEGAL_DATES } from "../../lib/company";
import { useToast } from "../SiteProviders";

const POLICIES = [
  { key: "privacy", icon: "lock" as const, title: "Privacy Policy", desc: "What we collect and how we protect it." },
  { key: "terms", icon: "book" as const, title: "Terms & Conditions", desc: "The rules for using the app." },
  { key: "gdpr", icon: "shield" as const, title: "GDPR Compliance", desc: "How we meet EU data-protection rules." },
  { key: "cookies", icon: "cookie" as const, title: "Cookie Policy", desc: "The cookies we use and why." },
];

const DOC_LINKS = [
  { icon: "rocket" as const, title: "Getting started", desc: "Install and go live in minutes." },
  { icon: "sliders" as const, title: "Configuration", desc: "Request Quote, Hide Price, and email." },
  { icon: "lifebuoy" as const, title: "Troubleshooting & FAQ", desc: "Fixes and common questions." },
];

export default function ProductDetail({ product }: { product: Product }) {
  const { showToast } = useToast();
  const related = relatedProducts(product.slug);
  const faqItems = product.faqs ? [...GENERAL_FAQ, ...product.faqs] : GENERAL_FAQ;

  return (
    <div className="page active" id={`page-product-${product.slug}`}>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a0f1e_0%,#0d1526_45%,#13235e_100%)] px-[5%] pb-24 pt-[140px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] opacity-50" />
        <div className="pointer-events-none absolute -left-[120px] -top-[160px] h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(20,184,166,0.3)_0%,transparent_64%)]" />
        <div className="relative z-[1] mx-auto max-w-[860px] text-center">
          <div className="mb-6 flex justify-center"><LogoMark size={64} /></div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(34px,5vw,58px)] font-extrabold leading-[1.06] tracking-[-2px] text-white">
            {product.name}
          </h1>
          <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-[1.6] text-white/70">{product.summary}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link className="btn-primary" href="/contact"><Icon name="tag" size={18} /> Request a quote</Link>
            <Link className="btn-secondary" href="/docs" style={{ color: "#fff", borderColor: "rgba(255,255,255,.2)" }}>
              <Icon name="book" size={18} /> View documentation
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-white/45">
            {product.heroPoints.map((p) => (
              <span key={p} className="inline-flex items-center gap-1.5"><Icon name="check" size={14} /> {p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SCREENSHOTS */}
      <section className="mx-auto max-w-[1180px] px-6 pt-[80px]">
        <div className="reveal mb-10 text-center">
          <div className="section-label">Screenshots</div>
          <h2 className="section-title">See it in action</h2>
          <p className="section-sub center">A look at the quote workflow, from the storefront button to the dashboard.</p>
        </div>
        <ProductGallery screenshots={product.screenshots} productName={product.name} />
      </section>

      {/* OVERVIEW + ILLUSTRATIVE PREVIEW */}
      <section className="mx-auto max-w-[1080px] px-6 py-[80px]">
        <div className="reveal grid grid-cols-1 items-center gap-12 min-[900px]:grid-cols-2">
          <div>
            <div className="section-label">Overview</div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.15] tracking-[-1.2px] text-gray-900">
              {product.tagline}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-gray-600">{product.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.audience.map((a) => (
                <span key={a} className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-gray-700">{a}</span>
              ))}
            </div>
          </div>
          {/* Illustrative product preview (no screenshots available) */}
          <div className="relative rounded-[20px] border border-gray-200 bg-[linear-gradient(160deg,#eef5fc,#f6fafe)] p-6 shadow-[0_24px_60px_rgba(16,24,40,0.1)]" aria-hidden="true">
            <div className="rounded-[14px] border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="font-[family-name:var(--font-mono)] text-[11px] font-bold uppercase tracking-wide text-gray-400">Quote requests</span>
                <span className="rounded-full bg-[#e0faf8] px-2 py-0.5 text-[10px] font-bold text-[#0d9488]">3 new</span>
              </div>
              {[
                { n: "Acme Wholesale", v: "12 items · pending" },
                { n: "Northwind Trade", v: "Quote sent · $4,200" },
                { n: "Globex Bulk Co.", v: "Approved" },
              ].map((r) => (
                <div key={r.n} className="flex items-center justify-between border-b border-gray-50 py-2.5 last:border-0">
                  <span className="text-[13px] font-semibold text-gray-800">{r.n}</span>
                  <span className="text-[12px] text-gray-400">{r.v}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <div className="flex-1 rounded-[10px] bg-[linear-gradient(135deg,#2F54EB,#14B8A6)] py-2 text-center text-[12px] font-semibold text-white">Request a Quote</div>
              <div className="rounded-[10px] border border-gray-200 bg-white px-3 py-2 text-[12px] font-semibold text-gray-500">Hide Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-gray-50 px-[5%] py-[80px]">
        <div className="reveal mb-12 text-center">
          <div className="section-label">Key features</div>
          <h2 className="section-title">Everything in one app</h2>
          <p className="section-sub center">Every feature is included for every merchant.</p>
        </div>
        <div className="reveal mx-auto grid max-w-[1180px] grid-cols-1 gap-6 min-[640px]:grid-cols-2 min-[1000px]:grid-cols-3">
          {product.features.map((f) => (
            <article key={f.title} className="glass-card backdrop-blur-md flex flex-col rounded-[20px] p-7">
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#2F54EB,#14B8A6)] text-white shadow-[0_6px_16px_rgba(47,84,235,0.24)]">
                <Icon name={f.icon} size={24} />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-[19px] font-bold tracking-[-0.01em] text-gray-900">{f.title}</h3>
              <p className="mb-5 text-[14px] leading-[1.7] text-gray-500">{f.desc}</p>
              <ul className="mt-auto flex flex-col gap-2.5 border-t border-gray-100 pt-5">
                {f.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[13.5px] font-medium text-gray-700">
                    <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-md bg-[#e0faf8] text-[#0d9488]"><Icon name="check" size={12} /></span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-[1080px] px-6 py-[80px]">
        <div className="reveal mb-12 text-center">
          <div className="section-label">Benefits</div>
          <h2 className="section-title">Why merchants choose it</h2>
        </div>
        <div className="reveal grid grid-cols-1 gap-6 min-[560px]:grid-cols-2">
          {product.benefits.map((b) => (
            <div key={b.title} className="glass-card backdrop-blur-md flex gap-4 rounded-[18px] p-6">
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[13px] bg-[#f0f3ff] text-brand-blue">
                <Icon name={b.icon} size={22} />
              </div>
              <div>
                <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-[17px] font-bold text-gray-900">{b.title}</h3>
                <p className="text-[14px] leading-[1.65] text-gray-500">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 100% FREE — every feature included */}
      <section id="free" className="px-[5%] py-[80px]" style={{ background: "linear-gradient(180deg,#eef3ff,#fafcfe)" }}>
        <div className="reveal mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 min-[900px]:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="section-label">Pricing</div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,44px)] font-extrabold leading-[1.1] tracking-[-1.4px] text-gray-900">
              100% Free.<br />Every Feature Included.
            </h2>
            <p className="mt-4 max-w-[460px] text-[15px] leading-[1.75] text-gray-500">
              No credit card. No hidden fees. No tier limits. Every feature in
              FIDE is available to every merchant — completely free.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {["Request Quote Button", "Hide Price", "Quote Cart", "Email Notifications", "Quote Dashboard", "Customer Portal", "Form Builder", "Theme Compatibility"].map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-gray-700">
                  <Icon name="check" size={12} className="text-[#0d9488]" /> {c}
                </span>
              ))}
            </div>
          </div>
          <div className="relative rounded-[22px] border-2 border-brand-blue bg-white p-8 shadow-[0_24px_60px_rgba(47,84,235,0.14)]">
            <span className="absolute -top-3 right-7 rounded-full bg-brand-teal px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">Current Plan</span>
            <div className="flex items-end gap-1">
              <span className="font-[family-name:var(--font-display)] text-[52px] font-extrabold leading-none text-gray-900">$0</span>
              <span className="mb-2 text-[16px] font-medium text-gray-400">/mo</span>
            </div>
            <div className="mt-1 text-[15px] font-bold text-brand-teal">Free Now</div>
            <ul className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6">
              {["Unlimited quote requests", "All features unlocked", "No credit card required", "Setup in under 5 minutes", "Community support"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[14.5px] text-gray-700">
                  <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-md bg-[#e0faf8] text-[#0d9488]"><Icon name="check" size={12} /></span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className="btn-primary mt-7 w-full justify-center"
              onClick={() => showToast("FIDE is launching on the Shopify App Store soon.")}
            >
              Install Free on Shopify <Icon name="arrow-right" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* DOCUMENTATION LINKS */}
      <section className="bg-gray-50 px-[5%] py-[72px]">
        <div className="reveal mx-auto max-w-[1080px]">
          <div className="mb-10 text-center">
            <div className="section-label">Documentation</div>
            <h2 className="section-title">Set up in minutes</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 min-[760px]:grid-cols-3">
            {DOC_LINKS.map((d) => (
              <Link key={d.title} href="/docs" className="glass-card backdrop-blur-md group flex flex-col rounded-[18px] p-6">
                <div className="mb-4 flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#f0f3ff] text-brand-blue"><Icon name={d.icon} size={20} /></div>
                <h3 className="mb-1 font-[family-name:var(--font-display)] text-[16px] font-bold text-gray-900">{d.title}</h3>
                <p className="text-[13.5px] leading-[1.6] text-gray-500">{d.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue transition-all group-hover:gap-2.5">Open docs <Icon name="arrow-right" size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APP POLICIES — dedicated per-product legal pages */}
      <section className="mx-auto max-w-[1080px] px-6 py-[64px]">
        <div className="reveal rounded-[24px] bg-[linear-gradient(135deg,#2F54EB,#14B8A6)] p-px shadow-[0_18px_45px_rgba(47,84,235,0.12)]">
          <div className="grid grid-cols-1 gap-9 rounded-[23px] bg-white p-8 min-[860px]:grid-cols-[0.82fr_1.18fr] min-[860px]:items-center sm:p-10">
            {/* Intro */}
            <div>
              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,#2F54EB,#14B8A6)] text-white shadow-[0_8px_20px_rgba(47,84,235,0.26)]">
                <Icon name="shield" size={26} />
              </div>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-[24px] font-extrabold leading-[1.15] tracking-[-0.8px] text-gray-900">
                App policies
              </h2>
              <p className="mt-2.5 max-w-[320px] text-[14.5px] leading-[1.65] text-gray-500">
                The legal documents that apply specifically to {product.name}. Worth a read before you install.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 font-[family-name:var(--font-mono)] text-[11.5px] font-semibold text-gray-500">
                <Icon name="check" size={13} className="text-[#0d9488]" /> Last updated · {LEGAL_DATES.updated}
              </span>
            </div>

            {/* Policy links */}
            <div className="grid grid-cols-1 gap-3 min-[560px]:grid-cols-2">
              {POLICIES.map((p) => (
                <Link
                  key={p.key}
                  href={`/products/${product.slug}/${p.key}`}
                  className="group flex items-center gap-3.5 rounded-[15px] border border-gray-200 bg-white px-4 py-3.5 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-[0_12px_28px_rgba(47,84,235,0.12)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#f0f3ff] text-brand-blue transition-colors group-hover:bg-[linear-gradient(135deg,#2F54EB,#14B8A6)] group-hover:text-white">
                    <Icon name={p.icon} size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-[family-name:var(--font-display)] text-[14.5px] font-bold leading-tight text-gray-900">{p.title}</span>
                    <span className="mt-0.5 block text-[12px] leading-[1.45] text-gray-500">{p.desc}</span>
                  </span>
                  <Icon name="arrow-right" size={16} className="shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-blue" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — shared single source */}
      <FaqBlock items={faqItems} />

      {/* INSTALL CTA */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a0f1e_0%,#0d1526_45%,#13235e_100%)] px-[5%] py-[88px]">
        <div className="pointer-events-none absolute -right-[80px] -top-[120px] h-[460px] w-[460px] bg-[radial-gradient(circle,rgba(20,184,166,0.28)_0%,transparent_64%)]" />
        <div className="relative z-[1] mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-10 min-[900px]:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="font-[family-name:var(--font-mono)] text-[12px] font-semibold uppercase tracking-[1.5px] text-brand-teal">Ready to win more B2B sales?</span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(30px,4.4vw,52px)] font-extrabold leading-[1.05] tracking-[-1.6px] text-white">
              Install FIDE Free.<br />Start Winning Quotes.
            </h2>
            <p className="mt-5 max-w-[520px] text-[15.5px] leading-[1.7] text-white/65">
              No credit card required. No setup fee. Get the full product — quote
              management, price hiding, email notifications — completely free on
              Shopify.
            </p>
            <button
              className="btn-primary mt-8"
              onClick={() => showToast("FIDE is launching on the Shopify App Store soon.")}
            >
              <Icon name="storefront" size={18} /> Install on Shopify — Free
            </button>
          </div>
          {/* Illustrative panel */}
          <div className="hidden min-[900px]:block" aria-hidden="true">
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-[family-name:var(--font-mono)] text-[11px] font-bold uppercase tracking-wide text-white/50">Quote revenue</span>
                <span className="rounded-full bg-[#14B8A6]/20 px-2 py-0.5 text-[10px] font-bold text-[#2dd4bf]">↑ 38%</span>
              </div>
              <div className="mt-4 flex items-end gap-2" style={{ height: 96 }}>
                {[40, 55, 48, 70, 62, 88, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: "linear-gradient(180deg,#5b7bff,#14B8A6)" }} />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between rounded-[10px] bg-white/[0.06] px-3 py-2 text-[12px]">
                <span className="text-white/70">New quote</span>
                <span className="font-semibold text-[#2dd4bf]">+ $4,200 · Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="mx-auto max-w-[1080px] px-6 py-[72px]">
        <div className="mb-8 text-center">
          <div className="section-label">Related products</div>
          <h2 className="section-title">More from FIDE Labs</h2>
        </div>
        {related.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 min-[680px]:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/products/${r.slug}`} className="glass-card backdrop-blur-md group flex items-center gap-4 rounded-[18px] p-6">
                <LogoMark size={44} />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[16px] font-bold text-gray-900">{r.name}</h3>
                  <p className="text-[13px] text-gray-500">{r.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-[520px] rounded-[18px] border border-dashed border-gray-300 bg-gray-50/60 p-8 text-center">
            <p className="text-[14.5px] text-gray-500">
              {product.name} is our first app. More merchant-first Shopify tools
              are on the way — <Link href="/contact" className="font-semibold text-brand-blue underline">tell us what you need</Link>.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
