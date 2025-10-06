"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, Calendar, MapPin, Users, Scroll, Crown, Swords, Camera, Map, User, Zap, Info } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

interface LorePageProps {
  onClose: () => void;
}

const timelineEvents = [
  {
    season: "Пролог",
    title: "Великое Забвение",
    year: "0 лет назад",
    description: "Мир погрузился в хаос. Древние технологии утрачены, цивилизации пали. Выжившие ищут новые земли среди руин прошлого. Новых правил еще нет, а старые забыты...",
    icon: Scroll,
    color: "destructive"
  }
];

const loreArtifacts = [
  {
    name: "Темпоральный амулет",
    description: "Древний артефакт, позволяющий видеть события прошлых сезонов",
    location: "Потерян в веках",
    discovered: "Пролог",
    x: "",
    y: ""
  }
];

const galleryImages = [
  {
    url: "/seven-legion.png",
    title: "Форт седьмого легиона",
    season: "Пролог",
    description: "Величественная крепость, ставшая символом возрождения"
  },
  {
    url: "/image3.png",
    title: "Торговая стоянка",
    season: "Пролог",
    description: "Здесь начинают путь караваны"
  }
];

const legendaryPlayers = [
  {
    name: "Элион Светоносец",
    title: "Бог Искры Жизни и Защитник Слабых",
    clan: "Пантеон Созидания",
    season: "Эра Рассвета",
    achievement: "Даровал силу высокой кармы",
    description: "Добрый и милосердный создатель, подаривший смертным не только жизнь, но и свободную волю. Его свет озаряет путь заблудшим, а его дыхание дарует силы страждущим.",
    legacy: "Его искра до сих пор живёт в каждом живом существе, даруя им способность к состраданию, надежде и добрым делам."
},
{
  name: "Малгор Бездонный",
  title: "Бог Вечного Голода и Разрушитель Миров",
  clan: "Пустота",
  season: "Эра Безвременья",
  achievement: "Даровал силу низкой кармы",
  description: "Древнее зло, рождённое из пустоты между мирами. Не обладая формой, он стремится поглотить всё сущее, дабы утолить свою ненасытную жажду. Его сила — это искушение, предлагающая могущество в обмен на душу.",
  legacy: "Его шёпот до сих пор звучит в сердцах отчаявшихся, порождая жадность, ненависть и страх, которые пожирают миры изнутри."
}
];

