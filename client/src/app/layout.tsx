import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarUse from "@/components/Navbar";
import SessionWrapper from '@/components/SessionWrapper'
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from '@/app/context/Userinfo';
import GetUserInfo from '@/components/GetUserInfo'; 
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
      {/* <head>
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
      </head> */}
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <UserProvider>
        <main className="bg-grid-white/[0.08] min-h-screen relative">
        <SessionWrapper >
          <NavbarUse />
          <GetUserInfo/>
          <div className="absolute inset-0 flex items-center justify-center dark:bg-[#050A0F] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] z-0 pointer-events-none"></div>
          <div className="relative z-10 overflow-auto">
          
            {children}
          
            
          </div>
          </SessionWrapper>
        </main>
        <Toaster /> 
        </UserProvider>
      </body>
    </html>
  );
} 