"use client";

import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";

export function About() {
  const { t } = useLocale();
  return (
    <section id="a-propos" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-6">
        <div className="[&_h2]:text-white [&_p]:text-white/70">
          <SectionHead title={t.aboutTitle} />
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-2xl leading-[1.4] font-medium sm:text-[1.7rem]">{t.aboutWho}</p>
            <p className="mt-6 max-w-[38rem] text-base leading-7 text-white/70">{t.aboutLead}</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm text-white/60">{t.aboutBringTitle}</p>
            <ul className="mt-4 space-y-4">
              {t.aboutBring.map((item) => (
                <li key={item} className="rounded-[18px] bg-white/[0.06] p-4 text-sm leading-6 text-white/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
