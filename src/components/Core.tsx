export default function Core() {
  return (
    <>
      <section id="core" className="scroll-mt-24 px-5 py-[5rem] flex flex-col justify-center items-center bg-[var(--gray-bg)]">
        <h2 className="text-center">三大核心能力，打造你的 AI 職場不敗防線</h2>
        <h4 className="mt-2 text-center text-gray-500">不談純理論！我們只培養企業爭相招募的「服務業 AI 應用型人才」。</h4>
        <div className="mt-5 flex flex-col md:flex-row gap-4">
          <div className="core-card">
            <div className="feature-icon">⚙️</div>
            <h4 className="text-[#1f2937]">辦公流程優化</h4>
            <p>從零掌握生成式 AI 指令設計，將日常文書摘要、會議紀錄與資料歸納等重複行政情境，串接轉化為個人或部門專屬的 AI 自動化輔助工作流。</p>
          </div>
          <div className="core-card">
            <div className="feature-icon">🏪</div>
            <h4 className="text-[#1f2937]">零售場域理解</h4>
            <p>由全家、全聯等一線企業業師親自引導，深度理解便利零售與餐飲營運型態，全面掌握智慧門市、AI 節力與會員經營的真實專題開發標準。</p>
          </div>
          <div className="core-card">
            <div className="feature-icon">🗺️</div>
            <h4 className="text-[#1f2937]">顧客旅程分析</h4>
            <p>透過工作坊演練與實地門市觀察，學會盤點購物、取貨、咖啡鮮食購買等多元接觸點，精準找出科技賦能的關鍵轉型改善機會。</p>
          </div>
        </div>
      </section>
    </>
  );
}