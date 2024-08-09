import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import OmranConference from "../../assets/omran-conference.svg";

export const CallToAction = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-t from-[#252C32] from-15% via-[#708698] via-100% text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-right max-w-2xl mb-8 md:mb-0">
            <h2 className="text-4xl leading-tight font-bold mb-6">شراكات فاعلة، مستقبل مزدهر</h2>
            <p className="text-base font-semibold mb-8">
              ندعو رواد الأعمال والمستثمرين إلى خلق أفكار مبتكرة وتطوير مشاريع تساهم
              في بناء مستقبل أفضل. نؤمن بأن المشاريع الناجحة في ذلك هي التي تستطيع
              أن تتجاوز التحديات وتستغل الفرص التي يوفرها الواقع المتغير، وتساهم في
              تحقيق التنمية المستدامة والرخاء المجتمعي.
            </p>
            <Button className="bg-[#AD9E68] text-white rounded-full text-base h-12 px-6 font-medium">
              سجل الآن
            </Button>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={OmranConference}
              alt="المؤتمر السنوي"
              width={202}
              height={364}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
