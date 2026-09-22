import Image from "next/image";
import { waLinks } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CtaSection({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="kontakt" className="border-t border-border py-20">
      <Reveal className="container-shell">
        <div className="relative overflow-hidden rounded-3xl border border-border px-6 py-14 text-center sm:px-14">
          <Image
            src="/images/cozy-living-room.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/70" />

          <div className="relative">
            <Heading className="text-3xl font-extrabold sm:text-4xl">
              Redo att börja med IPTV Nordic?
            </Heading>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Starta din gratis test idag och upplev skillnaden med nordic
              iptv — stabil streaming, HD och 4K kvalitet för hela familjen.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={waLinks.freeTrial}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
              >
                Starta gratis test
              </a>
            </div>
            <p className="mt-4 text-xs text-muted">
              Inga kontrakt • Direkt aktivering • Support 24/7
            </p>

            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-surface/70 px-6 py-6">
              <h3 className="font-semibold">Behöver du hjälp att komma igång?</h3>
              <p className="mt-2 text-sm text-muted">
                Kontakta oss så hjälper vi dig med IPTV Nordic direkt.
              </p>
              <a
                href={waLinks.support}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full border border-border px-6 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60"
              >
                Kontakta support
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
