import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

const ReviewCard = ({ name, avatar, rating, text, date }: ReviewProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={avatar} 
            alt={name} 
            className="w-12 h-12 rounded-full mr-4" 
          />
          <div>
            <h4 className="font-medium">{name}</h4>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">{date}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600">{text}</p>
      </CardContent>
    </Card>
  );
};

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Ирина К.",
      avatar: "https://images.unsplash.com/photo-1619536319456-16c0fb6fe9a8?w=150&h=150&fit=crop&crop=faces",
      rating: 5,
      text: "Тренажер превзошел все мои ожидания! Занимаюсь всего 3 недели, а уже чувствую как укрепились мышцы спины. Боли, которые беспокоили годами, практически ушли.",
      date: "15.03.2025"
    },
    {
      name: "Александр П.",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=faces",
      rating: 5,
      text: "Приобрел тренажер после серьезной травмы колена. Удобный, компактный, а главное - эффективный. Реабилитация прошла гораздо быстрее, чем прогнозировали врачи.",
      date: "02.04.2025"
    },
    {
      name: "Наталья В.",
      avatar: "https://images.unsplash.com/photo-1631947430066-48c30d0ec3bf?w=150&h=150&fit=crop&crop=faces",
      rating: 4,
      text: "Занимаюсь с тренажером уже полгода. Очень удобно заниматься дома в любое время. Единственное - хотелось бы больше обучающих видео для продвинутого уровня.",
      date: "28.02.2025"
    },
    {
      name: "Сергей М.",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=faces",
      rating: 5,
      text: "Отличный тренажер для всей семьи! Занимаемся вместе с женой и детьми. Компактный, но при этом очень функциональный. Рекомендую всем, кто заботится о здоровье.",
      date: "10.04.2025"
    },
    {
      name: "Михаил Д.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
      rating: 5,
      text: "В 68 лет начал заниматься на этом тренажере. Результат просто потрясающий! Улучшилась подвижность суставов, прошли боли в пояснице. Очень благодарен разработчикам!",
      date: "05.03.2025"
    },
    {
      name: "Ольга К.",
      avatar: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=150&h=150&fit=crop&crop=faces",
      rating: 4,
      text: "Хороший тренажер, особенно для тех, у кого сидячая работа. Спина перестала болеть уже через 2 недели регулярных занятий. Немного сложная сборка, но результат того стоит.",
      date: "22.03.2025"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const displayCount = 3;
  const totalPages = Math.ceil(reviews.length / displayCount);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const displayedReviews = reviews.slice(
    activeIndex * displayCount,
    activeIndex * displayCount + displayCount
  );

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят о нашем тренажере и программах те, кто уже добился результатов
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedReviews.map((review, index) => (
              <ReviewCard 
                key={index} 
                name={review.name} 
                avatar={review.avatar} 
                rating={review.rating} 
                text={review.text} 
                date={review.date} 
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === activeIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
          
          <button
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none hidden md:block"
            onClick={handlePrev}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none hidden md:block"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
