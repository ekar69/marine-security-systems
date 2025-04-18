
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Camera, Moon, Eye, Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Surveillance = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Камеры видеонаблюдения</h1>
        <p className="text-lg mb-6">
          Современные системы видеонаблюдения являются критически важным элементом обеспечения 
          безопасности морских судов в Карибском море, обеспечивая круглосуточный мониторинг 
          обстановки на судне и прилегающей акватории.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Camera className="h-6 w-6 text-primary" />
              <CardTitle>Аналоговые и цифровые камеры</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Современные суда оснащаются высокотехнологичными камерами наблюдения, 
              способными функционировать в сложных морских условиях Карибского моря.
            </p>
            <h3 className="font-medium text-lg mb-3">Особенности камер для морских судов:</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Защита от солевой коррозии и высокой влажности</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Стабилизация изображения при качке судна</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Высокое разрешение для детального мониторинга</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Устойчивость к экстремальным температурам</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Широкий угол обзора для максимального охвата</span>
              </li>
            </ul>
            <p>
              Цифровые IP-камеры последнего поколения обеспечивают передачу видеопотока высокого разрешения 
              через судовую сеть с возможностью удаленного доступа.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Moon className="h-6 w-6 text-primary" />
              <CardTitle>Камеры с ночным видением</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Ночное время в Карибском море требует особого подхода к видеонаблюдению. 
              Специализированные камеры обеспечивают четкое изображение даже в условиях 
              полной темноты.
            </p>
            <h3 className="font-medium text-lg mb-3">Технологии ночного видения:</h3>
            <div className="space-y-4 mb-4">
              <div>
                <h4 className="font-medium">Инфракрасное освещение</h4>
                <p className="text-sm text-muted-foreground">
                  Встроенные ИК-подсветки обеспечивают видимость до 100 метров в полной темноте, 
                  что идеально для мониторинга палубы и ближайшей акватории.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Тепловизионные камеры</h4>
                <p className="text-sm text-muted-foreground">
                  Определяют тепловое излучение объектов и позволяют обнаруживать людей и суда на 
                  значительном расстоянии независимо от условий освещения.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Усилители остаточного света</h4>
                <p className="text-sm text-muted-foreground">
                  Технология, многократно усиливающая имеющийся свет (звезды, луна), обеспечивая 
                  качественное изображение при минимальном освещении.
                </p>
              </div>
            </div>
            <p>
              Комбинирование различных технологий ночного видения обеспечивает 
              круглосуточный мониторинг безопасности в акватории Карибского моря.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6">Оптимальное размещение камер на судне</h2>
        
        <div className="bg-muted p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Внешний периметр</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-primary mt-1" />
                  <span>Носовая часть судна</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-primary mt-1" />
                  <span>Кормовая часть</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-primary mt-1" />
                  <span>Оба борта по всей длине</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-primary mt-1" />
                  <span>Зоны якорных устройств</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-primary mt-1" />
                  <span>Мостик и верхняя палуба</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Внутренние помещения</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-primary mt-1" />
                  <span>Входы и выходы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-primary mt-1" />
                  <span>Машинное отделение</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-primary mt-1" />
                  <span>Грузовые помещения</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-primary mt-1" />
                  <span>Пассажирские зоны (для круизных судов)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="h-4 w-4 text-primary mt-1" />
                  <span>Общественные помещения</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Функциональные возможности современных систем видеонаблюдения</h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Video className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Видеоаналитика</h3>
              <p className="text-muted-foreground">
                Современные системы оснащены программным обеспечением, способным автоматически 
                распознавать подозрительные действия, проникновения на судно, оставленные 
                предметы и другие потенциальные угрозы.
              </p>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Интеграция с другими системами безопасности</h3>
              <p className="text-muted-foreground">
                Видеонаблюдение интегрируется с системами контроля доступа, пожарной сигнализацией 
                и другими элементами безопасности, создавая комплексную защиту судна.
              </p>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Camera className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Удаленный доступ и мониторинг</h3>
              <p className="text-muted-foreground">
                Возможность просмотра видеопотока с любой камеры через спутниковый интернет 
                позволяет судовладельцам и службам безопасности контролировать ситуацию на 
                судне из любой точки мира.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">Рекомендации по использованию систем видеонаблюдения в Карибском море</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="font-bold text-primary">01.</div>
              <p>
                Размещайте камеры с учетом возможного воздействия соленой воды и высокой влажности, 
                характерных для Карибского региона
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="font-bold text-primary">02.</div>
              <p>
                Используйте тепловизионные камеры для обнаружения приближающихся судов в ночное время 
                и в условиях тропических ливней
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="font-bold text-primary">03.</div>
              <p>
                Обеспечьте резервное питание и хранение данных для непрерывной работы системы видеонаблюдения 
                даже в случае отключения основного электропитания
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Surveillance;
