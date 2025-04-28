
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Антистресс и восстановление ЦНС",
      forWhom: "Люди с хронической усталостью, выгоранием, бессонницей",
      result: "Снижение тревожности, глубокий сон, ясность мышления",
      icon: "🧠"
    },
    {
      title: "Когнитивный фокус",
      forWhom: "Подростки и студенты при утомляемости, интеллектуальной перегрузке, снижении концентрации",
      result: "Улучшение внимания, памяти, эмоциональной устойчивости",
      icon: "📚"
    },
    {
      title: "Гормональный баланс (женская)",
      forWhom: "Женщины с гормональными сбоями, снижением энергии, усталостью, физическим и психическим истощением",
      result: "Стабилизация цикла, уверенность, подъём либидо, нормализация сна и состояния, улучшение внешнего вида",
      icon: "♀️"
    },
    {
      title: "Гормональный баланс (мужская)",
      forWhom: "Мужчины с пониженным уровнем энергии, снижением либидо, апатией, лишним весом",
      result: "Рост тестостерона, высокое либидо, уверенность в себе",
      icon: "♂️"
    },
    {
      title: "Поддержка иммунитета",
      forWhom: "Восстановление после болезни, вирусных нагрузок",
      result: "Повышается уровень энергии, уходит вялость и сонливость",
      icon: "🛡️"
    },
    {
      title: "Коррекция осанки",
      forWhom: "Офисные сотрудники, пожилые, подростки",
      result: "Уходит зажатость, появляется опора, спина выпрямляется",
      icon: "🧍"
    }
  ];

  return (
    <section className="py-20 bg-accent/10" id="programs">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите свой результат</h2>
            <p className="text-lg text-muted-foreground">6 эффективных программ для решения ваших проблем</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-primary">{program.title}</CardTitle>
                    <span className="text-3xl">{program.icon}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Для кого:</h4>
                      <p className="text-sm text-muted-foreground">{program.forWhom}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Результат:</h4>
                      <p className="text-sm text-muted-foreground">{program.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="hover-scale">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
