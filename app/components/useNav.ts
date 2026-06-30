"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { hrefFor } from "../lib/routes";
import { useToast } from "./SiteProviders";

/**
 * Bridges the legacy `{ showPage, showToast }` prop API used by the existing
 * (already-polished) Home components onto the real App Router. Lets those
 * components stay untouched while navigation becomes route-based.
 */
export function useNav() {
  const router = useRouter();
  const { showToast } = useToast();

  const showPage = useCallback(
    (name: string) => router.push(hrefFor(name)),
    [router]
  );

  return { showPage, showToast };
}
