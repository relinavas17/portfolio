import clsx from "clsx";
import { testimonial } from "@/content/site";
import { Reveal } from "./Reveal";
import { container } from "./ui";

export function Testimonial() {
  if (!testimonial.quote.trim()) return null;

  return (
    <section aria-label="Testimonial" className="bg-burgundy text-butter">
      <Reveal className={clsx(container, "grid grid-cols-1 gap-8 py-20 md:grid-cols-[120px_minmax(0,1fr)] md:py-24")}>
        <span aria-hidden="true" className="font-serif text-[120px] leading-[0.7] text-gold md:text-[160px]">
          &ldquo;
        </span>
        <figure className="flex max-w-[980px] flex-col gap-8">
          <blockquote className="font-serif text-[30px] leading-[1.25] md:text-[42px]">{testimonial.quote}</blockquote>
          <figcaption className="flex flex-col gap-1 border-t border-[#a04b55] pt-5">
            <span className="text-lg font-medium">{testimonial.name}</span>
            <span className="font-mono text-[13px] text-[#ebc9cc]">{testimonial.context}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
