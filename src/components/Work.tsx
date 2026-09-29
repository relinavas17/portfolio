"use client";

import { useState } from "react";
import clsx from "clsx";
import { filters, projects, type Tag } from "@/content/site";
import { Copy, Eyebrow, container } from "./ui";

export function Work() {
  const [filter, setFilter] = useState<"All" | Tag>("All");
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  const visible = projects.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <section id="work" className="scroll-mt-20 border-t border-line bg-cream">
      <div className={clsx(container, "flex flex-col gap-10 pb-22 pt-20 md:pt-26")}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>Selected work · click a project to open it</Eyebrow>
            <h2 className="font-serif text-[44px] leading-[1.05] md:text-[60px]">
              Problem, build, <em className="text-burgundy">proof.</em>
            </h2>
          </div>
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2 font-mono text-[13px]">
            {filters.map((f) => {
              const on = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(f)}
                  className={clsx(
                    "min-h-11 rounded-full border-[1.5px] px-4 transition-colors",
                    on
                      ? "border-olive bg-olive text-butter"
                      : "border-pill-line text-ink-soft hover:border-ink",
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t-[1.5px] border-ink">
          {visible.map((p) => {
            const index = String(projects.indexOf(p) + 1).padStart(2, "0");
            const open = openId === p.id;
            const panelId = `project-${p.id}`;
            return (
              <article key={p.id} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : p.id)}
                    className="group grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_44px] items-start gap-6 px-0 py-8 text-left transition-colors hover:bg-card md:px-6 md:py-10 lg:grid-cols-[276px_minmax(0,1fr)_48px] lg:gap-12"
                  >
                    <span className="col-span-2 flex flex-col gap-3.5 font-mono text-[13px] text-muted lg:col-span-1">
                      <span className="text-[15px] text-ink">{index}</span>
                      <span>{p.meta}</span>
                      <span className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-md bg-olive-tag px-2.5 py-1 text-olive-tag-ink">
                            {t}
                          </span>
                        ))}
                      </span>
                    </span>
                    <span className="flex flex-col gap-3.5">
                      <span className="block font-serif text-[32px] leading-[1.1] md:text-[42px]">{p.title}</span>
                      <span className="block max-w-[780px] text-base leading-relaxed text-ink-soft md:text-lg">
                        {p.summary}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink text-xl transition-transform group-hover:translate-x-1.5 md:h-12 md:w-12"
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  hidden={!open}
                  className="flex flex-col gap-5 pb-10 md:px-6 lg:pl-[348px]"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {p.detail.map((d) => (
                      <div key={d.label} className="flex flex-col gap-2.5 rounded-xl bg-card p-5">
                        <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-burgundy">{d.label}</span>
                        <Copy text={d.body} className="text-[15px] leading-[1.55]" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-7 font-medium">
                    {p.caseStudy && (
                      <a href={p.caseStudy} className="text-burgundy hover:text-burgundy-deep">
                        Read the case study →
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="text-burgundy hover:text-burgundy-deep">
                        Try it live ↗
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="text-olive hover:text-olive-deep">
                        View on GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
