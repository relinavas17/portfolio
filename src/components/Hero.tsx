import clsx from "clsx";
import { hero, site } from "@/content/site";
import { container } from "./ui";

export function Hero() {
  return (
    <section id="top" className={clsx(container, "flex flex-col gap-8 pb-20 pt-16 md:gap-10 md:pb-26 md:pt-28")}>
      <div className="flex items-center gap-2.5 self-start rounded-full bg-butter-deep px-3.5 py-2 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-soft md:text-[13px]">
        <span className="h-2 w-2 rounded-full bg-olive" aria-hidden="true" />
        <span>{site.location}</span>
      </div>

      <h1 className="max-w-[1140px] font-serif text-[52px] leading-[1.02] tracking-[-0.015em] sm:text-[68px] lg:text-[100px] lg:leading-none">
        {hero.headlineStart} <em className="text-burgundy">{hero.headlineEmphasis}</em>
      </h1>

      <p className="max-w-[680px] text-lg leading-[1.55] text-ink-soft md:text-[21px]">{hero.sub}</p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-burgundy px-7 py-4 font-medium text-butter transition-transform hover:-translate-y-0.5"
        >
          See the work
        </a>
        <a
          href={site.links.resume}
          className="rounded-full border-[1.5px] border-ink px-7 py-4 font-medium text-ink transition-transform hover:-translate-y-0.5"
        >
          Download résumé
        </a>
      </div>

      <dl className="mt-6 grid grid-cols-1 border-t-[1.5px] border-ink md:mt-10 md:grid-cols-3">
        {hero.stats.map((s, i) => (
          <div
            key={s.value}
            className={clsx(
              "flex flex-col gap-2.5 px-0 py-7 transition-colors hover:bg-butter-deep md:px-8",
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
