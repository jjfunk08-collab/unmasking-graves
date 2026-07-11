"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ugd-cookie-consent";

/**
 * Minimal, GDPR-aware consent gate. Non-essential cookies/analytics must not
 * load until the visitor explicitly accepts. This component only records the
 * choice; wire your analytics loader to check `localStorage[STORAGE_KEY]`
 * before initializing.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = window.localStorage.getItem(STORAGE_KEY);
      if (!choice) setVisible(true);
    } catch {
      // Storage blocked — show the banner so the visitor can still decide.
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-navy/10 bg-white p-5 shadow-xl sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink">
          We use essential cookies to make this site work. With your consent, we
          also use analytics cookies to understand how the campaign is reaching
          people. See our{" "}
          <Link href="/cookies" className="link-underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-full border border-navy/25 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
