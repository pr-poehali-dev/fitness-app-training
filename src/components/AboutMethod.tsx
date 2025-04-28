
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Beaker, Award, Brain, Shield } from "lucide-react";

const AboutMethod = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('method');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const benefits = [
    {
      title: "Кости — живой орган",
      description: "Они постоянно обновляются. Нарушение этого процесса приводит к остеопорозу и хрупкости.",
      icon: <Beaker className="h-8 w-8 text-primary" />
    },
    {
      title: "Тренировка, которую не даст спортзал",
      description: "Наша гимнастика на тренажёре создаёт уникальную нагрузку, запуская рост новой костной ткани, выделение коллагена, способствует оздоровлению ОДА, ЦНС, укреплению мышц и избавлению от болей в суставах.",
      icon: <Brain className="h-8 w-8 text-primary" />
    }
  ];

  const scientificProof = [
    {
      title: "Признано мировыми экспертами",
      description: "Проведенными исследованиями Harvard, Emory University, и представлена на Всемирном конгрессе реабилитационной медицины, как эффективный способ профилактики остеопороза и проблем с суставами",
      icon: <Award className="h-7 w-7 text-primary" />
    },
    {
      title: "100+ научных публикаций",
      description: "Метод имеет серьезное научное обоснование и подтвержден множеством исследований",
      icon: <Shield className="h-7 w-7 text-primary" />
    },
    {
      title: "Автор — Вячеслав Ан",
      description: "Профессиональный спортсмен, многократный чемпион страны, мастер спорта, эксперт в спортивной реабилитации",
      icon: <Award className="h-7 w-7 text-primary" />
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10" id="method">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block">Почему это работает?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">В основе нашего метода лежат научно доказанные принципы восстановления костной ткани</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((item, index) => (
                <Card key={index} className="card-gradient border-primary/10 shadow-lg overflow-hidden hover-float group transition-all duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex flex-col h-full">
                      <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-primary">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block text-center w-full">Результаты, подтверждённые наукой</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">Эффективность нашего метода подтверждена многолетними исследованиями</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {scientificProof.map((item, index) => (
                <Card key={index} className="card-gradient border-primary/10 shadow-lg overflow-hidden hover-float group">
                  <CardContent className="p-8">
                    <div className="mb-6 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary/80 transition-colors">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className={`bg-white rounded-2xl p-10 shadow-xl border border-primary/10 relative overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-0"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-bl-full -z-0 opacity-50"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center relative">Ваши <span className="gradient-text">преимущества</span></h2>
            
            <ul className="space-y-6 relative">
              <li className="flex items-start gap-4 bg-white/50 p-4 rounded-lg shadow-sm">
                <span className="flex-shrink-0 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="font-medium leading-tight">Быстрое восстановление плотности костей — профилактика остеопороза</span>
              </li>
              <li className="flex items-start gap-4 bg-white/50 p-4 rounded-lg shadow-sm">
                <span className="flex-shrink-0 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="font-medium leading-tight">Идеальная осанка и свобода движений в любом возрасте</span>
              </li>
              <li className="flex items-start gap-4 bg-white/50 p-4 rounded-lg shadow-sm">
                <span className="flex-shrink-0 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="font-medium leading-tight">Безопасно, без боли и травм — подходит всем, независимо от физической подготовки</span>
              </li>
              <li className="flex items-start gap-4 bg-white/50 p-4 rounded-lg shadow-sm">
                <span className="flex-shrink-0 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="font-medium leading-tight">Физиологическое облегчение от болей и осязаемый эффект с первого занятия</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMethod;
