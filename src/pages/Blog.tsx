import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Тренды окрашивания волос 2024',
      excerpt: 'Разбираем самые актуальные техники и цвета этого года',
      content: 'Полный обзор трендов окрашивания волос на 2024 год...',
      category: 'hair',
      author: 'Анна Петрова',
      authorRole: 'Стилист-колорист',
      publishDate: '2024-01-20',
      readTime: 5,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      tags: ['окрашивание', 'тренды', '2024'],
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: 'Уход за ногтями в домашних условиях',
      excerpt: 'Простые советы для поддержания красоты ногтей между посещениями салона',
      content: 'Правильный уход за ногтями дома поможет сохранить их здоровье...',
      category: 'nails',
      author: 'Елена Смирнова',
      authorRole: 'Мастер маникюра',
      publishDate: '2024-01-18',
      readTime: 3,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      tags: ['уход', 'ногти', 'дом'],
      views: 890,
      likes: 67
    },
    {
      id: 3,
      title: 'Секреты стойкого макияжа',
      excerpt: 'Как сделать макияж, который продержится весь день',
      content: 'Профессиональные секреты создания долговечного макияжа...',
      category: 'makeup',
      author: 'Мария Козлова',
      authorRole: 'Визажист',
      publishDate: '2024-01-15',
      readTime: 7,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      tags: ['макияж', 'стойкость', 'советы'],
      views: 1450,
      likes: 112
    },
    {
      id: 4,
      title: 'Как выбрать форму бровей',
      excerpt: 'Подбираем идеальную форму бровей под тип лица',
      content: 'Правильная форма бровей может кардинально изменить внешность...',
      category: 'brows',
      author: 'Ольга Иванова',
      authorRole: 'Бровист',
      publishDate: '2024-01-12',
      readTime: 4,
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      tags: ['брови', 'форма', 'лицо'],
      views: 720,
      likes: 54
    },
    {
      id: 5,
      title: 'Подготовка к свадьбе: план красоты',
      excerpt: 'Пошаговый план подготовки невесты за 3 месяца до свадьбы',
      content: 'Комплексная подготовка к свадьбе требует планирования...',
      category: 'wedding',
      author: 'Анна Петрова',
      authorRole: 'Стилист',
      publishDate: '2024-01-10',
      readTime: 8,
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      tags: ['свадьба', 'подготовка', 'план'],
      views: 980,
      likes: 78
    },
    {
      id: 6,
      title: 'Массаж лица: техники и польза',
      excerpt: 'Изучаем различные техники массажа лица и их влияние на кожу',
      content: 'Массаж лица - это не только приятная процедура...',
      category: 'skincare',
      author: 'Дарья Волкова',
      authorRole: 'Косметолог',
      publishDate: '2024-01-08',
      readTime: 6,
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      tags: ['массаж', 'лицо', 'уход'],
      views: 650,
      likes: 45
    }
  ];

  const categories = [
    { value: 'all', label: 'Все статьи', icon: 'BookOpen' },
    { value: 'hair', label: 'Волосы', icon: 'Scissors' },
    { value: 'nails', label: 'Ногти', icon: 'Hand' },
    { value: 'makeup', label: 'Макияж', icon: 'Palette' },
    { value: 'brows', label: 'Брови', icon: 'Eye' },
    { value: 'wedding', label: 'Свадьба', icon: 'Heart' },
    { value: 'skincare', label: 'Уход за кожей', icon: 'Sparkles' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              <Link to="/blog" className="text-primary font-medium">Блог</Link>
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
          <h1 className="text-4xl font-bold mb-4">Блог о красоте</h1>
          <p className="text-xl text-muted-foreground">Советы экспертов, тренды и секреты красоты</p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Поиск статей..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  <div className="flex items-center gap-2">
                    <Icon name={category.icon} size={16} />
                    {category.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Рекомендуемая статья */}
        {featuredPost && categoryFilter === 'all' && !searchTerm && (
          <Card className="mb-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Рекомендуем</Badge>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">
                    {categories.find(cat => cat.value === featuredPost.category)?.label}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime} мин чтения</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 mb-6">
                  <Avatar>
                    <AvatarFallback>{featuredPost.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{featuredPost.author}</div>
                    <div className="text-sm text-muted-foreground">{featuredPost.authorRole}</div>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">
                    {featuredPost.publishDate}
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={16} className="text-muted-foreground" />
                    <span className="text-sm">{featuredPost.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Heart" size={16} className="text-red-500" />
                    <span className="text-sm">{featuredPost.likes}</span>
                  </div>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Читать статью
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Список статей */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge variant="outline" className="absolute top-2 left-2 bg-white/90">
                  {categories.find(cat => cat.value === post.category)?.label}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>{post.publishDate}</span>
                  <span>{post.readTime} мин</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="text-xs">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">{post.author}</div>
                    <div className="text-xs text-muted-foreground">{post.authorRole}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Eye" size={14} />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Heart" size={14} className="text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Читать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Подписка на блог */}
        <Card className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Подпишитесь на наш блог</CardTitle>
            <CardDescription>
              Получайте новые статьи о красоте прямо на почту
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Ваш email" />
              <Button className="bg-primary hover:bg-primary/90">
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

export default Blog;