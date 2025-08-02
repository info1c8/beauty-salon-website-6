import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Masters = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedMaster, setSelectedMaster] = useState(null);

  const masters = [
    {
      id: 1,
      name: 'Анна Петрова',
      specialty: 'Стилист-парикмахер',
      category: 'hair',
      experience: '8 лет',
      rating: 4.9,
      reviewCount: 156,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      description: 'Специалист по сложному окрашиванию и авторским стрижкам',
      services: ['Стрижки', 'Окрашивание', 'Укладки', 'Лечение волос'],
      education: ['Академия красоты L\'Oreal', 'Курсы Toni&Guy', 'Семинары Wella'],
      achievements: ['Лучший колорист 2023', 'Сертификат Olaplex', 'Мастер года 2022'],
      workSchedule: 'Пн-Пт: 10:00-19:00, Сб: 9:00-18:00',
      price: 'от 2500 ₽',
      popular: true
    },
    {
      id: 2,
      name: 'Елена Смирнова',
      specialty: 'Мастер маникюра',
      category: 'nails',
      experience: '6 лет',
      rating: 4.8,
      reviewCount: 134,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      description: 'Эксперт по nail-арту и аппаратному маникюру',
      services: ['Маникюр', 'Педикюр', 'Nail Art', 'Наращивание'],
      education: ['Школа ногтевого сервиса', 'Курсы CND', 'Мастер-классы OPI'],
      achievements: ['Чемпион nail-арта 2023', 'Сертификат Gelish', 'Топ мастер'],
      workSchedule: 'Вт-Сб: 9:00-18:00',
      price: 'от 1800 ₽'
    },
    {
      id: 3,
      name: 'Мария Козлова',
      specialty: 'Визажист',
      category: 'makeup',
      experience: '10 лет',
      rating: 5.0,
      reviewCount: 98,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      description: 'Создаю безупречные образы для любых событий',
      services: ['Дневной макияж', 'Вечерний макияж', 'Свадебный макияж', 'Фотомакияж'],
      education: ['Академия Мэри Кэй', 'Школа визажа Make-up Atelier', 'Курсы MAC'],
      achievements: ['Визажист года 2023', 'Работа с знаменитостями', 'Международные сертификаты'],
      workSchedule: 'Ср-Вс: 11:00-20:00',
      price: 'от 3000 ₽',
      popular: true
    },
    {
      id: 4,
      name: 'Ольга Иванова',
      specialty: 'Бровист',
      category: 'brows',
      experience: '4 года',
      rating: 4.7,
      reviewCount: 87,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      description: 'Архитектура бровей и перманентный макияж',
      services: ['Коррекция бровей', 'Окрашивание', 'Ламинирование', 'Татуаж'],
      education: ['Школа бровистов', 'Курсы PhiBrows', 'Обучение у топ-мастеров'],
      achievements: ['Сертификат PhiBrows', 'Мастер перманента', 'Топ-10 бровистов города'],
      workSchedule: 'Пн-Пт: 10:00-18:00',
      price: 'от 800 ₽'
    },
    {
      id: 5,
      name: 'Дарья Волкова',
      specialty: 'Косметолог',
      category: 'cosmetology',
      experience: '7 лет',
      rating: 4.9,
      reviewCount: 112,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      description: 'Специалист по аппаратной косметологии',
      services: ['Чистка лица', 'Пилинги', 'Массаж лица', 'Аппаратные процедуры'],
      education: ['Медицинский университет', 'Курсы косметологии', 'Сертификаты аппаратов'],
      achievements: ['Медицинское образование', 'Сертификат CIDESCO', 'Эксперт по anti-age'],
      workSchedule: 'Пн-Сб: 9:00-17:00',
      price: 'от 2800 ₽'
    },
    {
      id: 6,
      name: 'Светлана Морозова',
      specialty: 'Массажист',
      category: 'massage',
      experience: '12 лет',
      rating: 4.8,
      reviewCount: 145,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      description: 'Мастер релаксирующего и лечебного массажа',
      services: ['Классический массаж', 'Лимфодренаж', 'Антицеллюлитный', 'Массаж лица'],
      education: ['Медицинский колледж', 'Курсы массажа', 'Обучение в Таиланде'],
      achievements: ['Медицинское образование', 'Сертификат тайского массажа', '12 лет опыта'],
      workSchedule: 'Вт-Сб: 10:00-19:00',
      price: 'от 2500 ₽'
    }
  ];

  const categories = [
    { value: 'all', label: 'Все мастера', icon: 'Users' },
    { value: 'hair', label: 'Парикмахеры', icon: 'Scissors' },
    { value: 'nails', label: 'Мастера ногтей', icon: 'Hand' },
    { value: 'makeup', label: 'Визажисты', icon: 'Palette' },
    { value: 'brows', label: 'Бровисты', icon: 'Eye' },
    { value: 'cosmetology', label: 'Косметологи', icon: 'Sparkles' },
    { value: 'massage', label: 'Массажисты', icon: 'Heart' }
  ];

  const filteredMasters = selectedCategory === 'all' 
    ? masters 
    : masters.filter(master => master.category === selectedCategory);

  const handleBooking = (master) => {
    setSelectedMaster(master);
    setIsBookingOpen(true);
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
              <Link to="/masters" className="text-primary font-medium">Мастера</Link>
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
          <h1 className="text-4xl font-bold mb-4">Наши мастера</h1>
          <p className="text-xl text-muted-foreground">Профессионалы своего дела с многолетним опытом</p>
        </div>

        {/* Фильтры по категориям */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.value)}
              className="flex items-center gap-2"
            >
              <Icon name={category.icon} size={16} />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Сетка мастеров */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMasters.map((master) => (
            <Card key={master.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={master.image} 
                  alt={master.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                {master.popular && (
                  <Badge className="absolute top-2 left-2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{master.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{master.name}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {master.specialty}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{master.price}</div>
                    <Badge variant="outline">{master.experience}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">{master.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MessageCircle" size={16} />
                  <span>{master.reviewCount} отзывов</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <Tabs defaultValue="services" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="services">Услуги</TabsTrigger>
                    <TabsTrigger value="education">Образование</TabsTrigger>
                    <TabsTrigger value="schedule">Расписание</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="services" className="mt-4">
                    <div className="flex flex-wrap gap-1">
                      {master.services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="education" className="mt-4">
                    <ul className="text-sm space-y-1">
                      {master.education.map((edu, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Icon name="GraduationCap" size={14} className="text-primary" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="schedule" className="mt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={14} className="text-primary" />
                      {master.workSchedule}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleBooking(master)}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Записаться
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="MessageCircle" size={16} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Статистика */}
        <section className="py-16 mt-16 bg-muted/30 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Наша команда в цифрах</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Мастеров</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground">Средний рейтинг</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Отзывов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Сертификатов</div>
            </div>
          </div>
        </section>
      </div>

      {/* Модалка записи */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Запись к мастеру</DialogTitle>
            <DialogDescription>
              {selectedMaster && `Запись к ${selectedMaster.name} - ${selectedMaster.specialty}`}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Услуга</label>
              <select className="w-full mt-1 p-2 border rounded-md">
                <option>Выберите услугу</option>
                {selectedMaster?.services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
            <Input type="date" />
            <Input type="time" />
            <Textarea placeholder="Комментарий к записи" />
            <Button className="w-full bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Masters;