import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">ФитЗдрав</h3>
            <p className="text-gray-400 mb-4">
              Оздоровительные тренажеры и программы для всей семьи, разработанные с заботой о вашем здоровье.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">О тренажере</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Преимущества</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-white transition-colors">Программы</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Цены</a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Сервисное обслуживание</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Гарантия</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Доставка и оплата</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Возврат</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <address className="text-gray-400 not-italic space-y-2">
              <p>г. Москва, ул. Примерная, д. 123</p>
              <p>Телефон: +7 (800) 123-45-67</p>
              <p>Email: info@fitzdrav.ru</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ФитЗдрав. Все права защищены.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
