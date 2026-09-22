import { waLinks } from "@/lib/data";
import HeroGraphic from "@/components/HeroGraphic";

export default function Hero() {
  return (
    <section
      id="hem"
      className="gradient-hero relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
            Sveriges #1 IPTV-Tjänst
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Upplev <span className="text-gradient">IPTV Nordic</span>
            <br />i Kristallklar 4K
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            IPTV Nordic ger dig tusentals kanaler i HD och 4K direkt i TV:n.
            Perfekt för hela familjen – enkel installation och stabil
            streaming. Starta ditt abonnemang idag!
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={waLinks.freeTrial}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              Gratis Testperiod
            </a>
            <a
              href={waLinks.buyNow}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/60"
            >
              Köp Nu
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-muted">
            <span className="text-accent tracking-widest">★★★★★</span>
            <span>Betyg 4.9</span>
            <span aria-hidden>·</span>
            <span>50 000+ nöjda kunder</span>
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}
