import { useEffect, useState } from "react";
import { ArrowRight, CalendarCheck, Gem, Users, Shirt, Crown, Briefcase, Award, Scissors, Menu, X } from "lucide-react";
import hero from "@/assets/hero.jpg";
import sherwani from "@/assets/sherwani.jpg";
import waistcoat from "@/assets/waistcoat.jpg";
import princecoat from "@/assets/princecoat.jpg";
import pantshirt from "@/assets/pantshirt.jpg";
import { BIZ } from "./data";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "./icons";
import { useScrollY } from "./hooks";

const NAV = [
  ["Collection", "#collection"], ["Occasion", "#occasion"], ["Corporate", "#corporate"],
  ["Story", "#story"], ["Services", "#services"], ["Contact", "#contact"],
] as const;

export function Header() {
  const y = useScrollY();
  const scrolled = y > 40;
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full items-center justify-between gap-6 rounded-full px-5 py-3 text-on-dark transition-all duration-500 lg:px-7 ${
          scrolled ? "glass-pill max-w-6xl" : "max-w-7xl border border-transparent"
        }`}
      >
        <a href="#top" className="font-display text-2xl tracking-tight">
          Suiting <span className="text-gold">Club</span>
        </a>
        <ul className="hidden items-center gap-7 text-[0.95rem] lg:flex">
          {NAV.map(([l, h]) => (
            <li key={h}><a href={h} className="text-on-dark/85 transition-colors hover:text-gold">{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Socials className="hidden md:flex" />
          <a href={BIZ.wa} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5 sm:inline-flex">
            <CalendarCheck className="size-4" strokeWidth={1.75} /> Book a fitting
          </a>
          <button className="rounded-full p-2 lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="glass-pill absolute inset-x-4 top-24 rounded-3xl p-6 text-on-dark lg:hidden">
          <ul className="grid gap-4 text-lg">
            {NAV.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)}>{l}</a></li>)}
          </ul>
          <Socials className="mt-6 flex" />
        </div>
      )}
    </header>
  );
}

export function Socials({ className = "" }: { className?: string }) {
  const items = [
    [BIZ.facebook, FacebookIcon, "Facebook"], [BIZ.instagram, InstagramIcon, "Instagram"], [BIZ.tiktok, TiktokIcon, "TikTok"],
  ] as const;
  return (
    <div className={`items-center gap-1 ${className}`}>
      {items.map(([href, I, label]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
          className="grid size-9 place-items-center rounded-full border border-line-dark text-on-dark/85 transition-colors hover:border-gold hover:text-gold">
          <I className="size-4" />
        </a>
      ))}
    </div>
  );
}

const LOOKS = [
  { img: hero, label: "Classic formal" }, { img: waistcoat, label: "Waistcoat" },
  { img: pantshirt, label: "Pant & shirt" }, { img: sherwani, label: "Sherwani" },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const y = useScrollY();
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % LOOKS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-navy text-on-dark">
      {LOOKS.map((l, i) => (
        <img key={l.label} src={l.img} alt={l.label} width={1920} height={1088}
          style={{ transform: `translateY(${y * 0.25}px) scale(1.08)` }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"} ${i === 0 ? "object-[70%_center]" : "object-top"}`} />
      ))}
      <div className="hero-scrim absolute inset-0" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20 lg:px-10">
        <p className="eyebrow text-gold">Karachi · Since 1996</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(3rem,7vw,6.2rem)]">
          Tailored for the <em className="text-gold-grad not-italic">moments</em> that matter.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-on-dark-muted">
          Bespoke suits, sherwanis and prince coats — cut by hand on Tariq Road for grooms, professionals and Pakistan's leading companies.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={BIZ.wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-4 font-semibold text-navy transition-transform hover:-translate-y-0.5">
            <Scissors className="size-5" strokeWidth={1.6} /> Book a consultation
          </a>
          <a href="#collection" className="group inline-flex items-center gap-2.5 rounded-full border border-line-dark px-7 py-4 font-medium transition-colors hover:border-gold hover:text-gold">
            Explore the collection <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={1.6} />
          </a>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-3">
            {[hero, sherwani, waistcoat].map((s, i) => <img key={i} src={s} alt="" className="size-11 rounded-full border-2 border-navy object-cover object-top" />)}
          </div>
          <div>
            <p className="font-display text-3xl tnum text-gold">30,000+</p>
            <p className="text-sm text-on-dark-muted">clients dressed since 1996</p>
          </div>
        </div>
      </div>
      {/* Featured looks — the fourth drifts on scroll for a parallax accent */}
      <div className="absolute bottom-10 right-6 hidden gap-3 lg:right-10 lg:flex">
        {LOOKS.map((l, i) => (
          <button key={l.label} onClick={() => setActive(i)} aria-label={l.label}
            style={i === 3 ? { transform: `translateY(${-y * 0.18}px)` } : undefined}
            className={`group relative h-40 w-28 overflow-hidden rounded-2xl border transition-all ${i === active ? "border-gold" : "border-line-dark opacity-70 hover:opacity-100"}`}>
            <img src={l.img} alt="" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
            <span className="absolute inset-x-0 bottom-0 bg-navy/70 px-2 py-1.5 text-xs">{l.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

const RAIL = [
  [Award, "30+", "Years of excellence"], [Users, "30,000+", "Clients served"], [Crown, "15,000+", "Groom outfits crafted"],
  [Briefcase, "40+", "Corporate companies"], [Gem, "Bespoke", "Premium tailoring"], [Shirt, "Uniform", "Corporate experts"],
] as const;

export function StatsRail() {
  const items = [...RAIL, ...RAIL];
  return (
    <section aria-label="Suiting Club in numbers" className="overflow-hidden border-y border-line-dark bg-navy-2 py-10 text-on-dark">
      <div className="animate-marquee flex w-max items-center gap-16">
        {items.map(([I, n, l], i) => (
          <div key={i} className="flex items-center gap-5">
            <span className="grid size-14 place-items-center rounded-full border border-gold/40 text-gold"><I className="size-6" strokeWidth={1.5} /></span>
            <div>
              <p className="font-display text-4xl tnum">{n}</p>
              <p className="text-sm uppercase tracking-[0.18em] text-on-dark-muted">{l}</p>
            </div>
            <span className="ml-10 size-2 rotate-45 bg-gold" />
          </div>
        ))}
      </div>
    </section>
  );
}
