import React, { useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/20/solid';
import TradingViewWidget from './TradingViewWidget';

const CryptoDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    'Overview', 'Fundamentals', 'News Insights', 
    'Sentiments', 'Team', 'Technicals', 'Tokenomics'
  ];

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-8 border-b pb-4">
          <div className="flex items-center gap-2">
            <img 
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png" 
              alt="Bitcoin" 
              className="w-9 h-9"
            />
            <h1 className="text-2xl font-semibold">Bitcoin</h1>
            <span className="text-gray-500">BTC</span>
          </div>
          <button className="bg-[#808A9D] text-white px-3 py-2 rounded-lg">
            Rank #1
          </button>
        </div>

        <div className="py-4">
          <div className="flex items-end gap-8">
            <div>
              <div className="text-3xl font-semibold">$46,953.04</div>
              <div className="text-lg">₹39,42,343</div>
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <ArrowUpIcon className="h-5 w-5" />
              <span>2.51%</span>
              <span className="text-gray-500">(24H)</span>
            </div>
          </div>
        </div>

        <div className="h-[400px] mt-4">
          <TradingViewWidget />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg p-6">
        <div className="border-b">
          <div className="flex gap-6 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`py-4 px-2 font-semibold whitespace-nowrap ${
                  activeTab === tab.toLowerCase() 
                    ? 'text-[#0052FE] border-b-2 border-[#0052FE]' 
                    : 'text-[#3E424A]'
                }`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content will go here */}
      </div>
    </div>
  );
};

export default CryptoDetails; 