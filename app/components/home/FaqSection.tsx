"use client";

import { FaqBlock } from "../Faq";
import { GENERAL_FAQ } from "../../lib/faq";

// Home FAQ — the finalized single source of truth, rendered through the shared
// FAQ design so the same content/look is reused everywhere on the site.
export default function FaqSection() {
  return <FaqBlock items={GENERAL_FAQ} />;
}
