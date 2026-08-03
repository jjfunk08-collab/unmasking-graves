import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, POSTS } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — #GravesUnmasked`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="bg-paper">
      {/* Header */}
      <header className="bg-navy text-white">
        <div className="container-wide max-w-3xl py-14 md:py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:gap-2.5"
          >
            <span aria-hidden="true">&larr;</span>
            #GravesUnmasked
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky">
            <span>{post.category}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sky" />
            <span className="text-white/70">{post.readMinutes} min read</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70">
            <span>{post.author}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="container-wide max-w-3xl py-12 md:py-16">
        {post.isCommunityStory && (
          <p className="mb-8 rounded-2xl border border-sky/40 bg-sky/5 p-5 text-sm leading-relaxed text-ink/80">
            This is an anonymized community reflection, shared with consent. It
            is illustrative of experiences commonly reported with Graves&rsquo;
            disease and does not identify any individual.
          </p>
        )}

        <div className="space-y-6 text-lg leading-relaxed text-ink/85">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Share prompt */}
        <div className="mt-12 rounded-3xl border border-navy/10 bg-white p-8 text-center">
          <p className="font-display text-xl font-medium text-navy">
            Have a story of your own?
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
            You can share it on your own terms — under a name of your choosing,
            or none at all.
          </p>
          <Link
            href="/share"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-700"
          >
            Share your story
          </Link>
        </div>

        <p className="mt-10 text-sm leading-relaxed text-muted">
          This post is for awareness and education only and does not provide
          medical advice. Always speak with a qualified clinician about your own
          health.
        </p>
      </div>
    </article>
  );
}
