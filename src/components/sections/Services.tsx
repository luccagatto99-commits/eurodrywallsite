import Image from "next/image";

const services = [
  {
    title: "Paredes em Drywall",
    description:
      "Divisórias internas, paredes externas, sistemas acústicos e resistentes ao fogo. Especificamos o perfil correto para cada carga e uso, sem drywall genérico.",
    image: "/images/drywall.png",
  },
  {
    title: "Forros Drywall e Modular",
    description:
      "Forro em drywall convencional, gesso acartonado com recorte acústico para espaços comerciais exigentes. Instalação nivelada com régua a laser.",
    image: "/images/ceiling.png",
  },
  {
    title: "Steel Frame",
    description:
      "Estrutura leve em aço galvanizado para construção residencial e comercial. Obra limpa, sem entulho, cronograma previsível e desempenho térmico calculável.",
    image: "/images/steelframe.png",
  },
];

export function Services() {
  return (
    <section className="bg-primary py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-3 block">
              Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              O que a EuroDrywall executa
            </h2>
          </div>
          <p className="text-secondary/70 text-base max-w-sm lg:text-right">
            Material certificado, equipe treinada pelo fabricante,
            especificação técnica entregue junto com o orçamento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-sm overflow-hidden border border-white/10 hover:border-accent/60 transition-colors duration-300"
              style={{ background: "oklch(0.22 0.058 222)" }}
            >
              {/* Área de foto */}
              <div className="aspect-[4/3] relative overflow-hidden flex items-end p-5"
                style={{ background: "oklch(0.19 0.052 222)" }}>
                
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradiente de overlay na parte inferior */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10"
                  style={{ background: "linear-gradient(to top, oklch(0.22 0.058 222), transparent)" }}
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-secondary/70 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
