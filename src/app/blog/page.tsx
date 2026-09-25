import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { TvIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";
import { formatDate, getAllPosts } from "@/lib/blog";

const title = "Blogg om IPTV – guider och tips";
const description =
  "Guider och tips om IPTV i Sverige: hur IPTV fungerar, vad du behöver, installation på olika enheter och hur du får en stabil bild.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title,
    description,
    url: "/blog",
    images: "/opengraph-image",
    siteName: siteConfig.name,
    locale: "sv_SE",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blogg",
      item: `${siteConfig.url}/blog`,
    },
  ],
};

export default function Page() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <JsonLd data={breadcrumbJsonLd} />
        <section className="py-16">
          <div className="container-shell">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Blogg
            </span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Guider och tips om IPTV
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              Här samlar vi guider om IPTV i Sverige – hur tekniken fungerar,
              vad du behöver och hur du får ut det mesta av din tjänst.
            </p>
          </div>

          <div className="container-shell mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-primary/50"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  tabIndex={-1}
                  aria-hidden
                  className="relative block aspect-[16/9] overflow-hidden rounded-xl bg-surface-2"
                >
                  {post.image ? (
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center">
                      <TvIcon className="h-10 w-10 text-primary" />
                    </span>
                  )}
                </Link>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <p className="text-xs text-muted">
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>{" "}
                    · {post.readingMinutes} min läsning
                  </p>
                  <h2 className="mt-2 text-lg font-bold">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Läs artikeln →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
