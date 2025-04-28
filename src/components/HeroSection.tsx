
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-24 pb-24 overflow-hidden bg-gradient-to-b from-accent via-background to-background">
      {/* Декоративные элементы */}
      <div className="absolute left-0 top-20 w-96 h-96 rounded-full bg-primary/20 -z-10 blur-3xl opacity-70 blob-animation"></div>
      <div className="absolute right-0 bottom-20 w-80 h-80 rounded-full bg-indigo-300/20 -z-10 blur-3xl opacity-60 blob-animation"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className={`w-full md:w-1/2 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium text-sm tracking-wide">Революция в лечении суставов</span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Природное омоложение <span className="gradient-text">суставов</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
              Здоровый позвоночник и крепкие кости без лекарств!
            </p>
            
            <div className="glass-card rounded-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-base md:text-lg text-gray-800">
                Остеопороз, сколиоз, боли в суставах больше не проблема. Убедитесь в этом сами, посетив одно занятие адаптивно-функциональной гимнастики на авторском тренажёре «Ось Жизни»
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="hover-float rounded-full px-6 shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-purple-700 border-none">
                Записаться на пробное занятие
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-primary/30 hover:bg-primary/5 shadow-sm">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src="https://cdn.poehali.dev/files/22371927-aa4a-4d04-851b-1040191836ba.png" 
                alt="Тренажер Ось Жизни" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -right-6 -bottom-6 -rotate-6 glass-card p-5 rounded-lg max-w-[240px] z-20 shimmer">
              <p className="text-sm font-bold text-primary">
                Рост новой костной ткани уже после 3 занятий
              </p>
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-indigo-500 rounded-full mt-2"></div>
            </div>
            
            <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-xl z-20 animate-pulse-soft">
              <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-indigo-500">
                <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-30"></div>
                <ChevronDown className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-5 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-background">
          <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
