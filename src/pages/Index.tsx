
import Hero from "@/components/Hero";
import SecuritySystems from "@/components/SecuritySystems";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SecuritySystems />
      
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Безопасность судов в Карибском море</h2>
            <p className="mb-4 text-muted-foreground">
              Карибское море представляет собой уникальную среду с особыми требованиями к безопасности морских судов. Современные информационные системы играют ключевую роль в обеспечении навигационной безопасности, защите от пиратства и природных угроз.
            </p>
            <p className="mb-6 text-muted-foreground">
              Наш проект предоставляет исчерпывающую информацию о современных технологиях и системах, используемых для защиты морских судов в этом регионе.
            </p>
            <Button asChild>
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
          <div className="bg-accent rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Ключевые преимущества современных систем безопасности:</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Круглосуточный мониторинг судов
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Оперативное оповещение об угрозах
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Интеграция с глобальными навигационными системами
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Защита от пиратских нападений
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Устойчивость к экстремальным погодным условиям
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
