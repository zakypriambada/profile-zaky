'use client';
import React, { useState, useEffect } from 'react';

//=========== INTERFACE & DATA ===========//

// Definisikan tipe data sekali untuk digunakan di semua komponen
interface Certificate {
    title: string;
    description: string;
    mediaType: "image";
    mediaUrl: string;
    technologies: string[];
}

const certificates: Certificate[] = [
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

//=========== KOMPONEN MODAL ===========//
interface ModalProps {
    cert: Certificate | null;
    onClose: () => void;
}

function CertificateModal({ cert, onClose }: ModalProps) {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!cert) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 transition-opacity duration-300" onClick={onClose}>
            <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-3 right-3 z-10 p-1 bg-gray-200/50 hover:bg-gray-200 cursor-pointer rounded-full transition" aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="w-full md:w-1/2">
                    <img src={cert.mediaUrl} alt={cert.title} className="w-full h-full object-contain bg-gray-100" />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col overflow-y-auto">
                    <h2 className="text-2xl font-bold text-black mb-2">{cert.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {cert.technologies.map((tech, i) => (
                            <span key={i} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">{tech}</span>
                        ))}
                    </div>
                    <p className="text-base text-gray-600 mb-6 flex-grow">{cert.description}</p>
                    <a href={cert.mediaUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition">
                        Lihat Sertifikat
                    </a>
                </div>
            </div>
        </div>
    );
}


//=========== KOMPONEN KARTU ===========//
interface CardProps {
    cert: Certificate;
    onCardClick: () => void;
    index: number;
}

// Ganti fungsi CertificateCard yang lama dengan yang ini
function CertificateCard({ cert, onCardClick, index }: CardProps) {
    return (
        <div 
            onClick={onCardClick} 
            // Tambahkan kelas 'animate-card-in' dan atur opacity awal ke 0
            className="group relative bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer opacity-0 animate-card-in"
            // Tambahkan delay animasi berdasarkan index kartu
            style={{ animationDelay: `${index * 80}ms` }}
        >
            <div className="aspect-video w-full overflow-hidden">
                <img src={cert.mediaUrl} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                    <h3 className="text-base font-semibold text-black mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-3">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {cert.technologies.map((tech, i) => (
                            <span key={i} className="text-xs border border-gray-300 text-gray-700 px-2 py-1 rounded-full">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

//=========== KOMPONEN UTAMA (DEFAULT EXPORT) ===========//
export default function Sertifikat() {
    const [showAll, setShowAll] = useState(false);
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    const handleShowAll = () => setShowAll(true);
    const handleCardClick = (cert: Certificate) => setSelectedCert(cert);
    const handleCloseModal = () => setSelectedCert(null);

    const visibleCertificates = showAll ? certificates : certificates.slice(0, 8);

    return (
        <>
            <section id="certificates" className="py-16 fade-in">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold md:text-5xl bg-black from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            My Certificates
                        </h1>
                        <div className="w-60 h-1 mx-auto bg-black from-blue-600 to-purple-600 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {visibleCertificates.map((cert, index) => (
                           <CertificateCard 
                                key={index} 
                                cert={cert} 
                                onCardClick={() => handleCardClick(cert)}
                                index={index}
                           />
                        ))}
                    </div>

                    {!showAll && (
                        <div className="text-center mt-12 col-span-full">
                            <button
                                onClick={handleShowAll}
                                className="bg-black cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition transform hover:scale-105 shadow-lg"
                            >
                                Tampilkan Semua
                            </button>
                        </div>
                    )}
                </div>
            </section>
            
            <CertificateModal cert={selectedCert} onClose={handleCloseModal} />
        </>
    );
}