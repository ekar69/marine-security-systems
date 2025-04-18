
import SecuritySystemCard from "@/components/SecuritySystemCard";
import { Radar, Radio, Camera, Bell, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const SecuritySystems = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ключевые элементы информационных систем безопасности</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Современные технологии обеспечения безопасности морских судов в Карибском море
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/monitoring" className="no-underline text-foreground">
            <SecuritySystemCard
              title="Системы мониторинга"
              description="Автоматическая идентификационная система (AIS) и глобальная навигационная спутниковая система (GNSS)"
              icon={<Radar className="h-6 w-6 text-primary" />}
            />
          </Link>

          <Link to="/surveillance" className="no-underline text-foreground">
            <SecuritySystemCard
              title="Видеонаблюдение"
              description="Аналоговые и цифровые камеры, системы высокого разрешения и с ночным видением"
              icon={<Camera className="h-6 w-6 text-primary" />}
            />
          </Link>

          <Link to="/communication" className="no-underline text-foreground">
            <SecuritySystemCard
              title="Системы связи"
              description="Спутниковая связь, радиосвязь и управляющие системы коммуникаций"
              icon={<Radio className="h-6 w-6 text-primary" />}
            />
          </Link>

          <Link to="/alert" className="no-underline text-foreground">
            <SecuritySystemCard
              title="Системы оповещения"
              description="Автоматизированные системы оповещения и системы диспетчеризации"
              icon={<Bell className="h-6 w-6 text-primary" />}
            />
          </Link>

          <Link to="/protection" className="no-underline text-foreground">
            <SecuritySystemCard
              title="Системы активной защиты"
              description="Дымовые генераторы, световые сигнализации, лазеры и звуковые системы"
              icon={<Shield className="h-6 w-6 text-primary" />}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecuritySystems;
