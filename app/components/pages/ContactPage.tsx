"use client";

import { useState } from "react";
import Icon from "../Icon";
import { useToast } from "../SiteProviders";

const SUPPORT_EMAIL = "support@fidelabs.io";

type Errors = Partial<
  Record<"firstName" | "lastName" | "email" | "shopUrl" | "message", string>
>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts a store URL with an optional scheme/www and path, e.g.
// "your-store.myshopify.com", "https://shop.co.uk", "www.mystore.com/path".
// Requires a real domain (a dot + a 2+ char TLD) so bare words are rejected.
const SHOP_URL_RE =
  /^(https?:\/\/)?(www\.)?([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}(\/[^\s]*)?$/i;

export default function ContactPage() {
  const { showToast } = useToast();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [errorMsg, setErrorMsg] = useState("");

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const next: Errors = {};
    if (!String(data.get("firstName") ?? "").trim())
      next.firstName = "Please enter your first name.";
    if (!String(data.get("lastName") ?? "").trim())
      next.lastName = "Please enter your last name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    const shopUrl = String(data.get("shopUrl") ?? "").trim();
    if (!shopUrl) next.shopUrl = "Please enter your shop URL.";
    else if (!SHOP_URL_RE.test(shopUrl))
      next.shopUrl = "Please enter a valid store URL (e.g. your-store.myshopify.com).";
    const msg = String(data.get("message") ?? "").trim();
    if (msg.length < 10) next.message = "Please add a few more details (at least 10 characters).";
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot — bots fill hidden fields; humans don't.
    if ((form.elements.namedItem("botcheck") as HTMLInputElement)?.checked) return;

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      setErrorMsg("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    try {
      const data = new FormData(form);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          shopUrl: data.get("shopUrl"),
          message: data.get("message"),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
        showToast("Message sent — we'll reply within one business day.");
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        `Something went wrong sending your message. Please email us directly at ${SUPPORT_EMAIL}.`
      );
    }
  }

  const inputBase =
    "w-full rounded-[12px] border bg-white px-4 py-3 text-[14.5px] text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15";
  const cls = (field: keyof Errors) =>
    `${inputBase} ${errors[field] ? "border-red-400" : "border-gray-200"}`;

  if (status === "success") {
    return (
      <div className="page active" id="page-contact">
        <section className="mx-auto flex min-h-[70vh] max-w-[560px] flex-col items-center justify-center px-6 py-[140px] text-center">
          <div className="mb-6 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#e0faf8] text-[#0d9488]">
            <Icon name="check" size={32} />
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-1px] text-gray-900">
            Message received
          </h1>
          <p className="mt-3 text-[15.5px] leading-[1.7] text-gray-500">
            Thanks for reaching out. Our team will get back to you within one
            business day at the email you provided.
          </p>
          <button
            className="btn-secondary mt-8"
            onClick={() => {
              setStatus("idle");
              setErrors({});
            }}
          >
            Send another message
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="page active" id="page-contact">
      <section className="mx-auto max-w-[1080px] px-6 py-[72px] sm:py-[104px]">
        <div className="grid grid-cols-1 gap-8 min-[860px]:grid-cols-[1.4fr_1fr]">
          {/* FORM */}
          <div className="rounded-[22px] border border-gray-200 bg-white p-7 shadow-[0_10px_40px_rgba(16,24,40,0.05)] sm:p-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 text-[15px] font-semibold text-gray-900">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-teal" />
            Contact
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(28px,4.4vw,42px)] font-extrabold leading-[1.08] tracking-[-1.2px] text-gray-900">
            How can we <span className="text-brand-blue">help?</span>
          </h1>
          <p className="mb-8 mt-3 text-[14.5px] leading-[1.7] text-gray-500">
            Tell us a little about what you need and we&apos;ll reply within one
            business day.
          </p>

          {status === "error" && errorMsg && (
            <div role="alert" className="mb-5 rounded-[12px] border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate aria-describedby="form-status">
            {/* Honeypot (visually hidden, aria-hidden) */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-[13px] font-semibold text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input id="firstName" name="firstName" type="text" autoComplete="given-name"
                  className={cls("firstName")} placeholder="First Name"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? "err-firstName" : undefined} />
                {errors.firstName && (
                  <p id="err-firstName" className="mt-1 text-[12.5px] text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-[13px] font-semibold text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input id="lastName" name="lastName" type="text" autoComplete="family-name"
                  className={cls("lastName")} placeholder="Last Name"
                  aria-invalid={!!errors.lastName}
                  aria-describedby={errors.lastName ? "err-lastName" : undefined} />
                {errors.lastName && (
                  <p id="err-lastName" className="mt-1 text-[12.5px] text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input id="email" name="email" type="email" autoComplete="email"
                  className={cls("email")} placeholder="Email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined} />
                {errors.email && (
                  <p id="err-email" className="mt-1 text-[12.5px] text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="shopUrl" className="mb-1.5 block text-[13px] font-semibold text-gray-700">
                  Shop url <span className="text-red-500">*</span>
                </label>
                <input id="shopUrl" name="shopUrl" type="text" autoComplete="url"
                  className={cls("shopUrl")} placeholder="your-store.myshopify.com"
                  aria-invalid={!!errors.shopUrl}
                  aria-describedby={errors.shopUrl ? "err-shopUrl" : undefined} />
                {errors.shopUrl && (
                  <p id="err-shopUrl" className="mt-1 text-[12.5px] text-red-600">{errors.shopUrl}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-[13px] font-semibold text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea id="message" name="message" rows={5}
                className={`${cls("message")} resize-y`} placeholder="Message"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "err-message" : undefined} />
              {errors.message && (
                <p id="err-message" className="mt-1 text-[12.5px] text-red-600">{errors.message}</p>
              )}
            </div>

            <button type="submit" disabled={status === "submitting"}
              className="btn-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">
              {status === "submitting" ? "Sending…" : "Submit"}
            </button>
            <p id="form-status" className="sr-only" aria-live="polite">
              {status === "submitting" ? "Sending your message" : ""}
            </p>
            <p className="mt-3 text-center text-[12px] text-gray-400">
              By sending this message you agree to our{" "}
              <a href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</a>.
            </p>
          </form>
          </div>

          {/* INFO */}
          <div className="flex flex-col gap-4">
            <div className="rounded-[20px] border border-gray-200 bg-white p-7">
              <div className="mb-3 flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#f0f3ff] text-brand-blue">
                <Icon name="mail" size={22} />
              </div>
              <div className="text-[12px] font-bold uppercase tracking-wide text-gray-400">Support email</div>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-1 block text-[16px] font-semibold text-gray-900 hover:text-brand-blue">
                {SUPPORT_EMAIL}
              </a>
              <p className="mt-1 text-[13px] text-gray-500">For technical questions and app issues.</p>
            </div>
            <div className="rounded-[20px] border border-gray-200 bg-white p-7">
              <div className="mb-3 flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#e0faf8] text-[#0d9488]">
                <Icon name="book" size={22} />
              </div>
              <div className="text-[12px] font-bold uppercase tracking-wide text-gray-400">Documentation</div>
              <a href="/docs" className="mt-1 block text-[16px] font-semibold text-gray-900 hover:text-brand-blue">
                Setup guides &amp; FAQ
              </a>
              <p className="mt-1 text-[13px] text-gray-500">Install, configure, and go live in minutes.</p>
            </div>
            <div className="rounded-[20px] border border-gray-200 bg-[linear-gradient(135deg,#0a0f1e,#13235e)] p-7 text-white">
              <div className="text-[12px] font-bold uppercase tracking-wide text-white/55">Company</div>
              <p className="mt-2 text-[14px] leading-[1.6] text-white/80">
                FIDE Labs (OPC) Private Limited
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
