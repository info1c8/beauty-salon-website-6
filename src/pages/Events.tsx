import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      title: 'Мастер-класс по окрашиванию волос',
      description: 'Изучаем современные техники окрашивания с ведущим колористом',
      type: 'masterclass',
      date: '2024-02-15',
      time: '14:00',
      duration: 180,
      price: 3500,
      maxParticipants: 12,
      currentParticipants: 8,
      instructor: 'Анна Петрова',
      location: 'Центральный филиал',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      level: 'Для профессионалов',
      materials: 'Включены',
      certificate: true,
      popular: true
    },
    {
      id: 2,
      title: 'Презентация новой коллекции косметики',
      description: 'Знакомство с новинками премиальной косметики от ведущих брендов',
      type: 'presentation',
      date: '2024-02-20',
      time: '18:00',
      duration: 120,
      price: 0,
      maxParticipants: 30,
      currentParticipants: 15,
      instructor: 'Мария Козлова',
      location: 'Центральный филиал',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      level: 'Для всех',
      materials: 'Подарки участникам',
      certificate: false,
      popular: false
    },
    {
      id: 3,
      title: 'Семинар по nail-арту',
      description: 'Создаем сложные дизайны ногтей с использованием современных техник',
      type: 'seminar',
      date: '2024-02-25',
      time: '11:00',
      duration: 240,
      price: 4200,
      maxParticipants: 8,
      currentParticipants: 6,
      instructor: 'Елена Смирнова',
      location: 'Филиал на Арбате',
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      level: 'Средний уровень',
      materials: 'Включены',
      certificate: true,
      popular: false
    },
    {
      id: 4,
      title: 'Открытый урок по макияжу',
      description: 'Базовые техники макияжа для начинающих',
      type: 'lesson',
      date: '2024-03-01',
      time: '16:00',
      duration: 90,
      price: 1500,
      maxParticipants: 15,
      currentParticipants: 3,
      instructor: 'Мария Козлова',
      location: 'Центральный филиал',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      level: 'Для начинающих',
      materials: 'Частично включены',
      certificate: false,
      popular: false
    },
    {
      id: 5,
      title: 'Конференция "Тренды красоты 2024"',
      description: 'Обсуждаем главные тренды года с ведущими экспертами индустрии',
      type: 'conference',
      date: '2024-03-10',
      time: '10:00',
      duration: 480,
      price: 8500,
      maxParticipants: 50,
      currentParticipants: 32,
      instructor: 'Команда экспертов',
      location: 'Конференц-зал',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      level: 'Для профессионалов',
      materials: 'Методические материалы',
      certificate: true,
      popular: true
    },
    {
      id: 6,
      title: 'Воркшоп по уходу за кожей',
      description: 'Изучаем правильный уход за кожей лица в домашних условиях',
      type: 'workshop',
      date: '2024-03-15',
      time: '13:00',
      duration: 150,
      price: 2800,
      maxParticipants: 20,
      currentParticipants: 12,
      instructor: 'Дарья Волкова',
      location: 'Центральный филиал',
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      level: 'Для всех',
      materials: 'Пробники продукции',
      certificate: false,
      popular: false
    }
  ];

  const eventTypes = [
    { value: 'all', label: 'Все мероприятия', icon: 'Calendar' },
    { value: 'masterclass', label: 'Мастер-классы', icon: 'GraduationCap' },
    { value: 'seminar', label: 'Семинары', icon: 'BookOpen' },
    { value: 'workshop', label: 'Воркшопы', icon: 'Users' },
    { value: 'presentation', label: 'Презентации', icon: 'Presentation' },
    { value: 'conference', label: 'Конференции', icon: 'Mic' },
    { value: 'lesson', label: 'Открытые уроки', icon: 'Play' }
  ];

  const pastEvents = [
    {
      id: 101,
      title: 'Мастер-класс по свадебным прическам',
      date: '2024-01-20',
      participants: 15,
      rating: 4.9,
      photos: ['/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg']
    },
    {
      id: 102,
      title: 'Семинар по трендам макияжа',
      date: '2024-01-15',
      participants: 22,
      rating: 4.8,
      photos: ['/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg']
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesType = filterType === 'all' || event.type === filterType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const registerForEvent = (eventId: number) => {
    console.log('Registering for event:', eventId);
  };

  const getAvailableSpots = (event: any) => {
    return event.maxParticipants - event.currentParticipants;
  };

  const isEventFull = (event: any) => {
    return event.currentParticipants >= event.maxParticipants;
  };

  const getTypeLabel = (type: string) => {
    const typeObj = eventTypes.find(t => t.value === type);
    return typeObj ? typeObj.label : type;
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
              <Link to="/events" className="text-primary font-medium">Мероприятия</Link>
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
          <h1 className="text-4xl font-bold mb-4">Мероприятия и обучение</h1>
          <p className="text-xl text-muted-foreground">Развивайтесь вместе с нами</p>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
            <TabsTrigger value="calendar">Календарь</TabsTrigger>
            <TabsTrigger value="past">Прошедшие</TabsTrigger>
          </TabsList>

          {/* Предстоящие мероприятия */}
          <TabsContent value="upcoming">
            {/* Фильтры */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск мероприятий..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Тип мероприятия" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center gap-2">
                        <Icon name={type.icon} size={16} />
                        {type.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Список мероприятий */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      <Badge className="bg-primary">{getTypeLabel(event.type)}</Badge>
                      {event.popular && <Badge variant="secondary">Популярное</Badge>}
                      {isEventFull(event) && <Badge variant="destructive">Мест нет</Badge>}
                    </div>
                    <div className="absolute top-2 right-2">
                      {event.price === 0 ? (
                        <Badge variant="outline" className="bg-white/90">Бесплатно</Badge>
                      ) : (
                        <Badge variant="outline" className="bg-white/90">{event.price} ₽</Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{event.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-primary" />
                        <span>{format(new Date(event.date), 'dd MMM', { locale: ru })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} className="text-primary" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="User" size={16} className="text-primary" />
                        <span>{event.instructor}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Участников:</span>
                        <span>{event.currentParticipants}/{event.maxParticipants}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {getAvailableSpots(event) > 0 ? 
                          `Осталось ${getAvailableSpots(event)} мест` : 
                          'Мест нет'
                        }
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">{event.level}</Badge>
                      {event.certificate && (
                        <Badge variant="outline" className="text-xs">Сертификат</Badge>
                      )}
                      <Badge variant="outline" className="text-xs">{event.duration} мин</Badge>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90"
                          disabled={isEventFull(event)}
                        >
                          {isEventFull(event) ? 'Мест нет' : 'Записаться'}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Регистрация на мероприятие</DialogTitle>
                          <DialogDescription>{event.title}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Дата:</span>
                              <span>{format(new Date(event.date), 'dd MMMM yyyy', { locale: ru })}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Время:</span>
                              <span>{event.time}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Длительность:</span>
                              <span>{event.duration} минут</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Стоимость:</span>
                              <span className="font-bold">{event.price === 0 ? 'Бесплатно' : `${event.price} ₽`}</span>
                            </div>
                          </div>
                          <Input placeholder="Ваше имя" />
                          <Input type="email" placeholder="Email" />
                          <Input placeholder="Телефон" />
                          <Button 
                            onClick={() => registerForEvent(event.id)}
                            className="w-full bg-primary hover:bg-primary/90"
                          >
                            Зарегистрироваться
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Календарь мероприятий */}
          <TabsContent value="calendar">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Календарь мероприятий</CardTitle>
                    <CardDescription>Выберите дату для просмотра мероприятий</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      locale={ru}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {selectedDate ? (
                    <div>
                      <h3 className="text-xl font-bold mb-4">
                        Мероприятия на {format(selectedDate, 'dd MMMM yyyy', { locale: ru })}
                      </h3>
                      {/* Здесь будут мероприятия на выбранную дату */}
                      <Card>
                        <CardContent className="p-6 text-center">
                          <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">На эту дату мероприятий не запланировано</p>
                        </CardContent>
                      </Card>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-bold mb-4">Ближайшие мероприятия</h3>
                      <div className="space-y-4">
                        {events.slice(0, 3).map((event) => (
                          <Card key={event.id}>
                            <CardContent className="p-4">
                              <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                                  <Icon name="Calendar" size={24} className="text-primary" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold">{event.title}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {format(new Date(event.date), 'dd MMM', { locale: ru })} в {event.time}
                                  </p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Badge variant="outline" className="text-xs">{getTypeLabel(event.type)}</Badge>
                                    {event.price === 0 ? (
                                      <Badge variant="outline" className="text-xs">Бесплатно</Badge>
                                    ) : (
                                      <Badge variant="outline" className="text-xs">{event.price} ₽</Badge>
                                    )}
                                  </div>
                                </div>
                                <Button size="sm">Записаться</Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Прошедшие мероприятия */}
          <TabsContent value="past">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Прошедшие мероприятия</h2>
                <p className="text-muted-foreground">Посмотрите, что мы уже провели</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id}>
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={event.photos[0]} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>
                        {format(new Date(event.date), 'dd MMMM yyyy', { locale: ru })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Icon name="Users" size={16} className="text-primary" />
                            <span className="text-sm">{event.participants} участников</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                            <span className="text-sm">{event.rating}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" size={16} className="mr-2" />
                          Фотоотчет
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Подписка на уведомления */}
        <Card className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Не пропустите новые мероприятия</CardTitle>
            <CardDescription>
              Подпишитесь на уведомления о новых мастер-классах и семинарах
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Ваш email" />
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Bell" size={16} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Events;