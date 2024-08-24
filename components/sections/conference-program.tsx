import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TimelineItem = ({ title, presenter, type, isFirstInAccordion = false, hideCircle = false, eventNumber }) => {

  const pointerClasses = isFirstInAccordion
    ? eventNumber === "02"
      ? "-top-[10rem] sm:-top-[10.75rem] lg:-top-[1.5rem] -right-[1.68rem]"
      : eventNumber === "03"
        ? "-top-[10rem] sm:-top-[10.75rem] lg:-top-[1.5rem] -right-[1.68rem]"
        : "-top-[10rem] sm:-top-[1.4rem] -right-[1.68rem]"
    : "-top-[6px] -right-[1.68rem]";

  const getBgColor = () => {
    switch (type) {
      case 'محاضرة تدريبية':
        return 'bg-[#AD9E68]';
      case 'ورشة تدريبية':
        return 'bg-[#6B7280]';
      default:
        return 'bg-gradient-to-r from-[#AD9E68] from-0% to-[#47412B] to-100%';
    }
  };

  return (
    <div className="relative mb-12 flex-grow">
      <div className={`absolute w-4 h-4 bg-[#AD9E68] rounded-full ${hideCircle ? "hidden" : pointerClasses}`} />
      <div className='ps-4 lg:ps-8'>
        <h4 className="md:ml-2 lg:ml-0 text-[#252C32] md:text-[1.375rem] md:leading-[2rem] text-right mb-7 lg:mb-8 text-balance font-bold">{title}</h4>
        <div className="flex gap-4 sm:gap-7 md:gap-8 flex-col sm:flex-row items-start lg:items-center">
          <div className={`text-white rounded-full px-5 py-2 ${getBgColor()} text-xs`}>{type}</div>
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
    "03": "الثالث"
  }[number];

  return (
    <div className={`px-4 sm:px-0 lg:px-4 flex flex-col lg:flex-row relative ${+number === 2 ? 'mt-8 -top-20' : (+number === 3 ? '-top-32' : '')
      }`}>
      <div className="lg:w-1/2 flex-1 flex flex-col items-start gap-4 relative">
        <div className="xl:absolute order-1 lg:order-3 xl:-right-32 top-5 text-[#AD9E68]/40 font-medium text-[2.625rem] lg:text-8xl">
          {number}
        </div>
        <Separator orientation='horizontal' className='bg-[#AD9E68] h-[2px]' />
        <h3 className="sm:text-3xl ml-2 lg:ml-0 lg:text-[2.5rem] lg:leading-[3.25rem] font-bold text-[#AD9E68] text-right text-balance mb-4">{title}</h3>
        <p className="text-sm text-[#252C32]"><span className='text-[#AD9E68] font-bold'>اليوم {dayNumber}:</span> {date}</p>
      </div>
      <Separator orientation='vertical' className='bg-[#AD9E68] w-[0.125rem] absolute lg:static inset-y-0 left-4 sm:left-0 lg:h-auto' />
      <div className="lg:w-1/2 flex-1 ms-[0.15rem]">
        <div className={`${+number === 3 ? 'pb-0' : 'pb-32'} flex flex-col`}>
          <Accordion type="single" defaultValue="item-01" collapsible className="w-full lg:ms-4">
            <AccordionItem value={`item-${number}`} className='bg-[#AD9E68]/20 ml-[1.375rem] rounded-2xl'>
              <AccordionTrigger className="text-[#252C32] text-[1.375rem] leading-[2rem] text-right mb-4 text-balance font-bold hover:no-underline">
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
      title: "مهارات معاصرة في استدامة المشاريع",
      date: "11 أكتوبر 2024",
      items: [
        {
          title: "قواعد في استدامة المشاريع", presenter: "د. طارق السويدان", type: "دورة تدريبية",
          isAccordion: true,
          subItems: [
            { title: "قوانين ومهارات في المؤسسية والقيادة بفعالية", presenter: "د. أكرم العدلوني", type: "محاضرة تدريبية" },
            { title: "مهارات الريادة في السوق", presenter: "د. هيثم بابكر", type: "ورشة تدريبية" },
            { title: "مهارات الاستدامة وقياس الأثر الاجتماعي في القرن 21", presenter: "د. سامي العدواني", type: "ورشة تدريبية" },
          ]
        },
      ]
    },
    {
      number: "02",
      title: "ركائز وأخلاقيات ومفاهيم متقدمة",
      date: "12 أكتوبر 2024",
      items: [
        {
          title: "الشروط الخمسة للمشاريع النهضوية",
          presenter: "د. عبد الرزاق مقري",
          type: "محاضرة تفاعلية",
          isAccordion: true,
          subItems: [
            { title: "التحديات المعاصرة والنموذج الحضاري في الإسلام", presenter: "أ. وضاح خنفر", type: "ندوة حوارية" },
            { title: "ركائز في إدارة المشاريع", presenter: "د. عبد الرزاق هزي", type: "ورش العمل" },
          ]
        },
      ]
    },
    {
      number: "03",
      title: "قوة الإمكان الشبابي",
      date: "13 أكتوبر 2024",
      items: [
        {
          title: "الإمكان الشبابي في بيئة الأعمال",
          presenter: "أ. إبراهيم الهواري",
          type: "محاضرة تدريبية",
          isAccordion: true,
          subItems: [
            { title: "موقع المشاريع في الإعداد الحضاري وتغيير الواقع", presenter: "د. عبد الكريم بكار", type: "ندوة حوارية" },
            { title: "10 مشاريع نهضوية رائدة في معالجة أزمات الأمّة الخمس", presenter: "منصة المشاريع", type: "العروض التقديمية" },
            { title: "جائزة عمران السنوية ", presenter: "عُمران", type: "المُسابقة" },
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
