"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Globe } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { ProjectGallery } from "@/components/project-gallery";
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
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-blue-400 hover:text-blue-700"
        >
          <ArrowLeft size={16} /> {t.back}
        </button>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-0.5 font-code text-xs font-bold text-blue-700">
          {project.category[locale]}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 font-code text-[10px] font-semibold uppercase text-slate-500">
          {project.kind === "mobile" ? t.kindMobile : t.kindWeb}
        </span>
      </div>
      <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {project.title[locale]}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{project.description[locale]}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold text-white"
          >
            <Globe size={16} /> {t.liveSite}
          </a>
        ) : null}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-400"
          >
            <Code2 size={16} /> {t.github} <ArrowUpRight size={14} />
          </a>
        ) : null}
      </div>

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
              <h2 className="font-display text-2xl font-bold text-slate-900">{t.contextLabel}</h2>
              <p className="mt-3 leading-7 text-slate-600">{project.context[locale]}</p>
            </section>
          ) : (
            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">{t.overview}</h2>
              <p className="mt-3 leading-7 text-slate-600">{project.summary[locale]}</p>
            </section>
          )}
          {project.challenge ? (
            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">{t.challengeLabel}</h2>
              <p className="mt-3 leading-7 text-slate-600">{project.challenge[locale]}</p>
            </section>
          ) : null}
          {project.solution ? (
            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">{t.solutionLabel}</h2>
              <p className="mt-3 leading-7 text-slate-600">{project.solution[locale]}</p>
            </section>
          ) : null}
          <section>
            <h2 className="font-display text-2xl font-bold text-slate-900">{t.highlights}</h2>
            <ul className="mt-4 space-y-2">
              {project.highlights[locale].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          {project.modules ? (
            <section>
              <h2 className="font-display text-2xl font-bold text-slate-900">{t.modulesLabel}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.modules[locale].map((item) => (
                  <span key={item} className="rounded-md border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ) : null}
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <dl className="space-y-3">
              {meta.map((row) => (
                <div key={row.label}>
                  <dt className="font-code text-[11px] font-semibold tracking-wide text-slate-400 uppercase">{row.label}</dt>
                  <dd className="mt-0.5 text-sm font-medium text-slate-800">{row.value}</dd>
                </div>
              ))}
            </dl>
            <h2 className="mt-6 font-display text-lg font-bold text-slate-900">{t.stackLabel}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 font-code text-xs font-medium text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-6 font-display text-lg font-bold text-slate-900">{t.links}</h2>
            <div className="mt-3 space-y-2">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate font-code text-xs font-semibold text-blue-600 hover:underline"
                >
                  {project.href}
                </a>
              ) : null}
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate font-code text-xs font-semibold text-blue-600 hover:underline"
                >
                  {project.repo}
                </a>
              ) : null}
              {!project.href && !project.repo ? (
                <p className="text-sm text-slate-500">{t.noPublicLink}</p>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
