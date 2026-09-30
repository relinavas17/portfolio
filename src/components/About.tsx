import clsx from "clsx";
import { about } from "@/content/site";
import { Copy, container } from "./ui";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-olive-deep text-butter">
      <div className={clsx(container, "grid grid-cols-1 gap-12 py-20 md:py-26 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20")}>
        <Reveal className="flex flex-col gap-8">
          <div className="font-mono text-[13px] uppercase tracking-[0.08em] text-sage">About</div>
          <h2 className="font-serif text-[52px] leading-[1.02] md:text-[76px]">
            Hi, I&apos;m <em className="text-gold">Relina.</em>
          </h2>
          <div className="flex max-w-[720px] flex-col gap-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={clsx(
                  "leading-relaxed",
                  i === 0 ? "font-serif text-[26px] leading-[1.3] text-butter md:text-[30px]" : "text-lg text-parchment",
                )}
              >
                <Copy text={p} className={/^\[/.test(p) ? "!text-gold" : undefined} />
              </p>
            ))}
          </div>
        </Reveal>

        <dl className="flex flex-col self-end rounded-2xl bg-olive-panel p-7">
          {about.facts.map((f, i) => (
            <div key={f.label} className={clsx("flex flex-col gap-1.5 py-4", i > 0 && "border-t border-olive-rule")}>
              <dt className="font-mono text-[12px] uppercase tracking-[0.06em] text-gold">{f.label}</dt>
              <dd className="text-[16px] leading-relaxed text-parchment">
                {f.value.includes("[") ? (
                  <>
                    {f.value.split("[")[0]}
                    <span className="italic text-gold">[{f.value.split("[")[1]}</span>
                  </>
                ) : (
                  f.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
