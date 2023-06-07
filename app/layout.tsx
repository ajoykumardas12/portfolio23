import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-darkest text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
