import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Crown, Shirt, Gem, Sparkles, Briefcase, Layers, Scissors, PartyPopper, Ruler, Plane, Pill, Building2 } from "lucide-react";
import atelier from "@/assets/atelier.jpg";
import hero from "@/assets/hero.jpg";
import sherwani from "@/assets/sherwani.jpg";
import waistcoat from "@/assets/waistcoat.jpg";
import princecoat from "@/assets/princecoat.jpg";
import pantshirt from "@/assets/pantshirt.jpg";
import corporate from "@/assets/corporate.jpg";
import { BIZ, CLIENTS } from "./data";
import { useIsDesktop, useStickyProgress } from "./hooks";

const MILESTONES = [
  ["1996", "First shop opens on Tariq Road, Karachi."],
  ["2005", "Groom wear becomes our signature — sherwanis & prince coats."],
  ["2012", "Corporate uniform division serves pharma and aviation."],
  ["Today", "30,000+ clients, three decades of hand-finished tailoring."],
] as const;

export function Heritage() {
  const [m, setM] = useState(0);
  return (
    <section id="story" className="bg-ivory py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="reveal lg:col-span-6">
          <p className="eyebrow text-brown">Fit · Fabric · Finish</p>
          <h2 className="mt-4 text-[clamp(2.4rem,4.2vw,3.8rem)]">
            Suiting Club, <span className="text-gold-grad">since 1996.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Three decades of measuring, cutting and finishing by hand. Every garment begins with a conversation and ends with a fit that feels made for you — because it is.
          </p>
          <p className="eyebrow mt-10 text-brown">Explore our heritage</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {MILESTONES.map(([y], i) => (
              <button key={y} onClick={() => setM(i)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold tnum transition-colors ${i === m ? "border-navy bg-navy text-on-dark" : "border-border hover:border-navy"}`}>{y}</button>
            ))}
          </div>
          <p key={m} className="mt-5 max-w-md animate-in fade-in slide-in-from-bottom-2 font-display text-2xl">{MILESTONES[m]?.[1]}</p>
        </div>
        <div className="reveal relative lg:col-span-6">
          <div className="group overflow-hidden rounded-3xl shadow-soft">
            <img src={atelier} alt="Tailor chalking navy wool" loading="lazy" width={1040} height={832} className="aspect-[5/4] w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-navy px-6 py-4 text-on-dark shadow-soft">
            <p className="font-display text-3xl text-gold tnum">30+ years</p>
            <p className="text-sm text-on-dark-muted">of hand-finished craft</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const COLLECTION = [
  { name: "Suiting", img: hero, icon: Briefcase, d: "Two & three-piece suits in Italian and local wool." },
  { name: "Sherwani", img: sherwani, icon: Crown, d: "Hand-embellished groom sherwanis for the baraat." },
  { name: "Prince Coat", img: princecoat, icon: Gem, d: "Velvet and jamawar prince coats for walima nights." },
  { name: "Waistcoat", img: waistcoat, icon: Layers, d: "Tailored waistcoats for kurta or suit." },
  { name: "Pant Shirt", img: pantshirt, icon: Shirt, d: "Crisp everyday formals, cut to your measure." },
  { name: "Shalwar Kameez", img: pantshirt, icon: Sparkles, d: "Refined traditional wear for Eid and events." },
];

export function Collection() {
  const desktop = useIsDesktop();
  const [ref, p] = useStickyProgress<HTMLElement>();
  const track = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState(0);
  useEffect(() => {
    const m = () => { const t = track.current; if (t) setMax(Math.max(0, t.scrollWidth - window.innerWidth + 80)); };
    m(); window.addEventListener("resize", m); return () => window.removeEventListener("resize", m);
  }, []);
  const shift = desktop ? p * max : 0;
  return (
    <section id="collection" ref={ref} className="relative bg-parchment lg:h-[260vh]">
      <div className="flex flex-col justify-center overflow-hidden py-20 lg:sticky lg:top-0 lg:h-screen lg:py-0">
        <div className="mx-auto mb-10 grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <p className="eyebrow text-brown">Our collection</p>
            <h2 className="mt-3 text-[clamp(2.4rem,4.2vw,3.8rem)]">Six ways to be <span className="text-gold-grad">well dressed.</span></h2>
          </div>
          <p className="self-end text-lg text-muted-foreground lg:col-span-5">From the boardroom to the baraat — each piece is measured, cut and finished for one person only.</p>
        </div>
        <div className="overflow-x-auto px-6 lg:overflow-visible lg:px-10 [scrollbar-width:none]">
          <div ref={track} className="flex w-max gap-6 will-change-transform" style={{ transform: `translateX(-${shift}px)` }}>
            {COLLECTION.map((c) => (
              <a key={c.name} href={BIZ.wa} target="_blank" rel="noreferrer" className="group w-[78vw] shrink-0 sm:w-[340px] lg:w-[23vw]">
                <div className="relative overflow-hidden rounded-3xl">
                  <img src={c.img} alt={c.name} loading="lazy" width={832} height={1040} className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-ivory/90 text-navy backdrop-blur"><c.icon className="size-5" strokeWidth={1.5} /></span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[1.75rem]">{c.name}</h3>
                    <p className="mt-1 text-[0.95rem] text-muted-foreground">{c.d}</p>
                  </div>
                  <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:bg-navy group-hover:text-on-dark"><ArrowUpRight className="size-4" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 hidden w-full max-w-7xl px-10 lg:block">
          <div className="h-px w-full bg-border"><div className="h-px bg-navy" style={{ width: `${Math.max(8, p * 100)}%` }} /></div>
        </div>
      </div>
    </section>
  );
}

const OCCASIONS = [
  { k: "Groom wear", icon: Crown, img: sherwani, t: "For the baraat, mehndi and walima — heirloom pieces built over three fittings.", chips: ["Sherwani", "Prince coat", "Kulla & stole"] },
  { k: "Party wear", icon: PartyPopper, img: princecoat, t: "Velvet, jamawar and tuxedo looks for receptions and evening events.", chips: ["Prince coat", "Tuxedo", "Waistcoat"] },
  { k: "Bespoke formal", icon: Ruler, img: hero, t: "Fully bespoke suits for the work you do and the room you walk into.", chips: ["Three-piece", "Blazer", "Dress trousers"] },
];

export function Occasion() {
  const [ref, p] = useStickyProgress<HTMLElement>();
  const idx = Math.min(OCCASIONS.length - 1, Math.floor(p * OCCASIONS.length));
  return (
    <section id="occasion" ref={ref} className="relative h-[300vh] bg-navy text-on-dark">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="eyebrow text-gold">Signature occasion wear</p>
            <h2 className="mt-3 text-[clamp(2.2rem,3.6vw,3.4rem)]">Dressed for <span className="text-gold-grad">every celebration.</span></h2>
            <ul className="mt-8 grid gap-2">
              {OCCASIONS.map((o, i) => (
                <li key={o.k} className={`flex items-center gap-4 border-l-2 py-2 pl-5 transition-all duration-500 ${i === idx ? "border-gold text-on-dark" : "border-line-dark text-on-dark-muted/60"}`}>
                  <o.icon className="size-5" strokeWidth={1.5} />
                  <span className="font-display text-2xl lg:text-3xl">{o.k}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[52vh] lg:col-span-5 lg:h-[82vh]">
            {OCCASIONS.map((o, i) => (
              <img key={o.k} src={o.img} alt={o.k} loading="lazy"
                className={`absolute inset-0 h-full w-full rounded-3xl object-cover object-top transition-all duration-700 ${i === idx ? "translate-y-0 opacity-100" : i < idx ? "-translate-y-10 opacity-0" : "translate-y-10 opacity-0"}`} />
            ))}
          </div>
          <div className="hidden lg:col-span-3 lg:block">
            {OCCASIONS.map((o, i) => i === idx && (
              <div key={o.k} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-lg text-on-dark-muted">{o.t}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {o.chips.map((c) => <span key={c} className="rounded-full border border-gold/50 px-4 py-1.5 text-sm text-gold">{c}</span>)}
                </div>
                <a href={BIZ.wa} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy">
                  <Scissors className="size-4" /> Plan your outfit
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const INDUSTRIES = [[Pill, "Pharmaceutical"], [Plane, "Aviation"], [Building2, "Hospitality & offices"]] as const;

export function Corporate() {
  return (
    <section id="corporate" className="bg-ivory py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="reveal relative overflow-hidden rounded-3xl">
          <img src={corporate} alt="Staff in tailored navy uniforms" loading="lazy" width={1040} height={832} className="aspect-[5/4] w-full object-cover" />
          <span className="absolute right-4 top-4 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-gold">Formal tailoring · Suiting Club</span>
        </div>
        <div className="reveal">
          <p className="eyebrow text-brown">Corporate expertise</p>
          <h2 className="mt-3 text-[clamp(2.4rem,4.2vw,3.8rem)]">Industries <span className="text-gold-grad">we serve.</span></h2>
          <p className="mt-5 text-lg text-muted-foreground">Uniforms that carry your brand with quiet authority — measured per person, delivered on schedule, consistent across every batch.</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-3">
            {INDUSTRIES.map(([I, l]) => (
              <li key={l} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"><I className="size-5 text-brown" strokeWidth={1.5} /> {l}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href={BIZ.wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 font-semibold text-on-dark">Discuss your requirements <ArrowRight className="size-4" /></a>
            <p><span className="font-display text-3xl tnum">40+</span> <span className="text-muted-foreground">companies served</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Clients() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-y border-border bg-ivory py-16">
      <div className="mx-auto mb-10 flex max-w-7xl flex-wrap items-end justify-between gap-6 px-6 lg:px-10">
        <div>
          <p className="eyebrow text-brown">Our corporate clientele</p>
          <h2 className="mt-3 text-[clamp(2rem,3.4vw,3rem)]">Trusted by organisations across Pakistan.</h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-navy px-6 py-3 font-semibold transition-colors hover:bg-navy hover:text-on-dark">View all clients <ArrowRight className="size-4" /></a>
      </div>
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-24">
          {row.map((c, i) => (
            <span key={i} className="whitespace-nowrap font-display text-3xl text-muted-foreground/60 grayscale transition-colors duration-300 hover:text-navy">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
