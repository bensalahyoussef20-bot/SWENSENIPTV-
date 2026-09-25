import Link from "next/link";
import { infoSection } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function InfoSection() {
  return (
    <section className="border-t border-border py-20">
      <Reveal className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {infoSection.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            {infoSection.heading}
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-muted">
          {infoSection.paragraphs.map((segments, i) => (
            <p key={i}>
              {segments.map((segment, j) =>
                typeof segment === "string" ? (
                  segment
                ) : (
                  <Link
                    key={j}
                    href={segment.href}
                    className="text-primary hover:underline"
                  >
                    {segment.text}
                  </Link>
                )
              )}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md">
          <h3 className="text-center text-xl font-bold">
            {infoSection.speedHeading}
          </h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Bildkvalitet</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Minsta hastighet</th>
                </tr>
              </thead>
              <tbody>
                {infoSection.speeds.map((row) => (
                  <tr key={row.quality} className="border-t border-border">
                    <th scope="row" className="px-4 py-3 font-semibold">
                      {row.quality}
                    </th>
                    <td className="px-4 py-3 text-muted">{row.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
