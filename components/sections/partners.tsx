"use client";

import React, { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import partner1Src from "../../assets/partners/partner-1.png";
import partner2Src from "../../assets/partners/partner-2.png";
import partner3Src from "../../assets/partners/partner-3.png";
import partner4Src from "../../assets/partners/partner-4.png";
import { useInView } from "framer-motion";
import ShowInAnimation from "../animations/ShowInAnimation";
import { Button } from "../ui/button";
import { IframeModal } from "../IFrameModal";

const PartnerLogo = ({ src, alt }: { src: StaticImageData; alt: string }) => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <Image src={src} alt={alt} layout="responsive" width={300} height={300} objectFit="contain" />
  </div>
);

export const Partners = () => {
  const partners = [
    { src: partner1Src, alt: "thuraya enterprise" },
    { src: partner2Src, alt: "bawsala" },
    { src: partner3Src, alt: "barbaros events" },
    { src: partner4Src, alt: "gulf innovation" },
  ];

  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-24 mt-12 sm:mt-16 md:mt-[12.75rem] px-4 bg-[#EDE6CC]"
      ref={container}
    >
      <div className="container mx-auto">
        <ShowInAnimation
          delay={0.5}
          x={0}
          y={60}
          duration={0.6}
          isInView={isInView}
        >
          <h2 className="font-bold text-center text-black text-2xl sm:text-3xl md:text-[2.5rem] leading-tight md:leading-[3.25rem]">
            فخورون بشركاء الإنجاز
          </h2>
        </ShowInAnimation>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 sm:mt-12 md:mt-16">
          {partners.map((partner, index) => (
            <li key={index} className="bg-white rounded flex items-center justify-center aspect-square">
              <PartnerLogo {...partner} />
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
          <IframeModal formUrl="https://docs.google.com/forms/d/e/1FAIpQLSe9NXCRpArgC2fQgX8cmCNl3dSeT0tH7ss9LkQ9KZ4YKKUYrA/viewform?embedded=true">
            <Button className="text-[#AD9E68] bg-white rounded-full text-sm sm:text-base px-4 sm:px-6 md:px-8 py-1.5 md:py-2 font-medium w-fit hover:text-white">
              التحق برعاة المُؤتمر
            </Button>
          </IframeModal>
        </div>
      </div>
    </section>
  );
};
