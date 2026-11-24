"use client";

import Image from "next/image";
import { useLocale } from "@/components/locale-provider";
import { social } from "@/data/portfolio";

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
    <footer className="w-full bg-slab text-white">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:pt-20 lg:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Image src="/logo-mark-light.png" alt="AdemYac" width={56} height={56} className="size-14" />
            <p className="mt-5 max-w-sm text-base leading-7 text-white/70">{t.footerNote}</p>
            <a href={`mailto:${social.email}`} className="mt-6 inline-block text-2xl font-semibold break-all underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-[#9db7ff]">
              {social.email}
            </a>
          </div>
          <nav className="md:col-span-3" aria-label={t.navTitle}>
            <ul className="space-y-2 text-sm">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <a href={`/${item.href}`} className="text-white/75 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="space-y-2 text-sm md:col-span-3">
            {networks.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white/75 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p
          aria-hidden
          className="type-tight mt-16 font-display text-[clamp(4rem,19vw,15rem)] leading-[0.8] font-extrabold text-white/[0.07] select-none"
        >
          AdemYac
        </p>
        <div className="mt-6 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <span>{t.rights}</span>
          <span>{social.location[locale]}</span>
        </div>
      </div>
    </footer>
  );
}
