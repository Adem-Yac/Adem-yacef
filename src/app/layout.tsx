import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "wdth"],
});

// Code font, only used by the hero code window.
const code = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "AdemYac | Développeur Web & Mobile",
  description:
    "Portfolio d'AdemYac, développeur web et mobile : Flutter, Next.js, Laravel. Applications, e-commerce, livraison et SIRH.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="fr"
      data-theme="light"
      suppressHydrationWarning
      className={`${display.variable} ${code.variable} h-full antialiased`}
    >
      <head>
        {/* Light by default; dark only if the visitor chose it with the toggle (saved). Runs before first paint, so no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark")t="light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full bg-paper font-body text-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
