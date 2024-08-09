import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TimelineEvent = ({ number, title, date, items, isAccordion = false }) => (
  <div className="flex mb-8">
    <div className="flex flex-col items-center mr-4">
      <div className="w-12 h-12 bg-[#C3B897] rounded-full flex items-center justify-center text-white text-2xl font-bold">
        {number}
      </div>
      <div className="w-0.5 bg-[#C3B897] grow mt-2" />
    </div>
    <div className="grow">
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-2xl font-bold text-right text-[#C3B897]">{title}</h3>
      </div>
      {isAccordion ? (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-right">{items[0].title}</AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between items-center">
                <Button variant="secondary" size="sm" className="bg-[#C3B897] text-white">
                  {items[0].type}
                </Button>
                <p className="text-sm text-gray-600 text-right">{items[0].presenter}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        items.map((item, index) => (
          <Card key={index} className="mb-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <Button variant="secondary" size="sm" className="bg-[#C3B897] text-white">
                  {item.type}
                </Button>
                <h4 className="text-lg font-semibold text-right">{item.title}</h4>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-right">{item.presenter}</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  </div>
);

export const ConferenceProgram = () => {
  const events = [
    {
      number: "01",
      title: "مهارات معاصرة في استدامة المشاريع",
      date: "10.08.2024 12:00pm",
      items: [
        { title: "قواعد في إدارة مشاريع مستدامة", presenter: "د. طارق السويدان", type: "ورشة تدريبية" },
        { title: "قوانين ومهارات في المؤسسية والقيادة بفعالية", presenter: "د. أكرم العدواني", type: "محاضرة تفاعلية" },
        { title: "الريادة في السوق", presenter: "م. هيثم باكير", type: "ورشة تدريبية" },
        { title: "مهارات الاستدامة وقياس الأثر الاجتماعي في القرن 21", presenter: "د. سامي العدواني", type: "ورشة تدريبية" },
      ]
    },
    {
      number: "02",
      title: "ركائز وأخلاقيات ومفاهيم متقدمة",
      date: "10.08.2024 12:00pm",
      items: [
        { title: "الشروط الخمسة للمشاريع النهضوية", presenter: "د. عبد الرزاق عماري", type: "محاضرة تفاعلية" },
      ],
      isAccordion: true
    },
    {
      number: "03",
      title: "قوة الإمكان الشبابي",
      date: "10.08.2024 12:00pm",
      items: [
        { title: "الإمكان الشبابي في بيئة الأعمال", presenter: "أ. إبراهيم الهزاني", type: "ورشة تدريبية" },
      ],
      isAccordion: true
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">برنامج المؤتمر</h2>
        {events.map((event, index) => (
          <TimelineEvent key={index} {...event} />
        ))}
      </div>
    </section>
  );
};
