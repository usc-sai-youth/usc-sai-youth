import Image from "next/image";
import uscLawLogo from "@/public/logos/usc-law-white-logo.png"

export default function ProgramHighlights() {
  const stats = [
    { value: "2", unit: "班", label: "零售 × 餐飲實戰班" },
    { value: "240", unit: "hr", label: "雙階段培訓時數" },
    { value: "75", unit: "%", label: "就業媒合目標" },
    { value: "5", unit: "萬", label: "學習獎勵金" },
  ];

  const features = [
    {
      title: "企業真實出題，絕非紙上談兵",
      desc: "深入全聯、全家、阿爾法等頂尖大廠的真實營運場域，拿第一線最落地的數據與痛點做專題實作。",
    },
    {
      title: "n8n 自動化工作流 × 專業能力認證",
      desc: "課程全面導入主流自動化工作流工具 n8n，由業界專家親自指導實戰，並規劃專業能力認證，為你的履歷加值。",
    },
    {
      title: "企業面談媒合，就業無縫對接",
      desc: "結訓前為學員量身打造專屬企業就業媒合發表會，高層主管直接現場出擊，目標達成 75% 以上的超高就業率。",
    },
    {
      title: "求職必勝！個人精美實作作品集",
      desc: "實作專題成果將在導師指導下轉化為個人專屬作品集，讓你的履歷不再流於空談。",
    },
  ];

  return (
    <section id="program" className="scroll-mt-24 px-5 py-[5rem] flex flex-col justify-center items-center bg-[var(--white-bg)]">
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://law.usc.edu.tw/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="實踐大學法學院"
          className="inline-flex items-center !p-0 hover:!bg-transparent hover:opacity-80 transition-opacity"
        >
          <Image
            src={uscLawLogo}
            alt="Shih Chien University"
            width={538}
            height={129}
            className="h-[70px] md:h-[80px] w-auto"
          />
        </a>
        <div className="mt-2 md:mt-5 badge-pill-light">
          <span className="badge-tag">115-116 年度</span>
          強化服務業人才韌性計畫
        </div>
      </div>
      <h2 className="mt-5 text-center">青年 AI 實戰養成班</h2>
      <h4 className="mt-2 text-center text-slate-400 max-w-2xl">
        「共同核心 + 企業實作」雙軌培訓，攜手全聯、全家、阿爾法餐飲、聲寶頑味餐飲，助你成為新世代智慧營運與 CX 解題專家！政府補助 100% 全額免費。
      </h4>

      <div className="mt-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((item, index) => (
          <div className="feature-card !items-start" key={index}>
            <div>
              <h4 className="text-white">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((s, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-md shadow-[0_20px_50px_-28px_rgba(61,90,255,0.6)]"
          >
            <div className="flex items-baseline gap-1">
              <span className="stat-num">{s.value}</span>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#3D5AFF]">{s.unit}</span>
            </div>
            <p className="mt-1.5 !text-base sm:!text-lg md:!text-xl font-medium !text-slate-300">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full flex flex-wrap justify-center gap-3">
        <a href="#classes" className="btn-ghost-light">
          實戰班別
        </a>
        <a href="#process" className="btn-ghost-light">
          報名資格
        </a>
        <a
          href="https://forms.gle/rqz6VSu5NSuQJFMy5"
          target="_blank"
          rel="noopener noreferrer"
          className="apply-btn inline-flex items-center justify-center text-center"
        >
          立即報名 →
        </a>
      </div>
    </section>
  )
}
