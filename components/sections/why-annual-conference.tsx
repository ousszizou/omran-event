"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ShowInAnimation from "../animations/ShowInAnimation";
import feature1Src from "../../assets/features/feature-1.jpg";
import feature2Src from "../../assets/features/feature-2.jpg";
import feature3Src from "../../assets/features/feature-3.jpg";
import feature4Src from "../../assets/features/feature-4.jpg";
import omranLogoSrc from "../../assets/omran-letter-logo.svg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

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
];

type Feature = (typeof features)[number];

const ConferenceFeature = ({ title, description, imageSrc }: Feature) => (
  <div>
    <Image
      src={imageSrc}
      alt={title}
      width={300}
      height={200}
      className="w-full object-cover rounded-[16px]"
    />
    <div className="p-5 lg:p-[1.375rem] relative bottom-8 bg-white rounded-2xl">
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
    <section className="bg-[#AD9E68] w-full" ref={container}>
      <div className="pt-[6.125rem] pb-[4.75rem] md:pb-[9.625rem] relative container mx-auto">
        <div className="absolute top-40 left-6 z-10">
          <Image
            src={omranLogoSrc}
            alt="Omran Logo"
            width={290}
            height={246}
            quality={100}
          />
        </div>
        <div>
          <div className="relative z-10">
            <ShowInAnimation
              delay={0.5}
              x={60}
              y={0}
              duration={0.6}
              isInView={isInView}
            >
              <h2 className="text-[2.5rem] leading-[3.25rem] font-bold text-white mb-6">
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
              <p className="text-white">
                نجمع العمرانيين حول العالم، لنعالج إشكالية في مجال من مجالات حياة المسلمين، من خلال طرح المشاريع والمبادرات<br /> والتنافس حول جائزة عمران السنوية لأفضل مشروع يحقق الأثر المجتمعي المستدام.
              </p>
            </ShowInAnimation>
          </div>
          <Carousel className="w-full mt-[7.5rem] md:mt-[6.25rem] z-10" opts={{
            direction: "rtl",
            slidesToScroll: 1,
          }}>
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/4 pl-10">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="relative flex md:justify-center mt-16 space-x-16">
              <CarouselPrevious className='relative bg-white border-none hover:bg-white/80 h-10 w-10' />
              <CarouselNext className='relative bg-white border-none hover:bg-white/80 h-10 w-10' />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
