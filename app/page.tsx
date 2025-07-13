'use client'
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Lanyard from '@/app/components/Lanyard/Lanyard';
import Footer from "./components/footer";
import Carousel from "./components/carousel";
import SkillMarquee from "./components/skillmarque";

export default function Home() {
  const navItems = ["Home", "Portofolio", "Contact"];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar items={navItems} />
      <section id="hero" className="pt-[50px] pr-12 pl-12">
        <div className="min-h-screen overflow-x-hidden">
          <div className="container mx-auto min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="order-1 md:order-2 md:col-span-6">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </div>
              <div className="order-2 md:order-1 md:col-span-6 flex items-center justify-center">
                <div className={isVisible ? "fade-in" : ""}>
                  <p className="text-[20px]">Hallo</p>
                  <h1 className="text-[35px] font-bold">I'm Muhamad Zaky Priambada Anugrah</h1>
                  <p className="text-[16px]">
                    Saya adalah seorang pengembang web yang penuh semangat, dengan minat di bidang pengembangan front-end maupun back-end. Saya memiliki pengalaman dalam membangun aplikasi dari tahap perencanaan hingga penerapan dan selalu bersemangat untuk mempelajari alat dan teknologi baru. Saya bekerja dengan baik dalam tim, memiliki kemampuan komunikasi yang jelas, dan senang menyelesaikan masalah dengan pendekatan kreatif. Baik bekerja secara mandiri maupun dalam tim, saya fokus untuk menghasilkan hasil yang ramah pengguna dan berkualitas tinggi tepat waktu. Saya berkomitmen untuk tetap terorganisir, mudah beradaptasi, dan terus meningkatkan keterampilan saya untuk berkontribusi pada proyek-proyek yang berdampak.
                  </p>
                  <div className="mt-4 pt-[10px]">
                    <a href="/contact" className="bg-black text-white px-8 rounded-[30px] hover:bg-gray-600 transition duration-300 py-4 cursor-pointer">
                      Contact Me!
                    </a>
                    <div className="mt-2 flex items-center justify-start space-x-3 pt-[20px]">
                      <img src="/assets/logo-linkedin.svg" width="30" alt="LinkedIn" className="filter brightness-0" />
                      <img src="/assets/logo-instagram.svg" width="30" alt="Instagram" className="filter brightness-0" />
                      <img src="/assets/logo-github.svg" width="30" alt="GitHub" className="filter brightness-0" />
                      <img src="/assets/logo-gmail.svg" width="30" alt="Gmail" className="filter brightness-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 fade-in">
        <div className="text-center">
          <h1 className="text-[39px] font-bold">Skills</h1>
          <hr className="max-w-[300px] sm:max-w-2xl md:max-w-3xl mx-auto border-t-2" />
          <p className="text-[17px] pt-[10px] text-gray-600">Berikut adalah keterampilan dan teknologi yang saya kuasai</p>
        </div>
        <div className="py-10">
          <SkillMarquee />
        </div>
      </section>
      <section id="portofolio" className="pt-[100px] px-4 sm:px-0 fade-in">
        <div className="text-center">
          <h1 className="text-[39px] font-bold">Portfolio</h1>
          <hr className="max-w-[300px] sm:max-w-2xl md:max-w-3xl mx-auto border-t-2" />
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
