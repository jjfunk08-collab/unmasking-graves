import Link from "next/link";
import { BiohavenLogo } from "./BiohavenLogo";
import { CampaignMark } from "./CampaignMark";

const COMMUNITY = [
  { href: "/blog", label: "Community Blog" },
  { href: "/stories", label: "Stories" },
  { href: "/share", label: "Share your story" },
];

const LEGAL = [
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/social", label: "Social Media" },
  { href: "/cookies", label: "Cookies" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <CampaignMark tone="light" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            The Unmask Graves&rsquo; Disease campaign raises awareness of an
            underrecognized autoimmune condition, elevates the voices of the
            people who live with it, and calls for research into better
            treatments.
          </p>

          <nav aria-label="Community" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {COMMUNITY.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              Sponsored by
            </p>
            <a
              href="https://www.biohaven.com"
              className="mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Biohaven — biohaven.com (opens in a new tab)"
            >
              <BiohavenLogo variant="reverse-white" className="h-6 w-auto" />
            </a>
          </div>
        </div>

        <nav aria-label="Legal" className="md:justify-self-end">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">
            Legal
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {LEGAL.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Biohaven, Ltd. All rights reserved.</p>
          <p>
            This site is for educational awareness only and does not provide
            medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
