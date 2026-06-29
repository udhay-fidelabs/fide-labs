import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#2F54EB",
          dark: "#1a3cc7",
          light: "#e8edff",
          xlight: "#f0f3ff",
        },
        teal: {
          primary: "#14B8A6",
          dark: "#0d9488",
          light: "#e0faf8",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        dark: {
          primary: "#0a0f1e",
          secondary: "#0d1526",
        },
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["13px", { lineHeight: "18px" }],
        base: ["15px", { lineHeight: "24px" }],
        lg: ["16px", { lineHeight: "24px" }],
        xl: ["17px", { lineHeight: "28px" }],
        "2xl": ["20px", { lineHeight: "28px" }],
        "3xl": ["24px", { lineHeight: "32px" }],
        "4xl": ["32px", { lineHeight: "40px" }],
        "5xl": ["36px", { lineHeight: "44px" }],
        "6xl": ["48px", { lineHeight: "56px" }],
        "7xl": ["56px", { lineHeight: "64px" }],
        "8xl": ["64px", { lineHeight: "72px" }],
        "9xl": ["72px", { lineHeight: "80px" }],
      },
      borderRadius: {
        xs: "6px",
        sm: "10px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
      },
      boxShadow: {
        sm: "0 2px 16px rgba(0, 0, 0, 0.07)",
        md: "0 4px 24px rgba(47, 84, 235, 0.1)",
        lg: "0 16px 48px rgba(47, 84, 235, 0.15)",
        xl: "0 32px 100px rgba(47, 84, 235, 0.18)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2F54EB, #1a3cc7)",
        "gradient-dark": "linear-gradient(135deg, #0a0f1e, #0d1a3d)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
