import clsx from "clsx";
import { site } from "@/content/site";
import { Eyebrow, container } from "./ui";

const cta = "flex items-center justify-between rounded-xl px-6 py-[18px] text-[17px] font-medium transition-transform hover:translate-x-1";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className={clsx(container, "flex flex-col gap-20 pb-16 pt-20 md:pt-28")}>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="flex flex-col gap-5">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="max-w-[820px] font-serif text-[52px] leading-[1.02] text-burgundy md:text-[76px]">
              Hiring a PM who can also <em>build?</em>
            </h2>
            <p className="text-lg text-ink-soft md:text-[19px]">
              Open to product and technical program roles, anywhere in the US.
            </p>
          </div>
          <div className="flex min-w-[300px] flex-col gap-3">
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
          </div>
        </div>

        <footer className="flex flex-col justify-between gap-2 border-t border-line pt-7 font-mono text-[13px] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Built with Next.js, deployed on Vercel</span>
        </footer>
      </div>
    </section>
  );
}
