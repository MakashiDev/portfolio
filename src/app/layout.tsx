import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian Furr - Full Stack Developer",
  description: "Portfolio of Christian Furr, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-black text-white min-h-screen flex flex-row`}
      >
        <Navigation />
        <div className="z-10 w-full mt-16 md:mt-0">
          {children}
        </div>
        <div className="fixed inset-0 bg-gradient-to-br from-violet-900/20 via-black to-black -z-10" />
      </body>
    </html>
  );
}
