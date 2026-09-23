import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <SiteHeader />
      <div className="min-h-full pt-20">{children}</div>
      <SiteFooter />
    </LocaleProvider>
  );
}
