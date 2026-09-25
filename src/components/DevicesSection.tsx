import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { deviceFeatures, devices, waLinks } from "@/lib/data";
import Reveal from "@/components/Reveal";
import {
  TvIcon,
  BoxIcon,
  PlayCircleIcon,
  BoltIcon,
  MobileIcon,
  SignalIcon,
  ShieldIcon,
} from "@/components/icons";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  tv: TvIcon,
  apple: BoxIcon,
  android: PlayCircleIcon,
  fire: BoltIcon,
  mag: BoxIcon,
  mobile: MobileIcon,
  bolt: BoltIcon,
  signal: SignalIcon,
  shield: ShieldIcon,
};

export default function DevicesSection({
  headingLevel = 2,
}: {
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="installera" className="border-t border-border py-20">
      <Reveal className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/40 lg:order-1">
            <Image
              src="/images/family-watching-tv.jpg"
              alt="Familj som tittar på IPTV i 4K tillsammans i soffan"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Sweden IPTV — Alla enheter
            </span>
            <Heading className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Se IPTV i HD &amp; 4K på Smart TV, mobil &amp; surfplatta
            </Heading>
            <p className="mt-4 text-muted">
              Titta på Sweden IPTV hemma eller på språng – enkelt på Smart TV,
              Apple TV, Android TV, Fire TV, MAG Box, mobil och surfplatta.
              Följ vår{" "}
              <Link href="/installera" className="text-primary hover:underline">
                installationsguide för IPTV
              </Link>{" "}
              för din enhet.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              {deviceFeatures.map((f) => {
                const Icon = iconMap[f.icon];
                return (
                  <div
                    key={f.title}
                    className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium"
                  >
                    <Icon className="h-4 w-4 text-primary" aria-hidden />
                    {f.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map((d) => {
            const Icon = iconMap[d.icon];
            return (
              <div
                key={d.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted">{d.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={waLinks.installHelp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-surface px-7 py-3 text-sm font-semibold transition-colors hover:border-primary/60"
          >
            Få hjälp med installation
          </a>
          <a
            href={waLinks.freeTrial}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            Starta gratis test
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted">
          Kompatibel med Smart TV, Apple TV, Android TV, Firestick, MAG Box och
          mobil. Enkel installation på alla enheter.
        </p>
      </Reveal>
    </section>
  );
}
