import { benefits } from "@/lib/data";
import Reveal from "@/components/Reveal";

const iconMap: Record<string, string> = {
  layers: "📡",
  signal: "📶",
  sparkle: "✨",
  devices: "🖥️",
  bolt: "⚡",
  "shield-check": "🛡️",
};

export default function BenefitsSection() {
  return (
    <section id="fordelar" className="border-t border-border bg-surface/40 py-20">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Varför IPTV Nordic
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Streama Bättre med <span className="text-gradient">IPTV Nordic</span>
          </h2>
          <p className="mt-4 text-muted">
            Allt du behöver för stabil, högkvalitativ streaming – utan
            parabolantenn eller krångliga avtal.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-xl">
                {iconMap[b.icon]}
              </div>
              <h3 className="mt-4 font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted">{b.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
