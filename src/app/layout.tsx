import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "EMTE Running Team | Hybride Atleten uit Westkapelle",
  description:
    "Zaterdag in de kroeg, zondag in de hardloopschoenen. Het EMTE Running Team bestaat uit hybride atleten die bier en kilometers combineren. Uit Westkapelle, Zeeland.",
  keywords: ["running team", "hardlopen", "EMTE", "hybride atleten", "Westkapelle"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
