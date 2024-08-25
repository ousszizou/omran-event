"use client";

import React from 'react';
import Image from 'next/image';

import { MedalIcon } from "../../assets/medal-icon";
import artSrc from "../../assets/awards-bg/art.png";
import da3waSrc from "../../assets/awards-bg/da3wa.png";
import fikrSrc from "../../assets/awards-bg/fikr.png";
import healthSrc from "../../assets/awards-bg/health.png";
import palestineSrc from "../../assets/awards-bg/palestine.png";
import tadribSrc from "../../assets/awards-bg/tadrib.png";
import tanmiyaSrc from "../../assets/awards-bg/tanmiya.png";
import tarbiyaSrc from "../../assets/awards-bg/tarbiya.png";

const AwardCard = ({ text, imageSrc }: { text: string; imageSrc: string }) => {
  return (
    <div className="relative py-7 md:py-[2.5rem] pr-2.5 pl-3.5 md:px-5 rounded-2xl flex items-center gap-6 md:min-h-[130px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={text}
        fill
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-30 z-10" />
      <MedalIcon className='flex-none fill-current text-white z-20 relative' />
      <span className="text-lg font-bold text-balance text-white z-20 relative">{text}</span>
    </div>
  )
}

export const AwardsBadges = () => {
  const awards = [
    { text: "فلسطين وقضايا التحرر", imageSrc: palestineSrc },
    { text: "الفكر والتعليم والوعي", imageSrc: fikrSrc },
    { text: "التنمية وخدمة الشأن العام", imageSrc: tanmiyaSrc },
    { text: "الدعوة والسلوك والأخلاق", imageSrc: da3waSrc },
    { text: "الصحة والبيئة والمناخ", imageSrc: healthSrc },
    { text: "التربية وتنشئة الأجيال", imageSrc: tarbiyaSrc },
    { text: "التدريب والمهارة", imageSrc: tadribSrc },
    { text: "الفنون والثقافة والاعلام", imageSrc: artSrc },
  ];
  return (
    <section className="container mx-auto">
      <h1 className="text-[#252C32] text-[2.5rem] text-center leading-[3.25rem] font-bold mb-8 text-balance">
        أوسمة التكريم لأفضل مشروع في
      </h1>
      <p className="max-w-3xl mx-auto text-center text-[#252C32] text-lg font-normal mb-16 text-balance">
        نتطلع لتشجيع عدد من المشاريع التي تخدم الأثر المجتمعي المستدام، ونشعر بالفخر أن نستضيفكم في جناح أفضل مشروع متخصص بالأمة في:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <AwardCard key={index} text={award.text} imageSrc={award.imageSrc} />
        ))}
      </div>
    </section>
  );
};
