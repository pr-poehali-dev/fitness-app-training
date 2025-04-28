
import { Card, CardContent } from "@/components/ui/card";

const AboutMethod = () => {
  const benefits = [
    {
      title: "Кости — живой орган",
      description: "Они постоянно обновляются. Нарушение этого процесса приводит к остеопорозу и хрупкости."
    },
    {
      title: "Тренировка, которую не даст спортзал",
      description: "Наша гимнастика на тренажёре создаёт уникальную нагрузку, запуская рост новой костной ткани, выделение коллагена, способствует оздоровлению ОДА, ЦНС, укреплению мышц и избавлению от болей в суставах."
    }
  ];

  const scientificProof = [
    {
      title: "Эффект признан и подтвержден мировыми экспертами",
      description: "Проведенными исследованиями Harvard, Emory University, и представлена на Всемирном конгрессе реабилитационной медицины, как эффективный способ профилактики остеопороза и проблем с суставами"
    },
    {
      title: "100+ научных публикаций",
      description: "Метод имеет серьезное научное обоснование и подтвержден множеством исследований"
    },
    {
      title: "Автор — Вячеслав Ан",
      description: "Профессиональный спортсмен, многократный чемпион страны, мастер спорта, эксперт в спортивной реабилитации"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/10" id="method">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Почему это работает?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <Card key={index} className="border-primary/20 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{item.title}</h3>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Результаты, подтверждённые наукой</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {scientificProof.map((item, index) => (
                <Card key={index} className="border-primary/20 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Ваши преимущества</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <span className="font-medium">Быстрое восстановление плотности костей — профилактика остеопороза</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <span className="font-medium">Идеальная осанка и свобода движений в любом возрасте</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <span className="font-medium">Безопасно, без боли и травм — подходит всем, независимо от физической подготовки</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <span className="font-medium">Физиологическое облегчение от болей и осязаемый эффект с первого занятия</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMethod;
