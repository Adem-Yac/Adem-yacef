"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectCover } from "@/components/project-cover";
import { getProject } from "@/data/portfolio";

export function ProjectDetail({ slug }: { slug: string }) {
  const { locale, t } = useLocale();
  const router = useRouter();
  const project = getProject(slug);
  const shots = project?.gallery ?? [];
  const labels = project?.galleryLabels?.[locale] ?? [];
  const meta: { label: string; value: string }[] = [];
  if (project?.year) meta.push({ label: t.yearLabel, value: project.year });
  if (project) {
    meta.push({
      label: t.roleLabel,
      value: project.role?.[locale] ?? (project.kind === "mobile" ? t.kindMobile : t.kindWeb),
    });
  }

  if (!project) return null;

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push("/#projets");
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:py-16 lg:px-6">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={goBack}
          className="inline-flex cursor-pointer items-center gap-2 text-sm text-ink-soft transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} /> {t.back}
        </button>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
        <span>
          {project.category[locale]}
        </span>
        <span aria-hidden>,</span>
        <span>
          {project.kind === "mobile" ? t.kindMobile : t.kindWeb}
        </span>
      </div>
      <h1 className="type-tight font-display text-6xl leading-[0.9] font-extrabold text-ink sm:text-7xl lg:text-8xl">
        {project.title[locale]}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">{project.description[locale]}</p>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ink inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold"
          >
            {t.liveSite} <ArrowUpRight size={15} aria-hidden />
          </a>
        ) : null}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm font-medium text-ink"
          >
            {t.github}
          </a>
        ) : null}
      </div>

      {shots.length === 0 ? (
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[28px]">
          <ProjectCover project={project} locale={locale} sizes="100vw" />
        </div>
      ) : null}

      <ProjectGallery
        shots={shots}
        labels={labels}
        title={project.title[locale]}
        choosePhoto={t.choosePhoto}
        photoOf={t.photoOf}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-7">
          {project.context ? (
            <section>
              <h2 className="text-2xl font-bold text-ink">{t.contextLabel}</h2>
              <p className="mt-3 leading-7 text-ink-soft">{project.context[locale]}</p>
            </section>
          ) : (
            <section>
              <h2 className="text-2xl font-bold text-ink">{t.overview}</h2>
              <p className="mt-3 leading-7 text-ink-soft">{project.summary[locale]}</p>
            </section>
          )}
          {project.challenge ? (
            <section>
              <h2 className="text-2xl font-bold text-ink">{t.challengeLabel}</h2>
              <p className="mt-3 leading-7 text-ink-soft">{project.challenge[locale]}</p>
            </section>
          ) : null}
          {project.solution ? (
            <section>
              <h2 className="text-2xl font-bold text-ink">{t.solutionLabel}</h2>
              <p className="mt-3 leading-7 text-ink-soft">{project.solution[locale]}</p>
            </section>
          ) : null}
          <section>
            <h2 className="text-2xl font-bold text-ink">{t.highlights}</h2>
            <ul className="mt-4 space-y-2">
              {project.highlights[locale].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          {project.modules ? (
            <section>
              <h2 className="text-2xl font-bold text-ink">{t.modulesLabel}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.modules[locale].map((item) => (
                  <span key={item} className="rounded-full bg-card px-3 py-1 text-sm text-ink-soft">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ) : null}
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-[28px] bg-card p-6 sm:p-8 lg:sticky lg:top-28">
            <dl className="space-y-3">
              {meta.map((row) => (
                <div key={row.label}>
                  <dt className="text-sm text-muted">{row.label}</dt>
                  <dd className="mt-0.5 text-sm text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-8 text-sm font-normal text-muted">{t.stackLabel}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full bg-paper px-3 py-1 text-sm text-ink-soft">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-8 text-sm font-normal text-muted">{t.links}</h2>
            <div className="mt-3 space-y-2">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate text-sm text-ink underline-offset-4 hover:text-accent hover:underline"
                >
                  {project.href}
                </a>
              ) : null}
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate text-sm text-ink underline-offset-4 hover:text-accent hover:underline"
                >
                  {project.repo}
                </a>
              ) : null}
              {!project.href && !project.repo ? (
                <p className="text-sm text-muted">{t.noPublicLink}</p>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
