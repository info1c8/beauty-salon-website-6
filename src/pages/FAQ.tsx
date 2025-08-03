import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [questionForm, setQuestionForm] = useState({
    name: '',
    email: '',
    category: '',
    question: ''
  });

  const faqCategories = [
    {
      id: 'services',
      title: 'Услуги',
      icon: 'Scissors',
      questions: [
        {
          id: 1,
          question: 'Какие услуги вы предоставляете?',
          answer: 'Мы предоставляем полный спектр услуг красоты: стрижки, окрашивание волос, маникюр, педикюр, макияж, уход за бровями, массаж лица и многое другое. Полный список услуг с ценами вы можете найти в разделе "Услуги".',
          popular: true
        },
        {
          id: 2,
          question: 'Сколько времени занимает окрашивание волос?',
          answer: 'Время окрашивания зависит от сложности процедуры: простое тонирование - 1-2 часа, сложное окрашивание (мелирование, балаяж) - 3-4 часа. Точное время мастер определит на консультации.'
        },
        {
          id: 3,
          question: 'Можно ли сделать несколько услуг за одно посещение?',
          answer: 'Да, конечно! Мы предлагаем комплексные программы. Например, стрижка + окрашивание, маникюр + педикюр. При записи сообщите администратору о желаемых услугах.'
        },
        {
          id: 4,
          question: 'Используете ли вы качественные материалы?',
          answer: 'Мы работаем только с профессиональными материалами ведущих мировых брендов: L\'Oreal, Wella, OPI, CND и другими. Все материалы сертифицированы и безопасны.'
        }
      ]
    },
    {
      id: 'booking',
      title: 'Запись',
      icon: 'Calendar',
      questions: [
        {
          id: 5,
          question: 'Как записаться на прием?',
          answer: 'Записаться можно несколькими способами: через наш сайт в разделе "Онлайн запись", по телефону +7 (999) 123-45-67, или лично в салоне. Рекомендуем записываться заранее.',
          popular: true
        },
        {
          id: 6,
          question: 'За сколько времени нужно записываться?',
          answer: 'Рекомендуем записываться за 1-3 дня. На популярные услуги и к топ-мастерам лучше записываться за неделю. В выходные дни запись заполняется быстрее.'
        },
        {
          id: 7,
          question: 'Можно ли отменить или перенести запись?',
          answer: 'Да, вы можете отменить или перенести запись не позднее чем за 2 часа до назначенного времени. Это можно сделать по телефону или через личный кабинет на сайте.'
        },
        {
          id: 8,
          question: 'Что делать, если я опаздываю?',
          answer: 'Обязательно позвоните нам и предупредите об опоздании. Мы постараемся вас принять, но время процедуры может быть сокращено из-за следующих клиентов.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Оплата',
      icon: 'CreditCard',
      questions: [
        {
          id: 9,
          question: 'Какие способы оплаты вы принимаете?',
          answer: 'Мы принимаем наличные, банковские карты (Visa, MasterCard, МИР), Apple Pay, Google Pay, а также онлайн-оплату через сайт. Возможна оплата по QR-коду.',
          popular: true
        },
        {
          id: 10,
          question: 'Можно ли оплатить услуги частями?',
          answer: 'Для дорогостоящих процедур (от 10 000 рублей) возможна рассрочка. Подробности уточняйте у администратора при записи.'
        },
        {
          id: 11,
          question: 'Предоставляете ли вы чеки?',
          answer: 'Да, мы обязательно предоставляем чеки. Электронный чек можем отправить на email или в SMS. Также доступны бумажные чеки.'
        },
        {
          id: 12,
          question: 'Есть ли скидки и акции?',
          answer: 'У нас действует программа лояльности, регулярно проводятся акции. Скидки предоставляются студентам, пенсионерам. Следите за новостями в наших соцсетях.'
        }
      ]
    },
    {
      id: 'masters',
      title: 'Мастера',
      icon: 'Users',
      questions: [
        {
          id: 13,
          question: 'Можно ли выбрать конкретного мастера?',
          answer: 'Да, при записи вы можете выбрать любого мастера. У каждого мастера есть своя специализация и график работы. Информация о мастерах доступна на сайте.',
          popular: true
        },
        {
          id: 14,
          question: 'Какая квалификация у ваших мастеров?',
          answer: 'Все наши мастера имеют профильное образование и регулярно повышают квалификацию. Многие имеют международные сертификаты и участвуют в конкурсах.'
        },
        {
          id: 15,
          question: 'Что делать, если не понравился результат?',
          answer: 'Мы гарантируем качество наших услуг. Если результат вас не устроил, обратитесь к администратору - мы найдем решение и исправим ситуацию бесплатно.'
        }
      ]
    },
    {
      id: 'other',
      title: 'Прочее',
      icon: 'HelpCircle',
      questions: [
        {
          id: 16,
          question: 'Есть ли парковка рядом с салоном?',
          answer: 'У центрального филиала есть бесплатная парковка на 20 мест. У других филиалов - платная парковка поблизости. Подробная информация указана в разделе "Контакты".'
        },
        {
          id: 17,
          question: 'Можно ли прийти с детьми?',
          answer: 'Да, дети могут находиться в салоне в сопровождении взрослых. У нас есть детская зона с игрушками и книжками. Для детей также предоставляются услуги стрижки.'
        },
        {
          id: 18,
          question: 'Соблюдаете ли вы санитарные нормы?',
          answer: 'Мы строго соблюдаем все санитарно-эпидемиологические требования. Все инструменты стерилизуются, используются одноразовые материалы где это необходимо.'
        },
        {
          id: 19,
          question: 'Работаете ли вы в праздничные дни?',
          answer: 'В большинство праздников мы работаем по сокращенному графику. Точное расписание на праздничные дни публикуется заранее на сайте и в соцсетях.'
        }
      ]
    }
  ];

  const popularQuestions = faqCategories
    .flatMap(category => category.questions)
    .filter(q => q.popular);

  const allQuestions = faqCategories.flatMap(category => category.questions);

  const filteredQuestions = allQuestions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const submitQuestion = () => {
    console.log('Question submitted:', questionForm);
    setQuestionForm({ name: '', email: '', category: '', question: '' });
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
              <Link to="/faq" className="text-primary font-medium">FAQ</Link>
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
          <h1 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h1>
          <p className="text-xl text-muted-foreground">Найдите ответы на популярные вопросы</p>
        </div>

        {/* Поиск */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Поиск по вопросам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-lg py-6"
            />
          </div>
        </div>

        <Tabs defaultValue="popular" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="popular">Популярные</TabsTrigger>
            <TabsTrigger value="categories">По категориям</TabsTrigger>
            <TabsTrigger value="ask">Задать вопрос</TabsTrigger>
          </TabsList>

          {/* Популярные вопросы */}
          <TabsContent value="popular">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Популярные вопросы</h2>
                <p className="text-muted-foreground">Самые часто задаваемые вопросы наших клиентов</p>
              </div>

              {searchTerm ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Результаты поиска ({filteredQuestions.length})</h3>
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredQuestions.map((question) => (
                      <AccordionItem key={question.id} value={question.id.toString()}>
                        <Card>
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <div className="flex items-center gap-3 text-left">
                              <Icon name="HelpCircle" size={20} className="text-primary flex-shrink-0" />
                              <span className="font-medium">{question.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">{question.answer}</p>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ) : (
                <Accordion type="single" collapsible className="space-y-4">
                  {popularQuestions.map((question) => (
                    <AccordionItem key={question.id} value={question.id.toString()}>
                      <Card>
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center gap-3 text-left">
                            <Icon name="Star" size={20} className="text-primary flex-shrink-0" />
                            <span className="font-medium">{question.question}</span>
                            <Badge variant="secondary" className="ml-auto">Популярный</Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">{question.answer}</p>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </TabsContent>

          {/* Вопросы по категориям */}
          <TabsContent value="categories">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Вопросы по категориям</h2>
                <p className="text-muted-foreground">Выберите интересующую вас тему</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {faqCategories.map((category) => (
                  <Card key={category.id} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <Icon name={category.icon} size={48} className="text-primary mx-auto mb-4" />
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.questions.length} вопросов</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {faqCategories.map((category) => (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name={category.icon} size={24} className="text-primary" />
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <Badge variant="outline">{category.questions.length}</Badge>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((question) => (
                      <AccordionItem key={question.id} value={question.id.toString()}>
                        <Card>
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <div className="flex items-center gap-3 text-left">
                              <Icon name="HelpCircle" size={16} className="text-primary flex-shrink-0" />
                              <span className="font-medium">{question.question}</span>
                              {question.popular && (
                                <Badge variant="secondary" className="ml-auto">Популярный</Badge>
                              )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">{question.answer}</p>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Задать вопрос */}
          <TabsContent value="ask">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Задать вопрос</h2>
                <p className="text-muted-foreground">Не нашли ответ? Задайте свой вопрос нашим специалистам</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>Мы ответим на ваш вопрос в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Ваше имя"
                      value={questionForm.name}
                      onChange={(e) => setQuestionForm({...questionForm, name: e.target.value})}
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={questionForm.email}
                      onChange={(e) => setQuestionForm({...questionForm, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Категория вопроса</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {faqCategories.map((category) => (
                        <Button
                          key={category.id}
                          variant={questionForm.category === category.id ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setQuestionForm({...questionForm, category: category.id})}
                          className="justify-start"
                        >
                          <Icon name={category.icon} size={16} className="mr-2" />
                          {category.title}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Textarea
                    placeholder="Ваш вопрос"
                    value={questionForm.question}
                    onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                    rows={4}
                  />

                  <Button 
                    onClick={submitQuestion}
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={!questionForm.name || !questionForm.email || !questionForm.question}
                  >
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить вопрос
                  </Button>
                </CardContent>
              </Card>

              {/* Альтернативные способы связи */}
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Icon name="Phone" size={32} className="text-primary mx-auto mb-2" />
                    <div className="font-semibold">Телефон</div>
                    <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-2" />
                    <div className="font-semibold">Telegram</div>
                    <div className="text-sm text-muted-foreground">@beautyspace_bot</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-4">
                    <Icon name="Mail" size={32} className="text-primary mx-auto mb-2" />
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">info@beautyspace.ru</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Полезные ссылки */}
        <Card className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Нужна дополнительная помощь?</CardTitle>
            <CardDescription>
              Ознакомьтесь с другими полезными разделами нашего сайта
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <Button variant="outline" asChild className="h-auto p-4 flex-col">
                <Link to="/services">
                  <Icon name="Scissors" size={24} className="mb-2" />
                  <span>Услуги и цены</span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto p-4 flex-col">
                <Link to="/booking">
                  <Icon name="Calendar" size={24} className="mb-2" />
                  <span>Онлайн запись</span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto p-4 flex-col">
                <Link to="/contacts">
                  <Icon name="MapPin" size={24} className="mb-2" />
                  <span>Контакты</span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto p-4 flex-col">
                <Link to="/loyalty">
                  <Icon name="Gift" size={24} className="mb-2" />
                  <span>Программа лояльности</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;