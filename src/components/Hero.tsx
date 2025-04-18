
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, Ship, Navigation } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Информационные системы безопасности морских судов в Карибском море
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Комплексные решения для мониторинга, защиты и обеспечения безопасности судов 
              в условиях Карибского бассейна
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/monitoring">Изучить системы мониторинга</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/contact">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Комплексная защита</h3>
            <p className="text-muted-foreground">
              Многоуровневые системы безопасности, адаптированные для сложных условий Карибского моря
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Ship className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Специализированные решения</h3>
            <p className="text-muted-foreground">
              Системы, созданные с учетом уникальных особенностей навигации в Карибском регионе
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Navigation className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Передовые технологии</h3>
            <p className="text-muted-foreground">
              Интеграция современных информационных систем для максимальной эффективности и надежности
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
