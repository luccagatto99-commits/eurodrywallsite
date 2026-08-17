import Link from "next/link";

const WA_LINK =
  "https://wa.me/553432224654?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+um+or%C3%A7amento+para+minha+obra";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-stretch overflow-hidden">
      {/* Coluna esquerda — conteúdo */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 bg-primary px-8 py-20 lg:px-16 xl:px-24">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-secondary mb-8 border border-secondary/40 w-fit px-3 py-1.5 rounded-sm">
          Uberlândia · 12 anos · 200+ obras
        </span>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold uppercase text-white leading-[1.08] mb-6">

          <span className="block mt-2">
            Construindo ambientes com{" "}
            <span className="text-accent">tecnologia, qualidade e compromisso.</span>
          </span>
        </h1>

        <p className="text-secondary text-lg leading-relaxed mb-10 max-w-md">
          A EuroDrywall entrega soluções completas em sistemas de construção a seco, combinando rigor técnico, equipe própria altamente qualificada e pontualidade. Executamos obras nos setores comercial, saúde, corporativo e residencial de alto padrão.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(178,204,234,0.3)] text-base overflow-hidden z-10"
          >
            {/* Button Highlight Effect */}
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            
            <WhatsAppIcon className="w-5 h-5 shrink-0 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Pedir orçamento pelo WhatsApp</span>
          </Link>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-secondary/50 text-secondary hover:text-white hover:border-white px-8 py-4 rounded-sm transition-colors text-base font-medium"
          >
            Ver portfólio
          </a>
        </div>


      </div>

      {/* Coluna direita — foto real de obra (steel frame) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fotoinicial2.jpeg"
          alt="Obra executada pela EuroDrywall"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Tom navy sobre a foto para harmonizar com a paleta da marca */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-primary/30" />
        {/* Fusão suave com a coluna de texto à esquerda (dissolve a borda dura) */}
        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
        {/* Leve profundidade no rodapé */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "w-5 h-5 shrink-0"}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
