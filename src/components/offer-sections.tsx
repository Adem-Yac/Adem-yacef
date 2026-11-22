"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";
import { offer } from "@/data/offer";
import { projects } from "@/data/portfolio";

function ProjectLinks({ slugs, label }: { slugs: string[]; label: string }) {
  const { locale } = useLocale();
  const items = slugs.map((slug) => projects.find((p) => p.slug === slug)).filter((p) => p !== undefined);
  if (!items.length) return null;
  return (
    <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="text-muted">{label}</span>
      {items.map((p) => (
        <Link key={p.slug} href={`/projets/${p.slug}`} className="font-semibold text-accent-deep underline-offset-4 hover:underline">
          {p.title[locale]}
        </Link>
      ))}
    </p>
  );
}

// Facts computed from the project data, so the numbers can never drift from what the site shows.
export function ProofStrip() {
  const { locale } = useLocale();
  const o = offer[locale];
  const web = projects.filter((p) => p.kind === "web").length;
  const facts = [
    { value: String(projects.length), label: o.proofLabels.projects },
    { value: `${web} + ${projects.length - web}`, label: o.proofLabels.split },
    { value: "3", label: o.proofLabels.languages },
    { value: "86", label: o.proofLabels.tests },
  ];
  return (
    <section aria-label={o.proofLabels.projects} className="mx-auto max-w-7xl px-4 lg:px-6">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-rule bg-rule lg:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="bg-card px-6 py-6">
            <dt className="sr-only">{f.label}</dt>
            <dd>
              <span className="type-tight block font-display text-5xl leading-none font-extrabold text-ink">{f.value}</span>
              <span className="mt-2 block text-sm leading-5 text-muted">{f.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Services() {
  const { locale } = useLocale();
  const o = offer[locale];
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:py-24 lg:px-6">
      <SectionHead title={o.servicesTitle} lead={o.servicesLead} />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {o.services.map((s) => (
          <li key={s.title} className="flex flex-col rounded-[24px] border border-rule bg-card p-7">
            <h3 className="text-2xl font-bold text-ink">{s.title}</h3>
            <p className="mt-3 text-base leading-7 text-ink-soft">{s.body}</p>
            <div className="mt-auto">
              <ProjectLinks slugs={s.projects} label={o.seeIn} />
            </div>
          </li>
        ))}
        <li className="flex flex-col rounded-[24px] bg-ink p-7 text-white md:col-span-2 lg:col-span-2">
          <h3 className="text-2xl font-bold">{o.otherTitle}</h3>
          <p className="mt-3 max-w-lg text-base leading-7 text-white/70">{o.otherBody}</p>
          <a
            href="#contact"
            className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-ink"
          >
            {o.otherCta}
            <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export function Quality() {
  const { locale } = useLocale();
  const o = offer[locale];
  return (
    <section className="bg-paper-2">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-6">
        <SectionHead title={o.qualityTitle} lead={o.qualityLead} />
        <ul className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {o.quality.map((q) => (
            <li key={q.title}>
              <span className="flex size-11 items-center justify-center rounded-[14px] bg-card text-accent-deep ring-1 ring-rule" aria-hidden>
                <Check size={20} strokeWidth={2.5} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink">{q.title}</h3>
              <p className="mt-2 text-base leading-7 text-ink-soft">{q.body}</p>
              <ProjectLinks slugs={q.projects} label={o.seeIn} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
