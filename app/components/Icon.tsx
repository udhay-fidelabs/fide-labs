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
  | "star";

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
  book: [
    "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
    "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 0 3-3h7z",
  ],
  star: [
    "M11.48 3.5a.6.6 0 0 1 1.04 0l2.28 4.62 5.1.74a.6.6 0 0 1 .33 1.02l-3.69 3.6.87 5.08a.6.6 0 0 1-.87.63L12 17.3l-4.56 2.4a.6.6 0 0 1-.87-.63l.87-5.08-3.69-3.6a.6.6 0 0 1 .33-1.02l5.1-.74z",
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
