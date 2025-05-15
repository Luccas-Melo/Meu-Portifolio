/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/bolt/**/*.{js,jsx,ts,tsx}"
  ],
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