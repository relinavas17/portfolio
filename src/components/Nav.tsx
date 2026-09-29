"use client";

import { useState } from "react";
import clsx from "clsx";
import { site } from "@/content/site";
import { container } from "./ui";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-butter/90 backdrop-blur">
      <div className={clsx(container, "flex h-[72px] items-center justify-between md:h-[84px]")}>
        <a href="#top" className="font-serif text-[26px] text-ink md:text-[28px]">
          {site.name}
          <span className="text-burgundy">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 text-[15px] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink-soft transition-colors hover:text-burgundy">
              {l.label}
            </a>
          ))}
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-ink-soft transition-colors hover:text-burgundy"
          >
            GitHub ↗
          </a>
          <a
            href={site.links.resume}
            className="rounded-full bg-burgundy px-5 py-[11px] font-medium text-butter transition-transform hover:-translate-y-0.5"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {open ? (
              <path d="M3 3l12 12M15 3L3 15" />
            ) : (
              <path d="M2 5h14M2 9h14M2 13h14" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-butter md:hidden">
          <div className={clsx(container, "flex flex-col py-4")}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-lg text-ink"
              >
                {l.label}
              </a>
            ))}
            <a href={site.links.github} target="_blank" rel="noreferrer" className="border-b border-line py-4 text-lg text-ink">
              GitHub ↗
            </a>
            <a
              href={site.links.resume}
              className="mt-4 rounded-full bg-burgundy px-5 py-3 text-center font-medium text-butter"
            >
              Résumé
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
