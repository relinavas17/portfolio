"use client";

import { useState } from "react";
import clsx from "clsx";
import { experienceHeading, timeline } from "@/content/site";
import { Eyebrow, LiveDot, container } from "./ui";
import { Reveal } from "./Reveal";

export function Experience() {
  // The current role starts open; hovering or tapping a row opens that one instead.
  const [open, setOpen] = useState(timeline.findIndex((m) => m.current));

  return (
    <section id="experience" className="scroll-mt-20 border-t border-line">
      <div className={clsx(container, "flex flex-col gap-14 py-20 md:py-26")}>
        <Reveal className="flex flex-col gap-3.5">
          <Eyebrow>Experience &amp; Education</Eyebrow>
          <h2 className="max-w-[900px] font-serif text-[44px] leading-[1.05] md:text-[60px]">
            {experienceHeading.lead} <em className="text-burgundy">{experienceHeading.emphasis}</em>
          </h2>
        </Reveal>

        <ol className="group/list border-t-[1.5px] border-ink">
          {timeline.map((m, i) => {
            const isOpen = i === open;
            const edu = m.kind === "Education";
            const panelId = `milestone-${i}`;
            return (
              <Reveal
                as="li"
                key={m.org}
                delay={i * 70}
                className="border-b border-line"
              >
                <div
                  className={clsx(
                    "transition-opacity duration-300",
                    // While the pointer is over the list, every row but the open one recedes.
                    !isOpen && "md:group-hover/list:opacity-45",
                  )}
                >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(i)}
                  onMouseEnter={() => setOpen(i)}
                  onFocus={() => setOpen(i)}
                  className="group flex w-full items-baseline justify-between gap-6 py-6 text-left md:py-8"
                >
                  <span
                    className={clsx(
                      "font-serif text-[clamp(30px,4.4vw,64px)] leading-[1.02] tracking-[-0.01em] transition-[transform,color] duration-300",
                      isOpen ? "translate-x-0 text-ink md:translate-x-3" : "text-ink",
                    )}
                  >
                    {m.heading}
                    <span className={clsx("transition-colors duration-300", isOpen ? "text-burgundy" : "text-muted")}>
                      , <em>{m.org}</em>
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2.5 font-mono text-[13px] text-muted md:text-[15px]">
                    {m.current && <LiveDot />}
                    <span className={clsx(m.current && "text-olive")}>{m.year}</span>
                  </span>
                </button>

                {/* Grid-row trick animates the panel open to its natural height */}
                <div
                  id={panelId}
                  className={clsx(
                    "grid transition-[grid-template-rows] duration-400 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-3 pb-8 md:pl-3">
                      <span className="flex flex-wrap items-center gap-3 font-mono text-[12px] uppercase tracking-[0.06em]">
                        <span
                          className={clsx(
                            "rounded-md px-2 py-0.5",
                            edu ? "bg-[#f1dfe0] text-burgundy" : "bg-olive-tag text-olive-tag-ink",
                          )}
                        >
                          {m.kind}
                        </span>
                        <span className="normal-case tracking-normal text-muted">
                          {edu ? `${m.title} · ${m.dates}` : m.dates}
                        </span>
                      </span>
                      <p className="max-w-[760px] text-[17px] leading-relaxed text-ink-soft md:text-[19px]">
                        {m.line}
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
