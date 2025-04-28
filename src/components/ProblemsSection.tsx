
import { CheckCircle, XCircle } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    "Постоянная усталость и сонливость",
    "Боли в суставах, спине, шее",
    "Потеря гибкости и мелкой моторики",
    "Ломота в костях и остеопороз",
    "Стресс, раздражительность, апатия",
    "Сколиоз, искривления позвоночного столба"
  ];

  const triedMethods = [
    "Массажи, йога, диеты, медитации — без результата",
    "Операции, уколы, гормоны — дорого и опасно",
    "Витамины, таблетки — временно снимают симптомы",
    "БАДы, иголки, массажеры – боль возвращается"
  ];

  return (
    <section className="py-20 bg-background" id="problems">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Забудьте о хрупкости костей и болях в суставах
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-accent/50">
              <h3 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  ❓
                </span>
                Вы узнаете себя?
              </h3>
              
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-accent/50">
              <h3 className="text-xl font-bold mb-6 text-destructive flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  ❌
                </span>
                Пробовали?
              </h3>
              
              <ul className="space-y-4">
                {triedMethods.map((method, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
