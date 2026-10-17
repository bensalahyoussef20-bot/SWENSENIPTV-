import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import { TvIcon } from "@/components/icons";
import { formatDate, type Post, type TocItem } from "@/lib/blog";

function PostRow({ post }: { post: Post }) {
  return (
    <li>
      <Link href={`/blog/${post.slug}`} className="group flex gap-3">
        <span className="relative block aspect-[16/9] w-24 shrink-0 overflow-hidden rounded-lg border border-border bg-surface-2">
          {post.image ? (
            <Image
              src={post.image.src}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          ) : (
            <span className="flex h-full items-center justify-center">
              <TvIcon className="h-5 w-5 text-primary" />
            </span>
          )}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold leading-snug group-hover:text-primary">
            {post.title}
          </span>
          <span className="mt-1 block text-xs text-muted">
            {formatDate(post.publishedAt)}
          </span>
        </span>
      </Link>
    </li>
  );
}

function Box({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`rounded-2xl border border-border bg-surface p-5 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{title}</p>
      {children}
    </section>
  );
}

export default function ArticleSidebar({
  toc,
  recent,
}: {
  toc: TocItem[];
  recent: Post[];
}) {
  return (
    <aside aria-label="Mer läsning" className="mx-auto w-full min-w-0 max-w-3xl space-y-6 lg:max-w-none">
      {recent.length > 0 && (
        <Box title="Senaste artiklarna">
          <ul className="mt-4 space-y-4">
            {recent.map((p) => (
              <PostRow key={p.slug} post={p} />
            ))}
          </ul>
        </Box>
      )}

      <div className="space-y-6 lg:sticky lg:top-24">
        <TableOfContents items={toc} className="hidden lg:block" />

        <section className="rounded-2xl border border-primary/40 bg-gradient-to-b from-primary/15 to-surface p-5">
          <p className="font-semibold">Kom igång med IPTV</p>
          <p className="mt-2 text-sm text-muted">
            Välj ett abonnemang som passar dig, eller börja med en gratis testperiod.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/priser"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Se priser
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border border-border px-5 py-2 text-sm font-semibold transition-colors hover:border-primary/60"
            >
              Kontakta oss
            </Link>
          </div>
        </section>
      </div>
    </aside>
  );
}
