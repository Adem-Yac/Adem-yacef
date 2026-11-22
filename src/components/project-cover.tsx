import Image from "next/image";
import type { Locale, Project } from "@/data/portfolio";

// Real screenshot when we have one; otherwise an illustrated device built from the project's own modules.
export function ProjectCover({ project, locale, sizes, className = "" }: { project: Project; locale: Locale; sizes: string; className?: string }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title[locale]}
        fill
        unoptimized
        sizes={sizes}
        className={`object-cover object-top ${className}`}
      />
    );
  }

  const modules = (project.modules?.[locale] ?? project.stack).slice(0, 6);
  const mobile = project.kind === "mobile";
  return (
    <div
      role="img"
      aria-label={project.title[locale]}
      className={`absolute inset-0 flex items-center justify-center overflow-hidden bg-[#1b2050] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div
        className={`flex flex-col gap-2 bg-white p-4 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] ${
          mobile ? "aspect-[9/18] h-[82%] rounded-[34px] ring-8 ring-[#0d1030]" : "aspect-[16/10] w-[78%] rounded-xl ring-8 ring-[#0d1030]"
        }`}
      >
        <div className="mx-auto mb-1 h-1.5 w-12 rounded-full bg-[#dfe4f5]" aria-hidden />
        <p className="text-base font-bold text-ink">{project.title[locale]}</p>
        <div className="h-14 shrink-0 rounded-xl bg-gradient-to-br from-[#2f6bff] to-[#8b5cf6]" aria-hidden />
        {modules.map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-lg bg-paper px-2.5 py-1.5 text-xs text-ink-soft">
            <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
