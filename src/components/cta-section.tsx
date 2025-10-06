"use client";

import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { MessageCircle, BookOpen } from "lucide-react";
import { links } from "@/config/links";

interface CTASectionProps {
  onOpenLore: () => void;
}

export function CTASection({ onOpenLore }: CTASectionProps) {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1592856435712-81574a5b7609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc1NzI1NDUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dark fantasy mountain landscape"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Начни игру.
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Оставь след.
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Стань легендой.
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Твоя история ждёт своего начала. Присоединяйся к <span className="text-accent font-medium">Endless Story</span> 
            и стань частью бесконечной саги выживания, где каждое действие имеет значение.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="px-12 py-6 text-xl bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
            onClick={() => window.open(links.discord, '_blank')}
          >
            <MessageCircle className="w-6 h-6" />
            Присоединиться к Discord
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onOpenLore}
            className="px-12 py-6 text-xl border-accent text-accent hover:bg-accent hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3"
          >
            <BookOpen className="w-6 h-6" />
            Изучить лор мира
          </Button>
        </div>

        {/* Stats/Features */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">∞</div>
            <p className="text-muted-foreground">Бесконечная история</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2</div>
            <p className="text-muted-foreground">Месяца на сезон</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <p className="text-muted-foreground">Всегда онлайн</p>
          </div>
        </div>

        {/* Final Message */}
        <div className="border-t border-accent/30 pt-8">
          <p className="text-lg text-muted-foreground mb-4">
            Сервер уже запущен • Новый сезон скоро начнётся
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-12 w-3 h-3 bg-primary rounded-full animate-pulse opacity-40 delay-1000"></div>
      <div className="absolute bottom-1/4 left-16 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50 delay-500"></div>
      <div className="absolute bottom-1/3 right-8 w-2.5 h-2.5 bg-primary rounded-full animate-pulse opacity-30 delay-1500"></div>
    </section>
  );
}
