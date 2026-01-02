// src/app/kurumsalkadro/index.tsx
"use client";

import React, { useState, useRef } from "react";

type TeamMember = {
  id: string;
  name: string;
  fullName: string;
  image: string;
  description: string;
  duties: string[];
  color: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "chairman",
    name: "Yönetim Kurulu Başkanı",
    fullName: "Kenan Can",
    image: "/kurumsalkişiler/kenan.webp",
    description:
      "Ortadoğu Elektrik’in stratejik yönünü belirleyen ve şirketin kurumsal vizyonunu şekillendiren kurucusudur. 1996 yılında temelleri atılan şirketin kuruluşundan itibaren; kurumsal hedeflerin belirlenmesi, pazarlama stratejilerinin oluşturulması ve uzun vadeli işletme planlarının yönetilmesinde aktif rol almaktadır. Sektörel deneyimi ve ileri görüşlü yaklaşımıyla Ortadoğu Elektrik’in sürdürülebilir büyümesini ve güçlü bir marka yapısına ulaşmasını sağlamaktadır.",
    duties: [
      "Kurumsal strategi ve vizyon belirleme",
      "Paydaş ve müşteri ilişkileri yönetimi",
      "Uzun vadeli büyüme ve genişleme planları",
      "Yönetim kurulu toplantılarını yönetme",
    ],
    color: "amber",
  },
  {
    id: "vicechairman",
    name: "Yönetim Kurulu Başkan Yardımcısı",
    fullName: "Ferat Cengiz Can",
    image: "/kurumsalkişiler/ferat.webp",
    description:
      "Malatya İnönü Üniversitesi Elektrik-Elektronik Mühendisliği bölümünden mezundur. Günlük operasyonların etkin ve verimli şekilde yönetilmesinden, projelerin planlanan süre ve kalite standartlarına uygun olarak tamamlanmasından sorumludur. Teknik ekibi koordine ederek iş süreçlerinin sorunsuz ilerlemesini sağlar, ekip içi iletişimi ve iş birliğini güçlendirir. Aynı zamanda kalite kontrol süreçlerini titizlikle takip eder ve müşteri beklentilerini karşılamaya yönelik çözümler üreterek yüksek müşteri memnuniyetini hedefler.",
    duties: [
      "Günlük operasyon ve proje yönetimi",
      "Teknik ekip koordinasyonu",
      "Kalite kontrol ve müşteri memnuniyeti",
      "İş güvenliği ve standartların uygulanması",
    ],
    color: "cyan",
  },
  {
    id: "finance",
    name: "Mali İşler Direktörü",
    fullName: "Sercan Can",
    image: "/kurumsalkişiler/sercan.webp",
    description:
      "Atatürk Üniversitesi Yazılım Mühendisliği ve Yönetim Bilişim Sistemleri bölümlerinden mezundur. Bütçe planlaması, mali raporlama ve muhasebe süreçlerinin yönetiminden sorumludur. Finansal verileri analiz ederek maliyet kontrolünü optimize eder, dijital sistemler ve yazılım tabanlı çözümlerle finansal süreçlerin daha verimli ve şeffaf şekilde yürütülmesini sağlar.",
    duties: [
      "Bütçe planlama ve finansal kontrol",
      "Mali raporlama ve analizler",
      "Fiyatlandırma ve maliyet optimizasyonu",
      "Muhasebe işlemleri ve vergi uyumu",
    ],
    color: "slate",
  },
  {
    id: "marketing",
    name: "Pazarlama Direktörü",
    fullName: "Eren Can",
    image: "/kurumsalkişiler/eren.webp",
    description:
      "Atatürk Üniversitesi İktisat bölümünden mezundur. Marka kimliğinin oluşturulması ve geliştirilmesi, dijital pazarlama faaliyetleri ile müşteri kazanım stratejilerinin planlanması ve yönetiminden sorumludur. Pazar araştırmaları ve ekonomik analizler yaparak hedef kitleyi doğru şekilde belirler, rekabet koşullarını değerlendirir ve işletmeye sürdürülebilir rekabet avantajı kazandırmaya yönelik stratejiler geliştirir.",
    duties: [
      "Marka kimliği ve pozisyon stratejisi",
      "Dijital pazarlama ve sosyal medya yönetimi",
      "Kampanya planlaması ve müşteri kazanım",
      "Pazar araştırması ve rekabet analizi",
    ],
    color: "rose",
  },
];

