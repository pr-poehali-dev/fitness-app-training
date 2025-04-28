import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PricingPlan = ({ title, price, description, features, popular }: PricingPlanProps) => {
  return (
    <Card className={`flex flex-col h-full ${popular ? "border-primary border-2 shadow-lg" : ""}`}>
      {popular && (
        <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
          Популярный выбор
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground"> ₽</span>
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${popular ? "" : "variant-outline"}`}
          variant={popular ? "default" : "outline"}
        >
          Выбрать
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingSection = () => {
  const plans = [
    {
      title: "Тренажер Базовый",
      price: "12 990",
      description: "Для домашних тренировок",
      features: [
        "Базовая комплектация тренажера",
        "Инструкция по сборке и использованию",
        "10 базовых упражнений",
        "Доставка по России"
      ]
    },
    {
      title: "Тренажер + Обучение",
      price: "17 990",
      description: "Полный комплект для оздоровления",
      popular: true,
      features: [
        "Полная комплектация тренажера",
        "Видеокурс из 30 упражнений",
        "3 месяца доступа к онлайн-платформе",
        "Консультация с тренером",
        "Доставка по России"
      ]
    },
    {
      title: "Премиум пакет",
      price: "24 990",
      description: "Максимальный результат",
      features: [
        "Расширенная комплектация тренажера",
        "Полный видеокурс из 50+ упражнений",
        "6 месяцев доступа к онлайн-платформе",
        "3 персональные онлайн-консультации",
        "Индивидуальная программа тренировок",
        "Экспресс-доставка по России"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите подходящий пакет</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы подготовили разные варианты комплектации, чтобы каждый мог подобрать оптимальное решение
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index} 
              title={plan.title} 
              price={plan.price} 
              description={plan.description} 
              features={plan.features} 
              popular={plan.popular} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">
            У вас остались вопросы? Свяжитесь с нами, и мы поможем подобрать оптимальное решение
          </p>
          <Button variant="outline" size="lg">
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
