# 🐳 Инструкции по запуску с Docker

## Предварительные требования

- Docker установлен и запущен ([Скачать Docker](https://www.docker.com/products/docker-desktop))
- Docker Compose установлен (входит в Docker Desktop)

## 🚀 Быстрый старт

### 1. Создайте файл с переменными окружения (опционально)

Создайте файл `.env` в корне проекта:

```env
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/your-server
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=production
```

### 2. Запустите приложение

```bash
# Сборка и запуск в фоновом режиме
docker-compose up -d

# Или с выводом логов
docker-compose up
```

Приложение будет доступно по адресу: http://localhost:3000

### 3. Остановите приложение

```bash
docker-compose down
```

## 📋 Доступные команды

### Сборка образа

```bash
# Пересобрать образ
docker-compose build

# Пересобрать без кэша
docker-compose build --no-cache
```

### Управление контейнерами

```bash
# Запуск
docker-compose up -d

# Остановка
docker-compose down

# Перезапуск
docker-compose restart

# Просмотр логов
docker-compose logs -f

# Просмотр статуса
docker-compose ps
```

### Очистка

```bash
# Остановить и удалить контейнеры, сети
docker-compose down

# Остановить и удалить контейнеры, сети и volumes
docker-compose down -v

# Удалить неиспользуемые образы
docker image prune -a
```

## 🔧 Использование только Docker (без Compose)

### Сборка образа

```bash
docker build -t neverending-story-nextjs .
```

### Запуск контейнера

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/your-server \
  -e NEXT_PUBLIC_SITE_URL=http://localhost:3000 \
  --name neverending-story-app \
  neverending-story-nextjs
```

### Остановка и удаление

```bash
docker stop neverending-story-app
docker rm neverending-story-app
```

## 🐛 Отладка

### Вход в запущенный контейнер

```bash
docker-compose exec web sh
```

### Просмотр логов

```bash
# Все логи
docker-compose logs

# Последние 100 строк с отслеживанием
docker-compose logs -f --tail=100 web
```

### Проверка состояния

```bash
# Проверить статус контейнера
docker-compose ps

# Проверить health check
docker inspect --format='{{json .State.Health}}' neverending-story-nextjs
```

## 📊 Оптимизация

### Многоступенчатая сборка

Dockerfile использует многоступенчатую сборку для минимизации размера образа:

1. **deps** - установка зависимостей
2. **builder** - сборка приложения
3. **runner** - финальный образ только с необходимыми файлами

### Размер образа

Ожидаемый размер образа: ~150-200 MB

Проверить размер:
```bash
docker images neverending-story-nextjs
```

## 🔐 Безопасность

### Непривилегированный пользователь

Контейнер запускается от имени пользователя `nextjs` (uid 1001), а не root.

### Health Check

Встроенная проверка работоспособности:
- Интервал: 30 секунд
- Timeout: 10 секунд
- Retries: 3

## 🌐 Развертывание в продакшене

### Docker Swarm

```bash
docker stack deploy -c docker-compose.yml neverending-story
```

### Kubernetes

Создайте Kubernetes манифесты на основе Dockerfile.

### Docker Hub

```bash
# Логин в Docker Hub
docker login

# Тегирование образа
docker tag neverending-story-nextjs username/neverending-story-nextjs:latest

# Публикация образа
docker push username/neverending-story-nextjs:latest
```

## 📝 Переменные окружения

| Переменная | Описание | По умолчанию |
|-----------|----------|-------------|
| `NEXT_PUBLIC_DISCORD_INVITE` | Ссылка на Discord сервер | `https://discord.gg/your-server` |
| `NEXT_PUBLIC_SITE_URL` | URL сайта | `http://localhost:3000` |
| `NODE_ENV` | Режим работы | `production` |
| `PORT` | Порт приложения | `3000` |

## 🔄 Обновление приложения

```bash
# Остановить контейнеры
docker-compose down

# Получить последние изменения
git pull

# Пересобрать и запустить
docker-compose up -d --build
```

## ⚡ Советы по производительности

1. **Используйте .dockerignore** - уже настроен для исключения ненужных файлов
2. **Кэширование слоев** - Docker кэширует слои для ускорения сборки
3. **Alpine Linux** - используется легковесный образ Node.js на Alpine
4. **Standalone режим** - Next.js собирается в standalone режиме для минимального размера

## 🆘 Частые проблемы

### Проблема: Контейнер не запускается

```bash
# Проверьте логи
docker-compose logs web

# Попробуйте пересобрать
docker-compose build --no-cache
docker-compose up
```

### Проблема: Порт 3000 уже занят

Измените порт в `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Используйте 3001 на хосте
```

### Проблема: Изображения не загружаются

Убедитесь, что в `next.config.ts` настроены правильные `remotePatterns` для изображений.

## 📚 Дополнительные ресурсы

- [Официальная документация Docker](https://docs.docker.com/)
- [Next.js с Docker](https://nextjs.org/docs/deployment#docker-image)
- [Docker Compose документация](https://docs.docker.com/compose/)

