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
import SpeakerPicture from "../../assets/speaker-picture.jpg";
import vector1Src from "../../assets/speakers-vector-1.svg";
import vector2Src from "../../assets/speakers-vector-2.svg";

const SpeakerCard = ({ name, title, imageSrc, tags }) => (
  <div>
    <div>
      <Image
        src={imageSrc}
        alt={name}
        width={229}
        height={323}
        className="h-[323px] w-full object-cover rounded-lg"
      />
      <div>
        <h3 className="text-lg font-bold text-[#011318] text-right mt-4">{name}</h3>
        <p className="text-sm font-normal text-[#585B5C] text-right">{title}</p>
        <div className="flex justify-between gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-normal px-3 py-1 bg-[#E6EAEB] text-[#585B5C] rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center space-x-4 space-x-reverse mt-4">
          <FaFacebookF size={20} className="text-[#011318] hover:text-blue-600  cursor-pointer" />
          <FaInstagram size={20} className="text-[#011318] hover:text-pink-600 cursor-pointer" />
          <FaTwitter size={20} className="text-[#011318] hover:text-blue-400 cursor-pointer" />
          <FaYoutube size={20} className="text-[#011318] hover:text-red-600 cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
);

export const Speakers = () => {
  const speakers = [
    {
      name: "الدكتور فلان الفلاني",
      title: "من سلسلة كتاب المشاريع والأعمال إصدار يناير 2021",
      imageSrc: SpeakerPicture,
      tags: ["ريادة الأعمال", "تخطيط", "تجارة"]
    },
    {
      name: "الدكتور فلان الفلاني",
      title: "من سلسلة كتاب المشاريع والأعمال إصدار يناير 2021",
      imageSrc: SpeakerPicture,
      tags: ["ريادة الأعمال", "تخطيط", "تجارة"]
    },
    {
      name: "الدكتور فلان الفلاني",
      title: "من سلسلة كتاب المشاريع والأعمال إصدار يناير 2021",
      imageSrc: SpeakerPicture,
      tags: ["ريادة الأعمال", "تخطيط", "تجارة"]
    },
    {
      name: "الدكتور فلان الفلاني",
      title: "من سلسلة كتاب المشاريع والأعمال إصدار يناير 2021",
      imageSrc: SpeakerPicture,
      tags: ["ريادة الأعمال", "تخطيط", "تجارة"]
    },
    {
      name: "الدكتور فلان الفلاني",
      title: "من سلسلة كتاب المشاريع والأعمال إصدار يناير 2021",
      imageSrc: SpeakerPicture,
      tags: ["ريادة الأعمال", "تخطيط", "تجارة"]
    },
    {
      name: "الدكتور فلان الفلاني",
      title: "من سلسلة كتاب المشاريع والأعمال إصدار يناير 2021",
      imageSrc: SpeakerPicture,
      tags: ["ريادة الأعمال", "تخطيط", "تجارة"]
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
          لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
          أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا .
        </p>
        <Carousel className="w-full max-w-6xl mx-auto" opts={{
          direction: "rtl",
          slidesToScroll: 1,
        }}>
          <CarouselContent>
            {speakers.map((speaker, index) => (
              <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/4 pl-10">
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
