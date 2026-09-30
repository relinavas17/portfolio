import clsx from "clsx";

/** Renders copy; a "[bracketed]" string is a placeholder and shows in burgundy italic. */
export function Copy({ text, className }: { text: string; className?: string }) {
  const isPlaceholder = /^\[.*\]$/.test(text.trim());
  return (
    <span className={clsx(className, isPlaceholder && "italic text-burgundy")}>{text}</span>
  );
}

/** Mono uppercase label used for section eyebrows and card labels. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("font-mono text-[13px] uppercase tracking-[0.08em] text-muted", className)}>
      {children}
    </div>
  );
}

export const container = "mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24";

/** Small olive dot with a soft pulse, used to mark "now" and availability. */
export function LiveDot({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={clsx("relative inline-flex h-2.5 w-2.5 shrink-0", className)}>
      <span className="absolute inset-0 rounded-full bg-olive animate-[ping-soft_1.8s_ease-out_infinite]" />
      <span className="relative h-2.5 w-2.5 rounded-full bg-olive" />
    </span>
  );
}
