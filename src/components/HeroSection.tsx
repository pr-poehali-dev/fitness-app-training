
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Природное омоложение <span className="text-primary">суставов</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Здоровый позвоночник и крепкие кости без лекарств!
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 shadow-lg border border-accent/50 mt-6">
              <p className="text-base md:text-lg font-medium">
                Остеопороз, сколиоз, боли в суставах больше не проблема. Убедитесь в этом сами, посетив одно занятие адаптивно-функциональной гимнастики на авторском тренажёре «Ось Жизни»
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="hover-scale">
                Записаться на пробное занятие
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://cdn.poehali.dev/files/22371927-aa4a-4d04-851b-1040191836ba.png" 
                alt="Тренажер Ось Жизни" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -right-12 -bottom-6 -rotate-12 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-primary/20 max-w-[200px]">
              <p className="text-sm font-bold text-primary">
                Рост новой костной ткани уже после 3 занятий
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
