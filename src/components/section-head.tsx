type SectionHeadProps = {
  n: string;
  kicker: string;
  title: string;
  lead?: string;
};

// Left-aligned editorial header: number + label on a rule, then the title.
export function SectionHead({ n, kicker, title, lead }: SectionHeadProps) {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="flex items-baseline gap-3 border-t border-ink pt-3 font-code text-xs text-muted">
        <span className="text-ink">{n}</span>
        <span>{kicker}</span>
      </div>
      <h2 className="mt-6 max-w-3xl font-display text-[2.1rem] leading-[1.05] font-normal tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.6rem]">
        {title}
      </h2>
      {lead ? <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">{lead}</p> : null}
    </header>
  );
}
