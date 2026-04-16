import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Head from "next/head";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
            <Head>
        <title>Muhamad Zaky Priambada Anugrah – Portfolio Web & Mobile Developer</title>
        <meta name="description" content="Portofolio Muhamad Zaky Priambada Anugrah, mahasiswa Informatika UPN Veteran Jatim, Web & Mobile Developer, UI/UX designer, pengembang aplikasi web interaktif dan platform e-commerce." />
      </Head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}