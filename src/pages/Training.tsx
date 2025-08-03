import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Training = () => {
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Основы парикмахерского искусства',
      description: 'Полный курс для начинающих парикмахеров',
      category: 'hair',
      level: 'beginner',
      duration: 120,
      price: 45000,
      instructor: 'Анна Петрова',
      rating: 4.9,
      students: 156,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      modules: [
        'Анатомия волос и кожи головы',
        'Инструменты и оборудование',
        'Базовые техники стрижки',
        'Укладка и финиширование'
      ],
      certificate: true,
      popular: true,
      nextStart: '2024-03-01'
    },
    {
      id: 2,
      title: 'Профессиональный маникюр',
      description: 'Комплексное обучение маникюру и nail-арту',
      category: 'nails',
      level: 'beginner',
      duration: 80,
      price: 32000,
      instructor: 'Елена Смирнова',
      rating: 4.8,
      students: 203,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      modules: [
        'Анатомия ногтей',
        'Классический маникюр',
        'Аппаратный маникюр',
        'Покрытие гель-лаком',
        'Основы nail-арта'
      ],
      certificate: true,
      popular: false,
      nextStart: '2024-02-20'
    },
    {
      id: 3,
      title: 'Искусство макияжа',
      description: 'От базового до профессионального макияжа',
      category: 'makeup',
      level: 'intermediate',
      duration: 100,
      price: 38000,
      instructor: 'Мария Козлова',
      rating: 5.0,
      students: 89,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      modules: [
        'Теория цвета',
        'Коррекция лица',
        'Дневной макияж',
        'Вечерний макияж',
        'Свадебный макияж'
      ],
      certificate: true,
      popular: true,
      nextStart: '2024-02-25'
    },
    {
      id: 4,
      title: 'Продвинутые техники окрашивания',
      description: 'Сложные техники для опытных мастеров',
      category: 'hair',
      level: 'advanced',
      duration: 60,
      price: 28000,
      instructor: 'Анна Петрова',
      rating: 4.9,
      students: 67,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      modules: [
        'Балаяж и омбре',
        'Сложное мелирование',
        'Цветовые переходы',
        'Коррекция неудачного окрашивания'
      ],
      certificate: true,
      popular: false,
      nextStart: '2024-03-10'
    },
    {
      id: 5,
      title: 'Архитектура бровей',
      description: 'Полный курс по работе с бровями',
      category: 'brows',
      level: 'beginner',
      duration: 40,
      price: 18000,
      instructor: 'Ольга Иванова',
      rating: 4.7,
      students: 134,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      modules: [
        'Анатомия и форма бровей',
        'Коррекция пинцетом',
        'Окрашивание бровей',
        'Ламинирование'
      ],
      certificate: true,
      popular: false,
      nextStart: '2024-02-28'
    },
    {
      id: 6,
      title: 'Косметология и уход за кожей',
      description: 'Основы косметологии для салонов красоты',
      category: 'skincare',
      level: 'intermediate',
      duration: 90,
      price: 42000,
      instructor: 'Дарья Волкова',
      rating: 4.8,
      students: 78,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      modules: [
        'Типы кожи и их особенности',
        'Чистка лица',
        'Массаж лица',
        'Аппаратная косметология'
      ],
      certificate: true,
      popular: false,
      nextStart: '2024-03-05'
    }
  ];

  const categories = [
    { value: 'all', label: 'Все направления', icon: 'BookOpen' },
    { value: 'hair', label: 'Парикмахерское дело', icon: 'Scissors' },
    { value: 'nails', label: 'Ногтевой сервис', icon: 'Hand' },
    { value: 'makeup', label: 'Макияж', icon: 'Palette' },
    { value: 'brows', label: 'Брови', icon: 'Eye' },
    { value: 'skincare', label: 'Косметология', icon: 'Sparkles' }
  ];

  const levels = [
    { value: 'all', label: 'Все уровни' },
    { value: 'beginner', label: 'Начинающий' },
    { value: 'intermediate', label: 'Средний' },
    { value: 'advanced', label: 'Продвинутый' }
  ];

  const instructors = [
    {
      name: 'Анна Петрова',
      specialty: 'Стилист-парикмахер',
      experience: '8 лет',
      courses: 2,
      rating: 4.9,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      achievements: ['Мастер международного класса', 'Сертификат L\'Oreal', 'Победитель конкурса 2023']
    },
    {
      name: 'Елена Смирнова',
      specialty: 'Мастер маникюра',
      experience: '6 лет',
      courses: 1,
      rating: 4.8,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      achievements: ['Чемпион nail-арта', 'Сертификат CND', 'Топ-мастер года']
    },
    {
      name: 'Мария Козлова',
      specialty: 'Визажист',
      experience: '10 лет',
      courses: 1,
      rating: 5.0,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      achievements: ['Работа с знаменитостями', 'Международные сертификаты', 'Визажист года 2023']
    }
  ];

  const benefits = [
    {
      icon: 'Award',
      title: 'Сертификат государственного образца',
      description: 'По окончании курса вы получите официальный сертификат'
    },
    {
      icon: 'Users',
      title: 'Практика на моделях',
      description: 'Отработка навыков на реальных клиентах под контролем преподавателя'
    },
    {
      icon: 'Briefcase',
      title: 'Помощь в трудоустройстве',
      description: 'Содействие в поиске работы и стажировки в лучших салонах'
    },
    {
      icon: 'RefreshCw',
      title: 'Пожизненные обновления',
      description: 'Доступ к новым материалам и техникам на всю жизнь'
    },
    {
      icon: 'Wrench',
      title: 'Профессиональные инструменты',
      description: 'Стартовый набор инструментов в подарок'
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерная поддержка',
      description: 'Консультации по развитию карьеры и открытию собственного дела'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesLevel = filterLevel === 'all' || course.level === filterLevel;
    const matchesCategory = filterCategory === 'all' || course.category === filterCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLevel && matchesCategory && matchesSearch;
  });

  const getLevelLabel = (level: string) => {
    const levelObj = levels.find(l => l.value === level);
    return levelObj ? levelObj.label : level;
  };

  const getCategoryLabel = (category: string) => {
    const categoryObj = categories.find(c => c.value === category);
    return categoryObj ? categoryObj.label : category;
  };

  const enrollInCourse = (courseId: number) => {
    console.log('Enrolling in course:', courseId);
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
              <Link to="/training" className="text-primary font-medium">Обучение</Link>
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
          <h1 className="text-4xl font-bold mb-4">Обучающие курсы</h1>
          <p className="text-xl text-muted-foreground">Станьте профессионалом в сфере красоты</p>
        </div>

        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Курсы</TabsTrigger>
            <TabsTrigger value="instructors">Преподаватели</TabsTrigger>
            <TabsTrigger value="benefits">Преимущества</TabsTrigger>
          </TabsList>

          {/* Курсы */}
          <TabsContent value="courses">
            {/* Фильтры */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск курсов..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Направление" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        <Icon name={category.icon} size={16} />
                        {category.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterLevel} onValueChange={setFilterLevel}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Уровень" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map(level => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Список курсов */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      <Badge className="bg-primary">{getCategoryLabel(course.category)}</Badge>
                      {course.popular && <Badge variant="secondary">Популярный</Badge>}
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="bg-white/90">
                        {getLevelLabel(course.level)}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{course.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span>{course.duration} часов</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="User" size={16} className="text-primary" />
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={16} className="text-primary" />
                        <span>{course.students} студентов</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Программа курса:</div>
                      <ul className="text-xs space-y-1">
                        {course.modules.slice(0, 3).map((module, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="Check" size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                            {module}
                          </li>
                        ))}
                        {course.modules.length > 3 && (
                          <li className="text-muted-foreground">
                            +{course.modules.length - 3} модулей
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary">{course.price.toLocaleString()} ₽</div>
                        <div className="text-xs text-muted-foreground">Старт: {course.nextStart}</div>
                      </div>
                      <div className="flex flex-col gap-1">
                        {course.certificate && (
                          <Badge variant="outline" className="text-xs">Сертификат</Badge>
                        )}
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Записаться на курс
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Запись на курс</DialogTitle>
                          <DialogDescription>{course.title}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Длительность:</span>
                              <span>{course.duration} часов</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Преподаватель:</span>
                              <span>{course.instructor}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Начало курса:</span>
                              <span>{course.nextStart}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Стоимость:</span>
                              <span className="font-bold">{course.price.toLocaleString()} ₽</span>
                            </div>
                          </div>
                          <Input placeholder="Ваше имя" />
                          <Input type="email" placeholder="Email" />
                          <Input placeholder="Телефон" />
                          <Button 
                            onClick={() => enrollInCourse(course.id)}
                            className="w-full bg-primary hover:bg-primary/90"
                          >
                            Записаться
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Преподаватели */}
          <TabsContent value="instructors">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Наши преподаватели</h2>
                <p className="text-muted-foreground">Эксперты с многолетним опытом</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {instructors.map((instructor, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                        <img 
                          src={instructor.image} 
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">{instructor.name}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {instructor.specialty}
                      </CardDescription>
                      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <span>{instructor.experience} опыта</span>
                        <span>{instructor.courses} курса</span>
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                          <span>{instructor.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Достижения:</h4>
                        <ul className="space-y-1">
                          {instructor.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm flex items-center gap-2">
                              <Icon name="Award" size={12} className="text-primary" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Преимущества */}
          <TabsContent value="benefits">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Преимущества обучения</h2>
                <p className="text-muted-foreground">Почему стоит выбрать наши курсы</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
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

              {/* Статистика */}
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Наши результаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">500+</div>
                      <div className="text-muted-foreground">Выпускников</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">95%</div>
                      <div className="text-muted-foreground">Трудоустройство</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                      <div className="text-muted-foreground">Средний рейтинг</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">15</div>
                      <div className="text-muted-foreground">Курсов</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Процесс обучения */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Как проходит обучение</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="BookOpen" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">1. Теория</h4>
                    <p className="text-sm text-muted-foreground">
                      Изучение основ и профессиональных техник
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">2. Практика</h4>
                    <p className="text-sm text-muted-foreground">
                      Отработка навыков на моделях
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="CheckCircle" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">3. Экзамен</h4>
                    <p className="text-sm text-muted-foreground">
                      Итоговая аттестация и получение сертификата
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Briefcase" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">4. Трудоустройство</h4>
                    <p className="text-sm text-muted-foreground">
                      Помощь в поиске работы
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA секция */}
        <Card className="mt-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Начните свою карьеру в индустрии красоты</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Запишитесь на бесплатную консультацию и узнайте больше о наших курсах
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Icon name="Phone" className="mr-2" size={20} />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать каталог курсов
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Training;