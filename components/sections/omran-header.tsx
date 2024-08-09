"use client";

import Image from "next/image";
import backgroundSrc from "../../assets/header-bg.png";
import { Button } from "../ui/button";
import { useCountdown } from "@/hooks/use-countdown";
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';

export const OmranHeader = () => {
  const { days, hours, minutes, seconds } = useCountdown(new Date('2024-08-11'));
  return (
    <header className="relative w-full h-screen flex items-center justify-center">
      <Image
        className="object-cover"
        src={backgroundSrc}
        alt="Omran Conference"
        fill
        quality={100}
        priority={true}
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-white text-center flex flex-col gap-[5.25rem]">
        <div className="flex flex-col gap-6 items-center">
          <p className="font-medium text-2xl leading-9 opacity-80">
            مشاريعٌ ناهضةٌ في واقعٍ مُتغيّر
          </p>
          <h1 className="text-[4rem] leading-[4.25rem] font-bold">مؤتمر عمران السنوي<br /> 2024</h1>
          <Button className="bg-white text-[#011318] text-base hover:bg-[#E6EAEB] rounded-full border border-solid border-[#E6EAEB] min-w-[8.5rem] h-12 px-6 font-medium">سجل الآن</Button>
        </div>
        <div className="font-bold text-base text-start flex items-start gap-[5.25rem]">
          <div className="flex items-start gap-4">
            <MapPin />
            <p>فندق istanbul baya fair & suite <br />- مدينة اسطنبول، تركيا.</p>
          </div>
          <div className="flex items-start gap-4">
            <CalendarDays />
            <p>10-11 أكتوبر 2024 • 11-12 أكتوبر 2024</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
          <CountdownUnit value={days} label="أيام" />
          <CountdownUnit value={hours} label="ساعات" />
          <CountdownUnit value={minutes} label="دقائق" />
          <CountdownUnit value={seconds} label="ثواني" />
        </div>
      </div>
    </header>
  );
};

interface CountdownUnitProps {
  value: number;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => {
  const formattedValue = value < 10 ? `0${value}` : `${value}`;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white bg-opacity-20 rounded-xl flex flex-col justify-center items-center overflow-hidden backdrop-blur-md px-[1.125rem] py-[0.563rem] gap-[0.875rem] w-[9rem] h-[8.875rem]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[5.375rem] font-normal leading-[4.063rem]"
          >
            {formattedValue}
          </motion.div>
        </AnimatePresence>
        <div className="text-base font-medium opacity-60">{label}</div>
      </div>
    </div>
  );
};
