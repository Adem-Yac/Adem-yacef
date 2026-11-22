"use client";

import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";
import { skills } from "@/data/portfolio";

export function Skills() {
  const { locale, t } = useLocale();
  return (
    <section id="competences" className="bg-paper-2/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-6">
        <SectionHead n="02" kicker={t.skillsKicker} title={t.skillsTitle} lead={t.skillsLead} />
        <div className="border-b border-rule">
          {skills.map((skill) => (
            <article
              key={skill.title.fr}
              className="grid gap-3 border-t border-rule py-7 sm:grid-cols-12 sm:gap-8"
            >
              <div className="sm:col-span-5">
                <h3 className="font-display text-2xl text-ink sm:text-3xl">{skill.title[locale]}</h3>
                <p className="mt-1 text-sm text-muted">{skill.subtitle[locale]}</p>
              </div>
              <p className="font-code text-sm leading-7 text-ink-soft sm:col-span-5">{skill.tags.join(", ")}</p>
              <p className="font-display text-base text-accent italic sm:col-span-2 sm:text-right">
                {skill.note[locale]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
