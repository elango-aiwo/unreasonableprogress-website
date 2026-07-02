import Link from "next/link";
import { LogoStacked } from "@/components/brand/Logo";
import { footerNav, primaryNav } from "@/content/data/nav";

/** Ink-ground footer — SPEC §5.2. No social icons at launch; nothing to dilute. */
export function Footer() {
  return (
    <footer className="ink-ground">
      <div className="container-outer py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <LogoStacked onInk size={34} />
            <p className="font-voice mt-6 text-quote text-paper measure">
              Add decades. Multiply everything.
            </p>
            <p className="mt-6 font-mono text-[0.8125rem] text-g-inv-70">
              Chennai · Dubai · Singapore
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="flex flex-col gap-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-draw font-text text-[0.9375rem] text-g-inv-70">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">The Circle &amp; Legal</p>
            <ul className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-draw font-text text-[0.9375rem] text-g-inv-70">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-16 pt-8">
          <p className="font-mono text-[0.75rem] leading-relaxed text-g-inv-70">
            No advertising trackers operate on this site.
          </p>
          <p className="mt-3 font-mono text-[0.75rem] text-g-inv-70">
            © {new Date().getFullYear()} Unreasonable Progress. Principal Compounding™, JoySpan™,
            The Siva Doctrine™.
          </p>
        </div>
      </div>
    </footer>
  );
}
