export default function Admission() {
  const requirements = [
    {
      icon: "🎂",
      title: "年齡 18–35 歲",
      desc: "招收 18 至 35 歲、具服務業就業意願之青年，歡迎想跨入 AI 應用領域的你。",
    },
    {
      icon: "🎓",
      title: "副學士以上學歷",
      desc: "具我國大專校院副學士（含二專、五專）以上學歷，不需具備程式或 AI 工程背景。",
    },
    {
      icon: "💼",
      title: "應屆畢業或待業青年",
      desc: "有意投入零售、餐飲或生活服務業之應屆畢業生或待業青年皆可報名。",
    },
  ];

  const pluses = [
    "具零售、餐飲、門市、客服、社群、行銷或實習經驗者優先",
    "對 AI 工具、資料應用、數位行銷或顧客服務具學習動機",
    "能全程配合密集課程、企業專題實作與成果發表",
    "具備基本電腦操作、團隊合作與溝通表達能力",
    "對合作企業職缺具明確興趣，願於完訓後接受面談媒合",
  ];

  const steps = [
    {
      title: "資格審查",
      desc: "確認年齡、學歷、身分與就業意願等基本條件，並確認可配合培訓時程、出席要求與企業專題實作。",
    },
    {
      title: "書面資料審查",
      desc: "審查申請動機、學經歷、服務業就業意願、AI 工具使用經驗、數位能力與職涯目標，具相關經驗者優先。",
    },
    {
      title: "面談評估",
      desc: "由計畫團隊、課程教師或合作企業代表共同評估學習態度、職涯方向、溝通與團隊合作能力、抗壓性及投入意願。",
    },
  ];

  return (
    <>
      <section id="process" className="scroll-mt-24 px-5 py-[5rem] flex flex-col justify-center items-center bg-[var(--white-bg)]">
        <h2 className="text-center">報名資格與甄選流程</h2>
        <h4 className="mt-2 text-center text-gray-500">符合資格、通過三階段甄選，即可展開你的 AI 實戰旅程。</h4>

        {/* 報名資格 */}
        <div className="mt-8 w-full max-w-5xl">
          <h4 className="font-bold text-gray-900">基本報名資格</h4>
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            {requirements.map((item, index) => (
              <div className="core-card flex-1" key={index}>
                <div className="feature-icon">{item.icon}</div>
                <h4 className="text-[#1f2937]">{item.title}</h4>
                <p className="text-center">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 優先錄取條件 */}
          <div className="mt-6 rounded-2xl border border-gray-100 bg-[var(--gray-bg)] p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <div className="feature-icon">⭐</div>
              <h4 className="font-bold text-gray-900">優先錄取條件</h4>
            </div>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
              {pluses.map((item, index) => (
                <li className="flex items-start gap-2 text-gray-600" key={index}>
                  <span className="mt-0.5 font-bold text-[#3300FC]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 甄選流程 */}
        <div className="mt-12 w-full max-w-5xl">
          <h4 className="text-center font-bold text-gray-900">三階段甄選流程</h4>
          <div className="mt-6 flex flex-col md:flex-row md:items-stretch gap-4 md:gap-0">
            {steps.map((step, index) => (
              <div className="flex flex-col md:flex-row md:flex-1 md:items-center gap-4 md:gap-0" key={index}>
                <div className="core-card flex-1 !items-start">
                  <div className="flex items-center gap-3">
                    <div className="numbering-icon">{index + 1}</div>
                    <h4 className="text-[#1f2937]">{step.title}</h4>
                  </div>
                  <p>{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex shrink-0 justify-center items-center text-[#3300FC] md:px-2">
                    <span className="hidden md:inline text-2xl">→</span>
                    <span className="md:hidden text-2xl">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
