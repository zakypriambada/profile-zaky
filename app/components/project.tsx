'use client';
import React, { useState, useEffect } from 'react';

interface Project {
    title: string;
    description: string;
    mediaType: "video" | "image";
    mediaUrl: string;
    link: string;
    technologies: string[];
    category: string;
}

const projects: Project[] = [
    {
        title: "Jackduls Brand Website",
        description: "Jackduls adalah website untuk brand clothing pribadi saya, yang dibuat untuk menampilkan identitas merek, koleksi produk, dan karya desain. Selain sebagai showcase, situs ini juga menjadi sarana membangun kehadiran online Jackduls dengan tampilan modern dan performa cepat menggunakan Next.js.",
        mediaType: "video",
        mediaUrl: "/assets/porto/porto1.mp4",
        link: "https://jackduls-roan.vercel.app/",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React Bits"],
        category: "Web Development",
    },
    {
        title: "Aplikasi Prediksi Cuaca",
        description: "Sebuah aplikasi cuaca lintas platform (iOS & Android) yang dibangun sepenuhnya dengan Flutter. Aplikasi ini menyediakan data cuaca akurat secara real-time, prakiraan per jam, dan visualisasi data melalui peta cuaca interaktif. Proyek ini menunjukkan kemampuan dalam integrasi API pihak ketiga (OpenWeatherMap), manajemen state, dan pembuatan antarmuka pengguna yang bersih dan fungsional.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto???.jpeg",
        link: "#",
        technologies: ["Flutter", "Dart", "REST API", "OpenWeatherMap API", "JSON", "Geolocation (GPS)", "flutter_map", "State Management", "Android", "iOS"],
        category: "Mobile",
    },
    {
        title: "Front-End Test API",
        description: "Proyek ini adalah test untuk magang di Suitmedia bagian front-end, yang menguji integrasi API, penambahan efek paralaks pada banner, serta penyinkronan show per page dengan postcard yang menggunakan lazy loading. Navbar diatur sesuai ketentuan dan tampilan responsif dioptimalkan untuk perangkat mobile. Jika gambar URL tidak terdeteksi, gambar cadangan dari aset akan ditampilkan.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto9.png",
        link: "https://frontend-test-zakypriambada.vercel.app/ideas",
        technologies: ["NextJS", "Tailwind CSS", "API", "Data Structures", "GIT"],
        category: "Web Development",
    },
    {
        title: "Riniko Pempek",
        description: "Website ini dikembangkan untuk mendukung UMKM kuliner Riniko Pempek dalam memperluas jangkauan pemasaran secara digital. Fitur yang dihadirkan meliputi banner interaktif dengan efek parallax, menu produk yang terintegrasi dengan tombol pemesanan cepat, serta tampilan responsif yang dioptimalkan untuk perangkat mobile. Selain itu, implementasi lazy loading pada gambar memastikan website tetap ringan dan cepat diakses. Navigasi dirancang sederhana agar pelanggan mudah menemukan informasi, mulai dari daftar menu, lokasi usaha, hingga kontak WhatsApp untuk pemesanan langsung. Proyek ini menunjukkan bagaimana teknologi modern dapat membantu UMKM memaksimalkan potensi pemasaran online.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto10.jpeg",
        link: "https://riniko-pempek.vercel.app",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React Bits"],
        category: "Web Development",
    },
    {
        title: "Program Analisis Ulasan Produk",
        description: "Program ini adalah aplikasi web Streamlit untuk menganalisis sentimen ulasan produk dalam bahasa Indonesia. Pengguna mengunggah file CSV, dan aplikasi akan mengklasifikasikan sentimen ulasan (Positif, Negatif, atau Netral). Hasilnya ditampilkan dalam tabel yang bisa diunduh sebagai CSV atau PDF, serta grafik pie chart untuk menunjukkan distribusi sentimen.",
        mediaType: "video",
        mediaUrl: "/assets/porto/porto2.mp4",
        link: "https://github.com/zakypriambada/program-analisis-ulasan-produk",
        technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Lexicon Based"],
        category: "Data & ML",
    },
    {
        title: "Jackduls UI Prototype",
        description: "Prototype website Jackduls yang saya buat di Figma untuk tugas akhir UAS Desain Antarmuka. Desain ini menekankan tampilan yang rapi, intuitif, dan konsisten sebagai representasi brand clothing Jackduls.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto3.jpeg",
        link: "https://www.figma.com/design/ZjHXDNFRnJE2njg3m9UU6w/UAS-DESTAR",
        technologies: ["Figma", "UI Design"],
        category: "UI/UX Design",
    },
    {
        title: "Web Jackduls Project UAS",
        description: "Jackduls adalah website portofolio statis yang saya buat sebagai tugas akhir UAS untuk merepresentasikan brand clothing pribadi saya. Dibangun dengan HTML, CSS, dan Bootstrap 5, website ini berfungsi sebagai etalase digital yang responsif dan informatif untuk menampilkan identitas brand dan karya saya.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto4.svg",
        link: "https://jackduls.jagoankode.my.id/",
        technologies: ["HTML", "CSS3", "BootStrap 5", "JavaScript", "PHP"],
        category: "Web Development",
    },
    {
        title: "Pengembangan Sistem Point of Sale berbasis Java Desktop",
        description: "Aplikasi Kasir TOSERBA Berkah Abadi adalah sistem POS berbasis desktop yang dibuat dari studi kasus Toko Berkah Abadi di Jombang. Aplikasi ini memudahkan pencatatan penjualan, manajemen stok, utang-piutang, serta laporan keuangan harian. Dilengkapi fitur login untuk admin dan user, scan barcode untuk input barang, serta notifikasi otomatis, aplikasi ini dirancang dengan tampilan sederhana dan mudah digunakan agar proses operasional toko lebih efisien dan terkontrol.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto5.png",
        link: "https://github.com/zakypriambada/final-project-pbo",
        technologies: ["Java", "Java Swing", "GUI", "MySQL"],
        category: "Software & Networking",
    },
    {
        title: "SISTEM ANALISIS SENTIMEN ULASAN PRODUK BERBAHASA INDONESIAMENGGUNAKAN METODE LEXICON DENGAN VISUALISASI INTERAKTIF (Jurnal)",
        description: "Ini adalah proyek akhir mata kuliah Kecerdasan Buatan, yang mengembangkan sistem analisis sentimen ulasan produk berbahasa Indonesia menggunakan metode lexicon dengan visualisasi interaktif. Hasilnya disusun dalam bentuk jurnal yang dipublikasikan.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto6.png",
        link: "https://ejournal.cahayailmubangsa.institute/index.php/kohesi/article/view/3747",
        technologies: ["Mendeley", "Publish or Perish", "Kohesi: Jurnal Sains dan Teknologi"],
        category: "Data & ML",
    },
    {
        title: "Real-Time Hand Gesture Detection Using OpenCV & MediaPipe",
        description: "Pengenalan Gerakan Tangan dengan Python & MediaPipe adalah proyek penglihatan komputer real-time yang mendeteksi dan melacak pergerakan tangan menggunakan webcam. Dibangun dengan OpenCV dan MediaPipe, sistem ini mampu mengidentifikasi apakah tangan yang terdeteksi adalah tangan kiri atau kanan, menghitung jumlah jari yang terangkat, dan menampilkan hasilnya secara langsung pada tampilan video.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto7.jpeg",
        link: "https://github.com/zakypriambada/finger-five-test",
        technologies: ["Python", "Google Colabs", "Media Pipe", "Open CV"],
        category: "Data & ML",
    },
    {
        title: "Topologi Jaringan Warnet dengan Segmentasi VLAN, DHCP, dan Hotspot",
        description: "Topologi ini adalah simulasi jaringan warnet yang menampilkan segmentasi pengguna seperti reguler, gamer, VIP, dan hotspot. Dibangun menggunakan Cisco Packet Tracer atau GNS3, proyek ini mengimplementasikan VLAN, DHCP, dan routing antar jaringan untuk pengelolaan lalu lintas dan keamanan. Dengan pembagian subnet dan konfigurasi router-switch, jaringan ini mendukung manajemen IP otomatis serta pemisahan akses melalui VLAN dan hotspot.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto8.jpeg",
        link: "https://github.com/zakypriambada/topology_warnet",
        technologies: ["GNS3", "Winbox", "Cisco Packet Tracer", "DHCP", "VLAN", "Static & Dynamic Routin", "Hotspot", "Subnetting"],
        category: "Software & Networking",
    },
];

