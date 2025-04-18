
import React from "react";
import Hero from "@/components/Hero";
import SecuritySystems from "@/components/SecuritySystems";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Anchor, Map, Shield } from "lucide-react";

const Index = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Особенности морской безопасности в Карибском море</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Anchor className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Климатические условия</CardTitle>
                <CardDescription>Адаптация к тропическому климату</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Особые условия тропического климата Карибского моря требуют специализированных 
                  систем, устойчивых к высокой влажности, штормам и ураганам, характерным для этого региона.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Map className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Географические особенности</CardTitle>
                <CardDescription>Навигация среди множества островов</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Сложная навигация между многочисленными островами, рифами и отмелями 
                  требует точных систем позиционирования и навигации для обеспечения безопасности.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Безопасность на воде</CardTitle>
                <CardDescription>Защита от региональных угроз</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Информационные системы адаптированы для защиты от специфических угроз региона, 
                  включая природные катаклизмы, навигационные опасности и человеческий фактор.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <SecuritySystems />
      
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Преимущества комплексного подхода</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Интеграция систем безопасности</h3>
            <p className="mb-4">
              Объединение всех систем безопасности в единый комплекс позволяет достичь максимальной 
              эффективности защиты морских судов. Наша платформа обеспечивает централизованное 
              управление и мониторинг всех компонентов безопасности.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Единая консоль управления всеми системами</li>
              <li>Автоматизированные сценарии реагирования</li>
              <li>Комплексный анализ данных со всех источников</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Соответствие международным стандартам</h3>
            <p className="mb-4">
              Все наши системы разработаны в соответствии с международными стандартами безопасности 
              морских перевозок и учитывают специфические требования к судоходству в Карибском море.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Соответствие требованиям IMO (International Maritime Organization)</li>
              <li>Сертификация по стандартам ISO для морской безопасности</li>
              <li>Регулярные обновления в соответствии с изменениями нормативов</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
