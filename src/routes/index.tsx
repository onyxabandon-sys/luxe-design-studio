import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero, StatsRail } from "@/components/site/Top";
import { Heritage, Collection, Occasion, Corporate, Clients } from "@/components/site/Middle";
import { Why, Founder, Reviews, Services, Contact, Footer, Floating } from "@/components/site/Bottom";
import { useRevealAll } from "@/components/site/hooks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suiting Club — Bespoke Men's Tailoring in Karachi since 1996" },
      { name: "description", content: "Bespoke suits, sherwanis, prince coats and corporate uniforms, hand-tailored on Tariq Road, Karachi since 1996." },
      { property: "og:title", content: "Suiting Club — Bespoke Men's Tailoring, Karachi" },
      { property: "og:description", content: "Groom wear, bespoke suiting and corporate uniforms. 30,000+ clients since 1996." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealAll();
  return (
    <main>
      <Header />
      <Hero />
      <StatsRail />
      <Heritage />
      <Collection />
      <Occasion />
      <Corporate />
      <Clients />
      <Why />
      <Founder />
      <Reviews />
      <Services />
      <Contact />
      <Footer />
      <Floating />
    </main>
  );
}
