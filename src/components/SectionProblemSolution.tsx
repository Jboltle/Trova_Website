import Link from "next/link";
import { SECTION_IDS } from "@/lib/constants";
import { SectionCta } from "@/components/SectionCta";

export function SectionProblemSolution() {
  return (
    <section
      id={SECTION_IDS.why}
      className="scroll-mt-28 border-b border-trova-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-trova-muted">
          Why recovery breaks down
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Inconsistent recovery isn’t a discipline problem.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-trova-muted">
          Powders are messy and easy to skip. Capsules are forgettable. When
          the format fights you, the habit never sticks.
        </p>
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-2xl border border-trova-border bg-trova-surface p-8 sm:p-10">
            <h3 className="font-display text-xl font-bold">The friction</h3>
            <p className="mt-4 text-trova-muted">
              Recovery is inconsistent because powders are inconvenient and
              pills are easy to overlook.
            </p>
          </div>
          <div className="rounded-2xl border border-trova-border bg-trova-surface-2 p-8 sm:p-10">
            <h3 className="font-display text-xl font-bold">
              TROVA is the easier recovery habit.
            </h3>
            <p className="mt-4 text-trova-muted">
              A simple, enjoyable gummy routine designed to support what hard
              training asks for—so recovery feels less like admin and more like
              part of your day.
            </p>
          </div>
        </div>
        <SectionCta href="#purchase">Make recovery automatic</SectionCta>
        <p className="mt-6">
          <Link
            href={`#${SECTION_IDS.ingredients}`}
            className="text-sm font-semibold text-trova-accent underline-offset-4 hover:underline"
          >
            See the formula
          </Link>
        </p>
      </div>
    </section>
  );
}
