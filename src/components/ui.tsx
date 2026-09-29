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
