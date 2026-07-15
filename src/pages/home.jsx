import React from 'react';

export default function Home() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Showcase Image Banner */}
      <div className="w-full h-52 bg-[#1b1b22] rounded-xl overflow-hidden border border-gray-900 shadow-inner flex items-center justify-center text-gray-600">
        {/* Ganti dengan <img src={robotSim} className="w-full h-full object-cover" /> */}
        <span className="text-xs">[ Robotics Simulation Image Display ]</span>
      </div>

      {/* Hero Headings */}
      <div className="space-y-2">
        <h2 className="text-xl font-medium text-gray-200">I'm Alwi</h2>
        <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight">
          Student Collage and <br />
          <span className="text-gray-100">Robotics Simulation Enginering.</span>
        </h1>
      </div>
    </div>
  );
}