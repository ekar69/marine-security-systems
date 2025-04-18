
import React from "react";
import SecuritySystemCard from "@/components/SecuritySystemCard";
import { 
  Radar, 
  Navigation, 
  Video, 
  Moon, 
  Radio, 
  Satellite, 
  Server,
  Bell, 
  Megaphone, 
  Cloud, 
  Lightbulb,
  Volume2
} from "lucide-react";

const SecuritySystems = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Ключевые элементы информационных систем безопасности</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Комплексная защита морских судов в Карибском море обеспечивается интеграцией 
        современных технологий мониторинга, наблюдения, связи и оповещения
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <SecuritySystemCard 
          title="Системы мониторинга и отслеживания" 
          description="Обеспечивают непрерывный контроль за местоположением и движением судов"
          items={[
            { icon: <Radar className="h-5 w-5" />, text: "Автоматическая идентификационная система (AIS)" },
            { icon: <Navigation className="h-5 w-5" />, text: "Глобальная навигационная спутниковая система (GNSS)" }
          ]}
          href="/monitoring"
        />
        
        <SecuritySystemCard 
          title="Камеры видеонаблюдения" 
          description="Круглосуточное визуальное наблюдение за обстановкой на судне и вокруг него"
          items={[
            { icon: <Video className="h-5 w-5" />, text: "Аналоговые и цифровые камеры высокого разрешения" },
            { icon: <Moon className="h-5 w-5" />, text: "Камеры с ночным видением" }
          ]}
          href="/surveillance"
        />
        
        <SecuritySystemCard 
          title="Системы связи" 
          description="Надежные каналы коммуникации в любых условиях Карибского моря"
          items={[
            { icon: <Satellite className="h-5 w-5" />, text: "Спутниковая связь" },
            { icon: <Radio className="h-5 w-5" />, text: "Радиосвязь" },
            { icon: <Server className="h-5 w-5" />, text: "Управляющие системы связи" }
          ]}
          href="/communication"
        />
        
        <SecuritySystemCard 
          title="Системы оповещения" 
          description="Своевременное информирование экипажа и береговых служб о потенциальных угрозах"
          items={[
            { icon: <Bell className="h-5 w-5" />, text: "Автоматизированные системы оповещения" },
            { icon: <Megaphone className="h-5 w-5" />, text: "Системы диспетчеризации" }
          ]}
          href="/alert"
        />
        
        <SecuritySystemCard 
          title="Системы активной защиты" 
          description="Активное противодействие внешним угрозам для защиты судна и экипажа"
          items={[
            { icon: <Cloud className="h-5 w-5" />, text: "Дымовые генераторы" },
            { icon: <Lightbulb className="h-5 w-5" />, text: "Световые сигнализации и лазеры" },
            { icon: <Volume2 className="h-5 w-5" />, text: "Звуковые системы" }
          ]}
          href="/protection"
        />
      </div>
    </section>
  );
};

export default SecuritySystems;
