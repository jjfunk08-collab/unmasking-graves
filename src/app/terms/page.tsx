import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms of use for the Unmask Graves' Disease website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms and Conditions" updated="July 2026">
      <p className="rounded-xl bg-paper p-4 text-sm text-muted">
        This is a template prepared for review by qualified legal counsel before
        publication.
      </p>
      <h2>Educational purpose only</h2>
      <p>
        This website is provided for general awareness and educational purposes.
        It does not provide medical advice, diagnosis, or treatment, and is not a
        substitute for the advice of a qualified healthcare provider. Always seek
        the guidance of your physician with any questions about a medical
        condition. Never disregard professional medical advice because of
        something you have read here.
      </p>
      <h2>No product promotion</h2>
      <p>
        This is an unbranded disease-awareness resource. It does not recommend,
        promote, or advertise any specific medicine or treatment.
      </p>
      <h2>User-submitted stories</h2>
      <p>
        By submitting a story you confirm it is your own, that you have the right
        to share it, and that it does not identify any other individual. We may
        moderate, edit for length or clarity, decline, or remove submissions at
        our discretion. We never publish real names.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Content on this site is owned by or licensed to Biohaven, Ltd. and may
        not be reproduced without permission.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be directed through{" "}
        <a href="https://www.biohaven.com">biohaven.com</a>.
      </p>
    </LegalShell>
  );
}
