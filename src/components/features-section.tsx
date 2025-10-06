"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Castle, Swords, Globe, Users } from "lucide-react";

const features = [
  {
    title: "Живая Сага",
    description: "Связанные сюжетные главы. То, что вы сделали в прошлом сезоне, определяет будущее.",
    icon: BookOpen,
    details: "Каждый сезон — новая глава единой истории"
  },
  {
    title: "Наследие Цивилизаций",
    description: "Уникальная система переноса лучших построек между сезонами в виде исторических памятников.",
    icon: Castle,
    details: "Ваше творчество станет частью легенды"
  },
  {
    title: "События и Квесты",
    description: "Регулярные масштабные ивенты от мастеров, определяющие ход истории.",
    icon: Swords,
    details: "Эпические приключения каждые выходные"
  },
  {
    title: "Свобода и Влияние",
    description: "Стройте, объединяйтесь, сражайтесь и торгуйте. Ваши действия имеют вес.",
    icon: Globe,
    details: "Полная свобода в создании своей истории"
  },
  {
    title: "Lite RP Атмосфера",
    description: "Погружение в роль приветствуется, но главное — это уважение к общему повествованию.",
    icon: Users,
    details: "Комфортный уровень отыгрыша для всех"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-primary/20 text-accent border-accent">
            Ключевые особенности
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            Что делает нас особенными
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Каждая особенность создана для того, чтобы ваш игровой опыт был незабываемым
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardHeader className="space-y-4">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-accent group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-accent/80 font-medium">
                    {feature.details}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
                
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-3xl"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Готовы стать частью бесконечной истории?
          </p>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
