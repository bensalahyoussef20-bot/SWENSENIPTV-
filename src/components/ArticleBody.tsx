import Image from "next/image";
import Link from "next/link";
import type { InfoSegment } from "@/lib/data";
import type { ArticleBlock } from "@/lib/blog";

function Segments({ segments }: { segments: InfoSegment[] }) {
  return segments.map((segment, i) =>
    typeof segment === "string" ? (
      segment
    ) : (
      <Link key={i} href={segment.href} className="text-primary hover:underline">
        {segment.text}
      </Link>
    )
  );
}

export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "h2":
        return (
          <h2 key={i} id={block.id} className="mt-14 scroll-mt-24 text-2xl font-bold leading-tight sm:text-[1.7rem]">
            {block.text}
          </h2>
        );
      case "h3":
        return (
          <h3 key={i} id={block.id} className="mt-9 scroll-mt-24 text-lg font-semibold leading-snug">
            {block.text}
          </h3>
        );
      case "p":
        return (
          <p key={i} className="mt-5 leading-relaxed text-muted">
            <Segments segments={block.content} />
          </p>
        );
      case "ul":
      case "ol": {
        const List = block.type;
        return (
          <List
            key={i}
            className={`mt-5 space-y-2.5 pl-6 leading-relaxed text-muted marker:text-primary ${
              block.type === "ul" ? "list-disc" : "list-decimal"
            }`}
          >
            {block.items.map((item, j) => (
              <li key={j}>
                <Segments segments={item} />
              </li>
            ))}
          </List>
        );
      }
      case "image":
        return (
          <Image
            key={i}
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            sizes="(min-width: 1280px) 800px, (min-width: 1024px) 66vw, 100vw"
            className="mt-10 h-auto w-full rounded-2xl border border-border"
          />
        );
      case "table":
        return (
          <div key={i} className="mt-6 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface">
                <tr>
                  {block.head.map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j} className="border-t border-border">
                    {row.map((cell, k) =>
                      k === 0 ? (
                        <th key={k} scope="row" className="px-4 py-3 font-semibold">
                          {cell}
                        </th>
                      ) : (
                        <td key={k} className="px-4 py-3 text-muted">
                          {cell}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  });
}
