import type { Metadata } from "next";
import { Noto_Serif, Manrope, Ephesis } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";
import LocaleHtmlLang from "./components/LocaleHtmlLang";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ephesis = Ephesis({
  variable: "--font-ephesis",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Royal cut by Barbosu",
  description: "Kingosgade 3, 1623 København",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body 
        className={`${notoSerif.variable} ${manrope.variable} ${ephesis.variable} font-body-md text-on-background antialiased`}
        suppressHydrationWarning
      >
        <LocaleHtmlLang />
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        {children}
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}

