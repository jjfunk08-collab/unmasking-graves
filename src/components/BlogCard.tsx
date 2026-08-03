import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 transition-colors hover:border-sky/60 md:p-8">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
        <span>{post.category}</span>
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sky" />
        <span className="text-muted">{post.readMinutes} min read</span>
      </div>

      <h3 className="mt-4 font-display text-xl font-medium leading-snug text-navy">
        <Link href={`/blog/${post.slug}`} className="hover:text-sky-700">
          {post.title}
        </Link>
      </h3>

      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/80">
        {post.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between gap-3 text-sm">
        <span className="text-muted">{post.author}</span>
        <time dateTime={post.date} className="shrink-0 text-muted">
          {formatDate(post.date)}
        </time>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:gap-2.5"
        aria-label={`Read “${post.title}”`}
      >
        Read post
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
