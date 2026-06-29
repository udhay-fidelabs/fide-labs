"use client";

import type { PageProps } from "../types";

type Props = Pick<PageProps, "showToast">;

export default function CtaBanner({ showToast }: Props) {
  return (
    <div style={{ padding: "0 5% 80px" }}>
      <div className="fide-cta-banner">

        {/* decorative circles */}
        <div className="fide-cta-circle c1"></div>
        <div className="fide-cta-circle c2"></div>

        {/* LEFT: text */}
        <div className="fide-cta-left">
          <div className="fide-cta-eyebrow">Get started now</div>
          <h2 className="fide-cta-heading">Start Growing Your<br />B2B Sales Today</h2>
          <p className="fide-cta-sub">Ready to transform the way you sell? Discover Shopify apps designed to increase conversions, streamline operations, and fuel long-term growth.</p>
          <button className="fide-cta-btn" onClick={() => showToast("Install flow launching soon!")}>
            Start for free &nbsp;↗
          </button>
        </div>

        {/* RIGHT: SVG illustration */}
        <div className="fide-cta-right">
          <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="fide-cta-svg">

            {/* shelf / table base */}
            <rect x="80" y="240" width="260" height="12" rx="6" fill="#1a1a2e" opacity=".12" />
            {/* box 1 */}
            <rect x="92" y="190" width="64" height="52" rx="8" fill="white" opacity=".55" />
            <rect x="92" y="190" width="64" height="52" rx="8" stroke="#1a1a2e" strokeWidth="2.5" opacity=".2" />
            {/* box 2 */}
            <rect x="166" y="200" width="56" height="42" rx="8" fill="white" opacity=".45" />
            <rect x="166" y="200" width="56" height="42" rx="8" stroke="#1a1a2e" strokeWidth="2.5" opacity=".2" />
            {/* box 3 */}
            <rect x="232" y="210" width="52" height="32" rx="8" fill="white" opacity=".4" />
            <rect x="232" y="210" width="52" height="32" rx="8" stroke="#1a1a2e" strokeWidth="2.5" opacity=".2" />

            {/* person body */}
            <ellipse cx="295" cy="175" rx="28" ry="48" fill="#1a1a2e" opacity=".13" />
            {/* legs */}
            <rect x="278" y="210" width="14" height="38" rx="7" fill="#1a1a2e" opacity=".18" />
            <rect x="296" y="210" width="14" height="38" rx="7" fill="#1a1a2e" opacity=".15" />
            {/* torso */}
            <rect x="272" y="158" width="46" height="60" rx="14" fill="#1a1a2e" opacity=".16" />
            {/* arm holding tablet */}
            <path d="M272 185 Q250 195 245 210" stroke="#1a1a2e" strokeWidth="10" strokeLinecap="round" opacity=".16" />
            {/* tablet */}
            <rect x="222" y="200" width="36" height="26" rx="5" fill="white" opacity=".7" stroke="#1a1a2e" strokeWidth="2" />
            <rect x="226" y="204" width="28" height="4" rx="2" fill="#2F54EB" opacity=".4" />
            <rect x="226" y="211" width="20" height="4" rx="2" fill="#2F54EB" opacity=".3" />
            <rect x="226" y="218" width="24" height="4" rx="2" fill="#2F54EB" opacity=".25" />
            {/* head */}
            <circle cx="295" cy="130" r="28" fill="#1a1a2e" opacity=".14" />
            {/* hair bun */}
            <circle cx="295" cy="105" r="12" fill="#1a1a2e" opacity=".18" />
            <circle cx="308" cy="100" r="8" fill="#1a1a2e" opacity=".15" />
            {/* face smile */}
            <path d="M288 134 Q295 141 302 134" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".6" />
            {/* eye left */}
            <circle cx="289" cy="128" r="2.5" fill="white" opacity=".7" />
            {/* eye right */}
            <circle cx="301" cy="128" r="2.5" fill="white" opacity=".7" />

            {/* speech bubble: review card */}
            <rect x="96" y="60" width="190" height="90" rx="14" fill="white" opacity=".75" />
            <rect x="96" y="60" width="190" height="90" rx="14" stroke="#1a1a2e" strokeWidth="2" opacity=".12" />
            {/* bubble tail */}
            <path d="M180 150 L168 168 L196 150Z" fill="white" opacity=".75" />
            {/* avatar circle in bubble */}
            <circle cx="122" cy="90" r="18" fill="#2F54EB" opacity=".25" />
            <circle cx="122" cy="84" r="7" fill="#2F54EB" opacity=".5" />
            <ellipse cx="122" cy="99" rx="10" ry="6" fill="#2F54EB" opacity=".4" />
            {/* review lines */}
            <rect x="148" y="78" width="116" height="6" rx="3" fill="#1a1a2e" opacity=".18" />
            <rect x="148" y="90" width="90" height="5" rx="2.5" fill="#1a1a2e" opacity=".12" />
            {/* stars */}
            <text x="148" y="120" fontSize="14" fill="#2F54EB" opacity=".7" fontFamily="sans-serif">★ ★ ★ ★ ★</text>

            {/* thumbs up bubble */}
            <rect x="320" y="92" width="60" height="52" rx="12" fill="white" opacity=".75" />
            <rect x="320" y="92" width="60" height="52" rx="12" stroke="#1a1a2e" strokeWidth="2" opacity=".12" />
            <path d="M338 128 C338 125 340 120 344 118 L348 110 C349 107 352 107 353 110 L353 118 L360 118 C362 118 363 120 362 122 L359 130 C358 132 356 133 354 133 L340 133 C339 133 338 132 338 130 Z" fill="#2F54EB" opacity=".5" />
            <rect x="335" y="118" width="5" height="15" rx="2.5" fill="#2F54EB" opacity=".4" />

            {/* sparkle lines */}
            <line x1="88" y1="175" x2="76" y2="163" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" opacity=".2" />
            <line x1="82" y1="180" x2="66" y2="180" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" opacity=".2" />
            <line x1="88" y1="185" x2="76" y2="197" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" opacity=".2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
