import type { TocItem } from "@/lib/blog";

function TocList({ items }: { items: TocItem[] }) {
  return (
    <ol className="space-y-0.5 text-sm">
      {items.map((item) => (
        <li key={item.id} className={item.level === 3 ? "pl-4" : undefined}>
          <a
            href={`#${item.id}`}
            className={`block rounded-lg px-2 py-1.5 leading-snug transition-colors hover:bg-surface-2 hover:text-foreground ${
              item.level === 3 ? "text-xs text-muted" : "text-muted"
            }`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function TableOfContents({
  items,
  collapsible = false,
  className = "",
}: {
  items: TocItem[];
  collapsible?: boolean;
  className?: string;
}) {
  if (items.length === 0) return null;

  if (collapsible) {
    return (
      <details className={`group rounded-2xl border border-border bg-surface ${className}`}>
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
          <span>Innehåll</span>
          <span className="flex items-center gap-2 text-xs font-normal text-muted">
            {items.filter((i) => i.level === 2).length} avsnitt
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
              className="h-4 w-4 transition-transform group-open:rotate-180"
            >
              <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" />
            </svg>
          </span>
        </summary>
        <nav aria-label="Innehåll" className="border-t border-border px-3 py-3">
          <TocList items={items} />
        </nav>
      </details>
    );
  }

  return (
    <nav aria-label="Innehåll" className={`rounded-2xl border border-border bg-surface p-4 ${className}`}>
      <p className="px-2 text-xs font-semibold uppercase tracking-widest text-primary">
        Innehåll
      </p>
      <div className="mt-3 max-h-[calc(100vh-24rem)] overflow-y-auto pr-1">
        <TocList items={items} />
      </div>
    </nav>
  );
}
