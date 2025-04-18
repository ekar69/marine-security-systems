
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Ship, Anchor, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">О проекте</h1>
        <p className="text-lg mb-6">
          Наш проект посвящен исследованию и развитию информационных систем обеспечения 
          безопасности морских судов в Карибском море. Мы стремимся объединить передовые 
          технологии для создания комплексных решений защиты.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <Card>
          <CardHeader>
            <Shield className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Наша миссия</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Повышение уровня безопасности морских перевозок в акватории Карибского моря 
              за счет внедрения интегрированных информационных систем и технологий. Мы 
              стремимся сделать морскую навигацию более безопасной и предсказуемой в этом 
              сложном с навигационной точки зрения регионе.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Globe className="h-6 w-6 text-primary mb-2" />
            <CardTitle>География проекта</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Проект охватывает всю акваторию Карибского моря, включая прибрежные зоны и 
              островные государства региона. Мы учитываем специфические региональные факторы: 
              климатические условия, особенности навигации среди множества островов, 
              сезонные изменения погоды и прочие.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6">Ключевые направления деятельности</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-muted p-4 rounded-lg">
            <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
              <Ship className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Разработка систем безопасности</h3>
              <p>
                Создание и внедрение современных технологических решений для обеспечения 
                безопасности морских судов, учитывающих особенности навигации в Карибском море 
                и региональные вызовы.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 bg-muted p-4 rounded-lg">
            <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
              <Anchor className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Исследования и аналитика</h3>
              <p>
                Проведение исследований навигационных рисков и анализ статистики инцидентов 
                в регионе для разработки более эффективных систем предупреждения и реагирования 
                на чрезвычайные ситуации.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 bg-muted p-4 rounded-lg">
            <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Обучение и консультации</h3>
              <p>
                Организация обучающих программ для экипажей судов и судовых операторов по 
                эффективному использованию современных систем безопасности и протоколов 
                реагирования в условиях Карибского моря.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Наши партнеры</h2>
        
        <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
          <p className="mb-4">
            Мы работаем в тесном сотрудничестве с ведущими организациями в области морской 
            безопасности и навигации:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Международная морская организация (IMO)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Региональные морские администрации стран Карибского бассейна</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Ведущие производители навигационного оборудования и систем безопасности</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Исследовательские центры и университеты с морской специализацией</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Круизные компании и грузовые перевозчики, оперирующие в регионе</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
