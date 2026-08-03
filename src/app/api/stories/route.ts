import { NextResponse } from "next/server";

/**
 * POST /api/stories
 *
 * Receives a story submission from the Share Your Story form.
 *
 * COMPLIANCE:
 *  - Requires explicit consent (GDPR lawful basis: consent).
 *  - Does NOT accept or store a real name. Only an optional self-chosen
 *    display alias is retained; anything resembling a full name should be
 *    treated as a display alias, and personal names must never be published.
 *  - No analytics or tracking here.
 *
 * WIRING UP STORAGE:
 *  This handler currently validates and acknowledges the submission. To
 *  persist stories, connect one of the following inside the marked block:
 *    - A database (e.g. Vercel Postgres, Supabase, PlanetScale)
 *    - An email/notification service (e.g. Resend) to route to a moderator
 *    - A form backend (e.g. Formspree)
 *  Always route submissions through human moderation before publishing, and
 *  keep the "no names published" rule in the display layer.
 */

export const runtime = "edge";

type Payload = {
  alias?: string;
  relationship?: string;
  region?: string;
  story?: string;
  consent?: boolean;
};

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const story = clean(body.story, 2000);
  const alias = clean(body.alias, 40);
  const relationship = clean(body.relationship, 60);
  const region = clean(body.region, 60);
  const consent = body.consent === true;

  if (!consent) {
    return NextResponse.json(
      { error: "Consent is required to submit a story." },
      { status: 400 }
    );
  }
  if (story.length < 20) {
    return NextResponse.json(
      { error: "Please share at least a sentence or two." },
      { status: 400 }
    );
  }

  // The moderated record — deliberately carries no real name.
  const submission = {
    alias: alias || "Anonymous",
    relationship,
    region,
    story,
    receivedAt: new Date().toISOString(),
    status: "pending-moderation" as const,
  };

  // ── Connect your storage / notification here ──────────────────────────────
  // await db.stories.create({ data: submission });
  // await notifyModerators(submission);
  // ──────────────────────────────────────────────────────────────────────────

  // For now, log server-side so the deploy is functional out of the box.
  console.log("[stories] new submission received", {
    ...submission,
    story: `${submission.story.slice(0, 60)}…`,
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
