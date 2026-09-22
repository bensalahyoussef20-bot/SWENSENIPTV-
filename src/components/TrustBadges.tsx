import { trustBadges } from "@/lib/data";

const iconMap: Record<string, string> = {
  lock: "🔒",
  "no-contract": "📄",
  clock: "⚡",
  headset: "🎧",
};

export default function TrustBadges() {
  return (
    <div className="border-y border-border bg-surface/60">
      <div className="container-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
        {trustBadges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 text-xs font-medium text-muted sm:text-sm"
          >
            <span aria-hidden>{iconMap[badge.icon]}</span>
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
