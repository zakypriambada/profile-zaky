'use client';
import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "../components/footer";
import BlurText from "../components/BlurText/BlurText";

const handleAnimationComplete = () => {
    console.log("Animation completed!");
};

export default function Contact() {
    const navItems = ["Home", "Portofolio", "Contact"];
    const [isVisible, setIsVisible] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Pesan berhasil dikirim (simulasi)");
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar items={navItems} />
            <section className="pt-[50px]">
                <div className="overflow-x-hidden">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-center items-center animate-fadeIn pt-[100px] text-black px-4 md:px-0">
                            <BlurText
                                text="Saya di sini kalau anda butuh."
                                delay={200}
                                animateBy="words"
                                direction="top"
                                onAnimationComplete={handleAnimationComplete}
                                className="text-[24px] sm:text-[37px] mb-8 font-bold text-center"
                            />
                        </div>
                        <div className="contact-section pt-[50px] animate-fadeIn justify-center items-center flex flex-wrap gap-8 px-4 md:px-0 fade-in">
                            <div className="info-card text-center max-w-[300px] w-full p-4 flex flex-col items-center justify-center">
                                <img
                                    src="/assets/logo-lokasi.png"
                                    width="50"
                                    alt="Lokasi"
                                    className="filter brightness-0 mb-2"
                                />
                                <h3 className="text-lg font-bold pb-[10px]">Domisicile</h3>
                                <p>Wage, Sidoarjo, Jawa Timur</p>
                            </div>
                            <div className="info-card text-center max-w-[300px] w-full p-4 flex flex-col items-center justify-center">
                                <img
                                    src="/assets/logo-telepon.png"
                                    width="54"
                                    alt="Telepon"
                                    className="filter brightness-0 mb-2"
                                />
                                <h3 className="text-lg font-bold pb-[10px]">My Phone Number</h3>
                                <p>+6285940487295</p>
                            </div>
                            <div className="info-card text-center max-w-[300px] w-full p-4 flex flex-col items-center justify-center">
                                <img
                                    src="/assets/logo-email.png"
                                    width="50"
                                    alt="Email"
                                    className="filter brightness-0 mb-2"
                                />
                                <h3 className="text-lg font-bold pb-[10px]">Email</h3>
                                <p>zakypriambada05@email.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="form" className="pt-[30px] fade-in">
                <div className="w-full max-w-2xl mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold text-center mb-6">Kirim Pesan Kepada Saya</h2>
                    <form
                        action="https://formspree.io/f/mblkrrzy"
                        method="POST"
                        className="space-y-6 bg-white"
                    >
                        <div>
                            <label className="block font-medium mb-1" htmlFor="name">Nama</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Nama lengkap anda"
                                className="w-full border border-black rounded-[20px] px-4 py-2 focus:outline-none focus:ring focus:ring-black/30"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="emailanda@email.com"
                                className="w-full border border-black rounded-[20px] px-4 py-2 focus:outline-none focus:ring focus:ring-black/30"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1" htmlFor="subject">Subjek</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder="Judul pesan anda"
                                className="w-full border border-black rounded-[20px] px-4 py-2 focus:outline-none focus:ring focus:ring-black/30"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1" htmlFor="message">Pesan</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Tulis pesan anda di sini..."
                                className="w-full border border-black rounded-[20px] px-4 py-2 resize-none focus:outline-none focus:ring focus:ring-black/30"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#2585e7] text-white px-6 py-2 rounded-full hover:bg-[#1E73E8] transition duration-300 cursor-pointer"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}
