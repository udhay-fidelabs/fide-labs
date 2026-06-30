"use client";

/**
 * Inline line-icon set (stroke = currentColor, so each icon inherits the
 * surrounding brand color). Replaces emoji used as iconography. No network
 * requests — every glyph ships in the bundle.
 */
export type IconName =
  | "storefront"
  | "bolt"
  | "heart"
  | "building"
  | "arrow-right"
  | "book"
  | "code"
  | "star"
  | "tag"
  | "eye-off"
  | "cart"
  | "grid"
  | "mail"
  | "bell"
  | "lock"
  | "shield"
  | "check"
  | "search"
  | "chat"
  | "sliders"
  | "lifebuoy"
  | "plug"
  | "rocket";

const PATHS: Record<IconName, string[]> = {
  storefront: [
    "M3 9 L4.5 4.8 A1.5 1.5 0 0 1 6 4 H18 A1.5 1.5 0 0 1 19.5 4.8 L21 9",
    "M5 9 V19.5 A0.5 0.5 0 0 0 5.5 20 H18.5 A0.5 0.5 0 0 0 19 19.5 V9",
    "M10 20 V15 H14 V20",
  ],
  bolt: ["M13 2 L4 13 H11 L10 22 L20 10 H13 Z"],
  heart: [
    "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  ],
  building: [
    "M3 21h18",
    "M6 21V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v17",
    "M15 8h3a1 1 0 0 1 1 1v12",
    "M9 7h2 M9 11h2 M9 15h2",
  ],
  "arrow-right": ["M5 12h14", "M13 6l6 6-6 6"],
  code: ["M8 6l-6 6 6 6", "M16 6l6 6-6 6"],
  book: [
    "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
    "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 0 3-3h7z",
  ],
  star: [
    "M11.48 3.5a.6.6 0 0 1 1.04 0l2.28 4.62 5.1.74a.6.6 0 0 1 .33 1.02l-3.69 3.6.87 5.08a.6.6 0 0 1-.87.63L12 17.3l-4.56 2.4a.6.6 0 0 1-.87-.63l.87-5.08-3.69-3.6a.6.6 0 0 1 .33-1.02l5.1-.74z",
  ],
  tag: [
    "M3 11.5V4a1 1 0 0 1 1-1h7.5a1 1 0 0 1 .7.3l8 8a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-8-8a1 1 0 0 1-.3-.7z",
    "M7.5 7.5h.01",
  ],
  "eye-off": [
    "M9.9 4.24A9.1 9.1 0 0 1 12 4c5 0 9 5 9 8a12 12 0 0 1-2.16 2.94",
    "M6.6 6.6C4 8.1 2.4 10.6 2.4 12c0 1.6 4 6 9.6 6 1.5 0 2.9-.3 4.1-.8",
    "M3 3l18 18",
  ],
  cart: [
    "M2 3h2l2.5 12.5a1 1 0 0 0 1 .8h9a1 1 0 0 0 1-.8L20 7H5.5",
    "M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    "M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  ],
  grid: [
    "M4 4h7v7H4z",
    "M13 4h7v7h-7z",
    "M4 13h7v7H4z",
    "M13 13h7v7h-7z",
  ],
  mail: [
    "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z",
    "M3 6l9 7 9-7",
  ],
  bell: [
    "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",
    "M13.7 21a2 2 0 0 1-3.4 0",
  ],
  lock: [
    "M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z",
    "M8 11V7a4 4 0 0 1 8 0v4",
  ],
  shield: ["M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z", "M9 12l2 2 4-4"],
  check: ["M20 6 9 17l-5-5"],
  search: ["M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z", "M21 21l-4.3-4.3"],
  chat: ["M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"],
  sliders: [
    "M4 21v-7 M4 10V3 M12 21v-9 M12 8V3 M20 21v-5 M20 12V3",
    "M2 14h4 M10 8h4 M18 16h4",
  ],
  lifebuoy: [
    "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
    "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z",
    "M4.9 4.9l3.2 3.2 M15.9 15.9l3.2 3.2 M19.1 4.9l-3.2 3.2 M8.1 15.9l-3.2 3.2",
  ],
  plug: [
    "M9 3v5 M15 3v5",
    "M7 8h10v3a5 5 0 0 1-10 0z",
    "M12 16v5",
  ],
  rocket: [
    "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2",
    "M9 13l-2 2",
    "M13 7c3-3 7-3 7-3s0 4-3 7c-1.7 1.7-4 3-6 4l-3-3c1-2 2.3-4.3 4-6z",
    "M14 8.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z",
  ],
};

export default function Icon({
  name,
  size = 24,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name].map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
