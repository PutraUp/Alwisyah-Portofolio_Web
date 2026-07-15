import React, { useState } from "react";
import RobotModel from "./components/RobotModel";
import myProfileImg from "./assets/profile.jpeg"; 

import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiPython,
  SiOpenjdk,
  SiRos,
  SiLinux,
  SiBlender,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// ==================== SUB-KOMPONEN: STAT CARD ====================
function StatCard({ title, sub }) {
  return (
    <div className="bg-[#141419] border border-gray-900/60 p-6 rounded-2xl flex flex-col items-center justify-center text-center aspect-square shadow-xl hover:border-purple-500/20 transition-all">
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold max-w-[120px] leading-normal">
        {sub}
      </p>
    </div>
  );
}

// ==================== MAIN COMPONENT ====================
function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const menus = ["Home", "Portfolio", "About Me", "Resume", "Contact"];

  // 🚀 TAUTAN PERSONAL TERINTEGRASI (Ganti URL GDrive & Nomor WA sesuai kebutuhanmu)
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/alwisyah-putra-87887a326/",
    instagram: "https://instagram.com/alsptr06_",
    github: "https://github.com/PutraUp",
    email: "mailto:alwisyah61@gmail.com",
    myWorksGDrive: "https://drive.google.com/drive/folders/MASUKKAN_ID_FOLDER_GDRIVE_KAMU", 
    downloadCVGDrive: "https://drive.google.com/file/d/MASUKKAN_ID_FILE_CV_KAMU/view?usp=sharing",
    whatsapp: "https://wa.me/6281234567890?text=Halo%20Alwisyah,%20saya%20tertarik%20untuk%20bekerja%20sama%20dengan%20Anda."
  };

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-[#bcbcbc] font-sans flex p-4 md:p-8 justify-center relative overflow-hidden selection:bg-purple-500 selection:text-white">
      {/* 🔮 EFEK GLOW BACKGROUND (Aura Ungu) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Container Utama */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 z-10">
        
        {/* ==================== SIDEBAR KIRI ==================== */}
        <aside className="w-full lg:w-[320px] bg-[#131318] border border-gray-900/60 rounded-3xl p-6 flex flex-col justify-between items-center shadow-2xl shrink-0 min-h-[inherit]">
          {/* Bagian Atas: Nama & Foto Profil */}
          <div className="w-full space-y-5">
            {/* Header: Nama & Icon */}
            <div className="flex items-center gap-3 w-full px-1">
              <div className="w-9 h-9 bg-neutral-800 rounded-full flex items-center justify-center border border-gray-700">
                <span className="text-xs">🐱</span>
              </div>
              <div>
                <h2 className="text-white font-semibold text-sm leading-tight">
                  Alwisyah Putra
                </h2>
              </div>
            </div>

            {/* 🚀 FOTO PROFIL: Memanggil variabel myProfileImg hasil import assets di atas */}
            <div className="w-full aspect-[4/4.5] bg-[#1a1a24] rounded-2xl flex items-center justify-center overflow-hidden shadow-inner border border-gray-900/40">
              <img 
                src={myProfileImg} 
                alt="Alwisyah Putra" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* 🚀 BAGIAN TENGAH: INFO TEKS DETAIL & SOSMED */}
          <div className="w-full flex-1 flex flex-col justify-center items-center my-8 space-y-6">
            {/* Teks Informasi Detail */}
            <div className="space-y-4 text-center w-full">
              <div>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">
                  Specialization:
                </p>
                <p className="text-sm text-gray-200 font-medium mt-1 px-2 leading-relaxed">
                  Software Engineering and Robotics Simulation
                </p>
              </div>
              <div>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">
                  Based in:
                </p>
                <p className="text-sm text-gray-200 font-medium mt-1">
                  Jakarta, Indonesia
                </p>
              </div>
            </div>

            {/* Tautan Sosial Media Sidebar Kiri */}
            <div className="flex justify-center gap-4 text-lg text-gray-400 pt-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-900/50 rounded-full border border-gray-900 hover:text-white hover:border-gray-700 transition-all"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-900/50 rounded-full border border-gray-900 hover:text-white hover:border-gray-700 transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-900/50 rounded-full border border-gray-900 hover:text-white hover:border-gray-700 transition-all"
              >
                <FaGithub />
              </a>
              <a
                href={socialLinks.email}
                className="p-2.5 bg-neutral-900/50 rounded-full border border-gray-900 hover:text-white hover:border-gray-700 transition-all"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Bagian Bawah: Tombol Kapsul Gradasi */}
          <div className="w-full mt-auto">
            <a 
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 hover:from-purple-400/30 hover:to-pink-400/30 text-purple-200 text-xs font-semibold rounded-full border border-purple-500/30 shadow-lg shadow-purple-950/20 transition-all tracking-wide"
            >
              Let's Work Together!
            </a>
          </div>
        </aside>

        {/* ==================== KONTEN KANAN ==================== */}
        <div className="flex-1 flex flex-col justify-between min-h-[85vh] lg:py-2">
          {/* Top Bar: Navigasi + Let's Talk */}
          <header className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
            <nav className="flex items-center gap-1 sm:gap-4 bg-[#131318]/40 p-1.5 rounded-full border border-gray-900/50 backdrop-blur-sm">
              {menus.map((menu) => (
                <button
                  key={menu}
                  onClick={() => setCurrentPage(menu)}
                  className={`px-4 py-1.5 rounded-full text-xs transition-all duration-300 font-medium ${
                    currentPage === menu
                      ? "bg-neutral-800 text-white border border-gray-700/50 shadow-inner"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {menu}
                </button>
              ))}
            </nav>

            <a 
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-purple-300 to-pink-200 text-neutral-900 text-xs font-bold rounded-full hover:opacity-90 shadow-lg shadow-purple-900/10 transition-all flex items-center gap-2"
            >
              Let's Talk <span className="text-[10px]">💬</span>
            </a>
          </header>

          {/* ==================== ISI KONTEN DINAMIS ==================== */}
          <main className="flex-1 flex flex-col justify-between w-full max-w-full text-left pb-6">
            {currentPage === "Home" ? (
              <div className="flex flex-col h-full w-full justify-between animate-fadeIn text-left">
                {/* 🤖 AREA MODEL ROBOT INTERAKTIF */}
                <div className="w-full flex justify-center items-center py-4 mt-6 pb-6">
                  <RobotModel fileName="robot.glb" />
                </div>

                {/* 📝 AREA TEKS HERO */}
                <div className="space-y-5 mt-auto pt-6">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-400 tracking-wider">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Let's meet!
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.2]">
                    I'm Alwisyah Putra <br />
                    <span className="text-neutral-400 font-normal">
                      Robotics Simulation
                    </span>{" "}
                    <br />
                    <span className="text-neutral-400 font-normal">
                      and software dev.
                    </span>
                  </h1>
                </div>
              </div>
            ) : currentPage === "About Me" ? (
              <div className="space-y-6 animate-fadeIn my-auto text-left w-full py-4">
                <p className="text-[10px] text-gray-500 tracking-widest uppercase font-bold">
                  • About Me
                </p>

                <h2 className="text-3xl md:text-4xl font-medium text-white max-w-2xl leading-snug">
                  Turning complex problems into functional robotics simulation.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 w-full">
                  <StatCard title="4th" sub="Semester Student" />
                  <StatCard
                    title="2+ Years"
                    sub="Robotics Research Experience"
                  />
                  <StatCard title="10+" sub="Simulations Done" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-xs leading-relaxed text-gray-400 pt-2">
                  <div className="space-y-4 md:col-span-2">
                    <p>
                      An INFJ Computer Science student specializing in Software
                      Engineering and Robotics Simulation. Experienced in
                      building rigorous environment simulations using ROS/ROS2
                      and Gazebo.
                    </p>
                    <p>
                      Driven by a professional "silent but impactful" ethos, I
                      focus on bridging the gap between advanced software design
                      patterns and sustainable computing.
                    </p>
                  </div>

                  <div className="space-y-4 border-l border-gray-900/60 pl-6">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-gray-600 font-bold">
                        Name
                      </span>
                      <span className="text-gray-200 font-medium">
                        Alwisyah Putra
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-gray-600 font-bold">
                        Email
                      </span>
                      <span className="text-gray-200 font-medium">
                        alwisyah.putra@example.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentPage === "Resume" ? (
              /* 🚀 HALAMAN RESUME */
              <div className="space-y-10 animate-fadeIn my-auto text-left w-full py-6 max-h-[68vh] overflow-y-auto pr-2 custom-scrollbar">
                {/* 🎓 MY EDUCATION */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white tracking-wide">
                    My education
                  </h2>
                  <div className="border-t border-gray-900/60 divide-y divide-gray-900/40">
                    <div className="grid grid-cols-4 gap-4 py-4 items-start text-xs">
                      <div className="text-gray-500 font-medium">
                        2024 - Present
                      </div>
                      <div className="col-span-2 space-y-1">
                        <h3 className="text-white font-medium text-sm">
                          Undergraduate Computer Science
                        </h3>
                        <p className="text-gray-400">Universitas Pertamina</p>
                      </div>
                      <div className="text-gray-400/80 leading-relaxed">
                        Fokus mendalami Rekayasa Perangkat Lunak, Metode
                        Numerik, dan aktif sebagai Koordinator Mata Kuliah.
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-4 items-start text-xs">
                      <div className="text-gray-500 font-medium">2026</div>
                      <div className="col-span-2 space-y-1">
                        <h3 className="text-white font-medium text-sm">
                          Numerical Methods & Data Modeling
                        </h3>
                        <p className="text-gray-400">Academic Project Course</p>
                      </div>
                      <div className="text-gray-400/80 leading-relaxed">
                        Menerapkan metode Runge-Kutta Orde 4 (RK4) menggunakan
                        Python untuk simulasi perubahan polutan udara
                        lingkungan.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 💼 WORK EXPERIENCE */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-white tracking-wide">
                    Work experience
                  </h2>
                  <div className="border-t border-gray-900/60 divide-y divide-gray-900/40">
                    <div className="grid grid-cols-4 gap-4 py-4 items-start text-xs">
                      <div className="text-gray-500 font-medium">
                        2026 - Present
                      </div>
                      <div className="col-span-2 space-y-1">
                        <h3 className="text-white font-medium text-sm">
                          Robotics Research Assistant
                        </h3>
                        <p className="text-purple-400/90 font-medium">
                          Robotics Laboratory Project
                        </p>
                      </div>
                      <div className="text-gray-400/80 leading-relaxed">
                        Membangun lingkungan simulasi robotik yang rigid
                        menggunakan ekosistem Robot Operating System (ROS/ROS2)
                        dan Gazebo.
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-4 items-start text-xs">
                      <div className="text-gray-500 font-medium">2026</div>
                      <div className="col-span-2 space-y-1">
                        <h3 className="text-white font-medium text-sm">
                          Ketua Divisi Minat & Bakat
                        </h3>
                        <p className="text-gray-400">
                          Himpunan Mahasiswa Ilmu Komputer (HMIK)
                        </p>
                      </div>
                      <div className="text-gray-400/80 leading-relaxed">
                        Memimpin perancangan program kerja divisi, koordinasi
                        internal kepengurusan organisasi, serta manajemen acara
                        tahunan.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 🛠️ MY FAVOURITE TOOLS */}
                <div className="space-y-4 pt-4">
                  <h2 className="text-xl font-semibold text-white tracking-wide">
                    My favourite tools
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 pt-2">
                    <div className="bg-[#141419] border border-gray-900/60 p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-[1.1/1] hover:border-purple-500/20 transition-all group">
                      <SiRos className="text-3xl text-gray-400 group-hover:text-[#22314E] transition-colors duration-300" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-3">
                        ROS / ROS2
                      </span>
                    </div>
                    <div className="bg-[#141419] border border-gray-900/60 p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-[1.1/1] hover:border-purple-500/20 transition-all group">
                      <SiPython className="text-3xl text-gray-400 group-hover:text-[#3776AB] transition-colors duration-300" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-3">
                        Python
                      </span>
                    </div>
                    <div className="bg-[#141419] border border-gray-900/60 p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-[1.1/1] hover:border-purple-500/20 transition-all group">
                      <SiOpenjdk className="text-3xl text-gray-400 group-hover:text-[#EA2D2E] transition-colors duration-300" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-3">
                        Java
                      </span>
                    </div>
                    <div className="bg-[#141419] border border-gray-900/60 p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-[1.1/1] hover:border-purple-500/20 transition-all group">
                      <SiBlender className="text-3xl text-gray-400 group-hover:text-[#F5792A] transition-colors duration-300" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-3">
                        Blender
                      </span>
                    </div>
                    <div className="bg-[#141419] border border-gray-900/60 p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-[1.1/1] hover:border-purple-500/20 transition-all group">
                      <SiLinux className="text-3xl text-gray-400 group-hover:text-[#FCC624] transition-colors duration-300" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-3">
                        Linux OS
                      </span>
                    </div>
                    <div className="bg-[#141419] border border-gray-900/60 p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-[1.1/1] hover:border-purple-500/20 transition-all group">
                      <VscCode className="text-3xl text-gray-400 group-hover:text-[#007ACC] transition-colors duration-300" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-3">
                        VS Code
                      </span>
                    </div>
                    <div className="bg-[#141419] border border-gray-900/60 p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-[1.1/1] hover:border-purple-500/20 transition-all group">
                      <SiGit className="text-3xl text-gray-400 group-hover:text-[#F05032] transition-colors duration-300" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-3">
                        Git
                      </span>
                    </div>
                    <div className="bg-[#141419] border border-gray-900/60 p-4 rounded-2xl flex flex-col items-center justify-center text-center aspect-[1.1/1] hover:border-purple-500/20 transition-all group">
                      <SiDocker className="text-3xl text-gray-400 group-hover:text-[#2496ED] transition-colors duration-300" />
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-3">
                        Docker
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : currentPage === "Contact" ? (
              <div className="space-y-12 animate-fadeIn my-auto text-left w-full py-6">
                <div>
                  <a 
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 hover:from-purple-400/30 hover:to-pink-400/30 text-purple-200 text-xs font-semibold rounded-full border border-purple-500/30 shadow-md transition-all"
                  >
                    Send Message ✨
                  </a>
                </div>

                {/* Tautan Sosial Media Halaman Contact */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#141419] border border-gray-900/60 p-5 rounded-2xl flex items-center justify-center aspect-[1.3/1] hover:border-purple-500/30 hover:bg-[#16161c] text-2xl text-gray-400 hover:text-white transition-all"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a 
                    href={socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#141419] border border-gray-900/60 p-5 rounded-2xl flex items-center justify-center aspect-[1.3/1] hover:border-purple-500/30 hover:bg-[#16161c] text-2xl text-gray-400 hover:text-white transition-all"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href={socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#141419] border border-gray-900/60 p-5 rounded-2xl flex items-center justify-center aspect-[1.3/1] hover:border-purple-500/30 hover:bg-[#16161c] text-2xl text-gray-400 hover:text-white transition-all"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={socialLinks.email} 
                    className="bg-[#141419] border border-gray-900/60 p-5 rounded-2xl flex items-center justify-center aspect-[1.3/1] hover:border-purple-500/30 hover:bg-[#16161c] text-2xl text-gray-400 hover:text-white transition-all"
                  >
                    <FaEnvelope />
                  </a>
                </div>

                <div className="max-w-2xl space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-snug">
                    Want to know more about me, tell me about your project or just to say hello? 
                    Drop me a line and I'll get back as soon as possible.
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-900/30 text-left">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold">Location</span>
                    <span className="text-xs text-gray-400 font-medium mt-1 block">Jakarta, Indonesia</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold">Phone</span>
                    <span className="text-xs text-gray-400 font-medium mt-1 block">+62 812-3456-7890</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold">Email</span>
                    <span className="text-xs text-gray-400 font-medium mt-1 block">alwisyah61@gmail.com</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500 animate-fadeIn pt-16">
                Halaman {currentPage} sedang dalam pengembangan...
              </div>
            )}
          </main>

          {/* Footer Bar */}
          <footer className="flex justify-between items-center pt-6 border-t border-gray-900/40 w-full mt-auto">
            <div className="flex gap-3">
              <a 
                href={socialLinks.myWorksGDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-neutral-900 text-white border border-gray-800 rounded-full text-xs font-medium hover:bg-neutral-800 transition-all shadow-md"
              >
                My Works <span className="text-[10px]">📊</span>
              </a>
              <a 
                href={socialLinks.downloadCVGDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 text-gray-400 border border-transparent hover:border-gray-800 rounded-full text-xs font-medium hover:text-white transition-all"
              >
                Download CV <span className="text-[10px]">📥</span>
              </a>
            </div>

            <div className="relative w-14 h-14 flex items-center justify-center border border-gray-800/80 rounded-full group cursor-pointer hover:border-purple-500/40 transition-colors">
              <span className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors">
                ↓
              </span>
              <div className="absolute inset-0 border border-dashed border-gray-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
            </div>
          </footer>
        </div>
        
      </div>
    </div>
  );
}

export default App;