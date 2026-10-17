import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import ArticleBody from "@/components/ArticleBody";
import ArticleSidebar from "@/components/ArticleSidebar";
import TableOfContents from "@/components/TableOfContents";
import { ClockIcon } from "@/components/icons";
import { schemaIds, siteConfig } from "@/lib/data";
import {
  formatDate,
  getAllPosts,
  getPost,
  getToc,
  posts,
  withHeadingIds,
} from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  const title = post.metaTitle ?? post.title;
  const images = post.image
    ? [{ url: post.image.src, alt: post.image.alt }]
    : "/opengraph-image";

  return {
    title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.description,
      url,
      images,
      siteName: siteConfig.name,
      locale: "sv_SE",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [siteConfig.name],
    },
  };
}

export default async function Page(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${siteConfig.url}/blog/${post.slug}`;
  const related = post.related
    .map((relatedSlug) => getPost(relatedSlug))
    .filter((p) => p !== undefined);
  const recent = getAllPosts()
    .filter((p) => p.slug !== post.slug && !post.related.includes(p.slug))
    .slice(0, 3);

  // The featured image is shown above the article, so skip its inline copy.
  const blocks = withHeadingIds(
    post.body.filter((b) => !(b.type === "image" && b.src === post.image?.src))
  );
  const toc = getToc(blocks);
  // Opening paragraphs are shown as the lead, between the title and the image.
  const leadCount = Math.max(0, blocks.findIndex((b) => b.type !== "p"));
  const lead = blocks.slice(0, leadCount);
  const rest = blocks.slice(leadCount);

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
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "sv-SE",
    url,
    mainEntityOfPage: url,
    image: post.image
      ? `${siteConfig.url}${post.image.src}`
      : `${siteConfig.url}/opengraph-image`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": schemaIds.organization,
      name: siteConfig.name,
    },
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <JsonLd data={breadcrumbJsonLd} />
        <JsonLd data={blogPostingJsonLd} />
        <article className="pb-16 pt-10 sm:pt-12">
          <div className="container-shell">
            <nav
              aria-label="Brödsmulor"
              className="mx-auto max-w-3xl text-xs text-muted lg:max-w-none"
            >
              <Link href="/" className="hover:text-foreground">Hem</Link>
              {" / "}
              <Link href="/blog" className="hover:text-foreground">Blogg</Link>
            </nav>

            <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-16">
              <div className="mx-auto w-full min-w-0 max-w-3xl lg:max-w-none">
                <header>
                  <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem]">
                    {post.title}
                  </h1>
                  <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                    <span>
                      Publicerad{" "}
                      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    </span>
                    <span>
                      Senast uppdaterad{" "}
                      <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon className="h-3.5 w-3.5 text-primary" />
                      {post.readingMinutes} min läsning
                    </span>
                  </p>
                </header>

                <div className="mt-6 text-[1.05rem] [&>p]:text-foreground/85">
                  <ArticleBody blocks={lead} />
                </div>

                {post.image && (
                  <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-surface-2">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      priority
                      sizes="(min-width: 1280px) 800px, (min-width: 1024px) 66vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <TableOfContents items={toc} collapsible className="mt-8 lg:hidden" />

                <ArticleBody blocks={rest} />

                <section className="mt-16 border-t border-border pt-10">
                  <h2 className="text-xl font-bold">Relaterade artiklar</h2>
                  {related.length > 0 ? (
                    <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                      {related.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/blog/${p.slug}`}
                            className="group block h-full overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/50"
                          >
                            {p.image && (
                              <span className="relative block aspect-[16/9] bg-surface-2">
                                <Image
                                  src={p.image.src}
                                  alt=""
                                  fill
                                  sizes="(min-width: 640px) 400px, 100vw"
                                  className="object-cover"
                                />
                              </span>
                            )}
                            <span className="block p-5">
                              <span className="block font-semibold leading-snug group-hover:text-primary">
                                {p.title}
                              </span>
                              <span className="mt-2 block text-sm text-muted">{p.excerpt}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-muted">
                      Fler guider är på väg.{" "}
                      <Link href="/blog" className="text-primary hover:underline">
                        Se alla artiklar
                      </Link>
                      .
                    </p>
                  )}
                </section>
              </div>

              <ArticleSidebar toc={toc} recent={recent} />
            </div>
          </div>
        </article>

        <CtaSection headingLevel={2} />
      </main>
      <Footer />
    </>
  );
}
