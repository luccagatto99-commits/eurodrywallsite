"use client";

import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  {
    value: 200,
    suffix: "+",
    label: "obras entregues",
    detail: "em Uberlândia e região",
  },
  {
    value: 12,
    suffix: "",
    label: "anos no mercado",
    detail: "fundada em 2012, operação contínua",
  },
  {
    value: 6,
    suffix: "",
    label: "cidades atendidas",
    detail: "UDI, Uberaba, Araguari, Araxá, Patrocínio e região",
  },

];

export function Stats() {
  return (
    <section className="bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-8 py-14 flex flex-col items-start relative overflow-hidden group"
            >
              {/* Número grande decorativo de fundo */}
              <span
                aria-hidden
                className="absolute -top-4 -right-2 text-[7rem] font-bold text-white/[0.04] leading-none select-none pointer-events-none tabular-nums"
              >
                {stat.value === 0 ? "0" : stat.value}
              </span>

              <div className="flex items-end gap-1 mb-3">
                <NumberTicker
                  value={stat.value}
                  className="text-6xl font-bold text-white tabular-nums leading-none"
                />
                {stat.suffix && (
                  <span className="text-3xl font-bold text-white/60 mb-1">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-1.5">
                {stat.label}
              </p>
              <p className="text-secondary/60 text-xs leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
