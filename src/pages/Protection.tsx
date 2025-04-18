
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Lightbulb, Volume2, Shield, AlertTriangle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Protection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Системы активной защиты</h1>
        <p className="text-lg mb-6">
          Современные системы активной защиты представляют собой комплекс технологических 
          решений, обеспечивающих непосредственное противодействие угрозам безопасности 
          морских судов в акватории Карибского моря.
        </p>
      </div>

      <Tabs defaultValue="smoke" className="max-w-4xl mx-auto mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="smoke">Дымовые генераторы</TabsTrigger>
          <TabsTrigger value="light">Световые сигнализации</TabsTrigger>
          <TabsTrigger value="sound">Звуковые системы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="smoke" className="p-4 bg-background rounded-lg border mt-2">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Дымовые генераторы</h3>
              <p className="mb-4">
                Дымовые генераторы создают плотный дым для затруднения визуального наблюдения 
                за защищаемыми объектами. В морских условиях они могут использоваться для 
                скрытия судна от нежелательного наблюдения или в качестве сигнала бедствия.
              </p>
              <h4 className="font-medium text-lg mb-2">Принцип работы:</h4>
              <p className="mb-4">
                При активации дымового генератора специальный элемент нагревается, что приводит 
                к образованию густого облака дыма. Современные составы являются безопасными для 
                людей и окружающей среды, что критически важно в условиях морской экосистемы 
                Карибского бассейна.
              </p>
              <h4 className="font-medium text-lg mb-2">Преимущества:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Эффективное скрытие судна от визуальной фиксации</li>
                <li>Простота и быстрота развертывания в чрезвычайных ситуациях</li>
                <li>Низкие эксплуатационные расходы при высокой эффективности</li>
                <li>Экологическая безопасность современных дымовых составов</li>
                <li>Возможность создания дымовой завесы различной плотности и продолжительности</li>
              </ul>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <p className="text-sm text-amber-700">
                    <span className="font-medium">Важно:</span> В условиях Карибского моря необходимо 
                    учитывать направление и силу ветра при использовании дымовых генераторов, 
                    так как тропические ветры могут быстро рассеивать дымовую завесу.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="bg-primary/10 p-6 rounded-full mb-4">
                <Cloud className="h-20 w-20 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">
                  Время развертывания: 3-5 секунд
                </p>
                <p className="text-sm text-muted-foreground">
                  Продолжительность действия: до 30 минут
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="light" className="p-4 bg-background rounded-lg border mt-2">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Световые сигнализации и лазеры</h3>
              <p className="mb-4">
                Световые системы используются для создания визуальных сигналов, отпугивания 
                потенциальных угроз и обеспечения видимости судна в сложных погодных условиях, 
                характерных для Карибского моря.
              </p>
              <h4 className="font-medium text-lg mb-2">Типы световых систем:</h4>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Стробоскопические светильники</span>
                    <p className="text-sm text-muted-foreground">
                      Мощные пульсирующие источники света, создающие дезориентирующий эффект 
                      для нарушителей и служащие сигналом тревоги для экипажа и окружающих судов.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Лазерные системы</span>
                    <p className="text-sm text-muted-foreground">
                      Направленные лазерные лучи используются для создания визуального 
                      предупреждения приближающимся судам или для временного ослепления 
                      потенциальных угроз на безопасном расстоянии.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Светодиодные системы освещения периметра</span>
                    <p className="text-sm text-muted-foreground">
                      Энергоэффективные светодиодные системы, создающие хорошо освещенный 
                      периметр вокруг судна, что затрудняет незаметное приближение к нему.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-lg mb-2">Преимущества световых систем:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Мгновенное воздействие на потенциальную угрозу</li>
                <li>Возможность применения на различных дистанциях</li>
                <li>Высокая эффективность в ночное время</li>
                <li>Низкое энергопотребление при использовании современных LED-технологий</li>
                <li>Интеграция с другими системами безопасности для комплексной защиты</li>
              </ul>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <p className="text-sm text-amber-700">
                    <span className="font-medium">Важно:</span> При использовании лазерных систем 
                    необходимо соблюдать международные нормы безопасности, чтобы избежать 
                    причинения вреда экипажам других судов и морской фауне.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="bg-primary/10 p-6 rounded-full mb-4">
                <Lightbulb className="h-20 w-20 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">
                  Видимость сигналов: до 10 км
                </p>
                <p className="text-sm text-muted-foreground">
                  Энергоэффективность: 90% экономии
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="sound" className="p-4 bg-background rounded-lg border mt-2">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Звуковые системы</h3>
              <p className="mb-4">
                Звуковые системы используются для создания акустических сигналов различной 
                громкости и частоты, которые могут служить для предупреждения, отпугивания 
                или привлечения внимания в чрезвычайных ситуациях на море.
              </p>
              <h4 className="font-medium text-lg mb-2">Типы звуковых систем:</h4>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <Volume2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Судовые сирены и горны</span>
                    <p className="text-sm text-muted-foreground">
                      Мощные акустические устройства, способные генерировать звук значительной 
                      громкости, слышимый на больших расстояниях даже в плохих погодных условиях.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Volume2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Акустические отпугиватели</span>
                    <p className="text-sm text-muted-foreground">
                      Устройства, генерирующие звуки определенных частот, неприятные для человеческого 
                      слуха, что помогает отпугнуть потенциальных нарушителей.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Volume2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Подводные акустические системы</span>
                    <p className="text-sm text-muted-foreground">
                      Специализированные устройства, которые могут обнаруживать и отпугивать 
                      подводные угрозы, такие как несанкционированные погружения вблизи судна.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="font-medium text-lg mb-2">Преимущества звуковых систем:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Эффективное средство предупреждения и отпугивания на значительном расстоянии</li>
                <li>Возможность работы в условиях ограниченной видимости (туман, ночное время)</li>
                <li>Универсальность применения для различных типов угроз</li>
                <li>Возможность интеграции с автоматизированными системами безопасности</li>
                <li>Психологическое воздействие, способствующее предотвращению нападений</li>
              </ul>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <p className="text-sm text-amber-700">
                    <span className="font-medium">Важно:</span> При использовании мощных звуковых 
                    систем в Карибском море необходимо учитывать возможное воздействие на морских 
                    млекопитающих и соблюдать экологические нормы региона.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="bg-primary/10 p-6 rounded-full mb-4">
                <Volume2 className="h-20 w-20 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">
                  Громкость сигнала: до 150 дБ
                </p>
                <p className="text-sm text-muted-foreground">
                  Радиус действия: до 3 км
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Комплексное применение систем активной защиты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Многоуровневая защита</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Максимальная эффективность достигается при использовании всех типов систем 
                активной защиты в комплексе, создавая многоуровневый барьер безопасности 
                для судна в сложных условиях Карибского моря.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Cloud className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Автоматизация реагирования</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Современные системы активной защиты интегрируются с сенсорами и системами 
                видеонаблюдения для автоматического активирования при обнаружении угрозы, 
                минимизируя время реакции.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Lightbulb className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Психологический эффект</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Видимые элементы систем активной защиты (световые, звуковые) создают 
                сильный психологический эффект, часто предотвращая угрозы еще до их 
                непосредственного возникновения.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">Рекомендации по использованию систем активной защиты</h3>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="font-bold text-primary">1.</div>
              <p>
                Регулярно проводите тренировки экипажа по использованию систем активной защиты, 
                убедитесь, что все члены команды знают порядок активации систем в чрезвычайных 
                ситуациях
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="font-bold text-primary">2.</div>
              <p>
                Учитывайте климатические особенности Карибского моря при выборе и настройке 
                систем — высокая влажность, сильные тропические ветры и интенсивное солнечное 
                излучение могут влиять на их эффективность
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="font-bold text-primary">3.</div>
              <p>
                Обеспечьте интеграцию систем активной защиты с другими элементами 
                безопасности судна — системами мониторинга, видеонаблюдения и связи — для 
                создания комплексной защиты
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Protection;
