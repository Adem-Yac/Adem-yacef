"use client";

import { useLocale } from "@/components/locale-provider";
import { social } from "@/data/portfolio";

// Hero code window: the developer profile written as a TS object, with the stack floating around it.
const S = ({ children }: { children: string }) => <span className="text-[#7ee2b8]">&quot;{children}&quot;</span>;

export function CodeCard() {
  const { t, locale } = useLocale();

  return (
    <div className="relative mx-auto w-full max-w-[34rem] pt-4 pb-5 lg:mx-0">
      <div className="rounded-[22px] bg-gradient-to-br from-[#2f6bff] to-[#8b5cf6] p-[3px] shadow-[0_30px_60px_-28px_rgb(47_107_255/0.65)]">
        <div className="overflow-hidden rounded-[19px] bg-[#0f1330]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#0a0d24] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#ff5f57]" aria-hidden />
              <span className="size-3 rounded-full bg-[#febc2e]" aria-hidden />
              <span className="size-3 rounded-full bg-[#28c840]" aria-hidden />
              <span className="ml-2 font-code text-sm text-white/80">ademyac.ts</span>
            </div>
            <span className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-code text-xs text-[#7ee2b8] sm:inline">
              {t.ready}
            </span>
          </div>
          <pre className="overflow-x-auto p-4 font-code text-[12px] leading-relaxed text-white/85 sm:p-5 sm:text-[13.5px]">
            <code>
              <span className="text-[#b9a4ff]">const</span> <span className="text-[#7aa2ff]">developer</span> = {"{"}
              {"\n"}  name: <S>AdemYac</S>,
              {"\n"}  role: <S>{t.heroRoleCode}</S>,
              {"\n"}  location: <S>{social.location[locale]}</S>,
              {"\n"}  stack: {"{"}
              {"\n"}    mobile: [<S>Flutter</S>, <S>Dart</S>],
              {"\n"}    web: [<S>React</S>, <S>Next.js</S>],
              {"\n"}    backend: [<S>Laravel</S>, <S>PHP</S>],
              {"\n"}    database: [<S>MySQL</S>, <S>Firebase</S>]
              {"\n"}  {"}"}
              {"\n"}{"}"};
            </code>
          </pre>
        </div>
      </div>
      {/* Floating stack chips, kept inside the card's box so they never overflow on phones. */}
      <span className="absolute top-0 right-3 rounded-full bg-card px-4 py-1.5 font-code text-xs font-semibold text-ink shadow-[0_8px_20px_-8px_rgb(18_22_58/0.35)] sm:right-auto sm:left-[42%] sm:text-sm">
        Flutter / Dart
      </span>
      <span className="absolute top-1/2 right-0 hidden -translate-y-1/2 rounded-full bg-card px-4 py-1.5 font-code text-sm font-semibold text-ink shadow-[0_8px_20px_-8px_rgb(18_22_58/0.35)] sm:block lg:-right-4">
        React / Next.js
      </span>
      <span className="absolute bottom-0 left-3 rounded-full bg-card px-4 py-1.5 font-code text-xs font-semibold text-ink shadow-[0_8px_20px_-8px_rgb(18_22_58/0.35)] sm:left-6 sm:text-sm">
        Laravel / PHP
      </span>
    </div>
  );
}
