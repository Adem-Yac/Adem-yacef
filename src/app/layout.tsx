import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const body = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

const code = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${display.variable} ${body.variable} ${code.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-body text-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
