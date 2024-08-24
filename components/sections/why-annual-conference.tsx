"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ShowInAnimation from "../animations/ShowInAnimation";
import istanbulSrc from "../../assets/why-annual-conference/istanbul.jpg";
import competitionSrc from "../../assets/why-annual-conference/competition.jpeg";
import guidancesSrc from "../../assets/why-annual-conference/guidances.jpg";
import hotelSrc from "../../assets/why-annual-conference/hotel.jpg";
import meetingsSrc from "../../assets/why-annual-conference/meetings.jpg";
import networkingSrc from "../../assets/why-annual-conference/networking.jpg";
import projectsSrc from "../../assets/why-annual-conference/projects.jpg";
import servicesSrc from "../../assets/why-annual-conference/services.jpg";
import workshopsSrc from "../../assets/why-annual-conference/workshops.jpg";
import conferencesSrc from "../../assets/why-annual-conference/conferences.jpg";
import omranLogoSrc from "../../assets/omran-letter-logo.svg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const features = [
  {
    title: "الدورات والورش التدريبية",
    description: "طوّر مهاراتك واكتسب معارف جديدة في مجالات متعددة.",
    imageSrc: workshopsSrc,
  },
  {
    title: "المحاضرات والجلسات الحوارية",
    description: "اكتشف أفكارًا ملهمة من نقاشات تقودها عقول مؤثرة.",
    imageSrc: conferencesSrc,
  },
  {
    title: "بناء العلاقات والتشبيك",
    description: "كوّن علاقات مهنية وشخصية توسع من دائرة تأثيرك.",
    imageSrc: networkingSrc,
  },
  {
    title: "التنافس حول الجوائز",
    description: "فرصة للفوز بجوائز تعزز مكانتك وتقديرًا لجهودك وإبداعك.",
    imageSrc: competitionSrc,
  },
  {
    title: "عروض المشاريع",
    description: "اكتشف ابتكارات جديدة أو شارك مشروعك مع جمهور واسع.",
    imageSrc: projectsSrc,
  },
  {
    title: "اللقاء بالمستثمرين والمتبرعين",
    description: "تواصل مع ممولين وشركاء محتملين لدعم أفكارك أو مشاريعك.",
    imageSrc: meetingsSrc,
  },
  {
    title: "جلسات الاستشارة والمرافقة",
    description: "توجيه فردي ودعم متخصص لتطوير مسار مشروعك نحو النجاح.",
    imageSrc: guidancesSrc,
  },
  {
    title: "مدينة إسطنبول الساحرة",
    description: "استمتع بجمال وثقافة إسطنبول أثناء مشاركتك في فعاليات المؤتمر.",
    imageSrc: istanbulSrc,
  },
  {
    title: "خدمات فندقية مميزة",
    description: "إقامة مريحة تضمن لك تجربة مثالية طوال فترة المؤتمر.",
    imageSrc: servicesSrc,
  },
];

type Feature = (typeof features)[number];

const ConferenceFeature = ({ title, description, imageSrc }: Feature) => (
  <>
    <Image
      src={imageSrc}
      alt={title}
      width={300}
      height={200}
      className="w-full object-cover rounded-[16px] min-h-[200px]"
    />
    <div className="p-5 lg:p-[1.375rem] relative bottom-8 bg-white rounded-2xl">
      <h3 className="text-[#252C32] text-base font-bold mb-4">{title}</h3>
      <p className="text-[#6B7280] text-xs font-medium">
        {description}
      </p>
    </div>
  </>
);

export const WhyAnnualConference = () => {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });
  return (
    <section className="bg-[#AD9E68] w-full" ref={container}>
      <div className="pt-16 pb-8 md:pb-16 relative container mx-auto">
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
              <p className="text-white max-w-3xl text-balance">
                يجتمع "العمرانيون" في حدث سنوي مميّز لعلاج إشكالية في مشاريع نهضة الأمة، يشارك بالمؤتمر شباب جادّ من مختلف الأجناس والثقافات واللغات والألوان والأعراق لهدف واحد، وهو نهضة أمة الإسلام.
              </p>
            </ShowInAnimation>
          </div>
          <Carousel className="w-full mt-[7.5rem] md:mt-[6.25rem] z-10" opts={{
            direction: "rtl",
            slidesToScroll: 1,
          }}>
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-10">
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
