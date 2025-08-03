import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Careers = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: ''
  });

  const openPositions = [
    {
      id: 1,
      title: 'Стилист-парикмахер',
      department: 'Парикмахерские услуги',
      type: 'Полная занятость',
      experience: 'От 2 лет',
      salary: '80 000 - 150 000 ₽',
      location: 'Центральный филиал',
      description: 'Ищем талантливого стилиста-парикмахера для работы в нашем центральном филиале',
      requirements: [
        'Опыт работы от 2 лет',
        'Знание современных техник стрижки',
        'Опыт работы с профессиональными красителями',
        'Коммуникабельность и клиентоориентированность'
      ],
      responsibilities: [
        'Выполнение стрижек различной сложности',
        'Консультирование клиентов по подбору образа',
        'Поддержание рабочего места в чистоте',
        'Соблюдение стандартов обслуживания'
      ],
      benefits: [
        'Официальное трудоустройство',
        'Гибкий график работы',
        'Обучение за счет компании',
        'Премии и бонусы'
      ],
      urgent: true
    },
    {
      id: 2,
      title: 'Мастер маникюра',
      department: 'Ногтевой сервис',
      type: 'Полная занятость',
      experience: 'От 1 года',
      salary: '60 000 - 120 000 ₽',
      location: 'Все филиалы',
      description: 'Приглашаем мастера маникюра с опытом работы и желанием развиваться',
      requirements: [
        'Опыт работы от 1 года',
        'Знание техник аппаратного маникюра',
        'Навыки nail-арта',
        'Аккуратность и внимание к деталям'
      ],
      responsibilities: [
        'Выполнение маникюра и педикюра',
        'Создание дизайна ногтей',
        'Консультирование по уходу за ногтями',
        'Ведение клиентской базы'
      ],
      benefits: [
        'Современное оборудование',
        'Премиальные материалы',
        'Обучение новым техникам',
        'Карьерный рост'
      ],
      urgent: false
    },
    {
      id: 3,
      title: 'Визажист',
      department: 'Макияж',
      type: 'Частичная занятость',
      experience: 'От 3 лет',
      salary: '70 000 - 130 000 ₽',
      location: 'Центральный филиал',
      description: 'Ищем профессионального визажиста для работы с VIP-клиентами',
      requirements: [
        'Опыт работы от 3 лет',
        'Портфолио работ',
        'Знание трендов в макияже',
        'Опыт работы с невестами'
      ],
      responsibilities: [
        'Создание различных видов макияжа',
        'Работа на выездных мероприятиях',
        'Консультации по подбору косметики',
        'Обучение клиентов техникам макияжа'
      ],
      benefits: [
        'Высокий процент с услуг',
        'Работа с премиум косметикой',
        'Участие в фотосессиях',
        'Творческая свобода'
      ],
      urgent: false
    },
    {
      id: 4,
      title: 'Администратор',
      department: 'Администрация',
      type: 'Полная занятость',
      experience: 'Без опыта',
      salary: '45 000 - 65 000 ₽',
      location: 'Филиал на Арбате',
      description: 'Приглашаем администратора для работы в дружном коллективе',
      requirements: [
        'Коммуникабельность',
        'Стрессоустойчивость',
        'Знание ПК',
        'Желание работать в сфере красоты'
      ],
      responsibilities: [
        'Встреча и консультирование клиентов',
        'Ведение записи на услуги',
        'Работа с кассой',
        'Поддержание порядка в салоне'
      ],
      benefits: [
        'Обучение с нуля',
        'Дружный коллектив',
        'Скидки на услуги',
        'Стабильная зарплата'
      ],
      urgent: true
    }
  ];

  const companyBenefits = [
    {
      icon: 'DollarSign',
      title: 'Достойная зарплата',
      description: 'Конкурентная оплата труда + премии и бонусы'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение и развитие',
      description: 'Регулярные тренинги, курсы повышения квалификации'
    },
    {
      icon: 'Users',
      title: 'Дружный коллектив',
      description: 'Поддерживающая атмосфера и командная работа'
    },
    {
      icon: 'Calendar',
      title: 'Гибкий график',
      description: 'Возможность выбора удобного графика работы'
    },
    {
      icon: 'Heart',
      title: 'Соцпакет',
      description: 'Медицинская страховка, отпуск, больничные'
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Возможности для профессионального развития'
    }
  ];

  const teamValues = [
    {
      title: 'Профессионализм',
      description: 'Мы стремимся к совершенству в каждой детали',
      icon: 'Award'
    },
    {
      title: 'Творчество',
      description: 'Поощряем креативность и новые идеи',
      icon: 'Palette'
    },
    {
      title: 'Забота о клиентах',
      description: 'Клиент всегда в центре нашего внимания',
      icon: 'Heart'
    },
    {
      title: 'Развитие',
      description: 'Постоянно учимся и совершенствуемся',
      icon: 'TrendingUp'
    }
  ];

  const submitApplication = () => {
    console.log('Application submitted:', applicationForm);
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      portfolio: '',
      coverLetter: ''
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
              <Link to="/careers" className="text-primary font-medium">Карьера</Link>
              <Link to="/cart" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="ShoppingCart" size={20} />
                Корзина
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Карьера в BeautySpace</h1>
          <p className="text-xl text-muted-foreground">Присоединяйтесь к нашей команде профессионалов</p>
        </div>

        {/* Hero секция */}
        <section className="mb-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Работай в лучшем салоне красоты</h2>
              <p className="text-muted-foreground mb-6">
                BeautySpace — это место, где талант встречается с возможностями. 
                Мы создаем среду для профессионального роста и творческого развития.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Search" size={20} className="mr-2" />
                  Посмотреть вакансии
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить резюме
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg" 
                alt="Команда BeautySpace"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        <Tabs defaultValue="vacancies" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="vacancies">Вакансии</TabsTrigger>
            <TabsTrigger value="benefits">Преимущества</TabsTrigger>
            <TabsTrigger value="culture">Культура</TabsTrigger>
            <TabsTrigger value="apply">Отклик</TabsTrigger>
          </TabsList>

          {/* Открытые вакансии */}
          <TabsContent value="vacancies">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Открытые вакансии</h2>
                <p className="text-muted-foreground">Найдите идеальную позицию для себя</p>
              </div>

              {openPositions.map((position) => (
                <Card key={position.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{position.title}</CardTitle>
                          {position.urgent && (
                            <Badge variant="destructive">Срочно</Badge>
                          )}
                        </div>
                        <CardDescription className="text-base">{position.department}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{position.salary}</div>
                        <div className="text-sm text-muted-foreground">{position.type}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Требования:</h4>
                          <ul className="space-y-1">
                            {position.requirements.map((req, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Обязанности:</h4>
                          <ul className="space-y-1">
                            {position.responsibilities.slice(0, 2).map((resp, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <Icon name="ArrowRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Мы предлагаем:</h4>
                          <ul className="space-y-1">
                            {position.benefits.map((benefit, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <Icon name="Star" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="MapPin" size={16} />
                          {position.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-primary hover:bg-primary/90">
                            <Icon name="Send" size={16} className="mr-2" />
                            Откликнуться
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Отклик на вакансию</DialogTitle>
                            <DialogDescription>{position.title}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <Input placeholder="Ваше имя" />
                            <Input type="email" placeholder="Email" />
                            <Input placeholder="Телефон" />
                            <Textarea placeholder="Сопроводительное письмо" rows={3} />
                            <Button className="w-full bg-primary hover:bg-primary/90">
                              Отправить отклик
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline">
                        <Icon name="Eye" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Преимущества работы */}
          <TabsContent value="benefits">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Почему стоит работать с нами</h2>
                <p className="text-muted-foreground">Мы заботимся о наших сотрудниках</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyBenefits.map((benefit, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <Icon name={benefit.icon} size={48} className="text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Дополнительные преимущества */}
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Дополнительные бонусы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Coffee" size={20} className="text-primary" />
                        <span>Бесплатный кофе и чай</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Car" size={20} className="text-primary" />
                        <span>Компенсация проезда</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Gift" size={20} className="text-primary" />
                        <span>Подарки к праздникам</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Percent" size={20} className="text-primary" />
                        <span>Скидки на все услуги салона</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Users" size={20} className="text-primary" />
                        <span>Корпоративные мероприятия</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Zap" size={20} className="text-primary" />
                        <span>Современное оборудование</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Корпоративная культура */}
          <TabsContent value="culture">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Наша корпоративная культура</h2>
                <p className="text-muted-foreground">Ценности, которые нас объединяют</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamValues.map((value, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <Icon name={value.icon} size={48} className="text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Отзывы сотрудников */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Что говорят наши сотрудники</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">Анна Петрова</div>
                          <div className="text-sm text-muted-foreground">Стилист-парикмахер</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">
                        "Работаю в BeautySpace уже 3 года. Здесь я смогла реализовать свой творческий потенциал 
                        и постоянно развиваться профессионально. Команда поддерживает, а руководство инвестирует в обучение."
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="User" size={20} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">Елена Смирнова</div>
                          <div className="text-sm text-muted-foreground">Мастер маникюра</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">
                        "Пришла сюда начинающим мастером, а теперь веду собственных клиентов и обучаю новичков. 
                        BeautySpace дает возможность расти и развиваться в любом направлении."
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Форма отклика */}
          <TabsContent value="apply">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Отправить резюме</h2>
                <p className="text-muted-foreground">Расскажите о себе, и мы обязательно свяжемся с вами</p>
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
                    <Select value={applicationForm.position} onValueChange={(value) => setApplicationForm({...applicationForm, position: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Желаемая позиция" />
                      </SelectTrigger>
                      <SelectContent>
                        {openPositions.map(position => (
                          <SelectItem key={position.id} value={position.title}>
                            {position.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Другая позиция</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Input
                    placeholder="Опыт работы"
                    value={applicationForm.experience}
                    onChange={(e) => setApplicationForm({...applicationForm, experience: e.target.value})}
                  />

                  <Input
                    placeholder="Ссылка на портфолио (необязательно)"
                    value={applicationForm.portfolio}
                    onChange={(e) => setApplicationForm({...applicationForm, portfolio: e.target.value})}
                  />

                  <Textarea
                    placeholder="Сопроводительное письмо"
                    value={applicationForm.coverLetter}
                    onChange={(e) => setApplicationForm({...applicationForm, coverLetter: e.target.value})}
                    rows={4}
                  />

                  <Button 
                    onClick={submitApplication}
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={!applicationForm.name || !applicationForm.email || !applicationForm.phone}
                  >
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить резюме
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Careers;