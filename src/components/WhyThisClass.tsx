export default function WhyThisClass() {
  const pains = [
    {
      title: "人工流程，AI 卡關",
      desc: "企業日常仍有大量重複性文書、報表與會議紀錄整理工作，門市與總部缺乏能設計 AI 自動化工作流、把工具真正落地到日常作業的人才。",
    },
    {
      title: "數據分散，難成決策",
      desc: "會員經營、門市營運、庫存與顧客接觸點的數據分散多頭，第一線缺乏能盤點顧客旅程、從資料中找出科技賦能切入點的人才，決策仍仰賴經驗判斷。",
    },
    {
      title: "會用工具，不懂場域",
      desc: "坊間 AI 課程訓練出「會操作工具」的人，但零售與餐飲產業真正需要的是同時理解門市營運邏輯、顧客服務現場、又能落地 AI 應用的複合型人才，市場供給嚴重不足。",
    },
  ];

  return (
    <section id="why" className="scroll-mt-24 px-5 py-[5rem] flex flex-col justify-center items-center bg-[var(--gray-bg)]">
      <span className="card-eyebrow">為什麼要上這堂課</span>
      <h2 className="mt-3 text-center">AI 工具好上手，掌控零售餐飲現場才是真工夫</h2>
      <h4 className="mt-2 text-center text-slate-400">
        全聯、全家、Alpha 阿爾法與聲寶頑味的營運現場，需要能把 AI 落地到門市、顧客與內部流程的即戰力，而不是只會操作工具的人。
      </h4>

      <div className="mt-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {pains.map((item, index) => (
          <div className="core-card !items-start !max-w-none h-full" key={index}>
            <span className="card-eyebrow">痛點 0{index + 1}</span>
            <h4 className="text-white">{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full max-w-4xl rounded-3xl border border-[rgba(61,90,255,0.4)] bg-gradient-to-br from-[rgba(61,90,255,0.16)] to-[rgba(91,119,255,0.04)] p-8 sm:p-10 text-center shadow-[0_30px_60px_-30px_rgba(61,90,255,0.6)]">
        <span className="card-eyebrow">這堂課，讓你擁有</span>
        <p className="mt-4 text-lg sm:text-xl font-medium text-white leading-relaxed">
          以合作企業真實命題為核心，把 AI 工具轉化為
          <span className="font-bold text-[#9DB0FF]">門市流程自動化、顧客旅程優化與營運決策支援</span>
          的實戰能力，讓你結訓即具備企業能立即上手的服務業 AI 應用即戰力。
        </p>
      </div>
    </section>
  );
}
