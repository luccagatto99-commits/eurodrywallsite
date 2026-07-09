import { Marquee } from "@/components/ui/marquee";

/* Fotos reais extraídas da apresentação institucional (public/obras/).
   Curadoria alternando categorias para variedade visual no slider. */
const works: { name: string; local: string; image: string }[] = [
  { name: "Pátio Sabiá", local: "Comercial · Uberlândia", image: "/obras/patio-sabia.png" },
  { name: "Complexo Hospitalar UMC", local: "Saúde · Uberlândia", image: "/obras/complexo-umc.jpeg" },
  { name: "Lídice Premium", local: "Residencial · Uberlândia", image: "/obras/lidice-premium.jpeg" },
  { name: "Inovatti Center", local: "Corporativo · Uberlândia", image: "/obras/inovatti-center.png" },
  { name: "Pátio Vinhedos", local: "Comercial · Uberlândia", image: "/obras/patio-vinhedos.png" },
  { name: "DMAE", local: "Corporativo · Uberlândia", image: "/obras/dmae.png" },
  { name: "Hospital do Câncer", local: "Saúde · Uberlândia", image: "/obras/hospital-do-cancer.jpeg" },
  { name: "Corporativo Vinhedos", local: "Corporativo · Uberlândia", image: "/obras/corporativo-vinhedos.jpeg" },
  { name: "Villagio Liberdade", local: "Residencial · Uberlândia", image: "/obras/villagio-liberdade.jpeg" },
  { name: "SICOOB Campos Altos", local: "Comercial · Campos Altos/MG", image: "/obras/sicoob-campos-altos.png" },
  { name: "IMEPAC Araguari", local: "Saúde · Araguari/MG", image: "/obras/imepac-araguari.jpeg" },
  { name: "Casa de Campo", local: "Steel Frame", image: "/obras/casa-de-campo.jpeg" },
  { name: "Check-Up Matriz", local: "Saúde · Uberlândia", image: "/obras/check-up-matriz.png" },
  { name: "Zona Sul Hotéis", local: "Comercial · Uberlândia", image: "/obras/zona-sul-hoteis.jpeg" },
  { name: "Trio Residence", local: "Residencial · Uberlândia", image: "/obras/trio-residence.jpeg" },
  { name: "SICOOB Patrocínio", local: "Comercial · Patrocínio/MG", image: "/obras/sicoob-patrocinio.png" },
  { name: "Coca-Cola Uberaba", local: "Steel Frame · Uberaba/MG", image: "/obras/coca-cola-uberaba.jpeg" },
  { name: "Citadela 57", local: "Corporativo · Uberlândia", image: "/obras/citadela-57.png" },
];

function WorkCard({ name, local, image }: (typeof works)[number]) {
  return (
    <figure className="relative w-72 sm:w-80 aspect-[4/3] shrink-0 overflow-hidden rounded-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay para leitura do texto */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/95 to-transparent" />

      <figcaption className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-semibold text-white leading-tight">{name}</p>
        <p className="text-xs text-secondary/90 mt-0.5">{local}</p>
      </figcaption>
    </figure>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <span className="text-xs font-medium tracking-widest uppercase text-accent mb-2 block">
          Portfólio
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Obras que você pode visitar
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Projetos reais executados pela EuroDrywall em Uberlândia e região
        </p>
      </div>

      {/* Slider contínuo — pausa ao passar o mouse */}
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:60s] [--gap:1rem]">
          {works.map((work) => (
            <WorkCard key={work.name} {...work} />
          ))}
        </Marquee>

        {/* Máscaras nas bordas para o slider "sumir" suavemente */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
