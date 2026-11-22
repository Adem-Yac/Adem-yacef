"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { SectionHead } from "@/components/section-head";
import { WaveUnderline } from "@/components/wave-underline";
import { projects, type Project, type ProjectKind } from "@/data/portfolio";

function ProjectRow({ project }: { project: Project }) {
  const { locale, t } = useLocale();

  return (
    <li className="border-t border-rule">
      <Link
        href={`/projets/${project.slug}`}
        className="group grid gap-5 py-8 sm:grid-cols-12 sm:items-center sm:gap-8 sm:py-10"
      >
        <div className="sm:col-span-7">
          <p className="text-sm text-muted">
            {project.kind === "web" ? t.kindWeb : t.kindMobile}, {project.category[locale].toLowerCase()}
          </p>
          <h3 className="type-tight mt-1 inline-block font-display text-4xl leading-none font-bold text-ink sm:text-6xl">
            {project.title[locale]}
            <WaveUnderline className="mt-2" />
          </h3>
          <p className="mt-4 max-w-lg text-base leading-7 text-ink-soft">{project.summary[locale]}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <li key={tag} className="rounded-full border border-rule px-3 py-1 text-sm text-ink-soft">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative order-first aspect-[16/10] overflow-hidden rounded-[22px] bg-ink sm:order-none sm:col-span-5">
          <Image
            src={project.image}
            alt={project.title[locale]}
            fill
            unoptimized
            className="object-cover object-top transition duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 40vw"
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

      <ul className="border-b border-rule">
        {visible.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}
