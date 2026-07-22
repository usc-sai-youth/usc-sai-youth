export default function Core() {
  const highlights = [
    {
      icon: "🏢",
      title: "五大指標企業真實出題",
      desc: "全家、全聯、老四川、Alpha 阿爾法與聲寶頑味共同出題，提供企業專題、業師指導與 45 個就業職缺。",
    },
    {
      icon: "🎯",
      title: "企業出題 × 學員解題",
      desc: "240 小時雙階段培訓，從 AI 工具實戰一路練到解決企業真實痛點，做中學最扎實。",
    },
    {
      icon: "💰",
      title: "免費參訓 × 學習獎勵金",
      desc: "錄取學員免繳課程費用，完成兩階段培訓並符合資格者，另可依規定領取學習獎勵金。",
    },
    {
      icon: "📁",
      title: "專屬 AI 實戰作品集",
      desc: "專題成果在導師指導下轉化為含 AI 原型與儀表板的個人作品集，求職履歷不再空談。",
    },
    {
      icon: "🛡️",
      title: "AI 資安與可信任 AI",
      desc: "由實踐大學法學院把關，融入個資保護與資料治理，讓你「會用 AI，也懂 AI 風險」。",
    },
    {
      icon: "🤝",
      title: "就業媒合 × 完訓追蹤",
      desc: "以 75% 就業媒合率為目標，成果發表即企業面試舞台，完訓後持續提供職涯追蹤輔導。",
    },
  ];

  const abilities = [
    {
      icon: "⚙️",
      title: "辦公流程優化",
      desc: "從零掌握生成式 AI 指令設計，將日常文書摘要、會議紀錄與資料歸納等重複行政情境，串接轉化為個人或部門專屬的 AI 自動化輔助工作流。",
    },
    {
      icon: "🏪",
      title: "零售場域理解",
      desc: "由全家、全聯等一線企業業師親自引導，深度理解便利零售與餐飲營運型態，全面掌握智慧門市、AI 節力與會員經營的真實專題開發標準。",
    },
    {
      icon: "🗺️",
      title: "顧客旅程分析",
      desc: "透過工作坊演練與實地門市觀察，學會盤點購物、取貨、咖啡鮮食購買等多元接觸點，精準找出科技賦能的關鍵轉型改善機會。",
    },
  ]

  return (
    <>
      <section id="highlights" className="scroll-mt-24 px-5 py-[5rem] flex flex-col justify-center items-center bg-[var(--white-bg)]">
        <h2 className="text-center">計畫亮點</h2>
        <h4 className="mt-2 text-center text-gray-500">不只教你用 AI，更幫你把成果變成職涯的入場券。</h4>
        <div className="mt-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, index) => (
            <div className="core-card !items-start !max-w-none h-full" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <h4 className="text-[#1f2937]">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 py-[5rem] flex flex-col justify-center items-center bg-[var(--gray-bg)]">
        <h2 className="text-center">三大核心能力，打造你的 AI 職場不敗防線</h2>
        <h4 className="mt-2 text-center text-gray-500">不談純理論！我們只培養企業爭相招募的「服務業 AI 應用型人才」。</h4>
        <div className="mt-5 flex flex-col md:flex-row gap-4">
          {abilities.map((item, index) => (
            <div className="core-card" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <h4 className="text-[#1f2937]">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}