interface ModalProps {
    project: Project | null;
    onClose: () => void;
}

function ProjectModal({ project, onClose }: ModalProps) {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-[3px] flex items-center justify-center z-50 p-4 transition-opacity duration-300" onClick={onClose}>
            <div
                className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-3 cursor-pointer right-3 z-10 p-1 bg-[#2585e7] hover:bg-[#1E73E8] rounded-full transition" aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="w-full aspect-video flex-shrink-0">
                    {project.mediaType === 'image' ? (
                        <img src={project.mediaUrl} alt={project.title} className="w-full h-full object-cover bg-gray-100" />
                    ) : (
                        <video src={project.mediaUrl} className="w-full h-full object-cover bg-gray-100" autoPlay muted loop playsInline />
                    )}
                </div>
                <div className="w-full p-6 flex flex-col overflow-y-auto">
                    <h2 className="text-2xl font-bold text-black mb-2">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded-full font-medium">{tech}</span>
                        ))}
                    </div>
                    <p className="text-base text-gray-600 mb-6 flex-grow">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-[#2585e7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E73E8] transition">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
}

interface CardProps {
    project: Project;
    onCardClick: () => void;
    index: number;
}

function ProjectCard({ project, onCardClick, index }: CardProps) {
    return (
        <div
            onClick={onCardClick}
            className="group relative bg-[#f1f3fb] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer opacity-0 animate-card-in"
            style={{ animationDelay: `${index * 80}ms` }}
        >
            <div className="aspect-video w-full overflow-hidden">
                {project.mediaType === 'image' ? (
                    <img src={project.mediaUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                    <video src={project.mediaUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" autoPlay muted loop playsInline />
                )}
            </div>
            <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                    <h3 className="text-base font-semibold text-black mb-2">{project.title}</h3>
                    <p className="text-sm text-black-500 mb-3 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="text-xs border border-gray-300 text-gray-700 px-2 py-1 rounded-full">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <span className="text-sm font-semibold text-[#2585e7] hover:text-blue-[#1E73E8">
                        Lihat Detail →
                    </span>
                </div>
            </div>
        </div>
    );
}


export default function Project() {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const [selectedCategory, setSelectedCategory] = useState('All');

  
    const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

    const handleShowAll = () => setShowAll(true);
    const handleCardClick = (project: Project) => setSelectedProject(project);
    const handleCloseModal = () => setSelectedProject(null);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setShowAll(false); 
    };

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);

    return (
        <>
            <section id="projects" className="pb-[30px] fade-in">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold md:text-[30px] bg-black from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            My Projects
                        </h1>
                        <hr className="max-w-[300px] sm:max-w-2xl md:max-w-3xl mx-auto border-t-1" />
                    </div>

                    <div className="flex justify-center flex-wrap gap-3 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 cursor-pointer ${selectedCategory === category
                                        ? 'bg-[#2585e7] text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {visibleProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                onCardClick={() => handleCardClick(project)}
                                index={index}
                            />
                        ))}
                    </div>

                    {!showAll && filteredProjects.length > 8 && (
                        <div className="text-center mt-12">
                            <button
                                onClick={handleShowAll}
                                className="bg-[#2585e7] text-white cursor-pointer px-6 py-3 rounded-full hover:bg-[#1E73E8]"
                            >
                                Tampilkan Semua
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </>
    );
}