"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { links } from "@/config/links";

interface HowToJoinSectionProps {
  onOpenLore: () => void;
}

const steps = [
  {
    number: "01",
    title: "Перейди в наш Discord",
    description: "Присоединяйся к нашему сообществу и знакомься с другими игроками",
    action: "Присоединиться"
  },
  {
    number: "02", 
    title: "Ознакомься с правилами и лором",
    description: "Изучи мир Neverending Story и узнай о текущей главе истории",
    action: "Читать лор"
  },
  {
    number: "03",
    title: "Получи доступ к серверу",
    description: "Скачай необходимые моды и получи информацию для подключения",
    action: "Получить доступ"
  },
  {
    number: "04",
    title: "Напиши свою главу",
    description: "Начни игру и стань частью бесконечной истории",
    action: "Начать игру"
  }
];

export function HowToJoinSection({ onOpenLore }: HowToJoinSectionProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-accent/20 text-primary border-primary">
            Присоединение
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            Как присоединиться
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Четыре простых шага отделяют вас от великих приключений
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group relative overflow-hidden border-border/50 bg-card/60 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:shadow-xl">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 left-1/2 w-0.5 h-16 bg-gradient-to-b from-accent to-transparent hidden lg:block"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl text-accent group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-accent text-accent hover:bg-accent hover:text-primary-foreground transition-all duration-300"
                        onClick={() => {
                          if (step.number === "01") {
                            window.open(links.discord, '_blank');
                          } else if (step.number === "02") {
                            onOpenLore();
                          } else if (step.number === "03") {
                            window.open(links.internal.modpack, '_blank');
                          } else if (step.number === "04") {
                            window.open(links.discord, '_blank');
                          }
                        }}
                      >
                        {step.action}
                      </Button>
                    </CardContent>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-card/40 via-card/60 to-card/40 rounded-lg border border-border/30">
          <h3 className="text-2xl font-bold mb-4 text-accent">
            Готов к приключению?
          </h3>
          <p className="text-muted-foreground mb-6">
            Присоединяйся к нам и стань частью живой, развивающейся истории
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(links.discord, '_blank')}
          >
            Начать прямо сейчас
          </Button>
        </div>
      </div>
    </section>
  );
}
