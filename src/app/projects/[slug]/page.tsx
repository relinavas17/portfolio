import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { Nav } from "@/components/Nav";
import { Copy, container } from "@/components/ui";
import { projects, site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.name} · ${site.name}`, description: p.summary };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <Nav />
      <main>
        <article className={clsx(container, "flex flex-col gap-14 pb-20 pt-12 md:pb-26 md:pt-16")}>
          <Link
            href="/#projects"
            className="group flex w-fit items-center gap-2 font-mono text-[13px] uppercase tracking-[0.06em] text-muted hover:text-burgundy"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            All projects
          </Link>

          <header className="flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[13px] text-muted">
              <span className="text-ink">{String(i + 1).padStart(2, "0")}</span>
              <span>{p.meta}</span>
              {p.tags.map((t) => (
                <span key={t} className="rounded-md bg-olive-tag px-2.5 py-1 text-olive-tag-ink">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="max-w-[1100px] font-serif text-[48px] leading-[1.04] tracking-[-0.01em] md:text-[80px]">
              {p.title}
            </h1>
            <p className="max-w-[760px] text-lg leading-relaxed text-ink-soft md:text-[21px]">{p.summary}</p>
            {(p.demo || p.github) && (
              <div className="flex flex-wrap gap-3">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-burgundy px-6 py-3.5 font-medium text-butter transition-transform hover:-translate-y-0.5"
                  >
                    Try it live ↗
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border-[1.5px] border-ink px-6 py-3.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>
            )}
          </header>

          <div className="grid grid-cols-1 gap-12 border-t-[1.5px] border-ink pt-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
            <div className="flex flex-col">
              {p.sections.map((s, n) => (
                <section
                  key={s.label}
                  className={clsx("grid grid-cols-1 gap-3 py-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10", n > 0 && "border-t border-line")}
                >
                  <h2 className="font-mono text-[13px] uppercase tracking-[0.06em] text-burgundy">{s.label}</h2>
                  <p className="text-[18px] leading-relaxed">
                    <Copy text={s.body} />
                  </p>
                </section>
              ))}
            </div>

            <aside className="flex flex-col gap-4 self-start rounded-2xl bg-card p-7 lg:sticky lg:top-28">
              <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-olive">Key result</span>
              <span className="font-serif text-[28px] leading-tight">{p.highlight}</span>
              <span className="mt-2 font-mono text-[12px] uppercase tracking-[0.06em] text-olive">Stack</span>
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-md bg-butter px-2.5 py-1 text-[14px] text-ink-soft">
                    {s}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col gap-2 rounded-2xl bg-olive-deep p-8 text-butter transition-colors hover:bg-olive md:flex-row md:items-center md:justify-between md:p-10"
          >
            <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-sage">Next project</span>
            <span className="flex items-center gap-4 font-serif text-[32px] md:text-[44px]">
              {next.name}
              <span aria-hidden="true" className="text-gold transition-transform group-hover:translate-x-2">
                →
              </span>
            </span>
          </Link>
        </article>
      </main>
    </>
  );
}
