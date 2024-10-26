// components/WhatWeDo.tsx
import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Image Section */}
        <div className="relative">
          {/* Background gradient box */}
          <div className="absolute w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 -left-4 -top-4 rounded-md"></div>
          {/* Main image */}
          <img
            src="https://via.placeholder.com/500"
            alt="Team Working"
            className="relative w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center">
          <h4 className="text-purple-400 font-bold">// EXPERIENCE. EXECUTION. EXCELLENCE.</h4>
          <h1 className="text-4xl font-bold mt-4">What We Actually Do</h1>

          <div className="flex space-x-6 mt-8">
            {/* Icon Boxes */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center">
                <img src="/path-to-icon1.svg" alt="Icon 1" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center">
                <img src="/path-to-icon2.svg" alt="Icon 2" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center">
                <img src="/path-to-icon3.svg" alt="Icon 3" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center">
                <img src="/path-to-icon4.svg" alt="Icon 4" />
              </div>
            </div>
          </div>

          <p className="text-gray-400 mt-6">
            PHP Website Development Services
          </p>
          <p className="text-gray-400 mt-4">
            Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.
          </p>
          <a href="#" className="text-blue-400 mt-6 inline-block">LEARN MORE</a>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
