# Чужой код, шрифты и картинки на сайте

Всё перечисленное проверено на лицензию 24.10.2026. Остальное на сайте — своё (Shusti): тексты, вёрстка, Люмик (`src/assets/lumik*.svg`, копии `design/` из приложения), значок Lumen, картинка превью ссылок, скриншоты.

## Компоненты

| Компонент | Откуда | Лицензия | Как попал в проект |
|---|---|---|---|
| Bento Grid (`src/components/ui/bento-grid.tsx`) | Magic UI, автор Dillion Verma. На 21st.dev: https://21st.dev/@dillionverma/components/bento-grid | MIT (на странице 21st.dev и в [репозитории Magic UI](https://github.com/magicuidesign/magicui/blob/main/LICENSE.md)) | Из открытого реестра автора `https://magicui.design/r/bento-grid.json`. Через shadcn CLI не встал (его зависимость `button` CLI ищет на ui.shadcn.com, а он отсюда недоступен) — файл перенесён из того же JSON вручную. Изменён: без ссылки-действия, со значком «Pro»/«Скоро», цвет иконки фирменный |
| Border Beam (`src/components/ui/border-beam.tsx`) | Magic UI, автор Dillion Verma. На 21st.dev: https://21st.dev/@dillionverma/components/border-beam | MIT | `shadcn add https://magicui.design/r/border-beam.json` (с `REGISTRY_URL`, указывающим на копию реестра shadcn на GitHub) |
| Button, Badge (`src/components/ui/button.tsx`, `badge.tsx`) | shadcn/ui, https://github.com/shadcn-ui/ui (`apps/v4/registry/new-york-v4/ui`) | MIT | Исходники из репозитория shadcn/ui (так их и копирует CLI). В Button добавлены размеры `pill`, `pill-sm`, `pill-xs` |

Почему не напрямую с 21st.dev: с октября 2026 его реестр (`https://21st.dev/r/…`) отдаёт исходники только после входа в аккаунт — CLI получает `403 Authentication required`. Компоненты выбраны в каталоге 21st.dev, а код взят у авторов, из их открытых реестров, под той же лицензией.

## Библиотеки

| Пакет | Лицензия |
|---|---|
| astro 5.18, @astrojs/react 4.4 | MIT |
| react, react-dom 19 | MIT |
| tailwindcss, @tailwindcss/vite 4 | MIT |
| motion 12 | MIT |
| radix-ui | MIT |
| class-variance-authority | Apache-2.0 |
| clsx, tailwind-merge, tw-animate-css | MIT |
| lucide-react (иконки) | ISC |

## Шрифты

| Шрифт | Откуда | Лицензия |
|---|---|---|
| Unbounded (заголовки) | Fontsource, `@fontsource/unbounded` | SIL Open Font License 1.1 |
| Golos Text (текст) | Fontsource, `@fontsource/golos-text` | SIL Open Font License 1.1 |

Шрифты лежат на самом сайте: браузер не обращается к Google Fonts.

## Скриншоты

Сняты с тестовых окон Lumen: временная раскладка из системных приложений macOS, тестовая история буфера, своя фоновая картинка — без файлов и данных владельца. На них видны значки приложений Apple и Telegram — это товарные знаки их владельцев.
