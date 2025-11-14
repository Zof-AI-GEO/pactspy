import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `PactSpy`,
  description: `Automate Your Software Testing using ZofAI`,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://pactspy.com"
  ),
  openGraph: {
    title: "PactSpy",
    description: "Automate Your Software Testing using ZofAI",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://pactspy.com",
    siteName: "PactSpy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PactSpy",
    description: "Automate Your Software Testing using ZofAI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          inter.className,
          "bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/10 dark:to-slate-900"
        )}
      >
        <div className="min-h-screen relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300/15 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl animate-float animation-delay-400"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-300/15 rounded-full blur-3xl animate-float animation-delay-200"></div>
          </div>
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
