import type { ReactNode } from "react";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { ThemeProvider } from "@/providers/themeProvider";

import { cn } from "@/lib/utils";

import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio-site.com"),
  title: {
    default: "Nikesh Cohen | Full-Stack Developer Portfolio",
    template: "%s | Nikesh Cohen",
  },
  description: "",
  keywords:
    "Full-stack developer, portfolio, web development, React, Tailwind CSS, Node.js, TypeScript, JavaScript, developer projects",
  authors: {
    name: "Nikesh Cohen",
    url: "https://github.com/nikescohen",
  },
  publisher: "Nikesh Cohen",
  openGraph: {
    title: "Nikesh Cohen | Full-Stack Developer Portfolio",
    description: "",
    url: "https://your-portfolio-site.com",
    type: "website",
    locale: "en",
    siteName: "Nikesh Cohen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nikesccohen",
    creator: "@nikesccohen",
    title: "Nikesh Cohen | Full-Stack Developer Portfolio",
    description: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          font.className,
          "bg-background text-foreground antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
