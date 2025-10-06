"use client";

import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { links } from "@/config/links";

interface HeroSectionProps {
  onOpenLore: () => void;
}

export function HeroSection({ onOpenLore }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/image.png"
          alt="Post-apocalyptic wasteland"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-b from-accent via-primary to-accent bg-clip-text text-transparent drop-shadow-2xl">
            NEVERENDING STORY
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Бесконечная сага выживания.<br />
            <span className="text-accent">Твои свершения переживут эпоху.</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open(links.discord, '_blank')}
          >
            Присоединиться к Discord
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-lg border-accent text-accent hover:bg-accent hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={onOpenLore}
          >
            Узнать историю мира
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" fill="currentColor" className="text-accent opacity-60">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    </section>
  );
}
