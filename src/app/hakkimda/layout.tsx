// app/hakkimizda/layout.tsx
import type { ReactNode } from "react";
import AboutBg from "@/components/AboutBg";

export default function HakkimizdaLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-neutral-200">
      <AboutBg />
      {children}
    </div>
  );
}
