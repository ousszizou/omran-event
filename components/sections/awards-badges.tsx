"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import trophy1Src from "../../assets/trophy-1.jpg";
import trophy2Src from "../../assets/trophy-2.jpg";
import trophy3Src from "../../assets/trophy-3.jpg";
import { MedalIcon } from "../../assets/medal-icon";
import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';

const ParallaxColumn = ({ children, y }: { children: React.ReactNode, y: MotionValue<number> }) => (
  <motion.div
    style={{ y }}
    className="space-y-8 w-full"
  >
    {children}
  </motion.div>
);

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
    <section className="container mx-auto overflow-hidden">
      <h2 className="text-[#252C32] text-[1.75rem] leading-[2.5rem] font-bold">أوسمة التكريم</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mt-24" ref={gridRef}>
        <ParallaxColumn y={translateFirst}>
          <div className="py-[2.5rem] px-5 rounded-2xl bg-[#AD9E68] text-white flex items-center gap-6 min-h-[130px]">
            <MedalIcon className='flex-none fill-current' />
            <span className="text-lg font-bold text-balance">
              أفضل فريق مجتمع المدينة (تكريم مبادرة الفلوجة 2040).
            </span>
          </div>
          <div className="py-[2.5rem] px-5 rounded-2xl text-[#6B7280] flex items-center gap-6 border-lg border-solid border-[#AD9E68] min-h-[130px]">
            <MedalIcon className='flex-none fill-current' />
            <span className="text-lg font-bold text-balance">
              أفضل مشروع في الصحة والبيئة
            </span>
          </div>
          <div className="py-[2.5rem] px-5 rounded-2xl bg-[#252C32] text-white flex items-center gap-6 min-h-[130px]">
            <MedalIcon className='flex-none fill-current' />
            <span className="text-lg font-bold text-balance">
              أفضل مشروع في التعليم
            </span>
          </div>
          <div className="py-[2.5rem] px-5 rounded-2xl text-[#6B7280] flex items-center gap-6 border-lg border-solid border-[#AD9E68] min-h-[130px]">
            <MedalIcon className='flex-none fill-current' />
            <span className="text-lg font-bold text-balance">
              أفضل مشروع في الصحة والبيئة
            </span>
          </div>
        </ParallaxColumn>

        <ParallaxColumn y={translateSecond}>
          <div className="w-full h-1/4 relative">
            <Image src={trophy1Src} alt="Trophy 1" fill className="rounded-2xl object-cover" />
          </div>
          <div className="py-[2.5rem] px-5 rounded-2xl bg-[#AD9E68] text-white flex items-center gap-6 min-h-[130px]">
            <MedalIcon className='flex-none fill-current' />
            <span className="text-lg font-bold text-balance">
              أفضل مشروع في الفكر الحضاري
            </span>
          </div>
          <div className="w-full h-1/4 relative">
            <Image src={trophy2Src} alt="Trophy 2" fill className="rounded-2xl object-cover" />
          </div>
        </ParallaxColumn>

        <ParallaxColumn y={translateThird}>
          <div className="py-[2.5rem] px-5 rounded-2xl bg-[#AD9E68] text-white flex items-center gap-6 min-h-[130px]">
            <MedalIcon className='flex-none fill-current' />
            <span className="text-lg font-bold text-balance">
              أفضل مشروع في تكنولوجيا الآلة
            </span>
          </div>
          <div className="py-[2.5rem] px-5 rounded-2xl text-[#6B7280] flex items-center gap-6 border-lg border-solid border-[#AD9E68] min-h-[130px]">
            <MedalIcon className='flex-none fill-current' />
            <span className="text-lg font-bold text-balance">
              أفضل مشروع في الذكاء الاصطناعي
            </span>
          </div>
          <div className="py-[2.5rem] px-5 rounded-2xl bg-[#252C32] text-white flex items-center gap-6 min-h-[130px]">
            <MedalIcon className='flex-none fill-current' />
            <span className="text-lg font-bold text-balance">
              أفضل مشروع في تكنولوجيا الآلة
            </span>
          </div>
          <div className="w-full h-1/4 relative">
            <Image src={trophy3Src} alt="Trophy 3" fill className="rounded-2xl object-cover" />
          </div>
        </ParallaxColumn>
      </div>
    </section>
  );
};
