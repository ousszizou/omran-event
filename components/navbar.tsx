"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { OmranLogo } from "@/assets/omran-logo";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

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
          <Button className="hidden sm:inline-flex bg-[#AD9E68] text-white px-6 rounded-full">
            سجل الآن
          </Button>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 right-4 lg:hidden"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-background p-6">
          <div className="grid gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Contact
            </Link>
            <Button className="w-full">Get Started</Button>
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
