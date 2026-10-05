import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

// A page's `openGraph` replaces the root layout's `openGraph` entirely (it is
// not merged), so pages that set their own must repeat the shared site fields.
export function pageOpenGraph(
  path: string,
  title: string,
  description: string
): NonNullable<Metadata["openGraph"]> {
  return {
    title: `${title} | IPTV Sverige`,
    description,
    url: path,
    images: "/opengraph-image",
    siteName: siteConfig.name,
    locale: "sv_SE",
    type: "website",
  };
}
