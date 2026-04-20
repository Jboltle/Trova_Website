import type { ReactNode } from "react";
import Link from "next/link";

interface SectionCtaProps {
  href: string;
  children: ReactNode;
}

export function SectionCta({ href, children }: SectionCtaProps) {
  return (
    <div className="mt-10">
      <Link
        href={href}
        className="inline-flex rounded-full bg-trova-accent px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
      >
        {children}
      </Link>
    </div>
  );
}
