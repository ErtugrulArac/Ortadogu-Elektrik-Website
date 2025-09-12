// src/components/ColorSplash.tsx
"use client";

import GradientText from "./GradientText";

export default function ColorSplash() {
  return (
    <GradientText
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
      animationSpeed={3}
      showBorder={false}
      className="custom-class inline-block pl-[6px]"
    >
      İpucu: simgenin üzerine gelince önizleme; tıklayınca seçim kilitlenir.
    </GradientText>
  );
}
