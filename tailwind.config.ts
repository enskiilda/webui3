import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: 'var(--color-gray-50, #f9f9f9)',
          100: 'var(--color-gray-100, #f4f4f4)',
          200: 'var(--color-gray-200, #e3e3e3)',
          300: 'var(--color-gray-300, #cdcdcd)',
          400: 'var(--color-gray-400, #b4b4b4)',
          500: 'var(--color-gray-500, #9b9b9b)',
          600: 'var(--color-gray-600, #676767)',
          700: 'var(--color-gray-700, #4e4e4e)',
          800: 'var(--color-gray-800, #2e2e2e)',
          850: 'var(--color-gray-850, #262626)',
          900: 'var(--color-gray-900, #212121)',
          950: 'var(--color-gray-950, #181818)'
        }
      },
      padding: {
        'safe-bottom': 'env(safe-area-inset-bottom)'
      },
      transitionProperty: {
        width: 'width'
      }
    }
  },
  plugins: []
}

export default config
