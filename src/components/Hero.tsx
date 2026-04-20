import Link from "next/link";
import { SECTION_IDS } from "@/lib/constants";

const chips = [
  "Supports joint comfort",
  "Designed to support tightness recovery",
  "Supports soreness recovery",
  "Supports muscle recovery",
  "Supports post-training focus",
];

export function Hero() {
  return (
    <section className="border-b border-trova-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
        <div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight">
            Recovery that fits your training life.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-trova-muted">
            TROVA is a recovery-first gummy designed to support soreness
            recovery, muscle recovery, and post-training focus—without powders
            or a pile of pills.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-trova-border bg-trova-surface px-3 py-1.5 text-xs font-medium sm:text-sm"
              >
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#purchase"
              className="inline-flex rounded-full bg-trova-accent px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Shop TROVA
            </Link>
            <Link
              href={`#${SECTION_IDS.ingredients}`}
              className="inline-flex rounded-full border border-trova-text px-8 py-3.5 text-sm font-semibold transition hover:bg-trova-surface-2"
            >
              See the formula
            </Link>
          </div>
          <p className="mt-6 text-sm text-trova-muted">
            Premium ingredients. Simple habit. Gym-bag friendly.
          </p>
        </div>
        <HeroProductVisual />
      </div>
    </section>
  );
}

function HeroProductVisual() {
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none"
      aria-label="Product visual placeholder"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-trova-surface-2 to-trova-surface shadow-trova-product" />
      <div className="absolute left-1/2 top-1/2 w-[55%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative aspect-[3/4] rounded-2xl bg-trova-surface shadow-trova-product ring-1 ring-trova-border">
          <div className="absolute inset-x-6 top-8 h-2 rounded-full bg-trova-accent" />
          <div className="absolute inset-x-8 top-16 bottom-0 rounded-t-2xl bg-trova-text/5" />
          <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-2">
            <span className="h-14 w-14 rounded-2xl bg-trova-accent/90 shadow-md" />
            <span className="h-14 w-14 rounded-2xl bg-trova-accent/70 shadow-md" />
            <span className="h-14 w-14 rounded-2xl bg-trova-accent/50 shadow-md" />
          </div>
        </div>
      </div>
      <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-trova-muted">
        Replace with premium pack shot (1600×1200)
      </p>
    </div>
  );
}
