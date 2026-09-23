"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

export function SiteHeader() {
  const { t, locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-[0_4px_25px_rgba(28,110,234,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
        <Link href="/#accueil" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-gradient-to-tr from-blue-50 to-indigo-50 p-1.5 shadow-sm transition group-hover:scale-105">
            <Image src="/logo.png" alt="Logo Adem Yacef" width={32} height={32} className="h-full w-full object-contain" />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-base font-bold leading-tight tracking-tight text-slate-900 sm:text-lg">
              Adem Yacef
            </span>
            <span className="font-code text-[11px] font-semibold tracking-[0.08em] text-blue-600 uppercase">
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

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-slate-200/80 bg-slate-100 p-1 shadow-inner">
            <button
              type="button"
              aria-label="Français"
              onClick={() => setLocale("fr")}
              className={`rounded-full px-2 py-0.5 font-code text-xs font-bold leading-none ${
                locale === "fr"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                  : "font-medium text-slate-600 hover:text-slate-900"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              aria-label="English"
              onClick={() => setLocale("en")}
              className={`rounded-full px-2 py-0.5 font-code text-xs font-bold leading-none ${
                locale === "en"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                  : "font-medium text-slate-600 hover:text-slate-900"
              }`}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
