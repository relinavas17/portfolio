"use client";

import { useState } from "react";
import clsx from "clsx";
import { experience, experienceHeading, type Role } from "@/content/site";
import { Copy, Eyebrow, container } from "./ui";

const trackStyle: Record<Role["track"], string> = {
  Product: "bg-[#f1dfe0] text-burgundy",
  Analytics: "bg-butter-deep text-ink-soft",
  Engineering: "bg-olive-tag text-olive-tag-ink",
};

function Detail({ r }: { r: Role }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className={clsx("rounded-md px-2.5 py-1 font-mono text-[12px]", trackStyle[r.track])}>{r.track}</span>
        <Copy text={r.dates} className="font-mono text-sm text-muted" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-serif text-[34px] leading-tight md:text-[40px]">{r.company}</h3>
        <Copy text={r.role} className="text-lg text-ink-soft" />
      </div>
      <Copy text={r.summary} className="text-[17px] leading-relaxed" />
      <ul className="flex flex-col gap-3">
        {r.points.map((pt, i) => (
          <li key={i} className="flex gap-3 text-[16px] leading-relaxed">
            <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
            <Copy text={pt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="scroll-mt-20 border-t border-line">
      <div className={clsx(container, "flex flex-col gap-12 py-20 md:py-26")}>
        <div className="flex flex-col gap-3.5">
          <Eyebrow>Experience</Eyebrow>
          <h2 className="max-w-[900px] font-serif text-[44px] leading-[1.05] md:text-[60px]">
            {experienceHeading.lead} <em className="text-burgundy">{experienceHeading.emphasis}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-16">
          {/* Role list: a vertical track with a dot per role */}
          <ol className="relative flex flex-col">
            <span aria-hidden="true" className="absolute bottom-6 left-[7px] top-6 w-px bg-line" />
            {experience.map((r, i) => {
              const on = i === active;
              return (
                <li key={r.company}>
                  <button
                    type="button"
                    aria-current={on ? "true" : undefined}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={clsx(
                      "group relative flex w-full items-start gap-5 rounded-xl py-4 pl-0 pr-4 text-left transition-colors",
                      on ? "bg-transparent" : "hover:bg-card/60",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        "relative z-10 mt-[7px] h-[15px] w-[15px] shrink-0 rounded-full border-2 transition-all",
                        on ? "scale-110 border-burgundy bg-burgundy" : "border-olive bg-butter group-hover:border-burgundy",
                      )}
                    />
                    <span className="flex flex-1 flex-col gap-1">
                      <span className={clsx("text-lg font-medium transition-colors md:text-xl", on ? "text-burgundy" : "text-ink")}>
                        {r.company}
                      </span>
                      <span className="flex flex-wrap items-baseline justify-between gap-x-4 text-[15px] text-muted">
                        <Copy text={r.role} />
                        <Copy text={r.dates} className="font-mono text-[13px]" />
                      </span>
                    </span>
                  </button>
                  {/* Mobile: details open inline under the selected role */}
                  {on && (
                    <div className="mb-4 ml-9 rounded-2xl bg-card p-6 lg:hidden">
                      <Detail r={r} />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Desktop: details in a sticky panel */}
          <div className="hidden lg:block">
            <div key={active} className="sticky top-28 animate-[fadeUp_.35s_ease-out] rounded-2xl bg-card p-10">
              <Detail r={experience[active]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
