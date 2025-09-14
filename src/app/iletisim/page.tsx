// src/app/iletisim/page.tsx
"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Linkedin,
  Globe,
  User,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

/* ------------------ Shared: Compact Gradient Pill Buttons ------------------ */

const pillWrap =
  "relative inline-flex items-center gap-2 rounded-full p-[1.5px] bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 shadow-[0_0_0_3px_rgba(12,20,30,0.35)]";

const pillInner =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm bg-[rgba(8,15,24,0.82)] text-white font-semibold whitespace-nowrap transition-colors hover:bg-[rgba(8,15,24,0.9)]";

function PrimaryPillButton({
  children,
  disabled,
  type = "button",
}: {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <span className={pillWrap} aria-hidden={disabled ? "true" : "false"}>
      <button type={type} disabled={disabled} className={pillInner}>
        {children}
      </button>
    </span>
  );
}

function PrimaryPillLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={pillWrap}>
      <span className={pillInner}>{children}</span>
    </a>
  );
}

/* ------------------------------ Page ------------------------------ */

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | "ok" | "err">(null);

  const onChange =
    (k: keyof typeof form) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setDone(null);

    const emailOk = /\S+@\S+\.\S+/.test(form.email);
    const phoneOk = form.phone.replace(/\D/g, "").length >= 10;
    if (!form.name.trim() || !emailOk || !phoneOk || !form.message.trim()) {
      setSubmitting(false);
      setDone("err");
      return;
    }

    // Buraya gerçek API entegrasyonunu bağlayabilirsin
    setTimeout(() => {
      setSubmitting(false);
      setDone("ok");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    }, 700);
  };

  return (
    <main className="about-page-bg pt-12 max-md:pt-8 min-h-screen w-full text-white">
      {/* ---------- Hero ---------- */}
      <section className="relative px-6 pt-24 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-sm text-neutral-200">
              7/24 teknik destek — hızlı dönüş
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            İletişime{" "}
            <span className="bg-gradient-to-r from-[#2f80ed] via-[#41b7ff] to-[#00d8d8] bg-clip-text text-transparent">
              geçelim
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Projeniz için keşif, teklif veya teknik danışmanlık taleplerinizde
            size bir mesaj kadar yakınız.
          </p>
        </div>
      </section>

      {/* ---------- Content ---------- */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left column */}
          <div className="col-span-1 grid gap-6">
            <InfoCard
              icon={<MapPin className="h-5 w-5" />}
              title="Adres"
              lines={["Ankara, Etimesgut Sanayi Bölgesi", "No: 123, Türkiye"]}
            />
            <InfoCard
              icon={<Phone className="h-5 w-5" />}
              title="Telefon"
              lines={["+90 (312) 123 45 67"]}
              subtitle="Hafta içi 09:00–18:00"
            />
            <InfoCard
              icon={<Mail className="h-5 w-5" />}
              title="E-posta"
              lines={["info@ortadoguelektrik.com"]}
              subtitle="1 iş günü içinde dönüş"
            />
            <InfoCard
              icon={<Clock className="h-5 w-5" />}
              title="Çalışma Saatleri"
              lines={["Cmt: 09:00–18:00", "Pazar: Kapalı"]}
            />

            {/* Social */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur
                            bg-[radial-gradient(900px_260px_at_-10%_-10%,rgba(99,198,255,.08),transparent),radial-gradient(800px_220px_at_110%_120%,rgba(99,198,255,.08),transparent)]">
              <p className="mb-3 text-sm text-neutral-300">Bizi takip edin</p>
              <div className="flex items-center gap-3">
                <SocialBtn href="#" label="Instagram">
                  <Instagram className="h-4 w-4" />
                </SocialBtn>
                <SocialBtn href="#" label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </SocialBtn>
                <SocialBtn href="#" label="Web">
                  <Globe className="h-4 w-4" />
                </SocialBtn>
              </div>
            </div>

            {/* Representatives */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur
                            bg-[radial-gradient(900px_260px_at_-10%_-10%,rgba(99,198,255,.08),transparent),radial-gradient(800px_220px_at_110%_120%,rgba(99,198,255,.08),transparent)]">
              <h3 className="text-lg font-semibold">Müşteri Temsilcileri</h3>
              <div className="mt-4 grid gap-3">
                <MiniContact
                  name="Ayşe Yılmaz"
                  role="Satış / Teklif"
                  phone="+90 532 000 11 22"
                  mail="ayse@ortadogu.com"
                />
                <MiniContact
                  name="Mehmet Demir"
                  role="Teknik Destek"
                  phone="+90 532 000 33 44"
                  mail="mehmet@ortadogu.com"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            {/* Map – BÜYÜTÜLDÜ */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5
                            bg-[radial-gradient(900px_260px_at_-10%_-10%,rgba(99,198,255,.06),transparent),radial-gradient(800px_220px_at_110%_120%,rgba(99,198,255,.06),transparent)]
                            h-[420px] md:h-[520px] lg:h-[560px]">
              <iframe
                title="Harita"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.2824904820075!2d32.615!3d39.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU3JzAwLjAiTiAzMsKwMzYnNTQuMCJF!5e0!3m2!1str!2str!4v1700000000000"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>

            {/* Form */}
            <div
              id="form"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur
                         bg-[radial-gradient(1000px_300px_at_-10%_-10%,rgba(99,198,255,.08),transparent),radial-gradient(900px_260px_at_110%_120%,rgba(99,198,255,.08),transparent)]"
            >
              <h2 className="mb-6 text-2xl font-semibold">
                Bize mesaj gönderin <br /> <span className="max-md:text-sm"> Gün İçinde Dönüş Sağlanacaktır. Sabrınız için Teşekkür Ederiz :) </span>
              </h2>

              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <FloatingInput id="name" label="Ad Soyad" value={form.name} onChange={onChange("name")} />
                <FloatingInput id="email" type="email" label="E-posta" value={form.email} onChange={onChange("email")} />
                <FloatingInput id="phone" type="tel" label="Telefon" value={form.phone} onChange={onChange("phone")} />
                <FloatingInput id="company" label="Firma / Şirket (ops.)" value={form.company} onChange={onChange("company")} />
                <FloatingTextarea
                  id="message"
                  label="Mesajınız"
                  value={form.message}
                  onChange={onChange("message")}
                  className="md:col-span-2"
                />

                <div className="md:col-span-2 flex items-center justify-between gap-4">
                  <p className="max-w-[46ch] text-xs text-neutral-400 line-clamp-2">
                    Form, TLS ile korunur. Bilgileriniz üçüncü şahıslarla paylaşılmaz.
                  </p>

                  <PrimaryPillButton type="submit" disabled={submitting}>
                    <Send className="h-4 w-4" />
                    {submitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                  </PrimaryPillButton>
                </div>

                {done === "ok" && (
                  <p className="md:col-span-2 text-sm text-emerald-400">Teşekkürler! Mesajınız alındı.</p>
                )}
                {done === "err" && (
                  <p className="md:col-span-2 text-sm text-rose-400">Lütfen zorunlu alanları doğru doldurun.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA (compact buttons; yan yana sığacak) ---------- */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              relative overflow-hidden rounded-2xl border border-white/10 p-7 md:p-10 backdrop-blur
              bg-[radial-gradient(1200px_420px_at_-12%_-16%,rgba(120,210,255,.25),transparent),
                  radial-gradient(1100px_420px_at_112%_118%,rgba(120,210,255,.22),transparent),
                  linear-gradient(135deg,rgba(19,45,78,.75),rgba(15,34,62,.86))]
              shadow-[0_10px_45px_rgba(90,200,255,.15)]
            "
          >
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl ring-1 ring-white/10" />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/90">
                  <PhoneCall className="h-3.5 w-3.5" />
                  Ücretsiz keşif planlayalım
                </div>
                <h3 className="mt-3 text-[28px] md:text-[34px] font-bold leading-[1.2]">
                  Projeniz için keşif mi gerekiyor?
                </h3>
                <p className="mt-2 text-blue-50/90">
                  Enerji altyapısı, otomasyon ve bakım hizmetlerinde uçtan uca çözümler. Saha
                  keşfi ve teknik yönlendirme için ekibimiz hazır.
                </p>
              </div>

              <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
                <a
                  href="tel:+903121234567"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/25 transition whitespace-nowrap"
                >
                  <PhoneCall className="h-4 w-4" />
                  +90 (312) 123 45 67
                </a>

                <PrimaryPillLink href="#form">
                  Keşif Talep Et
                  <ArrowRight className="h-4 w-4" />
                </PrimaryPillLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------ Sub components ------------------------------ */

function InfoCard({
  icon,
  title,
  lines,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  subtitle?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur
                    bg-[radial-gradient(1000px_300px_at_-10%_-10%,rgba(99,198,255,.1),transparent),radial-gradient(900px_260px_at_110%_120%,rgba(99,198,255,.1),transparent)]">
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-cyan-300">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="mt-1 space-y-0.5 text-neutral-300">
            {lines.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
          {subtitle && <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-100 backdrop-blur transition hover:bg-white/10"
    >
      {children}
      {label}
    </a>
  );
}

function MiniContact({
  name,
  role,
  phone,
  mail,
}: {
  name: string;
  role: string;
  phone: string;
  mail: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-cyan-300">
          <User className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-neutral-400">{role}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <a href={`tel:${phone}`} className="rounded-md bg-white/10 px-2 py-1 text-xs hover:bg-white/15">
          Ara
        </a>
        <a href={`mailto:${mail}`} className="rounded-md bg-white/10 px-2 py-1 text-xs hover:bg-white/15">
          Mail
        </a>
      </div>
    </div>
  );
}

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  className = "",
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white outline-none backdrop-blur placeholder-transparent focus:border-cyan-400"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-sm text-neutral-300 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-400 peer-focus:-top-2 peer-focus:left-2 peer-focus:bg-transparent peer-focus:text-xs peer-focus:text-cyan-300"
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  className = "",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder=" "
        rows={6}
        className="peer w-full resize-y rounded-lg border border-white/10 bg-white/5 p-3 text-white outline-none backdrop-blur placeholder-transparent focus:border-cyan-400"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-5 -translate-y-1/2 bg-transparent px-1 text-sm text-neutral-300 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-neutral-400 peer-focus:-top-2 peer-focus:left-2 peer-focus:bg-transparent peer-focus:text-xs peer-focus:text-cyan-300"
      >
        {label}
      </label>
    </div>
    
  );
}

