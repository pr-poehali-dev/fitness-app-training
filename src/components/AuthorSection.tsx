
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const AuthorSection = () => {
  const achievements = [
    "Мастер-тренер с 30-летним опытом в оздоровительных практиках",
    "Профессиональный спортсмен с высшим тренерским образованием",
    "Более 1500 клиентов",
    "Трижды чемпион страны, МС по гребле, чемпион по паурлифтингу, 1 дан кекусинкай карате",
    "Предприниматель и ведущий реставратор Санкт-Петербурга",
    "3 года в СПб с АФГ",
    "Клиенты сэкономили более 16 млн ₽ на медицине благодаря АФГ",
    "250 человек избавились от медицинской депрессии",
    "У 98% мужчин тестостерон вырос на 120%",
    "60 человек отказались от костылей — возвращение к полноценной жизни",
    "У 200 прошли: остеопороз, сколиозов и боли в ОДА"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="rounded-full overflow-hidden border-4 border-primary shadow-xl aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Вячеслав Ан" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Вячеслав Ан</h2>
              <p className="text-lg mb-6">автор АФГ методики и тренажера «Ось Жизни»</p>
              
              <Card className="border-primary/20 shadow-md">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.slice(0, 6).map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <p className="font-medium">
                  Благодаря моей методике уже сотни людей избавились от проблем со здоровьем и вернули себе активную жизнь без боли.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
