import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Franchise = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    investment: '',
    message: ''
  });

  const franchisePackages = [
    {
      id: 1,
      name: 'Стартовый',
      investment: '2 500 000',
      area: '80-120',
      description: 'Идеальный вариант для начинающих предпринимателей',
      features: [
        'Полный пакет документов',
        'Обучение персонала (40 часов)',
        'Дизайн-проект помещения',
        'Поставка оборудования',
        'Маркетинговая поддержка (3 месяца)',
        'Операционная поддержка (6 месяцев)'
      ],
      roi: '18-24 месяца',
      profit: '15-25%',
      popular: false
    },
    {
      id: 2,
      name: 'Стандартный',
      investment: '4 200 000',
      area: '120-200',
      description: 'Оптимальное решение для среднего бизнеса',
      features: [
        'Все из пакета "Стартовый"',
        'Расширенное обучение (80 часов)',
        'VIP-зона для клиентов',
        'Дополнительное оборудование',
        'Маркетинговая поддержка (6 месяцев)',
        'Персональный менеджер',
        'Система лояльности'
      ],
      roi: '15-20 месяцев',
      profit: '20-30%',
      popular: true
    },
    {
      id: 3,
      name: 'Премиум',
      investment: '6 800 000',
      area: '200-350',
      description: 'Максимальный пакет для амбициозных проектов',
      features: [
        'Все из пакета "Стандартный"',
        'Премиум дизайн интерьера',
        'Топовое оборудование',
        'Обучение за рубежом',
        'Годовая маркетинговая поддержка',
        'Эксклюзивная территория',
        'Приоритетные новинки'
      ],
      roi: '12-18 месяцев',
      profit: '25-40%',
      popular: false
    }
  ];

  const advantages = [
    {
      icon: 'TrendingUp',
      title: 'Быстрая окупаемость',
      description: 'Средний срок окупаемости 12-24 месяца'
    },
    {
      icon: 'Award',
      title: 'Проверенная модель',
      description: '5 лет успешной работы, 25+ салонов'
    },
    {
      icon: 'Users',
      title: 'Полная поддержка',
      description: 'Помощь на всех этапах развития бизнеса'
    },
    {
      icon: 'BookOpen',
      title: 'Обучение персонала',
      description: 'Комплексная подготовка команды'
    },
    {
      icon: 'Palette',
      title: 'Узнаваемый бренд',
      description: 'Сильная репутация и лояльность клиентов'
    },
    {
      icon: 'Shield',
      title: 'Защита территории',
      description: 'Эксклюзивные права в вашем регионе'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Заявка',
      description: 'Заполните форму и получите презентацию',
      duration: '1 день'
    },
    {
      number: 2,
      title: 'Встреча',
      description: 'Личная встреча с франчайзи-менеджером',
      duration: '3-5 дней'
    },
    {
      number: 3,
      title: 'Анализ',
      description: 'Изучение рынка и выбор локации',
      duration: '1-2 недели'
    },
    {
      number: 4,
      title: 'Договор',
      description: 'Подписание франчайзингового соглашения',
      duration: '1 неделя'
    },
    {
      number: 5,
      title: 'Подготовка',
      description: 'Ремонт, оборудование, обучение персонала',
      duration: '2-3 месяца'
    },
    {
      number: 6,
      title: 'Открытие',
      description: 'Торжественное открытие салона',
      duration: '1 день'
    }
  ];

  const successStories = [
    {
      name: 'Анна Волкова',
      city: 'Екатеринбург',
      package: 'Стандартный',
      openDate: '2023-03-15',
      revenue: '1 200 000',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      quote: 'За год работы мы окупили вложения и планируем открытие второго салона'
    },
    {
      name: 'Михаил Петров',
      city: 'Казань',
      package: 'Премиум',
      openDate: '2022-09-20',
      revenue: '2 800 000',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      quote: 'BeautySpace дал нам все инструменты для успешного бизнеса'
    }
  ];

  const requirements = [
    'Опыт в сфере услуг или готовность к обучению',
    'Инвестиции от 2,5 млн рублей',
    'Помещение от 80 кв.м в проходном месте',
    'Команда от 5 человек',
    'Готовность следовать стандартам бренда',
    'Долгосрочные планы развития бизнеса'
  ];

  const submitApplication = () => {
    console.log('Franchise application submitted:', applicationForm);
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      city: '',
      experience: '',
      investment: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">BeautySpace</Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
              <Link to="/franchise" className="text-primary font-medium">Франшиза</Link>
              <Link to="/cart" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="ShoppingCart" size={20} />
                Корзина
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Hero секция */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Франшиза BeautySpace</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Откройте собственный салон красоты с проверенной бизнес-моделью. 
            Полная поддержка, обучение и гарантированный результат.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать презентацию
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </section>

        {/* Статистика */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Действующих салонов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">18</div>
              <div className="text-muted-foreground">Месяцев окупаемость</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Успешных франчайзи</div>
            </div>
          </div>
        </section>

        <Tabs defaultValue="packages" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="packages">Пакеты</TabsTrigger>
            <TabsTrigger value="advantages">Преимущества</TabsTrigger>
            <TabsTrigger value="process">Процесс</TabsTrigger>
            <TabsTrigger value="stories">Истории успеха</TabsTrigger>
            <TabsTrigger value="application">Заявка</TabsTrigger>
          </TabsList>

          {/* Пакеты франшизы */}
          <TabsContent value="packages">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Пакеты франшизы</h2>
                <p className="text-muted-foreground">Выберите подходящий вариант для вашего бизнеса</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {franchisePackages.map((pkg) => (
                  <Card key={pkg.id} className={`relative hover:shadow-lg transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                    {pkg.popular && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                        Популярный
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary">{pkg.investment.toLocaleString()} ₽</div>
                      <CardDescription>{pkg.description}</CardDescription>
                      <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                        <span>{pkg.area} м²</span>
                        <span>ROI: {pkg.roi}</span>
                        <span>Прибыль: {pkg.profit}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Выбрать пакет
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Дополнительная информация */}
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-center">Что входит во все пакеты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Icon name="FileText" size={48} className="text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Документооборот</h3>
                      <p className="text-sm text-muted-foreground">
                        Полный пакет документов, лицензии, сертификаты
                      </p>
                    </div>
                    <div className="text-center">
                      <Icon name="Wrench" size={48} className="text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Оборудование</h3>
                      <p className="text-sm text-muted-foreground">
                        Профессиональное оборудование от проверенных поставщиков
                      </p>
                    </div>
                    <div className="text-center">
                      <Icon name="Headphones" size={48} className="text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
                      <p className="text-sm text-muted-foreground">
                        Круглосуточная техническая и консультационная поддержка
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Преимущества */}
          <TabsContent value="advantages">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Преимущества франшизы</h2>
                <p className="text-muted-foreground">Почему стоит выбрать BeautySpace</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <Icon name={advantage.icon} size={48} className="text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg">{advantage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Требования к франчайзи */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Требования к партнерам</CardTitle>
                  <CardDescription className="text-center">
                    Что мы ожидаем от наших франчайзи
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon name="CheckCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Процесс открытия */}
          <TabsContent value="process">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Процесс открытия салона</h2>
                <p className="text-muted-foreground">От заявки до открытия за 6 простых шагов</p>
              </div>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <Badge variant="outline">{step.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-16 bg-border ml-6"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Временная шкала */}
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-center">Общий срок открытия</CardTitle>
                  <CardDescription className="text-center">
                    От подписания договора до открытия салона
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3-4 месяца</div>
                    <p className="text-muted-foreground">Средний срок запуска салона</p>
                    <Progress value={75} className="mt-4 max-w-md mx-auto" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Истории успеха */}
          <TabsContent value="stories">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Истории успеха</h2>
                <p className="text-muted-foreground">Реальные результаты наших партнеров</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {successStories.map((story, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4 p-6">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{story.name}</h3>
                          <Badge variant="outline">{story.city}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">
                          Пакет: {story.package} • Открытие: {story.openDate}
                        </div>
                        <blockquote className="italic text-muted-foreground mb-3">
                          "{story.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Выручка в месяц:</span>
                            <span className="font-bold text-primary ml-1">{story.revenue.toLocaleString()} ₽</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Карта салонов */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">География франшизы</CardTitle>
                  <CardDescription className="text-center">
                    Наши салоны работают в 15+ городах России
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">Москва</div>
                      <div className="text-muted-foreground">8 салонов</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">СПб</div>
                      <div className="text-muted-foreground">5 салонов</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">Регионы</div>
                      <div className="text-muted-foreground">12 салонов</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Форма заявки */}
          <TabsContent value="application">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Подать заявку</h2>
                <p className="text-muted-foreground">
                  Заполните форму и получите подробную презентацию франшизы
                </p>
              </div>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Ваше имя"
                      value={applicationForm.name}
                      onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Телефон"
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                    />
                    <Input
                      placeholder="Город"
                      value={applicationForm.city}
                      onChange={(e) => setApplicationForm({...applicationForm, city: e.target.value})}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Select value={applicationForm.experience} onValueChange={(value) => setApplicationForm({...applicationForm, experience: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Опыт в бизнесе" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Нет опыта</SelectItem>
                        <SelectItem value="1-3">1-3 года</SelectItem>
                        <SelectItem value="3-5">3-5 лет</SelectItem>
                        <SelectItem value="5+">Более 5 лет</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={applicationForm.investment} onValueChange={(value) => setApplicationForm({...applicationForm, investment: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Размер инвестиций" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2.5-4">2,5 - 4 млн ₽</SelectItem>
                        <SelectItem value="4-7">4 - 7 млн ₽</SelectItem>
                        <SelectItem value="7+">Более 7 млн ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Textarea
                    placeholder="Дополнительная информация"
                    value={applicationForm.message}
                    onChange={(e) => setApplicationForm({...applicationForm, message: e.target.value})}
                    rows={4}
                  />

                  <Button 
                    onClick={submitApplication}
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={!applicationForm.name || !applicationForm.email || !applicationForm.phone}
                  >
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </div>
                </CardContent>
              </Card>

              {/* Контакты */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Icon name="Phone" size={32} className="text-primary mx-auto mb-2" />
                    <div className="font-semibold">Горячая линия</div>
                    <div className="text-sm text-muted-foreground">+7 (999) 555-77-88</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Icon name="Mail" size={32} className="text-primary mx-auto mb-2" />
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">franchise@beautyspace.ru</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Franchise;