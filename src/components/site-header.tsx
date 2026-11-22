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
    <header className="fixed top-0 right-0 left-0 z-50 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 lg:px-6">
        <Link href="/#accueil" className="flex min-w-0 items-center gap-2.5">
          <Image src="/logo.png" alt="" width={36} height={36} className="size-9 shrink-0 rounded-[10px] object-contain" />
          <span className="truncate text-xl font-bold tracking-tight text-ink">{brandName}</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-card/70 p-1 lg:flex" aria-label="Navigation">
          {t.nav.slice(1).map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-paper hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <div className="flex items-center rounded-full bg-card/70 p-1 text-sm">
            {(["fr", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                aria-label={code === "fr" ? "Français" : "English"}
                aria-pressed={locale === code}
                onClick={() => setLocale(code)}
                className={`cursor-pointer rounded-full px-3 py-1.5 font-medium transition-colors ${
                  locale === code ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center text-ink lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto bg-paper px-4 pb-6 lg:hidden" aria-label="Navigation">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              onClick={() => setOpen(false)}
              className="type-tight block py-2 font-display text-4xl font-bold text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
