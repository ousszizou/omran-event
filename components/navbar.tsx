"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { OmranLogo } from "@/assets/omran-logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IframeModal } from './IFrameModal';

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "#program", label: "البرنامج" },
  { href: "#speakers", label: "المتحدثون" },
  { href: "#pricing", label: "باقات الاشتراك" },
  { href: "#award", label: "الجائزة السنوية" },
];

const footerLinks = [
  {
    title: "الخدمات",
    links: [
      { href: "#", label: "برامجنا" },
      { href: "#", label: "الاستشارات" },
      { href: "#", label: "التمويل" },
      { href: "#", label: "التدريب" },
    ],
  },
  {
    title: "الأخبار",
    links: [
      { href: "#", label: "المدونة" },
      { href: "#", label: "الفعاليات" },
      { href: "#", label: "الشهادات" },
      { href: "#", label: "الوظائف" },
    ],
  },
  {
    title: "تواصل",
    links: [
      { href: "#", label: "اتصل بنا" },
      { href: "#", label: "أسئلة شائعة" },
      { href: "#", label: "الشركاء" },
      { href: "#", label: "انضم إلينا" },
      { href: "#", label: "ادعمنا" },
    ],
  },
];

const legalLinks = [
  { href: "#", label: "سياسة الخصوصية" },
  { href: "#", label: "تعريف" },
  { href: "#", label: "سياسة الكوكيز" },
  { href: "#", label: "الشروط والأحكام" },
];

const MenuIcon = (props) => (
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

export default function Navbar() {
  const [navStatus, setNavStatus] = useState("visible");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest <= 0) {
      setNavStatus("visible");
    } else if (latest > previous) {
      setNavStatus("hidden");
    } else {
      setNavStatus("visible");
    }
  });

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-full shadow-sm bg-black text-white"
      variants={{
        visible: { y: 0, transition: { y: { duration: 0.3, ease: "easeInOut" } } },
        hidden: { y: "-100%" },
      }}
      animate={navStatus}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto flex h-[120px] max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center justify-between gap-[23px]">
          <Link href="/" className="flex items-center" prefetch={false}>
            <OmranLogo />
          </Link>
          <Separator orientation="vertical" className="w-[0.6px] h-[75px] bg-[#AD9E68]" />
          <h1 className="text-lg font-bold">
            المؤتمر
            <br />
            السنوي
          </h1>
        </div>
        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium" prefetch={false}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <IframeModal formUrl="https://docs.google.com/forms/d/e/1FAIpQLSdpGGnQUX15Wbl4n58FDL2BpTsrp7a6gie475H-rVqv-p5xFQ/viewform?embedded=true">
            <Button className="hidden sm:inline-flex ml-10 bg-[#AD9E68] text-white px-6 rounded-full">
              سجل الآن
            </Button>
          </IframeModal>
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <button type="button" className="fixed top-[2.9375rem] left-4 md:left-6 lg:hidden" aria-label="Toggle navigation">
            <MenuIcon className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="fullScreen" className="bg-black p-6">
          <Link href="#" className="flex items-center mt-10 w-min mx-auto" prefetch={false}>
            <OmranLogo width={90} height={121} />
          </Link>

          <div className="mt-9 flex items-center justify-center gap-4 text-white">
            {[FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, index) => (
              <Icon key={index} className="w-6 h-6" />
            ))}
          </div>

          <div className="mt-10 p-2 grid grid-cols-2 gap-4 text-sm">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold mb-6 text-white text-lg leading-[2rem]">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-white/75">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ul className="space-y-2 text-white/75 underline">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
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
              <IframeModal formUrl="https://docs.google.com/forms/d/e/1FAIpQLSdpGGnQUX15Wbl4n58FDL2BpTsrp7a6gie475H-rVqv-p5xFQ/viewform?embedded=true">
                <Button className="hidden sm:inline-flex ml-10 bg-[#AD9E68] text-white px-6 rounded-full">
                  سجل الآن
                </Button>
              </IframeModal>
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
