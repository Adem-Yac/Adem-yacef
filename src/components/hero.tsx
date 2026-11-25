"use client";

import { useLocale } from "@/components/locale-provider";
import { CodeCard } from "@/components/code-card";
import { SignalWave } from "@/components/signal-wave";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useLocale();

  return (
    <section id="accueil" className="overflow-x-clip pt-8 pb-16 sm:pt-12 sm:pb-24">
      {/* Availability badge: top right on desktop, in the empty space beside "Adem" (balances "Yac" below).
          Gradient ring = the logo / code-card gradient; green dot = the site's "ready" green. */}
      <div className="mx-auto flex max-w-7xl px-4 lg:justify-end lg:px-6">
        <a
          href="#contact"
          className="group rounded-full bg-gradient-to-r from-[#2f6bff] to-[#8b5cf6] p-[1.5px] shadow-[0_16px_36px_-18px_rgb(47_107_255/0.6)] transition-shadow hover:shadow-[0_18px_40px_-16px_rgb(139_92_246/0.7)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span className="flex items-center gap-3 rounded-full bg-card py-2.5 pr-4 pl-4 sm:pr-5">
            <span className="relative flex size-2.5 shrink-0" aria-hidden>
              <span className="absolute inline-flex size-full rounded-full bg-[#28c840] opacity-70 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[#28c840]" />
            </span>
            <span className="text-[15px] font-semibold whitespace-nowrap text-ink sm:text-lg">{t.available}</span>
            <ArrowRight
              aria-hidden
              className="hidden size-4 text-accent transition-transform group-hover:translate-x-0.5 sm:block"
              strokeWidth={2.4}
            />
          </span>
        </a>
      </div>

      <h1 className="mt-4" aria-label={`AdemYac, ${t.headlineRole}`}>
        <span aria-hidden className="type-tight mx-auto block max-w-7xl px-4 font-display text-[clamp(5rem,19vw,14.5rem)] leading-[0.78] font-extrabold text-ink lg:px-6">
          Adem
        </span>
        <SignalWave className="-my-[clamp(0.5rem,2vw,1.5rem)] block h-[clamp(4.5rem,11vw,9rem)] w-full" />
        <span aria-hidden className="type-tight mx-auto block max-w-7xl px-4 text-right font-display text-[clamp(5rem,19vw,14.5rem)] leading-[0.78] font-extrabold text-ink lg:px-6">
          Yac
        </span>
      </h1>

      <div className="mx-auto mt-12 grid max-w-7xl gap-10 px-4 sm:mt-16 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-6">
          <p className="text-2xl font-semibold text-ink sm:text-3xl">{t.headlineRole}</p>
          <p className="mt-4 max-w-[34rem] text-lg leading-8 text-ink-soft">{t.heroLead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href="#contact" className="btn-ink inline-flex rounded-full px-7 py-3.5 text-base font-semibold">
              {t.ctaProject}
            </a>
            <a href="#projets" className="link-underline text-base font-medium text-ink">
              {t.projectsTitle}
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <CodeCard />
        </div>
      </div>
    </section>
  );
}
