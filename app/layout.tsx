import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});


export const metadata: Metadata = {
  title: "Cocinita",
  description: "Couzinteeek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body
        className={`${cairo.variable} bg-c-back`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
