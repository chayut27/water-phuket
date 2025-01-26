import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/navigations/Navbar";

import { Kanit } from 'next/font/google'

const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kanit'
})

export const metadata: Metadata = {
  title: "รถน้ำภูเก็ต (น้ำบ่อบาดาล เจ้าใหญ่)",
  description: "บริการรถน้ำภูเก็ต",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} font-kanit  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
