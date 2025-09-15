import type { ReactNode } from "react";

export default function IletisimLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-neutral-200 about-page-bg">
      {children}
    </div>
  );
}
