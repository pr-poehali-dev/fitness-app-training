import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ProgramProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ProgramCard = ({ title, description, image, features }: ProgramProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Узнать больше</Button>
      </CardFooter>
    </Card>
  );
};

const ProgramsSection = () => {
  const programs = [
    {
      title: "Базовое восстановление",
      description: "Программа для начинающих и восстановления после длительного перерыва",
      image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=600&h=400&fit=crop",
      features: [
        "10 занятий с постепенным увеличением нагрузки",
        "Подробные видео-инструкции",
        "Поддержка инструктора онлайн"
      ]
    },
    {
      title: "Здоровая спина",
      description: "Специализированная программа для укрепления мышц спины и позвоночника",
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&h=400&fit=crop",
      features: [
        "15 специализированных упражнений",
        "Техники расслабления и растяжки",
        "Индивидуальные рекомендации"
      ]
    },
    {
      title: "Общее оздоровление",
      description: "Комплексная программа для укрепления всего организма",
      image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=600&h=400&fit=crop",
      features: [
        "Комбинация кардио и силовых упражнений",
        "Дыхательные практики",
        "Расширенная 30-дневная программа"
      ]
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Программы тренировок</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Наши специализированные программы разработаны для решения различных задач и подходят для любого уровня подготовки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index} 
              title={program.title} 
              description={program.description} 
              image={program.image} 
              features={program.features} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
