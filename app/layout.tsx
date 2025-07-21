import type { Metadata } from "next";
// 1. Impor font Geist dari paketnya langsung, bukan dari 'next/font/google'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

// (Tidak ada perubahan di sini, konfigurasi variabel sudah benar)
const geistSans = GeistSans;
const geistMono = GeistMono;

// 2. Tambahkan favicon melalui properti 'icons' di metadata
export const metadata: Metadata = {
  title: "Profile Zaky",
  description: "Web Profile Portofolio",
  icons: {
    icon: '/assets/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Gabungkan className dari font dengan cara yang lebih bersih
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* Tag <head> manual sudah dihapus karena Next.js mengelolanya secara otomatis */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}