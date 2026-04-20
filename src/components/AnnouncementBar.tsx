export function AnnouncementBar() {
  return (
    <div className="bg-trova-inverse text-trova-inverse-fg text-center text-xs font-medium tracking-wide sm:text-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2.5">
        <span>Launching soon · Built for people who train hard</span>
        <a
          href="#purchase"
          className="text-trova-inverse-fg/90 underline decoration-trova-accent underline-offset-4 transition hover:text-white"
        >
          Join waitlist
        </a>
      </div>
    </div>
  );
}
