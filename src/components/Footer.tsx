import Link from "next/link";
import { FdaDisclaimer } from "@/components/FdaDisclaimer";
import { SECTION_IDS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-trova-border bg-trova-bg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-extrabold">TROVA</p>
            <p className="mt-3 text-sm text-trova-muted">
              Recovery-first. Simple. Premium. Habit-forming.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-trova-muted">
              Shop
            </p>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>
                <Link href="#purchase" className="hover:text-trova-accent">
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href={`#${SECTION_IDS.ingredients}`}
                  className="hover:text-trova-accent"
                >
                  Ingredients
                </Link>
              </li>
              <li>
                <Link
                  href={`#${SECTION_IDS.faq}`}
                  className="hover:text-trova-accent"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-trova-muted">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>
                <Link
                  href={`#${SECTION_IDS.process}`}
                  className="hover:text-trova-accent"
                >
                  Our process
                </Link>
              </li>
              <li>
                <span className="text-trova-muted">Contact</span>
              </li>
              <li>
                <span className="text-trova-muted">Privacy</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-trova-muted">
              Follow
            </p>
            <ul className="mt-4 space-y-2 text-sm font-medium text-trova-muted">
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
        <FdaDisclaimer className="mt-12 max-w-3xl border-t border-trova-border pt-10" />
        <p className="mt-8 text-xs text-trova-muted">
          © {new Date().getFullYear()} TROVA · Terms · Privacy · Do not sell my
          info
        </p>
      </div>
    </footer>
  );
}