export function LorePage({ onClose }: LorePageProps) {
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string, description: string, season: string} | null>(null);
  const [selectedArtifact, setSelectedArtifact] = useState<typeof loreArtifacts[0] | null>(null);
  const [activeTab, setActiveTab] = useState("timeline");

  // Блокируем прокрутку основного контента и добавляем обработчик Escape
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex-shrink-0 border-b border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Scroll className="w-8 h-8 text-accent" />
              <div>
                <h1 className="text-2xl font-bold text-accent">Хроники Neverending Story</h1>
                <p className="text-sm text-muted-foreground">История выживших в мире руин</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-destructive/20 hover:text-destructive"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            
            {/* Introduction */}
            <Card className="mb-8 border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-accent flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Мир Neverending Story
                </CardTitle>
                <CardDescription>
                  Добро пожаловать в хроники нашего мира — место, где каждое решение оставляет след в истории
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  В мире, где древние цивилизации пали, а технологии утрачены, выжившие борются за каждый день. 
                  Но здесь, в Neverending Story, ваша история не заканчивается со сменой сезона — она становится легендой.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Каждые два месяца мир обновляется, но лучшие творения игроков переживают эпохи, становясь 
                  древними руинами для новых поколений исследователей. Ваши замки станут загадочными развалинами, 
                  ваши города — местами паломничества, а ваши истории — легендами.
                </p>
              </CardContent>
            </Card>

            {/* Tabbed Content */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
                <TabsTrigger value="timeline" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  События
                </TabsTrigger>
                <TabsTrigger value="gallery" className="flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Галерея
                </TabsTrigger>
                <TabsTrigger value="map" className="flex items-center gap-2">
                  <Map className="w-4 h-4" />
                  Карта
                </TabsTrigger>
                <TabsTrigger value="heroes" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Герои
                </TabsTrigger>
              </TabsList>

              {/* Timeline Tab */}
              <TabsContent value="timeline" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Timeline Events */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Calendar className="w-6 h-6 text-accent" />
                      <h2 className="text-xl font-bold text-accent">Хронология Событий</h2>
                    </div>
                    
                    <div className="space-y-6">
                      {timelineEvents.map((event, index) => {
                        const IconComponent = event.icon;
                        return (
                          <Card key={index} className="border-border/50 bg-card/60 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/20">
                                  <IconComponent className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <Badge variant="outline" className="mb-1">
                                    {event.season}
                                  </Badge>
                                  <CardTitle className="text-lg text-accent">
                                    {event.title}
                                  </CardTitle>
                                  <CardDescription className="text-xs">
                                    {event.year}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {event.description}
                              </p>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  {/* Artifacts */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin className="w-6 h-6 text-accent" />
                      <h2 className="text-xl font-bold text-accent">Легендарные Артефакты</h2>
                    </div>
                    
                    <div className="space-y-6">
                      {loreArtifacts.map((artifact, index) => (
                        <Card key={index} className="border-border/50 bg-card/60 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-lg text-accent">
                              {artifact.name}
                            </CardTitle>
                            <Badge variant="secondary" className="w-fit">
                              Обнаружен: {artifact.discovered}
                            </Badge>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {artifact.description}
                            </p>
                            <Separator className="opacity-50" />
                            <div className="flex items-center gap-2 text-xs text-accent/80">
                              <MapPin className="w-3 h-3" />
                              <span>{artifact.location}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Gallery Tab */}
              <TabsContent value="gallery" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-accent mb-2">Галерея Легендарных Мест</h2>
                  <p className="text-muted-foreground">Скриншоты знаковых локаций из прошлых сезонов</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.map((image, index) => (
                    <Card 
                      key={index} 
                      className="group cursor-pointer border-border/50 bg-card/60 backdrop-blur-sm hover:bg-card transition-all duration-300 overflow-hidden"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          width={400}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge 
                          className="absolute top-3 right-3 bg-primary/90 text-primary-foreground"
                        >
                          {image.season}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg text-accent group-hover:text-primary transition-colors">
                          {image.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {image.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Interactive Map Tab */}
              <TabsContent value="map" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-accent mb-2">Интерактивная Карта Мира</h2>
                  <p className="text-muted-foreground">Нажмите на маркеры, чтобы узнать больше об артефактах</p>
                </div>
                
                <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative w-full aspect-video bg-gradient-to-br from-muted/20 via-background to-muted/30 overflow-hidden rounded-lg">
                      {/* Map Background Pattern */}
                      <div className="absolute inset-0 opacity-10" 
                           style={{
                             backgroundImage: `radial-gradient(circle at 25% 25%, rgba(205, 127, 50, 0.3) 0%, transparent 50%),
                                              radial-gradient(circle at 75% 75%, rgba(184, 115, 51, 0.2) 0%, transparent 50%),
                                              radial-gradient(circle at 50% 10%, rgba(139, 69, 19, 0.2) 0%, transparent 40%)`
                           }} 
                      />
                      
                      {/* Artifact Markers */}
                      {loreArtifacts.map((artifact, index) => (
                        <button
                          key={index}
                          className="absolute group transform -translate-x-1/2 -translate-y-1/2 z-10"
                          style={{ left: `${artifact.x}%`, top: `${artifact.y}%` }}
                          onClick={() => setSelectedArtifact(artifact)}
                        >
                          <div className="relative">
                            <div className="w-6 h-6 bg-primary rounded-full border-2 border-primary-foreground shadow-lg animate-pulse" />
                            <div className="absolute -inset-2 border border-primary/30 rounded-full animate-ping" />
                            
                            {/* Tooltip */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20">
                              <p className="text-sm font-semibold text-accent">{artifact.name}</p>
                              <p className="text-xs text-muted-foreground">{artifact.discovered}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                      
                      {/* Map Labels */}

                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Heroes Tab */}
              <TabsContent value="heroes" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-accent mb-2">Легендарные Герои</h2>
                  <p className="text-muted-foreground">Игроки, оставившие наиболее значительный след в истории</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {legendaryPlayers.map((player, index) => (
                    <Card key={index} className="border-border/50 bg-card/60 backdrop-blur-sm hover:bg-card transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-xl text-accent group-hover:text-primary transition-colors">
                              {player.name}
                            </CardTitle>
                            <CardDescription className="font-semibold">
                              {player.title}
                            </CardDescription>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{player.clan}</Badge>
                              <Badge variant="secondary">{player.season}</Badge>
                            </div>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                            <Crown className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-4 h-4 text-accent" />
                            <span className="font-semibold text-accent">Главное достижение:</span>
                          </div>
                          <p className="text-sm text-primary font-semibold">{player.achievement}</p>
                        </div>
                        
                        <Separator className="opacity-50" />
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {player.description}
                        </p>
                        
                        <div className="bg-muted/20 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Scroll className="w-4 h-4 text-accent" />
                            <span className="font-semibold text-accent">Наследие:</span>
                          </div>
                          <p className="text-sm text-muted-foreground italic">{player.legacy}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Legacy System Explanation */}
              <Card className="mt-8 border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Система Наследия</CardTitle>
                  <CardDescription>
                    Как ваши творения становятся частью истории
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-accent">Создайте</h3>
                      <p className="text-sm text-muted-foreground">
                        Стройте уникальные сооружения и развивайте свою цивилизацию
                      </p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto">
                        <Crown className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="font-semibold text-accent">Прославьтесь</h3>
                      <p className="text-sm text-muted-foreground">
                        Лучшие постройки отбираются администрацией для сохранения
                      </p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto">
                        <Scroll className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-accent">Увековечьтесь</h3>
                      <p className="text-sm text-muted-foreground">
                        Ваши творения становятся древними руинами в новом сезоне
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-hidden p-0 gap-0 bg-card/95 backdrop-blur-lg border-border/50">
          {selectedImage && (
            <div className="flex flex-col max-h-[85vh] overflow-hidden">
              <div className="relative flex-shrink-0 max-h-[50vh] overflow-hidden">
                <ImageWithFallback
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain bg-black/20"
                  width={800}
                  height={600}
                />
                <Badge 
                  className="absolute top-4 right-4 bg-primary/90 text-primary-foreground"
                >
                  {selectedImage.season}
                </Badge>
              </div>
              <div className="p-6 overflow-y-auto flex-1 min-h-0">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-2xl text-accent">
                    {selectedImage.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground leading-relaxed">
                    {selectedImage.description}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Artifact Info Modal */}
      <Dialog open={!!selectedArtifact} onOpenChange={() => setSelectedArtifact(null)}>
        <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] gap-0 bg-card/95 backdrop-blur-lg border-border/50 flex flex-col p-6">
          {selectedArtifact && (
            <>
              <DialogHeader className="flex-shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <DialogTitle className="text-xl text-accent break-words">
                      {selectedArtifact.name}
                    </DialogTitle>
                    <Badge variant="secondary" className="mt-1">
                      Обнаружен: {selectedArtifact.discovered}
                    </Badge>
                  </div>
                </div>
                <DialogDescription className="sr-only">
                  Подробная информация об артефакте {selectedArtifact.name}
                </DialogDescription>
              </DialogHeader>
              
              <Separator className="opacity-50 my-4 flex-shrink-0" />
              
              <div className="space-y-4 overflow-y-auto flex-1 min-h-0 pr-2">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="font-semibold text-accent">Описание:</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedArtifact.description}
                  </p>
                </div>
                
                <div className="bg-muted/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-semibold text-accent">Местоположение:</span>
                  </div>
                  <p className="text-sm text-muted-foreground break-words">
                    {selectedArtifact.location}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
