"use client";

import { CanvasText } from "./ui/CanvasText";

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen pt-[7rem] pb-16 flex flex-col justify-center items-center">
      <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-start text-left gap-6">

        <h1 className="mt-2">
          別讓技術成為門檻<br/>
          讓 <CanvasText
            text="AI"
            className="align-baseline drop-shadow-[0_0_20px_rgba(51,85,255,0.85)]"
            backgroundClassName="bg-[#1A2FCC]"
            colors={["#3355FF", "#2C4EFF", "#4466FF", "#1F3EE0", "#3C5CFF"]}
            lineWidth={2.5}
            lineGap={6}
            curveIntensity={45}
          /> 成為你職涯翻倍的跳板！
        </h1>

        <p className="max-w-xl text-base md:text-lg !text-slate-300">
          零技術背景也能上手，結訓即具備企業搶著要的智慧營運即戰力。
        </p>

        {/* <p className="mt-4 text-xs md:text-sm tracking-wide !text-slate-400">
          100% 政府補助　·　240 小時企業實戰　·　75% 就業媒合目標
        </p> */}
      </div>
    </section>
  )
}
