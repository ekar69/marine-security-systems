
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, Ship, Navigation } from "lucide-react";

const Monitoring = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Системы мониторинга</h1>
      <p className="text-lg mb-8">
        Наши современные системы мониторинга обеспечивают непрерывное отслеживание судов 
        и повышают безопасность морских операций.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Radar className="h-6 w-6" />
              AIS системы
            </CardTitle>
            <CardDescription>Автоматическая идентификационная система</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              AIS системы позволяют отслеживать местоположение судов в реальном времени, 
              предоставляя данные о курсе, скорости и других важных параметрах для 
              предотвращения столкновений.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-6 w-6" />
              GNSS системы
            </CardTitle>
            <CardDescription>Глобальная навигационная спутниковая система</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              GNSS технологии обеспечивают точное определение местоположения судов в любой 
              точке мирового океана, предоставляя навигационную информацию высокой точности.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ship className="h-6 w-6" />
              VMS системы
            </CardTitle>
            <CardDescription>Система мониторинга судов</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              VMS системы предназначены для контроля перемещений промысловых судов, 
              обеспечивая соблюдение правил рыболовства и повышая эффективность управления 
              морскими ресурсами.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">Преимущества наших систем мониторинга</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Непрерывная работа 24/7 с высокой надежностью</li>
        <li>Интеграция с другими системами безопасности</li>
        <li>Автоматическое оповещение о нестандартных ситуациях</li>
        <li>Удобный доступ к данным через веб-интерфейс и мобильные приложения</li>
        <li>Соответствие международным стандартам морской безопасности</li>
      </ul>
    </div>
  );
};

export default Monitoring;
