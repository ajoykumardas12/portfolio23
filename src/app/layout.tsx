import { Inter } from "next/font/google";

import "./globals.css";

import Footer from "@components/Footer";
import Header from "@components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

export const metadata = {
  title: "Ajoy Kumar Das",
  description: "Portfolio for Ajoy Kumar Das, Frontend Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-darkest text-white`}>
        <Header />
        <main className="flex flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
