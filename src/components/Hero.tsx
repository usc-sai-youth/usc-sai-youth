"use client";

import Image from "next/image";
import uscLawLogo from "@/public/logos/use-law-white-logo.png"

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen pt-[7rem] pb-16 flex flex-col justify-center items-center">
      <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-start text-left gap-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-3 justify-start">
          <a
            href="https://law.usc.edu.tw/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="實踐大學法學院"
            className="inline-flex items-center !p-0 hover:!bg-transparent hover:opacity-80 transition-opacity"
          >
            <Image
              src={uscLawLogo}
              alt="Shih Chien University"
              width={538}
              height={129}
              className="h-[40px] md:h-[50px] w-auto"
            />
          </a>
          <div className="badge-pill">
            <span className="badge-tag">115-116 年度</span>
            強化服務業人才韌性計畫
          </div>
        </div>

        <h1 className="mt-2">
          別讓技術成為門檻<br/>
          讓 <span className="hero-highlight">AI</span> 成為你職涯翻倍的跳板！
        </h1>

        <p className="max-w-xl text-base md:text-lg !text-slate-300">
          零技術背景也能上手，結訓即具備企業搶著要的智慧營運即戰力。
        </p>

        <div className="mt-2 w-full flex flex-wrap justify-start gap-3">
          <a href="#classes" className="btn-primary">
            實戰班別
            <span className="btn-arrow">→</span>
          </a>
          <a href="#structure" className="btn-ghost">
            查看課程架構
          </a>
        </div>

        <p className="mt-4 text-xs md:text-sm tracking-wide !text-slate-400">
          100% 政府補助　·　240 小時企業實戰　·　75% 就業媒合目標
        </p>
      </div>
    </section>
  )
}
