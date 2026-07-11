import type { Metadata } from "next";
import Link from "next/link";
import { STORIES } from "@/lib/stories";
import { StoryCard } from "@/components/StoryCard";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Community Stories",
  description:
    "Voices from the Graves' disease community. Storytelling that raises awareness, fosters compassion, and reminds people they are not alone.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-wide py-16 md:py-20">
          <p className="eyebrow text-green">Community voices</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-medium leading-tight md:text-5xl">
            No person feeling alone
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Behind every statistic is a person. These voices reflect experiences
            commonly shared by people living with, and caring for those with,
            Graves&rsquo; disease.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-wide py-14 md:py-20">
          <p className="mb-8 rounded-2xl border border-navy/10 bg-white px-5 py-4 text-sm leading-relaxed text-muted">
            <strong className="font-semibold text-navy">Please note:</strong> the
            stories below are illustrative composites written to represent common
            experiences. They are not real individuals, and no patient names are
            published on this site. When you{" "}
            <Link href="/share" className="link-underline">
              share your own story
            </Link>
            , it appears only with a display name of your choosing, or
            anonymously.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 90} className="h-full">
                <StoryCard story={s} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-navy p-8 text-center text-white md:p-12">
            <h2 className="font-display text-2xl font-medium md:text-3xl">
              Your story belongs here too
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-white/85">
              Adding your voice helps unmask Graves&rsquo; disease for everyone
              still searching for answers.
            </p>
            <Link
              href="/share"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-green px-7 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-green-600"
            >
              Share your story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
