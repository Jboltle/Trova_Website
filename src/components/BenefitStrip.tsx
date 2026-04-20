const items = [
  "Recovery-first formula",
  "Convenient gummy format",
  "Easy daily habit",
  "Gym-bag friendly",
  "Premium ingredients",
];

export function BenefitStrip() {
  return (
    <section className="border-b border-trova-border bg-trova-surface">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {items.map((t) => (
            <li
              key={t}
              className="flex items-center gap-2 text-sm font-semibold tracking-tight"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-trova-accent"
                aria-hidden
              />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
