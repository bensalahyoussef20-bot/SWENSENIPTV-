import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

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
  { path: "/kontakt", priority: 0.6, changeFrequency: "monthly" },
  { path: "/integritetspolicy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/anvandarvillkor", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
