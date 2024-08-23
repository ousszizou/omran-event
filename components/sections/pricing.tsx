import React from "react";
import { Check, Minus } from "lucide-react";
import { IframeModal } from "../IFrameModal";

const plans = [
  { name: "نحاسي", price: "$200" },
  { name: "فضي", price: "$350" },
    { name: "ذهبي", price: "$500" },
  ];

  const features = [
    { name: "الفعاليات التدريبية", isCategory: true },
    {
      name: "اليوم التدريبي حول المشاريع (6 ساعات تدريبية)",
      copper: true,
      silver: true,
      gold: true,
    },
    {
      name: "الورش التدريبية المتخصصة (6 جلسات)",
      copper: true,
      silver: true,
      gold: true,
    },
    {
      name: "المحاضرات والجلسات الحوارية (8)",
      copper: true,
      silver: true,
      gold: true,
    },
    { name: "الخدمات الاستشارية", isCategory: true },
    {
      name: "الاستشارات والحلول مع مرشدي الأعمال",
      copper: true,
      silver: true,
      gold: true,
    },
    { name: "المواد التدريبية", isCategory: true },
    {
      name: "المواد المرئية للمُؤتمر (التدريب و الورش و الصور)",
      copper: true,
      silver: true,
      gold: true,
    },
    { name: "فرص التواصل", isCategory: true },
    {
      name: "جلسة مفتوحة لبناء العلاقات",
      copper: true,
      silver: true,
      gold: true,
    },
    {
      name: "اللقاء مع المستثمرين و المتبرعين",
      copper: true,
      silver: true,
      gold: true,
    },
    { name: "الخدمات الإضافية", isCategory: true },
    { name: "استراحة الشاي 2 يوميا", copper: true, silver: true, gold: true },
    { name: "شهادة المشاركة", copper: true, silver: true, gold: true },
    { name: "المبيت في نفس الفندق", copper: false, silver: true, gold: true },
    { name: "وجبات الإفطار والعشاء", copper: false, silver: true, gold: true },
    { name: "عرض المشاريع", isCategory: true },
    { name: "أجنحة العرض للمشاريع", copper: false, silver: false, gold: true },
    {
      name: "عرض المشروع في موقع المؤتمر (بعد الفعالية مباشرة)",
      copper: false,
      silver: false,
      gold: true,
    },
  ];

export const PricingSection = () => {
  
  return (
    <section className="container mx-auto py-16" id="pricing">
      <h1 className="text-[#252C32] text-[2.5rem] leading-[3.25rem] font-bold text-center mb-4">
        باقات المشاركة
      </h1>
      <p className="max-w-3xl mx-auto text-center text-[#252C32] text-lg font-normal mb-24 text-balance">
        اختر الباقة المناسبة لاحتياجاتك واهدافك في المؤتمر
        تتوفر خصومات خاصة بمجموعة الأفراد تصل إلى 20٪ لكل فرد (5 أفراد فما فوق)
      </p>

      <div className="hidden md:grid grid-cols-4 relative">
        {/* Highlighted background for Gold column (last one) */}
        <div className="none md:block absolute top-0 bottom-0 left-0 right-3/4 bg-[#AD9E68]/5 border border-[#AD9E68]/30 rounded-2xl" />

        <div className="col-span-1" />
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`col-span-1 ${index === 2 ? "bg-transparent" : ""} relative z-10 p-6`}
          >
            <div className="text-xl font-semibold text-right mb-2">
              {plan.name}
            </div>
            <div className="text-3xl font-bold text-right mb-4">
              {plan.price}
              <span className="text-base font-normal text-gray-500">
                /للمؤتمر
              </span>
            </div>
            <IframeModal formUrl="https://docs.google.com/forms/d/e/1FAIpQLSdpGGnQUX15Wbl4n58FDL2BpTsrp7a6gie475H-rVqv-p5xFQ/viewform?embedded=true">
              <button
                type="button"
                className={`w-full py-3 px-6 rounded-full ${index === 2 ? "bg-[#AD9E68] text-white" : "bg-white text-[#AD9E68] border border-[#AD9E68] hover:bg-[#AD9E68] hover:text-white"}`}
              >
                اشترك الآن
              </button>
            </IframeModal>

          </div>
        ))}

        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div
              className={`col-span-4 ${feature.isCategory ? "mt-12" : "border-t border-gray-200"}`}
            >
              <div
                className={`grid grid-cols-4 ${feature.isCategory ? "font-semibold text-lg" : ""}`}
              >
                <div className="col-span-1 py-3 flex items-center justify-start relative z-10 text-balance">
                  {feature.name}
                </div>
                {!feature.isCategory &&
                  plans.map((plan, planIndex) => (
                    <div
                      key={`${index}-${planIndex}`}
                      className="col-span-1 flex justify-center items-center py-3 relative z-10"
                    >
                      <FeatureItem
                        included={
                          feature[["copper", "silver", "gold"][planIndex]] ===
                          true
                        }
                        value={
                          typeof feature[
                            ["copper", "silver", "gold"][planIndex]
                          ] === "string"
                            ? feature[["copper", "silver", "gold"][planIndex]]
                            : null
                        }
                      />
                    </div>
                  ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      
      <div className="max-w-lg mx-auto md:hidden grid grid-cols-1 gap-6">
        {plans.map((plan, planIndex) => (
          <div key={planIndex} className={`p-6 sm:p-8 rounded-2xl ${plan.name === "ذهبي" && "bg-[#AD9E68]/5 border border-[#AD9E68]/30"}`}>
            <h3 className="text-sm">
              {plan.name}
            </h3>
            <p className="mb-8 mt-2">
              <span className="text-4xl">{plan.price}</span>
              <span>/للمؤتمر</span>
            </p>
            <button
              type="button"
              className={`w-full py-2 px-6 rounded-full ${planIndex === 2 ? "bg-[#AD9E68] text-white" : "bg-white text-[#AD9E68] border border-[#AD9E68] hover:bg-[#AD9E68] hover:text-white"}`}
            >
              اشترك الآن
            </button> 
            <div className="mt-10 space-y-2">
              {features.filter((feature, featureIndex) => (
                feature[["copper", "silver", "gold"][planIndex]]
              )).map((feature) => (
                <div className="flex gap-2 text-sm sm:text-base">
                  <FeatureItem value={feature[["copper", "silver", "gold"][planIndex]]} included />
                  <span>{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FeatureItem = ({ included, value }) => (
  <div className="flex items-center justify-center">
    {included ? (
      <Check className="w-5 h-5 text-[#AD9E68]" />
    ) : value ? (
      <span className="text-sm text-gray-600">{value}</span>
    ) : (
      <Minus className="w-5 h-5 text-gray-300" />
    )}
  </div>
);
