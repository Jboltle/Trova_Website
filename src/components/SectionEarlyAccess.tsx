import { SectionCta } from "@/components/SectionCta";

export function SectionEarlyAccess() {
  return (
    <section className="border-b border-trova-border bg-trova-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-trova-muted">
          Early access
        </p>
        <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Be among the first.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-trova-muted">
          Launching soon. Built for people who train hard—and want recovery
          that finally fits real life.
        </p>
        <ul className="mt-8 space-y-3 text-sm font-medium">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-trova-accent" />
            Early access list gets launch timing first
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-trova-accent" />
            No spam. No fluff updates.
          </li>
        </ul>
        <SectionCta href="#purchase">Join the waitlist</SectionCta>
      </div>
    </section>
  );
}
