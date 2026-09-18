# my-landing

Личный лендинг фронтенд-разработчика на Next.js (App Router).

🔗 **Прод:** [rodiondev.space](https://www.rodiondev.space/)

---

## Требования

| Инструмент | Версия | Зачем |
| --- | --- | --- |
| Node.js | **24.x LTS** | зафиксирована в `.nvmrc`, проверяется через `engines` |
| pnpm | **12.x** | зафиксирован в `packageManager`, лок-файл только pnpm |

Другие пакетные менеджеры не используем: в репозитории лежит `pnpm-lock.yaml`,
и `npm install` / `yarn` его сломают.

### Установка Node и pnpm

```bash
# Node нужной версии — возьмётся из .nvmrc
nvm install
nvm use

# pnpm
npm i -g pnpm@12
```

## Быстрый старт

```bash
git clone https://github.com/ZhRodion/my-landing.git
cd my-landing

nvm use          # переключиться на Node из .nvmrc
pnpm install     # поставить зависимости
pnpm dev         # дев-сервер
```

Открыть <http://localhost:3000>.

Переменные окружения проекту не нужны — `.env` заводить не надо.

> При первой установке pnpm может попросить разрешить postinstall-скрипты.
> Разрешённые пакеты уже перечислены в `pnpm-workspace.yaml` (`allowBuilds`),
> так что установка должна проходить без вопросов.

## Команды

| Команда | Что делает |
| --- | --- |
| `pnpm dev` | дев-сервер с HMR на <http://localhost:3000> |
| `pnpm build` | продакшен-сборка в `.next/` |
| `pnpm start` | поднять собранное приложение (нужен предварительный `pnpm build`) |
| `pnpm lint` | ESLint по всему проекту |
| `pnpm typecheck` | проверка типов без сборки |

Перед пушем полезно прогнать всё сразу:

```bash
pnpm lint && pnpm typecheck && pnpm build
```

## Структура

```
app/
  layout.tsx          корневой layout: шрифт, метаданные, <Header/>
  page.tsx            главная страница
  globals.css         импорт Tailwind + глобальные утилиты
  ui/
    header/           шапка с логотипом и кнопкой «Contact me»
    hero/             первый экран: фото + текст о себе
    techology/        секция «Technology stack»
    technology-slider/ слайдер с логотипами технологий (Swiper)
    modal/            модалка с контактами (MUI Modal)
public/
  images/             растровые картинки (hero, логотипы стека)
  svgs/               иконки и логотип
```

### Алиасы импортов

В `tsconfig.json` настроен `@/*`, который резолвится сразу в несколько папок:

```ts
import Hero from '@/hero/hero'        // app/ui/hero/hero
import Logo from '@/logo.svg'         // public/svgs/logo.svg
import Pic from '@/slider/git.png'    // public/images/slider/git.png
```

## Стек

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS 4** — вся вёрстка
- **MUI 9** + Emotion — только модалка контактов
- **Framer Motion** — анимации появления секций
- **Swiper** — слайдер технологий

## Что стоит знать по коду

### Два режима импорта SVG

Настроено в `next.config.mjs` через правила Turbopack:

```tsx
import Logo from '@/logo.svg'          // React-компонент (SVGR), инлайнится в разметку
import iconUrl from '@/modal/tg.svg?url' // строка с URL файла, для <Image src={iconUrl} />
```

Суффикс `?url` — не украшение: без него SVG превратится в компонент,
и `next/image` его не примет. Типы для обоих вариантов лежат в `svgr.d.ts`.

Те же правила продублированы для webpack, поэтому запасной режим
`pnpm build --webpack` (на случай бага в Turbopack) тоже рабочий.

### Тема Tailwind

Проект на Tailwind 4, но тема (цвета, брейкпоинты, размеры шрифтов)
пока описана по-старому — в `tailwind.config.ts`, который подключается
из `app/globals.css` директивой `@config`. Это поддерживаемый способ,
но при случае тему можно перенести в CSS-блок `@theme` и удалить конфиг.

Обрати внимание на нестандартные брейкпоинты: добавлен `s: 320px`,
а `lg` переопределён на `1023px` (вместо дефолтных 1024px).

### Линтер

`next lint` в Next 16 удалён — ESLint запускается напрямую,
конфигурация плоская (flat config) и лежит в `eslint.config.mjs`.

## Деплой

Рабочая ветка — `master`, прод живёт на [rodiondev.space](https://www.rodiondev.space/).

Сборка — обычная для Next.js: хостинг должен выполнить `pnpm install && pnpm build`
и запустить `pnpm start`. Версии Node и pnpm подхватываются из `engines`
и `packageManager` в `package.json`, отдельной настройки не требуют.
