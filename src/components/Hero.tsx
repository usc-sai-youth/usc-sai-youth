"use client";

import React, {useEffect} from "react";

export default function Hero() {
    return (
        <section className="hero-bg min-h-screen pt-[7rem] pb-16 flex justify-center items-center">
        <div className="max-w-[110rem] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-8 2xl:grid 2xl:grid-cols-7 2xl:gap-6 2xl:items-center">
          <div className="2xl:col-span-5">
            <div className="badge-pill">
              <span className="badge-tag">115-116 年度</span>
              強化服務業人才韌性計畫
            </div>
            <h1 className="mt-6">
              企業真實痛點出題！<br/>
              讓你在 AI 時代<br/>
              無縫接軌就業！
            </h1>
            <h2 className="mt-6 text-gray-700">
              「共同核心 + 企業實作」雙軌培訓，攜手全家、全聯、老四川、阿爾法餐飲、聲寶頑味餐飲，助你成為新世代智慧營運與 CX 解題專家！政府補助 100% 全額免費。
            </h2>
            <div className="mt-8 w-full flex flex-wrap gap-3">
              <button className="btn-primary">
                實戰班別
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn-ghost">
                查看課程架構
              </button>
            </div>
          </div>
          <div className="p-5 rounded-3xl glass flex flex-col 2xl:col-span-2 2xl:h-full">
            <div className="px-1 pt-1 pb-4">
              <span className="card-eyebrow">四大課程亮點</span>
              <h3 className="mt-2">青年 AI 實戰養成班</h3>
            </div>
            <div className="flex flex-col gap-3">
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <div>
                  <h4 className="text-[#1f2937]">企業真實出題，絕非紙上談兵</h4>
                  <p>深入全家、全聯、老四川、阿爾法等頂尖大廠的真實營運場域，拿第一線最落地的數據與痛點做專題實作。</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎓</div>
                <div>
                  <h4 className="text-[#1f2937]">n8n 自動化工作流 × 專業能力認證</h4>
                  <p>課程全面導入主流自動化工作流工具 n8n，由業界專家親自指導實戰，並規劃專業能力認證，為你的履歷加值。</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💼</div>
                <div>
                  <h4 className="text-[#1f2937]">45 個實務職缺，就業無縫對接</h4>
                  <p>結訓前為學員量身打造專屬企業就業媒合發表會，高層主管直接現場出擊，目標達成 75% 以上的超高就業率。</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📁</div>
                <div>
                  <h4 className="text-[#1f2937]">求職必勝！個人精美實作作品集</h4>
                  <p>實作專題成果將在導師指導下轉化為個人專屬作品集（包含 AI 原型、儀表板），讓你的履歷不再流於空談。</p>
                </div>
              </div>
            </div>
            <a
              href="https://forms.gle/GshWTTKFPMVxH7Bx7"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-btn w-full mt-5 inline-flex items-center justify-center text-center"
            >
              立即報名 →
            </a>
          </div>
        </div>
      </section>
    )
}