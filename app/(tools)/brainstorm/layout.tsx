import type { ReactNode } from "react";

export default function BrainstormLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container mx-auto py-8">
      <main>{children}</main>
    </div>
  );
}
