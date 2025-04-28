
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneCall, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-accent/10" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Верните гибкость суставам и здоровье своим костям</h2>
            <p className="text-lg text-muted-foreground">Запишитесь на пробное занятие прямо сейчас</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <PhoneCall className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p>+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p>г. Санкт-Петербург, ул. Примерная, д. 123</p>
                    <p className="text-sm text-muted-foreground">5 минут от м. Технологический институт</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p>Пн-Пт: 9:00 - 21:00</p>
                    <p>Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-primary/20">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary" />
                    Что вы получите на пробном занятии:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Индивидуальную консультацию специалиста</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Диагностику состояния вашего организма</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Пробное занятие на тренажере «Ось Жизни»</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Рекомендации по решению ваших проблем</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-primary/20">
              <h3 className="text-xl font-bold mb-6">Запись на пробное занятие</h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="problem">Что вас беспокоит?</Label>
                  <Input id="problem" placeholder="Опишите вашу проблему" />
                </div>
                
                <Button type="submit" className="w-full hover-scale">
                  Записаться на занятие
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
