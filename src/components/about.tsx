"use client";

import { CheckCircle2, Database, Infinity, Smartphone, Globe } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

const icons = [Globe, Smartphone, Database, Infinity];
const colors = [
  "text-blue-600 bg-blue-50 border-blue-200",
  "text-indigo-600 bg-indigo-50 border-indigo-200",
  "text-violet-600 bg-violet-50 border-violet-200",
  "text-blue-700 bg-blue-50 border-blue-200",
];

export function About() {
  const { t } = useLocale();
  return (
    <section id="a-propos" className="relative w-full border-y border-slate-200/80 bg-[#f8fafc] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="font-code text-xs font-bold tracking-widest text-blue-600 uppercase">
            {t.aboutKicker}
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-[38px]">
            {t.aboutTitle}
          </h2>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="rounded-2xl border border-slate-200/80 border-l-4 border-l-blue-600 bg-white p-6 shadow-sm lg:col-span-7">
            <p className="font-code text-[11px] font-bold tracking-wider text-blue-600 uppercase">
              {t.aboutWhoTitle}
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-700">{t.aboutWho}</p>
            <p className="mt-4 text-base leading-7 text-slate-600">{t.aboutLead}</p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm lg:col-span-5">
            <p className="font-code text-[11px] font-bold tracking-wider text-blue-600 uppercase">
              {t.aboutBringTitle}
            </p>
            <ul className="mt-4 space-y-3">
              {t.aboutBring.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.aboutCards.map((card, i) => {
            const Icon = icons[i];
            return (
              <article
                key={card.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${colors[i]} transition group-hover:scale-110`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{card.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{card.body}</p>
                </div>
                <p className="mt-4 flex items-center gap-1 border-t border-slate-100 pt-3 font-code text-xs font-semibold text-blue-600">
                  {card.meta}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
