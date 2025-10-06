"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Circle } from "lucide-react";
import { links } from "@/config/links";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">NS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-accent">Neverending Story</h1>
              <p className="text-xs text-muted-foreground">Vintage Story RP</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href={links.navigation.home} className="text-muted-foreground hover:text-accent transition-colors duration-200">
              Главная
            </a>
            <a href={links.navigation.features} className="text-muted-foreground hover:text-accent transition-colors duration-200">
              Особенности
            </a>
            <a href={links.navigation.join} className="text-muted-foreground hover:text-accent transition-colors duration-200">
              Как присоединиться
            </a>
            <a href={links.navigation.faq} className="text-muted-foreground hover:text-accent transition-colors duration-200">
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="hidden sm:flex border-primary text-primary items-center gap-1">
              <Circle className="w-2 h-2 fill-primary text-primary animate-pulse" />
              LIVE
            </Badge>
            <Button 
              size="sm"
              className="bg-primary hover:bg-accent transition-colors duration-200"
              onClick={() => window.open(links.discord, '_blank')}
            >
              Discord
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
