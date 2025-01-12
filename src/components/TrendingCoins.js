import React, { useEffect, useState } from 'react';
import { getTrendingCoins } from '../services/api';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const data = await getTrendingCoins();
        setTrendingCoins(data.slice(0, 3));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={coin.item.small} alt={coin.item.name} className="w-6 h-6" />
              <span>{coin.item.name}</span>
            </div>
            <div className={`px-2 py-1 rounded ${
              coin.item.data.price_change_percentage_24h.usd >= 0 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins; 