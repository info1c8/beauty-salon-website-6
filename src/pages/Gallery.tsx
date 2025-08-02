import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid, masonry, list

  const galleryItems = [
    {
      id: 1,
      title: 'Стрижка каре',
      category: 'hair',
      master: 'Анна Петрова',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      description: 'Современная интерпретация классического каре',
      tags: ['стрижка', 'каре', 'блонд'],
      likes: 45,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Омбре на длинные волосы',
      category: 'hair',
      master: 'Анна Петрова',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      description: 'Плавный переход от темного к светлому',
      tags: ['окрашивание', 'омбре', 'длинные волосы'],
      likes: 67,
      date: '2024-01-12'
    },
    {
      id: 3,
      title: 'Французский маникюр',
      category: 'nails',
      master: 'Елена Смирнова',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      description: 'Классический французский маникюр с современным дизайном',
      tags: ['маникюр', 'французский', 'классика'],
      likes: 32,
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'Nail Art с цветами',
      category: 'nails',
      master: 'Елена Смирнова',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      description: 'Художественная роспись с цветочными мотивами',
      tags: ['nail art', 'цветы', 'роспись'],
      likes: 89,
      date: '2024-01-08'
    },
    {
      id: 5,
      title: 'Вечерний макияж',
      category: 'makeup',
      master: 'Мария Козлова',
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      description: 'Элегантный вечерний образ для особого случая',
      tags: ['макияж', 'вечерний', 'элегантность'],
      likes: 78,
      date: '2024-01-05'
    },
    {
      id: 6,
      title: 'Свадебный образ',
      category: 'makeup',
      master: 'Мария Козлова',
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      description: 'Нежный свадебный макияж и прическа',
      tags: ['свадьба', 'макияж', 'прическа'],
      likes: 156,
      date: '2024-01-03'
    },
    {
      id: 7,
      title: 'Архитектура бровей',
      category: 'brows',
      master: 'Ольга Иванова',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      description: 'Идеальная форма бровей по золотому сечению',
      tags: ['брови', 'архитектура', 'коррекция'],
      likes: 43,
      date: '2024-01-01'
    },
    {
      id: 8,
      title: 'Ламинирование бровей',
      category: 'brows',
      master: 'Ольга Иванова',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      description: 'Долговременная укладка бровей',
      tags: ['брови', 'ламинирование', 'укладка'],
      likes: 38,
      date: '2023-12-28'
    },
    {
      id: 9,
      title: 'Балаяж',
      category: 'hair',
      master: 'Анна Петрова',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      description: 'Техника окрашивания балаяж для естественного эффекта',
      tags: ['балаяж', 'окрашивание', 'естественность'],
      likes: 92,
      date: '2023-12-25'
    },
    {
      id: 10,
      title: 'Геометрический дизайн',
      category: 'nails',
      master: 'Елена Смирнова',
      image: '/img/855654f6-4e01-4fe7-964e-0b0c33ac953d.jpg',
      description: 'Современный геометрический дизайн ногтей',
      tags: ['геометрия', 'дизайн', 'современность'],
      likes: 54,
      date: '2023-12-22'
    },
    {
      id: 11,
      title: 'Дневной макияж',
      category: 'makeup',
      master: 'Мария Козлова',
      image: '/img/546b4764-d12d-49b2-8900-e423adc23e19.jpg',
      description: 'Естественный дневной макияж',
      tags: ['дневной', 'естественность', 'nude'],
      likes: 29,
      date: '2023-12-20'
    },
    {
      id: 12,
      title: 'Пикси стрижка',
      category: 'hair',
      master: 'Анна Петрова',
      image: '/img/d70e7a39-1ecf-4182-9c63-a335a1c4d8b3.jpg',
      description: 'Стильная короткая стрижка пикси',
      tags: ['пикси', 'короткая стрижка', 'стиль'],
      likes: 71,
      date: '2023-12-18'
    }
  ];

  const categories = [
    { value: 'all', label: 'Все работы', icon: 'Image' },
    { value: 'hair', label: 'Волосы', icon: 'Scissors' },
    { value: 'nails', label: 'Ногти', icon: 'Hand' },
    { value: 'makeup', label: 'Макияж', icon: 'Palette' },
    { value: 'brows', label: 'Брови', icon: 'Eye' }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openImage = (item) => {
    setSelectedImage(item);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const likeImage = (id) => {
    // Логика лайка
    console.log('Liked image:', id);
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
              <Link to="/gallery" className="text-primary font-medium">Галерея</Link>
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
          <h1 className="text-4xl font-bold mb-4">Галерея работ</h1>
          <p className="text-xl text-muted-foreground">Примеры наших лучших работ</p>
        </div>

        {/* Фильтры и поиск */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Поиск по работам..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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

            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Icon name="Grid3X3" size={16} />
              </Button>
              <Button
                variant={viewMode === 'masonry' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('masonry')}
              >
                <Icon name="Grid2X2" size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <Icon name="List" size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Результаты */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Найдено {filteredItems.length} работ
          </p>
          <div className="flex items-center gap-2">
            <Icon name="Heart" size={16} className="text-red-500" />
            <span className="text-sm text-muted-foreground">
              {filteredItems.reduce((sum, item) => sum + item.likes, 0)} лайков
            </span>
          </div>
        </div>

        {/* Сетка изображений */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => openImage(item)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" onClick={() => likeImage(item.id)}>
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                  <Badge className="absolute top-2 left-2 bg-primary/90">
                    {categories.find(cat => cat.value === item.category)?.label}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.master}</span>
                    <div className="flex items-center gap-1">
                      <Icon name="Heart" size={14} className="text-red-500" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Masonry вид */}
        {viewMode === 'masonry' && (
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 mb-6 break-inside-avoid">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => openImage(item)}
                    style={{ height: `${200 + Math.random() * 200}px` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <Badge className="absolute top-2 left-2 bg-primary/90">
                    {categories.find(cat => cat.value === item.category)?.label}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.master}</span>
                    <div className="flex items-center gap-1">
                      <Icon name="Heart" size={14} className="text-red-500" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Список */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all duration-300">
                <div className="flex">
                  <div className="w-48 h-32 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover rounded-l-lg cursor-pointer"
                      onClick={() => openImage(item)}
                    />
                  </div>
                  <CardContent className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {categories.find(cat => cat.value === item.category)?.label}
                        </Badge>
                        <Button size="sm" variant="ghost" onClick={() => likeImage(item.id)}>
                          <Icon name="Heart" size={16} className="text-red-500 mr-1" />
                          {item.likes}
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Мастер: {item.master}</span>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Статистика */}
        <section className="py-16 mt-16 bg-muted/30 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Наши достижения</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Работ в портфолио</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <div className="text-muted-foreground">Лайков</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Мастеров</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Модалка просмотра изображения */}
      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="space-y-4">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full max-h-96 object-cover rounded-lg"
              />
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground mb-2">{selectedImage.description}</p>
                  <p className="text-sm text-muted-foreground">Мастер: {selectedImage.master}</p>
                  <p className="text-sm text-muted-foreground">Дата: {selectedImage.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={() => likeImage(selectedImage.id)}>
                    <Icon name="Heart" size={16} className="text-red-500 mr-2" />
                    {selectedImage.likes}
                  </Button>
                  <Button variant="outline">
                    <Icon name="Share" size={16} className="mr-2" />
                    Поделиться
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedImage.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;