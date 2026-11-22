import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "wdth"],
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
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${display.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-body text-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
