import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Универсальный тренажер для всей семьи
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Восстановите здоровье и улучшите физическую форму с помощью наших оздоровительных программ и уникального тренажера
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base font-medium">
                Купить тренажер
              </Button>
              <Button size="lg" variant="outline" className="text-base font-medium">
                Записаться на курс
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white" alt="Customer" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white" alt="Customer" />
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=faces" className="w-10 h-10 rounded-full border-2 border-white" alt="Customer" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">500+ довольных клиентов</p>
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="ml-1 text-sm font-medium">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&h=600&fit=crop" 
              alt="Оздоровительный тренажер" 
              className="rounded-xl shadow-xl max-w-full mx-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
