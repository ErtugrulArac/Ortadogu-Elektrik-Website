"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [paused, setPaused] = useState(false); // mobile dokununca durdur

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (!containerRef.current || !scrollerRef.current) return;
    const content = Array.from(scrollerRef.current.children);
    content.forEach((el) => scrollerRef.current!.appendChild(el.cloneNode(true)));
    // yön ve hız
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );
    setStart(true);
  }

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 md:gap-6 py-3",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
          paused && "[animation-play-state:paused]"
        )}
        // mobile: basılı tutunca dur, bırakınca devam et
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onTouchCancel={() => setPaused(false)}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative shrink-0 max-w-full
                       w-[calc(100vw-24px)] sm:w-[420px] lg:w-[500px]
                       rounded-xl bg-[#111827] px-5 py-5
                       shadow-[0_0_15px_rgba(0,0,0,0.25)]"
          >
            <blockquote className="flex h-full flex-col justify-between">
              <span className="text-sm leading-relaxed font-normal text-gray-200">
                {item.quote}
              </span>
              <div className="mt-4">
                {/* İsim – gradient */}
                <p className="text-sm font-semibold bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  {item.name}
                </p>
                {/* Ünvan – aynı gradient, biraz daha sakin */}
                <p className="text-sm bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent opacity-80">
                  {item.title}
                </p>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
