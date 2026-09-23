import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { getProject, projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Adem Yac" };
  return {
    title: `${project.title.fr} | Adem Yac`,
    description: project.summary.fr,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  return (
    <main className="w-full bg-[#fafbff]">
      <ProjectDetail slug={slug} />
    </main>
  );
}
