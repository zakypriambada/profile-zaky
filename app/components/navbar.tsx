'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
    items: string[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const resolveHref = (item: string) => {
        const lower = item.toLowerCase();
        if (lower === 'home') return '/';
        if (lower === 'contact') return '/contact';
        if (lower === 'portofolio') return '/#portofolio';
        return `/#${lower}`;
    };

    const handleHomeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav
            className={`bg-black shadow-md py-6 w-full transition-all duration-800 ease-in-out transform fixed top-0 left-0 right-0 z-50 ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
        >
            <div className="max-w-screen-xl mx-auto px-6 flex justify-center items-center">
                <ul className="hidden md:flex space-x-8">
                    {items.map((item, index) => (
                        <li key={index} className="relative group">
                            {item.toLowerCase() === 'home' && pathname === '/' ? (
                                <button
                                    onClick={handleHomeClick}
                                    className="relative text-white text-lg transition-all duration-300 group bg-transparent border-none focus:outline-none"
                                >
                                    {item}
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transform transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </button>
                            ) : (
                                <Link
                                    href={resolveHref(item)}
                                    className="relative text-white text-lg transition-all duration-300 group"
                                >
                                    {item}
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transform transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="md:hidden ml-auto">
                    <button onClick={toggleMenu} className="text-white text-3xl">
                        {isMenuOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>
            <ul
                className={`md:hidden flex flex-col space-y-4 p-4 bg-black absolute top-16 left-0 w-full transition-all duration-300 ${
                    isMenuOpen ? 'block' : 'hidden'
                }`}
            >
                {items.map((item, index) => (
                    <li key={index} className="relative group text-center">
                        {item.toLowerCase() === 'home' && pathname === '/' ? (
                            <button
                                onClick={(e) => {
                                    handleHomeClick(e);
                                    setIsMenuOpen(false);
                                }}
                                className="text-white text-lg hover:text-gray-400 transition-all duration-300 bg-transparent border-none focus:outline-none"
                            >
                                {item}
                                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transform transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </button>
                        ) : (
                            <Link
                                href={resolveHref(item)}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white text-lg hover:text-gray-400 transition-all duration-300"
                            >
                                {item}
                                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transform transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
