import { Separator } from '../ui/separator';

const TimelineEvent = ({ number, title, date, items }) => (
  <div className="flex mb-8">
    {/* Right side */}
    <div className="w-1/2 flex flex-col items-start gap-4 relative">
      <div className="absolute -right-32 top-5 text-[#AD9E68]/40 font-medium text-8xl">
        {number}
      </div>
      <p className="text-sm text-gray-500 text-right">{date}</p>
      <Separator orientation='horizontal' className='bg-[#AD9E68] h-[2px]' />
      <h3 className="text-[2.5rem] leading-[3.25rem] font-bold text-[#AD9E68] text-right text-balance">{title}</h3>
    </div>
    <Separator orientation='vertical' className='bg-[#AD9E68] w-[2px] h-auto mt-9' />
    {/* Left side: Timeline items */}
    <div className="w-1/2 mt-[1.1rem] ms-[0.15rem]">
      <div className="flex flex-col pb-8">
        {items.map((item, index) => (
          <div key={index} className="relative mb-8">
            <div className="absolute -right-3 top-3 w-4 h-4 bg-[#AD9E68] rounded-full" />
            <div className="px-8">
              <h4 className="text-[#252C32] text-[1.375rem] leading-[2rem] text-right mb-8 text-balance font-bold">{item.title}</h4>
              <div className="flex gap-8 items-center">
                <div className='text-white rounded-full px-5 py-2 bg-gradient-to-r from-[#AD9E68] from-0% to-[#47412B] to-100% text-xs'>{item.type}</div>
                <p className="text-lg text-[#AD9E68] text-right font-medium">{item.presenter}</p>
              </div>
            </div>
          </div>
        ))}
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
        { title: "قواعد في إدارة مشاريع مستدامة", presenter: "د. طارق السويدان", type: "ورشة تدريبية" },
        { title: "قوانين ومهارات في المؤسسية والقيادة بفعالية", presenter: "د. أكرم العدواني", type: "محاضرة تفاعلية" },
        { title: "الريادة في السوق", presenter: "م. هيثم باكير", type: "ورشة تدريبية" },
        { title: "مهارات الاستدامة وقياس الأثر الاجتماعي في القرن 21", presenter: "د. سامي العدواني", type: "ورشة تدريبية" },
      ]
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-white" dir="rtl">
      <div className="max-w-5xl mx-auto">
        {events.map((event, index) => (
          <TimelineEvent key={index} {...event} />
        ))}
      </div>
    </div>
  );
};
