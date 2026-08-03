/**
 * #GravesUnmasked — community blog content.
 *
 * COMPLIANCE:
 *  - No real patient names. Community reflections are illustrative composites
 *    drawn from commonly reported experiences and are attributed only by a
 *    non-identifying descriptor (e.g. "diagnosed at 34").
 *  - Educational only. No diagnosis, no personalized medical advice, and no
 *    product, brand, or treatment-efficacy claims.
 *  - Clinical figures reference the same primary sources cited on the site.
 */

export type PostCategory = "Community" | "Living well" | "Understanding Graves'";

export type Post = {
  slug: string;
  title: string;
  category: PostCategory;
  excerpt: string;
  author: string;
  date: string; // ISO
  readMinutes: number;
  /** True for illustrative, anonymized community reflections. */
  isCommunityStory?: boolean;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "why-we-say-graves-unmasked",
    title: "Why we say #GravesUnmasked",
    category: "Community",
    excerpt:
      "A hashtag is a small thing. But for a condition that so often goes unseen, saying its name out loud is where change starts.",
    author: "Unmask Graves' Editorial Team",
    date: "2025-01-14",
    readMinutes: 3,
    body: [
      "Graves' disease has a way of hiding in plain sight. Its early signs — a racing heart, trouble sleeping, weight that falls off for no clear reason, a temper that feels borrowed from someone else — are easy to explain away as stress, or a busy season, or simply getting older.",
      "That is exactly why we chose a hashtag. #GravesUnmasked is an invitation to name what has been misread for too long, and to do it in the open, where other people can find it.",
      "When one person describes the months before their diagnosis, someone scrolling past recognizes their own symptoms for the first time. When a family member shares what it was like to watch a loved one change, another family stops blaming themselves. Visibility is not a vanity metric here. It is how an underrecognized condition becomes a recognized one.",
      "This blog is a place to gather those voices. Some posts are educational. Some are reflections shared by members of the community, always anonymously and always with consent. All of them exist to make Graves' disease a little harder to overlook.",
      "If you have a story, you can share it — on your own terms, under a name of your choosing or none at all. And if you are still trying to make sense of your own experience, we hope you find something here that helps you feel less alone.",
    ],
  },
  {
    slug: "the-symptoms-people-miss-for-months",
    title: "The symptoms people miss for months",
    category: "Understanding Graves'",
    excerpt:
      "Graves' rarely announces itself. More often it arrives as a scattered set of complaints that each seem to have a simpler explanation.",
    author: "Unmask Graves' Editorial Team",
    date: "2025-02-03",
    readMinutes: 5,
    body: [
      "One of the hardest things about Graves' disease is that its symptoms are easy to attribute to something else. Taken one at a time, each can look ordinary. Taken together, they tell a different story.",
      "The condition is an autoimmune form of overactive thyroid: the immune system produces antibodies that push the thyroid to make far more hormone than the body needs. Because thyroid hormone touches nearly every system, the effects show up in scattered places.",
      "People often describe a heart that pounds or races even at rest, a persistent restlessness, and sleep that no longer restores. Others notice unexplained weight loss despite a normal or larger appetite, hands that tremble, heat they can no longer tolerate, or muscles that tire on stairs they used to climb easily.",
      "There can be changes that are easy to misread as purely emotional — anxiety, irritability, difficulty concentrating — which is part of why the condition is so often mistaken for stress alone. Some people also notice eye symptoms: a gritty feeling, bulging, or discomfort that deserves prompt attention.",
      "Graves' is also strikingly uneven in who it affects. Women are diagnosed far more often than men, and a family history of thyroid or autoimmune conditions raises the odds. None of this is a checklist to self-diagnose from. It is a reason to take a cluster of these changes seriously and to ask a clinician about thyroid testing.",
      "If this list feels familiar, that recognition is the point. Naming the pattern is the first step toward getting it checked — and the sooner it is checked, the sooner it can be managed.",
    ],
  },
  {
    slug: "the-year-before-my-diagnosis",
    title: "In her words: the year before my diagnosis",
    category: "Community",
    excerpt:
      "An anonymized reflection, shared with consent, on how long it can take to connect the dots — and the relief of finally having a name.",
    author: "Shared anonymously · diagnosed at 34",
    date: "2025-02-20",
    readMinutes: 4,
    isCommunityStory: true,
    body: [
      "For most of a year, I thought I was just failing at being a person. I was exhausted but couldn't sleep. My heart would race while I was sitting still. I snapped at people I loved and then didn't recognize myself afterward.",
      "I told myself it was work. Then I told myself it was age. Then I told myself it was in my head. Every explanation put the blame back on me, and none of them made it stop.",
      "What finally changed things was a routine appointment where I mentioned, almost as an afterthought, that I'd lost weight without trying. That one detail made my clinician pause and order thyroid tests. A few weeks later I had a name for what had been happening: Graves' disease.",
      "I expected to feel scared. Mostly I felt relief. There was a reason. It wasn't a character flaw. It was a condition — a real, understood, manageable one — and that meant there was a path forward.",
      "I'm sharing this without my name because the details don't matter as much as the pattern. If you've spent months explaining away the same symptoms I did, please let this be the nudge to get your thyroid checked. Having a name changed everything for me.",
    ],
  },
  {
    slug: "questions-worth-asking-your-endocrinologist",
    title: "Questions worth asking at your next appointment",
    category: "Living well",
    excerpt:
      "Appointments move fast. A short list, written down in advance, can help you leave with the answers you actually came for.",
    author: "Unmask Graves' Editorial Team",
    date: "2025-03-10",
    readMinutes: 4,
    body: [
      "Living with Graves' disease means a lot of appointments, and appointments have a way of moving faster than you expect. Walking in with a few questions written down can help you leave with the answers you actually came for.",
      "This is not medical advice, and it is not a substitute for what your own care team tells you. Think of it instead as a starting point you can adapt to your situation.",
      "You might ask what your recent thyroid results actually mean, and how they compare to last time. Understanding the direction things are moving is often more useful than any single number.",
      "It can help to ask what the plan is if your current approach isn't working as hoped, and what signs would signal that something needs to change sooner rather than later. Knowing the 'what if' in advance makes the unexpected less frightening.",
      "Many people also want to understand how their eyes fit into the picture, since eye involvement can need its own attention, and when they should reach out between scheduled visits rather than waiting.",
      "Finally, it is worth asking what you can do day to day, and where to find reliable information and support. Bringing someone with you, or taking notes, makes it far easier to remember the answers later. You are allowed to take up the appointment's time — it is yours.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
