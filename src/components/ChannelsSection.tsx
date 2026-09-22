import { movieCount, popularChannels } from "@/lib/data";

export default function ChannelsSection() {
  const loopChannels = [...popularChannels, ...popularChannels];
  const movies = Array.from({ length: movieCount }, (_, i) => i + 1);

  return (
    <section id="kanaler" className="border-t border-border bg-surface/40 py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Streama Filmer &amp; Serier i HD &amp; 4K med{" "}
            <span className="text-gradient">IPTV Nordic</span>
          </h2>
          <p className="mt-4 text-muted">
            Med IPTV Nordic får du tillgång till tusentals filmer och serier från
            hela världen – direkt i din TV.
          </p>
        </div>

        <h3 className="mt-14 text-center text-sm font-semibold uppercase tracking-widest text-muted">
          Populära Kanaler
        </h3>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-3 animate-marquee">
            {loopChannels.map((channel, i) => (
              <span
                key={`${channel}-${i}`}
                className="flex shrink-0 items-center rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground/90"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>

        <h3 className="mt-16 text-center text-sm font-semibold uppercase tracking-widest text-muted">
          Filmer &amp; Serier
        </h3>
        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {movies.map((n) => (
            <div
              key={n}
              className="aspect-[2/3] rounded-lg border border-border bg-gradient-to-br from-surface-2 to-surface"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  );
}
