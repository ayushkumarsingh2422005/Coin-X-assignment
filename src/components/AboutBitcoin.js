import React from 'react';

const AboutBitcoin = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">About Bitcoin</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-bold mb-2.5">What is Bitcoin?</h3>
          <p className="text-[#3E424A] leading-7">
            Bitcoin's price today is US$46,953.04, with a 24-hour trading volume of $24.14 B. BTC is +2.51% in the last 24 hours. It is currently -4.03% from its 7-day all-time high of $48,927.12, and 5.24% from its 7-day all-time low of $44,615.95. BTC has a circulating supply of 19.60 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <hr className="border-[#C9CFDD99]" />

        <div>
          <h3 className="font-bold mb-2.5">Lorem ipsum dolor sit amet</h3>
          <p className="text-[#3E424A] leading-7 mb-4">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>
          <p className="text-[#3E424A] leading-7 mb-4">
            Ultricies massa malesuada viverra cras lobortis. Sed enim dignissim sit nulla. Condimentum hac adipiscing purus in augue nisi. Convallis ut semper.
          </p>
          <p className="text-[#3E424A] leading-7">
            Facilisis sed quis pretium amet hac. Augue ut duis orci pulvinar ultrices. Aliquet et dui morbi bibendum. Facilisis ut fermentum tempor volutpat.
          </p>
        </div>

        <hr className="border-[#C9CFDD99]" />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Already Holding Bitcoin?</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] p-4 rounded-lg flex items-center gap-6">
              <img src="/images/profit.png" alt="Calculate your Profits" className="w-32" />
              <div className="text-white">
                <h3 className="font-bold mb-2">Calculate your Profits</h3>
                <button className="bg-white text-black px-4 py-2 rounded-lg">
                  Check Now →
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FF9865] to-[#EF3031] p-4 rounded-lg flex items-center gap-6">
              <img src="/images/tax.png" alt="Calculate your tax liability" className="w-32" />
              <div className="text-white">
                <h3 className="font-bold mb-2">Calculate your tax liability</h3>
                <button className="bg-white text-black px-4 py-2 rounded-lg">
                  Check Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBitcoin; 