import { Heart, Award, Clock, Users, Activity, Zap } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Heart size={32} />,
      title: "Здоровье и восстановление",
      description: "Тренажер разработан специально для укрепления здоровья и восстановления после травм"
    },
    {
      icon: <Users size={32} />,
      title: "Для всей семьи",
      description: "Подходит для людей любого возраста и уровня физической подготовки"
    },
    {
      icon: <Award size={32} />,
      title: "Проверенные методики",
      description: "Методики тренировок разработаны ведущими специалистами в области спортивной медицины"
    },
    {
      icon: <Clock size={32} />,
      title: "Экономия времени",
      description: "Эффективные тренировки занимают всего 15-20 минут в день"
    },
    {
      icon: <Activity size={32} />,
      title: "Комплексное воздействие",
      description: "Тренажер прорабатывает все группы мышц и улучшает работу внутренних органов"
    },
    {
      icon: <Zap size={32} />,
      title: "Быстрый результат",
      description: "Заметные улучшения самочувствия уже после 2-3 недель регулярных занятий"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества нашего тренажера</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Уникальная разработка для поддержания здоровья и активного образа жизни
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
