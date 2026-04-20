import { SECTION_IDS } from "@/lib/constants";
import { SectionCta } from "@/components/SectionCta";

const placeholders = [
  { label: "Pour batch", ratio: "aspect-[4/3]" },
  { label: "Mold trays", ratio: "aspect-square" },
  { label: "Label application", ratio: "aspect-[3/4]" },
];

export function SectionTrust() {
  return (
    <section
      id={SECTION_IDS.process}
      className="scroll-mt-28 border-b border-trova-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-trova-muted">
          How it’s made
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Crafted with care, not noise.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-trova-muted">
          We obsess over texture, taste, and consistency—because a premium
          product should feel premium in your hand and on your tongue.
          Small-batch discipline. Clean presentation. No bro marketing theater.
        </p>
        <blockquote className="mt-10 border-l-4 border-trova-accent pl-6 text-lg font-medium leading-relaxed">
          “We built TROVA for athletes who already do the hard part. Recovery
          should be the easy part.”
          <footer className="mt-3 text-sm font-normal text-trova-muted">
            — [Name], Founder
          </footer>
        </blockquote>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {placeholders.map((p) => (
            <figure
              key={p.label}
              className={`overflow-hidden rounded-2xl border border-trova-border bg-trova-surface-2 ${p.ratio}`}
            >
              <div className="flex h-full min-h-[140px] flex-col items-center justify-center p-6 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-trova-muted">
                  {p.label}
                </span>
                <span className="mt-2 text-[10px] text-trova-muted">
                  Replace with real process photo
                </span>
              </div>
            </figure>
          ))}
        </div>
        <SectionCta href="#purchase">See quality standards</SectionCta>
      </div>
    </section>
  );
}
