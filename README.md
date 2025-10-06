# Neverending Story - Next.js Website

Современный веб-сайт для Vintage Story RP сервера "Neverending Story", созданный с использованием Next.js 15, TypeScript и Tailwind CSS.

## 🚀 Особенности

- **Next.js 15** с App Router и Turbopack
- **TypeScript** для типобезопасности
- **Tailwind CSS** для стилизации
- **shadcn/ui** компоненты
- **Адаптивный дизайн** для всех устройств
- **Оптимизированные изображения** с Next.js Image
- **SEO-оптимизация**
- **Плавная прокрутка** и анимации

## 📁 Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Глобальные стили
│   ├── layout.tsx         # Основной layout
│   └── page.tsx           # Главная страница
├── components/            # React компоненты
│   ├── ui/               # shadcn/ui компоненты
│   ├── figma/            # Кастомные компоненты
│   ├── header.tsx        # Шапка сайта
│   ├── hero-section.tsx  # Главная секция
│   ├── features-section.tsx
│   ├── how-to-join-section.tsx
│   ├── faq-section.tsx
│   ├── cta-section.tsx
│   ├── footer.tsx
│   └── lore-page.tsx     # Модальное окно с лором
├── config/               # Конфигурационные файлы
│   └── links.ts          # Конфигурация ссылок
├── hooks/                # React хуки
│   └── useLinks.ts       # Хук для работы с ссылками
└── lib/                  # Утилиты
    └── utils.ts          # Общие утилиты
```

## 🔧 Настройка

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена

```bash
npm run build
```

### Запуск продакшен версии

```bash
npm start
```

## 🎨 Кастомизация

### Цветовая схема

Цвета настраиваются в `src/app/globals.css` через CSS переменные:

```css
:root {
  --primary: #cd7f32;
  --accent: #b87333;
  --background: #1a1611;
  --foreground: #e8dcc6;
  /* ... другие цвета */
}
```

### Ссылки

Все ссылки настраиваются в `src/config/links.ts`:

```typescript
export const links = {
  discord: "https://discord.gg/your-server",
  external: {
    vintageStoryOfficial: "https://www.vintagestory.at/",
    // ... другие внешние ссылки
  },
  // ... другие категории ссылок
};
```

### Контент

Основной контент находится в компонентах в папке `src/components/`. Каждый компонент отвечает за свою секцию сайта.

## 📱 Компоненты

### Основные секции

- **Header** - Навигация и логотип
- **HeroSection** - Главная секция с призывом к действию
- **IntroductionSection** - Введение в мир сервера
- **FeaturesSection** - Особенности сервера
- **HowToJoinSection** - Инструкция по присоединению
- **FAQSection** - Часто задаваемые вопросы
- **CTASection** - Финальный призыв к действию
- **Footer** - Подвал с ссылками и информацией

### Модальные окна

- **LorePage** - Интерактивная страница с лором мира, включающая:
  - Хронологию событий
  - Галерею легендарных мест
  - Интерактивную карту
  - Легендарных героев

### UI компоненты

Используются компоненты из shadcn/ui:
- Button
- Badge
- Card
- Accordion
- Dialog
- Tabs
- ScrollArea
- Separator

## 🔗 Функциональность ссылок

Все кнопки и ссылки на сайте имеют реальную функциональность:

- **Discord кнопки** - открывают Discord сервер
- **Навигация** - плавно прокручивают к секциям
- **Внешние ссылки** - открываются в новых вкладках
- **Лор кнопки** - открывают модальное окно с историей

## 🎯 SEO и производительность

- Оптимизированные метаданные
- Оптимизированные изображения с Next.js Image
- Серверный рендеринг
- Ленивая загрузка компонентов
- Минификация CSS и JavaScript

## 🛠️ Технологии

- **Next.js 15** - React фреймворк
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS** - Utility-first CSS фреймворк
- **shadcn/ui** - Компоненты UI
- **Lucide React** - Иконки
- **class-variance-authority** - Управление вариантами стилей

## 📄 Лицензия

Этот проект создан для сервера "Neverending Story" и предназначен для некоммерческого использования.

## 🤝 Поддержка

Если у вас есть вопросы или предложения, обращайтесь в Discord сервер или создавайте issues в репозитории.