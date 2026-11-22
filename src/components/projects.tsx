"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";
import { projects, type Project, type ProjectKind } from "@/data/portfolio";

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured: boolean }) {
  const { locale, t } = useLocale();

  return (
    <article className={featured ? "sm:col-span-2" : undefined}>
      <Link href={`/projets/${project.slug}`} className="group block">
        <div
          className={`relative overflow-hidden rounded-[3px] bg-ink/90 ring-1 ring-rule ${
            featured ? "aspect-[16/10] sm:aspect-[16/8]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title[locale]}
            fill
            unoptimized
            className="object-cover object-top transition duration-500 ease-out group-hover:scale-[1.025]"
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        </div>
        <div className="mt-4 flex items-baseline gap-3">
          <span className="font-code text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
          <div className="min-w-0">
            <h3 className="font-display text-xl text-ink decoration-1 underline-offset-4 group-hover:underline sm:text-2xl">
              {project.title[locale]}
            </h3>
            <p className="mt-1 font-code text-[11px] text-muted">
              {project.kind === "web" ? t.kindWeb : t.kindMobile} — {project.category[locale]}
            </p>
            <p className="mt-2 line-clamp-2 max-w-xl text-sm leading-6 text-ink-soft">{project.summary[locale]}</p>
            <p className="mt-2 font-code text-[11px] text-muted">{project.stack.join(" · ")}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function Projects() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<"all" | ProjectKind>("all");
  const web = useMemo(() => projects.filter((p) => p.kind === "web"), []);
  const mobile = useMemo(() => projects.filter((p) => p.kind === "mobile"), []);
  const visible = filter === "web" ? web : filter === "mobile" ? mobile : [...web, ...mobile];

  return (
    <section id="projets" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-16 sm:py-24 lg:px-6">
      <SectionHead n="04" kicker={t.projectsKicker} title={t.projectsTitle} lead={t.projectsLead} />

      <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm" role="group" aria-label={t.projectsTitle}>
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
            className={`cursor-pointer border-b pb-1 transition-colors ${
              filter === key ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {label} <sup className="font-code text-[10px]">{count}</sup>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
