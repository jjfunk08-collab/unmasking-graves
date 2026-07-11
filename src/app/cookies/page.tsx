import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How the Unmask Graves' Disease campaign uses cookies.",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalShell title="Cookie Policy" updated="July 2026">
      <p className="rounded-xl bg-paper p-4 text-sm text-muted">
        This is a template prepared for review by qualified legal counsel before
        publication.
      </p>
      <p>
        Cookies are small text files stored on your device. We keep our use of
        them to a minimum.
      </p>
      <h2>Essential cookies</h2>
      <p>
        These are required for the site to function &mdash; for example,
        remembering your cookie choice. They cannot be switched off.
      </p>
      <h2>Analytics cookies (consent required)</h2>
      <p>
        With your consent, we use analytics cookies to understand, in aggregate,
        how people find and use the campaign so we can improve it. These do not
        load until you select &ldquo;Accept all&rdquo; in the cookie banner.
      </p>
      <h2>Managing your choice</h2>
      <p>
        You can change your decision at any time by clearing this site&rsquo;s
        data in your browser, which will make the cookie banner appear again. You
        can also block or delete cookies through your browser settings.
      </p>
    </LegalShell>
  );
}
