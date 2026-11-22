"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";
import { education, experience } from "@/data/portfolio";

// Vertical sine used as the timeline spine: the career read as one continuous signal.
const spine = (() => {
  let d = "M8 0";
  for (let y = 10; y <= 400; y += 10) d += ` Q${y % 20 === 10 ? 14 : 2} ${y - 5} 8 ${y}`;
  return d;
})();

function Timeline({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-ink">{title}</h3>
      <div className="relative mt-8 pl-10">
        <svg
          viewBox="0 0 16 400"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute top-2 bottom-2 left-0 h-[calc(100%-1rem)] w-4"
        >
          <path d={spine} fill="none" stroke="url(#signal-v)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
        <ol className="space-y-10">{children}</ol>
      </div>
    </div>
  );
}

export function TrackRecord() {
  const { locale, t } = useLocale();
  return (
    <section id="track-record" className="bg-paper-2">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-6">
        <SectionHead title={t.trackTitle} lead={t.trackLead} />
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-16">
          <Timeline title={t.expTitle}>
            {experience.map((item) => (
              <li key={item.title.fr}>
                <p className="text-sm text-muted">
                  {item.dates[locale]}, {item.kind[locale].toLowerCase()}
                </p>
                <h4 className="mt-1 text-xl font-semibold text-ink">{item.title[locale]}</h4>
                <p className="mt-2 text-base leading-7 text-ink-soft">{item.body[locale]}</p>
                <p className="mt-2 text-sm text-muted">{item.tags[locale].join(", ")}</p>
              </li>
            ))}
          </Timeline>
          <Timeline title={t.eduTitle}>
            {education.map((item) => (
              <li key={item.title.fr}>
                <p className="text-sm text-muted">
                  {item.dates}, {item.kind[locale].toLowerCase()}
                </p>
                <h4 className="mt-1 text-xl font-semibold text-ink">{item.title[locale]}</h4>
                <p className="mt-2 text-base leading-7 text-ink-soft">{item.body[locale]}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.checks[locale].map((check) => (
                    <li key={check} className="rounded-full bg-card px-3 py-1 text-sm text-ink-soft">
                      {check}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
