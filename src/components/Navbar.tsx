'use client';

import React, {useState} from "react";
import Image from "next/image";

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import uscLogo from "@/public/logos/usc-logo.png"
import moeaLogo from "@/public/logos/moea-logo.png"
export default function Navbar (){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <div className="top-3 inset-x-0 fixed flex flex-col gap-2 transform-gpu will-change-transform">
            <div className="mx-5 md:mx-10 px-5 py-2 md:py-4 box-border flex justify-between items-center border border-white/30 shadow-lg shadow-black/10 rounded-full bg-white/20 backdrop-blur-md">
                <div className="flex gap-2">
                    <Image
                        src={uscLogo}
                        alt="Shih Chien University"
                        width={90}
                        height={30}
                        className="h-[20px] md:h-[30px] w-auto"
                    />
                    <Image
                        src={moeaLogo}
                        alt="Administration of Commerce, MOEA"
                        width={90}
                        height={30}
                        className="hidden sm:inline h-[20px] md:h-[30px] w-auto"
                    />
                </div>
                <div className="hidden lg:inline lg:flex lg:items-center lg:text-[20px]">
                    <a href="#section">區塊連結</a>
                    <a href="#section">區塊連結</a>
                    <a href="#section">區塊連結</a>
                    <a href="#section">區塊連結</a>
                    <button className="apply-btn">我要報名</button>
                </div>
                {menuOpen ? 
                    <XMarkIcon className="lg:hidden w-6 h-6 text-black hover:text-gray-500 cursor-pointer" onClick={toggleMenu}/> :
                    <Bars3Icon className="lg:hidden w-6 h-6 text-black hover:text-gray-500 cursor-pointer" onClick={toggleMenu}/>
                }
            </div>
            {menuOpen && (
                <div className="glass lg:hidden mx-5 md:mx-10 p-6 flex flex-col gap-2 items-center rounded-3xl bg-slate-400/30 text-black">
                    <a href="#section" onClick={closeMenu} className="transition-colors w-full h-10 flex items-center justify-center">區塊連結</a>
                    <a href="#section" onClick={closeMenu} className="transition-colors w-full h-10 flex items-center justify-center">區塊連結</a>
                    <a href="#section" onClick={closeMenu} className="transition-colors w-full h-10 flex items-center justify-center">區塊連結</a>
                    <a href="#section" onClick={closeMenu} className="transition-colors w-full h-10 flex items-center justify-center">區塊連結</a>
                    <button 
                        onClick={closeMenu}
                        className="apply-btn w-full h-10"
                    >
                        我要報名
                    </button>
                </div>
            )}
        </div>
    );
} 