// src/components/AboutBg.tsx
export default function AboutBg() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* ana gradient */}
      <div className="absolute inset-0 about-page-bg" />
      {/* okunurluk için koyu film */}
      <div className="absolute inset-0 bg-[#070c17]/30" />
    </div>
  );
}
