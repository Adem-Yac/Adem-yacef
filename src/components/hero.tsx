"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { projects, social } from "@/data/portfolio";

const card = {
  fr: { title: "Fiche rapide", based: "Basé à", mobile: "Mobile", web: "Web", back: "Back-end", data: "Données", note: "réponse par e-mail ou WhatsApp" },
  en: { title: "Quick facts", based: "Based in", mobile: "Mobile", web: "Web", back: "Back-end", data: "Data", note: "reply by email or WhatsApp" },
} as const;

export function Hero() {
  const { t, locale } = useLocale();
  const c = card[locale];
  const rows = [
    [c.based, social.location[locale]],
    [c.mobile, "Flutter, Dart"],
    [c.web, "React, Next.js"],
    [c.back, "Laravel, PHP"],
    [c.data, "MySQL, Firebase"],
  ];

  return (
    <section id="accueil" className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:pt-16 sm:pb-24 lg:px-6 lg:pt-20">
      <p className="flex items-center gap-2 font-code text-xs text-muted">
        <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden />
        {t.available}
      </p>

      <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <h1 className="font-display text-[clamp(3.6rem,13vw,9.5rem)] leading-[0.88] font-light tracking-[-0.045em] text-ink">
            Adem<span className="italic text-accent">Yac</span>
          </h1>
          <p className="mt-6 font-display text-2xl font-normal italic text-ink-soft sm:text-3xl">
            {t.headlineRole}
          </p>
          <p className="mt-8 max-w-[34rem] text-lg leading-8 text-ink-soft">{t.heroLead}</p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a href="#contact" className="btn-ink inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium">
              {t.ctaProject} <ArrowDownRight size={16} aria-hidden />
            </a>
            <a href="#projets" className="link-underline text-sm font-medium text-ink">
              {t.projectsTitle}
            </a>
          </div>
        </div>

        <aside className="lg:col-span-4 lg:pt-6">
          <div className="relative mx-auto max-w-sm -rotate-[1.5deg] bg-card px-6 pt-8 pb-6 shadow-[0_1px_0_#d6cdbd,0_14px_30px_-18px_rgba(60,40,20,0.35)] lg:mr-0">
            <span
              aria-hidden
              className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[2deg] bg-[#e6dcc4]/80"
            />
            <p className="font-display text-xl italic text-ink">{c.title}</p>
            <dl className="mt-4 divide-y divide-dashed divide-rule">
              {rows.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="font-code text-[11px] text-muted">{label}</dt>
                  <dd className="text-right text-sm text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-ink hover:text-accent">
                GitHub <ArrowUpRight size={13} aria-hidden />
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-ink hover:text-accent">
                LinkedIn <ArrowUpRight size={13} aria-hidden />
              </a>
              <a href={`mailto:${social.email}`} className="inline-flex items-center gap-0.5 text-ink hover:text-accent">
                E-mail <ArrowUpRight size={13} aria-hidden />
              </a>
            </div>
            <p className="mt-4 font-code text-[11px] text-muted">— {c.note}</p>
          </div>
        </aside>
      </div>

      <div className="mt-16 border-t border-rule pt-4 sm:mt-24">
        <p className="font-code text-[11px] text-muted">{t.projectsKicker}</p>
        <p className="mt-2 font-display text-lg leading-relaxed text-ink-soft italic sm:text-xl">
          {projects.map((p, i) => (
            <span key={p.slug}>
              <a href={`/projets/${p.slug}`} className="not-italic transition-colors hover:text-accent">
                {p.title[locale]}
              </a>
              {i < projects.length - 1 ? <span className="mx-2 text-rule" aria-hidden>/</span> : null}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
