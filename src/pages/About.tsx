import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  const achievements = [
    { number: '5+', label: 'лет на рынке' },
    { number: '10000+', label: 'довольных клиентов' },
    { number: '15', label: 'профессиональных мастеров' },
    { number: '50+', label: 'видов услуг' }
  ];

  const values = [
    {
      icon: 'Heart',
      title: 'Забота о клиентах',
      description: 'Каждый клиент для нас особенный. Мы создаем индивидуальный подход к каждому.'
    },
    {
      icon: 'Award',
      title: 'Профессионализм',
      description: 'Наши мастера постоянно повышают квалификацию и следят за трендами.'
    },
    {
      icon: 'Sparkles',
      title: 'Качество',
      description: 'Используем только премиальные материалы и современное оборудование.'
    },
    {
      icon: 'Users',
      title: 'Команда',
      description: 'Дружная команда профессионалов, объединенных общей целью.'
    }
  ];

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Основатель и директор',
      experience: '10 лет',
      description: 'Визионер и вдохновитель нашей команды',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg'
    },
    {
      name: 'Елена Смирнова',
      position: 'Арт-директор',
      experience: '8 лет',
      description: 'Отвечает за творческое направление салона',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg'
    },
    {
      name: 'Мария Козлова',
      position: 'Старший мастер',
      experience: '12 лет',
      description: 'Наставник молодых специалистов',
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg'
    }
  ];

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
              <Link to="/about" className="text-primary font-medium">О нас</Link>
              <Link to="/cart" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="ShoppingCart" size={20} />
                Корзина
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">О BeautySpace</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Мы создаем красоту и дарим уверенность уже более 5 лет. 
              Наша миссия — помочь каждому клиенту раскрыть свою уникальную красоту.
            </p>
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши ценности</h2>
            <p className="text-xl text-muted-foreground">Принципы, которыми мы руководствуемся</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Icon name={value.icon} size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* История компании */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Наша история</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">2019</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Основание салона</h3>
                    <p className="text-muted-foreground">Анна Петрова открыла первый салон BeautySpace с командой из 3 мастеров.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">2021</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Расширение</h3>
                    <p className="text-muted-foreground">Открытие второго филиала и расширение команды до 10 специалистов.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">2023</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Признание</h3>
                    <p className="text-muted-foreground">Получение премии "Лучший салон красоты года" в городе.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">2024</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Инновации</h3>
                    <p className="text-muted-foreground">Внедрение новых технологий и запуск онлайн-платформы.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg" 
                alt="История салона"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Команда руководителей */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Руководство</h2>
            <p className="text-xl text-muted-foreground">Люди, которые делают BeautySpace особенным</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {member.position}
                  </CardDescription>
                  <Badge variant="outline">{member.experience} опыта</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Сертификаты и награды */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Награды и сертификаты</h2>
            <p className="text-xl text-muted-foreground">Признание нашего профессионализма</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Award" size={64} className="text-primary mx-auto mb-4" />
                <CardTitle>Лучший салон 2023</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Премия от ассоциации салонов красоты</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Certificate" size={64} className="text-primary mx-auto mb-4" />
                <CardTitle>ISO 9001</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Сертификат качества услуг</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Star" size={64} className="text-primary mx-auto mb-4" />
                <CardTitle>5 звезд</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Рейтинг на всех платформах отзывов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Присоединяйтесь к нашей семье</h2>
          <p className="text-xl mb-8 opacity-90">
            Станьте частью истории BeautySpace и откройте для себя новый уровень красоты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;