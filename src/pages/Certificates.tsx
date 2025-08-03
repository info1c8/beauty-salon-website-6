import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Certificates = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [recipientInfo, setRecipientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const certificateOptions = [
    {
      id: 1,
      amount: 3000,
      title: 'Базовый сертификат',
      description: 'Подходит для базовых услуг: маникюр, брови, консультация',
      popular: false,
      services: ['Маникюр', 'Коррекция бровей', 'Консультация стилиста']
    },
    {
      id: 2,
      amount: 5000,
      title: 'Стандартный сертификат',
      description: 'Для большинства услуг: стрижка, укладка, макияж',
      popular: true,
      services: ['Стрижка', 'Укладка', 'Дневной макияж', 'Педикюр']
    },
    {
      id: 3,
      amount: 8000,
      title: 'Премиум сертификат',
      description: 'Для сложных процедур: окрашивание, комплексный уход',
      popular: false,
      services: ['Окрашивание', 'Сложные стрижки', 'Вечерний макияж', 'Массаж лица']
    },
    {
      id: 4,
      amount: 12000,
      title: 'VIP сертификат',
      description: 'Полный спектр услуг, включая эксклюзивные процедуры',
      popular: false,
      services: ['Все услуги салона', 'VIP-обслуживание', 'Персональный мастер']
    }
  ];

  const designTemplates = [
    {
      id: 1,
      name: 'Классический',
      preview: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      description: 'Элегантный дизайн в фирменных цветах'
    },
    {
      id: 2,
      name: 'Романтический',
      preview: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      description: 'Нежный дизайн с цветочными мотивами'
    },
    {
      id: 3,
      name: 'Минималистичный',
      preview: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      description: 'Современный лаконичный стиль'
    }
  ];

  const purchaseHistory = [
    {
      id: 'CERT-2024-001',
      amount: 5000,
      purchaseDate: '2024-01-15',
      recipient: 'Мария Петрова',
      status: 'Активен',
      validUntil: '2024-07-15',
      used: 0
    },
    {
      id: 'CERT-2024-002',
      amount: 3000,
      purchaseDate: '2024-01-10',
      recipient: 'Елена Смирнова',
      status: 'Использован',
      validUntil: '2024-07-10',
      used: 3000
    }
  ];

  const handlePurchase = () => {
    const amount = selectedAmount === 'custom' ? parseInt(customAmount) : parseInt(selectedAmount);
    console.log('Purchasing certificate:', { amount, recipientInfo });
  };

  const checkCertificate = (certificateCode: string) => {
    console.log('Checking certificate:', certificateCode);
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
              <Link to="/certificates" className="text-primary font-medium">Сертификаты</Link>
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
          <h1 className="text-4xl font-bold mb-4">Подарочные сертификаты</h1>
          <p className="text-xl text-muted-foreground">Идеальный подарок для ваших близких</p>
        </div>

        {/* Выбор номинала */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Выберите номинал сертификата</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {certificateOptions.map((option) => (
              <Card 
                key={option.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  selectedAmount === option.amount.toString() ? 'ring-2 ring-primary' : ''
                } ${option.popular ? 'border-primary' : ''}`}
                onClick={() => setSelectedAmount(option.amount.toString())}
              >
                {option.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">{option.amount.toLocaleString()} ₽</CardTitle>
                  <CardDescription className="font-semibold">{option.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                  <div className="space-y-1">
                    {option.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <Icon name="Check" size={12} className="text-green-500" />
                        {service}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Произвольная сумма */}
          <Card className={`max-w-md mx-auto ${selectedAmount === 'custom' ? 'ring-2 ring-primary' : ''}`}>
            <CardHeader className="text-center">
              <CardTitle>Произвольная сумма</CardTitle>
              <CardDescription>Укажите желаемую сумму сертификата</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Введите сумму"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount('custom');
                  }}
                  min="1000"
                  max="50000"
                />
                <span className="flex items-center text-muted-foreground">₽</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Минимальная сумма: 1 000 ₽, максимальная: 50 000 ₽
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Оформление сертификата */}
        {(selectedAmount || customAmount) && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Оформление сертификата</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Дизайн сертификата */}
              <Card>
                <CardHeader>
                  <CardTitle>Выберите дизайн</CardTitle>
                  <CardDescription>Шаблон оформления сертификата</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {designTemplates.map((template) => (
                      <div key={template.id} className="cursor-pointer group">
                        <div className="aspect-video overflow-hidden rounded-lg border-2 border-transparent group-hover:border-primary transition-colors">
                          <img 
                            src={template.preview} 
                            alt={template.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center mt-2">
                          <div className="font-medium text-sm">{template.name}</div>
                          <div className="text-xs text-muted-foreground">{template.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Информация о получателе */}
              <Card>
                <CardHeader>
                  <CardTitle>Информация о получателе</CardTitle>
                  <CardDescription>Данные для оформления сертификата</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Имя получателя"
                    value={recipientInfo.name}
                    onChange={(e) => setRecipientInfo({...recipientInfo, name: e.target.value})}
                  />
                  <Input
                    type="email"
                    placeholder="Email получателя"
                    value={recipientInfo.email}
                    onChange={(e) => setRecipientInfo({...recipientInfo, email: e.target.value})}
                  />
                  <Input
                    placeholder="Телефон получателя"
                    value={recipientInfo.phone}
                    onChange={(e) => setRecipientInfo({...recipientInfo, phone: e.target.value})}
                  />
                  <Textarea
                    placeholder="Поздравительное сообщение (необязательно)"
                    value={recipientInfo.message}
                    onChange={(e) => setRecipientInfo({...recipientInfo, message: e.target.value})}
                    rows={3}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Итоговая информация и покупка */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">
                      Итого: {selectedAmount === 'custom' ? customAmount : selectedAmount} ₽
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Сертификат действителен 6 месяцев с даты покупки
                    </div>
                  </div>
                  <Button 
                    onClick={handlePurchase}
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    disabled={!recipientInfo.name || !recipientInfo.email}
                  >
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Купить сертификат
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Проверка сертификата */}
        <section className="mb-12">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle>Проверить сертификат</CardTitle>
              <CardDescription>Введите код сертификата для проверки баланса</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="CERT-2024-001" />
              <Button className="w-full" variant="outline">
                <Icon name="Search" size={16} className="mr-2" />
                Проверить
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* История покупок */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">История покупок</h2>
          <div className="space-y-4">
            {purchaseHistory.map((cert) => (
              <Card key={cert.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-semibold">Сертификат {cert.id}</div>
                      <div className="text-sm text-muted-foreground">
                        Получатель: {cert.recipient}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Куплен: {cert.purchaseDate} • Действует до: {cert.validUntil}
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-2xl font-bold">{cert.amount.toLocaleString()} ₽</div>
                      <Badge variant={cert.status === 'Активен' ? 'default' : 'secondary'}>
                        {cert.status}
                      </Badge>
                      {cert.used > 0 && (
                        <div className="text-sm text-muted-foreground">
                          Использовано: {cert.used.toLocaleString()} ₽
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Преимущества сертификатов */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Преимущества наших сертификатов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Icon name="Gift" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Идеальный подарок</h3>
              <p className="text-sm text-muted-foreground">
                Подходит для любого повода и получателя
              </p>
            </div>
            <div className="text-center">
              <Icon name="Calendar" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Длительный срок</h3>
              <p className="text-sm text-muted-foreground">
                Действует 6 месяцев с момента покупки
              </p>
            </div>
            <div className="text-center">
              <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Все услуги</h3>
              <p className="text-sm text-muted-foreground">
                Можно использовать для любых услуг салона
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certificates;