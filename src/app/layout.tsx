import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "EMTÉ Running Team | Hardlopen met Ambitie",
  description:
    "Het EMTÉ Running Team is een ambitieus hardloopteam met een professionele aanpak en een sterk teamgevoel. Ontdek ons team, evenementen en sponsormogelijkheden.",
  keywords: ["running team", "hardlopen", "EMTÉ", "evenementen", "sponsoring"],
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
