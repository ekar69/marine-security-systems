
import { Ship } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Ship className="h-6 w-6" />
              <span className="text-xl font-bold">МорБезопасность</span>
            </div>
            <p className="text-sm">
              Ведущий источник информации о системах безопасности морских судов в Карибском море
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm hover:underline">О проекте</a></li>
              <li><a href="/contact" className="text-sm hover:underline">Контакты</a></li>
              <li><a href="/terms" className="text-sm hover:underline">Условия использования</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Связаться с нами</h3>
            <p className="text-sm mb-2">Email: info@morsafety.ru</p>
            <p className="text-sm">Телефон: +7 (999) 123-45-67</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} МорБезопасность. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
