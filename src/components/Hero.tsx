
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-[url('/placeholder.svg')] bg-cover bg-center h-[500px] relative">
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Информационные системы обеспечения безопасности морских судов
              </h1>
              <p className="text-lg mb-8">
                Современные решения для защиты и мониторинга судов в Карибском море
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/monitoring">Исследовать системы</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/contact">Связаться с нами</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
