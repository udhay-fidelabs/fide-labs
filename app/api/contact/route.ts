import type { NextRequest } from "next/server";
import { Resend } from "resend";

// Contact form → email delivery via Resend.
// The API key is read server-side only and never exposed to the browser.
// Set these in .env.local (see .env.example):
//   RESEND_API_KEY      — required, from https://resend.com/api-keys
//   CONTACT_TO_EMAIL     — inbox that receives submissions (default support@fidelabs.io)
//   CONTACT_FROM_EMAIL   — verified sender (default Resend's shared test sender)

const TO_EMAIL = process.env.CONTACT_TO_EMAIL as string;
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL as string;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SHOP_URL_RE =
  /^(https?:\/\/)?(www\.)?([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}(\/[^\s]*)?$/i;

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { success: false, message: "Email service is not configured." },
      { status: 503 }
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot — bots fill hidden fields; humans don't. Silently accept so the
  // bot thinks it succeeded, but send nothing.
  if (data.botcheck) {
    return Response.json({ success: true });
  }

  const firstName = String(data.firstName ?? "").trim();
  const lastName = String(data.lastName ?? "").trim();
  const email = String(data.email ?? "").trim();
  const shopUrl = String(data.shopUrl ?? "").trim();
  const message = String(data.message ?? "").trim();

  const missing: string[] = [];
  if (!firstName) missing.push("your first name");
  if (!lastName) missing.push("your last name");
  if (!email || !EMAIL_RE.test(email)) missing.push("a valid email address");
  if (!shopUrl || !SHOP_URL_RE.test(shopUrl)) missing.push("a valid shop URL");
  if (message.length < 10) missing.push("a message (at least 10 characters)");
  if (missing.length) {
    return Response.json(
      { success: false, message: `Please provide ${missing.join(", ")}.` },
      { status: 400 }
    );
  }

  const fullName = `${firstName} ${lastName}`;
  const text = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Shop URL: ${shopUrl}`,
    "",
    "Message:",
    message,
  ].join("\n");
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;color:#111">
      <h2 style="margin:0 0 16px">New contact form message</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        <tr><td style="padding:4px 16px 4px 0;color:#666">Name</td><td style="padding:4px 0"><strong>${esc(fullName)}</strong></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#666">Email</td><td style="padding:4px 0"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td style="padding:4px 16px 4px 0;color:#666">Shop URL</td><td style="padding:4px 0">${esc(shopUrl)}</td></tr>
      </table>
      <p style="margin:16px 0 6px;color:#666">Message</p>
      <div style="white-space:pre-wrap;padding:12px 14px;background:#f6f7f9;border-radius:10px">${esc(message)}</div>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New contact message from ${fullName}`,
      text,
      html,
    });
    if (error) {
      console.error("Resend send error:", error);
      return Response.json(
        { success: false, message: "Could not send your message." },
        { status: 502 }
      );
    }
    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json(
      { success: false, message: "Could not send your message." },
      { status: 502 }
    );
  }
}
