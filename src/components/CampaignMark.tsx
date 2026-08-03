/**
 * Campaign wordmark for the Unmask Graves' Disease awareness site.
 *
 * This is the site's own identity — a light-blue/dark-blue lockup that keeps
 * the campaign visually distinct from any single sponsor's corporate brand.
 * The glyph echoes the favicon: a ring (the "mask") with a bright dot being
 * revealed at its centre.
 *
 * tone="dark"  → for light backgrounds (header)
 * tone="light" → for dark backgrounds (footer)
 */

type Tone = "dark" | "light";

const SKY = "#4AA3E0";

export function CampaignMark({
  tone = "dark",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const ring = tone === "light" ? "#FFFFFF" : "#0A3D6B";
  const word = tone === "light" ? "#FFFFFF" : "#0A3D6B";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        role="img"
        aria-hidden="true"
        className="shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="12" fill="none" stroke={ring} strokeWidth="2.6" />
        <circle cx="16" cy="16" r="4.4" fill={SKY} />
      </svg>
      <span className="font-display text-[1.02rem] font-semibold leading-none tracking-tight">
        <span style={{ color: SKY }}>Unmask</span>{" "}
        <span style={{ color: word }}>Graves&rsquo; Disease</span>
      </span>
    </span>
  );
}
