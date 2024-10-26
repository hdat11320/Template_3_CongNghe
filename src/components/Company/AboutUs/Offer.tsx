// components/WhatWeOffer.tsx
import React from 'react';

const WhatWeOffer = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left content */}
        <div className="flex flex-col justify-center">
          <h4 className="text-purple-600 font-bold">// WHAT WE OFFER</h4>
          <h1 className="text-4xl font-bold mt-4">Your Partner for Software Innovation</h1>
          <p className="text-gray-600 mt-6">
            Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.
          </p>
          <p className="mt-4 italic">
            We can help to maintain and modernize your IT infrastructure and solve various infrastructure-specific issues a business may face.
          </p>
          <div className="flex items-center mt-8">
            <div className="w-16 h-16 rounded-full border-4 border-purple-300 flex items-center justify-center">
              <span className="text-purple-600 text-2xl">&#9654;</span>
            </div>
            <span className="ml-4 font-bold">VIDEO SHOWCASE</span>
          </div>
        </div>

        {/* Right content - grid of cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative group">
            <img
              src="https://via.placeholder.com/300"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-70 transition-all">
              <h3 className="text-white text-xl font-bold">Our Mission</h3>
            </div>
          </div>

          <div className="relative group">
            <img
              src="https://via.placeholder.com/300"
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-70 transition-all">
              <h3 className="text-white text-xl font-bold">Our Vision</h3>
            </div>
          </div>

          <div className="relative group">
            <img
              src="https://via.placeholder.com/300"
              alt="Our Philosophy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-70 transition-all">
              <h3 className="text-white text-xl font-bold">Our Philosophy</h3>
            </div>
          </div>

          <div className="relative group">
            <img
              src="https://via.placeholder.com/300"
              alt="Our Strategy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-70 transition-all">
              <h3 className="text-white text-xl font-bold">Our Strategy</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
