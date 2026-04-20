"use client";

import { useMemo, useState } from "react";
import { FdaDisclaimer } from "@/components/FdaDisclaimer";
import { SECTION_IDS } from "@/lib/constants";

type PurchaseMode = "cart" | "waitlist";

const quantities = [
  { id: "1", label: "1 jar", price: 44 },
  { id: "2", label: "2 jars", price: 82 },
  { id: "3", label: "3 jars", price: 118 },
];

export function ProductPurchaseModule() {
  const [mode, setMode] = useState<PurchaseMode>("cart");
  const [qtyId, setQtyId] = useState(quantities[0].id);
  const selected = useMemo(
    () => quantities.find((q) => q.id === qtyId) ?? quantities[0],
    [qtyId],
  );

  return (
    <section
      id={SECTION_IDS.purchase}
      className="scroll-mt-28 border-b border-trova-border bg-trova-bg"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div
            className="relative aspect-square max-w-md overflow-hidden rounded-3xl border border-trova-border bg-trova-surface shadow-trova-product lg:max-w-none"
            aria-label="Product pack placeholder"
          >
            <div className="absolute inset-8 rounded-2xl bg-gradient-to-b from-trova-surface-2 to-trova-bg" />
            <div className="absolute inset-x-12 top-12 h-3 rounded-full bg-trova-accent" />
            <p className="absolute bottom-6 left-0 right-0 text-center text-xs text-trova-muted">
              Pack shot + label (ecommerce)
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              TROVA Recovery Gummies
            </h2>
            <p className="mt-4 text-lg text-trova-muted">
              Recovery-first gummies designed to support training
              consistency—without powders or pill fatigue.
            </p>
            <div className="mt-8 inline-flex rounded-full border border-trova-border bg-trova-surface p-1">
              <button
                type="button"
                onClick={() => setMode("cart")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  mode === "cart"
                    ? "bg-trova-text text-trova-inverse-fg"
                    : "text-trova-muted hover:text-trova-text"
                }`}
              >
                Add to cart
              </button>
              <button
                type="button"
                onClick={() => setMode("waitlist")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  mode === "waitlist"
                    ? "bg-trova-text text-trova-inverse-fg"
                    : "text-trova-muted hover:text-trova-text"
                }`}
              >
                Join waitlist
              </button>
            </div>
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-trova-muted">
                Choose quantity
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {quantities.map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setQtyId(q.id)}
                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                      qtyId === q.id
                        ? "border-trova-text bg-trova-surface-2"
                        : "border-trova-border bg-trova-surface hover:border-trova-text/30"
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-8 font-display text-3xl font-extrabold">
              ${selected.price}
              <span className="text-base font-medium text-trova-muted">
                {" "}
                / jar <span className="text-sm">(placeholder)</span>
              </span>
            </p>
            <button
              type="button"
              className="mt-8 w-full rounded-full bg-trova-accent py-4 text-sm font-semibold text-white transition hover:opacity-90 sm:max-w-xs"
            >
              {mode === "cart" ? "Add to cart" : "Join waitlist"}
            </button>
            <p className="mt-4 text-sm text-trova-muted">
              Ships to [regions]. Rates calculated at checkout.
            </p>
            <p className="mt-2 text-sm text-trova-muted">
              Satisfaction support within [X] days of delivery. Details at
              checkout.
            </p>
            <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-trova-muted">
              <span>Gym-bag friendly</span>
              <span>·</span>
              <span>Premium ingredients</span>
              <span>·</span>
              <span>Simple daily habit</span>
            </p>
            <FdaDisclaimer className="mt-8 max-w-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
