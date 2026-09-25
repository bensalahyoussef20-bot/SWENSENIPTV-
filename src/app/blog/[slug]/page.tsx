import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import ArticleBody from "@/components/ArticleBody";
import { siteConfig } from "@/lib/data";
import { formatDate, getPost, posts } from "@/lib/blog";

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

  return {
    title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.description,
      url,
      images: "/opengraph-image",
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
    image: `${siteConfig.url}/opengraph-image`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon` },
    },
  };

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <JsonLd data={breadcrumbJsonLd} />
        <JsonLd data={blogPostingJsonLd} />
        <article className="py-16">
          <div className="container-shell max-w-3xl">
            <nav aria-label="Brödsmulor" className="text-xs text-muted">
              <Link href="/" className="hover:text-foreground">Hem</Link>
              {" / "}
              <Link href="/blog" className="hover:text-foreground">Blogg</Link>
            </nav>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-xs text-muted">
              Publicerad{" "}
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              {" · "}
              Senast uppdaterad{" "}
              <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
              {" · "}
              {post.readingMinutes} min läsning
            </p>

            <ArticleBody blocks={post.body} />

            <aside className="mt-16 border-t border-border pt-10">
              <h2 className="text-xl font-bold">Relaterade artiklar</h2>
              {related.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="text-primary hover:underline">
                        {p.title}
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
            </aside>
          </div>
        </article>

        <CtaSection headingLevel={2} />
      </main>
      <Footer />
    </>
  );
}
