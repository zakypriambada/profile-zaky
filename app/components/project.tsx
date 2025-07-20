'use client';
import React, { useEffect, useState } from "react";
import BlurText from "../components/BlurText/BlurText";

const projects = [
    {
        title: "Jackduls Brand Website",
        description: "Jackduls adalah website untuk brand clothing pribadi saya, yang dibuat untuk menampilkan identitas merek, koleksi produk, dan karya desain. Selain sebagai showcase, situs ini juga menjadi sarana membangun kehadiran online Jackduls dengan tampilan modern dan performa cepat menggunakan Next.js.",
        mediaType: "video",
        mediaUrl: "/assets/porto/porto1.mp4",
        link: "https://jackduls-roan.vercel.app/",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React Bits"],
    },
    {
        title: "Front-End Test API",
        description: "Proyek ini adalah test untuk magang di Suitmedia bagian front-end, yang menguji integrasi API, penambahan efek paralaks pada banner, serta penyinkronan show per page dengan postcard yang menggunakan lazy loading. Navbar diatur sesuai ketentuan dan tampilan responsif dioptimalkan untuk perangkat mobile. Jika gambar URL tidak terdeteksi, gambar cadangan dari aset akan ditampilkan.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto9.png",
        link: "https://frontend-test-zakypriambada.vercel.app/ideas",
        technologies: ["NextJS", "Tailwind CSS", "API", "Data Structures", "GIT"],
    },
    {
        title: "Program Analisis Ulasan Produk",
        description: "Program ini adalah aplikasi web Streamlit untuk menganalisis sentimen ulasan produk dalam bahasa Indonesia. Pengguna mengunggah file CSV, dan aplikasi akan mengklasifikasikan sentimen ulasan (Positif, Negatif, atau Netral). Hasilnya ditampilkan dalam tabel yang bisa diunduh sebagai CSV atau PDF, serta grafik pie chart untuk menunjukkan distribusi sentimen.",
        mediaType: "video",
        mediaUrl: "/assets/porto/porto2.mp4",
        link: "https://github.com/zakypriambada/program-analisis-ulasan-produk",
        technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "Lexicon Based"],
    },
    {
        title: "Jackduls UI Prototype",
        description: "Prototype website Jackduls yang saya buat di Figma untuk tugas akhir UAS Desain Antarmuka. Desain ini menekankan tampilan yang rapi, intuitif, dan konsisten sebagai representasi brand clothing Jackduls.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto3.jpeg",
        link: "https://www.figma.com/design/ZjHXDNFRnJE2njg3m9UU6w/UAS-DESTAR",
        technologies: ["Figma", "UI Design"],
    },
    {
        title: "Web Jackduls Project UAS",
        description: "Jackduls adalah website portofolio statis yang saya buat sebagai tugas akhir UAS untuk merepresentasikan brand clothing pribadi saya. Dibangun dengan HTML, CSS, dan Bootstrap 5, website ini berfungsi sebagai etalase digital yang responsif dan informatif untuk menampilkan identitas brand dan karya saya.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto4.svg",
        link: "https://jackduls.jagoankode.my.id/",
        technologies: ["HTML", "CSS3", "BootStrap 5", "JavaScript", "PHP"],
    },
    {
        title: "Pengembangan Sistem Point of Sale berbasis Java Desktop",
        description: "Aplikasi Kasir TOSERBA Berkah Abadi adalah sistem POS berbasis desktop yang dibuat dari studi kasus Toko Berkah Abadi di Jombang. Aplikasi ini memudahkan pencatatan penjualan, manajemen stok, utang-piutang, serta laporan keuangan harian. Dilengkapi fitur login untuk admin dan user, scan barcode untuk input barang, serta notifikasi otomatis, aplikasi ini dirancang dengan tampilan sederhana dan mudah digunakan agar proses operasional toko lebih efisien dan terkontrol.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto5.png",
        link: "https://github.com/zakypriambada/final-project-pbo",
        technologies: ["Java", "Java Swing", "GUI", "MySQL"],
    },
    {
        title: "SISTEM ANALISIS SENTIMEN ULASAN PRODUK BERBAHASA INDONESIAMENGGUNAKAN METODE LEXICON DENGAN VISUALISASI INTERAKTIF (Jurnal)",
        description: "Ini adalah proyek akhir mata kuliah Kecerdasan Buatan, yang mengembangkan sistem analisis sentimen ulasan produk berbahasa Indonesia menggunakan metode lexicon dengan visualisasi interaktif. Hasilnya disusun dalam bentuk jurnal yang dipublikasikan.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto6.png",
        link: "https://ejournal.cahayailmubangsa.institute/index.php/kohesi/article/view/3747",
        technologies: ["Mendeley", "Publish or Perish", "Kohesi: Jurnal Sains dan Teknologi"],
    },
    {
        title: "Real-Time Hand Gesture Detection Using OpenCV & MediaPipe",
        description: "Pengenalan Gerakan Tangan dengan Python & MediaPipe adalah proyek penglihatan komputer real-time yang mendeteksi dan melacak pergerakan tangan menggunakan webcam. Dibangun dengan OpenCV dan MediaPipe, sistem ini mampu mengidentifikasi apakah tangan yang terdeteksi adalah tangan kiri atau kanan, menghitung jumlah jari yang terangkat, dan menampilkan hasilnya secara langsung pada tampilan video.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto7.jpeg",
        link: "https://github.com/zakypriambada/finger-five-test",
        technologies: ["Python", "Google Colabs", "Media Pipe", "Open CV"],
    },
    {
        title: "Topologi Jaringan Warnet dengan Segmentasi VLAN, DHCP, dan Hotspot",
        description: "Topologi ini adalah simulasi jaringan warnet yang menampilkan segmentasi pengguna seperti reguler, gamer, VIP, dan hotspot. Dibangun menggunakan Cisco Packet Tracer atau GNS3, proyek ini mengimplementasikan VLAN, DHCP, dan routing antar jaringan untuk pengelolaan lalu lintas dan keamanan. Dengan pembagian subnet dan konfigurasi router-switch, jaringan ini mendukung manajemen IP otomatis serta pemisahan akses melalui VLAN dan hotspot.",
        mediaType: "image",
        mediaUrl: "/assets/porto/porto8.jpeg",
        link: "https://github.com/zakypriambada/topology_warnet",
        technologies: ["GNS3", "Winbox", "Cisco Packet Tracer", "DHCP", "VLAN", "Static & Dynamic Routin", "Hotspot", "Subnetting"],
    },
];

export default function Project() {

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <section id="portfolio2">
                <div className="min-h-screen overflow-x-hidden">
                    <div className="container mx-auto px-6 sm:px-10">
                        <div className="">
                            <h1 className="text-[39px] font-bold pb-[10px] fade-in text-center">My Project</h1>
                            <hr className="max-w-3xl mx-auto border-t-2 pb-[20px] fade-in" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-[70px]">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`
        relative bg-white border border-gray-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col
        transform transition duration-100 ease-out
        opacity-0 translate-y-6
        animate-fade-in-delay
        delay-[${index * 900}ms]`}
                                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                                >
                                    {project.mediaType === 'image' ? (
                                        <img
                                            src={project.mediaUrl}
                                            alt={project.title}
                                            className="w-full h-40 object-cover"
                                        />
                                    ) : (
                                        <video
                                            src={project.mediaUrl}
                                            className="w-full h-40 object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    )}
                                    <div className="flex flex-col justify-between flex-1 p-4">
                                        <div>
                                            <h3 className="text-[18px] font-semibold text-black mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-[14px] text-gray-500 mb-3">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[13px] border border-gray-300 text-gray-700 px-2 py-1 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-black text-white px-3 py-2 text-[14px] rounded-full hover:bg-gray-600 transition"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
