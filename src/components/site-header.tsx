"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { brandName } from "@/data/portfolio";

export function SiteHeader() {
  const { t, locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 overflow-x-clip border-b border-slate-200/80 bg-white/90 shadow-[0_4px_25px_rgba(28,110,234,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-4 lg:px-6">
        <Link href="/#accueil" className="group flex min-w-0 shrink items-center gap-2 sm:gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-gradient-to-tr from-blue-50 to-indigo-50 p-1.5 shadow-sm transition group-hover:scale-105 sm:size-10">
            <Image src="/logo.png" alt={`Logo ${brandName}`} width={32} height={32} className="h-full w-full object-contain" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="font-display truncate text-base font-bold leading-tight tracking-tight text-slate-900 sm:text-lg">
              {brandName}
            </span>
            <span className="font-code hidden text-[11px] font-semibold tracking-[0.08em] text-blue-600 uppercase sm:block">
              {t.role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="relative z-10 flex items-center rounded-full border border-slate-200 bg-slate-100 p-1">
            <button
              type="button"
              aria-label="Français"
              aria-pressed={locale === "fr"}
              onClick={() => setLocale("fr")}
              className={`cursor-pointer rounded-full px-2.5 py-1.5 font-code text-xs font-bold leading-none sm:px-3 ${
                locale === "fr" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              aria-label="English"
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
              className={`cursor-pointer rounded-full px-2.5 py-1.5 font-code text-xs font-bold leading-none sm:px-3 ${
                locale === "en" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-lg text-slate-700 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-2 lg:hidden">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
