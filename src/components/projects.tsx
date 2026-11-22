"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { ProjectCover } from "@/components/project-cover";
import { SectionHead } from "@/components/section-head";
import { projects, type Project, type ProjectKind } from "@/data/portfolio";

// One project = one large card. On desktop the cards are sticky and pile up as you scroll,
// each settling a little lower than the previous one so the stack stays visible.
function DeckCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const { locale, t } = useLocale();
  const dark = project.kind === "mobile";

  return (
    <li className="md:sticky" style={{ top: `calc(6rem + ${index * 16}px)` }}>
      <Link
        href={`/projets/${project.slug}`}
        className={`group grid overflow-hidden rounded-[32px] shadow-[0_-10px_40px_-12px_rgb(18_22_58/0.25)] md:h-[min(76vh,620px)] md:grid-cols-12 ${
          dark ? "bg-ink text-white" : "bg-card text-ink"
        }`}
      >
        <div className="flex flex-col gap-6 p-6 sm:p-10 md:col-span-5 md:justify-between">
          <div className={`flex items-center justify-between text-sm ${dark ? "text-white/60" : "text-muted"}`}>
            <span>
              {project.kind === "web" ? t.kindWeb : t.kindMobile}
              {project.year ? `, ${project.year}` : ""}
            </span>
            <span aria-label={`${index + 1} / ${total}`}>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
          <div>
            <h3 className="type-tight font-display text-5xl leading-[0.9] font-extrabold sm:text-7xl">{project.title[locale]}</h3>
            <p className={`mt-2 text-base ${dark ? "text-[#9db7ff]" : "text-accent-deep"}`}>{project.category[locale]}</p>
            <p className={`mt-5 max-w-md text-base leading-7 ${dark ? "text-white/75" : "text-ink-soft"}`}>{project.summary[locale]}</p>
          </div>
          <div>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <li
                  key={tag}
                  className={`rounded-full border px-3 py-1 text-sm ${dark ? "border-white/20 text-white/80" : "border-rule text-ink-soft"}`}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-block text-base font-semibold underline decoration-2 underline-offset-[6px] transition-colors group-hover:text-accent">
              {t.live}
            </span>
          </div>
        </div>
        <div className="relative order-first aspect-[16/10] overflow-hidden md:order-none md:col-span-7 md:aspect-auto">
          <ProjectCover
            project={project}
            locale={locale}
            sizes="(max-width: 768px) 100vw, 60vw"
            className="transition duration-700 ease-out group-hover:scale-[1.03]"
          />
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

      <ul className="space-y-6 md:space-y-10 md:pb-[10vh]">
        {visible.map((project, i) => (
          <DeckCard key={project.slug} project={project} index={i} total={visible.length} />
        ))}
      </ul>
    </section>
  );
}
