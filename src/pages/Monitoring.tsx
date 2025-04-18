
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, Navigation, Ship, AlertCircle, Anchor } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Monitoring = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Системы мониторинга и отслеживания</h1>
        <p className="text-lg mb-6">
          Современные системы мониторинга обеспечивают непрерывное отслеживание судов 
          в Карибском море, предоставляя точную информацию о местоположении, курсе и скорости 
          для повышения безопасности морских операций.
        </p>
        <div className="flex items-center p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <AlertCircle className="text-amber-500 h-6 w-6 mr-3 flex-shrink-0" />
          <p className="text-sm text-amber-700">
            Карибское море включает множество островов и сложных навигационных маршрутов, 
            что делает системы мониторинга критически важными для предотвращения происшествий 
            и обеспечения безопасности навигации.
          </p>
        </div>
      </div>

      <Tabs defaultValue="ais" className="max-w-4xl mx-auto mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ais">Автоматическая идентификационная система (AIS)</TabsTrigger>
          <TabsTrigger value="gnss">Глобальная навигационная спутниковая система (GNSS)</TabsTrigger>
        </TabsList>
        <TabsContent value="ais" className="p-4 bg-background rounded-b-lg border border-t-0">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">AIS системы</h3>
              <p className="mb-4">
                Автоматическая идентификационная система (AIS) - это система отслеживания судов, используемая 
                в морской навигации для идентификации и определения местоположения судов.
              </p>
              <h4 className="font-medium text-lg mb-2">Функции AIS в Карибском море:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Передача информации о местоположении, курсе и скорости судна</li>
                <li>Идентификация судов в условиях ограниченной видимости</li>
                <li>Предотвращение столкновений в оживленных судоходных маршрутах</li>
                <li>Обеспечение безопасности при навигации вблизи портов и островов</li>
                <li>Мониторинг движения судов в режиме реального времени</li>
              </ul>
              <p>
                AIS системы особенно важны в акватории Карибского моря из-за интенсивного движения 
                туристических и торговых судов, а также сложной навигационной обстановки среди многочисленных островов.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="bg-primary/10 p-6 rounded-full mb-4">
                <Radar className="h-20 w-20 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Радиус действия AIS: до 20 морских миль
                </p>
                <p className="text-sm text-muted-foreground">
                  Частота обновления данных: каждые 2-10 секунд
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="gnss" className="p-4 bg-background rounded-b-lg border border-t-0">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">GNSS системы</h3>
              <p className="mb-4">
                Глобальная навигационная спутниковая система (GNSS) обеспечивает точное определение 
                координат судна в любой точке Карибского моря с помощью сети спутников.
              </p>
              <h4 className="font-medium text-lg mb-2">Преимущества GNSS в морской навигации:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Высокая точность позиционирования (до нескольких метров)</li>
                <li>Непрерывная работа в любых погодных условиях</li>
                <li>Интеграция с электронными картографическими системами</li>
                <li>Планирование маршрутов с учетом навигационных опасностей</li>
                <li>Автоматическое отслеживание отклонений от курса</li>
              </ul>
              <p>
                В условиях Карибского моря GNSS системы помогают судам безопасно перемещаться 
                между многочисленными островами, рифами и мелководьями, обеспечивая высокоточную навигацию.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="bg-primary/10 p-6 rounded-full mb-4">
                <Navigation className="h-20 w-20 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Точность определения координат: 1-3 метра
                </p>
                <p className="text-sm text-muted-foreground">
                  Доступность: 24/7 в любой точке мирового океана
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Особенности применения систем мониторинга в Карибском море</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Anchor className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Тропические штормы</CardTitle>
              <CardDescription>Надежность в экстремальных условиях</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Системы мониторинга адаптированы для работы в условиях штормов и ураганов, 
                часто возникающих в Карибском море, обеспечивая непрерывное функционирование.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Ship className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Круизное судоходство</CardTitle>
              <CardDescription>Мониторинг пассажирских судов</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Повышенные требования к системам мониторинга круизных лайнеров для обеспечения 
                безопасности тысяч пассажиров и предупреждения чрезвычайных ситуаций.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Navigation className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Мелководные зоны</CardTitle>
              <CardDescription>Навигация в сложных условиях</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Интеграция систем мониторинга с картами глубин для предотвращения посадки 
                на мель в районах многочисленных рифов и мелководий Карибского моря.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Рекомендации по использованию систем мониторинга</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="bg-primary/20 rounded-full p-1 mt-0.5">
                <span className="text-primary font-bold text-sm">1</span>
              </div>
              <p>
                <span className="font-medium">Комбинирование систем:</span> Используйте AIS и GNSS 
                совместно для повышения надежности и точности навигации
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/20 rounded-full p-1 mt-0.5">
                <span className="text-primary font-bold text-sm">2</span>
              </div>
              <p>
                <span className="font-medium">Резервные системы:</span> Обеспечьте наличие 
                резервных источников питания для систем мониторинга на случай отказа основных
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/20 rounded-full p-1 mt-0.5">
                <span className="text-primary font-bold text-sm">3</span>
              </div>
              <p>
                <span className="font-medium">Регулярное обновление:</span> Поддерживайте 
                актуальность карт и программного обеспечения навигационных систем
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
