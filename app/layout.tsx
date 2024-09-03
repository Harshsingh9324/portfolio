import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Singh",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper relative">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
