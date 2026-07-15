import React from 'react';

import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="bg-[#141419] rounded-2xl p-8 flex flex-col items-center justify-between h-full min-h-[600px] border border-gray-950 shadow-xl">
      
      <div className="w-full aspect-square bg-[#e2d5ff] rounded-2xl flex items-center justify-center overflow-hidden">
        <div className="w-32 h-32 border-8 border-[#5d44a4] rounded-full relative flex items-center justify-center">
          <div className="absolute -bottom-8 w-44 h-24 border-8 border-[#5d44a4] rounded-t-full bg-transparent"></div>
        </div>
      </div>

      {/* Baris Media Sosial */}
      <div className="flex gap-6 mt-8 text-gray-400 text-lg">
        <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
        <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
        <a href="#" className="hover:text-white transition-colors"><FaGithub /></a>
        <a href="#" className="hover:text-white transition-colors"><FaEnvelope /></a>
      </div>
    </div>
  );
}