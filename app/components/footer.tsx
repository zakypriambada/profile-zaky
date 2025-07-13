'use client'
import React from "react";
import Link from "next/link";
import StarBorder from "./StarBorder/StarBorder";


const Footer = () => {
    return (
        <footer className="bg-black text-white pb-8 fade-in">
            <div className="container mx-auto px-6">
                <div className="text-center mt-6">
                    <div className="pb-[20px]">
                        <Link href="/assets/CV ATS MUHAMAD ZAKY P A.pdf">
                            <StarBorder
                                as="button"
                                className="px-4 py-2 rounded-full cursor-pointer mr-[20px]"
                                color="white"
                                speed="2s"
                            >
                                View My CV
                            </StarBorder>
                        </Link>
                        <Link href="/contact">
                            <StarBorder
                                as="button"
                                className="px-4 py-2 rounded-full cursor-pointer"
                                color="white"
                                speed="2s"
                            >
                                Contact Me!
                            </StarBorder>
                        </Link>
                    </div>
                    <p className="text-sm pb-[5px]">Thanks For Visiting My Website Profile.</p>
                    <p className="text-sm">&copy; 2025 Muhamad Zaky Priambada Anugrah. All rights reserved.</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
                    <div className="flex justify-center items-center space-x-4">
                        <a href="https://www.linkedin.com/in/muhamad-zaky-priambada-anugrah/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/assets/logo-linkedin.svg"
                                width="30"
                                alt="LinkedIn"
                                className="transition-all duration-300 hover:shadow-lg hover:scale-110 hover:brightness-60"
                            />
                        </a>
                        <a href="https://github.com/zakypriambada" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/assets/logo-github.svg"
                                width="30"
                                alt="GitHub"
                                className="transition-all duration-300 hover:shadow-lg hover:scale-110 hover:brightness-60"
                            />
                        </a>
                        <a href="https://www.instagram.com/zakyprmbda/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/assets/logo-instagram.svg"
                                width="30"
                                alt="Instagram"
                                className="transition-all duration-300 hover:shadow-lg hover:scale-110 hover:brightness-60"
                            />
                        </a>
                        <a href="/contact#form" rel="noopener noreferrer">
                            <img
                                src="/assets/logo-gmail.svg"
                                width="30"
                                alt="Gmail"
                                className="transition-all duration-300 hover:shadow-lg hover:scale-110 hover:brightness-60"
                            />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
