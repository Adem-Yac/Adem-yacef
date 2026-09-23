"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { LocaleProvider } from "@/components/locale-provider";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { Tools } from "@/components/tools";
import { TrackRecord } from "@/components/track-record";

export function PortfolioApp() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <main className="w-full overflow-hidden bg-[#fafbff] pt-20">
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <TrackRecord />
        <Contact />
      </main>
      <SiteFooter />
    </LocaleProvider>
  );
}
