import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Здесь будет код для отправки формы
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Остались вопросы? Заполните форму, и мы свяжемся с вами в ближайшее время
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  {...register("name", { required: "Имя обязательно" })}
                  placeholder="Иван Иванов"
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email обязателен",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Некорректный email"
                      }
                    })}
                    placeholder="ivan@example.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    {...register("phone", { 
                      required: "Телефон обязателен"
                    })}
                    placeholder="+7 (999) 123-45-67"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Напишите ваш вопрос или комментарий"
                  className="min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Phone className="text-primary mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-600">+7 (800) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@fitzdrav.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-primary mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold mb-3">Режим работы</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота</span>
                  <span>10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье</span>
                  <span>Выходной</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
