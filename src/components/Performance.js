import React from 'react';

const Performance = () => {
  const fundamentals = [
    { label: "Bitcoin Price", value: "$46,953.04" },
    { label: "24h Low / 24h High", value: "$45,424.22 / $47,396.32" },
    { label: "7d Low / 7d High", value: "$45,424.22 / $47,396.32" },
    { label: "Trading Volume", value: "$24,143,268,497" },
    { label: "Market Cap Rank", value: "#1" },
    { label: "Market Cap", value: "$915,897,193,395" },
    { label: "Market Cap Dominance", value: "44.26%" },
    { label: "Volume / Market Cap", value: "0.0263" },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Performance</h2>
      
      {/* Price Range Slider */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center text-sm">
          <div>
            <div className="text-[#44475B] mb-1">Today's Low</div>
            <div>$44,246</div>
          </div>
          <div className="flex-1 mx-3">
            <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
          </div>
          <div>
            <div className="text-[#44475B] mb-1">Today's High</div>
            <div>$47,396</div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div>
            <div className="text-[#44475B] mb-1">52W Low</div>
            <div>$16,930</div>
          </div>
          <div className="flex-1 mx-3">
            <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
          </div>
          <div>
            <div className="text-[#44475B] mb-1">52W High</div>
            <div>$49,343</div>
          </div>
        </div>
      </div>

      {/* Fundamentals */}
      <div>
        <h3 className="text-lg font-semibold text-[#44475B] mb-4">Fundamentals</h3>
        <div className="grid md:grid-cols-2 gap-x-8">
          {fundamentals.map((item, index) => (
            <div key={index} className="flex justify-between py-3 border-b border-[#D3D5DA]">
              <span className="text-[#768396]">{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance; 