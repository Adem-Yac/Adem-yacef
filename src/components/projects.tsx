"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { ProjectCover } from "@/components/project-cover";
import { SectionHead } from "@/components/section-head";
import { projects, type Project, type ProjectKind } from "@/data/portfolio";

// Showcase: a project index on the left drives one large stage on the right (desktop).
// On small screens it becomes a horizontal swipe carousel.

function Stage({ items, active }: { items: Project[]; active: number }) {
  const { locale, t } = useLocale();
  const project = items[active];
  if (!project) return null;

  return (
    <div className="lg:sticky lg:top-28">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] bg-ink">
        {items.map((item, i) => (
          <div
            key={item.slug}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition-opacity duration-500 ease-out ${i === active ? "opacity-100" : "opacity-0"}`}
          >
            <ProjectCover project={item} locale={locale} sizes="(max-width: 1024px) 100vw, 60vw" />
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <p className="text-sm text-muted">
            {project.kind === "web" ? t.kindWeb : t.kindMobile}, {project.category[locale].toLowerCase()}
            {project.year ? `, ${project.year}` : ""}
          </p>
          <p className="mt-2 max-w-xl text-lg leading-8 text-ink-soft">{project.summary[locale]}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <li key={tag} className="rounded-full bg-card px-3 py-1 text-sm text-ink-soft">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`/projets/${project.slug}`}
          className="btn-ink inline-flex justify-center rounded-full px-6 py-3 text-base font-semibold"
        >
          {t.live}
        </Link>
      </div>
    </div>
  );
}

function SwipeCard({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  return (
    <li className="w-[84%] shrink-0 snap-center sm:w-[60%]">
      <Link href={`/projets/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-ink">
          <ProjectCover project={project} locale={locale} sizes="85vw" />
        </div>
        <p className="mt-4 text-sm text-muted">
          {project.kind === "web" ? t.kindWeb : t.kindMobile}, {project.category[locale].toLowerCase()}
        </p>
        <h3 className="type-tight mt-1 font-display text-4xl leading-none font-extrabold text-ink">{project.title[locale]}</h3>
        <p className="mt-3 text-base leading-7 text-ink-soft">{project.summary[locale]}</p>
        <span className="mt-3 inline-block text-base font-semibold text-ink underline decoration-2 underline-offset-[6px]">{t.live}</span>
      </Link>
    </li>
  );
}

export function Projects() {
  const { locale, t } = useLocale();
  const [filter, setFilter] = useState<"all" | ProjectKind>("all");
  const [active, setActive] = useState(0);
  const web = useMemo(() => projects.filter((p) => p.kind === "web"), []);
  const mobile = useMemo(() => projects.filter((p) => p.kind === "mobile"), []);
  const visible = filter === "web" ? web : filter === "mobile" ? mobile : [...web, ...mobile];
  const current = Math.min(active, visible.length - 1);

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
              onClick={() => {
                setFilter(key);
                setActive(0);
              }}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === key ? "bg-card text-ink shadow-[0_1px_3px_rgb(18_22_58/0.12)]" : "text-muted hover:text-ink"
              }`}
            >
              {label} <span className="text-muted">{count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop showcase */}
      <div className="hidden gap-10 lg:grid lg:grid-cols-12">
        <ol className="lg:col-span-4">
          {visible.map((project, i) => {
            const on = i === current;
            return (
              <li key={project.slug}>
                <button
                  type="button"
                  aria-pressed={on}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group flex w-full cursor-pointer items-baseline gap-4 border-t border-rule py-4 text-left transition-colors ${
                    on ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span className="w-6 shrink-0 text-sm tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1">
                    <span className={`type-tight block font-display text-3xl leading-tight font-extrabold transition-transform duration-300 ${on ? "translate-x-2" : ""}`}>
                      {project.title[locale]}
                    </span>
                    <span className="block text-sm">{project.kind === "web" ? t.kindWeb : t.kindMobile}</span>
                  </span>
                  <span
                    aria-hidden
                    className={`size-2.5 shrink-0 self-center rounded-full transition-colors ${on ? "bg-accent" : "bg-transparent"}`}
                  />
                </button>
              </li>
            );
          })}
        </ol>
        <div className="lg:col-span-8">
          <Stage items={visible} active={current} />
        </div>
      </div>

      {/* Mobile and tablet: swipe carousel */}
      <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] lg:hidden">
        {visible.map((project) => (
          <SwipeCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}
