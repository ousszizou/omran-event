"use client";

import { OmranLogo } from "@/assets/omran-logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Separator } from "./ui/separator";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [navStatus, setNavStatus] = useState("visible");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous) {
      setNavStatus("hidden");
    } else {
      setNavStatus("visible");
    }
  });
  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-full shadow-sm bg-black text-white"
      variants={{
        visible: {
          y: 0,
          transition: { y: { duration: 0.3, ease: "easeInOut" } },
        },
        hidden: {
          y: "-100%",
        },
      }}
      animate={navStatus}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto flex h-[120px] max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center justify-between gap-[23px]">
          <Link href="#" className="flex items-center" prefetch={false}>
            <OmranLogo />
          </Link>
          <Separator
            orientation="vertical"
            className="w-[0.6px] h-[75px] bg-[#AD9E68]"
          />
          <h1 className="text-lg font-bold">
            المؤتمر
            <br />
            السنوي
          </h1>
        </div>
        <nav className="hidden items-center gap-12 lg:flex">
          <Link href="#" className="text-sm font-medium" prefetch={false}>
            الرئيسية
          </Link>
          <Link href="#" className="text-sm font-medium" prefetch={false}>
            عن المؤتمر
          </Link>
          <Link href="#" className="text-sm font-medium" prefetch={false}>
            برنامح المؤتمر
          </Link>
          <Link href="#" className="text-sm font-medium" prefetch={false}>
            المتحدثون
          </Link>
          <Link href="#" className="text-sm font-medium" prefetch={false}>
            الجائزة السنوية
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="hidden sm:inline-flex ml-10 bg-[#AD9E68] text-white px-6 rounded-full">
            سجل الآن
          </Button>
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="fixed top-[2.9375rem] left-4 md:left-6 lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </button>
        </SheetTrigger>
        <SheetContent side="fullScreen" className="bg-black p-6">
          <Link
            href="#"
            className="flex items-center mt-10 w-min mx-auto"
            prefetch={false}
          >
            <OmranLogo width={90} height={121} />
          </Link>

          <div className="mt-9 flex items-center justify-center gap-4 text-white">
            <FaTwitter className="w-6 h-6" />
            <FaLinkedinIn className="w-6 h-6" />
            <FaFacebookF className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
          </div>

          <div className="mt-10 p-2 grid grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-bold mb-6 text-white text-lg leading-[2rem]">
                الخدمات
              </h3>
              <ul className="space-y-2 text-white/75">
                <li>
                  <Link href="#">برامجنا</Link>
                </li>
                <li>
                  <Link href="#">الاستشارات</Link>
                </li>
                <li>
                  <Link href="#">التمويل</Link>
                </li>
                <li>
                  <Link href="#">التدريب</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-lg text-white leading-[2rem]">
                الأخبار
              </h3>
              <ul className="space-y-2 text-white/75">
                <li>
                  <Link href="#">المدونة</Link>
                </li>
                <li>
                  <Link href="#">الفعاليات</Link>
                </li>
                <li>
                  <Link href="#">الشهادات</Link>
                </li>
                <li>
                  <Link href="#">الوظائف</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6 text-lg text-white leading-[2rem]">
                تواصل
              </h3>
              <ul className="space-y-2 text-white/75">
                <li>
                  <Link href="#">اتصل بنا</Link>
                </li>
                <li>
                  <Link href="#">أسئلة شائعة</Link>
                </li>
                <li>
                  <Link href="#">الشركاء</Link>
                </li>
                <li>
                  <Link href="#">انضم إلينا</Link>
                </li>
                <li>
                  <Link href="#">ادعمنا</Link>
                </li>
              </ul>
            </div>
            <ul className="space-y-2 text-white/75 underline">
              <li>
                <Link href="#" className="">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="#">تعريف</Link>
              </li>
              <li>
                <Link href="#">سياسة الكوكيز</Link>
              </li>
              <li>
                <Link href="#">الشروط والأحكام</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-xl">
            <h3 className="font-bold mb-6 text-lg leading-[2rem] text-white">
              نحن نبقيك على اطلاع
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="الإيميل"
                className="min-w-0 px-4 h-12 bg-white text-black flex-grow rounded-tr-full rounded-br-full"
              />
              <Button className="bg-[#AD9E68] h-12 px-6 text-white rounded-tl-full rounded-bl-full">
                تسجيل
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/40 text-white text-[0.625rem] font-medium text-center">
            <p>
              © 2024<span className="text-[#AD9E68] ms-1">فعاليات عمران</span>.
              جميع الحقوق محفوظة
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function MenuIcon(props: any) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2.25" x2="21.75" y1="6" y2="6" />
      <line x1="2.25" x2="21.75" y1="12" y2="12" />
      <line x1="2.25" x2="21.75" y1="18" y2="18" />
    </svg>
  );
}
