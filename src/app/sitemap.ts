import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

const BASE = "https://www.unmaskgravesdisease.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/share",
    "/stories",
    "/blog",
    "/privacy",
    "/cookies",
    "/terms",
    "/social",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "monthly" : path === "/blog" ? "weekly" : "yearly",
    priority: path === "" ? 1 : path === "/share" || path === "/blog" ? 0.8 : 0.5,
  }));

  const postEntries: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
