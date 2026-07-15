import React from 'react';

export default function StatCard({ title, sub }) {
  return (
    <div className="bg-[#141419] border border-gray-950 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-32 shadow-xl hover:border-purple-500/20 transition-all">
      {/* Ukuran teks angka diperbesar menjadi text-2xl ke atas */}
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold max-w-[110px] leading-normal">
        {sub}
      </p>
    </div>
  );
}