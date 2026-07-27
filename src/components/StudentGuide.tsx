export default function StudentGuide() {
  const guides = [
    {
      title: "訓字保與培訓安全",
      items: [
        "培訓期間由培訓單位為學員投保職業訓練期間保險（訓字保），保障期間涵蓋二個月培訓全程，包含次產業 AI 應用課程與企業專題實作。",
        "保障範圍包含課程訓練、場域實作及往返途中之意外事故。",
        "企業專題期間若發生適應不良或學習困難，培訓單位將主動輔導協助。",
      ],
    },
    {
      title: "結訓、認證與獎勵金",
      items: [
        "須完成二階段培訓：第一階段「次產業 AI 應用課程」120 小時，達成出席要求並完成 AI 基礎與資安測驗、工具實作任務與小型成果展示；第二階段「企業專題實作」120 小時（兩階段合計累積達 240 小時），並完成企業專題成果報告與 AI 應用原型、參與成果發表，經企業業師與課程教師聯合評核通過，方認定完訓。",
        "第一階段學習獎勵金 NT$20,000：出席時數達該階段總時數 90% 以上，並完成後測筆試、成績達 80 分（含）以上。",
        "第二階段學習獎勵金 NT$30,000：實作出席時數達該階段總時數 90% 以上，交付專題成果報告並完成成果發表，經企業業師與課程教師聯合評核通過。",
        "課程規劃納入 iPAS「AI 應用規劃師」認證輔導，內容涵蓋 AI 技術應用與規劃、大數據處理分析、機器學習技術與應用、AI 治理與風險管理，以及企業 AI 導入實務。",
        "應屆畢業生須取得畢業證書並達成上述條件後，方能領取學習獎勵金。",
      ],
    },
    {
      title: "請假與退訓規定",
      items: [
        "請假須依培訓單位程序提出並完成核准；即使請假，仍須維持各階段出席時數達 90% 以上，才符合獎勵金核給條件。",
        "未經核准擅自退出、資料填寫不實、適應不佳、無法配合研習內容，或違反利益衝突迴避相關規定者，可能終止培訓。",
        "若因天災、重大傳染病、重大傷病等不可歸責因素無法續訓，須提出證明資料，由培訓單位送商業服務業 AI 人才辦公室同意後認定；經認定屬不可歸責因素者，原則上無須繳回已請領之學習獎勵金，未經認定或非屬不可歸責因素者，須繳回已請領獎勵金，且後續不得再申請本計畫。",
        "中途退訓須提交退訓申請表，並繳回溢領獎勵金及相關佐證資料。",
      ],
    },
    {
      title: "注意事項",
      items: [
        "每名培訓學員限參與經濟部青年 AI 實戰養成班 1 次；退訓者視為已參訓，惟因不可歸責因素退訓者不在此限。",
        "培訓補助期間（含報名階段）不得同時接受其他政府相關人才培訓補助。",
        "申請資料須確實填寫；若資料不實，須放棄參訓及學員獎勵金資格，並自負相關法律責任。",
        "完訓後須配合就業追蹤調查至少 3 年；未就業者亦須敘明原因。",
        "學員領取之學習獎勵金依中華民國稅法規定辦理，後續依核銷規定通知。",
      ],
    },
  ];

  return (
    <>
      <section id="guide" className="scroll-mt-24 px-5 py-[5rem] flex flex-col justify-center items-center bg-[var(--gray-bg)]">
        <h2 className="text-center">學員規範、保險與繳交文件</h2>
        <h4 className="mt-2 text-center text-slate-400 max-w-2xl text-balance">
          依「強化服務業人才韌性計畫」青年 AI 實戰養成班培訓補助申請須知與培訓學員申請表整理，實際規定若有更新，以主辦單位經濟部商業發展署與執行單位商業服務業 AI 人才辦公室公告為準。
        </h4>

        <div className="mt-8 w-full max-w-3xl flex flex-col gap-3">
          {guides.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/[0.045] p-5 ring-1 ring-white/10"
            >
              <h5 className="!text-[15px] font-bold !text-white leading-snug">{group.title}</h5>
              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item, itemIndex) => (
                  <li className="flex items-start gap-2 text-slate-300 leading-relaxed" key={itemIndex}>
                    <span className="mt-0.5 font-bold text-[#3D5AFF]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
