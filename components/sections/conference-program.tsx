import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TimelineItem = ({ title, presenter, type, isAccordion = false, isFirstInAccordion = false, eventNumber }) => {

  const pointerClasses = isFirstInAccordion
    ? eventNumber === "02"
      ? "-top-[0.3rem] -right-[2.73rem]"
      : eventNumber === "03"
        ? "-top-[0.3rem] -right-[2.7rem]"
        : "top-3 -right-3"
    : "top-3 -right-3";

  return (
    <div className="relative mb-12">
      <div className={`absolute w-4 h-4 bg-[#AD9E68] rounded-full ${pointerClasses}`} />
      <div className={`${eventNumber !== "01" ? 'ps-8' : 'ps-16'}`}>
        <h4 className="text-[#252C32] text-[1.375rem] leading-[2rem] text-right mb-8 text-balance font-bold">{title}</h4>
        <div className="flex gap-8 items-center">
          <div className='text-white rounded-full px-5 py-2 bg-gradient-to-r from-[#AD9E68] from-0% to-[#47412B] to-100% text-xs'>{type}</div>
          <p className="text-lg text-[#AD9E68] text-right font-medium">{presenter}</p>
        </div>
      </div>
    </div>
  )
};

const TimelineEvent = ({ number, title, date, items }) => (
  <div className={`flex relative ${+number === 2 ? 'mt-8 -top-20' : (+number === 3 ? '-top-32' : '')
    }`}>
    <div className="w-1/2 flex flex-col items-start gap-4 relative">
      <div className="absolute -right-32 top-5 text-[#AD9E68]/40 font-medium text-8xl">
        {number}
      </div>
      <p className="text-sm text-gray-500 text-right">{date}</p>
      <Separator orientation='horizontal' className='bg-[#AD9E68] h-[2px]' />
      <h3 className="text-[2.5rem] leading-[3.25rem] font-bold text-[#AD9E68] text-right text-balance">{title}</h3>
    </div>
    <Separator orientation='vertical' className='bg-[#AD9E68] w-[2px] h-auto mt-9' />
    <div className="w-1/2 mt-[1.1rem] ms-[0.15rem]">
      <div className={`${+number === 2 ? 'pb-32' : +number === 3 ? 'pb-0' : 'pb-16'} flex flex-col`}>
        {items.length === 1 && items[0].isAccordion ? (
          <Accordion type="single" collapsible className="w-full ms-8">
            <AccordionItem value="item-1" className='bg-[#AD9E68]/20 rounded-2xl'>
              <AccordionTrigger className="text-[#252C32] text-[1.375rem] leading-[2rem] text-right mb-4 text-balance font-bold hover:no-underline">
                <TimelineItem {...items[0]} isFirstInAccordion={true} eventNumber={number} />
              </AccordionTrigger>
              <AccordionContent>
                {items[0].subItems.map((subItem, index) => (
                  <TimelineItem key={index} {...subItem} eventNumber={number} />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          items.map((item, index) => <TimelineItem key={index} {...item} eventNumber={number} />)
        )}
      </div>
    </div>
  </div>
);

export const ConferenceProgram = () => {
  const events = [
    {
      number: "01",
      title: "مهارات معاصرة في استدامة المشاريع",
      date: "12:00pm 10.08.2024",
      items: [
        { title: "قواعد في إدارة مشاريع مستدامة", presenter: "د. طارق السويدان", type: "دورة تدريبية" },
        { title: "قوانين ومهارات في المؤسسية والقيادة بفعالية", presenter: "د. أكرم العدلوني", type: "محاضرة تدريبية" },
        { title: "مهارات الريادة في السوق", presenter: "", type: "ورشة تدريبية" },
        { title: "مهارات الاستدامة وقياس الأثر الاجتماعي في القرن 21", presenter: "د. سامي العدواني", type: "ورشة تدريبية" },
      ]
    },
    {
      number: "02",
      title: "ركائز وأخلاقيات ومفاهيم متقدمة",
      date: "12:00pm 10.08.2024",
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
      date: "12:00pm 10.08.2024",
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
    <div className="pt-[8.5rem] bg-white" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <h1 className='text-center text-[2.5rem] leading-[3.25rem] font-bold mb-[8.5rem]'>برنامج المؤتمر</h1>
        {events.map((event, index) => (
          <TimelineEvent key={index} {...event} />
        ))}
      </div>
    </div>
  );
};
