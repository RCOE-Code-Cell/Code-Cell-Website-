import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarUse from "@/components/Navbar";
import SessionWrapper from '@/components/SessionWrapper'
import UserIcon from '@/components/UserIcon';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CodeCell-RCOE",
  description: "Code Cell RCOE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="bg-grid-white/[0.08] min-h-screen relative">
        <SessionWrapper >
          <NavbarUse />
          
          <div className="absolute inset-0 flex items-center justify-center dark:bg-[#050A0F] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] z-0 pointer-events-none"></div>
          <div className="relative z-10 overflow-auto">
          
            {children}
          
            
          </div>
          </SessionWrapper>
        </main>
      </body>
    </html>
  );
} 