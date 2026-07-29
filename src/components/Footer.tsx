import React from "react";
import Image from "next/image";

import moeaLogo from "@/public/logos/moea-white-logo.png"
import uscLawLogo from "@/public/logos/use-law-white-logo.png"

export default function Footer() {
  return (
    <>
      <div className="py-10 md:py-20 px-4 bg-gradient-to-br from-[#2E45E6] via-[#1B2A8A] to-[#0A1236] flex flex-col items-center text-center">
        <h2 className="text-white text-balance">未來 由你定義，送你一張AI職涯入場券！</h2>
        <h4 className="mt-3 text-gray-300 text-balance">跨出這一步，讓你的職涯擁有新創科技思維，直接拿走高薪就業大廠的入門票！</h4>
        <a
          href="https://forms.gle/rqz6VSu5NSuQJFMy5"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 apply-btn w-[20rem] h-[3rem] md:h-[5rem] inline-flex items-center justify-center text-center"
        >
          立即報名
        </a>
      </div>
      <div className="pt-5 pb-4 bg-black text-white">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex flex-row items-center">
            <p>主辦單位：</p>
            <a
              href="https://www.aoc.gov.tw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="經濟部商業發展署"
              className="inline-flex items-center !p-0 hover:!bg-transparent hover:opacity-80 transition-opacity"
            >
              <Image
                src={moeaLogo}
                alt="Administration of Commerce, MOEA"
                width={538}
                height={129}
                className="h-[40px] w-auto"
              />
            </a>
          </div>
          <p>執行單位：商業服務業 AI 人才辦公室</p>
          <div className="flex flex-row items-center">
            <p>承辦單位：</p>
            <a
              href="https://law.usc.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="實踐大學法學院"
              className="inline-flex items-center !p-0 hover:!bg-transparent hover:opacity-80 transition-opacity"
            >
              <Image
                src={uscLawLogo}
                alt="Shih Chien Law"
                width={120}
                height={40}
                className="h-[40px] w-auto"
              />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center">
          <p className="text-center">計畫主持人：郝鳳鳴 教授</p>
          <span className="hidden md:inline mx-2">|</span>
          <p className="text-center">計畫聯絡窗口：陳毓雯 老師 (0972-104-456)</p>
        </div>
        <div className="mt-5 flex flex-col md:flex-row justify-center items-center">
          <p className="text-center">聯絡信箱：uscsaiyouth@gmail.com</p>
          <span className="hidden md:inline mx-2">|</span>
          <p className="text-center">地址：台北市中山區大直街 70 號</p>
        </div>
        <div className="mt-10">
          <h5 className="text-center text-slate-500">© 2026 實踐大學. All Rights Reserved. 個人資料保護與隱私權聲明</h5>
        </div>
      </div>
    </>
  )
}