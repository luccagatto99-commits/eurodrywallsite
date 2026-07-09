import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const clients = [
  "Coca-Cola",
  "Unimed",
  "UMC — Uberlândia Medical Center",
  "Hospital do Câncer",
  "SICOOB",
  "Check-Up Medicina",
  "IMEPAC Araguari",
  "DMAE",
  "Rummo Empreendimentos",
  "Construtora Altti",
  "Conel Construtora",
  "Eurolatino",
  "Maxi Incorporadora",
  "Secol Engenharia",
];

function ClientPill({ name }: { name: string }) {
  return (
    <span
      className={cn(
        "mx-6 text-sm font-medium tracking-wide text-primary-foreground/70 whitespace-nowrap",
        "border-l border-primary-foreground/20 pl-6 first:border-l-0 first:pl-0"
      )}
    >
      {name}
    </span>
  );
}

export function TrustBar() {
  return (
    <section className="bg-primary py-5 overflow-hidden">
      <p className="text-center text-xs tracking-widest uppercase text-secondary mb-4 px-4">
        Construtoras, hospitais e grandes marcas que confiam na EuroDrywall
      </p>
      <Marquee pauseOnHover className="[--duration:40s] [--gap:0px]">
        {clients.map((name) => (
          <ClientPill key={name} name={name} />
        ))}
      </Marquee>
    </section>
  );
}
