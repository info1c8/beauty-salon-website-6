import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Loyalty = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // Данные клиента (в реальном приложении загружались бы с сервера)
  const customerData = {
    name: 'Анна Иванова',
    phone: '+7 (999) 123-45-67',
    email: 'anna@example.com',
    registrationDate: '2023-06-15',
    totalVisits: 12,
    totalSpent: 45600,
    currentLevel: 'Gold',
    currentPoints: 456,
    nextLevelPoints: 500,
    availableBonuses: 1200
  };

  const loyaltyLevels = [
    {
      name: 'Bronze',
      minVisits: 0,
      minSpent: 0,
      discount: 5,
      color: 'bg-amber-600',
      benefits: ['Скидка 5%', 'SMS-уведомления', 'Приоритетная запись']
    },
    {
      name: 'Silver',
      minVisits: 5,
      minSpent: 15000,
      discount: 10,
      color: 'bg-gray-400',
      benefits: ['Скидка 10%', 'Бесплатная консультация', 'Подарок в день рождения']
    },
    {
      name: 'Gold',
      minVisits: 10,
      minSpent: 30000,
      discount: 15,
      color: 'bg-yellow-500',
      benefits: ['Скидка 15%', 'VIP-зона ожидания', 'Персональный менеджер']
    },
    {
      name: 'Platinum',
      minVisits: 20,
      minSpent: 60000,
      discount: 20,
      color: 'bg-purple-600',
      benefits: ['Скидка 20%', 'Эксклюзивные акции', 'Бесплатный выезд мастера']
    }
  ];

  const visitHistory = [
    {
      id: 1,
      date: '2024-01-15',
      services: ['Окрашивание волос', 'Стрижка'],
      master: 'Анна Петрова',
      amount: 6500,
      pointsEarned: 65,
      pointsUsed: 0
    },
    {
      id: 2,
      date: '2024-01-02',
      services: ['Маникюр', 'Педикюр'],
      master: 'Елена Смирнова',
      amount: 4000,
      pointsEarned: 40,
      pointsUsed: 200
    },
    {
      id: 3,
      date: '2023-12-20',
      services: ['Макияж'],
      master: 'Мария Козлова',
      amount: 3000,
      pointsEarned: 30,
      pointsUsed: 0
    }
  ];

  const availableRewards = [
    {
      id: 1,
      title: 'Скидка 500₽',
      description: 'На любую услугу от 2000₽',
      pointsCost: 250,
      validUntil: '2024-03-31',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg'
    },
    {
      id: 2,
      title: 'Бесплатная консультация',
      description: 'Консультация стилиста по подбору образа',
      pointsCost: 150,
      validUntil: '2024-02-29',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg'
    },
    {
      id: 3,
      title: 'Подарочный набор',
      description: 'Набор средств по уходу за волосами',
      pointsCost: 400,
      validUntil: '2024-04-30',
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg'
    }
  ];

  const getCurrentLevel = () => {
    return loyaltyLevels.find(level => level.name === customerData.currentLevel);
  };

  const getNextLevel = () => {
    const currentIndex = loyaltyLevels.findIndex(level => level.name === customerData.currentLevel);
    return currentIndex < loyaltyLevels.length - 1 ? loyaltyLevels[currentIndex + 1] : null;
  };

  const getProgressToNextLevel = () => {
    const nextLevel = getNextLevel();
    if (!nextLevel) return 100;
    
    const progress = (customerData.totalVisits / nextLevel.minVisits) * 100;
    return Math.min(progress, 100);
  };

  const checkLoyaltyCard = () => {
    // Имитация проверки карты лояльности
    if (phoneNumber) {
      setIsRegistered(true);
    }
  };

  const redeemReward = (rewardId: number) => {
    console.log('Redeeming reward:', rewardId);
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
              <Link to="/loyalty" className="text-primary font-medium">Лояльность</Link>
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
          <h1 className="text-4xl font-bold mb-4">Программа лояльности</h1>
          <p className="text-xl text-muted-foreground">Получайте бонусы за каждое посещение</p>
        </div>

        {!isRegistered ? (
          /* Форма проверки карты */
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Проверить карту лояльности</CardTitle>
              <CardDescription>Введите номер телефона для входа в личный кабинет</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="+7 (999) 123-45-67"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button onClick={checkLoyaltyCard} className="w-full bg-primary hover:bg-primary/90">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Войти
              </Button>
              <div className="text-center">
                <Button variant="link">
                  Зарегистрировать новую карту
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Личный кабинет */
          <div className="space-y-8">
            {/* Информация о клиенте */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{customerData.name}</CardTitle>
                    <CardDescription>Клиент с {customerData.registrationDate}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-white ${getCurrentLevel()?.color}`}>
                      <Icon name="Crown" size={16} className="mr-2" />
                      {customerData.currentLevel}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{customerData.totalVisits}</div>
                    <div className="text-sm text-muted-foreground">Посещений</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{customerData.totalSpent.toLocaleString()} ₽</div>
                    <div className="text-sm text-muted-foreground">Потрачено</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{customerData.currentPoints}</div>
                    <div className="text-sm text-muted-foreground">Бонусов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{getCurrentLevel()?.discount}%</div>
                    <div className="text-sm text-muted-foreground">Скидка</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Прогресс до следующего уровня */}
            {getNextLevel() && (
              <Card>
                <CardHeader>
                  <CardTitle>Прогресс до уровня {getNextLevel()?.name}</CardTitle>
                  <CardDescription>
                    Осталось {getNextLevel()?.minVisits - customerData.totalVisits} посещений
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={getProgressToNextLevel()} className="mb-4" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{customerData.totalVisits} посещений</span>
                    <span>{getNextLevel()?.minVisits} посещений</span>
                  </div>
                </CardContent>
              </Card>
            )}

            <Tabs defaultValue="levels" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="levels">Уровни</TabsTrigger>
                <TabsTrigger value="rewards">Награды</TabsTrigger>
                <TabsTrigger value="history">История</TabsTrigger>
                <TabsTrigger value="bonuses">Бонусы</TabsTrigger>
              </TabsList>

              {/* Уровни лояльности */}
              <TabsContent value="levels">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {loyaltyLevels.map((level, index) => (
                    <Card key={index} className={`${level.name === customerData.currentLevel ? 'ring-2 ring-primary' : ''}`}>
                      <CardHeader className="text-center">
                        <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                          <Icon name="Crown" size={24} className="text-white" />
                        </div>
                        <CardTitle>{level.name}</CardTitle>
                        <CardDescription>Скидка {level.discount}%</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div>От {level.minVisits} посещений</div>
                          <div>От {level.minSpent.toLocaleString()} ₽</div>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Преимущества:</h4>
                          <ul className="space-y-1">
                            {level.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-xs flex items-center gap-1">
                                <Icon name="Check" size={12} className="text-green-500" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Доступные награды */}
              <TabsContent value="rewards">
                <div className="grid md:grid-cols-3 gap-6">
                  {availableRewards.map((reward) => (
                    <Card key={reward.id}>
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={reward.image} 
                          alt={reward.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{reward.title}</CardTitle>
                        <CardDescription>{reward.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Icon name="Star" size={16} className="text-primary" />
                            <span className="font-bold">{reward.pointsCost} бонусов</span>
                          </div>
                          <Badge variant="outline">До {reward.validUntil}</Badge>
                        </div>
                        <Button 
                          onClick={() => redeemReward(reward.id)}
                          disabled={customerData.currentPoints < reward.pointsCost}
                          className="w-full"
                        >
                          {customerData.currentPoints >= reward.pointsCost ? 'Получить' : 'Недостаточно бонусов'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* История посещений */}
              <TabsContent value="history">
                <div className="space-y-4">
                  {visitHistory.map((visit) => (
                    <Card key={visit.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="font-semibold">{visit.date}</div>
                            <div className="text-sm text-muted-foreground">
                              Мастер: {visit.master}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {visit.services.map((service, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right space-y-1">
                            <div className="font-bold">{visit.amount} ₽</div>
                            <div className="text-sm text-green-600">+{visit.pointsEarned} бонусов</div>
                            {visit.pointsUsed > 0 && (
                              <div className="text-sm text-red-600">-{visit.pointsUsed} бонусов</div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Управление бонусами */}
              <TabsContent value="bonuses">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Баланс бонусов</CardTitle>
                      <CardDescription>Ваши накопленные бонусы</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">
                          {customerData.availableBonuses}
                        </div>
                        <div className="text-muted-foreground">доступных бонусов</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Как получить бонусы</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="ShoppingBag" size={20} className="text-primary" />
                        <div>
                          <div className="font-medium">За покупки</div>
                          <div className="text-sm text-muted-foreground">1 бонус = 100₽</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Star" size={20} className="text-primary" />
                        <div>
                          <div className="font-medium">За отзывы</div>
                          <div className="text-sm text-muted-foreground">50 бонусов за отзыв</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Users" size={20} className="text-primary" />
                        <div>
                          <div className="font-medium">За друзей</div>
                          <div className="text-sm text-muted-foreground">200 бонусов за приведенного друга</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Информация о программе */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Присоединяйтесь к программе лояльности</CardTitle>
            <CardDescription>
              Получайте бонусы, скидки и эксклюзивные предложения
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Gift" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Бонусы за покупки</h3>
                <p className="text-sm text-muted-foreground">
                  Получайте 1 бонус за каждые 100₽
                </p>
              </div>
              <div>
                <Icon name="Percent" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Растущие скидки</h3>
                <p className="text-sm text-muted-foreground">
                  Скидка увеличивается с каждым уровнем
                </p>
              </div>
              <div>
                <Icon name="Crown" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">VIP-привилегии</h3>
                <p className="text-sm text-muted-foreground">
                  Эксклюзивные предложения для VIP-клиентов
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Loyalty;