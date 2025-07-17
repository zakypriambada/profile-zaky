'use client';
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "../components/footer";
import BlurText from "../components/BlurText/BlurText";
import Project from "../components/project";
import Sertifikat from "../components/sertifikat";

const handleAnimationComplete = () => {
    console.log("Animation completed!");
};


export default function Portfolio() {
    const navItems = ["Home", "Portofolio", "Contact"];
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar items={navItems} />
            <div className="flex flex-col justify-center items-center animate-fadeIn pt-[140px] text-black px-4 md:px-0">
                <BlurText
                    text="My Portfolio Gallery of Projects and Certificates"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-[32px] sm:text-[42px] mb-8 font-bold text-center"
                />
            </div>
            <section id="portfolio2" className="pt-[100px]">
                <Project />
                <Sertifikat />
            </section>
            {isVisible && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-500 transition cursor-pointer"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
            <Footer />
        </div>
    );
}
