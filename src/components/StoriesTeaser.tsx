import Link from "next/link";
import { STORIES } from "@/lib/stories";
import { StoryCard } from "./StoryCard";
import { Reveal } from "./Reveal";

export function StoriesTeaser() {
  const featured = STORIES.slice(0, 3);
  return (
    <section id="stories-teaser" aria-labelledby="stories-teaser-heading" className="bg-paper">
      <div className="container-wide py-16 md:py-24">
        <Reveal>
          <p className="eyebrow">Community voices</p>
          <h2 id="stories-teaser-heading" className="mt-3 max-w-3xl text-3xl font-medium text-navy md:text-4xl">
            Elevating the voices of people with Graves&rsquo;
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
            Storytelling raises awareness, fosters compassion, and builds
            community. These are illustrative composite voices representing
            experiences commonly shared by people living with Graves&rsquo;
            disease.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.id} delay={i * 90} className="h-full">
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/share"
            className="inline-flex items-center justify-center rounded-full bg-green px-7 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-green-600"
          >
            Share your story
          </Link>
          <Link
            href="/stories"
            className="inline-flex items-center justify-center rounded-full border border-navy/25 px-7 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-navy/5"
          >
            Read more stories
          </Link>
        </div>
      </div>
    </section>
  );
}
