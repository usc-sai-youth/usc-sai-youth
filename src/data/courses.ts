export type CourseUnit = {
  unit: string;
  desc: string;
  ability: string;
  credit: number;
  instructor: string;
  location: string;
};

export type Course = {
  title: string;
  theme: string;
  /** 深底上前景文字/徽章用的淺色，確保可讀性 */
  accent: string;
  corp: string[];
  desc: string;
  fullDesc: string;
  startDate: Date;
  endDate: Date;
  location: string;
  emphasis: string;
  capacity: number;
  /** 兩個階段，每個階段包含該階段的所有課程單元 */
  stages: [CourseUnit[], CourseUnit[]];
};

/** 兩班採「同一零售核心、區域化執行」，課程單元、師資、時數完全相同，僅上課地點不同 */
const retailStages = (location: string): [CourseUnit[], CourseUnit[]] => [
  [
    {
      unit: "零售生成式 AI 基礎與智慧營運應用",
      desc: "認識生成式 AI 於便利商店、超市與智慧門市之應用場景，學習提示詞設計、角色設定與任務拆解。以門市日報、銷售摘要與顧客回饋進行 AI 摘要分析，建立零售 AI 工作助理初步情境。",
      ability: "提示詞設計,零售場域理解",
      credit: 8,
      instructor: "林京賢、李其縵",
      location,
    },
    {
      unit: "AI 倫理與資安、個資保護與可信任 AI 應用",
      desc: "認識生成式 AI 之倫理與應用風險，辨識零售場域個資、企業機密與一般營運資料。學習資料最小化、去識別化與權限控管，完成資料分級表與 AI 安全使用檢核表。",
      ability: "資安風險辨識,個資保護能力",
      credit: 8,
      instructor: "陳仁偉、紀如鴻",
      location,
    },
    {
      unit: "零售資料整理、POS 資料與銷售分析基礎",
      desc: "說明 POS 銷售、商品、庫存、促銷、時段與商圈資料如何支援零售 AI 分析。以模擬資料進行清理、樞紐分析與趨勢判讀，用 AI 找出熱銷與滯銷商品並產出分析摘要。",
      ability: "零售數據分析,銷售趨勢判讀",
      credit: 12,
      instructor: "鍾瑞益、李其縵",
      location,
    },
    {
      unit: "庫存管理與銷售預測實作",
      desc: "介紹便利零售與超市常見缺貨、滯銷與補貨不準問題。以銷售、時段、節慶、天氣與促銷資料建立簡易銷售預測，提出補貨建議與缺貨、滯銷風險判斷。",
      ability: "銷售預測能力,庫存管理能力",
      credit: 12,
      instructor: "鍾瑞益、謝侑霖",
      location,
    },
    {
      unit: "鮮食與熱銷品 AI 備貨預測",
      desc: "以鮮食、咖啡、季節性與熱銷商品為案例，分析時段、天氣、促銷檔期與商圈對備貨的影響。建立 AI 輔助鮮食備貨預測、報廢風險判斷與補貨建議流程。",
      ability: "備貨預測能力,耗損控管能力",
      credit: 8,
      instructor: "陳俊吉、李國憲",
      location,
    },
    {
      unit: "會員消費洞察與 B2C 顧客關係管理",
      desc: "運用會員消費、APP 互動、購買頻率與促銷反應資料進行顧客分群。辨識高頻小額、家庭採買、價格敏感等客群，產出會員分群表、顧客輪廓與經營建議。",
      ability: "顧客分群能力,會員經營能力",
      credit: 12,
      instructor: "李其縵、周育如",
      location,
    },
    {
      unit: "AI 導購、AI 客服與顧客旅程優化",
      desc: "盤點顧客於便利商店與超市之購物、取貨、付款與客服接觸點。設計 AI 導購與客服問答流程，以顧客旅程圖找出服務痛點，產出客服回覆範本與旅程改善圖。",
      ability: "顧客旅程分析,AI 客服應用",
      credit: 12,
      instructor: "周育如、鍾曉雲",
      location,
    },
    {
      unit: "AI 個人化促銷與創意行銷素材生成",
      desc: "依顧客分群設計促銷訊息、會員推播與優惠券內容。以 AI 生成社群貼文、廣告標語與短影音腳本，產出個人化促銷方案與行銷文案包。",
      ability: "個人化促銷,行銷素材生成",
      credit: 8,
      instructor: "賴志銘、林京賢",
      location,
    },
    {
      unit: "商品組合優化、新品需求預測與陳列推薦",
      desc: "介紹商品組合、購物籃分析、新品導入與陳列之 AI 應用。以銷售資料分析商品搭配與交叉銷售，產出商品組合分析、新品需求預測與陳列推薦建議。",
      ability: "商品組合優化,購物籃分析",
      credit: 12,
      instructor: "李國憲、林京賢",
      location,
    },
    {
      unit: "零售智慧營運 AI 代理、RAG 知識庫與門市 SOP 助理",
      desc: "說明 AI Agent 如何協助門市判讀銷售、庫存與作業流程，建立門市 SOP 與客服問答之 RAG 知識庫。以 n8n 設計 AI 營運摘要、異常提醒與 SOP 查詢流程，產出 AI 輔助 SOP 助理雛形。",
      ability: "AI Agent 建置,流程自動化",
      credit: 16,
      instructor: "謝侑霖、紀如鴻、李其縵",
      location,
    },
    {
      unit: "門市 AIoT、節能防損與零售 AI 成果整合",
      desc: "說明門市設備、冷藏冷凍、能源與防損資料之 AI 應用，設計節電檢核與設備異常提醒邏輯。整合前述單元成果，完成含銷售預測、備貨、會員分群或 AI 客服的零售 AI 小型專題簡報。",
      ability: "節能分析能力,成果整合能力",
      credit: 12,
      instructor: "陳俊吉、謝侑霖",
      location,
    },
  ],
  [
    {
      unit: "企業題目導入與便利零售場域理解",
      desc: "由全家便利商店業師說明企業背景、智慧門市、AI 節力、鮮食備貨與永續營運等專題方向。說明專題目標、可用資料類型、成果規格與評核標準，並進行分組討論。",
      ability: "企業題目理解,零售場域理解",
      credit: 12,
      instructor: "全家便利商店企業資深經理邱廷旺、陳仁偉",
      location,
    },
    {
      unit: "門市顧客旅程與服務流程盤點",
      desc: "針對購物、取貨、繳費、行動支付、鮮食購買與客服等接觸點進行顧客旅程分析。盤點服務痛點與改善機會，作為 AI 導入基礎。",
      ability: "顧客旅程分析,服務流程盤點",
      credit: 12,
      instructor: "全家便利商店企業資深經理邱廷旺、鍾曉雲、周育如",
      location,
    },
    {
      unit: "門市節力與 AI 輔助 SOP 設計",
      desc: "分析收銀、補貨、咖啡製作、取件、代收代付等門市多任務流程。將 SOP 與常見問題轉化為 AI 問答助理、情境訓練腳本與新人學習檢核表。",
      ability: "SOP 設計能力,門市流程優化",
      credit: 16,
      instructor: "全家便利商店企業資深經理邱廷旺、周育如、鍾曉雲",
      location,
    },
    {
      unit: "鮮食與熱銷品備貨資料分析",
      desc: "以鮮食、咖啡與熱銷品為對象，結合 POS 銷售、時段、天氣、節慶與促銷因素建立需求預測邏輯。產出備貨建議表與缺貨、滯銷風險判斷。",
      ability: "備貨預測能力,資料分析能力",
      credit: 16,
      instructor: "全聯副理譚竹芸、李其縵、魏美棻、謝侑霖",
      location,
    },
    {
      unit: "會員分群與個人化促銷設計",
      desc: "依會員消費行為、APP 互動、購買頻率與促銷反應進行顧客分群。設計個人化優惠、推播內容、會員回訪與促銷成效追蹤指標。",
      ability: "顧客分群能力,個人化促銷",
      credit: 12,
      instructor: "全聯副理譚竹芸、謝侑霖、紀如鴻、林京賢",
      location,
    },
    {
      unit: "AI 節電與永續營運改善分析",
      desc: "針對門市用電、冷藏冷凍、照明、空調與尖離峰營運行為，建立節能檢核表與用電異常提醒邏輯。提出永續營運改善建議，兼顧成本控管與 ESG。",
      ability: "節能分析能力,永續營運分析",
      credit: 12,
      instructor: "全家便利商店經理鄭旭鈞、賴志銘、林京賢",
      location,
    },
    {
      unit: "AI 解方整合與原型製作",
      desc: "各組依所選題目完成 AI 應用成果或原型，例如客服回覆範本、SOP 助理、備貨預測表或營運儀表板。在業師諮詢下優化原型可行性。",
      ability: "原型製作能力,解方整合能力",
      credit: 16,
      instructor: "全家便利商店經理鄭旭鈞、謝侑霖、紀如鴻",
      location,
    },
    {
      unit: "中期成果簡報與業師回饋",
      desc: "各組進行中期簡報，說明問題定義、資料使用、AI 工具選擇與初步成果。由全家業師與課程教師提出修正建議。",
      ability: "簡報表達能力,回饋修正能力",
      credit: 8,
      instructor: "全家便利商店經理鄭旭鈞、謝侑霖、紀如鴻、魏美棻",
      location,
    },
    {
      unit: "成果修正與導入可行性檢核",
      desc: "依中期回饋修正專題成果，補強資料安全、個資保護與企業機密查核。分析品牌語氣與導入成本等可行性，完成檢核表。",
      ability: "可行性分析,資安檢核能力",
      credit: 8,
      instructor: "全聯副理譚竹芸、林京賢、陳仁偉",
      location,
    },
    {
      unit: "期末成果發表與就業媒合準備",
      desc: "完成企業專題成果報告、成果簡報、AI 應用原型與作品集。於成果發表會向全家企業代表簡報，銜接後續面談與職缺媒合。",
      ability: "成果發表能力,就業媒合準備",
      credit: 8,
      instructor: "全聯副理譚竹芸、全家便利商店企業資深經理邱廷旺、計畫團隊",
      location,
    },
  ],
];

