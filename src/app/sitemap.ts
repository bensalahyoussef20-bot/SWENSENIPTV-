import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";
import { getAllPosts } from "@/lib/blog";

const baseUrl = siteConfig.url;

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/priser", priority: 0.9, changeFrequency: "weekly" },
  { path: "/fordelar", priority: 0.7, changeFrequency: "monthly" },
  { path: "/installera", priority: 0.7, changeFrequency: "monthly" },
  { path: "/om-oss", priority: 0.6, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/integritetspolicy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/anvandarvillkor", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
  const articles = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
