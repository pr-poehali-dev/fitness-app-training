
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      title: "Тренажер для личного пользования",
      price: "350 000 ₽",
      features: [
        "Собственный тренажер «Ось Жизни»",
        "Инструкция по использованию",
        "Базовые упражнения",
        "Гарантия на тренажер",
      ],
      cta: "Оставить заявку",
      popular: false,
    },
    {
      title: "Тренажер и обучение для мастеров",
      price: "650 000 ₽",
      features: [
        "Тренажер «Ось Жизни»",
        "Полное обучение методике АФГ",
        "Сертификация мастера",
        "Обучение оздоровительным программам",
        "Консультации по применению методики",
      ],
      cta: "Стать мастером",
      popular: true,
    },
    {
      title: "Бизнес под ключ",
      price: "1 300 000 ₽",
      features: [
        "Тренажер «Ось Жизни»",
        "Обучение и сертификация",
        "Бизнес-план и маркетинговая стратегия",
        "Брендирование и материалы для продвижения",
        "Поддержка в открытии центра",
      ],
      cta: "Открыть центр",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/10 to-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Инвестиции в здоровье</h2>
            <p className="text-lg text-muted-foreground">Выберите подходящий для вас вариант</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`border ${
                  pkg.popular 
                    ? "border-primary shadow-lg" 
                    : "border-primary/20"
                } relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
                      Популярный выбор
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl text-center">{pkg.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="text-center">
                    <p className="text-3xl font-bold">{pkg.price}</p>
                  </div>
                  
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full ${pkg.popular ? "hover-scale" : ""}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    {pkg.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl shadow-xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Сравнение с другими методами</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Метод</th>
                    <th className="text-center py-3 px-4">Прирост плотности кости за год</th>
                    <th className="text-center py-3 px-4">Побочные эффекты</th>
                    <th className="text-center py-3 px-4">Доступность</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Кальций + вит. D</td>
                    <td className="text-center py-3 px-4">0,5%</td>
                    <td className="text-center py-3 px-4">Нет</td>
                    <td className="text-center py-3 px-4">+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Ходьба/вибрация</td>
                    <td className="text-center py-3 px-4">0%</td>
                    <td className="text-center py-3 px-4">Нет</td>
                    <td className="text-center py-3 px-4">+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Физнагрузка с весом</td>
                    <td className="text-center py-3 px-4">1%</td>
                    <td className="text-center py-3 px-4">Нет</td>
                    <td className="text-center py-3 px-4">+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Бисфосфонаты</td>
                    <td className="text-center py-3 px-4">1,6%</td>
                    <td className="text-center py-3 px-4">Есть</td>
                    <td className="text-center py-3 px-4">-</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Анаболики</td>
                    <td className="text-center py-3 px-4">6,1%</td>
                    <td className="text-center py-3 px-4">Есть (риск рака)</td>
                    <td className="text-center py-3 px-4">-</td>
                  </tr>
                  <tr className="border-b bg-primary/10 font-semibold">
                    <td className="py-3 px-4">Функциональная гимнастика</td>
                    <td className="text-center py-3 px-4">7,3–14%</td>
                    <td className="text-center py-3 px-4">Нет</td>
                    <td className="text-center py-3 px-4">+++++</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
