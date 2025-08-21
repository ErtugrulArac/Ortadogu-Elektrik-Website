"use client";

export default function SoftElectricBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Yumuşak mor enerji bulutu */}
      <div
        className="absolute left-[-10%] top-[-10%] h-[40vh] w-[40vw] blur-3xl opacity-40 animate-drift"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168,85,247,0.25), rgba(168,85,247,0) 60%)",
          filter: "saturate(120%)",
          mixBlendMode: "screen",
        }}
      />
      {/* Yumuşak mavi enerji bulutu */}
      <div
        className="absolute right-[-10%] bottom-[-10%] h-[45vh] w-[45vw] blur-3xl opacity-35 animate-drift2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.22), rgba(59,130,246,0) 60%)",
          filter: "saturate(120%)",
          mixBlendMode: "screen",
        }}
      />

      {/* İnce yıldırım izi */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
        width="520"
        height="260"
        viewBox="0 0 520 260"
        fill="none"
      >
        <path
          d="M10 130 L90 90 L160 145 L230 85 L300 150 L370 95 L440 140 L510 110"
          stroke="url(#grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="10 12"
          className="animate-dash"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="520" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(168,85,247,0.7)" />
            <stop offset="1" stopColor="rgba(59,130,246,0.7)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
