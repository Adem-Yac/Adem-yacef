"use client";

import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { brandName, social } from "@/data/portfolio";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/brand-icons";

export function SiteFooter() {
  const { t } = useLocale();
  const networks = [
    { href: social.instagram, label: "Instagram", icon: InstagramIcon },
    { href: social.facebook, label: "Facebook", icon: FacebookIcon },
    { href: social.linkedin, label: "LinkedIn", icon: LinkedInIcon },
    { href: social.whatsapp, label: "WhatsApp", icon: WhatsAppIcon },
  ];

  return (
    <footer className="w-full border-t border-slate-200 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16 lg:px-6">
        <div className="mb-12 grid grid-cols-1 items-start gap-12 md:grid-cols-12">
          <div className="flex flex-col items-start gap-4 md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-gradient-to-tr from-blue-50 to-indigo-50 p-1.5">
                <Image src="/logo.png" alt="" width={32} height={32} className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="font-display text-lg font-bold leading-tight text-slate-900">{brandName}</p>
                <p className="font-code text-[11px] font-semibold tracking-wider text-blue-600 uppercase">
                  {t.headlineRole}
                </p>
              </div>
            </div>
            <p className="max-w-md leading-7 text-slate-600">{t.footerNote}</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 font-code text-xs font-semibold text-emerald-800 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.available}
            </div>
          </div>
          <div className="flex flex-col gap-2 md:col-span-3">
            <span className="mb-1 font-code text-[11px] font-bold tracking-wider text-slate-900 uppercase">
              {t.navTitle}
            </span>
            {t.nav.map((item) => (
              <a key={item.href} href={`/${item.href}`} className="text-sm text-slate-600 hover:text-blue-600">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 md:col-span-4">
            <span className="mb-1 font-code text-[11px] font-bold tracking-wider text-slate-900 uppercase">
              {t.socialsTitle}
            </span>
            {networks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800 shadow-sm hover:border-blue-300 hover:text-blue-700"
              >
                <span className="inline-flex items-center gap-2 font-code text-xs font-semibold">
                  <item.icon size={14} /> {item.label}
                </span>
                <ArrowUpRight size={14} />
              </a>
            ))}
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800 shadow-sm hover:border-indigo-300 hover:text-indigo-600"
            >
              <span className="font-code text-xs font-semibold">GitHub</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href={`mailto:${social.email}`}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800 shadow-sm hover:border-violet-300"
            >
              <span className="inline-flex items-center gap-2 font-code text-xs font-semibold">
                <Mail size={14} className="text-violet-600" /> {social.email}
              </span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <span className="font-code text-xs font-medium text-slate-500">{t.rights}</span>
        </div>
      </div>
    </footer>
  );
}
