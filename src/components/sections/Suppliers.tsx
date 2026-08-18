"use client";

import Image from "next/image";

const suppliers = [
  { name: "Knauf", logo: "/images/knauflogo.png" },
  { name: "Knauf Ceiling Solutions", logo: "/images/knaufceilingsolutions.png" },
  { name: "Knauf Aquapanel", logo: "/images/knaufaquapanel.png" },
  { name: "Ananda Aços", logo: "/images/anandalogo.png" },
  { name: "Hunter Douglas", logo: "/images/hunterdouglas.png" },
];

export function Suppliers() {
  return (
    <section className="bg-muted py-20 relative overflow-hidden">
      {/* Decorative gradient background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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

        {/* Elegant Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {suppliers.map((s) => (
            <div
              key={s.name}
              className="group relative bg-white border border-border/80 rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-accent/40 flex items-center justify-center min-h-[120px] overflow-hidden"
            >
              <div className="relative w-full h-full min-h-[60px] opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105">
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
          ))}
        </div>
      </div>
    </section>
  );
}
