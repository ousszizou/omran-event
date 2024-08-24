import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const readex_pro = Readex_Pro({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: "مؤتمر عمران السّنوي 2024 | مشاريع مستدامة في واقع متغير",
  description: "انضم إلى مؤتمر عمران السنوي 2024 في اسطنبول، حيث يجتمع رواد الأعمال الشباب لمناقشة وتطوير مشاريع ناهضة تستجيب للتحولات المعاصرة وتسهم في نهضة الأمة الإسلامية. اكتشف فرص التعلم والتواصل والمنافسة على جائزة عمران السنوية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" style={{ scrollBehavior: "smooth" }}>
      <body className={readex_pro.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
