
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-primary">Ось Жизни</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Революционная методика оздоровления суставов и костей с научно доказанной эффективностью
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01v16.97a.997.997 0 0 1-1 1H3a.997.997 0 0 1-1-1V4.01c0-.55.45-1 1-1h18c.55 0 1 .45 1 1ZM22 4L12 13 2 4"/></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><a href="#problems" className="text-muted-foreground hover:text-primary transition-colors">Проблемы</a></li>
                <li><a href="#method" className="text-muted-foreground hover:text-primary transition-colors">Методика</a></li>
                <li><a href="#programs" className="text-muted-foreground hover:text-primary transition-colors">Программы</a></li>
                <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Цены</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">г. Санкт-Петербург, ул. Примерная, д. 123</li>
                <li className="text-muted-foreground">+7 (999) 123-45-67</li>
                <li className="text-muted-foreground">info@oszhizni.ru</li>
                <li className="text-muted-foreground">Ежедневно: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-primary/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ось Жизни. Все права защищены.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
