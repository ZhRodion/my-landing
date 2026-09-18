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
  layout.tsx          подключение шрифтов, метаданные, каркас страницы
  page.tsx            главная: Hero → Stack → Contact
  globals.css         дизайн-токены (@theme), база, анимации появления
  icon.svg            фавикон, его же Next отдаёт в <link rel="icon">
  favicon.ico         тот же знак для браузеров без поддержки SVG-иконок
  ui/
    header/           липкая шапка: логотип, навигация, статус
    hero/             первый экран: имя, текст, фото, справка
    stack/            сетка технологий
    contact/          список каналов связи
    footer/           нижняя строка
public/
  images/             растровые картинки
  svgs/               иконки и логотип
```

### Алиасы импортов

В `tsconfig.json` настроен `@/*`, который резолвится сразу в несколько папок:

```ts
import Hero from '@/hero/hero'          // app/ui/hero/hero
import Logo from '@/logo.svg'           // public/svgs/logo.svg
import Icon from '@/modal/tg.svg?url'   // public/svgs/modal/tg.svg
```

## Стек

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS 4** — вся вёрстка и дизайн-токены

Прод-зависимостей ровно три: `next`, `react`, `react-dom`. Анимации,
сетки и эффекты сделаны на CSS, без UI-библиотек и рантайм-зависимостей.

## Дизайн

Тёмная тема, один холодный акцент, моноширинные подписи.
Все токены — в блоке `@theme` в `app/globals.css`:

| Группа | Токены |
| --- | --- |
| Фон | `--color-ink`, `--color-ink-elev` |
| Линии | `--color-line`, `--color-line-strong` |
| Текст | `--color-fg`, `--color-fg-dim`, `--color-fg-faint` |
| Акцент | `--color-accent` |
| Шрифты | `--font-display`, `--font-sans`, `--font-mono` |

Отдельного `tailwind.config.ts` нет — в Tailwind 4 тема описывается прямо в CSS.
Брейкпоинты стандартные, кастомных нет.

Шрифты грузятся через `next/font/google`: Bricolage Grotesque (заголовки),
Instrument Sans (текст), JetBrains Mono (подписи).

## Что стоит знать по коду

### Появление контента сделано на CSS, а не на JS

Классы `.reveal` (каскад при загрузке) и `.reveal-scroll` (привязка к прокрутке
через `animation-timeline: view()`) живут в `app/globals.css`.

Это не стилистический выбор, а требование: при анимациях на JS страница
остаётся пустой, если скрипты не доехали. У `.reveal-scroll` нет скрытого
состояния по умолчанию — там, где браузер не умеет `animation-timeline`,
блок просто сразу виден.

Оба класса отключаются при `prefers-reduced-motion`.

### Два режима импорта SVG

Настроено в `next.config.mjs` через правила Turbopack:

```tsx
import Logo from '@/logo.svg'           // React-компонент (SVGR), инлайнится в разметку
import iconUrl from '@/modal/tg.svg?url' // URL файла, для <Image src={iconUrl} />
```

Суффикс `?url` — не украшение: без него SVG превратится в компонент,
и `next/image` его не примет. Типы для обоих вариантов лежат в `svgr.d.ts`.

Те же правила продублированы для webpack, поэтому запасной режим
`pnpm build --webpack` (на случай бага в Turbopack) тоже рабочий.

### Логотип и иконки перекрашиваются фильтром

Исходники нарисованы в фирменных тёмно-синих и на почти-чёрном фоне
были бы не видны. Вместо правки SVG применяется `brightness-0 invert` —
`brightness(0)` гасит любые цвета в чёрный, `invert` поднимает результат
в белый. Работает независимо от того, что внутри файла: заливки, градиенты
или обводки.

### Линтер

`next lint` в Next 16 удалён — ESLint запускается напрямую,
конфигурация плоская (flat config) и лежит в `eslint.config.mjs`.

## Деплой

Рабочая ветка — `master`, прод живёт на [rodiondev.space](https://www.rodiondev.space/).

Сборка — обычная для Next.js: хостинг должен выполнить `pnpm install && pnpm build`
и запустить `pnpm start`. Версии Node и pnpm подхватываются из `engines`
и `packageManager` в `package.json`, отдельной настройки не требуют.
