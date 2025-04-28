import { Button } from "@/components/ui/button";
import { ShieldCheck, Trophy, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашем тренажере</h2>
            
            <p className="text-lg mb-6 text-gray-600">
              Наш оздоровительный тренажер — это инновационная разработка, созданная командой врачей и спортивных специалистов для эффективного восстановления и поддержания здоровья всего организма.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-4 bg-accent rounded-full p-2">
                  <ShieldCheck className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Безопасность</h3>
                  <p className="text-gray-600">
                    Тренажер разработан с учетом физиологических особенностей человека и полностью безопасен для всех возрастных групп
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-accent rounded-full p-2">
                  <Trophy className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Эффективность</h3>
                  <p className="text-gray-600">
                    Клинически доказанные результаты: улучшение осанки, укрепление мышечного корсета, повышение подвижности суставов
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-accent rounded-full p-2">
                  <Lightbulb className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Инновации</h3>
                  <p className="text-gray-600">
                    Запатентованная технология позволяет проработать все группы мышц, включая глубокие стабилизирующие мышцы
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg">Узнать больше</Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=700&fit=crop" 
                alt="Оздоровительный тренажер" 
                className="rounded-2xl shadow-xl max-w-full h-auto z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-bold text-xl mb-2">12+ лет</p>
                <p className="text-gray-700">Опыта разработки оздоровительных тренажеров</p>
              </div>
              <div className="absolute -top-6 -left-6 bg-primary p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-bold text-xl mb-2 text-white">50 000+</p>
                <p className="text-primary-foreground">Довольных пользователей по всей России</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
