import type { ReactNode } from "react";

import Header from "@/components/global/Header";

import Footer from "./_sections/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
