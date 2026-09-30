"use client";

import { CheckCircle2, Cloud, GitBranch, Laptop, Network } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { tools } from "@/data/portfolio";

const icons = [GitBranch, Laptop, Network, Cloud];

export function Tools() {
  const { locale, t } = useLocale();
  return (
    <section id="outils" className="w-full border-y border-slate-200/80 bg-[#f8fafc] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="font-code text-xs font-bold tracking-widest text-violet-600 uppercase">
            {t.toolsKicker}
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-900 sm:text-[38px]">
            {t.toolsTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">{t.toolsLead}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, i) => {
            const Icon = icons[i];
            return (
              <article
                key={tool.title.fr}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900">{tool.title[locale]}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{tool.body[locale]}</p>
                <ul className="mt-4 space-y-2 font-code text-xs text-slate-700">
                  {tool.items.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
