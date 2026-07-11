/**
 * COMPLIANCE NOTE
 * ---------------
 * These are ILLUSTRATIVE COMPOSITE voices written to represent commonly
 * reported experiences of living with Graves' disease. They are NOT real
 * patients, and — in line with our policy — NO patient names are displayed
 * anywhere on this site. Attribution uses a non-identifying descriptor only
 * (e.g. time since diagnosis, region). When real submissions are wired up
 * (see /api/stories), the same rule applies: display an optional self-chosen
 * alias or "Anonymous," never a real name.
 */

export type Story = {
  id: string;
  quote: string;
  descriptor: string; // non-identifying attribution only
  theme: "diagnosis" | "invisible" | "community" | "hope";
};

export const STORIES: Story[] = [
  {
    id: "s1",
    quote:
      "For months I thought I was just stressed. My heart raced, I couldn't sleep, I was losing weight. Getting a name for it — Graves' — was the first time I didn't feel like I was imagining things.",
    descriptor: "Diagnosed at 31",
    theme: "diagnosis",
  },
  {
    id: "s2",
    quote:
      "People see someone who looks fine. They don't see the exhaustion, the tremor I hide, the mornings I can't get out of bed. It's an illness you carry behind a mask.",
    descriptor: "Living with Graves' for 6 years",
    theme: "invisible",
  },
  {
    id: "s3",
    quote:
      "The hardest part was the isolation. Finding other people who understood — who'd felt the same heat, the same anxiety — changed everything. I'm not alone in it anymore.",
    descriptor: "Caregiver and partner",
    theme: "community",
  },
  {
    id: "s4",
    quote:
      "I want the science to keep moving. Managing symptoms isn't the same as being well. I share my story so the next person diagnosed has more than we did.",
    descriptor: "Advocate, diagnosed at 44",
    theme: "hope",
  },
  {
    id: "s5",
    quote:
      "My eyes changed before anything else. Strangers noticed before my doctor did. I wish more people knew this could be a sign of something treatable.",
    descriptor: "Living with thyroid eye disease",
    theme: "invisible",
  },
  {
    id: "s6",
    quote:
      "Being believed mattered as much as being treated. When my care team listened, I finally felt seen.",
    descriptor: "Diagnosed at 27",
    theme: "community",
  },
];
