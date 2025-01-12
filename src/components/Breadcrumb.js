import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const Breadcrumb = () => {
  return (
    <div className="flex items-center text-[#3E424A] text-[14px] py-4">
      <span className="text-[#0F1629]">Cryptocurrencies</span>
      <ChevronRightIcon className="h-4 w-4 mx-1" />
      <span className="text-[#0F1629]">Bitcoin</span>
    </div>
  );
};

export default Breadcrumb; 