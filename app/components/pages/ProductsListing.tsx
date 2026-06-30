import Link from "next/link";
import Icon from "../Icon";
import LogoMark from "../LogoMark";
import { PRODUCTS } from "../../lib/products";

/**
 * Product catalog listing. Maps over the central PRODUCTS array, so adding a
 * product is purely a data change — this page never needs redesigning.
 */
export default function ProductsListing() {
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

      {/* GRID */}
      <section className="mx-auto max-w-[1080px] px-6 pb-[96px]">
        <div className="reveal grid grid-cols-1 gap-6 min-[680px]:grid-cols-2">
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="glass-card backdrop-blur-md group flex flex-col rounded-[22px] p-7"
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
    </div>
  );
}
