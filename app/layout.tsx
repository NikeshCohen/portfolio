import type { ReactNode } from "react";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "@/app/styles/globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import { Analytics } from "@vercel/analytics/react";

import Background from "@/components/global/Background";
import Header from "@/components/global/Header";
import Toaster from "@/components/global/Toaster";

import { cn } from "@/lib/utils";

import Footer from "./_sections/Footer";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio-site.com"),
  title: {
    default: "Nikesh Cohen | Full Stack Dev",
    template: "%s | Nikesh Cohen",
  },
  icons: [{ rel: "icon", url: "/icon.png" }],
  description:
    "Exploring the intersection of code, creativity, and problem solving. Building digital experiences that matter.",
  keywords:
    "software developer, web development, React, TypeScript, Node.js, creative coding, problem solving, digital experiences, Nikesh Cohen",
  authors: {
    name: "Nikesh Cohen",
    url: "https://github.com/nikescohen",
  },
  publisher: "Nikesh Cohen",
  openGraph: {
    title: "Nikesh Cohen | Full Stack Dev",
    description:
      "Exploring the intersection of code, creativity, and problem solving. Building digital experiences that matter.",
    url: "https://your-portfolio-site.com",
    type: "website",
    locale: "en",
    siteName: "Nikesh Cohen",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nikesccohen",
    creator: "@nikesccohen",
    title: "Nikesh Cohen | Full Stack Dev",
    description:
      "Exploring the intersection of code, creativity, and problem solving. Building digital experiences that matter.",
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
          "relative bg-background text-foreground antialiased",
        )}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Background />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
