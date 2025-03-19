import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/context/themeContext";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next News Portal",
  description: "using Next js ",
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
      // //  className="geist_e531dabc-module__QGiZLq__variable geist_mono_68a01160-module__YLcDdW__varia..."
      >
        <ThemeProvider>
        <Analytics/>
        <SpeedInsights/>
        <Navbar/>
        <main className=" min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-gray-900">{children}</main>
       <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
