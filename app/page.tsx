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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-[120px]">
      <OmranHeader />
      <WhyAnnualConference />
      <ConferenceProgram />
      <CallToAction />
      <Speakers />
      <div className="flex flex-col items-center gap-24 pt-[136px] w-full bg-white">
        <OmranAnnualAward />
        <AwardsBadges />
        <div className="flex flex-col items-center gap-8 relative">
          <Image src={omranRewardLogo} alt="Omran Reward Logo" width={172} height={412} />
          <div className='flex flex-col items-center gap-[2.5rem]'>
            <h3 className="text-[1.75rem] leading-[2.5rem] font-bold text-[#252C32]">رشح مشروعك لجائزة عمران السنوية</h3>
            <Button className="bg-[#AD9E68] text-white rounded-full text-base h-12 px-6 font-medium">
              قدم مشروعك الآن
            </Button>
          </div>
        </div>
      </div>
      <Partners />
    </main>
  );
}
