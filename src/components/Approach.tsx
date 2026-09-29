"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { approach } from "@/content/site";
import { container } from "./ui";

export function Approach() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = approach[active];

  // Arrow-key navigation between tabs, per the WAI-ARIA tabs pattern.
  function onKeyDown(e: React.KeyboardEvent, i: number) {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % approach.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + approach.length) % approach.length;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="approach" className="scroll-mt-20 bg-olive-deep text-butter">
      <div className={clsx(container, "flex flex-col gap-10 py-20 md:gap-12 md:py-26")}>
        <div className="flex flex-col gap-3.5">
          <div className="font-mono text-[13px] uppercase tracking-[0.08em] text-sage">Approach</div>
          <h2 className="font-serif text-[44px] leading-[1.05] md:text-[60px]">
            Spec it. Prototype it. <em className="text-gold">Prove it.</em>
          </h2>
        </div>

        <div role="tablist" aria-label="Approach" className="grid grid-cols-3 border-b border-olive-rule">
          {approach.map((a, i) => {
            const on = i === active;
            return (
              <button
                key={a.label}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${i}`}
                aria-selected={on}
                aria-controls="approach-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={clsx(
                  "-mb-px min-h-11 border-b-[3px] py-5 text-left text-base transition-colors md:text-lg",
                  on ? "border-gold font-semibold text-gold" : "border-transparent text-sage hover:text-parchment",
                )}
              >
                <span className="font-mono text-sm">0{i + 1}</span>
                <span className="ml-2 md:ml-3">{a.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id="approach-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <p className="font-serif text-[28px] leading-[1.25] md:text-[36px]">{current.statement}</p>
          <div className="flex flex-col gap-3 rounded-2xl bg-olive-panel p-7">
            <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-gold">{current.exampleLabel}</span>
            <span className="text-lg leading-relaxed text-parchment">{current.example}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
