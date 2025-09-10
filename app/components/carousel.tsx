'use client'

import React, { useState, useEffect } from "react";
import StarBorder from "./StarBorder/StarBorder";
import Link from 'next/link';

const Home = () => {
    const projects = [
        {
            id: 1,
            title: "Jackduls",
            description: "Jackduls adalah website untuk brand clothing pribadi saya, yang dibuat untuk menampilkan identitas merek, koleksi produk, dan karya desain. Selain sebagai showcase, situs ini juga menjadi sarana membangun kehadiran online Jackduls dengan tampilan modern dan performa cepat menggunakan Next.js.",
            mediaType: "video",
            mediaUrl: "/assets/porto/porto1.mp4",
            projectUrl: "https://jackduls-roan.vercel.app/",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React Bits"],
        },
        {
            id: 2,
            title: "Riniko Pempek",
            description: "Website ini dikembangkan untuk mendukung UMKM kuliner Riniko Pempek dalam memperluas jangkauan pemasaran secara digital. Fitur yang dihadirkan meliputi banner interaktif dengan efek parallax, menu produk yang terintegrasi dengan tombol pemesanan cepat, serta tampilan responsif yang dioptimalkan untuk perangkat mobile.",
            mediaType: "image",
            mediaUrl: "/assets/porto/porto10.jpeg",
            projectUrl: "https://riniko-pempek.vercel.app",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React Bits"],
        },
        {
            id: 3,
            title: "Front-End Test API",
            description: "Proyek ini adalah test untuk magang di Suitmedia bagian front-end, yang menguji integrasi API, penambahan efek paralaks pada banner, serta penyinkronan show per page dengan postcard yang menggunakan lazy loading. Navbar diatur sesuai ketentuan dan tampilan responsif dioptimalkan untuk perangkat mobile.",
            mediaType: "image",
            mediaUrl: "/assets/porto/porto9.png",
            projectUrl: "https://frontend-test-zakypriambada.vercel.app/ideas",
            technologies: ["NextJS", "Tailwind CSS", "API", "Data Structures", "GIT"],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                nextProject();
            } else if (e.key === "ArrowLeft") {
                prevProject();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="flex items-center justify-center mt-12 p-8 fade-in flex-col">
            <section className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center gap-y-12 lg:gap-x-16">

                {/* Kolom Kiri (Mobile: Bawah): Penjelasan Proyek */}
                <div className="flex flex-col text-left order-2 lg:order-1">
                    <div key={currentIndex} className="w-full">
                        <div className="overflow-hidden">
                            <h2 className="text-[30px] font-bold text-slate-800 animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
                                {projects[currentIndex].title}
                            </h2>
                        </div>
                        <div className="overflow-hidden mt-4">
                            <p className="text-[17px] text-black animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
                                {projects[currentIndex].description}
                            </p>
                        </div>
                        <div className="overflow-hidden mt-6">
                            <div className="flex flex-wrap gap-2 animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
                                {projects[currentIndex].technologies.map((tech) => (
                                    <span key={tech} className="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded-[90px]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tombol Navigasi Kanan & Kiri */}
                    <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
                        <button
                            onClick={prevProject}
                            className="p-3 bg-[#2585e7] rounded-full shadow-sm hover:bg-[#1E73E8] transition cursor-pointer"
                            aria-label="Previous Project"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextProject}
                            className="p-3 bg-[#2585e7] rounded-full shadow-sm hover:bg-[#1E73E8] transition cursor-pointer"
                            aria-label="Next Project"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>




                </div>

                {/* Kolom Kanan (Mobile: Atas): Gambar/Media Proyek */}
                <div className="relative w-full max-w-2xl mx-auto order-1 lg:order-2" style={{ perspective: '1000px' }}>
                    <div className="relative w-full aspect-video group shadow-2xl overflow-hidden transform transition-transform duration-500 lg:transform lg:rotate-y-[-18deg] lg:rotate-x-[8deg]">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                            >
                                {project.mediaType === "image" ? (
                                    <img src={project.mediaUrl} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                                ) : (
                                    <video src={project.mediaUrl} title={project.title} className="w-full h-full object-cover rounded-lg" autoPlay loop muted playsInline />
                                )}
                            </div>
                        ))}
                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                            <a href={projects[currentIndex].projectUrl} target="_blank" rel="noopener noreferrer" className="bg-[#2585e7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1E73E8] transition transform hover:scale-105">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>



            </section>
            {/* Tombol See All Projects */}
            <div className="md:mt-20 m-12 text-center">
                <Link href="/portfolio">
                    <StarBorder
                        as="button"
                        className="px-4 py-2 rounded-full cursor-pointer"
                        color="#2585e7"
                        speed="2s"
                    >
                        See All Projects!
                    </StarBorder>
                </Link>
            </div>
        </div>
    );
};

export default Home;