'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import uscLogo from "@/public/logos/usc-white.png"
import moeaLogo from "@/public/logos/moea-white-logo.png"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollToHero = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div ref={navRef} className="top-3 inset-x-0 fixed flex flex-col gap-2 transform-gpu will-change-transform z-50">
      <div className="mx-5 md:mx-10 px-5 py-2 md:py-4 box-border flex justify-between items-center border border-white/10 shadow-lg shadow-black/40 rounded-full bg-white/[0.06] backdrop-blur-md">
        <div className="flex items-center">
          <a
            href="https://law.usc.edu.tw/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="實踐大學法學院"
            className="inline-flex items-center !p-0 hover:!bg-transparent hover:opacity-80 transition-opacity"
          >
            <Image
              src={uscLogo}
              alt="Shih Chien University"
              width={140}
              height={129}
              className="h-[30px] md:h-[40px] w-auto"
            />
          </a>
          <a href="#hero" onClick={scrollToHero} className="whitespace-nowrap px-[10px] text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-none tracking-tight text-white/90">
            青年AI實戰養成班
          </a>
          {/* <a
            href="https://www.aoc.gov.tw/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="經濟部商業發展署"
            className="hidden sm:inline-flex items-center !p-0 hover:!bg-transparent hover:opacity-80 transition-opacity"
          >
            <Image
              src={moeaLogo}
              alt="Administration of Commerce, MOEA"
              width={90}
              height={30}
              className="h-[20px] md:h-[30px] w-auto"
            />
          </a> */}
        </div>
        <div className="hidden lg:inline lg:flex lg:items-center lg:gap-2 lg:text-[18px]">
          <a href="#program">計畫詳情</a>
          <a href="#classes">實戰班別</a>
          <a href="#process">報名資格</a>
          <a href="#faq">FAQ</a>
          <a
            href="https://forms.gle/rqz6VSu5NSuQJFMy5"
            target="_blank"
            rel="noopener noreferrer"
            className="apply-btn ml-2 inline-flex items-center justify-center"
          >
            我要報名
          </a>
        </div>
        {menuOpen ?
          <XMarkIcon className="lg:hidden w-6 h-6 text-white hover:text-gray-300 cursor-pointer" onClick={toggleMenu} /> :
          <Bars3Icon className="lg:hidden w-6 h-6 text-white hover:text-gray-300 cursor-pointer" onClick={toggleMenu} />
        }
      </div>
      <div
        className={`glass lg:hidden mx-5 md:mx-10 p-6 flex flex-col gap-2 items-center rounded-3xl bg-[#0b1030]/95 text-white backdrop-blur-md origin-top transition-all duration-300 ease-out ${
          menuOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <a href="#program" onClick={closeMenu} className="transition-colors w-full h-10 flex items-center justify-center">計畫詳情</a>
        <a href="#classes" onClick={closeMenu} className="transition-colors w-full h-10 flex items-center justify-center">實戰班別</a>
        <a href="#process" onClick={closeMenu} className="transition-colors w-full h-10 flex items-center justify-center">報名資格</a>
        <a href="#faq" onClick={closeMenu} className="transition-colors w-full h-10 flex items-center justify-center">FAQ</a>
        <a
          href="https://forms.gle/rqz6VSu5NSuQJFMy5"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="apply-btn w-full h-10 inline-flex items-center justify-center"
        >
          我要報名
        </a>
      </div>
    </div>
  );
} 