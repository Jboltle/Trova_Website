import { SECTION_IDS } from "@/lib/constants";
import { SectionCta } from "@/components/SectionCta";

const columns = [
  {
    title: "After workouts",
    body: "Take it post-session as a clean finish—so recovery support doesn’t depend on kitchen logistics.",
  },
  {
    title: "Daily habit",
    body: "Same time, same cue. Built to be enjoyable so the habit actually repeats.",
  },
  {
    title: "Easy integration",
    body: "Stash it in your gym bag, desk drawer, or car console—wherever you actually live your week.",
  },
];

export function SectionRoutine() {
  return (
    <section
      id={SECTION_IDS.routine}
      className="scroll-mt-28 border-b border-trova-border bg-trova-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-trova-muted">
          Your routine
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          After training. Every day. Zero ceremony.
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {columns.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-trova-border bg-trova-bg p-8"
            >
              <h3 className="font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-trova-muted">
                {c.body}
              </p>
            </div>
          ))}
        </div>
        <SectionCta href="#purchase">Build the habit</SectionCta>
      </div>
    </section>
  );
}
