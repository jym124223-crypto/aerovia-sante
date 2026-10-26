import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aérovia Santé | Agence de services en inhalothérapie au Québec",
  description: "Zenitude Billy Inc. accompagne les établissements de santé en leur donnant accès à des professionnels expérimentés en inhalothérapie générale, en soins respiratoires et au bloc opératoire partout au Québec.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} min-h-screen flex flex-col font-sans antialiased`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
