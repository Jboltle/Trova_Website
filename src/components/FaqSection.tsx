"use client";

import { useState } from "react";
import { SECTION_IDS } from "@/lib/constants";

const faqs = [
  {
    q: "What is TROVA?",
    a: "TROVA is a recovery-first gummy supplement designed to support soreness recovery, muscle recovery, joint comfort, and post-training focus as part of your training routine.",
  },
  {
    q: "Who is it for?",
    a: "People ages 18–30 who train hard and want a convenient, enjoyable recovery habit—without a clinical vibe or bro marketing.",
  },
  {
    q: "When should I take it?",
    a: "Many people take it after training and/or at the same time daily for consistency. Use as directed on the label.",
  },
  {
    q: "Why gummies?",
    a: "Gummies reduce friction: no shaker, less forgettability, and a format designed to support consistency.",
  },
  {
    q: "What are the ingredients?",
    a: "Lion’s Mane, Omega 3, Boswellia Serrata, Taurine, and L-Carnitine L-Tartrate (LCLT). See the Ingredients section for plain-English context.",
  },
  {
    q: "Can I use it daily?",
    a: "If daily use fits your routine, it’s designed to support that habit. Follow the serving guidance on the label.",
  },
  {
    q: "How does it taste?",
    a: "Built to be enjoyable—texture and flavor are part of the product experience.",
  },
  {
    q: "Shipping and launch timing?",
    a: "Launch timing is shared with early access subscribers first. Shipping details will be confirmed at checkout.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={SECTION_IDS.faq} className="scroll-mt-28 border-b border-trova-border">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          FAQ
        </h2>
        <div className="mt-10 divide-y divide-trova-border border-y border-trova-border">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="py-1">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 text-xl font-light text-trova-muted"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-sm leading-relaxed text-trova-muted sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
