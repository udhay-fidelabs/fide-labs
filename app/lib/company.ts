/**
 * Company + legal constants. Effective/updated dates are set to the current
 * publish date; governing jurisdiction is left as a visible placeholder to be
 * confirmed by legal counsel before launch.
 */
export const COMPANY = {
  legalName: "FIDE LABS (OPC) PRIVATE LIMITED",
  shortName: "FIDE Labs",
  app: "FIDE",
  supportEmail: "support@fidelabs.io",
  privacyEmail: "privacy@fidelabs.io",
  legalEmail: "legal@fidelabs.io",
  registeredAddress:
    "901, 302, DSR Tranquil, Ayyappa Society, Madhapur, Hyderabad – 500081",
  corporateAddress:
    "9th Floor, Kapil Kavuri Hub, 144, Survey 37, Financial District, Nanakramguda, Hyderabad – 500032",
} as const;

export const LEGAL_DATES = {
  effective: "June 30, 2026",
  updated: "June 30, 2026",
  jurisdiction: "[Governing jurisdiction — to be confirmed]",
} as const;
