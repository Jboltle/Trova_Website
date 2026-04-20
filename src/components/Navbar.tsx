"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/constants";

const links = [
  { href: `#${SECTION_IDS.why}`, label: "Why TROVA" },
  { href: `#${SECTION_IDS.ingredients}`, label: "Ingredients" },
  { href: `#${SECTION_IDS.routine}`, label: "Routine" },
  { href: `#${SECTION_IDS.process}`, label: "Process" },
  { href: `#${SECTION_IDS.faq}`, label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-trova-border bg-trova-surface/95 backdrop-blur-md"
          : "border-transparent bg-trova-bg/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tight"
        >
          TROVA
        </Link>
        <ul className="hidden items-center gap-8 text-sm font-medium text-trova-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="transition hover:text-trova-text"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#purchase"
            className="hidden text-sm font-semibold text-trova-muted transition hover:text-trova-text sm:inline"
          >
            Waitlist
          </Link>
          <Link
            href="#purchase"
            className="rounded-full bg-trova-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:px-5"
          >
            Get TROVA
          </Link>
        </div>
      </nav>
    </header>
  );
}
