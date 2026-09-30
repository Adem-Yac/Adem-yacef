"use client";

import { Briefcase, CheckCircle2, GraduationCap } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { education, experience } from "@/data/portfolio";

export function TrackRecord() {
  const { locale, t } = useLocale();
  return (
    <section id="track-record" className="w-full border-y border-slate-200/80 bg-[#f8fafc] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="font-code text-xs font-bold tracking-widest text-indigo-600 uppercase">
            {t.trackKicker}
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-900 sm:text-[38px]">
            {t.trackTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">{t.trackLead}</p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
              <Briefcase className="text-blue-600" size={20} />
              <h3 className="font-display text-xl font-bold text-slate-900">{t.expTitle}</h3>
            </div>
            <div className="relative space-y-8 pl-6 before:absolute before:top-3 before:bottom-3 before:left-2.5 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-violet-500">
              {experience.map((item) => (
                <div key={item.title.fr} className="relative">
                  <div className="absolute -left-6 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-500 bg-white">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                  <article className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-blue-300 sm:p-6">
                    <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-md border border-blue-200/80 bg-blue-50 px-2 py-0.5 font-code text-xs font-bold text-blue-700">
                        {item.dates[locale]}
                      </span>
                      <span className="font-code text-[11px] font-bold tracking-wider text-indigo-700 uppercase">
                        {item.kind[locale]}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-slate-900">{item.title[locale]}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.body[locale]}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags[locale].map((tag) => (
                        <span key={tag} className="rounded bg-slate-100 px-2 py-0.5 font-code text-xs text-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
              <GraduationCap className="text-violet-600" size={20} />
              <h3 className="font-display text-xl font-bold text-slate-900">{t.eduTitle}</h3>
            </div>
            <div className="space-y-6">
              {education.map((item) => (
                <article
                  key={item.title.fr}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:border-violet-300 sm:p-6"
                >
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-md border border-violet-200/80 bg-violet-50 px-2 py-0.5 font-code text-xs font-bold text-violet-700">
                      {item.dates}
                    </span>
                    <span className="font-code text-xs font-bold text-violet-700">{item.kind[locale]}</span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900">{item.title[locale]}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.body[locale]}</p>
                  <div className="mt-3 space-y-1 border-t border-slate-100 pt-3">
                    {item.checks[locale].map((check) => (
                      <p key={check} className="flex items-center gap-1.5 text-sm text-slate-700">
                        <CheckCircle2 size={14} className="text-blue-600" /> {check}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
