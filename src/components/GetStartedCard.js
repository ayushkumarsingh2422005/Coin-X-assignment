import React from 'react';

const GetStartedCard = () => {
  return (
    <div className="bg-[#0052FE] rounded-lg p-8 text-center text-white">
      <h2 className="text-2xl font-bold mb-4">
        Get Started with KoinX for FREE
      </h2>
      <p className="mb-6 text-sm">
        With our range of features that you can equip for free,
        KoinX allows you to be more educated and aware of your tax reports.
      </p>
      <img 
        src="/images/get-started.png" 
        alt="Get Started" 
        className="w-40 mx-auto mb-6"
      />
      <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg">
        Get Started for FREE →
      </button>
    </div>
  );
};

export default GetStartedCard; 