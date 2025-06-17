'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isModelsOpen, setIsModelsOpen] = useState(false);

  const carModels = [
    { name: '718', price: '3.850.000.000 VNĐ' },
    { name: '911', price: '8.870.000.000 VNĐ' },
    { name: 'Taycan', price: '4.620.000.000 VNĐ' }
  ];

  return (
    <nav className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/porsche-logo.jpg"
              alt="Porsche Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setIsModelsOpen(!isModelsOpen)}
              className="relative group px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <span>Các dòng xe</span>
              {isModelsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg py-2 z-100">
                  {carModels.map((model) => (
                    <Link
                      key={model.name}
                      href={`/models/${model.name.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200 z-100"
                    >
                      <div className="font-semibold">{model.name}</div>
                      <div className="text-sm text-gray-600">Từ {model.price}</div>
                    </Link>
                  ))}
                </div>
              )}
            </button>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Cart Button */}
            <Link 
              href="/cart" 
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4">
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Tìm kiếm xe..."
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 