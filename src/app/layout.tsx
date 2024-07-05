"use client"

import { Inter } from "next/font/google";
import Nav from "@/app/components/Nav";
import "./globals.css";
import { CartContextProvider } from "./hooks/useCart";
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-200`}>
        <CartContextProvider>
          <Nav />
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
32;
