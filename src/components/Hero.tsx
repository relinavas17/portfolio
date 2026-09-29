"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { hero } from "@/content/site";
import { container } from "./ui";

const TYPE_MS = 55;
const ERASE_MS = 30;
const HOLD_MS = 1800;

/** Types each phrase out, holds it, erases it, moves to the next. */
function useTypewriter(phrases: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0]);
  const [erasing, setErasing] = useState(false);
  useEffect(() => {
    // Respect reduced motion: leave the first phrase static.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = phrases[index];
    let t: ReturnType<typeof setTimeout>;
    if (!erasing && text === target) {
      t = setTimeout(() => setErasing(true), HOLD_MS);
    } else if (erasing && text === "") {
      t = setTimeout(() => {
        setErasing(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, 250);
    } else if (erasing) {
      t = setTimeout(() => setText((s) => s.slice(0, -1)), ERASE_MS);
    } else {
      t = setTimeout(() => setText(target.slice(0, text.length + 1)), TYPE_MS);
    }
    return () => clearTimeout(t);
  }, [text, erasing, index, phrases]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(hero.phrases);

  return (
    <section id="top" className={clsx(container, "flex flex-col gap-8 pb-20 pt-16 md:gap-10 md:pb-24 md:pt-28")}>
      <h1 className="max-w-[1180px] font-serif text-[52px] leading-[1.04] tracking-[-0.015em] sm:text-[68px] lg:text-[100px] lg:leading-[1.02]">
        <span className="sr-only">
          {hero.lead} {hero.phrases.join(" ")}
        </span>
        <span aria-hidden="true">
          {hero.lead}
          {/* Reserved height stops the page jumping as phrases change length */}
          <span className="block min-h-[2.08em] sm:min-h-[1.04em]">
            <em className="text-burgundy">{typed}</em>
            <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] animate-pulse bg-burgundy align-baseline" />
          </span>
        </span>
      </h1>

      <p className="max-w-[680px] text-lg leading-[1.55] text-ink-soft md:text-[21px]">{hero.sub}</p>

      <dl className="mt-4 grid grid-cols-1 border-t-[1.5px] border-ink md:mt-8 md:grid-cols-3">
        {hero.stats.map((s, i) => (
          <div
            key={s.value}
            className={clsx(
              "flex flex-col gap-2.5 px-0 py-7 transition-colors hover:bg-butter-deep md:px-8",
              i === 0 && "md:pl-0 md:hover:pl-8",
              i > 0 && "border-t border-line md:border-l md:border-t-0",
            )}
          >
            <dt className="order-2 text-[15px] leading-normal text-ink-soft">{s.label}</dt>
            <dd className="order-1 font-serif text-[52px] leading-none text-olive md:text-[56px]">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
