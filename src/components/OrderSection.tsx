import Link from "next/link";
import { orderSteps, waLinks } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function OrderSection() {
  return (
    <section className="border-t border-border bg-surface/40 py-20">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Beställning
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Så beställer du IPTV Sverige
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {orderSteps.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="mt-4 text-sm font-semibold">
                {step.href ? (
                  <Link href={step.href} className="hover:text-primary">
                    {step.title}
                  </Link>
                ) : (
                  step.title
                )}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <a
            href={waLinks.buyNow}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            Kontakta oss via WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
