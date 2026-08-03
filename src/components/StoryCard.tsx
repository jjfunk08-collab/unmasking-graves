import type { Story } from "@/lib/stories";

const THEME_LABEL: Record<Story["theme"], string> = {
  diagnosis: "On being diagnosed",
  invisible: "On the invisible weight",
  community: "On not being alone",
  hope: "On what comes next",
};

export function StoryCard({ story }: { story: Story }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 md:p-8">
      <figcaption className="order-2 mt-6 text-sm font-medium text-sky-700">
        {THEME_LABEL[story.theme]}
      </figcaption>
      <blockquote className="order-1 text-lg leading-relaxed text-ink/90">
        &ldquo;{story.quote}&rdquo;
      </blockquote>
      {/* Attribution is a non-identifying descriptor only — never a name. */}
      <p className="order-3 mt-2 text-sm text-muted">{story.descriptor}</p>
    </figure>
  );
}
