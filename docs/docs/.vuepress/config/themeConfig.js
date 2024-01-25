import { defaultTheme } from 'vuepress'

export default defaultTheme({
  repo: 'Voral/vs-vue3-select',
  editLinks: false,
  docsDir: 'docs',
  sidebar: {
    '/': [
      {
        text: 'Getting Started',
        collapsable: false,
        children: [
          { link: '/start/install/', text: 'Installation' },
          { link: '/start/options/', text: 'Dropdown Options' },
          { link: '/start/values/', text: 'Selecting Values' },
          { link: '/start/ts/', text: 'TypeScript and Types' },
        ],
      },
      {
        text: 'Templating & Styling',
        collapsable: false,
        children: [
          { link: '/styling/components/', text: 'Child Components' },
          { link: '/styling/css/', text: 'CSS Styling' },
          { link: '/styling/slots/', text: 'Slots Styling' },
        ],
      },
      {
        text: 'Accessibility',
        collapsable: false,
        children: [
          { link: '/accessibility/wai-aria/', text: 'WAI-ARIA Spec' },
          { link: '/accessibility/localization/', text: 'Localization' },
        ],
      },
      {
        text: 'Use Cases',
        collapsable: false,
        children: [
          { link: '/use-cases/validation/', text: 'Validation' },
          { link: '/use-cases/selectable/', text: 'Limiting Selections' },
          { link: '/use-cases/pagination/', text: 'Pagination' },
          { link: '/use-cases/infinite-scroll/', text: 'Infinite Scroll' },
          { link: '/use-cases/state-manager/', text: 'State manager' },
          { link: '/use-cases/ajax/', text: 'AJAX' },
          { link: '/use-cases/loops/', text: 'Using in Loops' },
          { link: '/use-cases/floating-label/', text: 'Floating Label' },
          { link: '/use-cases/tag-input/', text: 'Tag input' },
          { link: '/use-cases/routing/', text: 'Routing' },
          { link: '/use-cases/themes/', text: 'Theme Switcher' },
        ],
      },
      {
        text: 'Customizing',
        collapsable: false,
        children: [
          { link: '/customizing/keydown/', text: 'Keydown Events' },
          { link: '/customizing/positioning/', text: 'Dropdown Position' },
          { link: '/customizing/opening/', text: 'Dropdown Opening' },
          { link: '/customizing/filtering/', text: 'Option Filtering' },
        ],
      },
      {
        text: 'API',
        collapsable: false,
        children: [
          { link: '/api/props/', text: 'Props' },
          { link: '/api/slots/', text: 'Slots' },
          { link: '/api/events/', text: 'Events' },
        ],
      },
    ],
    '/ru/': [
      {
        text: 'Как начать',
        collapsable: false,
        children: [
          { link: '/ru/start/install/', text: 'Установка' },
          { link: '/ru/start/options/', text: 'Выпадающий список' },
          { link: '/ru/start/values/', text: 'Работа со значением' },
          { link: '/ru/start/ts/', text: 'TypeScript и типы' },
        ],
      },
      {
        text: 'Стилизация',
        collapsable: false,
        children: [
          { link: '/ru/styling/components/', text: 'Дочерние компоненты' },
          { link: '/ru/styling/css/', text: 'CSS стилизация' },
          { link: '/ru/styling/slots/', text: 'Стилизация слотами' },
        ],
      },
      {
        text: 'Доступность',
        collapsable: false,
        children: [
          {
            link: '/ru/accessibility/wai-aria/',
            text: 'Спецификация WAI-ARIA',
          },
          { link: '/ru/accessibility/localization/', text: 'Локализация' },
        ],
      },
      {
        text: 'Примеры',
        collapsable: false,
        children: [
          { link: '/ru/use-cases/validation/', text: 'Проверки' },
          { link: '/ru/use-cases/selectable/', text: 'Ограничение выбора' },
          { link: '/ru/use-cases/pagination/', text: 'Разбивка на страницы' },
          {
            link: '/ru/use-cases/infinite-scroll/',
            text: 'Бесконечная прокрутка',
          },
          { link: '/ru/use-cases/state-manager/', text: 'Менеджер состояний' },
          { link: '/ru/use-cases/ajax/', text: 'AJAX' },
          { link: '/ru/use-cases/loops/', text: 'Применение в циклах' },
          { link: '/ru/use-cases/floating-label/', text: 'Плавающая метка' },
          { link: '/ru/use-cases/tag-input/', text: 'Ввод тегов' },
          { link: '/ru/use-cases/routing/', text: 'Навигация' },
          { link: '/ru/use-cases/themes/', text: 'Переключатель тем' },
        ],
      },
      {
        text: 'Кастомизация',
        collapsable: false,
        children: [
          { link: '/ru/customizing/keydown/', text: 'События клавиатуры' },
          {
            link: '/ru/customizing/positioning/',
            text: 'Позиционирование списка',
          },
          { link: '/ru/customizing/opening/', text: 'Открытие списка' },
          { link: '/ru/customizing/filtering/', text: 'Фильтрация опций' },
        ],
      },
      {
        text: 'API',
        collapsable: false,
        children: [
          { link: '/ru/api/props/', text: 'Параметры' },
          { link: '/ru/api/slots/', text: 'Слоты' },
          { link: '/ru/api/events/', text: 'События' },
        ],
      },
    ],
  },
  locales: {
    '/': {
      selectLanguageName: 'English',
    },
    '/ru/': {
      selectLanguageName: 'Русский',
    },
  },
})
