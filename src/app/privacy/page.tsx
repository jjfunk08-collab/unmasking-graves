import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Unmask Graves' Disease campaign handles personal data.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 2026">
      <p className="rounded-xl bg-paper p-4 text-sm text-muted">
        This is a template prepared for review by qualified legal counsel before
        publication. It should be tailored to the applicable jurisdictions and
        the campaign&rsquo;s actual data practices.
      </p>

      <p>
        The Unmask Graves&rsquo; Disease campaign is committed to protecting your
        privacy. This policy explains what information we collect, why, and the
        rights you have over it.
      </p>

      <h2>Information we collect</h2>
      <p>
        We only collect information you actively choose to give us. When you
        submit a story, that may include an optional display name, an optional
        region, an optional description of your connection to Graves&rsquo;
        disease, and the story text itself. We do not ask for, and ask that you
        do not include, real names or other information that could identify you
        or another person.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To review, moderate, and &mdash; with your consent &mdash; publish stories for awareness.</li>
        <li>To understand, in aggregate, how the campaign is reaching people.</li>
      </ul>
      <p>
        We do not sell your personal data. We do not use submitted stories for
        advertising.
      </p>

      <h2>Legal basis (GDPR)</h2>
      <p>
        Where the EU/UK General Data Protection Regulation applies, we rely on
        your <strong>consent</strong> as the lawful basis for processing story
        submissions. You may withdraw consent at any time.
      </p>

      <h2>Your rights</h2>
      <ul>
        <li>Request access to the information we hold about you.</li>
        <li>Ask us to correct or delete your story.</li>
        <li>Withdraw your consent and have your story removed from publication.</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use essential cookies to make the site work, and analytics cookies
        only with your consent. See our <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>Contact</h2>
      <p>
        To exercise any of these rights or ask a question about your data,
        contact the campaign team through <a href="https://www.biohaven.com">biohaven.com</a>.
      </p>
    </LegalShell>
  );
}
