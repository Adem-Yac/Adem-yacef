"use client";

import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { brandName, social } from "@/data/portfolio";

export function SiteFooter() {
  const { t, locale } = useLocale();
  const networks = [
    { href: social.github, label: "GitHub" },
    { href: social.linkedin, label: "LinkedIn" },
    { href: social.instagram, label: "Instagram" },
    { href: social.facebook, label: "Facebook" },
    { href: social.whatsapp, label: "WhatsApp" },
  ];

  return (
    <footer className="w-full bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:pt-20 lg:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-5xl font-light tracking-[-0.03em] sm:text-6xl">
              Adem<span className="italic text-[#e08a63]">Yac</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-paper/70">{t.footerNote}</p>
            <a href={`mailto:${social.email}`} className="link-underline mt-6 inline-block font-display text-xl italic">
              {social.email}
            </a>
          </div>
          <div className="md:col-span-3">
            <p className="font-code text-[11px] text-paper/50">{t.navTitle}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <a href={`/${item.href}`} className="text-paper/80 transition-colors hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="font-code text-[11px] text-paper/50">{t.socialsTitle}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {networks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-paper/80 transition-colors hover:text-paper"
                  >
                    {item.label} <ArrowUpRight size={13} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-2 border-t border-paper/15 pt-6 font-code text-[11px] text-paper/50 sm:flex-row">
          <span>{t.rights}</span>
          <span>{brandName} — {social.location[locale]}</span>
        </div>
      </div>
    </footer>
  );
}
