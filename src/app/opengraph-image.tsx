import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt =
  "Unmask Graves' Disease — a public-health awareness campaign";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens (inline — Satori cannot read Tailwind/CSS variables)
const NAVY = "#002A61";
const GREEN = "#58BD2B";
const PAPER = "#F7F5F0";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: NAVY,
          padding: "72px",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 700 }}>
          <span style={{ color: GREEN }}>bio</span>
          <span style={{ color: "#FFFFFF" }}>haven</span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Unmasking Graves&#39; Disease
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 34,
              color: PAPER,
              opacity: 0.85,
            }}
          >
            An under-recognized autoimmune condition. No voice unheard.
          </div>
        </div>

        {/* Accent rule + tagline */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", width: 120, height: 8, background: GREEN, borderRadius: 4 }} />
          <div style={{ display: "flex", marginLeft: 24, fontSize: 26, color: PAPER, opacity: 0.7 }}>
            unmaskgravesdisease.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
