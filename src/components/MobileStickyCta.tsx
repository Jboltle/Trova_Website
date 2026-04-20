"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/constants";

export function MobileStickyCta() {
  const [purchaseVisible, setPurchaseVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(SECTION_IDS.purchase);
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setPurchaseVisible(e?.isIntersecting ?? false),
      { rootMargin: "-20% 0px -20% 0px", threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (purchaseVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-trova-border bg-trova-surface/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          href="#purchase"
          className="flex-1 rounded-full border border-trova-text py-3 text-center text-sm font-semibold transition hover:bg-trova-surface-2"
        >
          Waitlist
        </Link>
        <Link
          href="#purchase"
          className="flex-[1.2] rounded-full bg-trova-accent py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
        >
          Get TROVA
        </Link>
      </div>
    </div>
  );
}
