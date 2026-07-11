import type { MetadataRoute } from "next";

const BASE = "https://www.unmaskgravesdisease.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/share", "/stories", "/privacy", "/cookies", "/terms", "/social"];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/share" ? 0.8 : 0.5,
  }));
}
