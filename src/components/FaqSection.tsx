"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";
import { cn } from "@/lib/cn";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border bg-surface/40 py-20">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Vanliga frågor
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Har du frågor om IPTV Nordic? Vi svarar!
          </h2>
          <p className="mt-4 text-muted">
            Få snabba svar på vanliga frågor om IPTV Nordic, installation,
            kompatibla enheter och gratis test.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold sm:text-base">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 text-lg text-muted transition-transform",
                      isOpen && "rotate-45 text-primary"
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm text-muted">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted">
          IPTV Nordic är en premiumstreamingtjänst som levererar TV-kanaler,
          filmer och serier via internet – utan parabolantenn eller kabel-TV. Du
          kan läsa mer om tekniken bakom IPTV på{" "}
          <a
            href="https://sv.wikipedia.org/wiki/IPTV"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary/60 underline-offset-2 hover:text-foreground"
          >
            Wikipedia
          </a>
          .
        </p>
      </div>
    </section>
  );
}
