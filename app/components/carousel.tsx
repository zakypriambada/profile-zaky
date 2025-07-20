import React, { useState, useEffect } from "react";

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
            title: "Program Analisis Ulasan Produk",
            description: "Program ini adalah aplikasi web Streamlit untuk menganalisis sentimen ulasan produk dalam bahasa Indonesia. Pengguna mengunggah file CSV, dan aplikasi akan mengklasifikasikan sentimen ulasan (Positif, Negatif, atau Netral). Hasilnya ditampilkan dalam tabel yang bisa diunduh sebagai CSV atau PDF, serta grafik pie chart untuk menunjukkan distribusi sentimen.",
            mediaType: "video",
            mediaUrl: "/assets/porto/porto2.mp4",
            projectUrl: "https://github.com/zakypriambada/program-analisis-ulasan-produk",
            technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Lexicon Based"],
        },
        {
            id: 3,
            title: "Front-End Test API",
            description: "Proyek ini adalah test untuk magang di Suitmedia bagian front-end, yang menguji integrasi API, penambahan efek paralaks pada banner, serta penyinkronan show per page dengan postcard yang menggunakan lazy loading. Navbar diatur sesuai ketentuan dan tampilan responsif dioptimalkan untuk perangkat mobile. Jika gambar URL tidak terdeteksi, gambar cadangan dari aset akan ditampilkan.",
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
        <div className="flex flex-col items-center justify-center min-h-screen pb-[100px] fade-in">
            <section id="carousel-section" className="w-full max-w-4xl flex flex-col items-center pt-[50px]">
                <div className="relative w-full max-w-[700px] aspect-video group shadow-2xl rounded-xl overflow-hidden">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            {project.mediaType === "image" ? (
                                <img src={project.mediaUrl} alt={project.title} className="w-full h-full object-cover" />
                            ) : (
                                <video src={project.mediaUrl} title={project.title} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                            )}
                        </div>
                    ))}
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={projects[currentIndex].projectUrl} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition transform hover:scale-105">
                            View Project
                        </a>
                    </div>
                </div>
                <div className="w-full max-w-[750px] flex justify-between items-center mt-[-30px] px-2 relative z-30">
                    <button
                        onClick={prevProject}
                        className="p-2 bg-black/70 rounded-full shadow-lg hover:bg-black/90 transition cursor-pointer"
                        aria-label="Previous Project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextProject}
                        className="p-2 bg-black/70 rounded-full shadow-lg hover:bg-black/90 transition cursor-pointer"
                        aria-label="Next Project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center text-center mt-8 w-full max-w-[700px]">
                    <div key={currentIndex} className="w-full">
                        <div className="overflow-hidden">
                            <h2 className="text-3xl font-bold text-slate-800 animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>
                                {projects[currentIndex].title}
                            </h2>
                        </div>
                        <div className="overflow-hidden mt-2">
                            <p className="text-base text-slate-600 max-w-2xl mx-auto animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
                                {projects[currentIndex].description}
                            </p>
                        </div>
                        <div className="overflow-hidden mt-5">
                            <div className="flex justify-center gap-2 flex-wrap animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
                                {projects[currentIndex].technologies.map((tech) => (
                                    <span key={tech} className="text-[13px] border border-gray-300 text-gray-700 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-2 mt-6">
                        {projects.map((_, index) => (
                            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentIndex === index ? "bg-black" : "bg-slate-300 hover:bg-slate-400"}`} aria-label={`Go to slide ${index + 1}`} />
                        ))}
                    </div>
                </div>
                <div className="mt-12">
                    <a href="/portfolio" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-600 transition duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        See All Projects
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;