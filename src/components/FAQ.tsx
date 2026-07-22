"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "我沒有程式或 AI 背景，也能報名嗎？",
      a: "可以。課程以服務業實務應用為導向，不需程式設計或 AI 工程背景，只要具備基本電腦操作能力與學習意願，我們會從零帶你上手。",
    },
    {
      q: "課程需要費用嗎？",
      a: "錄取學員免繳課程費用。完成兩階段培訓並符合資格者，另可依規定領取學習獎勵金。",
    },
    {
      q: "兩個班別有什麼差異？可以都報名嗎？",
      a: "養成班一聚焦零售場域（全家、全聯），養成班二聚焦餐飲場域（Alpha、頑味、老四川）。報名時可擇一或勾選皆可，最終依甄選結果與時程安排。",
    },
    {
      q: "上課時間、地點與時數是？",
      a: "於台北開課，總計 240 小時，分為「次產業 AI 應用課程」與「企業專題實作」兩階段，各 120 小時。",
    },
    {
      q: "完訓資格如何認定？",
      a: "須完成兩階段的出席、測驗、工具實作與企業專題成果，並參與成果發表且通過課程教師與企業業師的評核。",
    },
    {
      q: "完訓後有就業媒合嗎？",
      a: "合作企業提供 45 個就業職缺，透過成果發表與企業面談進行媒合，計畫以 75% 就業媒合率為目標，並於完訓後提供職涯追蹤輔導。",
    },
    {
      q: "培訓期間可以同時領其他政府補助嗎？",
      a: "不可。培訓補助期間（含報名階段）不得同時接受其他政府相關人才培訓補助。",
    },
  ];

  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (index: number) =>
    setOpen((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <>
      <section id="faq" className="scroll-mt-24 px-5 py-[5rem] flex flex-col justify-center items-center bg-[var(--gray-bg)]">
        <h2 className="text-center">常見問答 Q&amp;A</h2>
        <h4 className="mt-2 text-center text-gray-500">報名前想知道的事，都幫你整理好了。</h4>
        <div className="mt-8 w-full max-w-3xl flex flex-col gap-3">
          {faqs.map((item, index) => {
            const isOpen = !!open[index];
            return (
              <div
                key={index}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggle(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(index);
                  }
                }}
                className="cursor-pointer rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <h5 className="!text-[15px] font-bold !text-gray-900 leading-snug">
                    <span className="mr-1.5 font-black text-[#3300FC]">Q.</span>{item.q}
                  </h5>
                  <svg
                    className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      <span className="mr-1.5 font-black text-[#26A69A]">A.</span>{item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
