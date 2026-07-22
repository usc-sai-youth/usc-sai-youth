export default function GeneralStructure() {
  const data = [
    {
      title: "第一階段：次產業 AI 應用課程 (120 小時)",
      items: [
        { title: "模組一：AI 職場生產力與行銷應用", desc: "撰寫商務郵件、政府計畫書、精準行銷文案、提案簡報架構，並實戰短影音行銷創作。" },
        { title: "模組二：職場軟實力與就業輔導", desc: "培養關鍵溝通應對、形象禮儀與客訴救火心法。同步執行 AI 履歷優化與模擬面試。" },
        { title: "模組三：AI 工作流自動化與資安法遵", desc: "精修 SDD 規格工程、API 串接與 RAG 企業知識庫，融入法學院核心個資去識別化素養。" },
        { title: "模組四：n8n 自動化工作流與能力認證", desc: "由業界專家指導 n8n 自動化工作流實戰，並規劃專業能力認證，為履歷刻下亮眼技術實力。" },
      ],
    },
    {
      title: "第二階段：企業專題實作階段 (120 小時)",
      items: [
        { title: "單元一：企業題目導入與場域理解", desc: "由全家、全聯、老四川等大廠業師親自說明核心痛點，解析去識別化之內部數據及成果規格。" },
        { title: "單元二：門市顧客旅程與流程盤點", desc: "分組實地走入門市實務考察，細緻盤點購物、取貨、點餐等顧客接觸點之服務痛點與科技機會。" },
        { title: "單元三：AI 應用原型與為數據開發", desc: "在業師指導下，利用 n8n/RAG 工具實作客製化 AI 客服流程、預測儀表板或門市 SOP 助理。" },
        { title: "單元四：成果發表大會與就業媒合", desc: "期末成果盛大發表，合作企業高層人資親臨現場進行直接面談，無縫對接 45 個實務優質職缺。" },
      ],
    }
  ]
  return (
    <>
      <section id="structure" className="scroll-mt-24 px-5 py-[5rem] flex flex-col justify-center items-center bg-[var(--white-bg)]">
        <h2 className="text-center">240 小時紮實養成：從課堂練兵到企業戰場</h2>
        <h4 className="mt-2 text-center text-slate-400">骨架相同、血肉差異化的客製化訓練，會用 AI 更懂資安法遵。</h4>
        <div className="mt-5 flex flex-col lg:flex-row gap-6 lg:gap:0">
          {data.map((stage, index) => (
            <div className={index === 0 ? "lg:pr-4 lg:border-r-2 border-[#3D5AFF]" : "lg:pl-4"} key={index}>
              <div className="flex items-center">
                <div className="numbering-icon">{index + 1}</div>
                <h4 className="ml-2">{stage.title}</h4>
              </div>
              <div className="mt-2 ml-[20px] pl-3 py-5 border-l-2 border-[#3D5AFF] flex flex-col gap-4">
                {stage.items.map((item, stageIndex) => (
                  <div className="relative" key={stageIndex}>
                    <div className="absolute -left-[18px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#3D5AFF] border-2 border-white" />
                    <p>{item.title}</p>
                    <h5>{item.desc}</h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}