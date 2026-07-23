export default function Incentive() {
  const rewards = [
    {
      stage: "第一階段獎勵金",
      amount: "NT$20,000",
      cond: "於第一階段「次產業 AI 應用課程」，出席時數達該階段總課程時數九成以上，並完成後測筆試、成績達 80 分（含）以上，即符合請領資格。",
    },
    {
      stage: "第二階段獎勵金",
      amount: "NT$30,000",
      cond: "於第二階段「企業專題實作」，實作出席時數達該階段總時數九成以上，並完成每組一份結訓專題報告與公開發表，經學研界講師聯合評核通過，即符合請領資格。",
    },
  ];

  return (
    <>
      <section id="reward" className="scroll-mt-24 px-5 py-[5rem] flex flex-col justify-center items-center bg-[var(--white-bg)]">
        <span className="card-eyebrow">學習獎勵金</span>
        <h2 className="mt-3 text-center">完訓最高可領 NT$50,000</h2>
        <h4 className="mt-2 text-center text-slate-400 max-w-2xl text-balance">
          從出席、測驗、實作到成果報告，我們把「獎勵條件」與「評量檢核」合併呈現——只要按部就班全程投入，每一分努力都算數。
        </h4>

        <div className="mt-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((item, index) => (
            <div className="core-card !items-start !max-w-none h-full" key={index}>
              <span className="card-eyebrow">{item.stage}</span>
              <span className="stat-num mt-1">{item.amount}</span>
              <div className="mt-1 w-full border-t border-white/10 pt-4">
                <p className="text-sm font-semibold !text-slate-200">請領條件與評量檢核</p>
                <p className="mt-1.5 !text-slate-300 leading-relaxed">{item.cond}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-slate-400 text-sm max-w-2xl">
          兩階段合計最高 NT$50,000；獎勵金依實際出席、測驗成績、實作成果與發表評核結果核發。
        </p>
      </section>
    </>
  );
}
