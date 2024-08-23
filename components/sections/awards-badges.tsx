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
    <div className={`py-7 md:py-[2.5rem] pr-2.5 pl-3.5 md:px-5 rounded-2xl flex items-center gap-6 md:min-h-[130px]
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
      <h1 className="text-[#252C32] text-[2.5rem] text-center leading-[3.25rem] font-bold mb-4">
        أوسمة التكريم لأفضل مشروع في
      </h1>
      <p className="max-w-3xl mx-auto text-center text-[#252C32] text-lg font-normal mb-48 text-balance">
        نتطلع لتشجيع عدد من المشاريع التي تخدم الأثر المجتمعي المستدام، ونشعر بالفخر أن نستضيفكم في جناح أفضل مشروع متخصص بالأمة في:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mt-24" ref={gridRef}>
        <ParallaxColumn y={translateFirst}>
          <AwardCard text="فلسطين وقضايا التحرر" color="beige" />
          <AwardCard text="الفكر والتعليم والوعي" color="white" />
          <AwardCard text="التنمية وخدمة الشأن العام" color="white" />
        </ParallaxColumn>

        <ParallaxColumn y={translateSecond}>
          <AwardCard text="الدعوة والسلوك والأخلاق" color="beige" />
          <AwardCard text="الصحة والبيئة والمناخ" color="dark" />
        </ParallaxColumn>

        <ParallaxColumn y={translateThird}>
          <AwardCard text="التربية وتنشئة الأجيال" color="light" />
          <AwardCard text="التدريب والمهارة" color="white" />
          <AwardCard text="الفنون والثقافة والاعلام" color="dark" />
        </ParallaxColumn>
      </div>
    </section>
  );
};
