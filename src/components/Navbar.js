import React, { useState } from 'react';
import koinxLogo from '../assets/koinx-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={koinxLogo} alt="KoinX" className="h-6" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-[16px] font-semibold text-[#0F1629]">
              Crypto Taxes
            </Link>
            <Link to="/" className="text-[16px] font-semibold text-[#0F1629]">
              Free Tools
            </Link>
            <Link to="/" className="text-[16px] font-semibold text-[#0F1629]">
              Resource Center
            </Link>
            <button className="bg-[#0052FE] text-white px-6 py-2 rounded-lg font-semibold">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-[#0F1629]">
              Crypto Taxes
            </Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-[#0F1629]">
              Free Tools
            </Link>
            <Link to="/" className="block px-3 py-2 text-base font-medium text-[#0F1629]">
              Resource Center
            </Link>
            <div className="px-3 py-2">
              <button className="w-full bg-[#0052FE] text-white px-6 py-2 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 