
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Связаться с нами</h1>
        <p className="text-lg mb-6">
          Если у вас есть вопросы о наших системах безопасности для морских судов 
          в Карибском море или вы хотите получить консультацию, пожалуйста, 
          свяжитесь с нами любым удобным способом.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Адрес</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Карибский центр морской безопасности<br />
                  Порт-оф-Спейн, Тринидад и Тобаго<br />
                  Набережная Причал 42
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Телефон</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>+1 (868) 555-7890 (основной)</p>
                <p>+1 (868) 555-1234 (техническая поддержка)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Электронная почта</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>info@caribbean-maritime-safety.org</p>
                <p>support@caribbean-maritime-safety.org</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Региональные офисы</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Кингстон, Ямайка</li>
                  <li>Сан-Хуан, Пуэрто-Рико</li>
                  <li>Картахена, Колумбия</li>
                  <li>Козумель, Мексика</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Форма обратной связи</h2>
          
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">Ваше имя</label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">Электронная почта</label>
                  <Input id="email" type="email" placeholder="Введите ваш email" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-medium">Тема</label>
                  <Input id="subject" placeholder="Тема вашего сообщения" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">Сообщение</label>
                  <Textarea id="message" placeholder="Введите ваше сообщение" rows={5} />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" /> Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-6 bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Мы обычно отвечаем на все запросы в течение 24 часов. 
              Для срочных вопросов, связанных с безопасностью на море, 
              пожалуйста, используйте наш экстренный телефон поддержки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
