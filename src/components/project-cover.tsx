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

  const mobile = project.kind === "mobile";
  const modules = (project.modules?.[locale] ?? project.stack).slice(0, mobile ? 6 : 4);
  return (
    <div
      role="img"
      aria-label={project.title[locale]}
      className={`absolute inset-0 flex items-center justify-center overflow-hidden bg-[#1b2050] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        // Sizes inside the device are in cqh so the mock fits whatever the cover height (phone card or desktop stage).
        containerType: "size",
      }}
    >
      <div
        className={`flex flex-col gap-[1.6cqh] overflow-hidden bg-white p-[3cqh] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] ring-[1.6cqh] ring-[#0d1030] ${
          mobile ? "aspect-[9/18] h-[82cqh] rounded-[7cqh]" : "aspect-[16/10] h-[72cqh] rounded-[3cqh]"
        }`}
      >
        <div className="mx-auto h-[1.2cqh] w-[22%] shrink-0 rounded-full bg-[#dfe4f5]" aria-hidden />
        <p className="shrink-0 text-[4.4cqh] leading-tight font-bold text-ink">{project.title[locale]}</p>
        <div className="h-[11cqh] shrink-0 rounded-[2.4cqh] bg-gradient-to-br from-[#2f6bff] to-[#8b5cf6]" aria-hidden />
        {modules.map((item) => (
          <div key={item} className="flex shrink-0 items-center gap-[1.4cqh] truncate rounded-[1.6cqh] bg-paper px-[2cqh] py-[1cqh] text-[3cqh] leading-tight text-ink-soft">
            <span className="size-[1.6cqh] shrink-0 rounded-full bg-accent" aria-hidden />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
