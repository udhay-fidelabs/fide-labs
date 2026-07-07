"use client";

import Link from "next/link";
import Icon from "../Icon";
import type { IconName } from "../Icon";

type Value = { icon: IconName; tone: "blue" | "dark" | "teal"; title: string; desc: string };

const VALUES: Value[] = [
  { icon: "storefront", tone: "blue", title: "Shopify-Native", desc: "FIDE is built on official Shopify APIs and theme app extensions, so it updates with the platform instead of breaking against it." },
  { icon: "bolt", tone: "dark", title: "Live in Minutes", desc: "One-click theme install and sensible defaults get your first quote flow working the same afternoon — no code, no developer." },
  { icon: "heart", tone: "teal", title: "Merchant-First", desc: "Every feature starts from a real merchant problem. We ship what wholesale and B2B sellers actually ask for." },
];

const TONE: Record<Value["tone"], string> = {
  blue: "bg-[linear-gradient(135deg,#2F54EB,#14B8A6)] shadow-[0_6px_16px_rgba(47,84,235,0.22)]",
  dark: "bg-ink shadow-[0_6px_16px_rgba(10,15,30,0.28)]",
  teal: "bg-[linear-gradient(135deg,#14B8A6,#0d9488)] shadow-[0_6px_16px_rgba(20,184,166,0.28)]",
};

type Stage = { icon: IconName; title: string; desc: string; badge: string; badgeTone: string };

const STAGES: Stage[] = [
  { icon: "rocket", title: "Early Access Phase", desc: "FIDE is actively onboarding its first merchants. We're collecting real-world feedback to shape every feature before wider release.", badge: "Live Now", badgeTone: "bg-[#eef1ff] text-brand-blue" },
  { icon: "bolt", title: "Actively Building", desc: "Our team ships improvements weekly. The roadmap is driven by what merchants actually ask for — not assumptions.", badge: "Weekly Releases", badgeTone: "bg-[#eef1ff] text-brand-blue" },
  { icon: "chat", title: "Merchant-Led Roadmap", desc: "Every feature on our roadmap was requested by a real merchant. We build in public and listen first.", badge: "Open Feedback", badgeTone: "bg-[#fef3c7] text-[#92660a]" },
  { icon: "tag", title: "100% Free to Start", desc: "No hidden fees, no locked features, no credit card. Install FIDE free and use everything while we grow together.", badge: "Free Now", badgeTone: "bg-[#e0faf8] text-[#0d9488]" },
];

