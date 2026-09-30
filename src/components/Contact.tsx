import clsx from "clsx";
import { availability, site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Eyebrow, LiveDot, container } from "./ui";

const cta = "flex items-center justify-between rounded-xl px-6 py-[18px] text-[17px] font-medium transition-transform hover:translate-x-1";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className={clsx(container, "flex flex-col gap-20 pb-16 pt-20 md:pt-28")}>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="max-w-[820px] font-serif text-[52px] leading-[1.02] text-burgundy md:text-[76px]">
              Hiring a PM who can also <em>build?</em>
            </h2>
            <p className="flex items-center gap-3 self-start rounded-full bg-olive-tag px-4 py-2 text-[15px] text-olive-tag-ink">
              <LiveDot />
              {availability}
            </p>
          </Reveal>
          <Reveal delay={120} className="flex min-w-[300px] flex-col gap-3">
            <a href={site.links.email} className={clsx(cta, "bg-burgundy text-butter")}>
              <span>Email me</span>
              <span aria-hidden="true">→</span>
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" className={clsx(cta, "border-[1.5px] border-ink text-ink")}>
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a href={site.links.github} target="_blank" rel="noreferrer" className={clsx(cta, "border-[1.5px] border-ink text-ink")}>
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>

        <footer className="flex flex-col justify-between gap-2 border-t border-line pt-7 font-mono text-[13px] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Built with Next.js, deployed on Vercel</span>
        </footer>
      </div>
    </section>
  );
}
