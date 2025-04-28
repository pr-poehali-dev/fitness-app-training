
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Check, X, ArrowRight, ThumbsUp, AlertTriangle, Syringe } from "lucide-react";

const ComparisonSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-background/80 to-background relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text inline-block">
              Почему тренажер «Ось Жизни» эффективнее
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Объективное сравнение с консервативными подходами к индивидуальному сколиозу и проблемам позвоночника
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <ComparisonCard 
              title="Тренажер «Ось Жизни»"
              benefits={[
                "Мгновенный эффект уже после первого занятия",
                "Естественное воздействие без медикаментов",
                "Активация внутренних ресурсов организма",
                "Отсутствие побочных эффектов",
                "Долгосрочный оздоровительный эффект"
              ]}
              icon={<ThumbsUp className="h-10 w-10 text-white" />}
              iconBg="bg-primary"
              highlightCard={true}
            />

            <ComparisonCard 
              title="Консервативное лечение"
              benefits={[
                "Необходимость длительного ношения корсета",
                "Ограниченная эффективность физиотерапии",
                "Временный эффект от массажа",
                "Сложность регулярного выполнения упражнений",
                "Побочные эффекты от медикаментов"
              ]}
              icon={<AlertTriangle className="h-10 w-10 text-white" />}
              iconBg="bg-amber-500"
              negative={true}
            />

            <ComparisonCard 
              title="Хирургическое лечение"
              benefits={[
                "Высокая травматичность операции",
                "Длительный период реабилитации",
                "Риск осложнений и последствий",
                "Постоянное присутствие металлических конструкций",
                "Высокая стоимость операции"
              ]}
              icon={<Syringe className="h-10 w-10 text-white" />}
              iconBg="bg-red-500"
              negative={true}
            />
          </div>
          
          <div className="mt-16">
            <ComparisonTable />
          </div>

          <div className="flex justify-center mt-8">
            <Button 
              onClick={() => setShowMore(!showMore)} 
              variant="outline"
              className="group hover:bg-primary/10 border-primary/20"
            >
              {showMore ? "Скрыть детали" : "Узнать подробнее"}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${showMore ? "rotate-90" : "group-hover:translate-x-1"}`} />
            </Button>
          </div>

          {showMore && (
            <div className="mt-10 animate-fade-in">
              <MethodDetails />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ComparisonCard = ({ 
  title, 
  benefits, 
  icon, 
  iconBg, 
  highlightCard = false,
  negative = false
}: { 
  title: string, 
  benefits: string[], 
  icon: React.ReactNode,
  iconBg: string,
  highlightCard?: boolean,
  negative?: boolean
}) => {
  return (
    <Card className={`overflow-hidden transform transition-all duration-300 hover:shadow-xl relative group ${
      highlightCard ? "border-primary shadow-lg shadow-primary/10" : "border-gray-200"
    }`}>
      {highlightCard && (
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rounded-full z-0"></div>
      )}
      
      <div className={`${iconBg} p-3 inline-flex rounded-full absolute -top-5 left-6 shadow-lg`}>
        {icon}
      </div>
      
      <CardHeader className="pt-10">
        <h3 className={`text-xl font-bold ${highlightCard ? "text-primary" : "text-gray-700"}`}>
          {title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3 pt-4">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              {negative ? (
                <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              ) : (
                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              )}
              <span className={`text-sm leading-tight ${negative ? "text-gray-600" : "font-medium"}`}>
                {item}
              </span>
            </li>
          ))}
        </ul>
        
        {highlightCard && (
          <div className="h-1 w-full bg-gradient-to-r from-primary/50 to-primary/20 absolute bottom-0 left-0"></div>
        )}
      </CardContent>
    </Card>
  );
};

const ComparisonTable = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
      <Tabs defaultValue="effectiveness" className="w-full">
        <TabsList className="w-full grid grid-cols-3 bg-muted/40">
          <TabsTrigger value="effectiveness">Эффективность</TabsTrigger>
          <TabsTrigger value="safety">Безопасность</TabsTrigger>
          <TabsTrigger value="cost">Стоимость</TabsTrigger>
        </TabsList>
        
        <TabsContent value="effectiveness" className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-medium">Метод</th>
                  <th className="py-3 px-4 text-center font-medium">Прирост плотности кости за год</th>
                  <th className="py-3 px-4 text-center font-medium">Улучшение осанки</th>
                  <th className="py-3 px-4 text-center font-medium">Скорость результата</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-primary/5 border-b">
                  <td className="py-3 px-4 font-semibold text-primary">Функциональная гимнастика на тренажере "Ось Жизни"</td>
                  <td className="py-3 px-4 text-center font-semibold">7.3–14%</td>
                  <td className="py-3 px-4 text-center">Высокая</td>
                  <td className="py-3 px-4 text-center">1-3 занятия</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Кальций + витамин D</td>
                  <td className="py-3 px-4 text-center">0.5%</td>
                  <td className="py-3 px-4 text-center">Минимальная</td>
                  <td className="py-3 px-4 text-center">6-12 месяцев</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Ходьба/вибрация</td>
                  <td className="py-3 px-4 text-center">0%</td>
                  <td className="py-3 px-4 text-center">Низкая</td>
                  <td className="py-3 px-4 text-center">Нет данных</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Физнагрузка с весом</td>
                  <td className="py-3 px-4 text-center">1%</td>
                  <td className="py-3 px-4 text-center">Средняя</td>
                  <td className="py-3 px-4 text-center">3-6 месяцев</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Бисфосфонаты</td>
                  <td className="py-3 px-4 text-center">1.6%</td>
                  <td className="py-3 px-4 text-center">Нет</td>
                  <td className="py-3 px-4 text-center">3-6 месяцев</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Анаболики</td>
                  <td className="py-3 px-4 text-center">6.1%</td>
                  <td className="py-3 px-4 text-center">Нет</td>
                  <td className="py-3 px-4 text-center">1-3 месяца</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="safety" className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-medium">Метод</th>
                  <th className="py-3 px-4 text-center font-medium">Побочные эффекты</th>
                  <th className="py-3 px-4 text-center font-medium">Противопоказания</th>
                  <th className="py-3 px-4 text-center font-medium">Риски</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-primary/5 border-b">
                  <td className="py-3 px-4 font-semibold text-primary">Функциональная гимнастика на тренажере "Ось Жизни"</td>
                  <td className="py-3 px-4 text-center">Нет</td>
                  <td className="py-3 px-4 text-center">Минимальные</td>
                  <td className="py-3 px-4 text-center">Очень низкие</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Кальций + витамин D</td>
                  <td className="py-3 px-4 text-center">Минимальные</td>
                  <td className="py-3 px-4 text-center">Несколько</td>
                  <td className="py-3 px-4 text-center">Низкие</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Физиотерапия</td>
                  <td className="py-3 px-4 text-center">Возможны</td>
                  <td className="py-3 px-4 text-center">Множественные</td>
                  <td className="py-3 px-4 text-center">Средние</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Ношение корсета</td>
                  <td className="py-3 px-4 text-center">Дискомфорт, атрофия мышц</td>
                  <td className="py-3 px-4 text-center">Несколько</td>
                  <td className="py-3 px-4 text-center">Средние</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Медикаментозное лечение</td>
                  <td className="py-3 px-4 text-center">Значительные</td>
                  <td className="py-3 px-4 text-center">Множественные</td>
                  <td className="py-3 px-4 text-center">Высокие</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Хирургическое вмешательство</td>
                  <td className="py-3 px-4 text-center">Серьезные</td>
                  <td className="py-3 px-4 text-center">Множественные</td>
                  <td className="py-3 px-4 text-center">Очень высокие</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="cost" className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-medium">Метод</th>
                  <th className="py-3 px-4 text-center font-medium">Первоначальные затраты</th>
                  <th className="py-3 px-4 text-center font-medium">Поддерживающие затраты</th>
                  <th className="py-3 px-4 text-center font-medium">Доступность</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-primary/5 border-b">
                  <td className="py-3 px-4 font-semibold text-primary">Функциональная гимнастика на тренажере "Ось Жизни"</td>
                  <td className="py-3 px-4 text-center">Средние</td>
                  <td className="py-3 px-4 text-center">Низкие</td>
                  <td className="py-3 px-4 text-center">Высокая</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Кальций + витамин D</td>
                  <td className="py-3 px-4 text-center">Низкие</td>
                  <td className="py-3 px-4 text-center">Средние</td>
                  <td className="py-3 px-4 text-center">Высокая</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Физиотерапия</td>
                  <td className="py-3 px-4 text-center">Средние</td>
                  <td className="py-3 px-4 text-center">Высокие</td>
                  <td className="py-3 px-4 text-center">Средняя</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Ношение корсета</td>
                  <td className="py-3 px-4 text-center">Высокие</td>
                  <td className="py-3 px-4 text-center">Средние</td>
                  <td className="py-3 px-4 text-center">Средняя</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Медикаментозное лечение</td>
                  <td className="py-3 px-4 text-center">Низкие</td>
                  <td className="py-3 px-4 text-center">Очень высокие</td>
                  <td className="py-3 px-4 text-center">Средняя</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Хирургическое вмешательство</td>
                  <td className="py-3 px-4 text-center">Очень высокие</td>
                  <td className="py-3 px-4 text-center">Высокие</td>
                  <td className="py-3 px-4 text-center">Низкая</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const MethodDetails = () => {
  return (
    <div className="space-y-8 bg-white/50 p-6 rounded-xl border border-gray-100 shadow-md">
      <h3 className="text-2xl font-bold text-primary">Уникальность тренажера «Ось Жизни»</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Принцип воздействия:</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Формирует точечно направленную весовую нагрузку на осевой̆ скелет</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Передаёт усилие в кость, минуя суставы и поверхностные мышцы</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Включает в работу глубокие стабилизирующие цепи тела</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Происходит выделение новых клеток, коллагена</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Запускается мобилизация гормональной и нервной регуляции</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Научное обоснование:</h4>
          <p className="text-gray-700">
            Осевое сжатие костей стимулирует костный мозг и выработку стволовых клеток. Силы нагрузки в 4–12 раз превышают вес тела — это невозможно повторить в обычной жизни или спортзале.
          </p>
          <p className="text-gray-700">
            Резкое улучшение плотности костей — до 14% за 6 месяцев! Это подтверждено множеством исследований и научных публикаций.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-lg font-semibold mb-2">Безопасность метода:</h4>
            <p className="text-gray-700">
              Центральная нервная система не даст перегрузить кости, что делает занятия абсолютно безопасными для людей любого возраста и уровня физической подготовки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
