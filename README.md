# Lumen — сайт

Сайт [lumen.shusti.ru](https://lumen.shusti.ru): Astro 5 (статическая сборка), React-острова, Tailwind CSS 4, shadcn/ui, Motion.
Здесь только сайт; DMG выкладываются в Releases этого репозитория, `appcast.xml` для обновлений Lumen лежит в корне сайта.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/
```

Публикация — GitHub Actions (`.github/workflows/deploy.yml`) при каждом push в `main`.
Сторонние компоненты и их лицензии — в [CREDITS.md](CREDITS.md).
