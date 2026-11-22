"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { ProjectCover } from "@/components/project-cover";
import { SectionHead } from "@/components/section-head";
import { projects, type Project, type ProjectKind } from "@/data/portfolio";

// Bento of real devices: web projects sit in a wide browser frame, mobile projects in a tall phone.
// The frame holds a full-length screenshot that scrolls by itself when the card is hovered or focused.

function Screen({ project }: { project: Project }) {
  const { locale } = useLocale();
  if (project.tile) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.tile}
        alt={project.title[locale]}
        loading="lazy"
        draggable={false}
        className="absolute inset-x-0 top-0 min-h-full w-full select-none object-cover object-top transition-transform duration-[4500ms] ease-in-out group-hover:translate-y-[calc(-100%+100cqh)] group-focus-visible:translate-y-[calc(-100%+100cqh)] motion-reduce:transform-none"
      />
    );
  }
  return <ProjectCover project={project} locale={locale} sizes="(max-width: 640px) 100vw, 50vw" />;
}

function Device({ project }: { project: Project }) {
  if (project.kind === "mobile") {
    return (
      <div className="relative mx-auto aspect-[9/19] h-full rounded-[30px] bg-[#0d1030] p-[6px] shadow-[0_24px_40px_-22px_rgb(18_22_58/0.6)]">
        <div className="relative h-full overflow-hidden rounded-[24px] bg-white [container-type:size]">
          <Screen project={project} />
        </div>
      </div>
    );
  }
  // Only show a real domain; projects without a public URL show their name instead.
  const host = project.href ? new URL(project.href).host : project.title.fr;
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_24px_40px_-22px_rgb(18_22_58/0.5)] ring-1 ring-rule">
      <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-rule bg-[#f6f7fc] px-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="mx-auto truncate rounded-md bg-white px-3 py-0.5 text-xs text-muted ring-1 ring-rule">{host}</span>
      </div>
      <div className="relative flex-1 overflow-hidden [container-type:size]">
        <Screen project={project} />
      </div>
    </div>
  );
}

function Tile({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const web = project.kind === "web";

  return (
    <li className={web ? "sm:col-span-2" : undefined}>
      <Link
        href={`/projets/${project.slug}`}
        className="group flex h-full flex-col rounded-[28px] border border-rule bg-card p-3 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_22px_44px_-26px_rgb(18_22_58/0.4)]"
      >
        <div className="h-[300px] rounded-[20px] bg-paper-2 p-5 sm:h-[340px]">
          <Device project={project} />
        </div>
        <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
          <p className="text-sm text-muted">
            {web ? t.kindWeb : t.kindMobile}, {project.category[locale].toLowerCase()}
          </p>
          <h3 className="mt-1 text-2xl font-bold text-ink">{project.title[locale]}</h3>
          <p className="mt-2 line-clamp-2 text-base leading-7 text-ink-soft">{project.summary[locale]}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-base font-semibold text-accent-deep">
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
  // Interleave one wide web tile with mobile tiles so the bento packs tightly.
  const all = useMemo(() => {
    const out: Project[] = [];
    const m = [...mobile];
    for (const w of web) out.push(w, ...m.splice(0, 2));
    return [...out, ...m];
  }, [web, mobile]);
  const visible = filter === "web" ? web : filter === "mobile" ? mobile : all;

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

      <ul className="grid grid-flow-dense gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((project) => (
          <Tile key={project.slug} project={project} />
        ))}
        <li className="sm:col-span-2">
          <a
            href="#contact"
            className="group flex h-full min-h-[220px] flex-col justify-between rounded-[28px] bg-ink p-8 text-white transition-colors hover:bg-[#1b2050]"
          >
            <div>
              <p className="type-tight font-display text-4xl leading-none font-extrabold sm:text-5xl">{t.contactTitle}</p>
              <p className="mt-4 max-w-md text-base leading-7 text-white/70">{t.contactLead}</p>
            </div>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-ink">
              {t.ctaProject}
              <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
