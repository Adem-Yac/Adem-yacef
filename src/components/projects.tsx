"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { ProjectCover } from "@/components/project-cover";
import { SectionHead } from "@/components/section-head";
import { projects, type Project, type ProjectKind } from "@/data/portfolio";

// Case-study cards: screenshot, type + status badges, title, one-line summary, stack, link.
function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLocale();

  return (
    <li>
      <Link
        href={`/projets/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-rule bg-card transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_18px_40px_-24px_rgb(18_22_58/0.35)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-rule bg-paper-2">
          <ProjectCover
            project={project}
            locale={locale}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="transition duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-paper px-3 py-1 text-ink-soft">{project.category[locale]}</span>
            {project.href ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f6ec] px-3 py-1 text-[#17633a]">
                <span className="size-1.5 rounded-full bg-[#1f9d55]" aria-hidden />
                {t.liveSite}
              </span>
            ) : project.repo ? (
              <span className="rounded-full bg-paper px-3 py-1 text-ink-soft">{t.github}</span>
            ) : (
              <span className="rounded-full bg-paper px-3 py-1 text-ink-soft">
                {project.kind === "web" ? t.kindWeb : t.kindMobile}
              </span>
            )}
          </div>
          <h3 className="mt-4 text-2xl font-bold text-ink sm:text-[1.7rem]">{project.title[locale]}</h3>
          <p className="mt-2 text-base leading-7 text-ink-soft">{project.summary[locale]}</p>
          <p className="mt-3 text-sm text-muted">{project.stack.join(", ")}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-base font-semibold text-accent-deep">
            {t.live}
            <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </li>
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
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHead title={t.projectsTitle} lead={t.projectsLead} />
        <div className="mb-12 inline-flex self-start rounded-full bg-paper-2 p-1 sm:mb-16 lg:self-auto" role="group" aria-label={t.projectsTitle}>
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
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === key ? "bg-card text-ink shadow-[0_1px_3px_rgb(18_22_58/0.12)]" : "text-muted hover:text-ink"
              }`}
            >
              {label} <span className="text-muted">{count}</span>
            </button>
          ))}
        </div>
      </div>

      <ul className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}
