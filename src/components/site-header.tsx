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
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 lg:px-6">
        <Link href="/#accueil" className="flex min-w-0 items-center gap-2.5">
          <Image src="/logo.png" alt="" width={28} height={28} className="size-7 shrink-0 object-contain" />
          <span className="truncate font-display text-xl text-ink">{brandName}</span>
          <span className="hidden font-code text-[11px] text-muted xl:inline">— {t.role}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation">
          {t.nav.slice(1).map((item) => (
            <a key={item.href} href={`/${item.href}`} className="text-sm text-ink-soft transition-colors hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <div className="flex items-center font-code text-xs">
            {(["fr", "en"] as const).map((code, i) => (
              <span key={code} className="flex items-center">
                {i > 0 ? <span className="px-0.5 text-rule" aria-hidden>/</span> : null}
                <button
                  type="button"
                  aria-label={code === "fr" ? "Français" : "English"}
                  aria-pressed={locale === code}
                  onClick={() => setLocale(code)}
                  className={`cursor-pointer px-1.5 py-2 uppercase transition-colors ${
                    locale === code ? "text-ink underline underline-offset-4" : "text-muted hover:text-ink"
                  }`}
                >
                  {code}
                </button>
              </span>
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
        <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-rule bg-paper px-4 pb-4 lg:hidden" aria-label="Navigation">
          {t.nav.map((item, i) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 border-b border-rule py-3.5 font-display text-2xl text-ink"
            >
              <span className="font-code text-[11px] text-muted">{String(i).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
