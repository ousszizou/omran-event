import React from 'react';
import Image from 'next/image';
import OmranAnnualAwardImage from "../../assets/omran-annual-award.svg";

export const OmranAnnualAward = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
        <div className="md:w-3/5 text-[#6B7280] order-2 md:order-1">
          <h2 className="text-2xl md:text-[2.5rem] leading-[3.25rem] font-bold mb-6 text-[#252C32]">جائزة عمران السنوية</h2>
          <p className="text-lg font-medium md:font-normal max-w-xl">
            تتنافس المشاريع على جائزة عمران السنوية التي تقدر بـ <span className='text-[#AD9E68]'>10 آلاف دولار</span>، وهي
            مفتوحة لجميع المشاريع المتميزة التي تتوفر فيها الشروط التالية:
          </p>
          <ul className="list-disc list-inside space-y-4 text-sm font-normal mt-8">
            <li>التسجيل في منصة حاضنة عمران</li>
            <li>التسجيل في استمارة الترشح لجائزة عمران السنوية</li>
            <li>يجب أن يتوفر فيها على الأقل:</li>
            <ul className="list-disc list-inside space-y-4 ms-4">
              <li>فريق عمل (أكثر من ثلاث أعضاء)</li>
              <li>منتج أو خدمة قيد التشغيل</li>
              <li>سوق أو مجموعة عملاء</li>
              <li>بيانات دقيقة وسليمة</li>
              <li>عوامل الاستدامة</li>
              <li>الميزة التنافسية: نقاط التفرد USP</li>
            </ul>
            <li>المشاركة بالعرض في المؤتمر</li>
          </ul>
        </div>
        <div className="md:w-2/5 order-1 md:order-2 mb-8 md:mb-0">
          <Image
            src={OmranAnnualAwardImage}
            alt="جائزة عمران السنوية"
            width={550}
            height={680}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
