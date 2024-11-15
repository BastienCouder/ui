import React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { truncateOnWord } from "@/lib/utils/string";
import {
  JosephinFont,
  fontDisplay,
  geistMono,
  geistSans,
} from "@/styles/fonts";
import "@/styles/globals.css";
import { siteConfig } from "@/config";
import { Toaster } from "@/registry/ui/react/toaster";

const config = siteConfig.global;

export const metadata: Metadata = {
  title: { default: config.title, template: `%s - ${config.name}` },
  description: truncateOnWord(config.description, 148, true),
  keywords: config.keywords,
  authors: config.authors,
  /// creator: config.creator,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.url,
    title: config.title,
    description: truncateOnWord(config.description, 148, true),
    siteName: config.name,
    //  images: [config.thumbnail],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: truncateOnWord(config.description, 148, true),
    //images: [config.thumbnail],
    //creator: config.twitter.creator,
  },
  metadataBase: new URL(config.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans overflow-x-hidden bg-background text-foreground",
          geistMono.variable,
          geistSans.variable,
          fontDisplay.variable,
          JosephinFont.variable,
        )}
        suppressHydrationWarning
      >
        <Analytics />
        <Header />
        <Toaster />
        {children}
        {/* <Footer /> */}
        {/* <LayoutColumnsGrid /> */}
      </body>
    </html>
  );
}
