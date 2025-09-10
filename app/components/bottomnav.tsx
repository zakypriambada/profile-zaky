'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import { FaHome, FaBriefcase, FaEnvelope } from 'react-icons/fa';

interface NavItem {
    name: string;
    href: string;
    icon: React.ReactNode;
}

export default function BottomNav() {
    const pathname = usePathname(); 

    const navItems: NavItem[] = [
        { name: 'Home', href: '/', icon: <FaHome size={20} /> },
        { name: 'Portofolio', href: '/portfolio', icon: <FaBriefcase size={20} /> },
        { name: 'Contact', href: '/contact', icon: <FaEnvelope size={20} /> },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-2px_5px_rgba(0,0,0,0.1)] h-16 md:hidden">
            <div className="flex justify-around items-center h-full max-w-lg mx-auto">
                {navItems.map((item) => {
                    
                    const isActive = (item.href === '/' && pathname === '/') || (item.href !== '/' && pathname.startsWith(item.href));

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            // Ganti warna jika link aktif
                            className={`flex flex-col items-center justify-center transition-colors ${isActive ? 'text-[#2585e7]' : 'text-gray-600 hover:text-[#2585e7]'}`}
                        >
                            {item.icon}
                            <span className="text-xs mt-1">{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}