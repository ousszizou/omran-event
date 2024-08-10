import React from 'react';
import Image from 'next/image';
import LaunchGoodPartner from "../../assets/partners/launch-good.png";
import RyadiPartner from "../../assets/partners/ryadi.png";
import MiamiPartner from "../../assets/partners/miami-business-solutions.png";
import TanmawiPartner from "../../assets/partners/tanmawi.png";
import ProdevPartner from "../../assets/partners/prodev.png";
import FennecPartner from "../../assets/partners/fennec-technologies.png";
import LastPartner from "../../assets/partners/last-partner.png";

const PartnerLogo = ({ src, alt }) => <Image src={src} alt={alt} width={148.61} height={170.42} />

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

  return (
    <section className="py-24 mt-8 px-4 w-full bg-[#EDE6CC]">
      <div className='container mx-auto'>
        <h2 className="font-bold text-center text-black text-[2.5rem] leading-[3.25rem]">فخورون بشركاء الإنجاز</h2>

        <div className="flex flex-wrap justify-center gap-11 mt-24">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
