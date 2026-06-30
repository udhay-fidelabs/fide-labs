"use client";

import Link from "next/link";
import Icon from "../Icon";
import type { IconName } from "../Icon";

type Topic = { icon: IconName; title: string; desc: string; href: string };

const TOPICS: Topic[] = [
  { icon: "rocket", title: "Getting started", desc: "Install FIDE, enable the theme extension, and go live.", href: "/docs" },
  { icon: "tag", title: "Request Quote setup", desc: "Configure the button, form fields, and product rules.", href: "/docs" },
  { icon: "eye-off", title: "Hide Price", desc: "Hide pricing for products, collections, or your whole store.", href: "/docs" },
  { icon: "mail", title: "Email notifications", desc: "Set up Gmail SMTP, Elastic Email, or custom SMTP.", href: "/docs" },
  { icon: "grid", title: "Quote dashboard", desc: "Review, track, and respond to incoming requests.", href: "/docs" },
  { icon: "lifebuoy", title: "Troubleshooting", desc: "Fixes for widgets not showing or emails not sending.", href: "/docs" },
];

export default function SupportPage() {
  return (
    <div className="page active" id="page-support">
      {/* HERO */}
      <section className="hero" style={{ paddingBottom: "28px" }}>
        <div className="badge"><span className="badge-dot" /> Help & Support</div>
        <h1 className="hero-title">
          How can we <span className="accent">help?</span>
        </h1>
        <p className="hero-sub">
          Browse setup guides and common topics, or reach our team directly. We
          aim to respond within one business day.
        </p>
        <div className="hero-btns" style={{ justifyContent: "center" }}>
          <Link className="btn-primary" href="/docs"><Icon name="book" size={18} /> Read the docs</Link>
          <a className="btn-secondary" href="mailto:support@fidelabs.io"><Icon name="mail" size={18} /> Email support</a>
        </div>
      </section>

      {/* TOPICS */}
      <section className="mx-auto max-w-[1080px] px-6 py-[64px]">
        <div className="reveal grid grid-cols-1 gap-5 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">
          {TOPICS.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group flex flex-col rounded-[18px] border border-gray-200 bg-white p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(47,84,235,0.1)]"
            >
              <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#f0f3ff] text-brand-blue">
                <Icon name={t.icon} size={22} />
              </div>
              <h3 className="mb-1.5 font-[family-name:var(--font-display)] text-[16.5px] font-bold text-gray-900">{t.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-gray-500">{t.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue transition-all group-hover:gap-2.5">
                Open guide <Icon name="arrow-right" size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="bg-gray-50 px-[5%] py-[72px]">
        <div className="reveal mx-auto flex max-w-[880px] flex-col items-center gap-5 rounded-[24px] border border-gray-200 bg-white p-10 text-center shadow-[0_16px_48px_rgba(47,84,235,0.07)]">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#e0faf8] text-[#0d9488]">
            <Icon name="chat" size={26} />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[26px] font-extrabold tracking-[-0.5px] text-gray-900">
            Still need help?
          </h2>
          <p className="max-w-[520px] text-[15px] leading-[1.7] text-gray-500">
            Can&apos;t find what you&apos;re looking for? Send us a message and
            we&apos;ll get back to you within one business day.
          </p>
          <Link className="btn-primary" href="/contact" style={{ display: "inline-flex" }}>
            Contact us <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
