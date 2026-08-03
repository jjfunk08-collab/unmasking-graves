import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "#GravesUnmasked — Community Blog",
  description:
    "Stories, reflections, and plain-language explainers from the Unmask Graves' Disease community. Naming an underrecognized condition, out in the open.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "#GravesUnmasked — Community Blog",
    description:
      "Stories, reflections, and plain-language explainers from the Unmask Graves' Disease community.",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      {/* Masthead */}
      <section className="bg-navy text-white">
        <div className="container-wide py-16 md:py-20">
          <p className="eyebrow text-sky">Community Blog</p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-6xl">
            #GravesUnmasked
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Stories, reflections, and plain-language explainers from the people
            living with Graves&rsquo; disease and those who stand beside them.
            Naming an underrecognized condition, out in the open.
          </p>
          <div className="mt-8">
            <Link
              href="/share"
              className="inline-flex items-center justify-center rounded-full bg-sky px-7 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-sky-600"
            >
              Share your story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="border-b border-navy/10 bg-paper">
        <div className="container-wide py-14 md:py-16">
          <article className="grid gap-8 rounded-3xl border border-navy/10 bg-white p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
            <div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                <span>Featured</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sky" />
                <span className="text-muted">{featured.category}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-navy md:text-4xl">
                <Link href={`/blog/${featured.slug}`} className="hover:text-sky-700">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                {featured.excerpt}
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-sky-700 hover:gap-2.5"
              >
                Read the post
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-navy p-10 text-center">
              <p className="font-display text-2xl font-medium leading-snug text-white">
                &ldquo;Saying its name out loud is where change starts.&rdquo;
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-paper">
        <div className="container-wide py-14 md:py-16">
          <h2 className="font-display text-2xl font-medium text-navy">Latest posts</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted">
            Community reflections are shared with consent and published
            anonymously; they are illustrative of experiences commonly reported
            with Graves&rsquo; disease. This blog is for awareness and education
            only and does not provide medical advice.
          </p>
        </div>
      </section>
    </>
  );
}
