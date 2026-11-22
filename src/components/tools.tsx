"use client";

import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";
import { tools } from "@/data/portfolio";

export function Tools() {
  const { locale, t } = useLocale();
  return (
    <section id="outils" className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-6">
      <SectionHead n="03" kicker={t.toolsKicker} title={t.toolsTitle} lead={t.toolsLead} />
      <div className="grid gap-x-12 md:grid-cols-2">
        {tools.map((tool, i) => (
          <article key={tool.title.fr} className="border-t border-rule py-8">
            <div className="flex items-baseline gap-3">
              <span className="font-code text-xs text-muted">{String.fromCharCode(97 + i)}.</span>
              <h3 className="font-display text-2xl text-ink">{tool.title[locale]}</h3>
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-ink-soft">{tool.body[locale]}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-code text-xs text-muted">
              {tool.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
