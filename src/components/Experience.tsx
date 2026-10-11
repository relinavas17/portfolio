"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { experienceHeading, timeline } from "@/content/site";
import { Eyebrow, LiveDot, container } from "./ui";
import { Reveal } from "./Reveal";

// The timeline reads left to right, oldest to newest.
const items = [...timeline].reverse();
const n = items.length;

export function Experience() {
  // The current role starts selected; hovering or tapping a stop selects that one.
  const [active, setActive] = useState(Math.max(0, items.findIndex((m) => m.current)));
  const m = items[active];
  const scroller = useRef<HTMLDivElement | null>(null);

  // On narrow screens the strip scrolls; start it at the right so "Now" is in view.
  useEffect(() => {
    const el = scroller.current;
    if (el && el.scrollWidth > el.clientWidth) el.scrollLeft = el.scrollWidth;
  }, []);
  const edu = m.kind === "Education";

  // Line runs from the centre of the first column to the centre of the last.
  const inset = `${50 / n}%`;
  const fill = active / (n - 1);

  return (
    <section id="experience" className="scroll-mt-20 border-t border-line">
      <div className={clsx(container, "flex flex-col gap-10 py-16 md:py-20")}>
        <Reveal className="flex flex-col gap-3.5">
          <Eyebrow>Experience &amp; Education</Eyebrow>
          <h2 className="max-w-[900px] font-serif text-[40px] leading-[1.05] md:text-[52px]">
            {experienceHeading.lead} <em className="text-burgundy">{experienceHeading.emphasis}</em>
          </h2>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-8">
          {/* Scrolls sideways on narrow screens */}
          <div ref={scroller} className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0">
            <ol className="relative grid min-w-[900px] grid-cols-6">
              {/* Base line and burgundy progress up to the selected stop */}
              <span aria-hidden="true" className="absolute top-[68px] h-px bg-line" style={{ left: inset, right: inset }} />
              <span
                aria-hidden="true"
                className="absolute top-[67px] h-[3px] rounded-full bg-burgundy transition-[width] duration-500 ease-out"
                style={{ left: inset, width: `calc((100% - 2 * ${inset}) * ${fill})` }}
              />

              {items.map((it, i) => {
                const on = i === active;
                const passed = i <= active;
                const isEdu = it.kind === "Education";
                return (
                  <li key={it.org}>
                    <button
                      type="button"
                      aria-pressed={on}
                      aria-controls="timeline-detail"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="group flex w-full flex-col items-center gap-4 px-2 text-center"
                    >
                      <span
                        className={clsx(
                          "flex h-7 items-center gap-2 font-mono text-[14px] transition-colors",
                          on ? "text-burgundy" : "text-muted",
                        )}
                      >
                        {it.current && <LiveDot />}
                        {it.year}
                      </span>

                      {/* Stop: circle for work, diamond for education */}
                      <span className="flex h-12 items-center">
                        <span
                          aria-hidden="true"
                          className={clsx(
                            "relative z-10 border-2 transition-all duration-300",
                            isEdu ? "rotate-45 rounded-[4px]" : "rounded-full",
                            on
                              ? "h-[22px] w-[22px] border-burgundy bg-burgundy shadow-[0_0_0_6px_rgba(122,31,43,0.12)]"
                              : "h-[16px] w-[16px]",
                            !on && (passed ? "border-burgundy bg-butter" : "border-olive bg-butter group-hover:border-burgundy"),
                          )}
                        />
                      </span>

                      <span className="flex flex-col gap-1">
                        <span
                          className={clsx(
                            "font-serif text-[22px] leading-tight transition-colors min-[1400px]:text-[28px]",
                            on ? "text-ink" : "text-ink-soft",
                          )}
                        >
                          {it.heading}
                        </span>
                        <span className={clsx("text-[14px] leading-snug transition-colors", on ? "text-burgundy" : "text-muted")}>
                          {it.org}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Detail for the selected stop */}
          <div
            id="timeline-detail"
            aria-live="polite"
            key={active}
            className="flex animate-[fadeUp_.35s_ease-out] flex-col gap-3 rounded-2xl bg-card px-6 py-6 md:flex-row md:items-center md:gap-8 md:px-8"
          >
            <span className="flex shrink-0 flex-wrap items-center gap-3 font-mono text-[12px] uppercase tracking-[0.06em]">
              <span
                className={clsx(
                  "rounded-md px-2 py-0.5",
                  edu ? "bg-[#f1dfe0] text-burgundy" : "bg-olive-tag text-olive-tag-ink",
                )}
              >
                {m.kind}
              </span>
              <span className="normal-case tracking-normal text-muted">
                {m.title} · {m.dates}
              </span>
            </span>
            <p className="text-[16px] leading-relaxed text-ink md:text-[18px]">{m.line}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
