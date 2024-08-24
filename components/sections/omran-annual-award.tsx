import React from 'react';
import Image from 'next/image';
import OmranAnnualAwardImage from "../../assets/omran-annual-award.svg";

export const OmranAnnualAward = () => {
  return (
    <section className="container mx-auto" id="award">
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
        <div className="md:w-3/5 text-[#6B7280] order-2 md:order-1">
          <h2 className="text-2xl md:text-[2.5rem] leading-[3.25rem] font-bold mb-6 text-[#252C32]">جائزة عمران السنوية</h2>
          <p className="text-lg font-medium md:font-normal max-w-xl">
            تتنافس فرق عمل المشاريع على جائزة عمران السنوية المقدرة بـ <span className='text-[#AD9E68]'>10 آلاف دولار سنويا</span>، وهي مفتوحة لجميع المشاريع التي تثبت فيها الشروط التالية: 
          </p>
          <ul className="list-disc list-inside space-y-4 text-sm font-normal mt-8">
            <li>الاشتراك في المؤتمر</li>
            <li>رفع بيانات المشروع عبر منصة عمران</li>
            <li>فريق عمل (عضوين على الأقل فما فوق)</li>
            <li>عمر المشروع أقل من ثلاث سنوات</li>
            <li>المشروع مسجل قانونيًا أو ضمن المنظمة الأم</li>
            <li>لدى المشروع منتج/ خدمة في السوق/ الجمهور</li>
            <li>لدى المشروع مقومات الاستمرارية / الاستدامة</li>
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
