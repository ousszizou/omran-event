import React from 'react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import akramPicture from "../../assets/speakers/akram.png";
import ghazwanPicture from "../../assets/speakers/ghazwan.png";
import haythemPicture from "../../assets/speakers/haythem.png";
import ibrahimPicture from "../../assets/speakers/ibrahim.png";
import megriPicture from "../../assets/speakers/megri.png";
import mustafaPicture from "../../assets/speakers/mustafa.png";
import ridhaPicture from "../../assets/speakers/ridha.png";
import tareqPicture from "../../assets/speakers/tareq.png";
import vector1Src from "../../assets/speakers-vector-1.svg";
import vector2Src from "../../assets/speakers-vector-2.svg";

const SpeakerCard = ({ name, title, imageSrc, tags }) => (
  <div>
    <div>
      <Image
        src={imageSrc}
        alt={name}
        width={1080}
        height={1080}
        className="h-[323px] w-full object-cover rounded-lg"
      />
      <div>
        <h3 className="text-lg font-bold text-[#011318] text-right mt-4">{name}</h3>
        <p className="text-sm font-normal text-[#585B5C] text-right">{title}</p>
        <div className="flex justify-start gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-normal px-3 py-1 bg-[#E6EAEB] text-[#585B5C] rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const Speakers = () => {
  const speakers = [
    {
      name: "د. طارق السويدان",
      title: "",
      imageSrc: tareqPicture,
      tags: ["التخطيط", "المشاريع", "القيادة"]
    },
    {
      name: "د. عبد الرزاق مقري",
      title: "",
      imageSrc: megriPicture,
      tags: ["المنظمات", "القيادة", "الاستراتيجية"]
    },
    {
      name: "م. إبراهيم هواري",
      title: "",
      imageSrc: ibrahimPicture,
      tags: ["المشاريع", "الإنتاجية", "فرق العمل"]
    },
    {
      name: "د. مصطفى المومري",
      title: "",
      imageSrc: mustafaPicture,
      tags: ["التخطيط", "القيادة", "المشاريع"]
    },
    {
      name: "د. هيثم بابكر",
      title: "",
      imageSrc: haythemPicture,
      tags: ["المشاريع", "الأثر المجتمعي"]
    },
    {
      name: "د. أكرم العدلوني",
      title: "",
      imageSrc: akramPicture,
      tags: ["القيادة", "الإدارة", "المنظمات"]
    },
    {
      name: "د. رضا الحديثي",
      title: "",
      imageSrc: ridhaPicture,
      tags: ["المشاريع التربوية", "الإدارة"]
    },
    {
      name: "أ. غزوان المصري",
      title: "",
      imageSrc: ghazwanPicture,
      tags: ["التمويل", "الاستثمار", "قيادة الأعمال"]
    },
  ];

  return (
    <section className="h-[1158px] bg-[#EDE6CC] w-full" id="speakers">
      <div className="container mx-auto pt-[138px] relative">
        <div className="absolute top-16 left-0">
          <Image src={vector1Src} alt="Vector" width={290} height={246} quality={100} />
        </div>
        <div className="absolute bottom-0 right-10">
          <Image src={vector2Src} alt="Vector" width={290} height={246} quality={100} />
        </div>
        <h2 className="text-[#252C32] text-[2.5rem] leading-[3.25rem] font-bold text-center">المتحدثون المتميزون</h2>
        <p className="mt-6 mb-24 max-w-3xl mx-auto text-center text-[#252C32] text-lg font-normal">
          يوفر لكم المؤتمر أفضل المتحدثين والمدربين لدعم وتعزيز مهارات رواد الأعمال وأصحاب الخبرة القوية في الأثر المجتمعي المستدام.
        </p>
        <Carousel className="w-full max-w-6xl mx-auto" opts={{
          direction: "rtl",
          slidesToScroll: 1,
        }}>
          <CarouselContent>
            {speakers.map((speaker, index) => (
              <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3 pl-10">
                <div className='rounded-3xl overflow-hidden border-none bg-white p-5 min-w-[269px]'>
                  <SpeakerCard {...speaker} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="relative flex md:justify-center mt-16 space-x-16">
            <CarouselPrevious className='relative bg-[#AD9E68]/20 border-none hover:bg-[#e4d9b0] h-10 w-10' />
            <CarouselNext className='relative bg-[#AD9E68]/20 border-none hover:bg-[#e4d9b0] h-10 w-10' />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
