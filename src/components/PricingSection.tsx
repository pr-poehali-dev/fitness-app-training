
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";

const PricingSection = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('pricing');
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

  const pricingPlans = [
    {
      id: 1,
      name: "Личное пользование",
      price: "350 000",
      description: "Для индивидуального использования в домашних условиях",
      features: [
        "Тренажер «Ось Жизни» в личное пользование",
        "Базовое обучение применению тренажера",
        "Инструкция по эксплуатации",
        "3 месяца технической поддержки",
        "Гарантия 1 год"
      ]
    },
    {
      id: 2,
      name: "Для мастеров практик",
      price: "650 000",
      description: "Идеально для специалистов телесноориентированных практик",
      features: [
        "Тренажер «Ось Жизни» профессиональной комплектации",
        "Полное обучение методике (сертификация)",
        "Доступ к базе клиентов и методическим материалам",
        "6 месяцев поддержки и консультаций",
        "Маркетинговые материалы для привлечения клиентов",
        "Гарантия 2 года"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Открытие центра",
      price: "1 300 000",
      description: "Комплексное решение для открытия оздоровительного центра",
      features: [
        "2 тренажера «Ось Жизни» профессиональной комплектации",
        "Полное обучение до 3 специалистов",
        "Бизнес-план и помощь в открытии центра",
        "Эксклюзивные права на территорию",
        "Брендинг и маркетинговая поддержка",
        "Доступ к корпоративной CRM-системе",
        "Гарантия 3 года и регулярные обновления"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10" id="pricing">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium text-sm tracking-wide mb-4">ИНВЕСТИЦИИ В ЗДОРОВЬЕ</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите подходящее предложение</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Инвестируйте в свое здоровье и благополучие или откройте собственный бизнес на основе проверенной технологии
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-2xl transition-all duration-500 ${isVisible ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${plan.id * 200}ms` }}
                onMouseEnter={() => setActiveCard(plan.id)}
              >
                <div 
                  className={`h-full rounded-2xl overflow-hidden group transition-all duration-300 ${
                    activeCard === plan.id 
                    ? 'bg-white shadow-xl shadow-primary/10 scale-105 border-2 border-primary/20 z-10' 
                    : 'bg-white/80 shadow-lg border border-gray-100'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-max px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full shadow-lg">
                      Популярный выбор
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className={`text-2xl font-bold mb-2 transition-colors ${activeCard === plan.id ? 'gradient-text' : 'text-gray-800'}`}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                    
                    <div className="mb-8">
                      <span className="text-4xl font-bold">{plan.price} ₽</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className={`flex-shrink-0 rounded-full ${activeCard === plan.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} p-1`}>
                            <Check className="h-4 w-4" />
                          </span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full rounded-full py-6 ${
                        activeCard === plan.id 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Оставить заявку
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`mt-16 glass-card rounded-2xl p-8 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Нужна дополнительная информация?</h3>
                <p className="text-gray-600">Мы готовы ответить на все ваши вопросы о тренажере и методике</p>
              </div>
              <Button size="lg" className="rounded-full px-6 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
