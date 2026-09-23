"use client";

import {
  Code2,
  Mail,
  MapPin,
  Rocket,
  User,
} from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { social } from "@/data/portfolio";
import { LinkedInIcon } from "@/components/brand-icons";

export function Hero() {
  const { t, locale } = useLocale();

  return (
    <section id="accueil" className="relative mx-auto max-w-7xl px-4 py-24 lg:px-6 lg:py-28">
      <div className="pointer-events-none absolute top-10 left-1/4 -z-10 h-96 w-96 rounded-full bg-blue-100/70 blur-[130px]" />
      <div className="pointer-events-none absolute top-48 right-10 -z-10 h-96 w-96 rounded-full bg-violet-100/50 blur-[140px]" />
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start space-y-6 lg:col-span-7">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-bold tracking-wider text-blue-700 uppercase shadow-sm font-code">
            <span>{t.kicker}</span>
            <span className="text-slate-300">•</span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold tracking-normal text-emerald-700 normal-case">
              {t.available}
            </span>
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Adem <span className="gradient-text">Yacef</span>
          </h1>
          <p className="font-display text-2xl font-bold text-slate-800 sm:text-[28px]">
            {t.headlineRole}
          </p>
          <p className="max-w-xl text-lg leading-7 text-slate-600">{t.heroLead}</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 rounded-2xl px-8 py-2.5 font-display text-sm font-bold text-white shadow-[0_10px_25px_rgba(28,110,234,0.25)]"
            >
              <Rocket size={16} /> {t.ctaProject}
            </a>
            <a
              href="#a-propos"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 py-2.5 font-display text-sm font-semibold text-slate-700 shadow-sm hover:border-blue-400 hover:bg-slate-50"
            >
              <User size={16} className="text-blue-600" /> {t.ctaProfile}
            </a>
          </div>
          <div className="grid w-full grid-cols-1 gap-2 border-t border-slate-200/80 pt-6 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-4 py-2 font-code text-xs text-slate-700 shadow-sm">
              <MapPin size={16} className="text-violet-600" />
              {social.location[locale]}
            </div>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-4 py-2 font-code text-xs text-slate-700 shadow-sm hover:border-blue-300 hover:text-blue-600"
            >
              <Code2 size={16} className="text-blue-600" />
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-4 py-2 font-code text-xs text-slate-700 shadow-sm hover:border-blue-300 hover:text-blue-600"
            >
              <span className="text-blue-600">
                <LinkedInIcon size={16} />
              </span>
              LinkedIn
            </a>
            <a
              href={`mailto:${social.email}`}
              className="flex items-center gap-2 truncate rounded-xl border border-slate-200/80 bg-white px-4 py-2 font-code text-xs text-slate-700 shadow-sm hover:border-violet-300"
            >
              <Mail size={16} className="text-violet-600" />
              {social.email}
            </a>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center lg:col-span-5">
          <div className="pointer-events-none absolute -z-10 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500/25 via-violet-500/20 to-indigo-500/25 blur-3xl" />
          <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-600 p-1 shadow-[0_12px_35px_rgba(28,110,234,0.25)]">
            <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="inline-block h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="inline-block h-3 w-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-code text-xs text-slate-300">adem_yacef.ts</span>
                </div>
                <span className="rounded-md border border-slate-700/60 bg-slate-800/80 px-2 py-0.5 font-code text-xs text-emerald-400">
                  {t.ready}
                </span>
              </div>
              <pre className="overflow-x-auto p-4 font-code text-xs leading-relaxed text-slate-300">
                <span className="font-semibold text-violet-300">const</span>{" "}
                <span className="font-semibold text-blue-400">developer</span> = {"{"}
                {"\n"}  name: <span className="text-emerald-300">&quot;Adem Yacef&quot;</span>,
                {"\n"}  role: <span className="text-emerald-300">&quot;{t.heroRoleCode}&quot;</span>,
                {"\n"}  location: <span className="text-emerald-300">&quot;{social.location[locale]}&quot;</span>,
                {"\n"}  stack: {"{"}
                {"\n"}    mobile: [<span className="text-emerald-300">&quot;Flutter&quot;</span>, <span className="text-emerald-300">&quot;Dart&quot;</span>],
                {"\n"}    web: [<span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Next.js&quot;</span>],
                {"\n"}    backend: [<span className="text-emerald-300">&quot;Laravel&quot;</span>, <span className="text-emerald-300">&quot;PHP&quot;</span>],
                {"\n"}    database: [<span className="text-emerald-300">&quot;MySQL&quot;</span>, <span className="text-emerald-300">&quot;Firebase&quot;</span>]
                {"\n"}  {"}"}
                {"\n"}{"}"};
              </pre>
            </div>
          </div>
          <div className="absolute -top-2 right-2 rounded-full border border-slate-200/80 bg-white/95 px-4 py-1 font-code text-xs font-bold text-slate-800 shadow-md backdrop-blur">
            Flutter / Dart
          </div>
          <div className="absolute top-1/2 -right-2 hidden -translate-y-1/2 rounded-full border border-slate-200/80 bg-white/95 px-4 py-1 font-code text-xs font-bold text-slate-800 shadow-md sm:block">
            React / Next.js
          </div>
          <div className="absolute -bottom-2 left-2 rounded-full border border-slate-200/80 bg-white/95 px-4 py-1 font-code text-xs font-bold text-slate-800 shadow-md">
            Laravel / PHP
          </div>
        </div>
      </div>
    </section>
  );
}
