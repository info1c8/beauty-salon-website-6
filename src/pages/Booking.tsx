import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [booking, setBooking] = useState({
    service: '',
    master: '',
    date: null,
    time: '',
    location: '',
    customerInfo: {
      name: '',
      phone: '',
      email: '',
      comment: ''
    },
    preferences: {
      reminders: true,
      newsletter: false,
      specialOffers: true
    },
    paymentMethod: 'card'
  });

  const services = [
    { id: 1, name: 'Стрижка женская', price: 2500, duration: 60, category: 'hair' },
    { id: 2, name: 'Окрашивание', price: 4500, duration: 180, category: 'hair' },
    { id: 3, name: 'Маникюр', price: 1800, duration: 90, category: 'nails' },
    { id: 4, name: 'Педикюр', price: 2200, duration: 90, category: 'nails' },
    { id: 5, name: 'Макияж вечерний', price: 3000, duration: 60, category: 'makeup' },
    { id: 6, name: 'Брови', price: 800, duration: 30, category: 'brows' }
  ];

  const masters = [
    { id: 1, name: 'Анна Петрова', specialty: 'Стилист-парикмахер', rating: 4.9, services: ['hair'] },
    { id: 2, name: 'Елена Смирнова', specialty: 'Мастер маникюра', rating: 4.8, services: ['nails'] },
    { id: 3, name: 'Мария Козлова', specialty: 'Визажист', rating: 5.0, services: ['makeup'] },
    { id: 4, name: 'Ольга Иванова', specialty: 'Бровист', rating: 4.7, services: ['brows'] }
  ];

  const locations = [
    { id: 1, name: 'Центральный филиал', address: 'ул. Красоты, 15' },
    { id: 2, name: 'Филиал на Арбате', address: 'ул. Арбат, 28' },
    { id: 3, name: 'Филиал в ТЦ Европейский', address: 'пл. Киевского Вокзала, 2' }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];

  const steps = [
    { number: 1, title: 'Услуга и мастер', description: 'Выберите услугу и мастера' },
    { number: 2, title: 'Дата и время', description: 'Выберите удобное время' },
    { number: 3, title: 'Контактные данные', description: 'Укажите ваши данные' },
    { number: 4, title: 'Подтверждение', description: 'Проверьте детали записи' }
  ];

  const selectedService = services.find(s => s.id.toString() === booking.service);
  const selectedMaster = masters.find(m => m.id.toString() === booking.master);
  const selectedLocation = locations.find(l => l.id.toString() === booking.location);

  const availableMasters = booking.service 
    ? masters.filter(master => {
        const service = services.find(s => s.id.toString() === booking.service);
        return service && master.services.includes(service.category);
      })
    : [];

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitBooking = () => {
    console.log('Booking submitted:', booking);
    // Здесь будет логика отправки заявки
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return booking.service && booking.master && booking.location;
      case 2:
        return booking.date && booking.time;
      case 3:
        return booking.customerInfo.name && booking.customerInfo.phone;
      default:
        return true;
    }
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
              <Link to="/booking" className="text-primary font-medium">Запись</Link>
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
          <h1 className="text-4xl font-bold mb-4">Онлайн запись</h1>
          <p className="text-xl text-muted-foreground">Запишитесь на прием в несколько кликов</p>
        </div>

        {/* Индикатор шагов */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-primary border-primary text-primary-foreground' 
                    : 'border-muted-foreground text-muted-foreground'
                }`}>
                  {currentStep > step.number ? (
                    <Icon name="Check" size={20} />
                  ) : (
                    step.number
                  )}
                </div>
                <div className="ml-3 hidden md:block">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Шаг 1: Выбор услуги и мастера */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Выберите услугу</CardTitle>
                  <CardDescription>Какую услугу вы хотите получить?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <Card 
                        key={service.id} 
                        className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                          booking.service === service.id.toString() ? 'ring-2 ring-primary' : ''
                        }`}
                        onClick={() => setBooking({...booking, service: service.id.toString(), master: ''})}
                      >
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{service.name}</h3>
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span>{service.duration} мин</span>
                            <span className="font-bold text-primary">{service.price} ₽</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {booking.service && (
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите мастера</CardTitle>
                    <CardDescription>Доступные мастера для выбранной услуги</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {availableMasters.map((master) => (
                        <Card 
                          key={master.id} 
                          className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                            booking.master === master.id.toString() ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setBooking({...booking, master: master.id.toString()})}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Icon name="User" size={20} className="text-primary" />
                              </div>
                              <div>
                                <h3 className="font-semibold">{master.name}</h3>
                                <p className="text-sm text-muted-foreground">{master.specialty}</p>
                                <div className="flex items-center gap-1 mt-1">
                                  <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                                  <span className="text-sm">{master.rating}</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {booking.master && (
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите филиал</CardTitle>
                    <CardDescription>В каком филиале хотите получить услугу?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {locations.map((location) => (
                        <Card 
                          key={location.id} 
                          className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                            booking.location === location.id.toString() ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setBooking({...booking, location: location.id.toString()})}
                        >
                          <CardContent className="p-4">
                            <h3 className="font-semibold mb-2">{location.name}</h3>
                            <p className="text-sm text-muted-foreground">{location.address}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Шаг 2: Выбор даты и времени */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Выберите дату</CardTitle>
                  <CardDescription>Когда вам удобно прийти?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        setBooking({...booking, date: date});
                      }}
                      locale={ru}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md border"
                    />
                  </div>
                </CardContent>
              </Card>

              {booking.date && (
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите время</CardTitle>
                    <CardDescription>
                      Доступное время на {format(booking.date, 'dd MMMM yyyy', { locale: ru })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={booking.time === time ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setBooking({...booking, time})}
                          className="h-12"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Шаг 3: Контактные данные */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Ваши контактные данные</CardTitle>
                <CardDescription>Укажите информацию для связи</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name"
                      placeholder="Ваше имя"
                      value={booking.customerInfo.name}
                      onChange={(e) => setBooking({
                        ...booking, 
                        customerInfo: {...booking.customerInfo, name: e.target.value}
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone"
                      placeholder="+7 (999) 123-45-67"
                      value={booking.customerInfo.phone}
                      onChange={(e) => setBooking({
                        ...booking, 
                        customerInfo: {...booking.customerInfo, phone: e.target.value}
                      })}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={booking.customerInfo.email}
                    onChange={(e) => setBooking({
                      ...booking, 
                      customerInfo: {...booking.customerInfo, email: e.target.value}
                    })}
                  />
                </div>

                <div>
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea 
                    id="comment"
                    placeholder="Дополнительные пожелания..."
                    value={booking.customerInfo.comment}
                    onChange={(e) => setBooking({
                      ...booking, 
                      customerInfo: {...booking.customerInfo, comment: e.target.value}
                    })}
                  />
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Настройки уведомлений</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="reminders"
                        checked={booking.preferences.reminders}
                        onCheckedChange={(checked) => setBooking({
                          ...booking,
                          preferences: {...booking.preferences, reminders: checked}
                        })}
                      />
                      <Label htmlFor="reminders">SMS-напоминания о записи</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newsletter"
                        checked={booking.preferences.newsletter}
                        onCheckedChange={(checked) => setBooking({
                          ...booking,
                          preferences: {...booking.preferences, newsletter: checked}
                        })}
                      />
                      <Label htmlFor="newsletter">Новости и статьи о красоте</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="offers"
                        checked={booking.preferences.specialOffers}
                        onCheckedChange={(checked) => setBooking({
                          ...booking,
                          preferences: {...booking.preferences, specialOffers: checked}
                        })}
                      />
                      <Label htmlFor="offers">Специальные предложения и скидки</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Способ оплаты</h3>
                  <RadioGroup 
                    value={booking.paymentMethod} 
                    onValueChange={(value) => setBooking({...booking, paymentMethod: value})}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Банковская карта</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">Наличные в салоне</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online">Онлайн-оплата</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Шаг 4: Подтверждение */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Подтверждение записи</CardTitle>
                  <CardDescription>Проверьте детали вашей записи</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Услуга</h3>
                        <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                          <div>
                            <div className="font-medium">{selectedService?.name}</div>
                            <div className="text-sm text-muted-foreground">{selectedService?.duration} минут</div>
                          </div>
                          <div className="font-bold text-primary">{selectedService?.price} ₽</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Мастер</h3>
                        <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon name="User" size={16} className="text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">{selectedMaster?.name}</div>
                            <div className="text-sm text-muted-foreground">{selectedMaster?.specialty}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Дата и время</h3>
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon name="Calendar" size={16} className="text-primary" />
                            <span className="font-medium">
                              {booking.date && format(booking.date, 'dd MMMM yyyy', { locale: ru })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Clock" size={16} className="text-primary" />
                            <span className="font-medium">{booking.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Филиал</h3>
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <div className="font-medium">{selectedLocation?.name}</div>
                          <div className="text-sm text-muted-foreground">{selectedLocation?.address}</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Контактные данные</h3>
                        <div className="p-3 bg-muted/30 rounded-lg space-y-1">
                          <div className="font-medium">{booking.customerInfo.name}</div>
                          <div className="text-sm text-muted-foreground">{booking.customerInfo.phone}</div>
                          {booking.customerInfo.email && (
                            <div className="text-sm text-muted-foreground">{booking.customerInfo.email}</div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Способ оплаты</h3>
                        <div className="p-3 bg-muted/30 rounded-lg">
                          <div className="font-medium">
                            {booking.paymentMethod === 'card' && 'Банковская карта'}
                            {booking.paymentMethod === 'cash' && 'Наличные в салоне'}
                            {booking.paymentMethod === 'online' && 'Онлайн-оплата'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {booking.customerInfo.comment && (
                    <div>
                      <h3 className="font-semibold mb-2">Комментарий</h3>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <p className="text-sm">{booking.customerInfo.comment}</p>
                      </div>
                    </div>
                  )}

                  <Alert>
                    <Icon name="Info" size={16} />
                    <AlertDescription>
                      Мы отправим SMS-подтверждение на указанный номер телефона. 
                      Если нужно отменить или перенести запись, сделайте это не позднее чем за 2 часа.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Навигация по шагам */}
          <div className="flex justify-between items-center mt-8">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <Icon name="ChevronLeft" size={16} className="mr-2" />
              Назад
            </Button>

            <div className="text-sm text-muted-foreground">
              Шаг {currentStep} из {steps.length}
            </div>

            {currentStep < 4 ? (
              <Button 
                onClick={nextStep}
                disabled={!isStepValid(currentStep)}
                className="bg-primary hover:bg-primary/90"
              >
                Далее
                <Icon name="ChevronRight" size={16} className="ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={submitBooking}
                className="bg-primary hover:bg-primary/90"
              >
                <Icon name="Check" size={16} className="mr-2" />
                Подтвердить запись
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;