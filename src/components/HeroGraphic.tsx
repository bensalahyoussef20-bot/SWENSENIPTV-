import { PlayCircleIcon, SignalIcon } from "@/components/icons";

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto hidden w-full max-w-md lg:block">
      <div className="absolute -inset-8 rounded-[3rem] bg-primary/20 blur-3xl" aria-hidden />
      <div className="relative rounded-3xl border border-border bg-surface/90 p-4 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center gap-1.5 px-1 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-accent">
            <SignalIcon className="h-3 w-3" /> LIVE 4K
          </span>
        </div>

        <div className="flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-surface-2 to-background">
          <PlayCircleIcon className="h-16 w-16 text-primary" />
        </div>

        <div className="mt-4 space-y-2">
          {[100, 80, 90].map((w, i) => (
            <div
              key={i}
              className="h-3 rounded-full bg-surface-2"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-surface-2"
              aria-hidden
            />
          ))}
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-xl">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
          4K
        </span>
        <span className="text-xs font-semibold text-foreground/85">
          Kristallklar bild
        </span>
      </div>
    </div>
  );
}
