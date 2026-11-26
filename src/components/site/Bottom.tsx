import { Fragment, useEffect, useState } from "react";
import { ArrowUp, Award, Clock, Gem, HeartHandshake, Mail, MapPin, Phone, Quote, Ruler, Scissors, Send, Shirt, Star, Crown, Briefcase, Sparkles, X, Navigation } from "lucide-react";
import founder from "@/assets/founder.jpg";
import atelier from "@/assets/atelier.jpg";
import sherwani from "@/assets/sherwani.jpg";
import corporate from "@/assets/corporate.jpg";
import waistcoat from "@/assets/waistcoat.jpg";
import pantshirt from "@/assets/pantshirt.jpg";
import { BIZ } from "./data";
import { Socials } from "./Top";
import { WhatsappIcon } from "./icons";
import { useScrollY, useStickyProgress } from "./hooks";

const WHY = [
  [Ruler, "Measured by masters", "Twenty-plus measurements, taken by tailors with decades at the table."],
  [Gem, "Premium finishing", "Hand-felled lapels, real buttonholes, linings chosen to last."],
  [HeartHandshake, "Fittings until perfect", "Trial fittings are part of the price, never an extra."],
  [Award, "Modern & traditional", "From a slim business suit to a full baraat sherwani — one roof."],
] as const;

export function Why() {
  return (
    <section className="bg-parchment py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-brown">Why choose us</p>
          <h2 className="mt-3 text-[clamp(2.4rem,4.2vw,3.8rem)]">The details <span className="text-gold-grad">others skip.</span></h2>
          <p className="mt-5 text-lg text-muted-foreground">Luxury is not louder fabric. It's the stitch you never notice and the fit you always feel.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {WHY.map(([I, t, d], i) => (
            <li key={t} className="reveal rounded-3xl bg-card p-7 shadow-soft" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="grid size-12 place-items-center rounded-full bg-navy text-gold"><I className="size-5" strokeWidth={1.5} /></span>
              <h3 className="mt-5 text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="bg-ivory py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="reveal relative lg:col-span-5">
          <img src={founder} alt={BIZ.founder} loading="lazy" width={832} height={1040} className="aspect-[4/5] w-full rounded-3xl object-cover" />
          <div className="absolute left-5 top-5 max-w-[60%] rounded-2xl bg-navy/85 px-5 py-3 backdrop-blur">
            <p className="font-display text-xl text-gold">{BIZ.founder}</p>
          </div>
          <span className="absolute bottom-5 right-5 rounded-full bg-navy px-5 py-2 eyebrow text-gold">Founder & CEO</span>
        </div>
        <div className="reveal lg:col-span-7">
          <p className="eyebrow text-brown">A word from the founder</p>
          <blockquote className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-tight">
            “A suit should make a man stand a little straighter. That has been our only measure since 1996.”
          </blockquote>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-8">
            {[["30+", "Years"], ["30,000+", "Clients"], ["15,000+", "Groom outfits"]].map(([n, l]) => (
              <div key={l}><dt className="font-display text-4xl tnum lg:text-5xl">{n}</dt><dd className="mt-1 text-muted-foreground">{l}</dd></div>
            ))}
          </dl>
          <a href={BIZ.wa} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brown px-7 py-4 font-semibold text-on-dark transition-transform hover:-translate-y-0.5">
            <Scissors className="size-4" /> Meet the tailoring team
          </a>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { q: "I love Suiting Club, they know the art of making you look good in your suit.", n: "Shehzad Humayun", s: "Facebook review" },
  { q: "My wedding sherwani fit perfectly at the final trial. Every guest asked where it was made.", n: "Client review", s: "Sample — replace with Google review" },
  { q: "Our team's uniforms arrived on time and every size was right first time.", n: "Corporate client", s: "Sample — replace with Google review" },
];

export function Reviews() {
  return (
    <section className="bg-navy py-20 text-on-dark lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-gold">Client experience</p>
            <h2 className="mt-3 text-[clamp(2.4rem,4.2vw,3.8rem)]">Words from <span className="text-gold-grad">the fitting room.</span></h2>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=Suiting+Club+Tariq+Road+Karachi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-gold">
            <Star className="size-4 fill-current" /> Read Google reviews
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure key={i} className="reveal flex flex-col rounded-3xl border border-line-dark bg-navy-2 p-8" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}</div>
                <Quote className="size-7 text-gold/40" />
              </div>
              <blockquote className="mt-6 flex-1 font-display text-2xl leading-snug">“{r.q}”</blockquote>
              <figcaption className="mt-8 border-t border-line-dark pt-5">
                <p className="font-semibold">{r.n}</p>
                <p className="text-sm text-on-dark-muted">{r.s}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Briefcase, t: "Bespoke suiting", d: "Two and three-piece suits drafted from your own pattern.", img: atelier },
  { icon: Crown, t: "Groom wear", d: "Sherwanis, prince coats and complete wedding wardrobes.", img: sherwani },
  { icon: Shirt, t: "Corporate uniforms", d: "Consistent, branded uniforms for teams of any size.", img: corporate },
  { icon: Sparkles, t: "Waistcoats & layering", d: "Waistcoats to pair with kurta, shalwar kameez or suit.", img: waistcoat },
  { icon: Scissors, t: "Everyday formals", d: "Pant-shirts and traditional wear, tailored for daily wear.", img: pantshirt },
];

