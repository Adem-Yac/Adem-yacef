"use client";

import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";

export function About() {
  const { t } = useLocale();
  return (
    <section id="a-propos" className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-6">
      <SectionHead n="01" kicker={t.aboutKicker} title={t.aboutTitle} />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="font-display text-2xl leading-[1.35] font-light text-ink sm:text-[1.75rem]">{t.aboutWho}</p>
          <p className="mt-6 max-w-[38rem] text-base leading-7 text-ink-soft">{t.aboutLead}</p>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="font-code text-xs text-muted">{t.aboutBringTitle}</p>
          <ol className="mt-4 space-y-4">
            {t.aboutBring.map((item, i) => (
              <li key={item} className="flex gap-4 border-t border-rule pt-4 text-sm leading-6 text-ink-soft">
                <span className="font-display text-lg leading-6 text-accent italic">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-16 grid gap-x-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
        {t.aboutCards.map((card) => (
          <article key={card.title} className="border-t border-rule py-6">
            <h3 className="font-display text-xl text-ink">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{card.body}</p>
            <p className="mt-4 font-code text-[11px] text-ink-soft">{card.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
