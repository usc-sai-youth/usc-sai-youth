"use client";
import React, {useState, useRef, useEffect} from "react";

export default function CourseDetail() {
  const [selected, setSelected] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const pickCentered = () => {
      if (el.scrollWidth <= el.clientWidth + 1) return;
      const cards = el.querySelectorAll<HTMLElement>("[data-card]");
      const center = el.getBoundingClientRect().left + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.left + rect.width / 2 - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setSelected(best);
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(pickCentered);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", pickCentered);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", pickCentered);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const firstUpcoming = data.findIndex((c) => getDaysLeft(c.startDate) >= 0);
    const initial = firstUpcoming === -1 ? 0 : firstUpcoming;
    setSelected(initial);
    const el = scrollRef.current;
    const card = el?.querySelectorAll<HTMLElement>("[data-card]")[initial];
    if (el && card) {
      const cardRect = card.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      el.scrollLeft += cardRect.left + cardRect.width / 2 - (elRect.left + elRect.width / 2);
    }
  }, []);

  const data = [
    {
      title: "節力與智慧零售實戰班",
      theme: "#1E1B4B",
      corp: ["全家便利商店"],
      desc: "主打鮮食備貨預測、智慧門市 SOP 助理、會員分群與個人化促銷、ESG AI 節電分析。",
      fullDesc: "專為有意投入零售、生活服務與物流領域的青年量身打造。訓練全程攜手主要合作企業「全家便利商店」，帶領學員直接對接連鎖超商複合型場域的真實營運需求。在第一階段中，學員將扎實累積生成式 AI 提示詞設計、n8n 自動化工作流與核心零售數據分析等辦公與行銷硬實力。第二階段則由企業導師親自引導，實戰開發鮮食備貨預測、門市 SOP 助理及 AI 節電永續營運等落地解決方案，完訓後直接舉辦專屬面談以無縫對接優質職缺。",
      startDate: new Date("2026-09-01"),
      endDate: new Date("2026-10-31"),
      location: "台北",
      emphasis: "",
      capacity: 20,
      stages: [
        [
          {
            unit: "",
            desc: "",
            ability: "",
            credit: "",
            instructor: "",
            location: "",
          }
        ],
        []
      ]
    },
    {
      title: "AI 餐飲營運與顧客體驗實戰班",
      theme: "#7A1F3D",
      corp: ["Alpha餐飲", "聲寶頑味"],
      desc: "聚焦餐飲門店來客數與訂位預測、顧客評論情緒分析、日式款待服務 AI SOP 與品牌內容生成。",
      fullDesc: "",
      startDate: new Date("2026-10-01"),
      endDate: new Date("2026-11-30"),
      location: "台北",
      emphasis: "",
      capacity: 20,
      stages: [
        [
          {
            unit: "",
            desc: "",
            ability: "",
            credit: "",
            instructor: "",
            location: "",
          }
        ],
        []
      ]
    },
    {
      title: "智慧零售與餐飲展店營運實戰班",
      theme: "#14432E",
      corp: ["全聯福利中心", "老四川"],
      desc: "核心包含超市生鮮商品管理、會員購物籃大數據分析、促銷檔期銷售預測與新展店排班。",
      fullDesc: "",
      startDate: new Date("2026-12-01"),
      endDate: new Date("2026-1-31"),
      location: "台北",
      emphasis: "",
      capacity: 20,
      stages: [
        [
          {
            unit: "",
            desc: "",
            ability: "",
            credit: "",
            instructor: "",
            location: "",
          }
        ],
        []
      ]
    },
    {
      title: "在地服務業 AI 營運與就業實戰專班",
      theme: "#5A3210",
      corp: ["全聯福利中心", "老四川", "全家便利商店"],
      desc: "針對中南部區域展店人力配置、在地客群經營與行銷所設計，協助在地服務業數位轉型與就業。",
      fullDesc: "",
      startDate: new Date("2027-03-01"),
      endDate: new Date("2027-4-30"),
      location: "雲林",
      emphasis: "",
      capacity: 20,
      stages: [
        [
          {
            unit: "",
            desc: "",
            ability: "",
            credit: "",
            instructor: "",
            location: "",
          }
        ],
        []
      ]
    },
  ]
  // const data = [
  //   {
  //     title: "",
  //     corp: [],
  //     desc: "",
  //     fullDesc: "",
  //     startDate: "",
  //     endDate: "",
  //     location: "",
  //     emphasis: "",
  //     capacity: 20,
  //     stages: [
  //       [
  //         {
  //           unit: "",
  //           desc: "",
  //           ability: "",
  //           credit: "",
  //           instructor: "",
  //           location: "",
  //         }
  //       ],
  //       []
  //     ]
  //   }
  // ]

  const getTaipeiParts = (date: Date) => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Taipei",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(date);
    const get = (type: string) => parts.find((p) => p.type === type)!.value;
    return { year: get("year"), month: get("month"), day: get("day") };
  };

  const getMMDD = (date: Date) => {
    const { month, day } = getTaipeiParts(date);
    return `${month}/${day}`;
  }

  const getYYYYMMDD = (date: Date) => {
    const { year, month, day } = getTaipeiParts(date);
    return `${year}/${month}/${day}`;
  }

  const getDaysLeft = (targetDate: Date) => {
    const t = getTaipeiParts(targetDate);
    const n = getTaipeiParts(new Date());
    const targetDay = Date.UTC(Number(t.year), Number(t.month) - 1, Number(t.day));
    const todayDay = Date.UTC(Number(n.year), Number(n.month) - 1, Number(n.day));
    return Math.round((targetDay - todayDay) / (1000 * 60 * 60 * 24));
  }

  const selectCard = (index: number, cardEl: HTMLElement) => {
    setSelected(index);
    const el = scrollRef.current;
    if (!el) return;
    const cardRect = cardEl.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const target =
      el.scrollLeft + (cardRect.left + cardRect.width / 2) - (elRect.left + elRect.width / 2);
    el.style.scrollSnapType = "none";
    el.scrollTo({ left: target, behavior: "smooth" });
    window.setTimeout(() => {
      el.style.scrollSnapType = "";
    }, 600);
  };

  return (
    <>
      <section id="core" className="scroll-mt-24 py-[5rem] flex flex-col justify-center items-center bg-[var(--gray-bg)]">
        <h2 className="text-center">選擇最適合你的職涯加速器</h2>
        <h4 className="mt-2 text-center text-gray-500">四大次產業實戰班別，台北、雲林在地開課</h4>
        <div ref={scrollRef} className="no-scrollbar mt-3 w-full overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pt-6 pb-10">
          <div className="flex flex-row gap-4 w-max mx-auto px-[50%]">
          {data.map((cls, index) => (
            <div
              key={index}
              data-card
              role="button"
              tabIndex={0}
              aria-pressed={index === selected}
              onClick={(e) => selectCard(index, e.currentTarget)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  selectCard(index, e.currentTarget);
                }
              }}
              className={`class-card cursor-pointer shrink-0 snap-center w-[80vw] max-w-[20rem] ${index === selected ? "selected bg-[#1E1B4B]" : "bg-white"} `}
            >
              <div className="flex justify-between">
                <h5 className={`py-1 px-3 rounded-md ${index === selected ? "bg-[#26A69A] text-[#FFFFFF]" : "bg-[#D9E0FF] text-[#303F9F]"}`}>📍{cls.location}</h5>
                <h5 className={index === selected ? "text-[#7986CB]" : ""}>{getMMDD(cls.startDate)} - {getMMDD(cls.endDate)}</h5>
              </div>
              <p className={`mt-3 font-black ${index === selected ? "text-white" : ""}`}>{cls.title}</p>
              <h5 className={`mt-1 ${index === selected ? "text-[#26A69A]" : "text-[#303F9F]"}`}>合作企業：{cls.corp.join('/')}</h5>
              <h5 className={`mt-8 ${index === selected ? "text-[#7986CB]" : ""}`}>{cls.desc}</h5>
              {getDaysLeft(cls.startDate) < 0 ? (
                <div className="mt-3 w-full flex justify-center">
                  <h4 className="py-1 px-3 rounded-xl bg-gray-200 text-gray-500">已開課</h4>
                </div>
              ) : (
                <div className="mt-3 w-full flex gap-2 justify-center items-center">
                  <p className={index === selected ? "text-white" : ""}>距離開課還有</p>
                  <h4 className={`py-1 px-3 rounded-xl ${index === selected ? "text-white bg-[#26A69A]" : "bg-[#D9E0FF]"}`}>{getDaysLeft(cls.startDate)}</h4>
                  <p className={index === selected ? "text-white" : ""}>天</p>
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