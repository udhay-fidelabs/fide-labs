import Link from "next/link";
import Image from "next/image";
import Icon from "../Icon";
import LogoMark from "../LogoMark";
import { PRODUCTS, type Product } from "../../lib/products";

/**
 * Product catalog listing. Driven entirely by the central PRODUCTS array.
 *
 * The layout adapts to how many products exist:
 *  - A single product renders as a full-width flagship showcase (info panel +
 *    a real product preview) so the page reads as a confident one-app studio
 *    rather than a half-empty grid with a "coming soon" placeholder.
 *  - Two or more products fall back to the responsive card grid.
 * Either way, adding a product is a pure data change — no redesign needed.
 */
export default function ProductsListing() {
  const products = PRODUCTS;
  const isSingle = products.length === 1;

  return (
    <div className="page active" id="page-products">
      {/* HERO */}
      <section className="hero" style={{ paddingBottom: "28px" }}>
        <div className="badge"><span className="badge-dot" /> Our products</div>
        <h1 className="hero-title">
          Shopify apps by <span className="accent">FIDE Labs</span>
        </h1>
        <p className="hero-sub">
          Merchant-first tools that help B2B and wholesale stores sell the way
          their buyers actually buy.
        </p>
      </section>

      {isSingle ? (
        <FlagshipProduct product={products[0]} />
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}

/* ── Single-product flagship showcase ─────────────────────────────── */
function FlagshipProduct({ product: p }: { product: Product }) {
  const preview = p.screenshots.find((s) => s.src);

  return (
    <section className="mx-auto max-w-[1120px] px-6 pb-[88px]">
      <div className="reveal grid grid-cols-1 overflow-hidden rounded-[26px] border border-gray-200/80 bg-white shadow-[0_24px_70px_-32px_rgba(16,24,40,.28)] min-[940px]:grid-cols-[1.02fr_0.98fr]">
        {/* INFO PANEL */}
        <div className="flex flex-col p-8 min-[940px]:p-11">
          <div className="flex items-center gap-4">
            <LogoMark size={52} />
            <div>
              <div className="font-[family-name:var(--font-mono)] text-[11.5px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                {p.category}
              </div>
              {p.status === "available" && (
                <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[#e0faf8] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#0d9488]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" /> Live now
                </span>
              )}
            </div>
          </div>

          <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(26px,3vw,34px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-gray-900">
            {p.name}
          </h2>
          <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.75] text-gray-500">
            {p.summary}
          </p>

          {/* Honest trust strip, sourced from the product's own heroPoints */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium text-gray-600">
            {p.heroPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e0faf8] text-[#0d9488]">
                  <Icon name="check" size={11} />
                </span>
                {point}
              </span>
            ))}
          </div>

          <div className="my-7 h-px w-full bg-gray-100" />

          {/* What's inside — the real feature set */}
          <div className="flex flex-wrap gap-2">
            {p.features.slice(0, 6).map((f) => (
              <span
                key={f.title}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[12.5px] font-medium text-gray-600"
              >
                {f.title}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link className="btn-primary no-underline" href={`/products/${p.slug}`}>
              Explore the app <Icon name="arrow-right" size={17} />
            </Link>
            <Link className="btn-secondary no-underline" href="/docs">
              <Icon name="book" size={17} /> Read the docs
            </Link>
          </div>
        </div>

        {/* PREVIEW PANEL — the real product, framed in app-window chrome */}
        <div className="relative flex items-center justify-center overflow-hidden border-t border-gray-200/80 bg-[linear-gradient(150deg,#eef2ff_0%,#e8fbf8_100%)] p-7 min-[940px]:border-l min-[940px]:border-t-0 min-[940px]:p-9">
          {preview ? (
            <div className="w-full overflow-hidden rounded-[16px] border border-gray-200 bg-white shadow-[0_20px_50px_-24px_rgba(16,24,40,.4)]">
              <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-[family-name:var(--font-mono)] text-[11px] font-semibold text-gray-400">
                  {preview.label}
                </span>
              </div>
              <Image
                src={preview.src as string}
                alt={`${p.name} — ${preview.caption}`}
                width={880}
                height={620}
                className="block h-auto w-full"
                sizes="(max-width: 940px) 88vw, 520px"
                priority
              />
            </div>
          ) : (
            <div className="flex h-full min-h-[240px] w-full items-center justify-center rounded-[16px] border border-gray-200 bg-white/70 text-brand-blue">
              <Icon name="storefront" size={40} />
            </div>
          )}
        </div>
      </div>

      {/* ROADMAP STRIP — confident, not an empty grid slot */}
      <div className="reveal mt-6 flex flex-col items-start gap-3 rounded-[20px] border border-dashed border-gray-300 bg-gray-50/50 px-7 py-6 min-[680px]:flex-row min-[680px]:items-center min-[680px]:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-white text-brand-blue shadow-sm">
            <Icon name="bolt" size={20} />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[16px] font-bold text-gray-800">
              More merchant-first apps on the way
            </h3>
            <p className="mt-0.5 text-[13.5px] text-gray-500">
              We ship one focused tool at a time, then move to the next. Built for B2B and wholesale Shopify stores.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-2 text-[13.5px] font-semibold text-brand-blue no-underline transition-colors hover:border-brand-blue"
        >
          Request a feature <Icon name="arrow-right" size={15} />
        </Link>
      </div>
    </section>
  );
}

/* ── Multi-product grid (used once a second product ships) ────────── */
function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="mx-auto max-w-[1080px] px-6 pb-[96px]">
      <div className="reveal grid grid-cols-1 gap-6 min-[680px]:grid-cols-2">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="glass-card group flex flex-col rounded-[22px] p-7 no-underline backdrop-blur-md"
          >
            <div className="mb-5 flex items-center gap-4">
              <LogoMark size={48} />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-[family-name:var(--font-display)] text-[19px] font-bold tracking-[-0.01em] text-gray-900">{p.name}</h2>
                  {p.status === "available" && (
                    <span className="rounded-full bg-[#e0faf8] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#0d9488]">Live</span>
                  )}
                </div>
                <div className="font-[family-name:var(--font-mono)] text-[11.5px] font-semibold uppercase tracking-wide text-gray-400">{p.category}</div>
              </div>
            </div>
            <p className="mb-6 text-[14.5px] leading-[1.7] text-gray-500">{p.summary}</p>
            <div className="mt-auto flex flex-wrap gap-2">
              {p.features.slice(0, 3).map((f) => (
                <span key={f.title} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[12px] font-medium text-gray-600">
                  {f.title}
                </span>
              ))}
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-blue transition-all group-hover:gap-2.5">
              Learn more <Icon name="arrow-right" size={16} />
            </span>
          </Link>
        ))}

        {/* Scalability affordance — signals the catalog grows */}
        <div className="flex flex-col items-center justify-center rounded-[22px] border border-dashed border-gray-300 bg-gray-50/60 p-7 text-center">
          <div className="mb-3 flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-white text-brand-blue shadow-sm">
            <Icon name="bolt" size={22} />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[16px] font-bold text-gray-700">More apps on the way</h2>
          <p className="mt-1 text-[13px] text-gray-500">We&apos;re building more merchant-first Shopify tools.</p>
        </div>
      </div>
    </section>
  );
}
