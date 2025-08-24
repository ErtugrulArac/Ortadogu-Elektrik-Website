// src/components/ElectricImpactSection.tsx
"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

type Pt = { x: number; y: number };

const CARDS = [
  {
    title: "Altyapı Projelendirme",
    text:
      "Toplu konut ve site projelerinde keşiften kablolamaya, pano ve kabul testlerine kadar uçtan uca yönetim.",
  },
  {
    title: "Güvenli Enerji",
    text:
      "Topraklama, kaçak akım ve kompanzasyon ölçümleriyle yönetmeliklere tam uyum ve izlenebilir raporlama.",
  },
  {
    title: "Zamanında Teslim",
    text:
      "Planlı ilerleme, etap yönetimi ve şeffaf süreçlerle söz verilen tarihte devreye alma.",
  },
];

export default function ElectricImpactSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [on, setOn] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(0);
  const [paths, setPaths] = useState<string[]>([]);
  const [size, setSize] = useState({ w: 1200, h: 560 });

  const center = (el: Element, host: Element) => {
    const r = el.getBoundingClientRect();
    const h = host.getBoundingClientRect();
    return { x: r.left - h.left + r.width / 2, y: r.top - h.top + r.height / 2 };
  };

  const pathDesktop = (a: Pt, b: Pt) => {
    const midX = (a.x + b.x) / 2;
    const dx = Math.abs(a.x - b.x);
    const c = Math.max(110, dx * 0.22 + 100);
    return `M ${a.x},${a.y} C ${midX},${a.y - c} ${midX},${b.y - c * 0.9} ${b.x},${b.y}`;
  };

  // Mobil segmentler: 0 sağ kavis, 1 sol kavis, 2 aşağı S
  const pathMobileSegment = (a: Pt, b: Pt, i: number) => {
    const midY = (a.y + b.y) / 2;
    if (i === 0) {
      const c1 = { x: a.x + 120, y: a.y + 60 };
      const c2 = { x: a.x + 160, y: midY - 20 };
      const c3 = { x: b.x - 18, y: b.y - 8 };
      return `M ${a.x},${a.y} C ${c1.x},${c1.y} ${c2.x},${c2.y} ${c2.x},${c2.y} S ${c3.x},${c3.y} ${b.x},${b.y}`;
    }
    if (i === 1) {
      const c1 = { x: a.x - 120, y: a.y + 70 };
      const c2 = { x: a.x - 160, y: midY };
      const c3 = { x: b.x + 18, y: b.y - 8 };
      return `M ${a.x},${a.y} C ${c1.x},${c1.y} ${c2.x},${c2.y} ${c2.x},${c2.y} S ${c3.x},${c3.y} ${b.x},${b.y}`;
    }
    // 3. karta daha hoş S hareket
    const c1 = { x: a.x + 80, y: a.y + 90 };
    const c2 = { x: a.x + 120, y: midY };
    const c3 = { x: a.x - 100, y: midY + 60 };
    const c4 = { x: b.x + 18, y: b.y - 10 };
    return `M ${a.x},${a.y} C ${c1.x},${c1.y} ${c2.x},${c2.y} ${c3.x},${c3.y} S ${c4.x},${c4.y} ${b.x},${b.y}`;
  };

  const recompute = () => {
    const host = wrapRef.current;
    const btn = btnRef.current;
    if (!host || !btn) return;

    setSize({ w: host.clientWidth, h: host.clientHeight });
    const start = center(btn, host);

    const targets = cardRefs.current.filter(Boolean).map((el) => center(el!, host));
    const isMobile = host.clientWidth < 760;

    setPaths(
      isMobile
        ? [0, 1, 2].map((i) =>
            pathMobileSegment(i === 0 ? start : targets[i - 1], targets[i], i)
          )
        : targets.map((t) => pathDesktop(start, t))
    );
  };

  useLayoutEffect(() => {
    recompute();
    const r = () => recompute();
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);

  // Sıralı akış
  useEffect(() => {
    let timers: number[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((res) => timers.push(window.setTimeout(res, ms)));

    const run = async () => {
      setActiveIdx(null);
      setRevealed(0);

      if (!on) {
        setPaths([]);
        return;
      }

      recompute();

      const isMobile = (wrapRef.current?.clientWidth ?? 1000) < 760;

      for (let i = 0; i < 3; i++) {
        setActiveIdx(i);
        await sleep(620);
        setRevealed((r) => Math.max(r, i + 1));
        await sleep(140);
      }

      setActiveIdx(null);

      // mobilde iz kalmasın
      if (isMobile) {
        await sleep(260);
        setPaths([]);
      }
    };

    run();
    return () => timers.forEach(clearTimeout);
  }, [on]);

  useEffect(() => {
    recompute();
  }, [on]);

  const showLinks = on || activeIdx !== null;

  return (
    <section className="eg">
      <div className="wrap" ref={wrapRef}>
        <header className="hero">
          <h1 className={`title ${on ? "live" : "dim"}`}>Elektriğin Gücü</h1>
          <p className="subtitle">Ortadoğu Elektrik ile tek dokunuşta aydınlat.</p>
          <button
            ref={btnRef}
            className={`cta ${on ? "on" : "off"}`}
            onClick={() => {
              setOn((v) => !v);
              if (!on) setTimeout(recompute, 0);
              else {
                setActiveIdx(null);
                setRevealed(0);
                setPaths([]);
              }
            }}
          >
            {on ? "Enerjiyi Kapat" : "Enerjiyi Aç"}
          </button>
        </header>

        {showLinks && (
          <svg
            className="links"
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.1" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="elecBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9cc4ff" />
                <stop offset="60%" stopColor="#60a5ff" />
                <stop offset="100%" stopColor="#1fb6ff" />
              </linearGradient>
            </defs>

            {paths.map((d, i) => {
              const isActive = activeIdx === i;
              const isDone = revealed > i && activeIdx !== i;

              return (
                <g
                  key={i}
                  className={`conn ${isActive ? "active" : ""} ${
                    isDone ? "done" : ""
                  }`}
                >
                  <path
                    d={d}
                    stroke="url(#elecBlue)"
                    strokeWidth={isActive ? 3.2 : 2.2}
                    strokeLinecap="round"
                    fill="none"
                    className="bolt"
                    filter="url(#glow)"
                  />
                  <path
                    d={d}
                    stroke="url(#elecBlue)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    className="bolt glow"
                  />
                  {isActive && (
                    <>
                      <circle r="4.2" className="spark">
                        <animateMotion dur="0.6s" begin="0s" fill="freeze" path={d} />
                      </circle>
                      <circle r="0" className="pulse">
                        <animateMotion dur="0.6s" begin="0s" fill="freeze" path={d} />
                        <animate
                          attributeName="r"
                          values="0;16"
                          dur="0.45s"
                          fill="freeze"
                          begin="0.58s"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.9;0"
                          dur="0.45s"
                          fill="freeze"
                          begin="0.58s"
                        />
                      </circle>
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        )}

        <div className="cards">
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`card ${revealed >= i + 1 ? "live" : "idle"}`}
            >
              <div className="bus" />
              <div className="inner">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mottoWrap">
          <div className="rule" />
          <blockquote className="motto">
            <span className="q">“</span>
            <em>Ortadoğu Elektrik ile güç her zaman elinizde.</em>
            <span className="q">”</span>
          </blockquote>
        </div>
      </div>

      <style jsx>{`
        .eg {
          --bg1: #08162d;
          --bg2: #0a1733;
          --ink: #eef4ff;
          background: radial-gradient(120% 80% at 50% -10%, #1b377d3a 0%, transparent 60%),
            linear-gradient(180deg, var(--bg1), var(--bg2));
          color: var(--ink);
        }

        /* 🔸 MOBİL (varsayılan) — boşluklara dokunmuyoruz */
        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 16px 12px 70px; /* mobilde alt boşluk geniş */
          position: relative;
          min-height: 520px;
        }

        .hero {
          text-align: center;
        }
        .title {
          margin: 2px 0 6px;
          font-weight: 900;
          font-size: clamp(28px, 6.2vw, 66px);
          line-height: 1.06;
          transition: all 0.28s ease;
        }
        .title.dim {
          opacity: 0.35;
          filter: saturate(0.65);
        }
        .title.live {
          opacity: 1;
          text-shadow: 0 0 22px rgba(32, 146, 255, 0.34);
        }
        .subtitle {
          margin: 0 0 12px;
          opacity: 0.92;
          font-size: clamp(14px, 2.2vw, 18px);
        }

        .cta {
          border: 0;
          border-radius: 999px;
          padding: 10px 18px;
          background: linear-gradient(90deg, #60a5ff, #1fb6ff);
          color: #03122a;
          font-weight: 800;
          letter-spacing: 0.3px;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(32, 146, 255, 0.28),
            inset 0 0 0 2px rgba(255, 255, 255, 0.06);
          transition: transform 0.16s ease, filter 0.16s ease, box-shadow 0.16s ease;
          position: relative;
          z-index: 3;
        }
        .cta:hover {
          transform: translateY(-1px);
          filter: brightness(1.05);
        }
        .cta.off {
          animation: pulseOff 2.3s ease-in-out infinite;
        }
        @keyframes pulseOff {
          0%,
          100% {
            box-shadow: 0 10px 26px rgba(32, 146, 255, 0.22),
              0 0 0 0 rgba(31, 182, 255, 0);
          }
          50% {
            box-shadow: 0 16px 38px rgba(32, 146, 255, 0.34),
              0 0 20px 4px rgba(31, 182, 255, 0.25);
          }
        }

        .links {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }
        .bolt {
          stroke-dasharray: 12 12;
          stroke-dashoffset: 120;
          opacity: 0;
        }
        .conn.active .bolt {
          opacity: 1;
          animation: dash 1.1s linear infinite,
            glowflick 140ms steps(2, end) infinite alternate;
        }
        .conn.done .bolt {
          opacity: 0.45;
          stroke-dasharray: 2 14;
          animation: dash 2.2s linear infinite reverse;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -120;
          }
        }
        @keyframes glowflick {
          0% {
            filter: drop-shadow(0 0 6px rgba(96, 165, 255, 0.45));
          }
          100% {
            filter: drop-shadow(0 0 14px rgba(31, 182, 255, 0.85));
          }
        }
        .spark {
          fill: #1fb6ff;
          filter: drop-shadow(0 0 9px rgba(31, 182, 255, 0.95))
            drop-shadow(0 0 4px rgba(96, 165, 255, 0.55));
        }
        .pulse {
          fill: rgba(96, 165, 255, 0.22);
          stroke: rgba(31, 182, 255, 0.7);
          stroke-width: 1.6;
        }
        .glow {
          opacity: 0.28;
          stroke-dasharray: 3 18;
          filter: url(#glow);
        }

        .cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 12px;
          position: relative;
          z-index: 1;
        }
        @media (min-width: 900px) {
          .cards {
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }
        }

        .card {
          position: relative;
          min-height: 132px;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.06),
            rgba(255, 255, 255, 0.03)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 34px rgba(3, 10, 40, 0.32);
        }
        .inner {
          padding: 14px 14px 18px;
        }
        .card h3,
        .card p {
          transform: translateY(10px);
          opacity: 0;
        }
        .card.live h3,
        .card.live p {
          animation: rise 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards,
            neon 0.42s ease-out forwards;
        }
        .card.live p {
          animation-delay: 0.06s, 0.06s;
        }
        @keyframes rise {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes neon {
          0% {
            text-shadow: 0 0 0 rgba(96, 165, 255, 0);
          }
          60% {
            text-shadow: 0 0 18px rgba(96, 165, 255, 0.28);
          }
          100% {
            text-shadow: 0 0 0 rgba(96, 165, 255, 0);
          }
        }
        .card .bus {
          position: absolute;
          left: 8%;
          right: 8%;
          top: 0;
          height: 3px;
          border-radius: 99px;
          background: linear-gradient(
            90deg,
            rgba(96, 165, 255, 0.22),
            rgba(31, 182, 255, 0.22)
          );
          filter: blur(0.2px);
          opacity: 0.35;
        }
        .card.live .bus {
          opacity: 1;
          box-shadow: 0 0 16px rgba(31, 182, 255, 0.55);
        }

        /* 🔸 SADECE MASAÜSTÜ: mottodan sonraki boşluğu azalt */
        @media (min-width: 900px) {
          .wrap {
            padding-bottom: 16px; /* alt boşluk küçültüldü */
            min-height: 500px;
          }
          .mottoWrap {
            margin-top: 8px;
          }
          .rule {
            margin: 0 auto 6px;
          }
          .motto {
            margin-bottom: 0;
          }
        }

        .mottoWrap {
          margin-top: 22px; /* mobilde mevcut değer korunuyor */
          text-align: center;
        }
        .rule {
          height: 2px;
          width: 220px;
          margin: 0 auto 12px; /* mobilde geniş */
          background: linear-gradient(
            90deg,
            transparent,
            rgba(96, 165, 255, 0.6),
            transparent
          );
        }
        .motto {
          margin: 0 auto;
          max-width: 720px;
          font-size: clamp(15px, 2.2vw, 18px);
          color: #e7eeff;
          opacity: 0.92;
        }
        .motto em {
          font-style: italic;
        }
        .motto .q {
          color: #9cc4ff;
          font-size: 1.4em;
          vertical-align: -0.12em;
          padding: 0 0.06em;
        }

        /* Mobilde iz bırakma kapalı */
        @media (max-width: 759px) {
          .conn.done .bolt {
            opacity: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
