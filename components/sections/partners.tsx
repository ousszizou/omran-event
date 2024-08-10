"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import LaunchGoodPartner from "../../assets/partners/launch-good.png";
import RyadiPartner from "../../assets/partners/ryadi.png";
import MiamiPartner from "../../assets/partners/miami-business-solutions.png";
import TanmawiPartner from "../../assets/partners/tanmawi.png";
import ProdevPartner from "../../assets/partners/prodev.png";
import FennecPartner from "../../assets/partners/fennec-technologies.png";
import LastPartner from "../../assets/partners/last-partner.png";
import { motion, useInView } from "framer-motion";
import ShowInAnimation from "../animations/ShowInAnimation";

const PartnerLogo = ({ src, alt }: { src: StaticImageData; alt: string }) => (
  <Image src={src} alt={alt} width={148.61} height={170.42} />
);

export const Partners = () => {
  const partners = [
    { src: LaunchGoodPartner, alt: "Launch Good Partner" },
    { src: RyadiPartner, alt: "Ryadi Partner" },
    { src: MiamiPartner, alt: "Miami Business Solutions Partner" },
    { src: TanmawiPartner, alt: "Tanmawi Partner" },
    { src: ProdevPartner, alt: "Prodev Partner" },
    { src: FennecPartner, alt: "Fennec Technologies Partner" },
    { src: LastPartner, alt: "Last Partner" },
  ];

  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <section
      className="w-full py-24 mt-24 md:mt-[12.75rem] px-4 bg-[#EDE6CC]"
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
          <h2 className="font-bold text-center text-black text-[2.5rem] leading-[3.25rem]">
            فخورون بشركاء الإنجاز
          </h2>
        </ShowInAnimation>

        <ShowInAnimation
          delay={0.8}
          x={0}
          y={60}
          duration={0.6}
          isInView={isInView}
        >
          <div
            dir="ltr"
            className="w-full inline-flex gap-4 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-48px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mt-24"
          >
            <ul className="flex items-stretch justify-center gap-4 animate-infinite-scroll">
              {partners.map((partner, index) => (
                <li key={index} className="min-w-[150px]">
                  <PartnerLogo key={index} {...partner} />
                </li>
              ))}
            </ul>
            <ul className="flex items-stretch justify-center gap-4 animate-infinite-scroll">
              {partners.map((partner, index) => (
                <li key={index} className="min-w-[150px]">
                  <PartnerLogo key={index} {...partner} />
                </li>
              ))}
            </ul>
          </div>
        </ShowInAnimation>
      </div>
    </section>
  );
};
