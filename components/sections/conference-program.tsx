import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TimelineItem = ({ title, presenter, type, isFirstInAccordion = false, hideCircle = false, eventNumber }) => {

  const getTopClass = () => {
    return eventNumber === "01"
      ? "-top-[7.3rem] md:-top-[1.4rem]"
      : "-top-[7.3rem] md:-top-[23px]";
  };

  const pointerClasses = `${getTopClass()} -right-[6px] md:-right-[27px]`;

  const getBgColor = () => {
    switch (type) {
      case 'محاضرة':
        return 'bg-[#6AAA72]';
      case 'ندوة حوارية':
        return 'bg-[#6AAA72]';
      case 'برنامج تدريبي':
        return 'bg-[#6D9CB6]';
      case 'ورش عمل':
        return 'bg-[#6D9CB6]';
      case 'جلسات مفتوحة':
        return 'bg-[#AD6DA7]';
      case 'جلسة مفتوحة':
        return 'bg-[#AD6DA7]';
      case 'عروض تقديمية':
        return 'bg-[#AD6DA7]';
      default:
        return '';
    }
  };

  return (
    <div className={`relative flex-grow ${isFirstInAccordion ? '' : 'mb-12'}`}>
      <div className={`absolute w-4 h-4 bg-[#AD9E68] rounded-full ${hideCircle ? "hidden" : pointerClasses}`} />
      <div className='ps-4 lg:ps-8'>
        <h4 className="md:ml-2 lg:ml-0 text-[#252C32] md:text-[1.375rem] md:leading-[2rem] text-right mb-7 lg:mb-8 text-balance font-bold">{title}</h4>
        <div className="flex gap-4 sm:gap-7 md:gap-8 flex-col sm:flex-row items-start lg:items-center">
          {type && <div className={`text-white rounded-full font-bold px-5 py-2 ${getBgColor()} text-xs`}>{type}</div>}
          {/* <p className="text-xs md:text-lg text-[#AD9E68] text-right font-medium">{presenter}</p> */}
        </div>
      </div>
    </div>
  )
};

const TimelineEvent = ({ number, title, date, items }) => {
  const dayNumber = {
    "01": "الأول",
    "02": "الثاني",
    "03": "الثالث",
    "04": "الثالث"
  }[number];

  const getPositionClasses = () => {
    switch (number) {
      case "02":
        return 'mt-8 -top-20';
      case "03":
        return '-top-32';
      case "04":
        return '-top-44';
      default:
        return '';
    }
  };

  return (
    <div className={`px-4 sm:px-0 lg:px-4 flex flex-col lg:flex-row relative ${getPositionClasses()}`}>
      <div className="lg:w-1/2 flex-1 flex flex-col items-start gap-4 relative">
        <div className="hidden lg:block xl:absolute order-1 lg:order-3 xl:-right-32 top-5 text-[#AD9E68]/40 font-medium text-[2.625rem] lg:text-8xl">
          {number}
        </div>
        <Separator orientation='horizontal' className='bg-[#AD9E68] h-[2px]' />
        <h3 className="sm:text-3xl ml-2 lg:ml-0 lg:text-[2.5rem] lg:leading-[3.25rem] font-bold text-[#AD9E68] text-right text-balance mb-0 lg:mb-4">
          <span className='inline lg:hidden'>{number} - </span>
          {title}
        </h3>
        <p className="text-sm text-[#252C32] mb-4 lg:mb-0"><span className='text-[#AD9E68] font-bold'>اليوم {dayNumber}:</span> {date}</p>
      </div>
      <Separator orientation='vertical' className='bg-[#AD9E68] w-[0.125rem] absolute lg:static inset-y-0 left-4 sm:left-0 lg:h-auto' />
      <div className="lg:w-1/2 flex-1 ms-[0.15rem]">
        <div className={`${+number === 4 ? 'pb-0' : 'pb-32'} flex flex-col`}>
          <Accordion type="single" defaultValue="item-01" collapsible className="w-full lg:ms-4">
            <AccordionItem value={`item-${number}`} className='bg-[#AD9E68]/20 ml-[1.375rem] rounded-2xl'>
              <AccordionTrigger className="text-[#252C32] text-[1.375rem] leading-[2rem] text-right mb-4 text-balance hover:no-underline">
                <TimelineItem {...items[0]} isFirstInAccordion={true} eventNumber={number} />
              </AccordionTrigger>
              <AccordionContent>
                {items[0].subItems.map((subItem, index) => (
                  <TimelineItem key={index} {...subItem} eventNumber={number} hideCircle />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export const ConferenceProgram = () => {
  const events = [
    {
      number: "01",
      title: "شروط نهضة الامة",
      date: "11 أكتوبر 2024",
      items: [
        {
          title: "الشروط الخمسة للمشاريع النهضوية", presenter: "", type: "محاضرة",
          isAccordion: true,
          subItems: [
            { title: "معادلة التغيير الحضاري في الأمة", presenter: "", type: "محاضرة" },
            { title: "مقهى عمران للمرافقة والاستشارات", presenter: "", type: "جلسة مفتوحة" },
          ]
        },
      ]
    },
    {
      number: "02",
      title: "مهارات معاصرة في استدامة المشاريع",
      date: "12 أكتوبر 2024",
      items: [
        {
          title: "قواعد في استدامة المشاريع", presenter: "", type: "برنامج تدريبي",
          isAccordion: true,
          subItems: [
            { title: "ركائز في إدارة وتنفيذ المشاريع", presenter: "", type: "ورش عمل" },
            { title: "مقهى عمران للمرافقة والاستشارة", presenter: "", type: "جلسات مفتوحة" },
          ]
        },
      ]
    },
    {
      number: "03",
      title: "مفاهيم وأخلاقيات في ممارسة الأعمال",
      date: "13 أكتوبر 2024",
      items: [
        {
          title: "ريادة الأعمال والخصوصية الحضارية",
          presenter: "",
          type: "ندوة حوارية",
          isAccordion: true,
          subItems: [
            { title: "مقهى عمران للمرافقة والاستشارة ", presenter: "", type: "جلسات مفتوحة" },
          ]
        },
      ]
    },
    {
      number: "04",
      title: "قوة الإمكان الشبابي",
      date: "13 أكتوبر 2024",
      items: [
        {
          title: "استراتيجية عمران للخمس سنوات القادمة",
          presenter: "",
          type: "عروض تقديمية",
          isAccordion: true,
          subItems: [
            { title: "الجائزة السنوية لأفضل مشروع بالأمة", presenter: "", type: "عروض تقديمية" },
            { title: "الإعلان عن الفائز بالجائزة السنوية الأولى", presenter: "", type: "" },
          ]
        },
      ]
    },
  ];

  return (
    <div className="pt-16 bg-white" dir="rtl" id="program">
      <div className="max-w-5xl mx-auto">
        <h1 className='text-center text-[2.5rem] leading-[3.25rem] font-bold mb-14 md:mb-[8.5rem]'>برنامج المؤتمر</h1>
        {events.map((event, index) => (
          <TimelineEvent key={index} {...event} />
        ))}
      </div>
    </div>
  );
};
