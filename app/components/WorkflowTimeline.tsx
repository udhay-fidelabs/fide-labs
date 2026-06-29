"use client";

import { useEffect, useRef, useState } from "react";

type Step = { n: string; t: string; d: string; meta: string };

const STEPS: Step[] = [
  {
    n: "01",
    t: "Customer requests quote",
    d: "A shopper taps “Request a quote” instead of Buy, right on your product page — no account or back-and-forth email needed.",
    meta: "On your storefront",
  },
  {
    n: "02",
    t: "Merchant reviews request",
    d: "It lands in your dashboard the moment it’s sent, with the full cart, quantities, and customer details attached.",
    meta: "FIDE dashboard",
  },
  {
    n: "03",
    t: "Merchant sends quote",
    d: "Set custom pricing, volume discounts, and terms, then send a branded offer back in a single click.",
    meta: "Custom pricing",
  },
  {
    n: "04",
    t: "Customer reviews quote",
    d: "They get a branded email with your price, terms, and a secure link to accept — no login required.",
    meta: "Branded email",
  },
  {
    n: "05",
    t: "Customer approves",
    d: "One click accepts the quote and drops the agreed pricing straight into a ready-to-pay checkout.",
    meta: "Secure checkout",
  },
  {
    n: "06",
    t: "Order confirmed",
    d: "The paid order flows straight into Shopify with the quoted pricing intact — no manual entry, no re-keying.",
    meta: "Synced to Shopify",
  },
];

export default function WorkflowTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const [fill, setFill] = useState(0); // 0..1 — how full the spine is
  const [active, setActive] = useState(0); // how many nodes are completed

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFill(1);
      setActive(STEPS.length);
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const nodes = Array.from(list.querySelectorAll<HTMLElement>("[data-node]"));
      if (!nodes.length) return;
      const trigger = window.innerHeight * 0.62;
      const first = nodes[0].getBoundingClientRect();
      const last = nodes[nodes.length - 1].getBoundingClientRect();
      const span = last.top - first.top || 1;
      setFill(Math.min(1, Math.max(0, (trigger - first.top) / span)));
      let count = 0;
      for (const n of nodes) if (n.getBoundingClientRect().top + n.offsetHeight / 2 <= trigger) count++;
      setActive(count);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const done = active >= STEPS.length;

  return (
    <div className="workflow reveal">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 min-[900px]:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] min-[900px]:gap-14 xl:gap-20">

        {/* sticky heading */}
        <div className="text-center min-[900px]:sticky min-[900px]:top-28 min-[900px]:self-start min-[900px]:text-left">
          <p className="font-[family-name:var(--font-mono)] text-[14px] font-medium tracking-[0.08em] text-brand-teal">// How It Works</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(32px,3.6vw,48px)] font-bold leading-[1.18] tracking-tight text-gray-900">
            From Quote Request to{" "}
            <span className="mt-2 inline-block rounded-[10px] bg-gradient-to-r from-brand-blue to-brand-teal px-3 pb-1.5 pt-1 leading-none text-white">Revenue</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[400px] font-[family-name:var(--font-sans)] text-[16px] leading-relaxed text-gray-500 min-[900px]:mx-0">
            A seamless workflow that turns quote requests into confirmed, paid orders — automatically, in six steps.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          <ol ref={listRef} className="relative flex flex-col gap-12 min-[900px]:gap-16">
            {/* spine track + animated fill */}
            <span aria-hidden="true" className="pointer-events-none absolute left-[21px] top-9 bottom-9 w-1 rounded bg-brand-blue/15">
              <span
                className="absolute left-0 top-0 w-full rounded bg-gradient-to-b from-brand-blue to-brand-teal transition-[height] duration-300 ease-out"
                style={{ height: `${fill * 100}%` }}
              />
            </span>

            {STEPS.map((s, i) => {
              const on = i < active;
              return (
                <li key={s.n} className="relative grid grid-cols-[44px_1fr] items-start gap-9">
                  {/* check node */}
                  <span
                    data-node
                    aria-hidden="true"
                    className={`z-10 mt-9 grid h-10 w-10 place-items-center rounded-full ring-4 transition-all duration-500 ${
                      on
                        ? "scale-100 bg-gradient-to-br from-brand-blue to-brand-teal text-white shadow-[0_6px_16px_rgba(47,84,235,0.4)] ring-[#e9f1fd]"
                        : "scale-90 bg-white text-slate-300 ring-[#dbe7f5]"
                    }`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>

                  {/* gradient-border white card */}
                  <div className="rounded-[22px] bg-gradient-to-br from-brand-blue to-brand-teal p-[2px] shadow-[0_18px_45px_rgba(47,84,235,0.12)] transition-transform duration-300 hover:-translate-y-1">
                    <div className="rounded-[20px] bg-white p-8 sm:p-9">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="bg-gradient-to-br from-brand-blue to-brand-teal bg-clip-text font-[family-name:var(--font-mono)] text-[46px] font-semibold leading-none text-transparent">{s.n}</span>
                        <span className="font-[family-name:var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.1em] text-gray-400">{s.meta}</span>
                      </div>
                      <h3 className="mt-7 font-[family-name:var(--font-display)] text-[22px] font-bold leading-snug tracking-tight text-gray-900">{s.t}</h3>
                      <p className="mt-3 font-[family-name:var(--font-sans)] text-[15px] leading-relaxed text-gray-500">{s.d}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* celebration */}
          <div className="mt-12 grid grid-cols-[44px_1fr] items-center gap-9">
            <span
              className={`grid h-10 w-10 place-items-center text-[26px] transition-all duration-500 ${done ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
              aria-hidden="true"
            >
              🎉
            </span>
            <span className={`font-[family-name:var(--font-sans)] text-[15px] font-semibold text-gray-600 transition-opacity duration-500 ${done ? "opacity-100" : "opacity-0"}`}>
              Revenue in the bank — no manual entry, no chasing.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
