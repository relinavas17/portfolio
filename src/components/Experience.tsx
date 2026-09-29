import clsx from "clsx";
import { education, experience, skills } from "@/content/site";
import { Copy, Eyebrow, container } from "./ui";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line">
      <div className={clsx(container, "grid grid-cols-1 gap-10 py-20 md:py-26 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16")}>
        <div className="flex flex-col gap-3.5">
          <Eyebrow>Experience</Eyebrow>
          <h2 className="font-serif text-[40px] leading-[1.05] md:text-[48px]">
            Engineer first, then <em className="text-burgundy">product.</em>
          </h2>
        </div>

        <div className="border-t-[1.5px] border-ink">
          <ul>
            {experience.map((e) => (
              <li
                key={e.role}
                className="grid grid-cols-1 gap-2 border-b border-line py-6 transition-all hover:bg-card md:grid-cols-[minmax(0,1fr)_220px] md:items-baseline md:gap-6 md:hover:pl-4"
              >
                <div className="flex flex-col gap-1.5">
                  <Copy text={e.role} className="text-lg font-medium md:text-xl" />
                  <Copy text={e.note} className="text-base text-ink-soft" />
                </div>
                <Copy text={e.dates} className="font-mono text-sm text-muted md:text-right" />
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 pt-6 text-[15px] text-ink-soft md:flex-row md:gap-8">
            <span>
              {education.split("[")[0]}
              {education.includes("[") && <Copy text={`[${education.split("[")[1]}`} />}
            </span>
            <span>{skills}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
