import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Social Media",
  description: "Connect with the Unmask Graves' Disease campaign on social media.",
  alternates: { canonical: "/social" },
};

export default function SocialPage() {
  return (
    <LegalShell title="Social Media">
      <p>
        Help unmask Graves&rsquo; disease by following and sharing the campaign.
        Every share helps someone who feels unseen know they are not alone.
      </p>
      <h2>Community guidelines</h2>
      <p>
        Our social channels are spaces for compassion and support. We ask that
        everyone keep conversation respectful, avoid sharing others&rsquo;
        personal or identifying information, and remember that posts are not
        medical advice.
      </p>
      <p className="rounded-xl bg-paper p-4 text-sm text-muted">
        Official channel links will be published here. To learn more in the
        meantime, visit <a href="https://www.biohaven.com">biohaven.com</a>.
      </p>
    </LegalShell>
  );
}
