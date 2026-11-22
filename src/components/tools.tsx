"use client";

import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";
import { tools } from "@/data/portfolio";

export function Tools() {
  const { locale, t } = useLocale();
  return (
    <section id="outils" className="mx-auto max-w-7xl px-4 pb-16 sm:pb-24 lg:px-6">
      <SectionHead title={t.toolsTitle} lead={t.toolsLead} />
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {tools.map((tool) => (
          <article key={tool.title.fr} className="border-t-2 border-ink pt-5">
            <h3 className="text-2xl font-bold text-ink">{tool.title[locale]}</h3>
            <p className="mt-3 max-w-md text-base leading-7 text-ink-soft">{tool.body[locale]}</p>
            <p className="mt-3 text-sm text-muted">{tool.items.join(", ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