export function Services() {
  const [ref, p] = useStickyProgress<HTMLElement>();
  const idx = Math.min(SERVICES.length - 1, Math.floor(p * SERVICES.length));
  return (
    <section id="services" ref={ref} className="relative h-[380vh] bg-ivory">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-6">
            <p className="eyebrow text-brown">Our services</p>
            <h2 className="mt-3 text-[clamp(2.2rem,3.8vw,3.4rem)]">Complete <span className="text-gold-grad">men's wear.</span></h2>
            <p className="mt-3 max-w-md text-muted-foreground">Custom tailoring for every part of a man's wardrobe — from uniforms to the wedding day.</p>
            <ul className="mt-8 grid gap-1">
              {SERVICES.map((s, i) => (
                <li key={s.t} className={`rounded-2xl px-5 py-3.5 transition-all duration-500 ${i === idx ? "bg-navy text-on-dark" : "text-muted-foreground"}`}>
                  <div className="flex items-center gap-4">
                    <s.icon className={`size-5 ${i === idx ? "text-gold" : ""}`} strokeWidth={1.5} />
                    <span className="font-display text-2xl">{s.t}</span>
                  </div>
                  {i === idx && <p className="mt-1 pl-9 text-on-dark-muted animate-in fade-in">{s.d}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden h-[76vh] lg:col-span-6 lg:block">
            {SERVICES.map((s, i) => (
              <img key={s.t} src={s.img} alt={s.t} loading="lazy"
                className={`absolute inset-0 h-full w-full rounded-3xl object-cover object-top transition-all duration-700 ${i === idx ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const rows = [
    [MapPin, "Visit", BIZ.address, BIZ.maps],
    [Phone, "Call or WhatsApp", BIZ.phoneDisplay, BIZ.tel],
    [Mail, "Email", BIZ.email, `mailto:${BIZ.email}`],
  ] as const;
  return (
    <section id="contact" className="bg-navy-2 py-20 text-on-dark lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <p className="eyebrow text-on-dark-muted">Contact</p>
          <h2 className="mt-3 text-[clamp(2.4rem,4.2vw,3.8rem)] text-gold-grad">Visit us on Tariq Road.</h2>
          <ul className="mt-8 grid gap-5">
            {rows.map(([I, l, v, href]) => (
              <li key={l} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold"><I className="size-5" strokeWidth={1.5} /></span>
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-on-dark-muted">{l}</p>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-lg hover:text-gold tnum">{v}</a>
                </div>
              </li>
            ))}
            <li className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold"><Clock className="size-5" strokeWidth={1.5} /></span>
              <dl className="grid flex-1 grid-cols-[auto_1fr] gap-x-6 gap-y-1">
                {BIZ.hours.map(([d, h]) => (<Fragment key={d}><dt className="text-on-dark-muted">{d}</dt><dd className="tnum">{h}</dd></Fragment>))}
              </dl>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BIZ.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy"><Navigation className="size-4" /> Get directions</a>
            <a href={BIZ.tel} className="inline-flex items-center gap-2 rounded-full border border-line-dark px-6 py-3.5 hover:border-gold"><Phone className="size-4" /> Call now</a>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-3xl bg-ivory p-8 text-foreground lg:col-span-7 lg:p-10">
          <h3 className="text-3xl">Book a consultation</h3>
          <p className="mt-1 text-muted-foreground">We reply on WhatsApp within working hours.</p>
          {sent ? (
            <p className="mt-8 rounded-2xl bg-parchment p-6 text-lg">Thank you — we'll be in touch shortly.</p>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[["Name", "text", "name"], ["Phone", "tel", "phone"], ["Email", "email", "email"], ["Occasion", "text", "occasion"]].map(([l, t, n]) => (
                <label key={n} className="grid gap-1.5 text-sm font-medium">{l}
                  <input required={n !== "occasion"} type={t} name={n} className="rounded-xl border border-input bg-card px-4 py-3.5 text-base outline-none focus:border-gold" />
                </label>
              ))}
              <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">Message
                <textarea name="message" rows={4} className="rounded-xl border border-input bg-card px-4 py-3.5 text-base outline-none focus:border-gold" />
              </label>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 font-semibold text-on-dark sm:col-span-2"><Send className="size-4" /> Send enquiry</button>
            </div>
          )}
        </form>
      </div>
      <div className="mx-auto mt-14 max-w-7xl px-6 lg:px-10">
        <iframe title="Suiting Club location" src={BIZ.mapEmbed} loading="lazy" className="h-[340px] w-full rounded-3xl border-0 grayscale" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy py-12 text-on-dark">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 lg:px-10">
        <div>
          <p className="font-display text-3xl">Suiting <span className="text-gold">Club</span></p>
          <p className="mt-1 text-on-dark-muted">Bespoke men's tailoring · Karachi · Since 1996</p>
        </div>
        <Socials className="flex" />
        <p className="w-full border-t border-line-dark pt-6 text-[0.95rem] text-on-dark-muted">© {new Date().getFullYear()} Suiting Club. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function Floating() {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!open) return; const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, [open]);
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a href="#top" aria-label="Back to top" className={`grid size-12 place-items-center rounded-full border border-gold/60 bg-navy text-gold shadow-soft transition-all ${y > 600 ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}><ArrowUp className="size-5" /></a>
        <button onClick={() => setOpen(true)} aria-label="Chat on WhatsApp" className="grid size-14 place-items-center rounded-full bg-whatsapp text-on-dark shadow-soft transition-transform hover:scale-105"><WhatsappIcon className="size-7" /></button>
      </div>
      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-end bg-navy/50 p-6 backdrop-blur-sm sm:place-items-center" onClick={() => setOpen(false)}>
          <div className="w-full max-w-sm rounded-3xl bg-ivory p-7 shadow-soft" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <span className="grid size-12 place-items-center rounded-full bg-whatsapp text-on-dark"><WhatsappIcon className="size-6" /></span>
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="size-5" /></button>
            </div>
            <h3 className="mt-4 text-2xl">Ask about tailoring</h3>
            <p className="mt-1 text-muted-foreground">Chat directly with the Suiting Club team about fittings, fabrics or wedding orders.</p>
            <a href={`${BIZ.wa}?text=${encodeURIComponent("Hello Suiting Club, I'd like to book a fitting.")}`} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-on-dark">
              <WhatsappIcon className="size-5" /> Start WhatsApp chat
            </a>
          </div>
        </div>
      )}
    </>
  );
}
