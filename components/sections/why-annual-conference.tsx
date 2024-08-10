import Image from "next/image";
import feature1Src from "../../assets/features/feature-1.jpg";
import feature2Src from "../../assets/features/feature-2.jpg";
import feature3Src from "../../assets/features/feature-3.jpg";
import feature4Src from "../../assets/features/feature-4.jpg";
import omranLogoSrc from "../../assets/omran-letter-logo.svg";

const features = [
  {
    title: "الدورات والورشات التدريبية",
    description: "نقدم ورشات عمل تهدف إلى تطوير رواد الأعمال وتزويدهم بالمهارات والمعرفة اللازمة لنجاح مشاريعهم",
    imageSrc: feature1Src
  },
  {
    title: "المحاضرات التفاعلية",
    description: "نقدم ورشات عمل تهدف إلى تطوير رواد الأعمال وتزويدهم بالمهارات والمعرفة اللازمة لنجاح مشاريعهم",
    imageSrc: feature2Src
  },
  {
    title: "جلسات الإستشارة والمرافقة",
    description: "نقدم ورشات عمل تهدف إلى تطوير رواد الأعمال وتزويدهم بالمهارات والمعرفة اللازمة لنجاح مشاريعهم",
    imageSrc: feature3Src
  },
  {
    title: "عروض أيام الـB2B",
    description: "نقدم ورشات عمل تهدف إلى تطوير رواد الأعمال وتزويدهم بالمهارات والمعرفة اللازمة لنجاح مشاريعهم",
    imageSrc: feature4Src
  }
];

type Feature = typeof features[number];

const ConferenceFeature = ({ title, description, imageSrc }: Feature) => (
  <div>
    <Image src={imageSrc} alt={title} width={300} height={200} className="w-full object-cover rounded-[16px]" />
    <div className="p-5 lg:p-[1.375rem] relative bottom-8 bg-white rounded-2xl">
      <h3 className="text-[#252C32] text-base font-bold mb-4">{title}</h3>
      <p className="text-[#6B7280] text-[0.625rem] leading-[0.875rem] font-medium">{description}</p>
    </div>
  </div>
);

export const WhyAnnualConference = () => {
  return (
    <section className="bg-[#AD9E68] w-full">
      <div className="pt-[6.125rem] pb-[4.75rem] md:pb-[9.625rem] relative container mx-auto">
        <div className="absolute left-5 z-10">
          <Image src={omranLogoSrc} alt="Omran Logo" width={290} height={246} quality={100} />
        </div>
        <div>
          <div className="relative z-10">
            <h2 className="text-[2.5rem] leading-[3.25rem] font-bold text-white">لماذا المؤتمر السنوي؟</h2>
            <p className="text-white">
              تجمع المصممين حول العالم لنعالج إشكالية في مجال من مجالات حياة المسلمين، من خلال طرح المشاريع والمبادرات<br /> والتنافس حول جائزة عمران السنوية لأفضل مشروع يحقق الأثر المجتمعي المستدام.
            </p>
          </div>
          <div className="mt-[7.5rem] md:mt-[6.25rem] grid grid-cols-1 md:grid-cols-[minmax(0,17rem)_minmax(0,17rem)] lg:grid-cols-4 gap-x-4 lg:gap-8 w-fit mx-auto">
            {features.map((feature) => (
              <ConferenceFeature key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
