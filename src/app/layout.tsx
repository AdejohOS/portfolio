import type { Metadata } from "next";
import "./globals.css";

import { Figtree, Playfair_Display } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

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
      <body
        className={cn(
          `flex min-h-screen flex-col font-sans antialiased`,
          figtree.variable,
          playfair.variable
        )}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
