"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";
import type { Screenshot } from "../lib/products";

/**
 * Product screenshot carousel.
 *
 * Each slide renders a real <Image> when its `src` is set, and a styled
 * placeholder (icon + label) otherwise — so the section looks finished before
 * real screenshots are dropped in. Navigation: prev/next arrows, dot
 * indicators, a thumbnail strip, and left/right arrow keys when focused.
 */
export default function ProductGallery({
  screenshots,
  productName,
}: {
  screenshots: Screenshot[];
  productName: string;
}) {
  const [active, setActive] = useState(0);

  if (!screenshots.length) return null;

  const count = screenshots.length;
  const current = screenshots[active];
  const go = (n: number) => setActive((n + count) % count);

  return (
    <div className="reveal mx-auto max-w-[1000px]">
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={`${productName} screenshots`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(active - 1);
          if (e.key === "ArrowRight") go(active + 1);
        }}
        className="relative overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-[0_24px_60px_rgba(16,24,40,0.1)] outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40"
      >
        {/* Browser-chrome top bar */}
        <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate font-[family-name:var(--font-mono)] text-[11px] text-gray-400">
            {current.label}
          </span>
        </div>

        {/* Slide viewport */}
        <div className="relative aspect-[16/9] w-full bg-[linear-gradient(160deg,#eef5fc,#f6fafe)]">
          {screenshots.map((s, i) => (
            <div
              key={s.label}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {s.src ? (
                <Image
                  src={s.src}
                  alt={`${productName} — ${s.label}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1000px) 100vw, 1000px"
                />
              ) : (
                <Placeholder screenshot={s} index={i} total={count} />
              )}
            </div>
          ))}

          {/* Prev / next */}
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous screenshot"
            className="group absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-600 shadow-[0_4px_14px_rgba(16,24,40,0.12)] backdrop-blur transition hover:border-brand-blue hover:text-brand-blue"
          >
            <span style={{ transform: "scaleX(-1)" }} className="inline-flex">
              <Icon name="arrow-right" size={18} />
            </span>
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-600 shadow-[0_4px_14px_rgba(16,24,40,0.12)] backdrop-blur transition hover:border-brand-blue hover:text-brand-blue"
          >
            <Icon name="arrow-right" size={18} />
          </button>
        </div>
      </div>

      {/* Caption */}
      <p className="mt-4 text-center text-[14px] leading-[1.6] text-gray-500">
        {current.caption}
      </p>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {screenshots.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to ${s.label}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-brand-blue" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="mt-6 grid grid-cols-2 gap-3 min-[560px]:grid-cols-5">
        {screenshots.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${s.label}`}
            aria-current={i === active}
            className={`group flex flex-col items-center gap-2 rounded-[12px] border p-3 text-center transition ${
              i === active
                ? "border-brand-blue bg-[#f0f3ff]"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-[10px] transition ${
                i === active
                  ? "bg-[linear-gradient(135deg,#2F54EB,#14B8A6)] text-white"
                  : "bg-gray-100 text-gray-500 group-hover:text-brand-blue"
              }`}
            >
              <Icon name={s.icon} size={16} />
            </span>
            <span
              className={`text-[11.5px] font-semibold leading-tight ${
                i === active ? "text-brand-blue" : "text-gray-600"
              }`}
            >
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Styled stand-in shown until a real screenshot is provided. */
function Placeholder({
  screenshot,
  index,
  total,
}: {
  screenshot: Screenshot;
  index: number;
  total: number;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(47,84,235,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#2F54EB,#14B8A6)] text-white shadow-[0_10px_28px_rgba(47,84,235,0.28)]">
        <Icon name={screenshot.icon} size={32} />
      </div>
      <div className="relative mt-5 font-[family-name:var(--font-display)] text-[20px] font-bold tracking-[-0.01em] text-gray-800">
        {screenshot.label}
      </div>
      <span className="relative mt-2 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/70 px-3 py-1 font-[family-name:var(--font-mono)] text-[10.5px] font-semibold uppercase tracking-wide text-gray-400">
        Preview · {index + 1} / {total}
      </span>
    </div>
  );
}
