import type { Metadata } from "next";
import "./globals.css";

import { Figtree } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunday Ojochenemi Adejoh | Fullstack Developer",
  description:
    "Sunday Adejoh is a Fullstack Developer with a passion for Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
