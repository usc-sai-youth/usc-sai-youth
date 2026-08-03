"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const gradientStyle: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
  filter: "url(#c3-noise)",
};

const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4";
const CROSSFADE_SECONDS = 1;

function LoopingVideoBackground() {
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const crossfadingRef = useRef(false);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const refs = [videoRefA, videoRefB];
    const a = videoRefA.current;
    const b = videoRefB.current;
    if (!a || !b) return;

    a.currentTime = 0;
    a.play().catch(() => {});

    const handleTimeUpdate = () => {
      const current = refs[activeRef.current].current;
      const next = refs[activeRef.current === 0 ? 1 : 0].current;
      if (!current || !next) return;
      if (
        !crossfadingRef.current &&
        current.duration &&
        current.duration - current.currentTime <= CROSSFADE_SECONDS
      ) {
        crossfadingRef.current = true;
        next.currentTime = 0;
        next.play().catch(() => {});
        setActive(activeRef.current === 0 ? 1 : 0);
        window.setTimeout(() => {
          current.pause();
          current.currentTime = 0;
          crossfadingRef.current = false;
        }, CROSSFADE_SECONDS * 1000);
      }
    };

    a.addEventListener("timeupdate", handleTimeUpdate);
    b.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      a.removeEventListener("timeupdate", handleTimeUpdate);
      b.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <video
        ref={videoRefA}
        muted
        playsInline
        preload="auto"
        src={HERO_VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          opacity: active === 0 ? 1 : 0,
          transition: `opacity ${CROSSFADE_SECONDS}s linear`,
        }}
      />
      <video
        ref={videoRefB}
        muted
        playsInline
        preload="auto"
        src={HERO_VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          opacity: active === 1 ? 1 : 0,
          transition: `opacity ${CROSSFADE_SECONDS}s linear`,
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero" className={`${inter.className} scroll-mt-24 fixed inset-0 z-0 overflow-hidden bg-[#0c0c0c] text-white pt-16 md:pt-28 pb-20 flex flex-col justify-center items-center text-center`}
    >
      <svg width="0" height="0" className="absolute">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      <LoopingVideoBackground />

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tight leading-[0.9]"
        >
          <span className="block text-white">別讓技術成為門檻</span>
          <span className="block animate-shiny" style={gradientStyle}>
            讓AI成為你職涯翻倍的跳板！
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl lg:text-3xl mt-8 text-white/60 max-w-xl text-base leading-[1.5]"
        >
          <span className="font-black">未來</span> 由你定義，送你一張 <span className="font-black">AI職涯入場券</span>！
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <a
            href="#program"
            rel="noopener noreferrer"
            className="text-lg md:text-xl lg:text-2xl apply-btn inline-flex items-center justify-center text-center"
          >
            開始探索 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
