type SectionHeadProps = {
  title: string;
  lead?: string;
};

export function SectionHead({ title, lead }: SectionHeadProps) {
  return (
    <header className="mb-12 sm:mb-16">
      <h2 className="type-tight max-w-4xl font-display text-[2.75rem] leading-[0.95] font-bold text-ink sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {lead ? <p className="mt-5 max-w-xl text-lg leading-7 text-muted">{lead}</p> : null}
    </header>
  );
}
