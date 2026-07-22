"use client";
import React, {useState, useRef, useEffect} from "react";
import Image, {type StaticImageData} from "next/image";
import {courses} from "@/src/data/courses";
import alphaLogo from "@/public/logos/alpha-logo.png"
import familyMartLogo from "@/public/logos/family-mart-logo.png"
import laoSzeChuanLogo from "@/public/logos/lao-sze-chuan-logo.png"
import pxMartLogo from "@/public/logos/px-mart-logo.png"
import sampoLogo from "@/public/logos/sampo-logo.png"

export default function CourseDetail() {
  const [selected, setSelected] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const programmaticRef = useRef(false);
  const settleTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const pickCentered = () => {
      if (programmaticRef.current) return;
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
      if (programmaticRef.current) {
        window.clearTimeout(settleTimer.current);
        settleTimer.current = window.setTimeout(() => {
          programmaticRef.current = false;
        }, 100);
      }
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

  const logos: Record<string, StaticImageData> = {
    "全家便利商店": familyMartLogo,
    "Alpha餐飲": alphaLogo,
    "聲寶頑味": sampoLogo,
    "全聯福利中心": pxMartLogo,
    "老四川": laoSzeChuanLogo,
  }

  const data = courses;

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
    programmaticRef.current = true;
    window.clearTimeout(settleTimer.current);
    // Fallback in case the card is already centered and no scroll events fire.
    settleTimer.current = window.setTimeout(() => {
      programmaticRef.current = false;
    }, 100);
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
        <div className="mx-5 p-5 max-w-[100rem] rounded-2xl bg-[#26A69A]">
          <h3 className="w-full text-center">{data[selected].title}</h3>
          <h4 className="w-full text-center">{getYYYYMMDD(data[selected].startDate)} ~ {getYYYYMMDD(data[selected].endDate)}</h4>
          <h4 className="mt-3">{data[selected].fullDesc}</h4>

          <h3 className="mt-4">培訓重點</h3>
          <h4 className="mt-1">{data[selected].emphasis}</h4>
          <div className="mt-2 flex gap-4">
            <div className="mt-1 px-4 py-4 w-fit flex flex-col justify-center items-center bg-white rounded-xl ">
              <h4 className="pb-2 border-b-2 border-black">📍上課地點</h4>
              <h4 className="pt-2">{data[selected].location}</h4>
            </div>
            <div className="mt-1 px-4 py-4 w-fit flex flex-col justify-center items-center bg-white rounded-xl ">
              <h4 className="pb-2 border-b-2 border-black">👥招生人數</h4>
              <h4 className="pt-2">{data[selected].capacity}</h4>
            </div>
          </div>

          <h3>合作企業</h3>
          <div className="flex gap-4">
            {data[selected].corp.map((corp, index) => (
              <div className="mt-1 px-4 py-4 w-fit flex flex-col justify-center items-center bg-white rounded-xl" key={index}>
                <div className="pb-2 w-[100px] h-[100px] flex flex-col items-center">
                  <Image
                    src={logos[corp]}
                    alt={corp}
                    width={90}
                    height={30}
                    className="w-[100px] h-auto"
                  />
                </div>
                <p className="pt-2 border-t-2 border-black">{corp}</p>
              </div>
            ))}
          </div>
          <h3>雙階段課程架構</h3>
          {data[selected].stages.map((stage, stageId) => (
            <div className="mt-2 p-5 bg-white rounded-2xl" key={stageId}>
              <div className="flex justify-between">
                <div>
                  <h3>{stageId === 0 ? "階段一 次產業AI核心應用課程" : "階段二 企業專案實作"}</h3>
                  <h4 className="mt-2">{stageId === 0 ? "聚焦於生成式 AI 職場工具與 n8n 自動化工作流的扎實演練，並融入核心資安法遵意識，全面奠定學員的智慧辦公與技術操作硬實力。" : "由指標企業親自出題，引導學員深入真實營運場域打造客製化 AI 解決方案，達成「學員解題、作品集累積與高就業率對接」的實戰效益。"}</h4>
                </div>
                <div>
                  <h3>120h</h3>
                </div>
              </div>
              {stage.map((unit, unitId) => (
                <div className="mt-2 p-5 bg-gray-200 rounded-2xl" key={unitId}>
                  <div className="flex justify-between">
                    <div className="flex">
                      <h4>{unitId + 1}</h4>
                      <h4>{unit.unit}</h4>
                    </div>
                    <div className="flex">
                      <h4>{unit.ability}</h4>
                      <h4>{unit.credit}</h4>
                    </div>
                  </div>
                  <h4 className="mt-2">{unit.desc}</h4>
                  <div className="mt-2 flex">
                    <h4>🎓講師：{unit.instructor}</h4>
                    <h4>📍上課地點：{unit.location}</h4>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}