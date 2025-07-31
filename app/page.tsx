'use client'
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "./components/footer";
import Carousel from "./components/carousel";
import SkillMarquee from "./components/skillmarque";
import ProfileCard from './components/ProfileCard/ProfileCard'

export default function Home() {
  const navItems = ["Home", "Portofolio", "Contact"];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar items={navItems} />
      <section id="hero" className="pt-[70px] md:pt-[30px] px-6 md:px-12">
        <div className="min-h-screen overflow-x-hidden flex items-center py-[60px]">
          <div className="container mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 order-2 md:order-1">
                <div className={isVisible ? "fade-in" : ""}>
                  <p className="text-[20px]">Hallo</p>
                  <h1 className="text-[30px] font-bold leading-tight">
                    I'm Muhamad Zaky Priambada Anugrah
                  </h1>
                  <p className="text-[16px] mt-2 text-justify">
                    Sebagai mahasiswa Sarjana Informatika di Universitas Pembangunan Nasional "Veteran" Jawa Timur, saya berfokus pada pengembangan web front-end dengan landasan yang kuat dalam desain UI/UX, antarmuka yang responsif, serta teknologi web modern seperti HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, dan TypeScript. Saya memiliki pengalaman praktis dalam membangun aplikasi web yang interaktif dan berbasis komponen, termasuk situs portofolio dan platform e-commerce. Meskipun pengembangan front-end adalah keahlian utama saya, saya juga memiliki pengetahuan kerja mengenai teknologi back-end seperti PHP, Python, dan SQL untuk mendukung fungsionalitas full-stack bila diperlukan. Saya memiliki semangat dalam menciptakan pengalaman digital yang mulus, mudah diakses, dan terstruktur dengan baik.
                  </p>
                  <div className="mt-2">
                    <a
                      href="/contact"
                      className="bg-[#2585e7] text-[16px] text-white px-6 py-3 rounded-full hover:bg-[#1E73E8] transition duration-300 inline-block"
                    >
                      Contact Me!
                    </a>
                    <div className="mt-3 flex gap-2">
                      <img src="/assets/logo-linkedin.svg" width="30" alt="LinkedIn" className="filter brightness-0" />
                      <img src="/assets/logo-instagram.svg" width="30" alt="Instagram" className="filter brightness-0" />
                      <img src="/assets/logo-github.svg" width="30" alt="GitHub" className="filter brightness-0" />
                      <img src="/assets/logo-gmail.svg" width="30" alt="Gmail" className="filter brightness-0" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 order-1 md:order-2 flex justify-center fade-in">
                <ProfileCard
                  name="Jecky"
                  title="Front End Web Developer"
                  handle="javicodes"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/assets/profil.png"
                  showUserInfo={true}
                  enableTilt={true}
                  onContactClick={() => console.log('Contact clicked')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" fade-in">
        <div className="text-center">
          <h1 className="text-[30px] font-bold">Skills</h1>
          <hr className="max-w-[300px] sm:max-w-2xl md:max-w-3xl mx-auto border-t-1" />
          <p className="text-[17px] pt-[10px] text-gray-600">Berikut adalah keterampilan dan teknologi yang saya kuasai</p>
        </div>
        <div className="pt-10">
          <SkillMarquee />
        </div>
      </section>
      <section id="portofolio" className="pt-[100px] px-4 sm:px-0 fade-in">
        <div className="text-center">
          <h1 className="text-[30px] font-bold">Portfolio</h1>
          <hr className="max-w-[300px] sm:max-w-2xl md:max-w-3xl mx-auto border-t-1" />
          <p className="text-[17px] pt-[10px] text-gray-600">Semua proyek yang telah saya kerjakan</p>
        </div>
        <div>
          <Carousel />
        </div>
      </section>
      <Footer />
    </div>
  );
}
