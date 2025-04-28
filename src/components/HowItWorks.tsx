
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Индивидуальная программа",
      description: "Упражнения подбираются под ваши цели и состояние"
    },
    {
      number: "02",
      title: "Тренировки под контролем",
      description: "Только сертифицированные специалисты"
    },
    {
      number: "03",
      title: "Мгновенная биологическая обратная связь",
      description: "Результат можно измерить анализами"
    },
    {
      number: "04",
      title: "Комплексный эффект",
      description: "Укрепляются кости, связки, суставы, улучшается работа иммунной, эндокринной и нервной систем"
    }
  ];

  const sessionSteps = [
    {
      title: "Оценка состояния",
      description: "Специалист выясняет, с чем вы пришли: усталость, боли, стресс, снижение либидо, нарушение сна и т.д."
    },
    {
      title: "Выбор подходящей программы",
      description: "Подбирается одна из готовых протокольных программ, адаптированная под ваш запрос"
    },
    {
      title: "Работа на тренажёре «Ось Жизни»",
      description: "Выполняются упражнения, задействующие глубокие мышечные цепи, активирующие регенеративный процесс"
    },
    {
      title: "Паузы и наблюдение за вашей реакцией",
      description: "Между подходами — паузы. Часто уже во время занятия человек чувствует тепло, ясность, расслабление, от активации гормонов в теле"
    },
    {
      title: "Завершение и рекомендации",
      description: "Инструктор даёт рекомендации, отслеживает динамику, при необходимости — меняет программу"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Как это работает?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="border-primary/20 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Принцип воздействия тренажёра «Ось Жизни»</h2>
            <ul className="space-y-4 max-w-3xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Формирует точечно направленную весовую нагрузку на осевой̆ скелет</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Передаёт усилие в кость, минуя суставы и поверхностные мышцы</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Включает в работу глубокие стабилизирующие цепи тела</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Происходит выделение новых клеток, коллагена</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <span>Запускается мобилизация гормональной и нервной регуляции</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Как проходит занятие</h2>
            <div className="space-y-6">
              {sessionSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
