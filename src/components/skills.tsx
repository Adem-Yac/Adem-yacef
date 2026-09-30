"use client";

import { Code2, Database, Server, Smartphone } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { skills } from "@/data/portfolio";

const icons = [Code2, Smartphone, Server, Database];

export function Skills() {
  const { locale, t } = useLocale();
  return (
    <section id="competences" className="mx-auto w-full max-w-7xl px-4 py-14 sm:py-20 lg:px-6 lg:py-24">
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="font-code text-xs font-bold tracking-widest text-indigo-600 uppercase">
          {t.skillsKicker}
        </span>
        <h2 className="mt-1 font-display text-3xl font-bold text-slate-900 sm:text-[38px]">
          {t.skillsTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">{t.skillsLead}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map((skill, i) => {
          const Icon = icons[i];
          return (
            <article
              key={skill.title.fr}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition hover:shadow-lg sm:p-8"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {skill.title[locale]}
                    </h3>
                    <p className="font-code text-xs text-slate-500">{skill.subtitle[locale]}</p>
                  </div>
                </div>
                <span className="rounded-lg border border-blue-200 bg-blue-50 px-2 py-0.5 font-code text-xs font-bold text-blue-700">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between font-code text-xs text-slate-500">
                <span />
                <span className="font-semibold text-slate-700">{skill.note[locale]}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-200/70 bg-blue-50/80 px-3 py-0.5 font-code text-xs font-semibold text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
