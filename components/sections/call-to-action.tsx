"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import OmranConference from "../../assets/omran-conference.svg";
import ShowInAnimation from "../animations/ShowInAnimation";
import { useInView } from "framer-motion";
import { IframeModal } from "../IFrameModal";

export const CallToAction = () => {
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });
  return (
    <section
      className="w-full lg:py-[4.6875rem] pt-24 pb-[7.25rem] text-white bg-[url('/conference.jpg')] bg-no-repeat bg-center bg-cover relative"
      ref={container}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#252C32]/90 from-15% via-[#708698]/90 via-100% w-full h-full" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row gap-[7.75rem] lg:gap-0 items-center justify-between">
          <div className="text-right max-w-2xl mb-8 md:mb-0">
            <ShowInAnimation
              delay={0.5}
              x={60}
              y={0}
              duration={0.6}
              isInView={isInView}
            >
              <h2 className="text-4xl leading-tight font-bold mb-6">
                شراكات فاعلة، مستقبل مزدهر
              </h2>
            </ShowInAnimation>
            <ShowInAnimation
              delay={0.8}
              x={60}
              y={0}
              duration={0.6}
              isInView={isInView}
            >
              <p className="text-base lg:font-semibold mb-8">
                ندعو رواد الأعمال والمستثمرين إلى خلق أفكار مبتكرة وتطوير مشاريع
                تساهم في بناء مستقبل أفضل. نؤمن بأن المشاريع الناجحة في ذلك هي
                التي تستطيع أن تتجاوز التحديات وتستغل الفرص التي يوفرها الواقع
                المتغير، وتساهم في تحقيق التنمية المستدامة والرخاء المجتمعي.
              </p>
            </ShowInAnimation>
            <ShowInAnimation
              delay={1.1}
              x={60}
              y={0}
              duration={0.6}
              isInView={isInView}
            >
              <IframeModal formUrl="https://docs.google.com/forms/d/e/1FAIpQLSdpGGnQUX15Wbl4n58FDL2BpTsrp7a6gie475H-rVqv-p5xFQ/viewform?embedded=true">
                <Button className="bg-[#AD9E68] text-white rounded-full text-base h-12 px-6 font-medium">
                  سجل الآن
                </Button>
              </IframeModal>

            </ShowInAnimation>
          </div>
          <div className="flex-shrink-0">
            <ShowInAnimation
              delay={1.4}
              x={-60}
              y={0}
              duration={0.6}
              isInView={isInView}
            >
              <Image
                src={OmranConference}
                alt="المؤتمر السنوي"
                width={202}
                height={364}
                className="object-contain"
              />
            </ShowInAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
