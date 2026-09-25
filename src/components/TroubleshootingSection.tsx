import Link from "next/link";
import { homeTroubleshooting } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function TroubleshootingSection() {
  return (
    <section className="border-t border-border py-20">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Felsökning
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Vanliga problem och lösningar
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {homeTroubleshooting.map((item) => (
            <div
              key={item.problem}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-semibold">
                {item.href ? (
                  <Link href={item.href} className="text-primary hover:underline">
                    {item.problem}
                  </Link>
                ) : (
                  item.problem
                )}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.solution}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Fler lösningar och steg-för-steg-instruktioner finns i vår{" "}
          <Link href="/installera" className="text-primary hover:underline">
            installationsguide
          </Link>
          .
        </p>
      </Reveal>
    </section>
  );
}
