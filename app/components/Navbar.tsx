"use client";

import { useState } from "react";
import LogoMark from "./LogoMark";

interface NavbarProps {
  activePage: string;
  scrolled: boolean;
  menuOpen: boolean;
  showPage: (name: string) => void;
  showToast: (msg: string) => void;
  toggleMenu: () => void;
}

type SubItem = { label: string; desc: string; page: string };
type NavItem = { label: string; page?: string; items?: SubItem[] };

const NAV: NavItem[] = [
  {
    label: "Products",
    items: [
      { label: "Quote Requests", desc: "Let shoppers request a quote in one tap", page: "product" },
      { label: "Hide Pricing", desc: "Gate prices behind login or approval", page: "product" },
      { label: "Quote Dashboard", desc: "Track and manage every request", page: "product" },
      { label: "Email Automation", desc: "Send branded quotes automatically", page: "product" },
    ],
  },
  { label: "Pricing", page: "pricing" },
  {
    label: "Company",
    items: [
      { label: "About us", desc: "Our mission and the team behind FIDE", page: "about" },
      { label: "Contact", desc: "Talk to our team", page: "contact" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Documentation", desc: "Setup guides and API reference", page: "docs" },
      { label: "Help & Support", desc: "Get answers fast", page: "support" },
    ],
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar({
  activePage,
  scrolled,
  menuOpen,
  showPage,
  toggleMenu,
}: NavbarProps) {
  const [open, setOpen] = useState<string | null>(null);

  const isActive = (item: NavItem) =>
    item.page === activePage || item.items?.some((s) => s.page === activePage);

  const span0 = menuOpen ? "rotate(45deg) translate(5px,5px)" : "";
  const span2 = menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "";

  return (
    <>
      {/* NAVIGATION — flat white bar */}
      <header
        className={`fixed inset-x-0 top-0 z-[1000] border-b border-gray-200 bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_6px_24px_rgba(16,24,40,0.06)]" : ""
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1240px] items-center px-5 sm:px-8">
          {/* logo */}
          <button className="flex flex-shrink-0 items-center gap-2.5" onClick={() => showPage("home")}>
            <LogoMark size={32} />
            <span className="font-[family-name:var(--font-display)] text-[20px] font-extrabold tracking-tight text-gray-900">
              FIDE<span className="text-brand-blue">Labs</span>
            </span>
          </button>

          {/* center nav */}
          <div role="navigation" aria-label="Primary" className="ml-10 hidden flex-1 items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.items ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpen(item.label)}
                  onMouseLeave={() => setOpen(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors ${
                      isActive(item) || open === item.label
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                    <Chevron open={open === item.label} />
                  </button>

                  {open === item.label && (
                    <div className="absolute left-0 top-full z-50 pt-2.5">
                      <div className="w-[320px] rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_24px_60px_rgba(16,24,40,0.14)]">
                        {item.items.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => {
                              showPage(sub.page);
                              setOpen(null);
                            }}
                            className="flex w-full flex-col gap-0.5 rounded-xl px-4 py-2.5 text-left transition-colors hover:bg-gray-50"
                          >
                            <span className="text-[14px] font-semibold text-gray-900">{sub.label}</span>
                            <span className="text-[12.5px] leading-snug text-gray-500">{sub.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => showPage(item.page!)}
                  className={`rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors ${
                    isActive(item) ? "text-gray-900" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* right actions */}
          <div className="ml-auto flex items-center gap-2.5 lg:ml-0">
            <button
              onClick={() => showPage("contact")}
              className="rounded-full bg-brand-blue px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_4px_14px_rgba(47,84,235,0.3)] transition-all hover:-translate-y-px hover:bg-[#2748d8]"
            >
              Contact
            </button>
            <button
              className="ml-1 flex flex-col gap-[5px] p-2 lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="h-0.5 w-5 rounded bg-gray-700 transition-all" style={{ transform: span0 }} />
              <span className="h-0.5 w-5 rounded bg-gray-700 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="h-0.5 w-5 rounded bg-gray-700 transition-all" style={{ transform: span2 }} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-[68px] z-[999] max-h-[calc(100vh-68px)] overflow-y-auto border-b border-gray-200 bg-white px-5 py-4 lg:hidden">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-gray-100 py-2 last:border-0">
              {item.page ? (
                <button
                  onClick={() => {
                    showPage(item.page!);
                    toggleMenu();
                  }}
                  className="w-full py-2 text-left text-[15px] font-semibold text-gray-900"
                >
                  {item.label}
                </button>
              ) : (
                <>
                  <div className="py-1 font-[family-name:var(--font-mono)] text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400">
                    {item.label}
                  </div>
                  {item.items!.map((sub) => (
                    <button
                      key={sub.label}
                      onClick={() => {
                        showPage(sub.page);
                        toggleMenu();
                      }}
                      className="w-full py-2 text-left text-[15px] font-medium text-gray-700"
                    >
                      {sub.label}
                    </button>
                  ))}
                </>
              )}
            </div>
          ))}
          <button
            onClick={() => {
              showPage("contact");
              toggleMenu();
            }}
            className="mt-4 w-full rounded-full bg-brand-blue px-4 py-2.5 text-[14px] font-semibold text-white"
          >
            Contact
          </button>
        </div>
      )}
    </>
  );
}
