"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { experienceHeading, timeline } from "@/content/site";
import { Eyebrow, LiveDot, container } from "./ui";
import { Reveal } from "./Reveal";

/** 0 → 1 as the timeline scrolls past the middle of the viewport. */
function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const p = (anchor - r.top) / Math.max(r.height, 1);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ref]);
  return progress;
}

export function Experience() {
  const listRef = useRef<HTMLOListElement | null>(null);
  const progress = useScrollProgress(listRef);
  const n = timeline.length;

  return (
    <section id="experience" className="scroll-mt-20 border-t border-line">
      <div className={clsx(container, "flex flex-col gap-14 py-20 md:py-26")}>
        <Reveal className="flex flex-col gap-3.5">
          <Eyebrow>Experience &amp; Education</Eyebrow>
          <h2 className="max-w-[900px] font-serif text-[44px] leading-[1.05] md:text-[60px]">
            {experienceHeading.lead} <em className="text-burgundy">{experienceHeading.emphasis}</em>
          </h2>
        </Reveal>

        <ol ref={listRef} className="relative">
          {/* Rail: faint base, burgundy fill that follows the scroll */}
          <span
            aria-hidden="true"
            className="absolute bottom-10 top-10 left-[7px] w-px bg-line md:left-[167px]"
          />
          <span
            aria-hidden="true"
            className="absolute top-10 left-[6px] w-[3px] rounded-full bg-burgundy md:left-[166px]"
            style={{ height: `calc((100% - 80px) * ${progress})` }}
          />

          {timeline.map((m, i) => {
            // A dot lights up once the fill has reached its row.
            const reached = progress >= (i + 0.35) / n;
            const edu = m.kind === "Education";
            return (
              <li key={m.org} className="group relative grid grid-cols-[16px_minmax(0,1fr)] gap-x-6 md:grid-cols-[136px_16px_minmax(0,1fr)] md:gap-x-8">
                {/* Year column (desktop) */}
                <div
                  className={clsx(
                    "hidden pt-7 text-right font-serif text-[44px] leading-none transition-colors duration-500 md:block",
                    reached ? "text-olive" : "text-line",
                  )}
                >
                  {m.year}
                </div>

                {/* Dot: circle for work, diamond for education */}
                <div className="relative flex justify-center pt-9">
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "relative z-10 h-[15px] w-[15px] border-2 transition-all duration-500",
                      edu ? "rotate-45 rounded-[3px]" : "rounded-full",
                      reached ? "border-burgundy bg-burgundy" : "border-olive bg-butter",
                    )}
                  />
                </div>

                <Reveal delay={60} className="flex flex-col gap-2 rounded-2xl px-0 py-6 transition-colors md:-ml-4 md:px-5 md:group-hover:bg-card">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className="font-mono text-[13px] text-muted md:hidden">{m.year} ·</span>
                    <span
                      className={clsx(
                        "rounded-md px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.06em]",
                        edu ? "bg-[#f1dfe0] text-burgundy" : "bg-olive-tag text-olive-tag-ink",
                      )}
                    >
                      {m.kind}
                    </span>
                    <span className="font-mono text-[13px] text-muted">{m.dates}</span>
                    {m.current && (
                      <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.06em] text-olive">
                        <LiveDot className="!h-2 !w-2" />
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-medium md:text-[22px]">
                    {m.org}
                    <span className="font-normal text-ink-soft"> · {m.title}</span>
                  </h3>
                  <p className="max-w-[720px] text-[16px] leading-relaxed text-ink-soft md:text-[17px]">{m.line}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
