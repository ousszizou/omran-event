"use client";

import Image from "next/image";
import feature1Src from "../../assets/features/feature-1.jpg";
import feature2Src from "../../assets/features/feature-2.jpg";
import feature3Src from "../../assets/features/feature-3.jpg";
import feature4Src from "../../assets/features/feature-4.jpg";
import omranLogoSrc from "../../assets/omran-letter-logo.svg";
import ShowInAnimation from "../animations/ShowInAnimation";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "الدورات والورشات التدريبية",
    description:
      "نقدم ورشات عمل تهدف إلى تطوير رواد الأعمال وتزويدهم بالمهارات والمعرفة اللازمة لنجاح مشاريعهم",
    imageSrc: feature1Src,
  },
  {
    title: "المحاضرات التفاعلية",
    description:
      "نقدم ورشات عمل تهدف إلى تطوير رواد الأعمال وتزويدهم بالمهارات والمعرفة اللازمة لنجاح مشاريعهم",
    imageSrc: feature2Src,
  },
  {
    title: "جلسات الإستشارة والمرافقة",
    description:
      "نقدم ورشات عمل تهدف إلى تطوير رواد الأعمال وتزويدهم بالمهارات والمعرفة اللازمة لنجاح مشاريعهم",
    imageSrc: feature3Src,
  },
  {
    title: "عروض أيام الـB2B",
    description:
      "نقدم ورشات عمل تهدف إلى تطوير رواد الأعمال وتزويدهم بالمهارات والمعرفة اللازمة لنجاح مشاريعهم",
    imageSrc: feature4Src,
  },
];

type Feature = (typeof features)[number];

const ConferenceFeature = ({ title, description, imageSrc }: Feature) => (
  <div className="w-[296px] h-[242px] z-20">
    <Image
      src={imageSrc}
      alt={title}
      width={300}
      height={200}
      className="w-full object-cover rounded-[16px]"
    />
    <div className="p-[22px] bg-white relative -top-6 rounded-[16px]">
      <h3 className="text-[#252C32] text-base font-bold mb-4">{title}</h3>
      <p className="text-[#6B7280] text-[0.625rem] leading-[0.875rem] font-medium">
        {description}
      </p>
    </div>
  </div>
);

export const WhyAnnualConference = () => {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });
  return (
    <section className="bg-[#AD9E68] w-full h-[780px]" ref={container}>
      <div className="pt-[98px] relative container mx-auto">
        <div className="absolute top-36 left-5 z-0">
          <Image
            src={omranLogoSrc}
            alt="Omran Logo"
            width={290}
            height={246}
            quality={100}
          />
        </div>
        <div className="relative z-10">
          <ShowInAnimation
            delay={0.5}
            x={60}
            y={0}
            duration={0.6}
            isInView={isInView}
          >
            <h2 className="text-[2.5rem] leading-[3.25rem] font-bold mb-6 text-white">
              لماذا المؤتمر السنوي؟
            </h2>
          </ShowInAnimation>
          <ShowInAnimation
            delay={0.8}
            x={60}
            y={0}
            duration={0.6}
            isInView={isInView}
          >
            <p className="text-base text-white">
              تجمع المصممين حول العالم لنعالج إشكالية في مجال من مجالات حياة
              المسلمين، من خلال طرح المشاريع والمبادرات
              <br /> والتنافس حول جائزة عمران السنوية لأفضل مشروع يحقق الأثر
              المجتمعي المستدام.
            </p>
          </ShowInAnimation>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ShowInAnimation
                key={feature.title}
                x={0}
                y={60}
                duration={0.6}
                delay={1.1 + index * 0.2}
                isInView={isInView}
              >
                <ConferenceFeature {...feature} />
              </ShowInAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
