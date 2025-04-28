
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ReviewsSection = () => {
  const reviews = [
    {
      text: "Я снова бегаю с внуком и сплю всю ночь без боли. Вы подарили мне вторую молодость!",
      author: "Владимир, 62 года",
      position: "военный пенсионер"
    },
    {
      text: "После первой тренировки улучшился сон, а после курса исправилась осанка, ушёл горб",
      author: "Дмитрий, 55 лет",
      position: "проектировщик"
    },
    {
      text: "За 3 занятия исчезла «холка», подтянулась кожа лица, а после программы прошли боли в кистях",
      author: "Вера, 67 лет",
      position: "владелец сети ювелирных магазинов"
    },
    {
      text: "После 1 занятия давление снизилось с 150/130 до 130/110, после полного курса ушла боль в шее, повысилась жизненная энергия",
      author: "Юрий, 77 лет",
      position: "пенсионер, мастер цигун"
    },
    {
      text: "Пройдя полный курс, у меня восстановилась чувствительность половины тела, которой не было уже полтора года после инсульта",
      author: "Вероника, 66 лет",
      position: "владелец юридической компании"
    },
    {
      text: "После 1 занятия исчезли боли, нормализовался сон, вернулась мелкая моторика, занялась огородом",
      author: "Ольга, 64 года",
      position: "владелец коллегии адвокатов"
    }
  ];

  return (
    <section className="py-20 bg-background" id="reviews">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Реальные истории</h2>
            <p className="text-lg text-muted-foreground">Отзывы людей, которые уже изменили свою жизнь с нашей методикой</p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border-primary/20 shadow-md h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="mb-4 text-primary">
                          {"★".repeat(5)}
                        </div>
                        <p className="italic mb-4">{review.text}</p>
                      </div>
                      <div>
                        <p className="font-semibold">{review.author}</p>
                        <p className="text-sm text-muted-foreground">{review.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mx-2" />
              <CarouselNext className="relative static mx-2" />
            </div>
          </Carousel>
          
          <div className="mt-16 text-center">
            <p className="text-2xl font-bold mb-6">
              ЗАБУДЬТЕ О БОЛИ — ВЕРНИТЕ СВОБОДУ ДВИЖЕНИЯ!
            </p>
            <p className="text-lg mb-8">
              Не тратьте годы на таблетки и массажёры — попробуйте инновационную методику уже сейчас! Гарантированный эффект с первого раза — почувствуйте разницу сами!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
