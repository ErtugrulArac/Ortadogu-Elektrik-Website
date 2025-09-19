// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar"
import ContactDock from "@/components/wptel/ContactDock";
import PageLoader from "@/components/loading/index";
import Nav from "@/components/nav/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Prod'da .env'e NEXT_PUBLIC_SITE_URL=https://alanadinin.com ekleyebilirsin */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  /** ✅ OG/Twitter mutlak URL çözümü için */
  metadataBase: new URL(SITE_URL),
  title: "Ortadoğu Elektrik",
  description: "Ortadoğu Elektrik – Güvenli ve Verimli Elektrik Çözümleri",
};

/** ✅ viewport/themeColor ayrı export edilmeli */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <PageLoader logoSrc="/ortadogu-logo.webp" brand="Ortadoğu Elektrik" />

        <header className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <Nav />
        </header>

        {/* <Navbar /> */}
        {children}

        <ContactDock
          whatsapp={{ number: "905314873594", message: "Merhaba, bilgi almak istiyorum." }}
          phone={{ number: "+905314873594", label: "Hızlı İletişim" }}
          position="br" // "bl" | "tr" | "tl"
        />
      </body>
    </html>
  );
}
