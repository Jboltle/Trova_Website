import { SectionCta } from "@/components/SectionCta";

const rows = [
  {
    format: "Powders",
    friction: "Messy prep, cleanup, inconsistent use",
    trova: "Easy, no shaker, no spill",
  },
  {
    format: "Capsules",
    friction: "Easy to forget, feels clinical",
    trova: "Enjoyable, memorable daily cue",
  },
  {
    format: "TROVA",
    friction: "—",
    trova: "Designed to support consistency",
  },
];

export function SectionWhyGummies() {
  return (
    <section className="border-b border-trova-border bg-trova-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-trova-muted">
          Format matters
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Powders and pills don’t fail you. Friction does.
        </h2>
        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-trova-border md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-trova-surface-2 text-xs font-semibold uppercase tracking-wider text-trova-muted">
              <tr>
                <th className="px-6 py-4">Format</th>
                <th className="px-6 py-4">The friction</th>
                <th className="px-6 py-4">TROVA</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.format}
                  className="border-t border-trova-border bg-trova-surface"
                >
                  <td className="px-6 py-5 font-semibold">{r.format}</td>
                  <td className="px-6 py-5 text-trova-muted">{r.friction}</td>
                  <td className="px-6 py-5">{r.trova}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex flex-col gap-4 md:hidden">
          {rows.map((r) => (
            <div
              key={r.format}
              className="rounded-2xl border border-trova-border bg-trova-bg p-5"
            >
              <p className="font-display text-lg font-bold">{r.format}</p>
              <p className="mt-2 text-sm text-trova-muted">
                <span className="font-semibold text-trova-text">Friction: </span>
                {r.friction}
              </p>
              <p className="mt-3 text-sm">
                <span className="font-semibold">TROVA: </span>
                {r.trova}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg font-medium">Same training. Less recovery drama.</p>
        <SectionCta href="#purchase">Compare the habit</SectionCta>
      </div>
    </section>
  );
}
