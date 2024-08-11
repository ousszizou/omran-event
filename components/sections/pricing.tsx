import React from "react";
import { Check, Minus } from "lucide-react";

const plans = [
    { name: "نحاسي", price: "$150" },
    { name: "فضي", price: "$300" },
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
    <section className="container mx-auto py-16">
      <p className="text-center text-sm font-semibold text-[#AD9E68] mb-2">
        باقات المشاركة
      </p>
      <h1 className="text-[#252C32] text-[2.5rem] leading-[3.25rem] font-bold text-center mb-4">
        خيارات متنوعة لتلبية احتياجاتك
      </h1>
      <p className="max-w-3xl mx-auto text-center text-[#252C32] text-lg font-normal mb-24">
        اختر الباقة المناسبة لاحتياجاتك وأهدافك في المؤتمر
      </p>

      <div className="grid grid-cols-4 relative">
        {/* Highlighted background for Gold column (last one) */}
        <div className="absolute top-0 bottom-0 left-0 right-3/4 bg-[#AD9E68]/5 border border-[#AD9E68]/30 rounded-2xl" />

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
            <button
              type="button"
              className={`w-full py-3 px-6 rounded-full ${index === 2 ? "bg-[#AD9E68] text-white" : "bg-white text-[#AD9E68] border border-[#AD9E68] hover:bg-[#AD9E68] hover:text-white"}`}
            >
              اشترك الآن
            </button>
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
