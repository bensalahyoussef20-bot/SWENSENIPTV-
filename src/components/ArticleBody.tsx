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
          <h2 key={i} id={block.id} className="mt-14 scroll-mt-24 text-2xl font-bold">
            {block.text}
          </h2>
        );
      case "h3":
        return (
          <h3 key={i} id={block.id} className="mt-8 scroll-mt-24 font-semibold">
            {block.text}
          </h3>
        );
      case "p":
        return (
          <p key={i} className="mt-4 text-muted">
            <Segments segments={block.content} />
          </p>
        );
      case "ul":
      case "ol": {
        const List = block.type;
        return (
          <List
            key={i}
            className={`mt-4 space-y-2 pl-5 text-muted ${
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
    }
  });
}
