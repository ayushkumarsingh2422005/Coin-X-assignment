import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import CryptoDetails from '../components/CryptoDetails';
import TrendingCoins from '../components/TrendingCoins';
import GetStartedCard from '../components/GetStartedCard';
import Performance from '../components/Performance';
import Sentiment from '../components/Sentiment';
import AboutBitcoin from '../components/AboutBitcoin';
import Tokenomics from '../components/Tokenomics';
import Team from '../components/Team';
import YouMayAlsoLike from '../components/YouMayAlsoLike';

const CryptoPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-4">
      <Breadcrumb />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <CryptoDetails />
          <Performance />
          <Sentiment />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
        </div>
        <div className="space-y-5">
          <GetStartedCard />
          <TrendingCoins />
        </div>
      </div>
      <div className="mt-8">
        <YouMayAlsoLike />
      </div>
    </div>
  );
};

export default CryptoPage; 