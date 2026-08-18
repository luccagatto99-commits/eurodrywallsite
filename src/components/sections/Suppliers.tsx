"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const suppliers = [
  { name: "Knauf", logo: "/images/knauflogo.png" },
  { name: "Knauf Ceiling Solutions", logo: "/images/knaufceilingsolutions.png" },
  { name: "Knauf Aquapanel", logo: "/images/knaufaquapanel.png" },
  { name: "Ananda Aços", logo: "/images/anandalogo.png" },
  { name: "Saint-Gobain", logo: "/images/saintgobain.jpg" },
  { name: "Brasilit", logo: "/images/brasilit.jpg" },
  { name: "Ecophon", logo: "/images/ecophon.jpg" },
  { name: "Adfors", logo: "/images/adfors.jpg" },
  { name: "Hunter Douglas", logo: "/images/hunterdouglas.png" },
];

function PartnerCard({ s }: { s: (typeof suppliers)[number] }) {
  return (
    <div
      className="group relative bg-white border border-border/80 rounded-xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-accent/50 flex items-center justify-center w-[220px] sm:w-[260px] h-[110px] sm:h-[120px] shrink-0 overflow-hidden"
    >
      <div className="relative w-full h-full min-h-[55px] opacity-75 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105">
        <Image 
          src={s.logo} 
          alt={`Logo ${s.name}`} 
          fill
          className="object-contain" 
        />
      </div>

      {/* Glowing bottom line effect */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent/0 group-hover:bg-accent transition-colors duration-500"></div>
    </div>
  );
}

export function Suppliers() {
  return (
    <section className="bg-muted py-24 relative overflow-hidden">
      {/* Decorative gradient background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
              Fornecedores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-heading">
              Nossos Parceiros
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm md:text-right">
            Para engenheiros e arquitetos: trabalhamos exclusivamente com
            fabricantes líderes de mercado. O laudo de desempenho que você
            precisa na especificação, a gente entrega na obra.
          </p>
        </div>
      </div>

      {/* Infinite Rolling Rows */}
      <div className="relative flex flex-col gap-4 overflow-hidden">
        {/* Top Row — Scrolling Right */}
        <Marquee reverse pauseOnHover repeat={4} className="[--duration:28s] [--gap:1.25rem]">
          {suppliers.map((s, idx) => (
            <PartnerCard key={`top-${s.name}-${idx}`} s={s} />
          ))}
        </Marquee>

        {/* Bottom Row — Scrolling Left */}
        <Marquee pauseOnHover repeat={4} className="[--duration:28s] [--gap:1.25rem]">
          {suppliers.map((s, idx) => (
            <PartnerCard key={`bottom-${s.name}-${idx}`} s={s} />
          ))}
        </Marquee>

        {/* Side Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-muted to-transparent z-10" />
      </div>
    </section>
  );
}
