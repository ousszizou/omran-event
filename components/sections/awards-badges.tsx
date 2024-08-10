"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import trophy1Src from "../../assets/trophy-1.jpg";
import trophy2Src from "../../assets/trophy-2.jpg";
import trophy3Src from "../../assets/trophy-3.jpg";
import { MedalIcon } from "../../assets/medal-icon";
import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

const ParallaxColumn = ({ children, y }: { children: React.ReactNode, y: MotionValue<number> }) => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
                                 
  return (
    <motion.div
      style={isLargeScreen ? { y } : undefined}
      className="space-y-8 w-full"
    >
      {children}
    </motion.div>
  )
};

const AwardCard = ({ text, color }: {text: string; color: "white" | "beige" | "dark" | "light"}) => {
  return (
    <div className={`py-7 md:py-[2.5rem] px-5 rounded-2xl flex items-center gap-6 md:min-h-[130px]
      ${color === "white" || color ===  "light" ? "text-[#6B7280]" : "text-white"}
      ${color === "white" ? "border-lg border-solid border-[#AD9E68]" : color === "beige" ? "bg-[#AD9E68]" : color === "dark" ? "bg-[#252C32]" : "bg-[#AD9E6833]"}
    `}>
      <MedalIcon className='flex-none fill-current' />
      <span className="text-lg font-bold text-balance">{text}</span>
    </div>
  )
}

export const AwardsBadges = () => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="container mx-auto">
      <h2 className="text-[#252C32] text-[1.75rem] leading-[2.5rem] font-bold">أوسمة التكريم</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mt-24" ref={gridRef}>
        <ParallaxColumn y={translateFirst}>
          <AwardCard text="أفضل فريق مجتمع المدينة (تكريم مبادرة الفلوجة 2040)." color="beige" />
          <AwardCard text="أفضل مشروع في الصحة والبيئة" color="white" />
          <AwardCard text="أفضل مشروع في التعليم" color="dark" />
          <AwardCard text="أفضل مشروع في الصحة والبيئة" color="white" />
        </ParallaxColumn>

        <ParallaxColumn y={translateSecond}>
          <div className="w-full h-40 md:h-2/4 relative">
            <Image src={trophy1Src} alt="Trophy 1" fill className="rounded-2xl object-cover" />
          </div>
          <AwardCard text="فضل مشروع في الفكر الحضاري" color="beige" />
          <div className="w-full h-40 md:h-3/4 relative">
            <Image src={trophy2Src} alt="Trophy 2" fill className="rounded-2xl object-cover" />
          </div>
        </ParallaxColumn>

        <ParallaxColumn y={translateThird}>
          <AwardCard text="افضل مشروع في تكنولوجيا الآلة" color="light" />
          <AwardCard text="أفضل مشروع في الذكاء الاصطناعي" color="white" />
          <AwardCard text="افضل مشروع في تكنولوجيا الآلة" color="dark" />
          <div className="w-full h-40 md:h-4/6 relative">
            <Image src={trophy3Src} alt="Trophy 3" fill className="rounded-2xl object-cover" />
          </div>
        </ParallaxColumn>
      </div>
    </section>
  );
};
