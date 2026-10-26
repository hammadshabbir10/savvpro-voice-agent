import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="font-semibold text-ink-900">Brightside Voice</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500">
            A phone receptionist for a dental clinic. Speech in and out runs in your browser; every decision is made by
            plain rules you can read and test.
          </p>
        </div>
        <div>
          <p className="eyebrow">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li><Link href="/call" className="hover:text-ink-900">Start a call</Link></li>
            <li><Link href="/#how" className="hover:text-ink-900">How it works</Link></li>
            <li><Link href="/#handles" className="hover:text-ink-900">What it handles</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Demo clinic</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-600">
            <li>Brightside Dental (fictional)</li>
            <li>Mon to Fri 9 AM to 5 PM</li>
            <li>Sat 9 AM to 1 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-200">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-ink-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Brightside Voice. Demo only: all names, numbers and bookings are fake.</span>
          <span>No AI model makes the decisions.</span>
        </div>
      </div>
    </footer>
  );
}
