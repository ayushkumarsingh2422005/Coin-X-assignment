import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YouMayAlsoLike = () => {
  const [similarCoins, setSimilarCoins] = useState([]);

  useEffect(() => {
    const fetchSimilarCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        setSimilarCoins(response.data.coins);
      } catch (error) {
        console.error('Error fetching similar coins:', error);
      }
    };

    fetchSimilarCoins();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {similarCoins.map((coin) => (
          <div
            key={coin.item.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="w-6 h-6"
              />
              <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
              <span
                className={`ml-auto px-2 py-1 rounded text-sm ${
                  coin.item.data.price_change_percentage_24h.usd >= 0
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
              </span>
            </div>
            <div className="text-lg font-bold">
              {coin.item.data.price}
            </div>
            <img
              src={coin.item.data.sparkline}
              alt="Price trend"
              className="w-full h-16 object-contain mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike; 