"use client";

import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";
import { education, experience } from "@/data/portfolio";

export function TrackRecord() {
  const { locale, t } = useLocale();
  return (
    <section id="track-record" className="bg-paper-2/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-6">
        <SectionHead n="05" kicker={t.trackKicker} title={t.trackTitle} lead={t.trackLead} />
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="font-display text-2xl text-ink italic">{t.expTitle}</h3>
            <ol className="mt-6">
              {experience.map((item) => (
                <li key={item.title.fr} className="grid gap-2 border-t border-rule py-6 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <p className="font-code text-xs leading-6 text-muted">{item.dates[locale]}</p>
                  <div>
                    <h4 className="text-lg font-medium text-ink">{item.title[locale]}</h4>
                    <p className="font-code text-[11px] text-accent">{item.kind[locale]}</p>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body[locale]}</p>
                    <p className="mt-3 font-code text-[11px] text-muted">{item.tags[locale].join(" · ")}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-display text-2xl text-ink italic">{t.eduTitle}</h3>
            <ol className="mt-6">
              {education.map((item) => (
                <li key={item.title.fr} className="grid gap-2 border-t border-rule py-6 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <p className="font-code text-xs leading-6 text-muted">{item.dates}</p>
                  <div>
                    <h4 className="text-lg font-medium text-ink">{item.title[locale]}</h4>
                    <p className="font-code text-[11px] text-accent">{item.kind[locale]}</p>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">{item.body[locale]}</p>
                    <ul className="mt-3 space-y-1">
                      {item.checks[locale].map((check) => (
                        <li key={check} className="text-sm text-ink-soft before:mr-2 before:text-accent before:content-['—']">
                          {check}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
