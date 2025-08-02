import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const locations = [
    {
      id: 1,
      name: 'Центральный филиал',
      address: 'ул. Красоты, 15, Москва',
      phone: '+7 (999) 123-45-67',
      email: 'center@beautyspace.ru',
      hours: 'Пн-Вс: 9:00 - 21:00',
      coordinates: { lat: 55.7558, lng: 37.6176 },
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      services: ['Все услуги', 'VIP-зал', 'Парковка'],
      metro: 'м. Тверская',
      main: true
    },
    {
      id: 2,
      name: 'Филиал на Арбате',
      address: 'ул. Арбат, 28, Москва',
      phone: '+7 (999) 123-45-68',
      email: 'arbat@beautyspace.ru',
      hours: 'Пн-Сб: 10:00 - 20:00',
      coordinates: { lat: 55.7522, lng: 37.5932 },
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      services: ['Волосы', 'Ногти', 'Макияж'],
      metro: 'м. Арбатская'
    },
    {
      id: 3,
      name: 'Филиал в ТЦ Европейский',
      address: 'пл. Киевского Вокзала, 2, Москва',
      phone: '+7 (999) 123-45-69',
      email: 'european@beautyspace.ru',
      hours: 'Пн-Вс: 10:00 - 22:00',
      coordinates: { lat: 55.7447, lng: 37.5656 },
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      services: ['Экспресс-услуги', 'Маникюр', 'Брови'],
      metro: 'м. Киевская'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: '#', followers: '15K' },
    { name: 'VKontakte', icon: 'Facebook', url: '#', followers: '8K' },
    { name: 'Telegram', icon: 'MessageCircle', url: '#', followers: '3K' },
    { name: 'WhatsApp', icon: 'Phone', url: '#', followers: 'Чат' }
  ];

  const faqItems = [
    {
      question: 'Как записаться на прием?',
      answer: 'Вы можете записаться через наш сайт, по телефону или в мобильном приложении. Также доступна онлайн-запись 24/7.'
    },
    {
      question: 'Можно ли отменить или перенести запись?',
      answer: 'Да, вы можете отменить или перенести запись не позднее чем за 2 часа до назначенного времени.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем наличные, банковские карты, Apple Pay, Google Pay и онлайн-переводы.'
    },
    {
      question: 'Есть ли парковка?',
      answer: 'В центральном филиале есть бесплатная парковка для клиентов. В других филиалах - платная парковка рядом.'
    },
    {
      question: 'Предоставляете ли вы гарантию на услуги?',
      answer: 'Да, мы предоставляем гарантию на все наши услуги. Условия гарантии зависят от типа услуги.'
    }
  ];

  const submitForm = () => {
    console.log('Form submitted:', contactForm);
    setContactForm({ name: '', phone: '', email: '', subject: '', message: '' });
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
              <Link to="/contacts" className="text-primary font-medium">Контакты</Link>
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
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-muted-foreground">Мы всегда рады вам помочь</p>
        </div>

        {/* Основная контактная информация */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle>Телефон</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-2">+7 (999) 123-45-67</p>
              <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
              <Button className="mt-4" variant="outline">
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-primary mb-2">info@beautyspace.ru</p>
              <p className="text-muted-foreground">Ответим в течение часа</p>
              <Button className="mt-4" variant="outline">
                <Icon name="Mail" size={16} className="mr-2" />
                Написать
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle>Онлайн-чат</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Мгновенные ответы</p>
              <Button className="mt-4" variant="outline">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Открыть чат
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Филиалы */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Наши филиалы</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Card key={location.id} className={`hover:shadow-lg transition-all duration-300 ${location.main ? 'ring-2 ring-primary' : ''}`}>
                <div className="relative">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {location.main && (
                    <Badge className="absolute top-2 left-2 bg-primary">
                      Главный
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    {location.name}
                  </CardTitle>
                  <CardDescription>{location.address}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span className="text-sm">{location.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Train" size={16} className="text-primary" />
                    <span className="text-sm">{location.metro}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {location.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1">
                      <Icon name="Navigation" size={14} className="mr-1" />
                      Маршрут
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Форма обратной связи и FAQ */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Свяжитесь с нами</CardTitle>
              <CardDescription>Оставьте сообщение и мы свяжемся с вами</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Ваше имя"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                />
                <Input 
                  placeholder="Телефон"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                />
              </div>
              <Input 
                placeholder="Email"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              />
              <Select value={contactForm.subject} onValueChange={(value) => setContactForm({...contactForm, subject: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Тема обращения" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="booking">Запись на прием</SelectItem>
                  <SelectItem value="complaint">Жалоба</SelectItem>
                  <SelectItem value="suggestion">Предложение</SelectItem>
                  <SelectItem value="partnership">Сотрудничество</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
              <Textarea 
                placeholder="Ваше сообщение"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                rows={4}
              />
              <Button onClick={submitForm} className="w-full bg-primary hover:bg-primary/90">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить сообщение
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Часто задаваемые вопросы</CardTitle>
              <CardDescription>Ответы на популярные вопросы</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="HelpCircle" size={16} className="text-primary" />
                      {item.question}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Задать свой вопрос
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Социальные сети */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Мы в социальных сетях</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <Icon name={social.icon} size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle>{social.name}</CardTitle>
                  <CardDescription>{social.followers} подписчиков</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подписаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Дополнительная информация */}
        <Tabs defaultValue="schedule" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="schedule">Расписание</TabsTrigger>
            <TabsTrigger value="parking">Парковка</TabsTrigger>
            <TabsTrigger value="accessibility">Доступность</TabsTrigger>
          </TabsList>
          
          <TabsContent value="schedule" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Режим работы</CardTitle>
                <CardDescription>Расписание работы всех филиалов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {locations.map((location) => (
                    <div key={location.id} className="space-y-2">
                      <h4 className="font-semibold">{location.name}</h4>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="text-sm">{location.hours}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="parking" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Парковка</CardTitle>
                <CardDescription>Информация о парковочных местах</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Car" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Центральный филиал</h4>
                      <p className="text-sm text-muted-foreground">Бесплатная парковка на 20 мест. Вход с задней стороны здания.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Car" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Филиал на Арбате</h4>
                      <p className="text-sm text-muted-foreground">Платная парковка рядом. Стоимость 100₽/час.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Car" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Филиал в ТЦ Европейский</h4>
                      <p className="text-sm text-muted-foreground">Парковка ТЦ. Первые 2 часа бесплатно при покупке от 2000₽.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="accessibility" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Доступность</CardTitle>
                <CardDescription>Удобства для людей с ограниченными возможностями</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Пандусы для колясок</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Широкие дверные проемы</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Специальные туалетные комнаты</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Лифты во всех филиалах</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Помощь персонала</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">Специальные места для ожидания</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Экстренные контакты */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <Icon name="AlertTriangle" size={20} />
              Экстренные ситуации
            </CardTitle>
            <CardDescription>Контакты для срочных вопросов</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-red-500" />
                <div>
                  <div className="font-semibold">Горячая линия</div>
                  <div className="text-sm text-muted-foreground">+7 (999) 911-11-11</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MessageCircle" size={20} className="text-red-500" />
                <div>
                  <div className="font-semibold">Telegram</div>
                  <div className="text-sm text-muted-foreground">@beautyspace_help</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;