const retailEmphasis =
  "聚焦鮮食與生鮮備貨預測、門市 SOP 助理、會員分群與個人化促銷、AI 節電永續營運等零售落地應用。強調 POS 與生鮮數據分析、AI 導購客服與智慧門市營運代理，並融入 AI 資安與可信任 AI 治理。";

export const courses: Course[] = [
  {
    title: "AI 節力與智慧零售實戰班（台北班）",
    theme: "#1E1B4B",
    accent: "#9DA8FF",
    corp: ["全家便利商店", "全聯福利中心"],
    desc: "攜手全家、全聯，於實踐大學台北校區開課。聚焦鮮食備貨預測、智慧門市 SOP 助理、會員分群與個人化促銷、AI 節電分析，並銜接北部零售職缺。",
    fullDesc: "本班依「服務業次產業之 AI 人才培訓地圖」聚焦零售業 AI 應用，攜手全家便利商店與全聯福利中心，於實踐大學台北校區辦理，延續北部既有招生來源與零售企業職缺鏈結。第一階段 120 小時建立生成式 AI、POS 銷售分析、庫存與銷售預測、鮮食備貨、會員分群、AI 導購與門市 SOP 助理等核心能力。第二階段 120 小時由企業業師帶領，實戰開發鮮食備貨預測、門市節力 AI 輔助 SOP、會員個人化促銷與 AI 節電永續營運等落地方案。完訓後透過成果發表與企業面談，對接北部便利零售、超市零售與智慧門市相關職缺。",
    startDate: new Date("2026-11-16"),
    endDate: new Date("2027-01-15"),
    location: "台北",
    emphasis: retailEmphasis,
    capacity: 30,
    stages: retailStages("實踐大學-台北校區"),
  },
  {
    title: "AI 節力與智慧零售實戰班（台中班）",
    theme: "#2A37B5",
    accent: "#8CA0FF",
    corp: ["全家便利商店", "全聯福利中心"],
    desc: "攜手全家、全聯，於台中原住民族技藝中心開課。聚焦鮮食備貨預測、智慧門市 SOP 助理、會員分群與個人化促銷、AI 節電分析，並銜接中部零售職缺。",
    fullDesc: "本班依「服務業次產業之 AI 人才培訓地圖」聚焦零售業 AI 應用，攜手全家便利商店與全聯福利中心，於台中原住民族技藝中心辦理，結合中部在地招募與原住民族就業服務資源，降低跨區參訓門檻。第一階段 120 小時建立生成式 AI、POS 銷售分析、庫存與銷售預測、鮮食備貨、會員分群、AI 導購與門市 SOP 助理等核心能力。第二階段 120 小時由企業業師帶領，實戰開發鮮食備貨預測、門市節力 AI 輔助 SOP、會員個人化促銷與 AI 節電永續營運等落地方案。完訓後透過成果發表與企業面談，對接中部便利零售、超市零售與智慧門市相關職缺。",
    startDate: new Date("2026-12-01"),
    endDate: new Date("2027-01-29"),
    location: "台中",
    emphasis: retailEmphasis,
    capacity: 30,
    stages: retailStages("台中原住民族技藝中心"),
  },
];
