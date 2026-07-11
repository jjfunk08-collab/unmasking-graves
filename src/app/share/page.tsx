import type { Metadata } from "next";
import { ShareStoryForm } from "@/components/ShareStoryForm";

export const metadata: Metadata = {
  title: "Share Your Story",
  description:
    "Elevate the voice of people with Graves' disease. Share your story to raise awareness, foster compassion, and build community — anonymously if you choose.",
  alternates: { canonical: "/share" },
};

export default function SharePage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-wide py-16 md:py-20">
          <p className="eyebrow text-green">No voice unheard</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-medium leading-tight md:text-5xl">
            Share your story
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Behind Graves&rsquo; disease are real people who too often feel
            unseen. Your experience &mdash; shared on your terms &mdash; can help
            someone else feel less alone and move this cause forward.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-wide max-w-2xl py-14 md:py-20">
          <ShareStoryForm />
        </div>
      </section>
    </>
  );
}
