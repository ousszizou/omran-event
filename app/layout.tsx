import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const readex_pro = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={readex_pro.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
