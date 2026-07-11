import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieConsent } from "@/components/CookieConsent";

// Display face: Fraunces — a warm, high-contrast old-style serif for the
// emotional, human register of the campaign (used with restraint).
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body/UI face: Public Sans — a neutral, institutional grotesque used by the
// US Web Design System; signals clinical credibility and stays highly legible.
const sans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://www.unmaskgravesdisease.com";
const DESCRIPTION =
  "Graves' disease affects nearly 1 in 100 Americans, predominantly women. Learn the signs, understand the impact, and help unmask an underrecognized public health crisis.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Unmask Graves' Disease",
    template: "%s | Unmask Graves' Disease",
  },
  description: DESCRIPTION,
  keywords: [
    "Graves' disease",
    "hyperthyroidism",
    "autoimmune disease",
    "thyroid",
    "thyroid eye disease",
    "disease awareness",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Unmask Graves' Disease",
    title: "Unmask Graves' Disease",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Unmask Graves' Disease",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#002A61",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
