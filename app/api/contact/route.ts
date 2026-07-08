import type { NextRequest } from "next/server";
import { Resend } from "resend";

// Contact form → email delivery via Resend.
// The email design lives in a Resend template (not in this file); we only pass
// the field values as variables. See email-templates/contact-notification.html
// for the template source to paste into Resend.
//
// Set these in .env.local (see .env.example):
//   RESEND_API_KEY      — required, from https://resend.com/api-keys
//   CONTACT_TEMPLATE_ID — required, the Resend template ID to render
//   CONTACT_TO_EMAIL    — inbox that receives submissions
//   CONTACT_FROM_EMAIL  — verified sender ("Name <you@your-domain>")

const TO_EMAIL = process.env.CONTACT_TO_EMAIL as string;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL as string;
const TEMPLATE_ID = process.env.CONTACT_TEMPLATE_ID as string;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SHOP_URL_RE =
  /^(https?:\/\/)?(www\.)?([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}(\/[^\s]*)?$/i;

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !TEMPLATE_ID) {
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

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      template: {
        id: TEMPLATE_ID,
        variables: { firstName, lastName, fullName, email, shopUrl, message },
      },
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
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
