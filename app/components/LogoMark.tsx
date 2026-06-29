"use client";

import { useId } from "react";

/**
 * FIDE Labs brand mark — the rounded-square badge with the FL monogram,
 * rendered from the source logo (Frame 596). Gradient: #2F54EB → #14B8A6.
 */
export default function LogoMark({ size = 34 }: { size?: number }) {
  const gid = useId().replace(/:/g, "");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 187 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        display: "block",
        flexShrink: 0,
        filter: "drop-shadow(0 2px 8px rgba(47,84,235,.3))",
      }}
    >
      <rect width="187" height="187" rx="24.129" fill={`url(#${gid})`} />
      <path
        d="M88.946 109.866C88.946 108.868 89.2891 107.9 89.9176 107.125L107.161 85.8563C108.852 83.7703 112.226 84.9031 112.315 87.587L113.29 116.827C113.368 119.166 115.283 121.025 117.624 121.034L154.465 121.174C155.349 121.177 155.86 122.178 155.345 122.896L148.442 132.515L145.762 136.251C142.341 141.018 136.825 143.835 130.958 143.813L113.344 143.747L95.1123 143.747C91.7068 143.747 88.946 140.986 88.946 137.58L88.946 109.866Z"
        fill="white"
      />
      <path
        d="M32.5107 60.2742C32.5107 48.2546 42.2545 38.5109 54.2741 38.5109H126.822C128.464 38.5109 129.515 40.2603 128.743 41.7099L122.143 54.1067C118.993 60.0232 112.837 63.7201 106.134 63.7201H62.254C60.6514 63.7201 59.3522 65.0193 59.3522 66.6219V77.0291C59.3522 78.6043 60.6089 79.8918 62.1835 79.93L101.186 80.8775C102.392 80.9068 103.038 82.3104 102.275 83.2453L85.9768 103.214C84.7368 104.733 82.8796 105.615 80.9186 105.615H63.2814C61.7027 105.615 60.4137 106.877 60.3802 108.455L60.106 121.399C59.7879 136.412 47.5268 148.416 32.5107 148.416V60.2742Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id={gid}
          x1="-43.2312"
          y1="-62.836"
          x2="110.591"
          y2="152.817"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2F54EB" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
