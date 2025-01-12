import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const Sentiment = () => {
  const keyEvents = [
    {
      icon: "📈",
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      color: "bg-[#E8F4FD]",
    },
    {
      icon: "📉",
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      color: "bg-[#EBF9F4]",
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Sentiment</h2>
      
      <div className="mb-6">
        <div className="flex items-center gap-2 text-[#44475B] font-semibold text-lg mb-4">
          <span>Key Events</span>
          <InformationCircleIcon className="h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4">
          {keyEvents.map((event, index) => (
            <div 
              key={index}
              className={`${event.color} p-4 rounded-lg min-w-[456px]`}
            >
              <div className="flex gap-4">
                <div className="text-2xl">{event.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-[#3E424A] leading-6">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 text-[#44475B] font-semibold text-lg mb-4">
          <span>Analyst Estimates</span>
          <InformationCircleIcon className="h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center justify-center w-32 h-32 rounded-full bg-[#EBF9F4] text-[#0FBA83] text-4xl font-semibold">
            76%
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-[#7C7E8C]">Buy</span>
              <div className="flex-1 h-2 bg-[#00B386] rounded-sm" style={{width: '76%'}} />
              <span className="w-12 text-sm text-[#7C7E8C]">76%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-[#7C7E8C]">Hold</span>
              <div className="flex-1 h-2 bg-[#C7C8CE] rounded-sm" style={{width: '8%'}} />
              <span className="w-12 text-sm text-[#7C7E8C]">8%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-[#7C7E8C]">Sell</span>
              <div className="flex-1 h-2 bg-[#F7324C] rounded-sm" style={{width: '16%'}} />
              <span className="w-12 text-sm text-[#7C7E8C]">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment; 