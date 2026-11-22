"use client";

import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";
import { skills } from "@/data/portfolio";

export function Skills() {
  const { locale, t } = useLocale();
  return (
    <section id="competences" className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-6">
      <SectionHead title={t.skillsTitle} lead={t.skillsLead} />
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <article key={skill.title.fr} className="rounded-[28px] bg-card p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-ink">{skill.title[locale]}</h3>
                <p className="mt-1 text-sm text-muted">{skill.subtitle[locale]}</p>
              </div>
              <p className="shrink-0 rounded-full bg-paper px-3 py-1 text-sm font-medium text-accent-deep">
                {skill.note[locale]}
              </p>
            </div>
            <p className="mt-6 text-base leading-7 text-ink-soft">{skill.tags.join(", ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