export default function KurumsalKadroPage() {
  const [selectedId, setSelectedId] = useState<string | null>("chairman");
  const detailRef = useRef<HTMLDivElement>(null);

  const handleSelectMember = (id: string) => {
    setSelectedId(id);
    // Mobil cihazlarda detay paneline scroll yap
    setTimeout(() => {
      if (window.innerWidth < 1024 && detailRef.current) {
        detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handlePrevious = () => {
    const currentIndex = TEAM_MEMBERS.findIndex((m) => m.id === selectedId);
    const previousIndex = currentIndex === 0 ? TEAM_MEMBERS.length - 1 : currentIndex - 1;
    handleSelectMember(TEAM_MEMBERS[previousIndex].id);
  };

  const handleNext = () => {
    const currentIndex = TEAM_MEMBERS.findIndex((m) => m.id === selectedId);
    const nextIndex = currentIndex === TEAM_MEMBERS.length - 1 ? 0 : currentIndex + 1;
    handleSelectMember(TEAM_MEMBERS[nextIndex].id);
  };

  const getColorStyles = (color: string) => {
    const colors: Record<string, { ring: string; bg: string; text: string; border: string }> = {
      amber: { ring: "ring-amber-400", bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500" },
      cyan: { ring: "ring-cyan-400", bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500" },
      emerald: { ring: "ring-emerald-400", bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500" },
      rose: { ring: "ring-rose-400", bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500" },
      slate: { ring: "ring-blue-900", bg: "bg-slate-700/20", text: "text-slate-300", border: "border-blue-900" },
    };
    return colors[color] || colors.amber;
  };

  return (
    <main className="relative min-h-dvh w-full bg-transparent pt-24 md:pt-32 pb-16 md:pb-20 text-slate-200">
     
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-20%] top-[-25%] h-[55vh] w-[55vw] rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute right-[-18%] bottom-[-28%] h-[60vh] w-[60vw] rounded-full bg-indigo-600/10 blur-[160px]" />
      </div>

      <div className="mx-auto w-[92%] md:w-[90%] lg:w-[88%] max-w-7xl">
        {/* Başlık */}
        <div className="mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="relative inline-block">
              Kurumsal
              <span className="absolute left-0 top-full mt-2 md:mt-3 h-0.5 md:h-1 w-24 md:w-32 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
            </span>{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Kadromuz
            </span>
          </h1>
          <p className="mt-6 md:mt-8 max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed">
            Ortadoğu Elektrik'in güçlü yönetim kadrosu, elektrik endüstrisinde yılların deneyimi taşıyor. 
            Stratejik vizyon, operasyonel mükemmellik ve finansal disiplin ile işletmemizi başarıya taşıyoruz.
          </p>
        </div>

        {/* Kartlar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-12 md:mb-20">
          {TEAM_MEMBERS.map((member) => {
            const colors = getColorStyles(member.color);
            const isSelected = selectedId === member.id;
            
            return (
              <button
                key={member.id}
                onClick={() => handleSelectMember(member.id)}
                className={`
                  group relative overflow-hidden rounded-lg transition-all duration-300 flex flex-col
                  ${isSelected 
                    ? `${colors.ring} ring-2 ring-offset-2 ring-offset-slate-950 shadow-xl shadow-slate-950` 
                    : 'hover:shadow-lg shadow-slate-950'
                  }
                `}
              >
                <div className="relative h-80 w-full bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
                </div>

                {/* Alt Başlık */}
                <div className="px-4 py-5 bg-slate-950/50 border-t border-slate-800">
                  <h3 className={`text-xs font-semibold ${colors.text} text-center leading-snug mb-1.5`}>
                    {member.fullName}
                  </h3>
                  <p className="text-xs text-slate-500 text-center">
                    {member.name}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detay Paneli */}
        {selectedId && (() => {
          const member = TEAM_MEMBERS.find((m) => m.id === selectedId);
          if (!member) return null;

          const colors = getColorStyles(member.color);

          return (
            <div ref={detailRef} className={`rounded-xl md:rounded-2xl border ${colors.border} ${colors.bg} p-6 md:p-8 lg:p-12 backdrop-blur-sm transition-all duration-300`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {/* Sol - Resim */}
                <div className="flex justify-center">
                  <div className={`w-56 md:w-64 h-72 md:h-80 rounded-lg overflow-hidden border ${colors.border} shadow-lg`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Sağ - İçerik */}
                <div className="lg:col-span-2 space-y-5 md:space-y-7">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                      {member.fullName}
                    </h2>
                    <p className={`${colors.text} font-semibold text-xs md:text-sm uppercase tracking-wider`}>
                      {member.name}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs md:text-sm font-semibold text-slate-300 uppercase tracking-widest mb-3 md:mb-4">
                      Sorumluluğu
                    </h3>
                    <ul className="space-y-2 md:space-y-2.5">
                      {member.duties.map((duty, i) => (
                        <li key={i} className="flex gap-2 md:gap-3 text-slate-400 text-xs md:text-sm">
                          <span className={`${colors.text} font-bold flex-shrink-0 mt-0.5 md:mt-1`}>•</span>
                          <span className="leading-relaxed">{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Navigasyon Butonları */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-700/50 flex items-center justify-between">
                <button
                  onClick={handlePrevious}
                  className={`
                    flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg
                    ${colors.bg} border ${colors.border} ${colors.text}
                    transition-all duration-300 hover:shadow-lg hover:scale-105
                    text-sm md:text-base font-semibold
                  `}
                  title="Önceki yönetici"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="hidden sm:inline">Önceki</span>
                </button>

                <div className="flex gap-1.5 md:gap-2">
                  {TEAM_MEMBERS.map((m, idx) => (
                    <button
                      key={m.id}
                      onClick={() => handleSelectMember(m.id)}
                      className={`
                        w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300
                        ${selectedId === m.id 
                          ? `${colors.bg} border ${colors.border} scale-150` 
                          : 'bg-slate-700 hover:bg-slate-600'
                        }
                      `}
                      title={m.name}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className={`
                    flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg
                    ${colors.bg} border ${colors.border} ${colors.text}
                    transition-all duration-300 hover:shadow-lg hover:scale-105
                    text-sm md:text-base font-semibold
                  `}
                  title="Sonraki yönetici"
                >
                  <span className="hidden sm:inline">Sonraki</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </main>
  );
}
