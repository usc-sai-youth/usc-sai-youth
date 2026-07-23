import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#05071A',
  viewportFit: 'cover',
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "青年 AI 實戰養成班",
  description: "實踐大學青年 AI 實戰養成班報名網站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden scroll-smooth`}
    >
      <body className="min-h-full flex flex-col w-screen">
        <Navbar />
        <header className="w-full">
        </header>
        <main className="flex flex-col w-full justify-center">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        <a
          href="https://forms.gle/GshWTTKFPMVxH7Bx7"
          target="_blank"
          rel="noopener noreferrer"
          className="apply-btn lg:hidden fixed bottom-5 right-5 z-50 px-6 py-3 text-[15px] font-bold shadow-2xl"
        >
          立即報名
        </a>
      </body>
    </html>
  );
}
