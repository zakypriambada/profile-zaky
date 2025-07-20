'use client';
import React, { useState, useRef, useEffect } from 'react';

const certificates = [
    {
        title: "Flutter In Production",
        description: "Mengikuti kegiatan Flutter In Production sebagai Participant, yang membahas penerapan Flutter dalam pengembangan aplikasi siap produksi serta praktik terbaik dalam industri pengembangan perangkat lunak.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/flutter.jpeg",
        technologies: ["Participants"],
    },
    {
        title: "Seminar Kuliah Tamu Informatika 2024",
        description: "Mengikuti seminar dengan tema “Cybersecurity Knowledge Transfer: Experts to Everyone” sebagai Peserta, yang membahas pemindahan pengetahuan dan praktik terbaik dalam keamanan siber kepada kalangan akademik dan umum.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/cybersecurity.jpg",
        technologies: ["Participants"],
    },
    {
        title: "Google DevFest 2024 – Surabaya",
        description: "Berpartisipasi sebagai Participant dalam Google DevFest 2024, sebuah acara teknologi tahunan yang diselenggarakan oleh Google Developer Groups Surabaya, dengan topik seputar pengembangan teknologi, inovasi, dan komunitas developer.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/devfest.jpeg",
        technologies: ["Participants"],
    },
    {
        title: "Publikasi Karya Ilmiah di Jurnal Cahaya Ilmu Bangsah",
        description: "Memublikasikan karya tulis ilmiah sebagai Penulis dalam jurnal yang diterbitkan oleh Cahaya Ilmu Bangsa Institute, terdaftar resmi di KEMENKUMHAM dengan SK AHU-0018912-AH.01.14.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/jurnal.jpg",
        technologies: ["Author"],
    },
    {
        title: "Abdi Desa 2024 – Informatika UPN Veteran Jawa Timur",
        description: "Berperan sebagai Anggota Divisi Humas dalam kegiatan Abdi Desa 2024 yang bertema “Memaksimalkan Potensi Desa Melalui Pemberdayaan Digital dan Transformasi Menuju Desa Cerdas”, dilaksanakan di Desa Padangasri, Mojokerto pada 4–8 Juli 2024.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/abdes.jpeg",
        technologies: ["Organizer"],
    },
    {
        title: "Achieve Career Excellent 2023",
        description: "Berpartisipasi sebagai Peserta dalam kegiatan Achieve Career Excellent 2023, sebuah seminar pengembangan karier yang diselenggarakan oleh Himpunan Mahasiswa Informatika, Fakultas Ilmu Komputer UPN Veteran Jawa Timur pada 8 Desember 2023.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/ace.jpg",
        technologies: ["Participants"],
    },
    {
        title: "Fasilkom Fest 2023/2024 – UPN Veteran Jawa Timur",
        description: "Berperan sebagai Anggota Divisi Keamanan dan Perizinan dalam kegiatan Fasilkom Fest 2023/2024, yang diselenggarakan oleh BEM Fakultas Ilmu Komputer UPN Veteran Jawa Timur dari 1 Desember 2023 hingga 17 Februari 2024.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/ff.jpeg",
        technologies: ["Organizer"],
    },
    {
        title: "PEMIRA 2024 – Informatika UPN “Veteran” Jawa Timur",
        description: "Berpartisipasi sebagai Anggota Divisi Perlengkapan dan Konsumsi dalam Pemilihan Raya (PEMIRA) 2024 yang diselenggarakan oleh Himpunan Mahasiswa Informatika UPN “Veteran” Jawa Timur pada 28–29 Desember 2023, dengan tema “Voice Your Choice” untuk menumbuhkan semangat demokrasi dan pelibatan aktif mahasiswa.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/pemira.jpeg",
        technologies: ["Organizer"],
    },
    {
        title: "Pelatihan Bidang Teknologi dan Informasi 2024 – Laravel for Beginners",
        description: "Bertugas sebagai Anggota Divisi Perlengkapan dalam kegiatan pelatihan bertema Laravel for Beginners, yang diselenggarakan oleh Himpunan Mahasiswa Informatika, Fakultas Ilmu Komputer UPN Veteran Jawa Timur pada tanggal 6, 7, 13, 14, 20, dan 27 Juli 2024.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/pibiti.jpeg",
        technologies: ["Organizer"],
    },
    {
        title: "MABA CUP x Connection Day 2024 – Informatika UPN “Veteran” Jawa Timur",
        description: "Berperan sebagai Anggota Divisi Keamanan dan Perizinan dalam MABA CUP x Connection Day 2024 yang dilaksanakan oleh Fakultas Ilmu Komputer UPN “Veteran” Jawa Timur pada 31 Januari – 2 Februari dan 23 Februari 2024, untuk mempererat relasi antarmahasiswa melalui olahraga dan pengembangan diri.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/mabacup.jpeg",
        technologies: ["Organizer"],
    },
    {
        title: "LKMM-TD 2024 – Informatika UPN “Veteran” Jawa Timur",
        description: "Berperan sebagai Anggota Divisi Perlengkapan Konsumsi dalam Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar (LKMM-TD) 2024 yang diselenggarakan oleh Fakultas Ilmu Komputer UPN “Veteran” Jawa Timur pada 5, 6, dan 12 Oktober 2024, untuk pengembangan soft skill mahasiswa melalui pelatihan kepemimpinan dan manajemen organisasi.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/lkmm.jpg",
        technologies: ["Organizer"],
    },
    {
        title: "MOSAIK 2023 – Informatika UPN “Veteran” Jawa Timur",
        description: "Mengikuti rangkaian orientasi dalam acara MOSAIK 2023 Fakultas Ilmu Komputer UPN “Veteran” Jawa Timur sebagai Peserta pada 21, 24, dan 30 Agustus 2023, untuk menanamkan nilai dasar kemahasiswaan serta memperkenalkan sistem akademik dan kehidupan kampus kepada mahasiswa baru.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/mosaik.jpeg",
        technologies: ["Participants"],
    },
    {
        title: "Pengkaderan 2023 – Informatika UPN “Veteran” Jawa Timur",
        description: "Mengikuti serangkaian kegiatan Pengkaderan Program Studi Informatika tahun 2023 yang diselenggarakan oleh Himatif UPN “Veteran” Jawa Timur sebagai bagian dari proses pembinaan dan penguatan karakter mahasiswa.",
        mediaType: "image",
        mediaUrl: "/assets/sertif/pengkaderan.jpeg",
        technologies: ["Participants"],
    },
];
export default function Sertifikat() {
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => setShowAll(true);
    const gridRef = useRef<HTMLDivElement>(null);
    const visibleCertificates = showAll ? certificates : certificates.slice(0, 7);
    return (
        <section id="certificates" className="pb-[50px] relative">
            <div className="container mx-auto px-6 sm:px-10">
                <h1 className="text-[39px] font-bold pb-[10px] pt-[50px] text-center">My Certificate</h1>
                <hr className="max-w-3xl mx-auto border-t-2 pb-[20px]" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-[70px] ">
                    {visibleCertificates.map((cert, index) => (
                        <div
                            key={index}
                            className={`
        relative bg-white border border-gray-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col
        transform transition duration-100 ease-out
        opacity-0 translate-y-6
        animate-fade-in-delay
        delay-[${index * 900}ms]`}
                        >
                            {cert.mediaType === 'image' && (
                                <img src={cert.mediaUrl} alt={cert.title} className="w-full h-60 object-cover" />
                            )}
                            <div className="flex flex-col justify-between flex-1 p-4">
                                <div>
                                    <h3 className="text-[18px] font-semibold text-black mb-2">{cert.title}</h3>
                                    <p className="text-[14px] text-gray-500 mb-3">{cert.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.technologies.map((tech, i) => (
                                            <span key={i} className="text-[13px] border border-gray-300 text-gray-700 px-2 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!showAll && (
                        <div className="flex items-center justify-center pt-[35px]">
                            <button
                                onClick={handleShowAll}
                                className="flex items-center gap-2 text-white bg-black px-4 py-2 rounded-full hover:bg-gray-600 transition shadow-lg cursor-pointer"
                            >
                                Lihat Lebih Banyak <span className="text-xl">→</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
