import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Suppliers } from "@/components/sections/Suppliers";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <Services />
      <Portfolio />
      <Suppliers />
      <FinalCTA />

      {/* Sticky WhatsApp — visível só em mobile */}
      <WhatsAppButton />

      <footer className="bg-primary border-t border-primary-foreground/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white font-semibold text-sm">EuroDrywall</p>
            <p className="text-secondary/70 text-xs mt-0.5">
              Drywall e Steel Frame · Uberlândia/MG
            </p>
          </div>
          <p className="text-secondary/50 text-xs">
            © {new Date().getFullYear()} EuroDrywall. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
