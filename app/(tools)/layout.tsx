import type { ReactNode } from "react";

export default function BrainstormLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
