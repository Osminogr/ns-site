"use client";

import { Badge } from "@/components/ui/badge";
import { Gamepad2, Book, FileText, Settings, MessageCircle, Youtube, Users, Target } from "lucide-react";
import { links } from "@/config/links";

export function Footer() {
  return (
    <footer className="bg-card/40 border-t border-border/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NS</span>
              </div>
              <h3 className="text-lg font-bold text-accent">Neverending Story</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Бесконечная сага выживания в мире Vintage Story. 
              Каждая эпоха — новая глава истории, которую пишете вы.
            </p>
            <div className="flex space-x-2">
              <Badge variant="outline" className="text-xs border-accent text-accent">
                Lite RP
              </Badge>
              <Badge variant="outline" className="text-xs border-primary text-primary">
                PvP/PvE
              </Badge>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-accent font-medium mb-4">Полезные ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={links.external.vintageStoryOfficial} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center space-x-2">
                  <Gamepad2 className="w-4 h-4 text-accent" />
                  <span>Vintage Story Official</span>
                </a>
              </li>
              <li>
                <a href={links.internal.modpack} className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center space-x-2">
                  <Book className="w-4 h-4 text-accent" />
                  <span>Модпак сервера</span>
                </a>
              </li>
              <li>
                <a href={links.external.vintageStoryWiki} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-accent" />
                  <span>Wiki по игре</span>
                </a>
              </li>
              <li>
                <a href={links.internal.support} className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center space-x-2">
                  <Settings className="w-4 h-4 text-accent" />
                  <span>Техническая поддержка</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-accent font-medium mb-4">Сообщество</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={links.discord} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span>Discord сервер</span>
                </a>
              </li>
              <li>
                <a href={links.social.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center space-x-2">
                  <Youtube className="w-4 h-4 text-primary" />
                  <span>YouTube канал</span>
                </a>
              </li>
              <li>
                <a href={links.social.forum} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Форум игроков</span>
                </a>
              </li>
              <li>
                <a href={links.internal.rules} className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center space-x-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Правила сервера</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Neverending Story. Неофициальный сервер по игре Vintage Story
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Текущий сезон: Открытая бета</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
