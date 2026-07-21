import React from "react";
import Image from "next/image";

import moeaLogo from "@/public/logos/moea-logo.png"
import uscLawLogo from "@/public/logos/usc-law-logo.png"

export default function Footer() {
    return (
        <div className="pt-5 pb-4 bg-black text-white">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="flex flex-row items-center">
                    <p>主辦單位：</p>
                    <Image
                        src={moeaLogo}
                        alt="Administration of Commerce, MOEA"
                        width={120}
                        height={40}
                        className="h-[40px] w-auto"
                    />
                </div>
                <p>執行單位：商業服務業 AI 人才辦公室</p>
                <div className="flex flex-row items-center">
                    <p>承辦單位：</p>
                    <Image
                        src={uscLawLogo}
                        alt="Shih Chien Law"
                        width={120}
                        height={40}
                        className="h-[40px] w-auto"
                    />
                </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row justify-center items-center">
                <p className="text-center">計畫主持人：郝鳳鳴 教授</p>
                <span className="hidden md:inline mx-2">|</span>
                <p className="text-center">計畫聯絡窗口：林志丞 助理教授 (0979-838-333)</p>
            </div>
            <div className="mt-5 flex flex-col md:flex-row justify-center items-center">
                <p className="text-center">聯絡信箱：cclin@g2.usc.edu.tw</p>
                <span className="hidden md:inline mx-2">|</span>
                <p className="text-center">地址：台北市中山區大直街 70 號</p>
            </div>
            <div className="mt-10">
                <h5 className="text-center text-slate-600">© 2026 實踐大學. All Rights Reserved. 個人資料保護與隱私權聲明</h5>
            </div>
        </div>
    )
}