import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [filterRating, setFilterRating] = useState('all');
  const [filterService, setFilterService] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchTerm, setSearchTerm] = useState('');
  const [newReview, setNewReview] = useState({
    name: '',
    service: '',
    rating: 5,
    comment: '',
    photos: []
  });

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      service: 'Окрашивание волос',
      master: 'Анна Петрова',
      rating: 5,
      date: '2024-01-15',
      comment: 'Потрясающий результат! Цвет получился именно таким, как я хотела. Мастер очень профессиональный, учел все мои пожелания. Салон уютный, атмосфера располагающая. Обязательно приду еще!',
      helpful: 12,
      photos: ['/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg'],
      verified: true
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      service: 'Маникюр',
      master: 'Елена Смирнова',
      rating: 5,
      date: '2024-01-12',
      comment: 'Уже третий раз делаю маникюр у Елены. Качество всегда на высоте, волосы остаются здоровыми. Мастер работает аккуратно и быстро. Дизайн всегда получается красивым.',
      helpful: 8,
      photos: ['/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg'],
      verified: true
    },
    {
      id: 3,
      name: 'Елена Козлова',
      service: 'Стрижка',
      master: 'Анна Петрова',
      rating: 4,
      date: '2024-01-10',
      comment: 'Хороший результат, но процедура заняла больше времени, чем планировалось. В целом довольна стрижкой, форма подходит к лицу.',
      helpful: 3,
      photos: [],
      verified: false
    },
    {
      id: 4,
      name: 'Ольга Иванова',
      service: 'Макияж',
      master: 'Мария Козлова',
      rating: 5,
      date: '2024-01-08',
      comment: 'Делала свадебный макияж. Результат превзошел все ожидания! Мария настоящий профессионал, учла все нюансы и пожелания. Макияж держался весь день идеально.',
      helpful: 15,
      photos: ['/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg'],
      verified: true
    },
    {
      id: 5,
      name: 'Татьяна Волкова',
      service: 'Педикюр',
      master: 'Елена Смирнова',
      rating: 4,
      date: '2024-01-05',
      comment: 'Качественно выполненная работа. Мастер внимательный, все инструменты стерильные. Единственный минус - долго ждала своей очереди.',
      helpful: 6,
      photos: [],
      verified: true
    },
    {
      id: 6,
      name: 'Светлана Морозова',
      service: 'Брови',
      master: 'Ольга Иванова',
      rating: 5,
      date: '2024-01-03',
      comment: 'Ольга - мастер от Бога! Сделала идеальную форму бровей, теперь лицо выглядит совершенно по-другому. Очень довольна результатом.',
      helpful: 9,
      photos: [],
      verified: true
    },
    {
      id: 7,
      name: 'Наталья Белова',
      service: 'Окрашивание волос',
      master: 'Анна Петрова',
      rating: 3,
      date: '2024-01-01',
      comment: 'Цвет получился не совсем такой, как хотелось. Мастер старалась, но результат не оправдал ожиданий. Возможно, стоило лучше обсудить детали заранее.',
      helpful: 2,
      photos: [],
      verified: false
    },
    {
      id: 8,
      name: 'Юлия Соколова',
      service: 'Массаж лица',
      master: 'Дарья Волкова',
      rating: 5,
      date: '2023-12-28',
      comment: 'Потрясающий массаж! Кожа после процедуры стала гладкой и подтянутой. Дарья знает свое дело, руки золотые. Обязательно запишусь на курс.',
      helpful: 11,
      photos: [],
      verified: true
    }
  ];

  const services = [
    'Окрашивание волос',
    'Стрижка',
    'Маникюр',
    'Педикюр',
    'Макияж',
    'Брови',
    'Массаж лица'
  ];

  const ratingStats = {
    5: 65,
    4: 20,
    3: 10,
    2: 3,
    1: 2
  };

  const averageRating = 4.8;
  const totalReviews = reviews.length;

  const filteredReviews = reviews.filter(review => {
    const matchesRating = filterRating === 'all' || review.rating.toString() === filterRating;
    const matchesService = filterService === 'all' || review.service === filterService;
    const matchesSearch = review.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRating && matchesService && matchesSearch;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'rating-high':
        return b.rating - a.rating;
      case 'rating-low':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  const submitReview = () => {
    console.log('Review submitted:', newReview);
    setNewReview({ name: '', service: '', rating: 5, comment: '', photos: [] });
  };

  const markHelpful = (id) => {
    console.log('Marked helpful:', id);
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
              <Link to="/reviews" className="text-primary font-medium">Отзывы</Link>
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
          <h1 className="text-4xl font-bold mb-4">Отзывы клиентов</h1>
          <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
        </div>

        {/* Общая статистика */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Icon 
                    key={i} 
                    name="Star" 
                    size={24} 
                    className={i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                  />
                ))}
              </div>
              <CardDescription>На основе {totalReviews} отзывов</CardDescription>
            </CardHeader>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Распределение оценок</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-16">
                    <span>{rating}</span>
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                  </div>
                  <Progress value={ratingStats[rating]} className="flex-1" />
                  <span className="text-sm text-muted-foreground w-12">{ratingStats[rating]}%</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Фильтры и поиск */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Поиск отзывов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={filterRating} onValueChange={setFilterRating}>
            <SelectTrigger>
              <SelectValue placeholder="Оценка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все оценки</SelectItem>
              <SelectItem value="5">5 звезд</SelectItem>
              <SelectItem value="4">4 звезды</SelectItem>
              <SelectItem value="3">3 звезды</SelectItem>
              <SelectItem value="2">2 звезды</SelectItem>
              <SelectItem value="1">1 звезда</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterService} onValueChange={setFilterService}>
            <SelectTrigger>
              <SelectValue placeholder="Услуга" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все услуги</SelectItem>
              {services.map(service => (
                <SelectItem key={service} value={service}>{service}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Сначала новые</SelectItem>
              <SelectItem value="oldest">Сначала старые</SelectItem>
              <SelectItem value="rating-high">Высокие оценки</SelectItem>
              <SelectItem value="rating-low">Низкие оценки</SelectItem>
              <SelectItem value="helpful">По полезности</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Кнопка добавления отзыва */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Найдено {sortedReviews.length} отзывов
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Plus" size={16} className="mr-2" />
                Написать отзыв
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Написать отзыв</DialogTitle>
                <DialogDescription>
                  Поделитесь своим опытом с другими клиентами
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input 
                  placeholder="Ваше имя"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                />
                <Select value={newReview.service} onValueChange={(value) => setNewReview({...newReview, service: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div>
                  <label className="block text-sm font-medium mb-2">Оценка</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="text-2xl hover:scale-110 transition-transform"
                      >
                        <Icon 
                          name="Star" 
                          size={24} 
                          className={star <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <Textarea 
                  placeholder="Расскажите о своем опыте..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  rows={4}
                />
                <Button onClick={submitReview} className="w-full bg-primary hover:bg-primary/90">
                  Отправить отзыв
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Список отзывов */}
        <div className="space-y-6">
          {sortedReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">{review.name}</div>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            <Icon name="CheckCircle" size={12} className="mr-1" />
                            Проверен
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                      <Badge variant="outline" className="text-xs mt-1">{review.service}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">Мастер: {review.master}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{review.comment}</p>
                
                {review.photos.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {review.photos.map((photo, index) => (
                      <img 
                        key={index}
                        src={photo} 
                        alt={`Фото ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                      />
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => markHelpful(review.id)}
                    >
                      <Icon name="ThumbsUp" size={16} className="mr-1" />
                      Полезно ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="MessageCircle" size={16} className="mr-1" />
                      Ответить
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="Share" size={16} className="mr-1" />
                      Поделиться
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="Flag" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Призыв к действию */}
        <section className="py-16 mt-16 bg-primary text-primary-foreground rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Поделитесь своим опытом</h2>
          <p className="text-xl mb-8 opacity-90">
            Ваш отзыв поможет другим клиентам сделать правильный выбор
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary">
                <Icon name="Edit" className="mr-2" size={20} />
                Написать отзыв
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Написать отзыв</DialogTitle>
                <DialogDescription>
                  Поделитесь своим опытом с другими клиентами
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input 
                  placeholder="Ваше имя"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                />
                <Select value={newReview.service} onValueChange={(value) => setNewReview({...newReview, service: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div>
                  <label className="block text-sm font-medium mb-2">Оценка</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="text-2xl hover:scale-110 transition-transform"
                      >
                        <Icon 
                          name="Star" 
                          size={24} 
                          className={star <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <Textarea 
                  placeholder="Расскажите о своем опыте..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  rows={4}
                />
                <Button onClick={submitReview} className="w-full bg-primary hover:bg-primary/90">
                  Отправить отзыв
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </section>
      </div>
    </div>
  );
};

export default Reviews;