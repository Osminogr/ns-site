# Инструкции по развертыванию

## 🚀 Развертывание на Vercel (Рекомендуется)

### Автоматическое развертывание

1. Подключите репозиторий к Vercel
2. Vercel автоматически определит настройки Next.js
3. Развертывание произойдет автоматически

### Настройки переменных окружения

В Vercel Dashboard добавьте переменные окружения:

```env
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/your-server
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🌐 Развертывание на других платформах

### Netlify

1. Создайте файл `netlify.toml` в корне проекта:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Подключите репозиторий к Netlify
3. Настройте команды сборки:
   - Build command: `npm run build`
   - Publish directory: `.next`

### GitHub Pages

1. Добавьте в `package.json`:

```json
{
  "scripts": {
    "export": "next export"
  }
}
```

2. Создайте GitHub Action `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run export
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🔧 Локальная сборка

### Продакшен сборка

```bash
npm run build
npm start
```

### Экспорт статических файлов

```bash
npm run build
npm run export
```

Статические файлы будут в папке `out/`.

## 📝 Настройка домена

### Vercel

1. В Vercel Dashboard перейдите в Settings > Domains
2. Добавьте ваш домен
3. Настройте DNS записи согласно инструкциям Vercel

### Другие платформы

Настройте DNS записи для вашего домена, указав на IP адрес хостинга.

## 🔐 Безопасность

### HTTPS

Убедитесь, что сайт работает по HTTPS. Большинство современных платформ предоставляют SSL сертификаты автоматически.

### CSP Headers

Добавьте в `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
          }
        ]
      }
    ]
  }
}
```

## 📊 Мониторинг

### Vercel Analytics

1. В Vercel Dashboard включите Analytics
2. Добавьте в `_app.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
```

### Google Analytics

Добавьте в `_app.tsx`:

```typescript
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
```

## 🔄 Обновления

### Автоматические обновления

При использовании Vercel или Netlify обновления происходят автоматически при пуше в основную ветку.

### Ручные обновления

```bash
git pull origin main
npm install
npm run build
```

## 📱 Проверка после развертывания

1. Откройте сайт в разных браузерах
2. Проверьте на мобильных устройствах
3. Убедитесь, что все ссылки работают
4. Проверьте скорость загрузки с помощью PageSpeed Insights
5. Убедитесь, что изображения загружаются корректно

## 🐛 Отладка

### Проверка логов

- **Vercel**: Functions > View Function Logs
- **Netlify**: Site settings > Functions > View logs

### Локальная отладка продакшен сборки

```bash
npm run build
npm start
```

### Проверка производительности

```bash
npm run build
npm run analyze
```
