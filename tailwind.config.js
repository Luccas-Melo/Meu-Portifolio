/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        purple: {
          500: '#8b5cf6',
        },
      },
    },
  },
  plugins: [],
};