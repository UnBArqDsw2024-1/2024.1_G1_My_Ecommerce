import BarraBusca from "@/components/BarraBusca";
import TopBar from "@/components/TopBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Ecommerce",
  description: "Aplicação para a disciplina de Arquitetura de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <TopBar />
        <BarraBusca />
        {children}
      </body>
    </html>
  );
}
