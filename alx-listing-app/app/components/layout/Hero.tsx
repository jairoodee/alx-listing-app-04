'use client';

import React from 'react';
import Image from 'next/image';
import { HERO_BACKGROUND } from '@/constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BACKGROUND}
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The best prices for over 2 million properties worldwide.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-md text-lg hover:bg-indigo-700 transition-colors">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
