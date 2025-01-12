import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceChart = ({ cryptoId }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=7&interval=daily`
        );

        const prices = response.data.prices;
        const labels = prices.map(price => 
          new Date(price[0]).toLocaleDateString('en-US', { weekday: 'short' })
        );
        const priceData = prices.map(price => price[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Price (USD)',
              data: priceData,
              borderColor: '#0052FE',
              backgroundColor: 'rgba(0, 82, 254, 0.1)',
              tension: 0.4,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, [cryptoId]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#EFF2F5',
        },
      },
    },
  };

  return (
    <div className="h-[400px] w-full">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default PriceChart; 