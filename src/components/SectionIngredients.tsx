"use client";

import { useState } from "react";
import { FdaDisclaimer } from "@/components/FdaDisclaimer";
import { SECTION_IDS } from "@/lib/constants";
import { SectionCta } from "@/components/SectionCta";

const ingredients = [
  {
    name: "Lion’s Mane",
    what: "A functional mushroom people use for daily support.",
    why: "Designed to support post-training focus when your day keeps moving after the gym.",
  },
  {
    name: "Omega 3",
    what: "A familiar fatty acid source people associate with overall wellness.",
    why: "Designed to support your routine with a premium baseline ingredient.",
  },
  {
    name: "Boswellia Serrata",
    what: "A plant resin people choose for comfort-focused routines.",
    why: "Designed to support joint comfort after hard sessions.",
  },
  {
    name: "Taurine",
    what: "An amino acid commonly used in performance-minded products.",
    why: "Designed to support muscle recovery as part of a consistent habit.",
  },
  {
    name: "L-Carnitine L-Tartrate (LCLT)",
    what: "A form of L-carnitine used in training-focused formulas.",
    why: "Designed to help support recovery rhythm when training volume is high.",
  },
];

export function SectionIngredients() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id={SECTION_IDS.ingredients}
      className="scroll-mt-28 border-b border-trova-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-trova-muted">
          The formula
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Five ingredients. One clear job: support recovery.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-trova-muted">
          Plain English. No hype. Built for people who already train and already
          care.
        </p>
        <FdaDisclaimer className="mt-8 max-w-3xl" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ing, i) => {
            const isOpen = open === i;
            return (
              <button
                key={ing.name}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className={`rounded-2xl border text-left transition duration-200 ${
                  isOpen
                    ? "border-trova-text bg-trova-surface shadow-trova-product"
                    : "border-trova-border bg-trova-surface hover:-translate-y-0.5 hover:border-trova-text/20"
                } p-6 sm:p-8`}
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg font-bold">{ing.name}</span>
                <p className="mt-3 text-sm text-trova-muted">{ing.what}</p>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-4 border-t border-trova-border pt-4 text-sm font-medium">
                      {ing.why}
                    </p>
                  </div>
                </div>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-trova-accent">
                  {isOpen ? "Tap to collapse" : "Tap to expand"}
                </span>
              </button>
            );
          })}
        </div>
        <SectionCta href="#purchase">View full label</SectionCta>
      </div>
    </section>
  );
}
