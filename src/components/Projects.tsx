import Link from "next/link";
import clsx from "clsx";
import { projects } from "@/content/site";
import { Eyebrow, container } from "./ui";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line bg-cream">
      <div className={clsx(container, "flex flex-col gap-10 py-20 md:gap-12 md:py-26")}>
        <div className="flex flex-col gap-3.5">
          <Eyebrow>Projects</Eyebrow>
          <h2 className="font-serif text-[44px] leading-[1.05] md:text-[60px]">
            Problem, build, <em className="text-burgundy">proof.</em>
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group flex h-full flex-col gap-6 rounded-2xl border border-line bg-butter p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-burgundy hover:shadow-[0_18px_40px_-24px_rgba(122,31,43,0.45)]"
              >
                <div className="flex items-center justify-between font-mono text-[13px] text-muted">
                  <span className="text-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md bg-olive-tag px-2 py-0.5 text-[12px] text-olive-tag-ink">
                        {t}
                      </span>
                    ))}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="font-serif text-[32px] leading-[1.05] transition-colors group-hover:text-burgundy">
                    {p.name}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-ink-soft">{p.oneLiner}</p>
                </div>

                <div className="flex flex-col gap-4 border-t border-line pt-5">
                  <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-olive">{p.highlight}</span>
                  <span className="flex items-center justify-between font-medium text-burgundy">
                    Read more
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
