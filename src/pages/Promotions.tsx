import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Promotions = () => {
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const promotions = [
    {
      id: 1,
      title: 'Скидка 30% на первое посещение',
      description: 'Специальное предложение для новых клиентов на любую услугу',
      discount: 30,
      type: 'discount',
      validUntil: '2024-03-31',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      conditions: ['Только для новых клиентов', 'Не суммируется с другими акциями'],
      services: ['Все услуги'],
      popular: true
    },
    {
      id: 2,
      title: 'Комплекс "Красота и здоровье"',
      description: 'Маникюр + педикюр + массаж лица со скидкой 25%',
      discount: 25,
      type: 'package',
      validUntil: '2024-02-29',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      originalPrice: 6500,
      discountPrice: 4875,
      conditions: ['Услуги в один день', 'Предварительная запись'],
      services: ['Маникюр', 'Педикюр', 'Массаж лица']
    },
    {
      id: 3,
      title: 'Счастливые часы',
      description: 'Скидка 20% на все услуги с 14:00 до 16:00',
      discount: 20,
      type: 'time',
      validUntil: '2024-12-31',
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      conditions: ['Только в будние дни', 'С 14:00 до 16:00'],
      services: ['Все услуги']
    },
    {
      id: 4,
      title: 'Свадебный пакет',
      description: 'Полный образ невесты: прическа + макияж + маникюр',
      discount: 15,
      type: 'package',
      validUntil: '2024-09-30',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      originalPrice: 12000,
      discountPrice: 10200,
      conditions: ['Пробный образ за 2 недели', 'Выезд на дом +3000₽'],
      services: ['Свадебная прическа', 'Свадебный макияж', 'Маникюр']
    },
    {
      id: 5,
      title: 'Программа лояльности',
      description: 'Накопительная система скидок до 20%',
      discount: 20,
      type: 'loyalty',
      validUntil: 'Постоянно',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      conditions: ['5% после 5 посещений', '10% после 10 посещений', '15% после 15 посещений', '20% после 20 посещений'],
      services: ['Все услуги']
    },
    {
      id: 6,
      title: 'Студенческая скидка',
      description: 'Скидка 15% для студентов при предъявлении студенческого',
      discount: 15,
      type: 'discount',
      validUntil: '2024-06-30',
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      conditions: ['Действующий студенческий билет', 'Не суммируется с другими акциями'],
      services: ['Стрижки', 'Маникюр', 'Брови']
    }
  ];

  const loyaltyLevels = [
    { visits: 5, discount: 5, color: 'bg-blue-500' },
    { visits: 10, discount: 10, color: 'bg-green-500' },
    { visits: 15, discount: 15, color: 'bg-orange-500' },
    { visits: 20, discount: 20, color: 'bg-purple-500' }
  ];

  const filteredPromotions = promotions.filter(promo => {
    const matchesType = filterType === 'all' || promo.type === filterType;
    const matchesSearch = promo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         promo.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getTypeLabel = (type: string) => {
    const types = {
      discount: 'Скидка',
      package: 'Пакет',
      time: 'Время',
      loyalty: 'Лояльность'
    };
    return types[type as keyof typeof types] || type;
  };

  const isExpiringSoon = (validUntil: string) => {
    if (validUntil === 'Постоянно') return false;
    const expiryDate = new Date(validUntil);
    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
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
              <Link to="/promotions" className="text-primary font-medium">Акции</Link>
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
          <h1 className="text-4xl font-bold mb-4">Акции и предложения</h1>
          <p className="text-xl text-muted-foreground">Выгодные предложения для наших клиентов</p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Поиск акций..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Тип акции" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все акции</SelectItem>
              <SelectItem value="discount">Скидки</SelectItem>
              <SelectItem value="package">Пакеты услуг</SelectItem>
              <SelectItem value="time">По времени</SelectItem>
              <SelectItem value="loyalty">Лояльность</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Программа лояльности */}
        <Card className="mb-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Crown" size={24} className="text-primary" />
              Программа лояльности
            </CardTitle>
            <CardDescription>Чем больше посещений, тем больше скидка!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {loyaltyLevels.map((level, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white">
                  <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <span className="text-white font-bold">{level.discount}%</span>
                  </div>
                  <div className="font-semibold">{level.visits} посещений</div>
                  <div className="text-sm text-muted-foreground">Скидка {level.discount}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Список акций */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPromotions.map((promo) => (
            <Card key={promo.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  <Badge className="bg-primary">{promo.discount}%</Badge>
                  {promo.popular && <Badge variant="secondary">Популярная</Badge>}
                  {isExpiringSoon(promo.validUntil) && (
                    <Badge variant="destructive">Скоро истекает</Badge>
                  )}
                </div>
                <Badge variant="outline" className="absolute top-2 right-2">
                  {getTypeLabel(promo.type)}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{promo.title}</CardTitle>
                <CardDescription>{promo.description}</CardDescription>
                
                {promo.originalPrice && (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{promo.discountPrice} ₽</span>
                    <span className="text-lg text-muted-foreground line-through">{promo.originalPrice} ₽</span>
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Действует до:</div>
                  <div className="text-sm text-muted-foreground">{promo.validUntil}</div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Услуги:</div>
                  <div className="flex flex-wrap gap-1">
                    {promo.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Подробнее
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{promo.title}</DialogTitle>
                      <DialogDescription>{promo.description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Условия акции:</h4>
                        <ul className="space-y-1">
                          {promo.conditions.map((condition, index) => (
                            <li key={index} className="text-sm flex items-start gap-2">
                              <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                              {condition}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Записаться
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Подписка на новости */}
        <Card className="mt-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Не пропустите новые акции!</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Подпишитесь на рассылку и узнавайте о скидках первыми
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Ваш email" 
                className="bg-white text-foreground"
              />
              <Button variant="secondary">
                <Icon name="Mail" size={16} className="mr-2" />
                Подписаться
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Promotions;