const MISSION_POINTS = [
  "Merchant needs first — always, without compromise",
  "Simplicity that hides complexity, not functionality",
  "Ship fast, listen harder, improve every single week",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-[22px] inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-[18px] py-[7px] font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[1.5px] text-brand-blue shadow-[0_2px_12px_rgba(47,84,235,0.07)]">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
      {children}
      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="page active" id="page-about">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a0f1e_0%,#0d1526_42%,#13235e_100%)] px-[5%] pb-24 pt-[152px] text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:22px_22px] opacity-50" />
        <div className="pointer-events-none absolute -right-[90px] -top-[180px] h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(47,84,235,0.4)_0%,transparent_64%)]" />
        <div className="relative z-[1]">
          <span className="mb-4 inline-block font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[2px] text-white/55">
            About FIDE Labs
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(40px,6vw,72px)] font-extrabold tracking-[-2px] text-white">
            We build the B2B quoting tool<br className="hidden min-[700px]:block" /> Shopify never shipped
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-[1.7] text-white/65">
            FIDE Labs makes one thing: FIDE, a Request a Quote and Hide Price app
            for wholesale and B2B merchants on Shopify.
          </p>
        </div>
      </section>

      {/* INTRODUCTION + VALUES */}
      <section className="reveal mx-auto max-w-[1240px] px-6 py-24">
        <div className="mb-10 grid grid-cols-1 items-start gap-7 min-[900px]:mb-[52px] min-[900px]:grid-cols-[1fr_1.05fr] min-[900px]:gap-14">
          <div>
            <Eyebrow>Why we exist</Eyebrow>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.4vw,42px)] font-extrabold leading-[1.14] tracking-[-1.4px] text-gray-900">
              B2B buyers don&apos;t shop like <span className="text-brand-blue">consumers</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-7 min-[560px]:grid-cols-2">
            <p className="text-[14.5px] leading-[1.8] text-gray-500">
              If you sell wholesale, handle trade accounts, or offer custom
              pricing, you know the problem: a buyer lands on a product page,
              sees a fixed price (or none at all), and leaves before the
              conversation starts.
            </p>
            <p className="text-[14.5px] leading-[1.8] text-gray-500">
              FIDE fixes that. Add a Request a Quote button to any product, hide
              prices from visitors who aren&apos;t approved buyers, and respond
              to every request with the price that wins the deal — all free.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 min-[900px]:grid-cols-3">
          {VALUES.map((f) => (
            <div key={f.title} className="flex gap-4 rounded-[18px] border border-gray-200 bg-white p-[26px_24px] shadow-[0_1px_3px_rgba(16,24,40,0.04),0_14px_34px_rgba(16,24,40,0.05)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(47,84,235,0.12)]">
              <div className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] text-white ${TONE[f.tone]}`}>
                <Icon name={f.icon} size={22} />
              </div>
              <div>
                <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-base font-bold tracking-[-0.01em] text-gray-900">{f.title}</h3>
                <p className="text-[13px] leading-[1.6] text-gray-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white px-[5%] py-[80px]">
        <div className="reveal mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 min-[900px]:grid-cols-2">
          <div>
            <div className="section-label">Our story</div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.4vw,44px)] font-extrabold leading-[1.1] tracking-[-1.4px] text-gray-900">
              Why FIDE Labs<br />Was Built
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-[14.5px] leading-[1.8] text-gray-500">
              <p>FIDE Labs was born from a simple frustration: Shopify&apos;s default checkout flow wasn&apos;t designed for B2B merchants. Wholesale buyers need to negotiate prices, request custom quotes, and manage complex orders — none of which the standard store handles well.</p>
              <p>We built FIDE to solve this gap. Starting with a single app — FIDE Request Quote — we set out to create the most polished, merchant-first B2B toolset in the Shopify ecosystem.</p>
              <p>Today we&apos;re in our early days, growing with our first merchants, and we&apos;re just getting started.</p>
            </div>
          </div>
          {/* Illustrative quote-revenue panel */}
          <div className="relative rounded-[20px] border border-gray-200 bg-[linear-gradient(160deg,#eef5fc,#f6fafe)] p-6 shadow-[0_24px_60px_rgba(16,24,40,0.1)]" aria-hidden="true">
            <div className="rounded-[14px] bg-ink p-4 shadow-lg">
              <span className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-wide text-white/45">Quote revenue</span>
              <div className="mt-3 flex items-end gap-1.5" style={{ height: 110 }}>
                {[42, 58, 50, 72, 64, 90, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: "linear-gradient(180deg,#5b7bff,#14B8A6)" }} />
                ))}
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <div className="flex-1 rounded-[10px] border border-gray-200 bg-white px-3 py-2 text-[12px] font-semibold text-gray-700">New quote <span className="text-brand-blue">+$4,200</span></div>
              <div className="rounded-[10px] border border-gray-200 bg-white px-3 py-2 text-[12px] font-semibold text-[#0d9488]">Quote approved ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a0f1e,#13235e)] px-[5%] py-[88px]">
        <div className="pointer-events-none absolute -left-[60px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(20,184,166,0.18)_0%,transparent_64%)]" />
        <div className="reveal mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 min-[900px]:grid-cols-[0.85fr_1.15fr]">
          {/* Orbit illustration */}
          <div className="flex justify-center" aria-hidden="true">
            <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
              <circle cx="120" cy="120" r="100" stroke="rgba(255,255,255,0.12)" />
              <circle cx="120" cy="120" r="68" stroke="rgba(255,255,255,0.16)" />
              <circle cx="120" cy="120" r="36" stroke="rgba(255,255,255,0.2)" />
              <circle cx="120" cy="120" r="9" fill="#2dd4bf" />
              <circle cx="220" cy="120" r="6" fill="#5b7bff" />
              <circle cx="120" cy="52" r="5" fill="#14B8A6" />
              <circle cx="63" cy="170" r="5" fill="#9ca3af" />
              <line x1="120" y1="120" x2="200" y2="74" stroke="#2dd4bf" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <span className="font-[family-name:var(--font-mono)] text-[12px] font-semibold uppercase tracking-[2px] text-brand-teal">Our mission</span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(26px,3.4vw,40px)] font-extrabold leading-[1.12] tracking-[-1.2px] text-white">
              &quot;Build simple products that solve complex merchant problems.&quot;
            </h2>
            <p className="mt-4 max-w-[560px] text-[15px] leading-[1.75] text-white/65">
              We believe the best software disappears into the background —
              letting merchants focus on what matters: growing their business and
              building lasting customer relationships.
            </p>
            <ul className="mt-7 flex flex-col gap-3.5">
              {MISSION_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[14.5px] font-medium text-white/85">
                  <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-md bg-[#14B8A6]/20 text-[#2dd4bf]"><Icon name="check" size={13} /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* JUST GETTING STARTED */}
      <section className="bg-gray-50 px-[5%] py-[88px]">
        <div className="reveal mb-14 text-center">
          <Eyebrow>Where we are</Eyebrow>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3.6vw,44px)] font-extrabold leading-[1.12] tracking-[-1.4px] text-gray-900">
            Just Getting Started —<br />and That&apos;s the Point
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-[1.7] text-gray-500">
            We&apos;re in our early days, intentionally. Every line of code, every
            feature, every decision is shaped by real merchant feedback — not
            vanity metrics.
          </p>
        </div>
        <div className="reveal mx-auto grid max-w-[1180px] grid-cols-1 gap-6 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-4">
          {STAGES.map((s) => (
            <div key={s.title} className="flex flex-col rounded-[20px] border border-gray-200 bg-white p-7 shadow-[0_1px_3px_rgba(16,24,40,0.04),0_14px_34px_rgba(16,24,40,0.05)]">
              <div className="mb-5 flex h-[48px] w-[48px] items-center justify-center rounded-[13px] bg-[#f0f3ff] text-brand-blue">
                <Icon name={s.icon} size={22} />
              </div>
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-[17px] font-bold text-gray-900">{s.title}</h3>
              <p className="mb-5 text-[13.5px] leading-[1.65] text-gray-500">{s.desc}</p>
              <span className={`mt-auto inline-flex w-fit rounded-full px-3 py-1 text-[12px] font-bold ${s.badgeTone}`}>{s.badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1180px] px-6 py-[80px]">
        <div className="reveal relative overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#dbe6ff,#eaf6f4)] px-8 py-12 sm:px-12">
          <div className="grid grid-cols-1 items-center gap-8 min-[860px]:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="font-[family-name:var(--font-mono)] text-[12px] font-bold uppercase tracking-[1.5px] text-brand-blue">Get started now</span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(28px,3.8vw,46px)] font-extrabold leading-[1.08] tracking-[-1.4px] text-gray-900">
                Ready to Improve<br />Your Shopify Store?
              </h2>
              <p className="mt-4 max-w-[520px] text-[15px] leading-[1.7] text-gray-600">
                Join merchants who are transforming their B2B operations with FIDE
                Labs. Install free, set up in minutes, and start converting quote
                requests into revenue.
              </p>
              <Link href="/products" className="btn-primary mt-7" style={{ display: "inline-flex" }}>
                Explore Products <Icon name="arrow-right" size={18} />
              </Link>
            </div>
            <div className="hidden justify-center min-[860px]:flex" aria-hidden="true">
              <div className="flex flex-col gap-3">
                <span className="self-end rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-brand-blue shadow-sm">↑ 38% Revenue Growth</span>
                <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,#2F54EB,#14B8A6)] shadow-[0_16px_40px_rgba(47,84,235,0.3)]">
                  <Icon name="rocket" size={48} className="text-white" />
                </div>
                <span className="self-start rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[#0d9488] shadow-sm">Quote Approved ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
