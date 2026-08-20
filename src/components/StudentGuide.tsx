export default function StudentGuide() {
  const guides = [
    {
      title: "繳交報名資料",
      items: [
        "填列培訓學員申請表。",
        "應檢附資料：身分證正反影本、最高學歷畢業證書影本、最高學歷學校成績單影本、蒐集個人資料告知事項暨個人資料提供同意書。",
        "如有工作經驗，請檢具勞工保險異動紀錄或相關切結文件。",
      ],
    },
    {
      title: "結訓、認證與獎勵金",
      items: [
        "須完成二階段培訓：第一階段「次產業 AI 應用課程」120 小時，達成出席要求並完成 AI 基礎與資安測驗、工具實作任務與小型成果展示；第二階段「企業專題實作」120 小時（兩階段合計累積達 240 小時），並完成企業專題成果報告與 AI 應用原型、參與成果發表，經企業業師與課程教師聯合評核通過，方認定完訓。",
        "第一階段學習獎勵金 NT$20,000：出席時數達該階段總時數 90% 以上，並完成測驗、成績達 80 分（含）以上。",
        "第二階段學習獎勵金 NT$30,000：實作出席時數達該階段總時數 90% 以上，交付專題成果報告並完成成果發表，經培訓單位及企業講師聯合評核通過。",
        "應屆畢業生須取得畢業證書並達成上述條件後，方能領取學習獎勵金。",
      ],
      notes: [
        "※學員須達成此2階段培訓並達成所列標準與評核，始為完訓。如中途退訓，學員須敘明申請退訓事由，並於培訓終止日前7日提交「培訓終止申請表」；經主辦單位認定屬不可歸責因素者，原則上無須繳回已請領之學習獎勵金，後續得再次申請本計畫；未經認定或非屬不可歸責因素者，則應繳回學習獎勵金且後續不得再次申請本計畫。",
      ],
    },
    {
      title: "請假規定",
      items: [
        "每日上課須完成簽到及簽退（上午、下午各一次）",
        "上課時間：依課程表排定（原則週一至週五）",
        "請假假別含事假、病假，晚到或早退均須提前請假。",
        "未達出席時數門檻者，不符合學習獎勵金請領資格",
      ],
    },
    {
      title: "退訓規定",
      intro: "學員於訓練期間若發生以下情形，辦訓單位得為退訓處理，學員須繳回已領取之學習獎勵金：",
      items: [
        "未到課時數超過課程總時數10%",
        "個人報名及履歷資料填寫不實，情節重大者",
        "未經核准擅自退出、因適應不佳或無法配合課程規劃者",
        "除因不可歸責因素退訓外，其他因素退訓者後續不得再申請本計畫",
      ],
    },
    {
      title: "注意事項",
      items: [
        "本計畫補助對象為滿 18 至 35 歲（含）之青年，並具備我國教育部認定之大專校院副學士（含二專、五專）以上學歷，欲進入服務業服務者；身分可為應屆畢業生或待業者。",
        "每名學員限參與本計畫 1 次（因不可歸責因素退訓者不在此限），且培訓補助期間不得同時接受其他政府相關人才培訓補助。",
        "錄取通知後，培訓單位將依法為學員投保「訓字保」（勞工保險+勞工職業災害保險），以保障學員於受訓期間的相關權益。請學員於完成訓練後，配合辦理保險相關退保作業。",
        "為配合講師時間或臨時突發事件，培訓單位保留調整課程日期或更換講師之權利。",
        "培訓單位保留修訂課程內容之權利，課程變更恕不另行通知，請以官方網站公告為準。",
        "執行本計畫期間，不得採購、使用或導入中國大陸廠牌之資通訊產品或服務。",
        "如遇不可抗力因素，培訓單位保留修訂課程日期及取消課程之權利。",
        "學員領取之學習獎勵金依中華民國稅法規定辦理。",
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
              {group.intro && (
                <p className="mt-3 text-slate-300 leading-relaxed">{group.intro}</p>
              )}
              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item, itemIndex) => (
                  <li className="flex items-start gap-2 text-slate-300 leading-relaxed" key={itemIndex}>
                    <span className="mt-0.5 font-bold text-[#3D5AFF]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {group.notes && (
                <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3">
                  {group.notes.map((note, noteIndex) => (
                    <p className="text-xs text-slate-400 leading-relaxed" key={noteIndex}>
                      {note}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
