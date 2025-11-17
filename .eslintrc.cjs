// .eslintrc.cjs

module.exports = {
  // Указываем, что это корневой файл конфигурации ESLint.
  root: true,

  // Определяем среду выполнения.
  env: {
    browser: true,
    es2020: true,
  },

  // Наследуем набор рекомендуемых правил.
  // 'eslint:recommended' - общие рекомендации.
  // 'plugin:react/recommended' - рекомендации для React.
  // 'plugin:react/jsx-runtime' - для нового JSX transform (без необходимости импортировать React).
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended", // <<< ВАЖНО: Активирует оба правила для хуков
  ],

  // Указываем парсер и его настройки (чтобы понимать синтаксис ES).
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  // Добавляем плагин для HMR от Vite, если нужно.
  plugins: [
    "react-refresh",
    "react-hooks", // Убеждаемся, что плагин для хуков подключен
  ],

  // Устанавливаем собственные правила или переопределяем унаследованные.
  rules: {
    // 1. ПРАВИЛА ХУКОВ (ВАШЕ РЕШЕНИЕ)
    // Эти правила уже будут активны благодаря 'plugin:react-hooks/recommended',
    // но мы их явно прописываем для контроля уровня предупреждения:
    "react-hooks/exhaustive-deps": "warn", // <<< ГАРАНТИРУЕТ ПРОВЕРКУ ЗАВИСИМОСТЕЙ
    "react-hooks/rules-of-hooks": "error",

    // 2. Дополнительные полезные правила для React:
    // Отключаем требование явного импорта React, так как Vite использует новый JSX transform.
    "react/react-in-jsx-scope": "off",
    // Устанавливаем версию React для линтера
    "react/prop-types": "off", // Обычно отключается при использовании TypeScript или PropTypes не используется
  },

  // Дополнительная настройка для плагина React
  settings: {
    react: {
      // Указываем линтеру автоматически определять версию React
      version: "detect",
    },
  },
};
