import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const Tokenomics = () => {
  const data = [
    { name: 'Crowdsale investors', value: 80 },
    { name: 'Foundation', value: 20 },
  ];

  const COLORS = ['#0082FF', '#FAA002'];

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
      
      <div>
        <h3 className="font-bold mb-4">Initial Distribution</h3>
        
        <div className="flex items-center gap-8">
          <div className="w-48">
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
          
          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[index] }} 
                />
                <span>{item.name} {item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#3E424A] leading-7 mt-4">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics; 