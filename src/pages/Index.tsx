import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const memberships = [
    {
      name: "BASIC",
      price: "4 990",
      features: [
        "Доступ в тренажерный зал",
        "Групповые занятия",
        "Раздевалки и душевые",
        "Wi-Fi зона"
      ]
    },
    {
      name: "PREMIUM",
      price: "9 990",
      features: [
        "Все возможности Basic",
        "Персональный тренер (4 занятия)",
        "Бассейн и сауна",
        "Массажный кабинет",
        "Спортивное питание со скидкой"
      ],
      popular: true
    },
    {
      name: "VIP",
      price: "19 990",
      features: [
        "Все возможности Premium",
        "Персональный тренер (12 занятий)",
        "Индивидуальная программа питания",
        "SPA-процедуры",
        "Приоритетное бронирование",
        "Личный шкафчик премиум-класса"
      ]
    }
  ];

  const trainers = [
    {
      name: "Александр Волков",
      specialization: "Силовые тренировки",
      experience: "12 лет опыта",
      image: "https://cdn.poehali.dev/projects/feb80daf-60c2-4ad0-b932-68054eb3cf9c/files/2f2041cb-4f34-492b-b78f-d312e1b4d800.jpg"
    },
    {
      name: "Мария Соколова",
      specialization: "Функциональный тренинг",
      experience: "8 лет опыта",
      image: "https://cdn.poehali.dev/projects/feb80daf-60c2-4ad0-b932-68054eb3cf9c/files/2f2041cb-4f34-492b-b78f-d312e1b4d800.jpg"
    },
    {
      name: "Дмитрий Петров",
      specialization: "Реабилитация и восстановление",
      experience: "15 лет опыта",
      image: "https://cdn.poehali.dev/projects/feb80daf-60c2-4ad0-b932-68054eb3cf9c/files/2f2041cb-4f34-492b-b78f-d312e1b4d800.jpg"
    }
  ];

  const schedule = [
    { time: "07:00", activity: "Утренняя йога", trainer: "Мария Соколова" },
    { time: "09:00", activity: "Функциональный тренинг", trainer: "Дмитрий Петров" },
    { time: "11:00", activity: "Силовая тренировка", trainer: "Александр Волков" },
    { time: "14:00", activity: "Пилатес", trainer: "Мария Соколова" },
    { time: "17:00", activity: "CrossFit", trainer: "Александр Волков" },
    { time: "19:00", activity: "Стретчинг", trainer: "Дмитрий Петров" }
  ];

  const gallery = [
    "https://cdn.poehali.dev/projects/feb80daf-60c2-4ad0-b932-68054eb3cf9c/files/9f081a94-68d8-4df2-b19b-e0e59034afa4.jpg",
    "https://cdn.poehali.dev/projects/feb80daf-60c2-4ad0-b932-68054eb3cf9c/files/0adc32e6-fb44-4e2e-8cab-f95e34aaf199.jpg",
    "https://cdn.poehali.dev/projects/feb80daf-60c2-4ad0-b932-68054eb3cf9c/files/9f081a94-68d8-4df2-b19b-e0e59034afa4.jpg",
    "https://cdn.poehali.dev/projects/feb80daf-60c2-4ad0-b932-68054eb3cf9c/files/0adc32e6-fb44-4e2e-8cab-f95e34aaf199.jpg"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Dumbbell" size={28} className="text-primary" />
              <span className="text-2xl font-heading font-bold tracking-tight">ELITUM</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#memberships" className="text-sm font-medium hover:text-primary transition-colors">Абонементы</a>
              <a href="#trainers" className="text-sm font-medium hover:text-primary transition-colors">Тренеры</a>
              <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Расписание</a>
              <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:inline-flex">Записаться</Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/feb80daf-60c2-4ad0-b932-68054eb3cf9c/files/9f081a94-68d8-4df2-b19b-e0e59034afa4.jpg" 
            alt="Gym" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 animate-fade-in-up">
            ELITUM
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Премиальный фитнес-клуб с оборудованием последнего поколения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="text-lg px-8 py-6">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Виртуальный тур
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Trophy" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Премиум оборудование</h3>
            <p className="text-muted-foreground">Тренажеры последнего поколения от мировых производителей</p>
          </div>
          <div className="text-center p-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Users" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Персональный подход</h3>
            <p className="text-muted-foreground">Индивидуальные программы тренировок от профессионалов</p>
          </div>
          <div className="text-center p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Sparkles" size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Элитный сервис</h3>
            <p className="text-muted-foreground">Максимальный комфорт и забота о каждом клиенте</p>
          </div>
        </div>
      </section>

      <section id="memberships" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Абонементы</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий формат тренировок</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {memberships.map((membership, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all hover:scale-105 animate-fade-in ${
                  membership.popular ? 'border-primary border-2' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {membership.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-2">{membership.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-heading font-bold text-primary">{membership.price}</span>
                    <span className="text-muted-foreground ml-2">₽/мес</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {membership.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="Check" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={membership.popular ? "default" : "outline"}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="trainers" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши тренеры</h2>
            <p className="text-xl text-muted-foreground">Команда профессионалов с международными сертификатами</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trainers.map((trainer, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer transition-all hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-heading font-bold mb-1">{trainer.name}</h3>
                    <p className="text-primary font-medium mb-1">{trainer.specialization}</p>
                    <p className="text-sm text-muted-foreground">{trainer.experience}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Расписание</h2>
            <p className="text-xl text-muted-foreground">Групповые занятия на сегодня</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {schedule.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-6 mb-4 bg-card rounded-lg border border-border hover:border-primary transition-colors animate-fade-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="flex items-center space-x-6">
                  <div className="text-3xl font-heading font-bold text-primary w-20">{item.time}</div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold mb-1">{item.activity}</h4>
                    <p className="text-sm text-muted-foreground">{item.trainer}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Записаться
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">Оцените наши возможности</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="relative h-80 overflow-hidden rounded-lg group cursor-pointer animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Запишитесь на бесплатную консультацию</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">г. Москва, Кутузовский проспект, 12</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">Режим работы</h4>
                    <p className="text-muted-foreground">Ежедневно: 06:00 - 23:00</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="bg-background" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" className="bg-background" />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" rows={4} className="bg-background" />
                    </div>
                    <Button className="w-full">Отправить заявку</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Dumbbell" size={24} className="text-primary" />
              <span className="text-xl font-heading font-bold">ELITUM</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 ELITUM. Все права защищены.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
