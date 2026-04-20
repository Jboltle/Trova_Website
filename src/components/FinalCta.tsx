import Link from "next/link";

export function FinalCta() {
  return (
    <section className="bg-trova-inverse text-trova-inverse-fg">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-tight tracking-tight">
          Hard training deserves easier recovery.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-trova-inverse-fg/75">
          TROVA turns recovery into a simple, premium habit—so you can keep
          showing up.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="#purchase"
            className="inline-flex rounded-full bg-trova-accent px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Get TROVA
          </Link>
          <Link
            href="#purchase"
            className="inline-flex rounded-full border border-trova-inverse-fg/30 px-8 py-3.5 text-sm font-semibold text-trova-inverse-fg transition hover:bg-white/5"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}
