
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Satellite, Radio, Server, Globe, Waves, Ship } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Communication = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Системы связи</h1>
        <p className="text-lg mb-6">
          Надежная и бесперебойная связь является критически важным компонентом информационных систем 
          безопасности морских судов в Карибском море. Современные технологии обеспечивают 
          устойчивую коммуникацию в любых погодных условиях и навигационных ситуациях.
        </p>
      </div>

      <Tabs defaultValue="satellite" className="max-w-4xl mx-auto mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="satellite">Спутниковая связь</TabsTrigger>
          <TabsTrigger value="radio">Радиосвязь</TabsTrigger>
          <TabsTrigger value="control">Управляющие системы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="satellite" className="p-4 bg-background rounded-lg border mt-2">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Спутниковая связь</h3>
              <p className="mb-4">
                Спутниковая связь обеспечивает глобальное покрытие и является основным средством 
                коммуникации для судов в открытом море. В Карибском бассейне с его многочисленными 
                островами эта технология особенно важна для поддержания постоянного контакта с 
                береговыми службами.
              </p>
              <h4 className="font-medium text-lg mb-2">Преимущества спутниковой связи:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Глобальное покрытие всей акватории Карибского моря</li>
                <li>Высокая скорость передачи данных для современных систем безопасности</li>
                <li>Независимость от наземной инфраструктуры</li>
                <li>Возможность видеоконференций и мультимедийной связи</li>
                <li>Интеграция с системами навигации и мониторинга</li>
              </ul>
              <p>
                Основные спутниковые системы, используемые в регионе - Inmarsat, Iridium и VSAT, 
                обеспечивающие различные потребности в коммуникации от голосовой связи до 
                высокоскоростной передачи данных.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="bg-primary/10 p-6 rounded-full mb-4">
                <Satellite className="h-20 w-20 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">
                  Скорость передачи данных: до 50 Мбит/с
                </p>
                <p className="text-sm text-muted-foreground">
                  Покрытие: 100% акватории Карибского моря
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="radio" className="p-4 bg-background rounded-lg border mt-2">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Радиосвязь</h3>
              <p className="mb-4">
                Традиционные и современные системы радиосвязи остаются важным компонентом безопасности 
                морских судов как основное средство коммуникации при чрезвычайных ситуациях и для 
                повседневной связи на коротких и средних расстояниях.
              </p>
              <h4 className="font-medium text-lg mb-2">Типы радиосистем на морских судах:</h4>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-2">
                  <Waves className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">VHF радиосвязь</span>
                    <p className="text-sm text-muted-foreground">
                      Основное средство связи судно-судно и судно-берег на дистанции до 30 морских миль, 
                      используется для повседневной коммуникации и навигационных предупреждений.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Waves className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">MF/HF радиостанции</span>
                    <p className="text-sm text-muted-foreground">
                      Обеспечивают связь на средних и дальних расстояниях, важны для коммуникации в 
                      удаленных районах Карибского моря с ограниченным покрытием VHF.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Waves className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">GMDSS оборудование</span>
                    <p className="text-sm text-muted-foreground">
                      Глобальная морская система связи при бедствии, обязательная для всех судов, 
                      обеспечивающая передачу сигналов бедствия и информации по безопасности.
                    </p>
                  </div>
                </li>
              </ul>
              <p>
                В условиях тропических штормов и ураганов, характерных для Карибского моря, 
                радиосвязь часто является более надежной альтернативой спутниковым системам.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="bg-primary/10 p-6 rounded-full mb-4">
                <Radio className="h-20 w-20 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">
                  Дальность VHF: до 30 морских миль
                </p>
                <p className="text-sm text-muted-foreground">
                  Работа в экстремальных условиях: 24/7
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="control" className="p-4 bg-background rounded-lg border mt-2">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Управляющие системы связи</h3>
              <p className="mb-4">
                Современные системы управления связью обеспечивают интеграцию различных каналов 
                коммуникации в единую сеть, автоматическое переключение между ними и оптимизацию 
                передачи данных в зависимости от условий.
              </p>
              <h4 className="font-medium text-lg mb-2">Функциональные возможности:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Централизованное управление всеми средствами связи с единой консоли</li>
                <li>Приоритизация трафика для систем безопасности и аварийных сообщений</li>
                <li>Автоматическое переключение между спутниковой и радиосвязью</li>
                <li>Маршрутизация и оптимизация каналов в зависимости от типа данных</li>
                <li>Шифрование и защита информации от несанкционированного доступа</li>
                <li>Интеграция с береговыми системами безопасности и мониторинга</li>
              </ul>
              <p>
                В акватории Карибского моря, где навигационная обстановка может быстро меняться, 
                управляющие системы связи позволяют оперативно реагировать на изменения и обеспечивать 
                непрерывную коммуникацию в любых условиях.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="bg-primary/10 p-6 rounded-full mb-4">
                <Server className="h-20 w-20 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">
                  Время переключения каналов: < 1 секунды
                </p>
                <p className="text-sm text-muted-foreground">
                  Интеграция до 10 систем связи одновременно
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Особенности систем связи для Карибского региона</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Globe className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Природные условия</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Системы связи для судов в Карибском море спроектированы с учетом высокой влажности, 
                тропических штормов и ураганов, характерных для региона. Они имеют повышенную 
                устойчивость к экстремальным погодным условиям.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Ship className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Многоязычная поддержка</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Учитывая многонациональный характер судоходства в Карибском бассейне, современные 
                системы связи обеспечивают многоязычный интерфейс и поддержку различных языков 
                для эффективной коммуникации.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Satellite className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Региональные провайдеры</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                В Карибском регионе действуют специализированные провайдеры связи, предлагающие 
                оптимизированные тарифы и каналы коммуникации с покрытием, адаптированным к 
                особенностям локальной навигации.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">Рекомендации по обеспечению надежной связи</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            <div className="flex items-start gap-3">
              <div className="font-bold text-primary">01.</div>
              <p>
                Обеспечьте резервирование систем связи, используя как минимум две независимые технологии 
                (спутниковая + радио)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="font-bold text-primary">02.</div>
              <p>
                Регулярно обновляйте программное обеспечение коммуникационных систем для обеспечения 
                совместимости и безопасности
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="font-bold text-primary">03.</div>
              <p>
                Предусмотрите автономное питание систем связи, способное работать в течение 
                минимум 72 часов при отключении основного электроснабжения
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="font-bold text-primary">04.</div>
              <p>
                Организуйте регулярные тренировки экипажа по использованию различных средств 
                связи в штатных и чрезвычайных ситуациях
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
