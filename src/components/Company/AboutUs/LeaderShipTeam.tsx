// components/LeadershipTeam.tsx
import React from 'react';

const LeadershipTeam = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <h4 className="text-purple-400 font-bold text-center"> OUR TEAM</h4>
        <h1 className="text-4xl font-bold text-center mt-2">Our Leadership Team</h1>
        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          We help businesses elevate their value through custom software development, product design, QA, and consultancy services.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 w-1/6 h-4/6 right-0">
          {/* Member 1 */}
          <div className="relative group flex flex-col items-center text-center">
            <img
              src="/images/member1.jpg"
              alt="David Ferry"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-purple-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-linkedin.svg" alt="LinkedIn" className="w-6 h-6"/>
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-twitter.svg" alt="Twitter" className="w-6 h-6"/>
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-pinterest.svg" alt="Pinterest" className="w-6 h-6"/>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4">David Ferry</h3>
            <p className="text-gray-500">CO-FOUNDER OF COMPANY</p>
          </div>

          {/* Member 2 */}
          <div className="relative group flex flex-col items-center text-center">
            <img
              src="/images/member2.jpg"
              alt="Christina Torres"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-purple-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-linkedin.svg" alt="LinkedIn" className="w-6 h-6"/>
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-twitter.svg" alt="Twitter" className="w-6 h-6"/>
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-pinterest.svg" alt="Pinterest" className="w-6 h-6"/>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4">Christina Torres</h3>
            <p className="text-gray-500">CO-FOUNDER OF COMPANY</p>
          </div>

          {/* Member 3 */}
          <div className="relative group flex flex-col items-center text-center">
            <img
              src="/images/member3.jpg"
              alt="Amalia Bruno"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-purple-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-linkedin.svg" alt="LinkedIn" className="w-6 h-6"/>
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-twitter.svg" alt="Twitter" className="w-6 h-6"/>
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-pinterest.svg" alt="Pinterest" className="w-6 h-6"/>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4">Amalia Bruno</h3>
            <p className="text-gray-500">CTO OF COMPANY</p>
          </div>

          {/* Member 4 */}
          <div className="relative group flex flex-col items-center text-center">
            <img
              src="/images/member4.jpg"
              alt="David Ferry"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-purple-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-linkedin.svg" alt="LinkedIn" className="w-6 h-6"/>
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-twitter.svg" alt="Twitter" className="w-6 h-6"/>
                </a>
                <a href="#" className="text-white hover:text-gray-200">
                  <img src="/path-to-pinterest.svg" alt="Pinterest" className="w-6 h-6"/>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4">David Ferry</h3>
            <p className="text-gray-500">CO-FOUNDER OF COMPANY</p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-4xl font-bold">330+</h2>
            <p className="mt-2">Active Clients</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold">850+</h2>
            <p className="mt-2">Projects Done</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold">25+</h2>
            <p className="mt-2">Team Advisors</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold">10+</h2>
            <p className="mt-2">Glorious Years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;
