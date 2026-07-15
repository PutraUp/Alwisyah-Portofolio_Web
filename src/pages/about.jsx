import React from 'react';
import StatCard from '../components/StatCard';

export default function About() {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Mini Tag */}
      <p className="text-[10px] text-gray-500 tracking-widest uppercase font-bold">• About Me</p>
      
      {/* Slogan */}
      <h2 className="text-2xl font-medium text-white max-w-md leading-snug">
        Turning complex problems into functional robotics simulation.
      </h2>

      {/* 3 Kolom Kartu Statistik */}
      <div className="grid grid-cols-3 gap-3 my-4">
        <StatCard title="4th" sub="Semester Student" />
        <StatCard title="2+ Years" sub="Robotics Research Experience" />
        <StatCard title="10+" sub="Simulations & Projects Done" />
      </div>

      {/* Deskripsi & Informasi Kontak */}
      <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed text-gray-400 pt-2">
        <div className="space-y-4">
          <p>
            An INFJ Computer Science student specializing in Software Engineering and Robotics Simulation. 
            Experienced in building rigorous environment simulations using ROS/ROS2 and Gazebo, 
            as well as applying numerical methods to model complex dynamics.
          </p>
          <p>
            Driven by a professional "silent but impactful" ethos, I focus on bridging the gap between 
            advanced software design patterns and sustainable computing to create clean, optimized robotic systems.
          </p>
          <button className="flex items-center gap-2 px-3 py-1 bg-white text-black font-semibold rounded-md text-[10px] hover:bg-gray-200 transition-all">
            Download CV 📄
          </button>
        </div>

        {/* Tabel Metadata Kanan */}
        <div className="space-y-4 border-l border-gray-900 pl-4 md:pl-6">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-gray-600 font-bold">Name</span>
            <span className="text-gray-200 font-medium">Alwisyah Putra</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-gray-600 font-bold">Email</span>
            <span className="text-gray-200 font-medium">alwisyah.putra@example.com</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-gray-600 font-bold">Location</span>
            <span className="text-gray-200 font-medium">Jakarta, Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  );
}