import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vertex dev — Desarrollo de software y sistemas",
  description:
    "Creamos páginas web, e-commerce y sistemas a medida para empresas que quieren crecer. Diseño moderno, rendimiento y soluciones reales.",
  keywords: [
    "desarrollo web",
    "sistemas a medida",
    "ecommerce",
    "landing page",
    "software",
    "vertex dev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* CAMBIAR POR TU LOGO CUANDO LO TENGAS */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}