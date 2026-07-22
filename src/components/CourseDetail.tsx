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
  const [openUnits, setOpenUnits] = useState<Record<string, boolean>>({});
  const toggleUnit = (key: string) =>
    setOpenUnits((prev) => ({ ...prev, [key]: !prev[key] }));
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

  const course = data[selected];
  const theme = course.theme;
  const accent = course.accent;
  const stageMeta = [
    {
      title: "階段一 · 次產業 AI 核心應用課程",
      desc: "聚焦於生成式 AI 職場工具與 n8n 自動化工作流的扎實演練，並融入核心資安法遵意識，全面奠定學員的智慧辦公與技術操作硬實力。",
    },
    {
      title: "階段二 · 企業專案實作",
      desc: "由指標企業親自出題，引導學員深入真實營運場域打造客製化 AI 解決方案，達成「學員解題、作品集累積與高就業率對接」的實戰效益。",
    },
  ];

  return (
    <>
      <section id="classes" className="scroll-mt-24 py-[5rem] flex flex-col justify-center items-center bg-[var(--gray-bg)]">
        <h2 className="text-center">選擇最適合你的職涯加速器</h2>
        <h4 className="mt-2 text-center text-slate-400">零售 × 餐飲兩大次產業實戰班別，台北開課</h4>
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
              className={`class-card cursor-pointer shrink-0 snap-center w-[80vw] max-w-[20rem] ${index === selected ? "selected bg-[#1c2b73]" : "bg-white/[0.05]"} `}
            >
              <div className="flex justify-between">
                <h5 className={`py-1 px-3 rounded-md ${index === selected ? "bg-[#5B77FF] text-[#FFFFFF]" : "bg-[#D9E0FF] text-[#303F9F]"}`}>{cls.location}</h5>
                <h5 className={index === selected ? "text-[#7986CB]" : ""}>{getMMDD(cls.startDate)} - {getMMDD(cls.endDate)}</h5>
              </div>
              <p className={`mt-3 font-black ${index === selected ? "text-white" : ""}`}>{cls.title}</p>
              <h5 className={`mt-1 ${index === selected ? "text-[#8CA0FF]" : "text-[#9DB0FF]"}`}>合作企業：{cls.corp.join('/')}</h5>
              <h5 className={`mt-8 ${index === selected ? "text-[#7986CB]" : ""}`}>{cls.desc}</h5>
              {getDaysLeft(cls.startDate) < 0 ? (
                <div className="mt-3 w-full flex justify-center">
                  <h4 className="py-1 px-3 rounded-xl bg-white/10 text-slate-300">已開課</h4>
                </div>
              ) : (
                <div className="mt-3 w-full flex gap-2 justify-center items-center">
                  <p className={index === selected ? "text-white" : ""}>距離開課還有</p>
                  <h4 className={`py-1 px-3 rounded-xl ${index === selected ? "text-white bg-[#5B77FF]" : "bg-[#D9E0FF] text-[#1E2A6B]"}`}>{getDaysLeft(cls.startDate)}</h4>
                  <p className={index === selected ? "text-white" : ""}>天</p>
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
        <div className="mt-4 w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl bg-white/[0.04] shadow-[0_30px_70px_-30px_rgba(61,90,255,0.5)] ring-1 ring-white/10">
            {/* 課程標題 Banner */}
            <div
              className="relative px-6 py-8 sm:px-10 sm:py-10 text-white"
              style={{ backgroundImage: `linear-gradient(135deg, ${theme} 0%, #5B77FF 140%)` }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1.2px, transparent 1.2px)", backgroundSize: "18px 18px" }} />
              <div className="relative flex flex-col items-center text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm ring-1 ring-white/30">
                  精選課程
                </span>
                <h3 className="mt-3 font-bold">{course.title}</h3>
                <p className="mt-2 !text-white/90 font-medium tracking-wide">
                  {getYYYYMMDD(course.startDate)} ～ {getYYYYMMDD(course.endDate)}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium ring-1 ring-white/25">
                    {course.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium ring-1 ring-white/25">
                    招生 {course.capacity} 人
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium ring-1 ring-white/25">
                    共 240 小時
                  </span>
                </div>
              </div>
            </div>

            {/* 內文 */}
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <p className="text-slate-300 leading-relaxed">{course.fullDesc}</p>

              {/* 培訓重點 */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-[var(--gray-bg)] p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold" style={{ color: accent }}>培訓重點</h4>
                </div>
                <p className="mt-3 text-slate-300 leading-relaxed">{course.emphasis}</p>
              </div>

              {/* 合作企業 */}
              <h4 className="mt-10 font-bold text-white">合作企業</h4>
              <div className="mt-4 flex flex-wrap gap-3 sm:gap-4">
                {course.corp.map((corp, index) => (
                  <div
                    className="flex flex-1 min-w-[120px] max-w-[180px] flex-col items-center rounded-2xl border border-white/70 bg-white p-4 shadow-[0_16px_36px_-20px_rgba(61,90,255,0.6)] transition-transform hover:-translate-y-1"
                    key={index}
                  >
                    <div className="flex h-[80px] w-full items-center justify-center">
                      <Image
                        src={logos[corp]}
                        alt={corp}
                        width={90}
                        height={30}
                        className="h-auto max-h-[70px] w-auto max-w-[90px] object-contain"
                      />
                    </div>
                    <p className="mt-3 w-full border-t border-slate-200 pt-3 text-center font-medium !text-slate-600">{corp}</p>
                  </div>
                ))}
              </div>

              {/* 雙階段課程架構 */}
              <h4 className="mt-10 font-bold text-white">雙階段課程架構</h4>
              <div className="mt-4 flex flex-col gap-5">
                {course.stages.map((stage, stageId) => (
                  <div className="rounded-2xl border border-white/10 bg-[var(--gray-bg)] p-4 sm:p-6" key={stageId}>
                    {/* 階段標題 */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <span
                          className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                          style={{ backgroundColor: theme }}
                        >
                          {stageMeta[stageId].title}
                        </span>
                        <p className="mt-2.5 text-slate-300 leading-relaxed">{stageMeta[stageId].desc}</p>
                      </div>
                      <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-white/[0.06] px-4 py-2 ring-1 ring-white/10 sm:min-w-[88px]">
                        <span className="text-xl font-black leading-none" style={{ color: accent }}>120</span>
                        <span className="text-[11px] font-medium text-gray-400">小時</span>
                      </div>
                    </div>

                    {/* 課程單元 */}
                    <div className="mt-4 flex flex-col gap-3">
                      {stage.map((unit, unitId) => {
                        const unitKey = `${selected}-${stageId}-${unitId}`;
                        const isOpen = !!openUnits[unitKey];
                        return (
                        <div
                          key={unitId}
                          role="button"
                          tabIndex={0}
                          aria-expanded={isOpen}
                          onClick={() => toggleUnit(unitKey)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggleUnit(unitKey);
                            }
                          }}
                          className="cursor-pointer rounded-xl bg-white/[0.045] p-4 ring-1 ring-white/10 transition hover:bg-white/[0.07] sm:p-5"
                        >
                          <div className="flex items-start gap-3">
                            <span
                              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                              style={{ backgroundColor: theme }}
                            >
                              {unitId + 1}
                            </span>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <h5 className="!text-[15px] font-bold !text-white leading-snug">{unit.unit}</h5>
                                <div className="flex shrink-0 items-center gap-2">
                                  <span
                                    className="rounded-md px-2 py-0.5 text-xs font-bold"
                                    style={{ color: accent, backgroundColor: `${accent}22` }}
                                  >
                                    {unit.credit}h
                                  </span>
                                  <svg
                                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1.5">
                                {unit.ability.split(/[,，]/).map((tag, i) => (
                                  <span key={i} className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-slate-300">
                                    {tag.trim()}
                                  </span>
                                ))}
                              </div>
                              <div
                                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                              >
                                <div className="overflow-hidden">
                                  <p className="mt-2.5 text-slate-300 leading-relaxed">{unit.desc}</p>
                                  <div className="mt-3 flex flex-col gap-1.5 border-t border-white/10 pt-3 text-xs text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-5">
                                    <span className="inline-flex items-start gap-1"><span className="font-medium">講師：</span>{unit.instructor}</span>
                                    {/* <span className="inline-flex items-start gap-1"><span className="font-medium">地點：</span>{unit.location}</span> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}