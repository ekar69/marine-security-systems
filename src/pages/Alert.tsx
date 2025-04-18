
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Megaphone, AlertTriangle, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Alert = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Системы оповещения</h1>
        <p className="text-lg mb-6">
          Эффективные системы оповещения являются критическим компонентом в обеспечении 
          безопасности морских судов в Карибском море, позволяя быстро реагировать на 
          чрезвычайные ситуации и координировать действия экипажа и береговых служб.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3 mb-2">
              <Bell className="h-6 w-6 text-primary" />
              <CardTitle>Автоматизированные системы оповещения</CardTitle>
            </div>
            <CardDescription>
              Интеллектуальные системы для мгновенного реагирования на различные ситуации
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Современные автоматизированные системы оповещения обеспечивают мгновенную 
              передачу критически важной информации всем заинтересованным сторонам при 
              возникновении любой угрозы безопасности.
            </p>
            
            <h3 className="font-medium text-lg mb-3">Ключевые функции:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-medium">Многоуровневое оповещение</span>
                  <p className="text-sm text-muted-foreground">
                    Система определяет уровень угрозы и автоматически выбирает 
                    соответствующий протокол оповещения и реагирования.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-medium">Мгновенное реагирование</span>
                  <p className="text-sm text-muted-foreground">
                    Время от обнаружения угрозы до активации оповещения составляет 
                    менее 1 секунды, что критично в аварийных ситуациях.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-medium">Интеграция с сенсорами</span>
                  <p className="text-sm text-muted-foreground">
                    Системы напрямую подключены к датчикам дыма, воды, движения и 
                    другим сенсорам для автоматического запуска.
                  </p>
                </div>
              </li>
            </ul>
            
            <p>
              В условиях Карибского моря с его непредсказуемыми погодными условиями 
              автоматизированные системы оповещения часто интегрируются с 
              метеорологическими службами для раннего предупреждения о штормах и ураганах.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3 mb-2">
              <Megaphone className="h-6 w-6 text-primary" />
              <CardTitle>Системы диспетчеризации</CardTitle>
            </div>
            <CardDescription>
              Централизованное управление информацией и координация действий
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Системы диспетчеризации обеспечивают централизованное управление и 
              координацию всех аспектов безопасности на судне, а также связь с 
              береговыми службами и другими судами.
            </p>
            
            <h3 className="font-medium text-lg mb-3">Компоненты системы:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Центральная диспетчерская консоль с картографическим отображением</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Интегрированные каналы спутниковой и радиосвязи</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Автоматизированная система приоритизации сообщений</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Журналирование и запись всех сообщений и событий</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Резервное питание и дублирующие каналы связи</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Интеграция с национальными и международными службами спасения</span>
              </li>
            </ul>
            
            <p>
              Для судов, регулярно курсирующих в Карибском море, системы диспетчеризации 
              обычно настраиваются с учетом местных особенностей, включая контакты 
              региональных спасательных служб и прибрежных государств.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6">Протоколы оповещения в Карибском регионе</h2>
        
        <div className="bg-muted p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Стандартизированные сигналы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-destructive/10 p-4 rounded-lg">
                <h4 className="flex items-center gap-2 font-medium mb-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Сигнал бедствия (MAYDAY)
                </h4>
                <p className="text-sm">
                  Используется при непосредственной угрозе судну или людям. 
                  В Карибском регионе передается на международной частоте 156.8 МГц (VHF канал 16) 
                  и через спутниковую систему GMDSS.
                </p>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="flex items-center gap-2 font-medium mb-2">
                  <Megaphone className="h-5 w-5 text-amber-600" />
                  Сигнал срочности (PAN-PAN)
                </h4>
                <p className="text-sm">
                  Применяется при серьезной ситуации, не представляющей непосредственной 
                  угрозы для жизни. Часто используется при техническом отказе в условиях 
                  тропических штормов региона.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="flex items-center gap-2 font-medium mb-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Навигационное предупреждение (SECURITE)
                </h4>
                <p className="text-sm">
                  Для предупреждения о навигационных опасностях, особенно актуально 
                  в Карибском море с его многочисленными рифами, отмелями и интенсивным 
                  движением судов.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="flex items-center gap-2 font-medium mb-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  Метеорологические оповещения
                </h4>
                <p className="text-sm">
                  Специализированные предупреждения о тропических циклонах, которые регулярно 
                  формируются в акватории Карибского моря, передаются на выделенных частотах 
                  и через региональные службы погоды.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Особенности систем оповещения для Карибского моря</h2>
        
        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Предупреждение о ураганах</h3>
              <p className="text-muted-foreground">
                Системы оповещения в Карибском регионе имеют специальный протокол для 
                раннего предупреждения о тропических циклонах. Интеграция с региональными 
                метеорологическими службами позволяет получать прогнозы о формировании и 
                движении ураганов за 3-5 дней.
              </p>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Многоязычные оповещения</h3>
              <p className="text-muted-foreground">
                Учитывая многонациональный характер судоходства в Карибском бассейне, 
                системы оповещения автоматически передают сообщения на нескольких языках 
                (английский, испанский, французский) для обеспечения понимания всеми участниками 
                морского движения.
              </p>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
              <Megaphone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Региональные каналы оповещения</h3>
              <p className="text-muted-foreground">
                В дополнение к международным частотам, в Карибском море существуют 
                региональные каналы оповещения, администрируемые береговыми службами 
                прибрежных государств. Системы на судах должны быть настроены на прием 
                сигналов на этих специфических частотах.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">Рекомендации по внедрению систем оповещения</h3>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="font-bold text-primary">1.</div>
              <p>
                Обеспечьте резервное питание всех компонентов системы оповещения с 
                автоматическим переключением при отказе основного источника
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="font-bold text-primary">2.</div>
              <p>
                Интегрируйте системы оповещения с региональными метеорологическими службами 
                Карибского бассейна для своевременного получения штормовых предупреждений
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="font-bold text-primary">3.</div>
              <p>
                Проводите регулярные тренировки экипажа по реагированию на различные типы оповещений, 
                учитывая сезонную специфику ураганов в Карибском море
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Alert;
