import { WhyAnnualConference } from "@/components/sections/why-annual-conference";
import { ConferenceProgram } from "@/components/sections/conference-program";
import { CallToAction } from "@/components/sections/call-to-action";
import { Speakers } from "@/components/sections/speakers";
import { OmranAnnualAward } from "@/components/sections/omran-annual-award";
import { AwardsBadges } from "@/components/sections/awards-badges";
import { Partners } from "@/components/sections/partners";
import { OmranHeader } from "@/components/sections/omran-header";
import omranRewardLogo from "../assets/omran-reward-logo.svg";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { PricingSection } from "@/components/sections/pricing";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="h-[120px] w-full bg-black" />
      <OmranHeader />
      <WhyAnnualConference />
      <ConferenceProgram />
      <Speakers />
      <CallToAction />
      <div className="flex flex-col items-center gap-24 pt-[136px] w-full bg-white">
        <PricingSection />
        <OmranAnnualAward />
        <AwardsBadges />
        <div className="flex flex-col items-center gap-8 relative mt-16">
          <Image src={omranRewardLogo} alt="Omran Reward Logo" width={172} height={412} />
          <div className='flex flex-col items-center px-4 md:px-0 text-center gap-[2.5rem]'>
            <span className="font-bold text-[#AD9E68] text-3xl text-balance">قيمة الجائزة 10 آلاف دولار</span>
            <h3 className="text-[1.375rem] md:text-[1.75rem] md:leading-[2.5rem] font-bold text-[#252C32]">رشح مشروعك لجائزة عمران السنوية</h3>
            <Button className="bg-[#AD9E68] text-white rounded-full text-base px-[1.125rem] py-1.5 md:h-12 md:px-6 font-medium" asChild>
              <a href="https://incubator.omran.org/projects/create" target="_blank" rel="noreferrer"> قدم مشروعك الآن</a>
            </Button>
          </div>
        </div>
      </div>
      <Partners />
    </main>
  );
}
