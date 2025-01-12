import axios from 'axios';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';

export const getCryptoData = async (id) => {
  try {
    const response = await axios.get(`${COINGECKO_API}/coins/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
};

export const getTrendingCoins = async () => {
  try {
    const response = await axios.get(`${COINGECKO_API}/search/trending`);
    return response.data.coins;
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    throw error;
  }
}; 