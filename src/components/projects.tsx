"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { projects, type Project, type ProjectKind } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLocale();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_1px_0_rgba(28,110,234,0.04)] transition hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(28,110,234,0.08)]">
      <Link href={`/projets/${project.slug}`} className="block">
        <div className="relative h-48 overflow-hidden border-b border-slate-100 bg-slate-950 sm:h-52">
          <Image
            src={project.image}
            alt={project.title[locale]}
            fill
            unoptimized
            className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
          <p className="font-code text-[10px] font-bold tracking-[0.14em] text-blue-600 uppercase">
            {project.kind === "web" ? t.kindWeb : t.kindMobile} · {project.category[locale]}
          </p>
          <h3 className="mt-1 font-display text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
            {project.title[locale]}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">{project.summary[locale]}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-blue-100 bg-blue-50 px-2 py-0.5 font-code text-[11px] font-medium text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

export function Projects() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<"all" | ProjectKind>("all");
  const web = useMemo(() => projects.filter((p) => p.kind === "web"), []);
  const mobile = useMemo(() => projects.filter((p) => p.kind === "mobile"), []);
  const visible = filter === "web" ? web : filter === "mobile" ? mobile : [...web, ...mobile];
  const heading = filter === "web" ? t.webSection : filter === "mobile" ? t.mobileSection : t.filterAll;

  return (
    <section id="projets" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-14 sm:py-20 lg:px-6 lg:py-24">
      <div className="mb-8 flex flex-col items-center text-center">
        <span className="font-code text-xs font-bold tracking-widest text-blue-600 uppercase">
          {t.projectsKicker}
        </span>
        <h2 className="mt-1 font-display text-3xl font-bold text-slate-900 sm:text-[38px]">
          {t.projectsTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">{t.projectsLead}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {(
            [
              ["all", t.filterAll, web.length + mobile.length],
              ["web", t.filterWeb, web.length],
              ["mobile", t.filterMobile, mobile.length],
            ] as const
          ).map(([key, label, count]) => (
            <button
              key={key}
              type="button"
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
              className={`cursor-pointer rounded-full border px-5 py-2 font-code text-xs font-semibold transition ${
                filter === key
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>
      </div>

      <h3 className="mb-5 font-display text-xl font-bold text-slate-900">{heading}</h3>
      <ProjectGrid items={visible} />
    </section>
  );
}
