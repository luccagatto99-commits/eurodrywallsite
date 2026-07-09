"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const WA_LINK =
  "https://wa.me/5534999999999?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+um+or%C3%A7amento+para+minha+obra";

export function FinalCTA() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative bg-primary py-32 px-6 overflow-hidden">
      {/* Interactive Background Glow - only render on client to avoid hydration mismatch */}
      {isMounted && (
        <div 
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
          }}
        />
      )}
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E\")" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-heading tracking-tight">
          Vamos construir o seu próximo projeto juntos?
        </h2>
        <p className="text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Nossa equipe técnica especializada está pronta para analisar sua planta e entregar a melhor solução em Drywall e Steel Frame com excelência e precisão.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(178,204,234,0.3)] text-lg overflow-hidden"
          >
            {/* Button Highlight Effect */}
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            
            <WhatsAppIcon className="w-6 h-6 shrink-0 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Falar com nossa equipe</span>
          </Link>
          
          <Link
            href="mailto:contato@eurodrywall.com.br"
            className="group inline-flex items-center justify-center gap-2 text-white/80 hover:text-white font-medium px-8 py-5 transition-all duration-300"
          >
            <span className="border-b border-transparent group-hover:border-white/50 pb-0.5 transition-colors">
              Enviar projeto por e-mail
            </span>
          </Link>
        </div>
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
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
