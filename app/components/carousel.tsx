import React, { useState } from "react";

const Home = () => {
    const projects = [
        {
            id: 1,
            title: "Jackduls",
            description: "Jackduls adalah website untuk brand clothing pribadi saya, yang menampilkan identitas merek, koleksi produk, dan desain, sekaligus membangun kehadiran online dengan tampilan modern dan performa cepat menggunakan Next.js.",
            mediaType: "video",
            mediaUrl: "/assets/porto/porto1.mp4",
            projectUrl: "https://jackduls-roan.vercel.app/",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React Bits"],
        },
        {
            id: 2,
            title: "Program Analisis Ulasan Produk",
            description: "Program ini adalah aplikasi web Streamlit untuk menganalisis sentimen ulasan produk dalam bahasa Indonesia. Pengguna mengunggah file CSV, dan aplikasi mengklasifikasikan sentimen (Positif, Negatif, atau Netral), menampilkan hasil dalam tabel yang bisa diunduh sebagai CSV atau PDF, serta grafik pie chart untuk distribusi sentimen.",
            mediaType: "video",
            mediaUrl: "/assets/porto/porto2.mp4",
            projectUrl: "https://github.com/zakypriambada/program-analisis-ulasan-produk",
            technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Lexicon Based"],
        },
        {
            id: 3,
            title: "Protoype Web Jackduls in Figma",
            description: "Prototype website Jackduls yang saya buat di Figma untuk tugas akhir UAS Desain Antarmuka. Desain ini menekankan tampilan yang rapi, intuitif, dan konsisten sebagai representasi brand clothing Jackduls.",
            mediaType: "image",
            mediaUrl: "/assets/porto/porto3.jpeg",
            projectUrl: "https://www.figma.com/design/ZjHXDNFRnJE2njg3m9UU6w/UAS-DESTAR?node-id=0-1&t=XwQbjd92M9MlUAYm-0",
            technologies: ["Figma"],
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className="flex flex-col min-h-screen fade-in">
            <section id="carousel" className="py-10">
                <div className="relative max-w-[600px] mx-auto group">
                    <div className="w-full h-[337px] overflow-hidden rounded-lg relative">
                        {projects[currentIndex].mediaType === "image" ? (
                            <img
                                src={projects[currentIndex].mediaUrl}
                                alt={projects[currentIndex].title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <video
                                src={projects[currentIndex].mediaUrl}
                                title={projects[currentIndex].title}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        )}
                        <div className="absolute inset-0 backdrop-blur-[5px] bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a
                                href={projects[currentIndex].projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
                        <button
                            onClick={prevProject}
                            className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-600"
                        >
                            &#10094;
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
                        <button
                            onClick={nextProject}
                            className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-600"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center mt-4">
                    <h2 className="text-2xl font-bold pt-[15px]">{projects[currentIndex].title}</h2>
                    <p className="text-[16px] text-gray-500 pt-[8px] max-w-[650px] px-4">{projects[currentIndex].description}</p>
                    <div className="mt-4 flex justify-center gap-3 flex-wrap">
                        {projects[currentIndex].technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="border border-gray-300 text-sm text-gray-700 px-4 py-2 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 pt-[20px]">
                        <a
                            href="/portfolio"
                            className="bg-black text-white px-8 py-3 rounded-[30px] hover:bg-gray-600 transition duration-300"
                        >
                            See All Project
                        </a>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;
