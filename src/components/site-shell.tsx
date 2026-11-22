"use client";

import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { ReactNode } from "react";
import { SignalDefs } from "@/components/wave-underline";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <SignalDefs />
      <SiteHeader />
      <div className="min-h-full overflow-x-clip pt-16 sm:pt-20">{children}</div>
      <SiteFooter />
    </LocaleProvider>
  );
}
